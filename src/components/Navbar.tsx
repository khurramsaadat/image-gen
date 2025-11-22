"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";
import { 
  FaImage, 
  FaBars,
  FaTimes
} from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <FaImage className="text-white text-sm" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ImageGeneration</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="/#examples" className="text-muted-foreground hover:text-foreground transition-colors">Examples</a>
              <a href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
              <SignedOut>
                <SignInButton>
                  <Button variant="outline" size="sm">Sign In</Button>
                </SignInButton>
                <SignUpButton>
                  <Button size="sm">Get Started</Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8"
                    }
                  }}
                />
              </SignedIn>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-foreground hover:text-cyan-400 transition-colors p-2 relative w-8 h-8 flex items-center justify-center"
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-6 h-6">
                  {/* Animated Burger Icon */}
                  <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'
                  }`}></span>
                  <span className={`absolute left-0 top-2.5 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`absolute left-0 top-4 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div className="fixed inset-0 bg-background/98 backdrop-blur-lg">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-4 border-b border-border/40">
                  <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <FaImage className="text-white text-sm" />
                    </div>
                    <span className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ImageGeneration</span>
                  </Link>
                  <button
                    onClick={closeMobileMenu}
                    className="text-foreground hover:text-cyan-400 transition-colors p-2 relative w-8 h-8 flex items-center justify-center"
                  >
                    <div className="relative w-6 h-6">
                      <span className="absolute left-0 top-1 w-6 h-0.5 bg-current rotate-45 translate-y-2"></span>
                      <span className="absolute left-0 top-4 w-6 h-0.5 bg-current -rotate-45 -translate-y-2"></span>
                    </div>
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 flex flex-col justify-center items-center space-y-8 px-4">
                  <a 
                    href="/#examples" 
                    onClick={closeMobileMenu}
                    className="text-2xl font-semibold text-foreground hover:text-cyan-400 transition-all duration-300 animate-fade-in-up bg-muted/50 px-8 py-4 rounded-xl backdrop-blur-sm border border-border/30"
                  >
                    Examples
                  </a>
                  <a 
                    href="/#features" 
                    onClick={closeMobileMenu}
                    className="text-2xl font-semibold text-foreground hover:text-cyan-400 transition-all duration-300 animate-fade-in-up delay-100 bg-muted/50 px-8 py-4 rounded-xl backdrop-blur-sm border border-border/30"
                  >
                    Features
                  </a>
                  <Link 
                    href="/pricing" 
                    onClick={closeMobileMenu}
                    className="text-2xl font-semibold text-foreground hover:text-cyan-400 transition-all duration-300 animate-fade-in-up delay-200 bg-muted/50 px-8 py-4 rounded-xl backdrop-blur-sm border border-border/30"
                  >
                    Pricing
                  </Link>
                  
                  {/* Mobile Auth Buttons */}
                  <div className="flex flex-col gap-4 mt-8 animate-fade-in-up delay-300">
                    <SignedOut>
                      <SignInButton>
                        <Button variant="outline" size="lg" className="w-48" onClick={closeMobileMenu}>
                          Sign In
                        </Button>
                      </SignInButton>
                      <SignUpButton>
                        <Button size="lg" className="w-48 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700" onClick={closeMobileMenu}>
                          Get Started
                        </Button>
                      </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                      <Link href="/dashboard" onClick={closeMobileMenu}>
                        <Button size="lg" className="w-48 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                          Dashboard
                        </Button>
                      </Link>
                      <div className="flex justify-center">
                        <UserButton 
                          appearance={{
                            elements: {
                              avatarBox: "w-12 h-12"
                            }
                          }}
                        />
                      </div>
                    </SignedIn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
