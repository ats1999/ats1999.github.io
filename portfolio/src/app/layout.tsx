import "./globals.css";
import { Inter } from "next/font/google";
import intro from "./config/intro.json";
import NavBar from "./components/header/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${intro.name} | ${intro.tagLine}`,
  description: intro.about,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="portfolio" className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
