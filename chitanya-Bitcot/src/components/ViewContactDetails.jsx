/* eslint-disable react/prop-types */

const ViewContactDetails = ({ contact, onClose }) => (
  <div>
    <h2>Contact Details</h2>
    <p>First Name: {contact.firstName}</p>
    <p>Last Name: {contact.lastName}</p>
    <p>Phone Number: {contact.phoneNumber}</p>
    <button onClick={onClose}>Close</button>
  </div>
);

export default ViewContactDetails;
