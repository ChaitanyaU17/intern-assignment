/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ContactModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  // Define validation schema
  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    phoneNumber: yup
      .string()
      .matches(/^\d+$/, "Phone Number must be numeric")
      .required("Phone Number is required"),
    email: yup
      .string()
      .email("Enter a valid email address")
      .required("Email is required"),
  });

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialData || {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    },
  });

  // Handle form submission
  const submitHandler = (data) => {
    onSubmit(data);
    reset(); // Reset form after submission
    onClose(); // Close modal
  };

  // Render only if modal is open
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{initialData ? "Edit Contact" : "Add Contact"}</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group">
            <label>First Name</label>
            <input
              {...register("firstName")}
              placeholder="Enter first name"
              className={errors.firstName ? "input-error" : ""}
            />
            {errors.firstName && <p className="error">{errors.firstName.message}</p>}
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              {...register("lastName")}
              placeholder="Enter last name"
              className={errors.lastName ? "input-error" : ""}
            />
            {errors.lastName && <p className="error">{errors.lastName.message}</p>}
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              {...register("phoneNumber")}
              placeholder="Enter phone number"
              className={errors.phoneNumber ? "input-error" : ""}
            />
            {errors.phoneNumber && <p className="error">{errors.phoneNumber.message}</p>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              {...register("email")}
              placeholder="Enter email"
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              {initialData ? "Save Changes" : "Add Contact"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
