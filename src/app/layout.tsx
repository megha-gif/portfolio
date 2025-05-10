import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Megha's Portfolio",
  description: "I’m a Frontend Landing Page Expert & Freelancer",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
