import Link from "next/link";
import { FaImage, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-border/40 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Brand and Social Media */}
        <div className="mb-12">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <FaImage className="text-white text-sm" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ImageGeneration</span>
          </Link>
          <p className="text-sm text-muted-foreground mb-6 max-w-md">
            Transform your photos into stunning AI-generated artwork with the power of advanced machine learning.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex gap-4 mb-8">
            <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 cursor-pointer">
              <FaTwitter className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 cursor-pointer">
              <FaLinkedin className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-pink-500/20 hover:text-pink-400 transition-all duration-300 cursor-pointer">
              <FaInstagram className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-gray-500/20 hover:text-gray-400 transition-all duration-300 cursor-pointer">
              <FaGithub className="text-lg" />
            </a>
          </div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Product */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#examples" className="hover:text-foreground transition-colors">Examples</a></li>
                <li><a href="/#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link href="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Partners</a></li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Bug Reports</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">GDPR</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            <p>&copy; 2025 ImageGeneration. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Made with ❤️ for creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
