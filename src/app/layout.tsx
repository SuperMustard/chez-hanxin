import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Chez Hanxin',
  description: 'this is my blog A',
};

interface RootLayoutProps {
  children: ReactNode;
};

export default function RootLayout({ children } : RootLayoutProps): JSX.Element{
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
};
