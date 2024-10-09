import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"

const playfair = Playfair_Display({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Katia Nathaly Pujols Almanzar's Portfolio",
  description: 'Interactive portfolio showcasing the work of Katia Nathaly Pujols Almanzar',
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