// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "Slova Automations | Custom AI Agents for E-commerce",
  description: "We build custom AI agents for E-commerce stores that recover abandoned carts, provide 24/7 customer support, and put your growth on autopilot.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}