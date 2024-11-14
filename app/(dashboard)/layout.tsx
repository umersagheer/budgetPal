import Navbar from "@/components/navbar";
import React from "react";

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col relative h-screen w-full">
      <div className="w-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
