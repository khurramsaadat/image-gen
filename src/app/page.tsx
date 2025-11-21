import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  FaImage, 
  FaMagic, 
  FaRocket, 
  FaShieldAlt, 
  FaStar, 
  FaArrowRight,
  FaPlay,
  FaCheck
} from "react-icons/fa";
import { 
  MdAutoAwesome, 
  MdPhotoCamera, 
  MdBrush, 
  MdSpeed 
} from "react-icons/md";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <FaImage className="text-white text-sm" />
              </div>
              <span className="text-xl font-bold">ImageAI</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">Examples</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
              <Button variant="outline" size="sm">Sign In</Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            <MdAutoAwesome className="mr-1" />
            Powered by GPT-4 Vision
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Transform Your Images with AI Magic
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Turn any photo into stunning Ghibli-style artwork or action-packed illustrations. 
            Professional AI image transformation in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              <FaRocket className="mr-2" />
              Start Creating
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <FaPlay className="mr-2" />
              Watch Demo
            </Button>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <MdPhotoCamera className="text-4xl text-muted-foreground mb-2 mx-auto" />
                    <p className="text-sm text-muted-foreground">Original Photo</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <FaArrowRight className="text-2xl text-muted-foreground" />
                </div>
                <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-lg aspect-square flex items-center justify-center border border-purple-500/30">
                  <div className="text-center">
                    <FaMagic className="text-4xl text-purple-400 mb-2 mx-auto" />
                    <p className="text-sm text-purple-300">AI Transformed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced image transformation capabilities powered by cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-linear-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <MdBrush className="text-white text-xl" />
                </div>
                <CardTitle>Ghibli Style Transform</CardTitle>
                <CardDescription>
                  Convert your photos into beautiful Studio Ghibli-inspired artwork with magical details and dreamy aesthetics.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-linear-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <FaRocket className="text-white text-xl" />
                </div>
                <CardTitle>Action-Packed Style</CardTitle>
                <CardDescription>
                  Transform portraits into dynamic action figures with explosive backgrounds and heroic poses.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <MdSpeed className="text-white text-xl" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Get professional-quality results in seconds. No waiting, no complex editing required.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <FaShieldAlt className="text-white text-xl" />
                </div>
                <CardTitle>Privacy First</CardTitle>
                <CardDescription>
                  Your images are processed securely and never stored. Complete privacy guaranteed.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-linear-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <FaStar className="text-white text-xl" />
                </div>
                <CardTitle>HD Quality</CardTitle>
                <CardDescription>
                  Generate high-resolution images perfect for printing, social media, or professional use.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-linear-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <MdAutoAwesome className="text-white text-xl" />
                </div>
                <CardTitle>Smart AI</CardTitle>
                <CardDescription>
                  Powered by GPT-4 Vision for intelligent image understanding and artistic transformation.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform your images in just 3 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Upload Your Image</h3>
              <p className="text-muted-foreground">
                Simply drag and drop or click to upload any photo from your device
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Choose Your Style</h3>
              <p className="text-muted-foreground">
                Select from Ghibli-style artwork or action-packed transformations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Download & Share</h3>
              <p className="text-muted-foreground">
                Get your transformed image in HD quality, ready to share or print
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-purple-600/20 to-pink-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Images?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using AI to bring their images to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Input 
              placeholder="Enter your email address" 
              className="max-w-sm"
            />
            <Button size="lg" className="px-8">
              Get Started Free
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>5 free transformations</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <FaImage className="text-white text-sm" />
              </div>
              <span className="text-xl font-bold">ImageAI</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-muted-foreground">
            <p>&copy; 2024 ImageAI. All rights reserved. Powered by GPT-4 Vision.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
