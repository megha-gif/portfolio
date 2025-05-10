import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Megha's Portfolio",
  description: "I’m a Frontend Landing Page Expert & Freelancer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;family=Overpass:wght@100;200;300;400;500;600;family=Poppins:wght@100;200;300;400;500;600;family=Slabo+13px:wght@100;200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
