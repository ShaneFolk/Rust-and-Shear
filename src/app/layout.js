import { Oswald, Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Rust & Shear",
    template: "%s | Rust & Shear",
  },
  description: "Book your next cut at Rust & Shear.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-offwhite font-body text-nearblack">
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
