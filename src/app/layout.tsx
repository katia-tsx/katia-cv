import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";

const playfair = Playfair_Display({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Katia Nathaly Pujols Almanzar's Portfolio",
  description: 'Explore my interactive portfolio, showcasing innovative designs and projects that elevate user experience.',
  openGraph: {
    title: "Katia Nathaly Pujols Almanzar - Portfolio",
    description: 'Discover a collection of my creative work and design expertise that transforms ideas into reality.',
    url: "https://katia-tsx.vercel.app/", 
    siteName: "Katia Nathaly Pujols Almanzar's Portfolio",
    images: [
      {
        url: "/banner.png", // Cambia esto a la URL real de tu banner
        width: 1200,
        height: 630,
        alt: "Katia Nathaly Pujols Almanzar's Portfolio Banner",
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Katia Nathaly Pujols Almanzar - Portfolio",
    description: 'Explore my interactive portfolio, showcasing innovative designs and projects that elevate user experience.',
    images: ["/banner.png"], // Cambia esto a la URL real de tu banner
  },
  icons: {
    icon: '/dilza.png', // Favicon
    shortcut: '/dilza.png', // Favicon para acceso directo
    apple: '/dilza.png', // Favicon para dispositivos Apple
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.className} ${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
