import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "../context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import { ScriptProps } from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Chez Hanxin',
  description: 'this is my blog A',
};

export default function RootLayout({ children } : ScriptProps): JSX.Element{
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
        <div className="container">
          <div className="wrapper">
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </div>
        </div>
        </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
};