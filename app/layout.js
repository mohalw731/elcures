import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const menu_links = [
  { name: "OM OSS", href: "/om-oss" },
  { name: "VÅRA TJÄNSTER", href: "/tjanster" },
  { name: "CASE", href: "/case" },
  { name: "KONTAKT", href: "/kontakt" }, // Fixed typo in "KONTAKT"
];

const footerData = {
  contact: {
    email: "info@elcures.se",
    phone: "08-533 347 50",
  },
  socialLinks: [
    { name: "LinkedIn", href: "#", icon: "linkedin" },
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "Facebook", href: "#", icon: "facebook" },
  ],
  footerText: "© 2024 El Cures AB",
  callToAction: {
    heading: "Vill du veta mer?",
    buttonText: "Kontakta oss",
    buttonLink: "/kontakt",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar menu_links={menu_links} />
        {children}
        <Footer footerData={footerData} />
      </body>
    </html>
  );
}
