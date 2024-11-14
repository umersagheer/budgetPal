import Logo from "@/components/logo";
import React from "react";
export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-screen flex-col items-center justify-between p-4">
      <Logo />
      <div className="mt-6">{children}</div>
    </div>
  );
}
