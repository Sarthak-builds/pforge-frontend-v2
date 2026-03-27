"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Layers, Trophy, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-slate-50 selection:bg-primary/30 overflow-hidden font-sans">
      {/* Immersive Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        
        {/* Navigation / Header */}
        <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center font-bold text-white shadow-lg">
              PF
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">Portfolio Forge</span>
          </div>
          <div className="flex gap-4 items-center">
            <Button variant="ghost" className="text-slate-300 hover:text-white hidden sm:flex">Log In</Button>
            <Button className="bg-white text-black hover:bg-slate-200">Start Forging</Button>
          </div>
        </nav>

        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center text-center space-y-8 max-w-4xl w-full mt-10"
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 backdrop-blur-md mb-4">
            <Sparkles className="w-4 h-4" />
            <span>The new way to discover developer talent</span>
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Swipe, Rate. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400">
              Discover Portfolios.
            </span>
          </motion.h1>

          <motion.p variants={fadeIn} className="text-xl sm:text-2xl text-slate-400 max-w-2xl font-light">
            Gamified portfolio discovery for developers, designers, and creators. Showcase your work, get ranked, and stand out.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-8 w-full sm:w-auto justify-center">
            <Button size="lg" className="h-14 px-8 text-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] transition-all">
              Start Exploring <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
              Submit Your Portfolio
            </Button>
          </motion.div>
        </motion.div>

        {/* Interactive / Visual Representation Stack */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-24 relative w-full max-w-5xl h-[400px] flex justify-center items-center perspective-1000"
        >
          {/* Card Stack Illustration */}
          <div className="relative w-80 sm:w-96 aspect-[3/4] z-30 transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 ease-out cursor-pointer group">
            <div className="absolute inset-0 bg-slate-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-full h-40 bg-slate-800 rounded-xl mb-4 overflow-hidden relative group-hover:scale-[1.02] transition-transform">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
                <div className="h-6 w-3/4 bg-slate-800 rounded-md"></div>
                <div className="h-4 w-1/2 bg-slate-800 rounded-md"></div>
                <div className="flex gap-2 mt-4">
                  <div className="h-6 w-16 bg-indigo-500/20 text-indigo-400 text-xs flex items-center justify-center rounded-full">React</div>
                  <div className="h-6 w-20 bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center rounded-full">Next.js</div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-white/5">
                <div className="h-8 w-8 rounded-full bg-slate-700"></div>
                <div className="flex gap-2">
                  <div className="h-10 w-10 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500">✗</div>
                  <div className="h-10 w-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">✓</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute w-80 sm:w-96 aspect-[3/4] z-20 transform -rotate-6 translate-x-12 translate-y-4 opacity-50">
            <div className="absolute inset-0 bg-slate-800 rounded-2xl border border-white/5 shadow-xl"></div>
          </div>
          
          <div className="absolute w-80 sm:w-96 aspect-[3/4] z-10 transform rotate-6 -translate-x-12 translate-y-8 opacity-30">
            <div className="absolute inset-0 bg-slate-800 rounded-2xl border border-white/5 shadow-lg"></div>
          </div>
        </motion.div>

        {/* Value Proposition Section */}
        <div className="mt-32 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Layers className="w-8 h-8 text-indigo-400" />}
            title="Curated Feed"
            description="Endless scroll of high-quality portfolios, tailored to your tech stack interests."
          />
          <FeatureCard 
            icon={<Trophy className="w-8 h-8 text-amber-400" />}
            title="Global Leaderboards"
            description="Compete with developers worldwide. The best portfolios reach the top of the ranks."
          />
          <FeatureCard 
            icon={<Code2 className="w-8 h-8 text-emerald-400" />}
            title="Tech Spotlights"
            description="Discover the underlying technologies and architectures behind beautiful interfaces."
          />
        </div>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
      <div className="mb-6 p-4 rounded-xl bg-white/5 inline-block group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
