import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, ZoomIn, Images, ChevronLeft, ChevronRight } from 'lucide-react';
import heroSchoolImg from '@assets/bal-vikas-public-school_1784611430239.jpg';

// All uploaded school photos
const galleryImages = [
  { src: new URL('@assets/Screenshot_20260721_095641_1784611430135.jpg', import.meta.url).href, caption: 'Lush Green Playground', category: 'Campus' },
  { src: new URL('@assets/Screenshot_20260721_095657_1784611430157.jpg', import.meta.url).href, caption: 'School Building — Multiple Views', category: 'Campus' },
  { src: new URL('@assets/Screenshot_20260721_095716_1784611430174.jpg', import.meta.url).href, caption: 'Teachers Celebrating Student Achievement', category: 'Staff & Faculty' },
  { src: new URL('@assets/Screenshot_20260721_095726_1784611430190.jpg', import.meta.url).href, caption: 'Students in School Uniform', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_095741_1784611430208.jpg', import.meta.url).href, caption: 'Trophy Presentation Ceremony', category: 'Events & Achievements' },
  { src: new URL('@assets/bal-vikas-public-school-kalayat-kaithal-schools-3t6w6qk_1784611430223.jpg', import.meta.url).href, caption: 'Bal Vikas Public School — Kalayat', category: 'Campus' },
  { src: new URL('@assets/bal-vikas-public-school_1784611430239.jpg', import.meta.url).href, caption: 'School Front View', category: 'Campus' },
  { src: new URL('@assets/Screenshot_20260721_095810_1784611430254.jpg', import.meta.url).href, caption: 'School Activity', category: 'Events & Achievements' },
  { src: new URL('@assets/hqdefault_1784611430271.jpg', import.meta.url).href, caption: 'School Highlights', category: 'Campus' },
  { src: new URL('@assets/Screenshot_20260721_095911_1784611430287.jpg', import.meta.url).href, caption: 'School Life', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_095927_1784611430305.jpg', import.meta.url).href, caption: 'School Event', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_095945_1784611430331.jpg', import.meta.url).href, caption: 'Students Learning', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_100014_1784611430350.jpg', import.meta.url).href, caption: 'School Celebration', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100046_1784611430370.jpg', import.meta.url).href, caption: 'Campus Life', category: 'Campus' },
  { src: new URL('@assets/Screenshot_20260721_100100_1784611430387.jpg', import.meta.url).href, caption: 'Student Activities', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_100001_1784611430406.jpg', import.meta.url).href, caption: 'School Grounds', category: 'Campus' },
  { src: new URL('@assets/Screenshot_20260721_100117_1784611430422.jpg', import.meta.url).href, caption: 'Special Occasion', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100132_1784611430446.jpg', import.meta.url).href, caption: 'School Community', category: 'Staff & Faculty' },
  { src: new URL('@assets/Screenshot_20260721_100232_1784611430471.jpg', import.meta.url).href, caption: 'School Ceremony', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100243_1784611430488.jpg', import.meta.url).href, caption: 'School Moments', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_100254_1784611512184.jpg', import.meta.url).href, caption: 'Celebration at Bal Vikas Public School', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100305_1784611512306.jpg', import.meta.url).href, caption: 'Principal with Students at School Event', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100315_1784611512322.jpg', import.meta.url).href, caption: 'Autograph Session with Students', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100324_1784611512338.jpg', import.meta.url).href, caption: 'Students Celebrating Farewell', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_100333_1784611512351.jpg', import.meta.url).href, caption: 'Victory Celebration at School', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100343_1784611512365.jpg', import.meta.url).href, caption: 'School Annual Event', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100353_1784611512376.jpg', import.meta.url).href, caption: 'Students at School Function', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_100402_1784611512389.jpg', import.meta.url).href, caption: 'School Activity', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100415_1784611512404.jpg', import.meta.url).href, caption: 'Special School Occasion', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100424_1784611512419.jpg', import.meta.url).href, caption: 'Students Group at BVPS', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_100434_1784611512437.jpg', import.meta.url).href, caption: 'School Celebration Moment', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100450_1784611512454.jpg', import.meta.url).href, caption: 'Staff and Students Together', category: 'Staff & Faculty' },
  { src: new URL('@assets/Screenshot_20260721_100500_1784611512471.jpg', import.meta.url).href, caption: 'BVPS School Event', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100511_1784611512488.jpg', import.meta.url).href, caption: 'School Function', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100526_1784611512505.jpg', import.meta.url).href, caption: 'Students at Annual Day', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_100547_1784611512526.jpg', import.meta.url).href, caption: 'School Cultural Program', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100558_1784611512543.jpg', import.meta.url).href, caption: 'Prize Distribution', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100609_1784611512558.jpg', import.meta.url).href, caption: 'School Community Gathering', category: 'Staff & Faculty' },
  { src: new URL('@assets/Screenshot_20260721_100629_1784611512575.jpg', import.meta.url).href, caption: 'BVPS Annual Celebration', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100639_1784611512590.jpg', import.meta.url).href, caption: 'School Pride Moments', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_100727_1784611828992.jpg', import.meta.url).href, caption: 'Teacher with Students on School Grounds', category: 'Staff & Faculty' },
  { src: new URL('@assets/Screenshot_20260721_100735_1784611829011.jpg', import.meta.url).href, caption: 'Students Celebrating at School Event', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_100744_1784611829028.jpg', import.meta.url).href, caption: 'Principal Addressing Students at Ceremony', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100807_1784611829045.jpg', import.meta.url).href, caption: 'BVPS — We Are Hiring!', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100828_1784611829062.jpg', import.meta.url).href, caption: 'Certificate Distribution — NCC Cadets', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100838_1784611829075.jpg', import.meta.url).href, caption: 'School Annual Celebration', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100848_1784611829087.jpg', import.meta.url).href, caption: 'Students at School Function', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_100817_1784611829104.jpg', import.meta.url).href, caption: 'School Event Highlights', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100902_1784611829120.jpg', import.meta.url).href, caption: 'School Community Event', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100917_1784611829138.jpg', import.meta.url).href, caption: 'Students Group Activity', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_100929_1784611829154.jpg', import.meta.url).href, caption: 'School Special Occasion', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_100939_1784611829166.jpg', import.meta.url).href, caption: 'BVPS School Moment', category: 'Campus' },
  { src: new URL('@assets/Screenshot_20260721_100955_1784611829177.jpg', import.meta.url).href, caption: 'School Life', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_101003_1784611829193.jpg', import.meta.url).href, caption: 'School Program', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_101011_1784611829211.jpg', import.meta.url).href, caption: 'Students and Faculty Together', category: 'Staff & Faculty' },
  { src: new URL('@assets/Screenshot_20260721_101018_1784611829229.jpg', import.meta.url).href, caption: 'School Pride', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_101030_1784611875027.jpg', import.meta.url).href, caption: 'Govt. of Haryana — Winter Vacation Notice', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_101040_1784611875129.jpg', import.meta.url).href, caption: 'Staff Meeting at School Campus', category: 'Staff & Faculty' },
  { src: new URL('@assets/Screenshot_20260721_101102_1784611875141.jpg', import.meta.url).href, caption: 'Principal at TERI School of Advanced Studies', category: 'Staff & Faculty' },
  { src: new URL('@assets/Screenshot_20260721_101123_1784611875157.jpg', import.meta.url).href, caption: 'New Year Celebration — BVPS Kalayat', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_101136_1784611875176.jpg', import.meta.url).href, caption: 'Happy New Year Event — Students Performing', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_101148_1784611875198.jpg', import.meta.url).href, caption: 'School Cultural Activity', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_101203_1784611875216.jpg', import.meta.url).href, caption: 'Students at School Program', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_101220_1784611875234.jpg', import.meta.url).href, caption: 'School Gathering', category: 'Campus' },
  { src: new URL('@assets/Screenshot_20260721_101232_1784611875252.jpg', import.meta.url).href, caption: 'BVPS School Moment', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_101245_1784611875272.jpg', import.meta.url).href, caption: 'School Event Highlights', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_101258_1784611875287.jpg', import.meta.url).href, caption: 'School Community', category: 'Staff & Faculty' },
  { src: new URL('@assets/Screenshot_20260721_101309_1784611875301.jpg', import.meta.url).href, caption: 'Students Learning Together', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_101332_1784611875316.jpg', import.meta.url).href, caption: 'School Activity', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_101341_1784611875336.jpg', import.meta.url).href, caption: 'BVPS Campus Life', category: 'Campus' },
  { src: new URL('@assets/Screenshot_20260721_101356_1784611875357.jpg', import.meta.url).href, caption: 'School Program', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_101405_1784611875372.jpg', import.meta.url).href, caption: 'Students at School Function', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_101418_1784611875385.jpg', import.meta.url).href, caption: 'School Special Occasion', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_101433_1784611875396.jpg', import.meta.url).href, caption: 'School Life Moments', category: 'Students' },
  { src: new URL('@assets/Screenshot_20260721_101445_1784611875411.jpg', import.meta.url).href, caption: 'School Celebration', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_101454_1784611875424.jpg', import.meta.url).href, caption: 'BVPS School Pride', category: 'Campus' },
  { src: new URL('@assets/Screenshot_20260721_101502_1784612008952.jpg', import.meta.url).href, caption: 'Achievement at BVPS', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_101509_1784612008927.jpg', import.meta.url).href, caption: 'School Award Ceremony', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_101517_1784612008914.jpg', import.meta.url).href, caption: 'Students Honoured at BVPS', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_101549_1784612008898.jpg', import.meta.url).href, caption: 'BVPS Girls Win Gold — All India Karate Championship', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_101612_1784612008888.jpg', import.meta.url).href, caption: 'Gold Medal Winner with Teachers — BVPS', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_101624_1784612008874.jpg', import.meta.url).href, caption: 'Student Achievement Recognised at BVPS', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_101706_1784612008853.jpg', import.meta.url).href, caption: 'Students and Staff with Trophies', category: 'Events & Achievements' },
  { src: new URL('@assets/Screenshot_20260721_101720_1784612008775.jpg', import.meta.url).href, caption: 'Trophy Presentation — BVPS Kalayat', category: 'Events & Achievements' },
];

