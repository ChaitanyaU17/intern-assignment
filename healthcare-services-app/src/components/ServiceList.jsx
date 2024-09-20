import React from "react";

const ServiceList = ({ services, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Service List</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <strong>{service.name}</strong>: {service.description} (${service.price})
            <button onClick={() => onEdit(index)}>Edit</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
