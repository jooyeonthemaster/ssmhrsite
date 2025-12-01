"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Business", href: "#services" },
    { name: "Platform", href: "#platform" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent",
        isScrolled || mobileMenuOpen
          ? "bg-white/80 backdrop-blur-xl border-slate-200/50 py-4"
          : "bg-transparent py-6"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className={cn(
                "font-black text-2xl tracking-tighter transition-colors",
                isScrolled || mobileMenuOpen ? "text-brand-navy" : "text-white"
              )}
            >
              SSMHR
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide hover:opacity-70 transition-opacity uppercase",
                  isScrolled ? "text-slate-900" : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant={isScrolled ? "primary" : "outline"}
              className={cn(
                "rounded-full px-6 font-semibold transition-all",
                !isScrolled && "border-white text-white hover:bg-white hover:text-brand-navy"
              )}
              onClick={() => window.location.href = "tel:031-217-5997"}
            >
              Get in Touch
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu
                className={cn(
                  "w-6 h-6",
                  isScrolled ? "text-slate-900" : "text-white"
                )}
              />
            )}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-8 animate-in slide-in-from-top-5">
            <Container>
              <nav className="flex flex-col gap-6 items-center text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-bold text-slate-900 hover:text-brand-blue transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                 <Button 
                  className="w-full max-w-xs rounded-full mt-4" 
                  onClick={() => window.location.href = "tel:031-217-5997"}
                >
                    상담 문의하기
                 </Button>
              </nav>
            </Container>
          </div>
        )}
      </Container>
    </header>
  );
}
