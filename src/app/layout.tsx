import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = { title: "SupportIQ", description: "AI customer support operations dashboard" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-[#080b14]">
          <Sidebar />
          <main className="ml-64 min-h-screen p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
