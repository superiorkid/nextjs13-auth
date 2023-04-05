import Container from "./components/Container";
import Navbar from "./components/navbars/Navbar";
import { Roboto } from "next/font/google";
import ToastProvider from "@/app/providers/ToastProvider";

import "./globals.css";
import getCurrentUser from "@/app/actions/getCurrentUser";

export const metadata = {
  title: "Nextjs13 Auth",
  description: "Implement Next-Auth using nextjs13 app directory",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <ToastProvider />
        <Container>
          <Navbar currentUser={currentUser} />
          <div>{children}</div>
        </Container>
      </body>
    </html>
  );
}
