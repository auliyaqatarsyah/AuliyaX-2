import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Website portfolio pribadi untuk menampilkan skill dan project.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    images: ['💻', '🌐', '✨'],
    github: 'https://github.com/auliyaqatarsyah/AuliyaX-2',
    demo: '#',
  },
  {
    title: 'Content Creator',
    description: 'Membuat konten edukasi dan tips sederhana.',
    tags: ['Instagram'],
    images: ['🎬', '📱', '🔥'],
    isContent: true,
    instagram: 'https://www.instagram.com/oildagoat/',
  },
];

function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  // autoplay
  useEffect(() => {
    if (isHovered) return;
    intervalRef.current = setInterval(next, 3000);
    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  return (
    <div
      className="relative overflow-hidden rounded-xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* SLIDES */}
      <motion.div
        className="flex"
        animate={{ x: `-${index * 100}%` }}
        transition={{ duration: 0.6 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, info) => {
          if (info.offset.x < -50) next();
          if (info.offset.x > 50) prev();
        }}
      >
        {images.map((emoji, i) => (
          <div
            key={i}
            className="min-w-full aspect-video flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20"
          >
            <span className="text-6xl">{emoji}</span>
          </div>
        ))}
      </motion.div>

      {/* ARROWS */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronLeft className="text-white w-5 h-5" />
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <ChevronRight className="text-white w-5 h-5" />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === index ? 'bg-white scale-110' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Projects & Karya
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 glass rounded-2xl hover:-translate-y-2 transition"
            >
              <Carousel images={project.images} />

              <h3 className="text-lg font-bold mt-4">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs bg-secondary rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-3">
                {project.github && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github}>
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" asChild>
                    <a href={project.demo}>
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  </Button>
                )}
                {project.instagram && (
                  <Button size="sm" asChild>
                    <a href={project.instagram}>
                      <Play className="h-4 w-4 mr-1" />
                      Watch
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}