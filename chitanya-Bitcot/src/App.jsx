import { useState } from "react";
import ContactsView from "./components/ContactsView";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
    setShowAddModal(false); 
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditingContact(null);
  };

  const startEditing = (contact) => {
    setEditingContact(contact);
  };

  return (
    <div className="app">
      <h1>All Contacts</h1>
      <ContactsView
        contacts={contacts}
        onDelete={deleteContact}
        onEdit={startEditing}
      />
      <button onClick={() => setShowAddModal(true)}>Add Contact</button>

      {showAddModal && (
        <AddContact onAdd={addContact} onCancel={() => setShowAddModal(false)} />
      )}

      {editingContact && (
        <EditContact
          contact={editingContact}
          onSave={updateContact}
          onCancel={() => setEditingContact(null)}
        />
      )}
    </div>
  );
};

export default App;
