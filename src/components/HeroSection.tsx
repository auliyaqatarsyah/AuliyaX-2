import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <ThreeScene />

      <div className="container mx-auto px-4 relative z-10">
        {/* FLEX ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* LEFT SIDE - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:w-1/2"
          >
            <div className="relative group">

              {/* MAIN GLOW */}
              <div className="absolute -inset-2 rounded-full blur-xl opacity-70 bg-gradient-to-r from-red-500 via-red-400 to-red-600 animate-pulse"></div>

              {/* EXTRA GLOW */}
              <div className="absolute -inset-4 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition duration-500 bg-red-500"></div>

              {/* IMAGE */}
              <img
                src="/AuliyaX-2.png"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
                alt="Profile"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-red-500 shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />

            </div>
          </motion.div>

          {/* RIGHT SIDE - TEXT */}
          <div className="md:w-1/2 text-center md:text-left">

            <motion.span 
              className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              👋 Selamat datang di portfolio saya
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-gradient">MAN Model Student</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              Saya membangun aplikasi web yang indah dan fungsional, 
              serta membagikan pengetahuan melalui konten yang inspiratif.
            </motion.p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="rounded-full px-8 shadow-glow"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Lihat Projects
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hubungi Saya
              </Button>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center md:justify-start gap-6">
              {[
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Youtube, href: '#' },
                { icon: Instagram, href: '#' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5 text-foreground" />
                </motion.a>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* SCROLL BUTTON */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass animate-float cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.button>
    </section>
  );
}