// import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layouts/Header";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Ordinal Pizza Og",
  description: `Ordinal Pizza Og celebrates the art of pizza making. Explore
                  recipes, share creations, and connect with fellow enthusiasts.
                  Whether you’re a beginner or an expert, there’s something for
                  everyone to enjoy`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-black/90 bg-blend-overlay bg-cover bg-center antialiased bg-fixed`}
        style={{ backgroundImage: "url(/assets/images/bg-image.jpeg)" }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
