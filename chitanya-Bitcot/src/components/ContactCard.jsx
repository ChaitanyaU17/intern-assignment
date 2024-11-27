/* eslint-disable react/prop-types */

const ContactCard = ({ contact, onDelete, onEdit, onView }) => (
  <li>
    <h3>
      {contact.firstName} {contact.lastName}
    </h3>
    <p>{contact.phoneNumber}</p>
    <button onClick={onEdit}>Edit</button>
    <button onClick={() => onDelete(contact.id)}>Delete</button>
    <button onClick={onView}>View</button>
  </li>
);

export default ContactCard;
