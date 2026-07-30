import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, GraduationCap, Building2, Calendar, ArrowRight, ChevronLeft, ChevronRight, BookOpen, Dumbbell, Monitor, ShieldCheck, Droplets, Maximize2, Quote, X } from 'lucide-react';

import libImg from '@assets/generated_images/home-facility-library.jpg';
import compImg from '@assets/generated_images/home-facility-computer.jpg';
import smartImg from '@assets/generated_images/home-facility-smartclass.jpg';
import playImg from '@assets/generated_images/home-facility-playground.jpg';
import cctvImg from '@assets/generated_images/home-facility-cctv.jpg';
import roImg from '@assets/generated_images/home-facility-ro-water.jpg';
import classImg from '@assets/generated_images/home-facility-classroom.jpg';

// Real BVPS hero images from uploaded photos
const heroSlides = [
  {
    src: new URL('@assets/Screenshot_20260721_095641_1784611430135.jpg', import.meta.url).href,
    label: 'Lush Green Campus',
  },
  {
    src: new URL('@assets/Screenshot_20260721_095726_1784611430190.jpg', import.meta.url).href,
    label: 'Our Students',
  },
  {
    src: new URL('@assets/Screenshot_20260721_095741_1784611430208.jpg', import.meta.url).href,
    label: 'Achievements',
  },
  {
    src: new URL('@assets/Screenshot_20260721_101549_1784612008898.jpg', import.meta.url).href,
    label: 'Sports Excellence',
  },
  {
    src: new URL('@assets/Screenshot_20260721_100333_1784611512351.jpg', import.meta.url).href,
    label: 'School Events',
  },
];

const stats = [
  { icon: Users, label: 'Students', value: '945+' },
  { icon: GraduationCap, label: 'Teachers', value: '29+' },
  { icon: Building2, label: 'Classrooms', value: '31' },
  { icon: Calendar, label: 'Established', value: '2004' },
];

const facilities = [
  { icon: BookOpen,   name: 'Library',        desc: 'Rich collection of books for all classes',   image: libImg  },
  { icon: Monitor,    name: 'Computer Lab',    desc: 'Modern computers with internet access',       image: compImg },
  { icon: Monitor,    name: 'Smart Classes',   desc: 'Interactive digital learning boards',         image: smartImg},
  { icon: Dumbbell,   name: 'Playground',      desc: 'Spacious ground for sports & activities',    image: playImg },
  { icon: ShieldCheck,name: 'CCTV Security',   desc: '24/7 campus surveillance',                   image: cctvImg },
  { icon: Droplets,   name: 'RO Water',        desc: 'Clean purified drinking water',               image: roImg   },
  { icon: Maximize2,  name: 'Spacious Rooms',  desc: 'Well-ventilated classrooms',                 image: classImg},
];

// Gallery preview - real photos
const previewPhotos = [
  new URL('@assets/Screenshot_20260721_095657_1784611430157.jpg', import.meta.url).href,
  new URL('@assets/Screenshot_20260721_095716_1784611430174.jpg', import.meta.url).href,
  new URL('@assets/Screenshot_20260721_101123_1784611875157.jpg', import.meta.url).href,
  new URL('@assets/Screenshot_20260721_101706_1784612008853.jpg', import.meta.url).href,
  new URL('@assets/Screenshot_20260721_101720_1784612008775.jpg', import.meta.url).href,
  new URL('@assets/Screenshot_20260721_100828_1784611829062.jpg', import.meta.url).href,
];

