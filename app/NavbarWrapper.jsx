'use client';

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from './Footer';

export default function NavbarWrapper({ children }) {
  const pathname = usePathname();
  if (pathname === "/") return <>{children}</>;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
