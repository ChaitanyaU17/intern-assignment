/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be 10 digits"),
});

const EditContact = ({ contact, onSave, onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: contact,
  });

  const onSubmit = (data) => {
    onSave({ ...contact, ...data });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Contact</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>First Name</label>
          <input {...register("firstName")} />
          <p className="error">{errors.firstName?.message}</p>

          <label>Last Name</label>
          <input {...register("lastName")} />
          <p className="error">{errors.lastName?.message}</p>

          <label>Phone</label>
          <input {...register("phone")} />
          <p className="error">{errors.phone?.message}</p>

          <div className="modal-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
