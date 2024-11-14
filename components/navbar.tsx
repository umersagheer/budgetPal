"use client";

import React from "react";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { ThemeSwitcherBtn } from "./toggle-theme";
import { UserButton } from "@clerk/nextjs";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}
const items = [
  {
    title: "Dashboard",
    href: "/",
  },
  {
    title: "Trnsactions",
    href: "/transaction",
  },
  {
    title: "Manage",
    href: "/manage",
  },
];

function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="block border-separate bg-background md:hidden">
        <nav className="container flex items-center justify-between px-8">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <SheetTitle>
                <Button variant={"ghost"} size={"icon"}>
                  <MenuIcon />
                </Button>
              </SheetTitle>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]" side={"left"}>
              <Logo />
              <div className="flex flex-col gap-1 pt-4 border-t mt-2">
                {items.map((item) => (
                  <NavbarItem
                    key={item.title}
                    href={item.href}
                    title={item.title}
                    clickCallback={() => setOpen((prev) => !prev)}
                  />
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2 h-[60px]">
            <Link href={"/"}>
              <Logo />
            </Link>
          </div>
          <div className="flex items-center gap-x-3">
            <ThemeSwitcherBtn />
            <UserButton />
          </div>
        </nav>
      </div>
    </>
  );
}

function DesktopNav() {
  return (
    <>
      <div className="hidden border-separate border-b bg-background md:block">
        <nav className="container flex items-center justify-between px-8">
          <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
            <Logo />
            <div className="flex h-full">
              {items.map((item) => (
                <NavbarItem
                  key={item.title}
                  href={item.href}
                  title={item.title}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <ThemeSwitcherBtn />
            <UserButton />
          </div>
        </nav>
      </div>
    </>
  );
}

function NavbarItem({
  title,
  href,
  clickCallback,
}: {
  title: string;
  href: string;
  clickCallback?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <div className="relative flex items-center">
      <Link
        href={href}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "text-muted-foreground hover:text-foreground text-base justify-start w-full",
          isActive && "text-foreground"
        )}
        onClick={() => clickCallback && clickCallback()}
      >
        {title}
      </Link>
    </div>
  );
}
