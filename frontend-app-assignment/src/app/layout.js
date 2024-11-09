import "./globals.css";
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Frontend-app',
  description: 'Assignment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
