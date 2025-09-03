"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Mission", href: "/#mission" },
  { name: "Projects", href: "/#projects" },
  { name: "Impact", href: "/#impact" },
  { name: "Gallery", href: "/gallery" },
  { name: "Volunteer", href: "/volunteer" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <HandHeart className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline sm:inline-block">
              Hope of Faith Foundation
            </span>
          </Link>
          <nav className="hidden gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-foreground/60 transition-colors hover:text-foreground/80"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild>
            <Link href="/#get-involved">Donate</Link>
          </Button>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="border-b pb-4">
                <SheetTitle>
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                    <HandHeart className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">Hope of Faith Foundation</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                       onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