const categories = ['All', 'Campus', 'Students', 'Staff & Faculty', 'Events & Achievements'];

// Animated card with useInView for scroll-triggered entrance
function GalleryCard({ img, idx, onClick }: { img: typeof galleryImages[0]; idx: number; onClick: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.45, delay: (idx % 8) * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.03, zIndex: 10 }}
      className="relative group rounded-2xl overflow-hidden cursor-pointer bg-gray-100 aspect-square shadow-md"
      onClick={onClick}
    >
      <motion.img
        src={img.src}
        alt={img.caption}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.5 }}
      />

      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 bg-primary/45 flex flex-col items-center justify-center gap-2 p-3"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.2, delay: 0.05 }}
        >
          <ZoomIn className="w-8 h-8 text-white" />
        </motion.div>
        <p className="text-white text-xs font-semibold text-center leading-tight px-2">{img.caption}</p>
        <span className="text-secondary text-[10px] font-bold uppercase tracking-wider">{img.category}</span>
      </motion.div>

      {/* Corner badge always visible */}
      <span className="absolute top-2 left-2 bg-primary/75 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {idx + 1}
      </span>
    </motion.div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = (e: React.MouseEvent) => { e.stopPropagation(); setLightboxIndex((p) => p !== null ? (p - 1 + filtered.length) % filtered.length : null); };
  const nextImage = (e: React.MouseEvent) => { e.stopPropagation(); setLightboxIndex((p) => p !== null ? (p + 1) % filtered.length : null); };

  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-primary py-16 relative overflow-hidden">
        <img src={heroSchoolImg} alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/55" />
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
            >
              <Images className="w-8 h-8 text-secondary" />
              <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Visual Stories</span>
            </motion.div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">Photo Gallery</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              {galleryImages.length} photos — campus, students, staff, and memorable moments from BVPS.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-background border-b border-border sticky top-[72px] z-30 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileTap={{ scale: 0.95 }}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md scale-105'
                    : 'bg-muted text-muted-foreground hover:bg-muted/70'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className={`ml-1.5 text-xs ${activeCategory === cat ? 'text-white/70' : 'text-muted-foreground/60'}`}>
                    ({galleryImages.filter(i => i.category === cat).length})
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10 bg-muted/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground mb-6"
          >
            Showing {filtered.length} photo{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' ? ` in "${activeCategory}"` : ''}
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
            >
              {filtered.map((img, idx) => (
                <GalleryCard
                  key={img.src}
                  img={img}
                  idx={idx}
                  onClick={() => setLightboxIndex(idx)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] overflow-hidden bg-[#03050b]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Colorful ambient glow over the black backdrop */}
            <div className="pointer-events-none absolute -left-32 top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-orange-500/20 blur-[110px]" />
            <div className="pointer-events-none absolute -right-32 bottom-[-14rem] h-[34rem] w-[34rem] rounded-full bg-cyan-500/20 blur-[120px]" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[100px]" />

            {/* Gallery counter */}
            <div className="absolute left-5 top-5 z-10 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/75 backdrop-blur-xl md:left-8 md:top-8">
              BVPS Gallery <span className="mx-1 text-secondary">•</span> {lightboxIndex + 1} / {filtered.length}
            </div>

            {/* Close */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              onClick={closeLightbox}
              aria-label="Close photo viewer"
              className="absolute right-5 top-5 z-10 rounded-full border border-white/15 bg-white/[0.08] p-3 text-white/80 shadow-lg backdrop-blur-xl transition-all hover:rotate-90 hover:border-secondary/60 hover:bg-secondary hover:text-primary md:right-8 md:top-8"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Prev */}
            <button
              onClick={prevImage}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-gradient-to-br from-orange-500/80 to-pink-600/80 p-3 text-white shadow-xl shadow-orange-500/20 transition-all hover:scale-110 hover:from-orange-400 hover:to-fuchsia-500 md:left-8"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.88, x: 60 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.88, x: -60 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
                className="relative z-[1] flex max-h-[88vh] w-[min(92vw,1100px)] max-w-5xl flex-col items-center gap-3"
              >
                <div className="w-full rounded-[1.35rem] bg-gradient-to-br from-orange-400 via-fuchsia-500 to-cyan-400 p-[2px] shadow-[0_0_70px_rgba(217,70,239,0.2)]">
                  <div className="rounded-[1.25rem] border border-white/10 bg-[#05070d]/90 p-2 md:p-3">
                    <img
                      src={filtered[lightboxIndex].src}
                      alt={filtered[lightboxIndex].caption}
                      className="mx-auto max-h-[68vh] w-auto max-w-full rounded-[0.9rem] object-contain shadow-2xl"
                    />
                  </div>
                </div>
                <div className="w-full max-w-2xl rounded-2xl border border-white/15 bg-white/[0.08] px-5 py-3 text-center shadow-2xl backdrop-blur-xl md:px-8 md:py-4">
                  <p className="text-base font-bold text-white md:text-lg">{filtered[lightboxIndex].caption}</p>
                  <p className="mt-1 text-sm font-semibold text-secondary">{filtered[lightboxIndex].category}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next */}
            <button
              onClick={nextImage}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-gradient-to-br from-cyan-400/80 to-blue-600/80 p-3 text-white shadow-xl shadow-cyan-500/20 transition-all hover:scale-110 hover:from-cyan-300 hover:to-blue-500 md:right-8"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Progress strip */}
            <div className="absolute bottom-4 left-1/2 z-10 flex max-w-xs -translate-x-1/2 flex-wrap justify-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md">
              {filtered.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  aria-label={`View photo ${i + 1}`}
                  animate={{ backgroundColor: i === lightboxIndex ? '#f97316' : 'rgba(255,255,255,0.3)' }}
                  className={`h-1.5 rounded-full transition-all ${i === lightboxIndex ? 'w-6' : 'w-1.5 hover:bg-white/70'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
