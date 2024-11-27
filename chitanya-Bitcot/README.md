# Contact Management App

## Features:
- **Add Contact**: Add new contacts with validation for all fields.
- **Edit Contact**: Edit existing contacts with pre-filled details in a form.
- **Delete Contact**: Remove contacts from the list.
- **Search Contact**: Filter contacts by first name, last name, or phone number.
- **Responsive Design**: The app is designed to work well on both desktop and mobile devices.

## Technologies Used:
- React
- React Hooks (useState, useEffect)
- CSS for styling

## Setup and Installation

### 1. Clone the repository:

git clone https://github.com/ChaitanyaU17/intern-assignment.git

### 2. Install Dependencies:
cd contact-management-app
npm install

### 3. Start the Development Server:
npm run dev

This will run the app on `http://localhost:3000`.

## Structure of the App

### 1. **App Component**
The `App.js` component is the main component that holds the contacts' state and the handlers for adding, deleting, and editing contacts. It contains the `ContactsView` and `AddContact` components.

### 2. **ContactsView Component**
The `ContactsView.js` component displays the list of contacts in a table-like format. It allows users to:
- View a list of contacts with their first name, last name, phone number, and actions (Edit, Delete).
- Filter contacts by name or phone number using a search bar.

### 3. **AddContact Component**
The `AddContact.js` component provides a form to add new contacts. It includes:
- Input fields for first name, last name, and phone number.
- Validation to ensure all fields are filled before submitting.
- A button to add the contact to the contact list.

### 4. **EditContact Component**
The `EditContact.js` component is used to edit an existing contact's details. It includes:
- A form pre-filled with the contact's current details.
- Validation to ensure all fields are filled before submitting the updated details.
- A button to save the edited contact.

### 5. **CSS Styling**
CSS is used to style the components:
- Basic styles are applied to make the contact list look like a table with columns for name, phone, and actions.
- Buttons have basic styling for a better user experience.
- The form fields have validation error messages.

## How to Use

### Add a Contact:
1. Click the **"Add Contact"** button.
2. Fill out the form with the contact's first name, last name, and phone number.
3. Click **"Add Contact"** to add the contact to the list.

### Edit a Contact:
1. Find the contact you want to edit in the list.
2. Click the **"Edit"** button next to the contact.
3. Edit the contact details in the form.
4. Click **"Update Contact"** to save the changes.

### Delete a Contact:
1. Find the contact you want to delete in the list.
2. Click the **"Delete"** button next to the contact to remove it from the list.

### Search Contacts:
1. Use the **search bar** to filter contacts by first name, last name, or phone number.
