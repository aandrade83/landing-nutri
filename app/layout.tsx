import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XIII Jornada de Nutrición Clínica — UCR",
  description:
    "Manejo Nutricional de la Nefropatía y la Prevención de la Nefropatía Diabética. Material educativo de acceso restringido.",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
