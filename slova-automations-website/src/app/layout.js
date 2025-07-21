// src/app/layout.js
import "./globals.css";

// --- UPGRADED METADATA ---
export const metadata = {
  title: "Slova Automations | Custom AI Agents for E-commerce & More",
  description: "We build robust, intelligent systems to automate your sales, support, and growth. Specializing in solutions for E-commerce, Real Estate, and SaaS.",
  metadataBase: new URL('https://slovaautomations.com'), // <-- IMPORTANT: Replace with your final domain
  openGraph: {
    title: "Slova Automations | Put Your Growth on Autopilot",
    description: "Specializing in building custom AI agents to save you time and increase revenue.",
    url: 'https://slovaautomations.com',
    siteName: 'Slova Automations',
    // Add an image for social sharing (e.g., your logo on a nice background)
    // Create a 1200x630px image and place it in the /public folder
    images: [
      {
        url: '/1200x630.png', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}