
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// SEO Metadata
export const metadata: Metadata = {
  title: "Hugo Herrera - Entrenador de Ventas Especializado",
  description: "Enlaces oficiales y recursos de Hugo Herrera, Entrenador de Ventas Especializado. Accede a libros, redes sociales y contacto directo.",
  keywords: ["Hugo Herrera", "Coach de Ventas", "Entrenador de Ventas", "Cerrador Experto", "Líder Experto", "Ventas", "Negocios", "Linktree"],
  authors: [{ name: "Hugo Herrera" }],
  // Add Open Graph and Twitter card metadata for better social sharing
  openGraph: {
    title: "Hugo Herrera - Entrenador de Ventas Especializado",
    description: "Enlaces oficiales y recursos de Hugo Herrera.",
    url: "https://your-deployed-url.com", // Replace with actual deployed URL later
    siteName: "Hugo Herrera Links",
    images: [
      {
        url: "/hugo-avatar.jpg", // Path to your avatar image in public folder
        width: 400,
        height: 400,
        alt: "Hugo Herrera Avatar",
      },
    ],
    locale: "es_PE", // Specify locale if applicable
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Hugo Herrera - Entrenador de Ventas Especializado",
    description: "Enlaces oficiales y recursos de Hugo Herrera.",
    // creator: "@hugoherreracoach", // Add Twitter handle if available
    images: ["/hugo-avatar.jpg"], // Must be an absolute URL in production, but relative works for Vercel
  },
  // Add viewport for responsive design (though Next.js usually handles this)
  viewport: "width=device-width, initial-scale=1",
  // Optional: Add favicon link here if you have one in the public folder
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Add lang attribute for accessibility and SEO
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

