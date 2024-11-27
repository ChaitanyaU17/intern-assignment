/* eslint-disable react/prop-types */

import "./ContactsView.css";
import { useState } from "react";

const ContactsView = ({ contacts, onDelete, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contacts.filter((contact) => {
    const term = searchTerm.toLowerCase();

    if (!contact) {
      <span>No contacts Added</span>;
    }
    return (
      contact.firstName.toLowerCase().includes(term) ||
      contact.lastName.toLowerCase().includes(term) ||
      contact.phone.includes(term)
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searchbar"
      />
      <div className="contacts-container">
        <div className="contacts-header">
          <span>SR NO.</span>
          <span>Name</span>
          <span>Phone Number</span>
          <span>Actions</span>
        </div>
        {filteredContacts.length > 0 ? (
          <ul>
            {filteredContacts.map((contact, index) => (
              <li key={contact.id} className="contacts-row">
                <span>{index + 1}</span>
                <span>
                  {contact.firstName} {contact.lastName}
                </span>
                <span>{contact.phone}</span>
                <div className="contacts-actions">
                  <button
                    className="button"
                    onClick={() => onDelete(contact.id)}
                  >
                    Delete
                  </button>
                  <button className="button" onClick={() => onEdit(contact)}>
                    Edit
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-contacts">No contacts found!</p>
        )}
      </div>
    </div>
  );
};

export default ContactsView;
