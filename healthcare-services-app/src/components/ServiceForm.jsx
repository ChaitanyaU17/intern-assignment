/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const ServiceForm = ({ addService, serviceToEdit, updateService }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (serviceToEdit) {
      setName(serviceToEdit.name);
      setDescription(serviceToEdit.description);
      setPrice(serviceToEdit.price);
    }
  }, [serviceToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      const newService = { name, description, price: parseFloat(price) };
      if (serviceToEdit) {
        updateService(newService);
      } else {
        addService(newService);
      }
      setName("");
      setDescription("");
      setPrice("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{serviceToEdit ? "Update Service" : "Add New Service"}</h2>
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">{serviceToEdit ? "Update" : "Add"}</button>
    </form>
  );
};

export default ServiceForm;