type Facility = typeof facilities[number];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  // Auto-advance hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedFacility(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const prev = () => setCurrentSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setCurrentSlide((s) => (s + 1) % heroSlides.length);

  return (
    <div className="flex flex-col">

      {/* ── HERO SLIDESHOW ── */}
      <section className="relative h-[92vh] min-h-[560px] overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[currentSlide].src}
              alt={heroSlides[currentSlide].label}
              className="w-full h-full object-cover object-center"
              style={{ imageRendering: 'auto' }}
            />
            <div className="absolute inset-0 bg-primary/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start z-10 container mx-auto px-4 md:px-10">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 border border-secondary/50 text-secondary font-semibold text-sm mb-5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Admissions Open 2025–26
            </span>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.05] mb-5">
              Bal Vikas<br />
              <span className="text-secondary">Public School</span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 mb-3 font-medium">
              Kalayat, District Kaithal, Haryana
            </p>
            <p className="text-base text-white/70 mb-8 max-w-xl leading-relaxed">
              Nurturing young minds from Classes 1 to 12 since 2004. A trusted co-educational school rooted in values, discipline, and excellence.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center h-13 px-8 py-3.5 bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-full text-base transition-all shadow-lg hover:shadow-secondary/30"
              >
                Apply for Admission
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center h-13 px-8 py-3.5 border-2 border-white/60 text-white hover:bg-white hover:text-primary font-bold rounded-full text-base backdrop-blur-sm bg-white/10 transition-all"
              >
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slide nav buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`rounded-full transition-all duration-300 ${i === currentSlide ? 'w-8 h-2.5 bg-secondary' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>

        {/* Slide label */}
        <div className="absolute bottom-8 right-6 z-20 text-white/60 text-sm font-medium">
          {heroSlides[currentSlide].label}
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 md:px-10 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md border border-border/40 py-10 px-6 gap-4 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <stat.icon className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <p className="text-4xl font-serif font-bold text-black leading-none">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-semibold mt-2 uppercase tracking-wide">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRINCIPAL'S MESSAGE ── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary rounded-3xl px-8 md:px-14 py-12 flex flex-col md:flex-row gap-10 items-center relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            <div className="shrink-0 flex flex-col items-center gap-3 relative z-10">
              <div className="w-28 h-28 rounded-full border-4 border-secondary overflow-hidden">
                <img
                  src={new URL('@assets/principal-ramphal-sharma.png', import.meta.url).href}
                  alt="Sh. Ramphal Sharma — Principal"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-white font-serif font-bold text-lg text-center">Sh. Ramphal Sharma</p>
              <span className="text-secondary text-xs font-semibold uppercase tracking-widest">Principal</span>
            </div>
            <div className="relative z-10 flex-1">
              <Quote className="w-9 h-9 text-secondary/30 mb-3" />
              <p className="text-white/85 text-lg leading-relaxed italic">
                "At Bal Vikas Public School, we believe every child carries within them the seeds of greatness. Our mission is to nurture those seeds — with discipline, compassion, and knowledge — so they may grow into confident, responsible citizens."
              </p>
              <p className="text-secondary font-semibold mt-5 text-sm">— Message from the Principal's Desk</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FACILITIES ── */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2">World-Class Facilities</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {facilities.map((f, i) => (
              <motion.button
                key={f.name}
                onClick={() => setSelectedFacility(f)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer hover:bg-white/20 hover:border-secondary/60 transition-all text-left w-full group"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white text-base mb-1">{f.name}</h3>
                <p className="text-white/65 text-xs leading-relaxed">{f.desc}</p>
                <span className="mt-3 text-secondary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Tap to see →</span>
              </motion.button>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/facilities" className="inline-flex items-center gap-2 text-white font-bold hover:text-secondary transition-colors group">
              View All Facilities
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PHOTO PREVIEW ── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
          >
            <div>
              <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Life at BVPS</span>
              <h2 className="text-4xl font-serif font-bold text-black mt-1">School Moments</h2>
            </div>
            <Link href="/gallery" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group shrink-0">
              View Full Gallery <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {previewPhotos.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`rounded-2xl overflow-hidden shadow-md aspect-square ${i === 0 ? 'md:row-span-2 md:aspect-auto' : ''}`}
              >
                <Link href="/gallery">
                  <img src={src} alt="BVPS school moment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACILITY IMAGE MODAL ── */}
      <AnimatePresence>
        {selectedFacility && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedFacility(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.name}
                  className="w-full h-72 object-cover"
                />
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5 flex items-center gap-2">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-primary shrink-0">
                    <selectedFacility.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-white font-serif font-bold text-xl">{selectedFacility.name}</h3>
                </div>
              </div>
              {/* Text */}
              <div className="px-6 py-5">
                <p className="text-muted-foreground leading-relaxed text-sm">{selectedFacility.desc}</p>
                <Link
                  href="/facilities"
                  className="mt-4 inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:text-secondary transition-colors"
                  onClick={() => setSelectedFacility(null)}
                >
                  View all facilities <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CTA BANNER ── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        <div className="container mx-auto px-4 md:px-10 relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-5">Join the BVPS Family</h2>
            <p className="text-xl text-primary-foreground/75 mb-10">
              Admissions open for Classes 1 to 12. Give your child the foundation they deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions" className="inline-flex items-center justify-center h-14 bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-full px-10 text-lg transition-all">
                Start Admission
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center h-14 border-2 border-white/50 text-white hover:bg-white hover:text-primary font-bold rounded-full px-10 text-lg transition-all bg-white/10 backdrop-blur-sm">
                Contact School
              </Link>
            </div>
            <p className="mt-8 text-white/50 text-sm">
              Railway Road, Kalayat, Kaithal &nbsp;|&nbsp; +91 98125 50200
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
