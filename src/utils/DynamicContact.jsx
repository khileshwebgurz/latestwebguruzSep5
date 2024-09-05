"use client"
import { usePathname } from "next/navigation";
import Contact from "@/components/homeComponents/11HomeContact";

export default function DynamicContact() {
  const pathname = usePathname();

  // Check if the current path is '/contact-us'
  if (pathname === "/contact-us") {
    return null; // Don't render the Contact component if on the contact page
  }

  return <Contact />;
}
