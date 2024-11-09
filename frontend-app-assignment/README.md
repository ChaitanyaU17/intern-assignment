
```markdown
# Next.js Firebase Authentication App

This project is a Next.js application that uses Firebase for authentication, including login and signup functionality. The app fetches and displays posts from an API and allows users to view individual posts, with a fully responsive design and a dark theme.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Running the App](#running-the-app)
- [Available Scripts](#available-scripts)

## Features

- **User Authentication**: Signup and login functionality using Firebase.
- **Posts Display**: Fetches and displays posts from JSONPlaceholder API.
- **Responsive Design**: Styled with Tailwind CSS and optimized for all screen sizes.
- **Dark Theme**: Dark theme applied throughout the app.
- **Logout Functionality**: Secure logout, clearing authentication tokens.

## Technologies

- **Next.js**: Framework for building React applications with server-side rendering.
- **Firebase**: Used for authentication (signup, login).
- **React Hooks**: `useState`, `useEffect`, etc., for managing state and side effects.
- **Axios**: For making HTTP requests.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **react-hot-toast**: Library for user notifications and toasts.

## Setup

To set up the project on your local machine, follow these steps:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Go to **Project Settings** > **General** > **Your apps** to add a web app.
   - Copy your Firebase configuration and add it to your `.env.local` file (see [Environment Variables](#environment-variables) below).

     ```

4. **Run the app**
   ```bash
   npm run dev
   ```
   - The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
/app
├── /posts          # Posts page
│   └── page.js     # Fetch and display posts
├── /auth           # Authentication pages
│   ├── login.js    # Login page
│   └── signup.js   # Signup page
/public              # Public assets (images, icons, etc.)
/styles              # Global and component-specific styles
firebase.js          # Firebase configuration and setup
```

## Running the App

After completing setup and environment variables configuration:

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

3. Use the **Sign Up** and **Login** pages to create or access your account.

4. Once logged in, navigate to the **Posts** page to view a list of posts fetched from the JSONPlaceholder API. You can log out using the **Logout** button in the header.

## Available Scripts

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts the server for production use.
- `npm run lint`: Runs the linter to identify and fix issues.

## Environment Variables

Make sure to create a `.env.local` file in the root of the project with your Firebase project configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## Acknowledgements

This app uses data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the posts section.
```
