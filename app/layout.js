import { AuthProvider } from "./Providers";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from 'sonner';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Young Ceo Entertainment!",
  description: "Designed & Developed by YCE Tech Team With !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Toaster position="top-center" />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
