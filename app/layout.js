import "./globals.css";

export const metadata = {
  title: "Bon Beaute Skin & Medical Clinic",
  description: "Advanced Skin & Aesthetic Treatments in DHA Lahore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
