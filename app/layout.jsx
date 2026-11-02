import "./globals.css";

export const metadata = {
  title: "Don Bosco Canteen Order System",
  description: "Online ordering system for Don Bosco Canteen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
