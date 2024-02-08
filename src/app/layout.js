import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/header";
import Provider from "../components/provider/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MY GUIDE",
  description: "jobs and information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
          <main className="app">
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
