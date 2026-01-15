import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "AyMiPlata - Tu Guía Financiera Personal",
  description: "Blog sobre finanzas personales en español.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased font-sans bg-white text-zinc-900">
        <Navigation />
        {children}
        <footer className="bg-zinc-900 text-white py-12 text-center mt-20">
          <p>&copy; 2026 AyMiPlata. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}