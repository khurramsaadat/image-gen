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
              <div className="w-8 h-8 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <FaImage className="text-white text-sm" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ImageAI</span>
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
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-r from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-indigo-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-emerald-400 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-40 left-20 w-5 h-5 bg-indigo-400 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-teal-400 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-200"></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-800"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-6 bg-linear-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300">
              <MdAutoAwesome className="mr-1 animate-spin-slow" />
              Powered by GPT-4 Vision
            </Badge>
          </div>
          
          <div className="animate-fade-in-up delay-200">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
              Transform Your Images with AI Magic
            </h1>
          </div>
          
          <div className="animate-fade-in-up delay-400">
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Turn any photo into stunning Ghibli-style artwork or action-packed illustrations. 
              Professional AI image transformation in seconds.
            </p>
          </div>
          
          <div className="animate-fade-in-up delay-600">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                <FaRocket className="mr-2" />
                Start Creating
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transform hover:scale-105 transition-all duration-300">
                <FaPlay className="mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Enhanced Hero Image Showcase */}
          <div className="animate-fade-in-up delay-800">
            <div className="relative max-w-5xl mx-auto">
              {/* Floating decoration elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-linear-to-r from-emerald-400 to-teal-500 rounded-full animate-float opacity-60"></div>
              <div className="absolute -top-4 -right-8 w-8 h-8 bg-linear-to-r from-indigo-400 to-purple-500 rounded-full animate-float delay-300 opacity-60"></div>
              <div className="absolute -bottom-6 -left-8 w-10 h-10 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full animate-float delay-700 opacity-60"></div>
              <div className="absolute -bottom-4 -right-6 w-6 h-6 bg-linear-to-r from-teal-400 to-emerald-500 rounded-full animate-float delay-1000 opacity-60"></div>
              
              <div className="bg-linear-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl p-8 border border-cyan-500/20 backdrop-blur-sm shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:scale-[1.02]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  {/* Original Image */}
                  <div className="group">
                    <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl aspect-square flex items-center justify-center border border-slate-700 transform group-hover:scale-105 transition-all duration-300 shadow-lg">
                      <div className="text-center">
                        <div className="relative">
                          <MdPhotoCamera className="text-5xl text-slate-400 mb-3 mx-auto animate-pulse" />
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
                        </div>
                        <p className="text-sm text-slate-400 font-medium">Original Photo</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow with animation */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <FaArrowRight className="text-3xl text-cyan-400 animate-pulse" />
                      <div className="absolute inset-0 text-3xl text-cyan-400 animate-ping opacity-30">
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Transformed */}
                  <div className="group">
                    <div className="bg-linear-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-xl aspect-square flex items-center justify-center border border-cyan-500/40 transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
                      <div className="text-center">
                        <div className="relative">
                          <FaMagic className="text-5xl text-cyan-400 mb-3 mx-auto animate-bounce" />
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-400 rounded-full animate-ping"></div>
                          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-teal-400 rounded-full animate-ping delay-300"></div>
                        </div>
                        <p className="text-sm text-cyan-300 font-medium">AI Transformed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Stats or features below */}
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div className="animate-fade-in-up delay-1000">
                    <div className="text-2xl font-bold text-cyan-400">2.5s</div>
                    <div className="text-xs text-muted-foreground">Avg Process Time</div>
                  </div>
                  <div className="animate-fade-in-up delay-1200">
                    <div className="text-2xl font-bold text-emerald-400">4K</div>
                    <div className="text-xs text-muted-foreground">HD Quality</div>
                  </div>
                  <div className="animate-fade-in-up delay-1400">
                    <div className="text-2xl font-bold text-indigo-400">99%</div>
                    <div className="text-xs text-muted-foreground">Satisfaction</div>
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
              <div className="w-8 h-8 bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <FaImage className="text-white text-sm" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ImageAI</span>
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
