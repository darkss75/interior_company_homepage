"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, 
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold gold-text">
            디자인크림 인테리어 <span className="hidden sm:inline">DESIGN CREAM</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <DesktopNav />
          <ContactButton />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center lg:hidden">
          <a href="tel:010-6276-5219" className="mr-4">
            <Button variant="ghost" size="icon" className="text-primary hover:text-primary hover:bg-primary/10">
              <Phone size={20} />
            </Button>
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

const DesktopNav = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              회사소개
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
              문의하기
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ContactButton = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="hidden md:block text-right">
        <p className="text-sm text-muted-foreground">상담 문의</p>
        <p className="font-bold gold-text">010-6276-5219</p>
      </div>
      <Button className="bg-primary hover:bg-primary/90 text-white">
        <Link href="/contact" className="flex items-center">
          상담 신청
        </Link>
      </Button>
    </div>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-primary hover:text-primary hover:bg-primary/10">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-8 mt-2">
            <Link href="/" className="text-xl font-bold gold-text">
              디자인크림 인테리어
            </Link>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <X size={24} />
              </Button>
            </SheetTrigger>
          </div>
          
          <nav className="flex flex-col space-y-5 mb-8">
            <Link href="/" className="text-lg hover:text-primary transition-colors">
              홈
            </Link>
            <Link href="/about" className="text-lg hover:text-primary transition-colors">
              회사소개
            </Link>
            <Link href="/contact" className="text-lg hover:text-primary transition-colors">
              문의하기
            </Link>
          </nav>
          
          <div className="mt-auto mb-6">
            <div className="flex flex-col space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">상담 문의</p>
                <a href="tel:010-6276-5219" className="font-bold text-lg gold-text block">
                  010-6276-5219
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">이메일</p>
                <a href="mailto:laillic@naver.com" className="gold-text block">
                  laillic@naver.com
                </a>
              </div>
              <Link href="/contact" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  상담 신청하기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Header;