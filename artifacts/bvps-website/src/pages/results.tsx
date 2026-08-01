import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Trophy, Medal, Star, Award, Users, Filter, X } from 'lucide-react';

// Achievement images (cropped from school Instagram)
import imgKhushiKarate    from '@assets/result-khushi-karate-gold.png';
import imgCricketChampion from '@assets/result-cricket-champion.png';
import imgHanshulWrestling from '@assets/result-hanshul-wrestling.png';
import imgFootball        from '@assets/result-football-tournament.png';
import imgCricketTeam     from '@assets/result-cricket-tournament.png';
import imgGroup1          from '@assets/result-group1.png';
import imgGroup2          from '@assets/result-group2.png';
import imgGroup3          from '@assets/result-group3.png';

type Category = 'All' | 'Individual' | 'Team' | 'District' | 'Block';

const achievements = [
  {
    id: 1,
    name: 'Khushi',
    title: 'Gold Medal — Karate',
    subtitle: 'District Level Karate Championship',
    detail: 'Selected for State Level Competition',
    category: 'Individual' as Category,
    level: 'District' as Category,
    medal: 'gold',
    img: imgKhushiKarate,
    icon: Trophy,
    color: 'from-yellow-500 to-amber-600',
    badge: 'Gold Medal',
    badgeColor: 'bg-yellow-400 text-yellow-900',
  },
  {
    id: 2,
    name: 'BVPS Cricket Team',
    title: 'District Level Cricket Champion',
    subtitle: 'District Level Championship',
    detail: 'Selected for State Level Competition',
    category: 'Team' as Category,
    level: 'District' as Category,
    medal: 'gold',
    img: imgCricketChampion,
    icon: Trophy,
    color: 'from-blue-500 to-indigo-600',
    badge: '1st Place',
    badgeColor: 'bg-blue-400 text-blue-900',
  },
  {
    id: 3,
    name: 'Hanshul',
    title: 'Silver Medal — Wrestling',
    subtitle: 'Wrestling Championship',
    detail: '2nd Position — Silver Medal',
    category: 'Individual' as Category,
    level: 'District' as Category,
    medal: 'silver',
    img: imgHanshulWrestling,
    icon: Medal,
    color: 'from-slate-400 to-slate-600',
    badge: 'Silver Medal',
    badgeColor: 'bg-slate-300 text-slate-800',
  },
  {
    id: 4,
    name: 'Dakshay, Anu & Team',
    title: 'U-17 Football Tournament',
    subtitle: 'Block Level U-17 Football Tournament',
    detail: 'Won at Block Level',
    category: 'Team' as Category,
    level: 'Block' as Category,
    medal: 'gold',
    img: imgFootball,
    icon: Trophy,
    color: 'from-green-500 to-emerald-600',
    badge: 'Winners',
    badgeColor: 'bg-green-400 text-green-900',
  },
  {
    id: 5,
    name: 'Cam, Anish, Himanshu & Team',
    title: 'Block Level Cricket Tournament',
    subtitle: 'Block Level Cricket Tournament',
    detail: 'Won at Block Level',
    category: 'Team' as Category,
    level: 'Block' as Category,
    medal: 'gold',
    img: imgCricketTeam,
    icon: Trophy,
    color: 'from-orange-500 to-red-600',
    badge: 'Winners',
    badgeColor: 'bg-orange-400 text-orange-900',
  },
  {
    id: 6,
    name: 'BVPS Students',
    title: 'Championship Achievement',
    subtitle: 'Inter-School Competition',
    detail: 'Outstanding performance',
    category: 'Team' as Category,
    level: 'District' as Category,
    medal: 'gold',
    img: imgGroup1,
    icon: Award,
    color: 'from-purple-500 to-violet-600',
    badge: 'Achievement',
    badgeColor: 'bg-purple-400 text-purple-900',
  },
  {
    id: 7,
    name: 'BVPS Students',
    title: 'Sports Excellence',
    subtitle: 'School Sports Meet',
    detail: 'Proud achievers of BVPS',
    category: 'Team' as Category,
    level: 'Block' as Category,
    medal: 'silver',
    img: imgGroup2,
    icon: Star,
    color: 'from-teal-500 to-cyan-600',
    badge: 'Excellence',
    badgeColor: 'bg-teal-400 text-teal-900',
  },
  {
    id: 8,
    name: 'BVPS Students',
    title: 'Tournament Winners',
    subtitle: 'Inter-Block Competition',
    detail: 'Champions of BVPS Kalayat',
    category: 'Team' as Category,
    level: 'Block' as Category,
    medal: 'gold',
    img: imgGroup3,
    icon: Users,
    color: 'from-rose-500 to-pink-600',
    badge: 'Winners',
    badgeColor: 'bg-rose-400 text-rose-900',
  },
];

const filters: Category[] = ['All', 'Individual', 'Team', 'District', 'Block'];

const stats = [
  { value: '8+', label: 'Achievements', icon: Trophy },
  { value: '3', label: 'Gold Medals', icon: Medal },
  { value: '2', label: 'District Levels', icon: Award },
  { value: '5+', label: 'Champions', icon: Star },
];

export default function Results() {
  const [active, setActive] = useState<Category>('All');
  const [selected, setSelected] = useState<typeof achievements[0] | null>(null);

  const filtered = active === 'All'
    ? achievements
    : achievements.filter(a => a.category === active || a.level === active);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <div className="bg-primary pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-secondary/10"
              style={{ width: 60 + i * 30, height: 60 + i * 30, left: `${10 + i * 12}%`, top: `${20 + (i % 3) * 25}%` }}
              animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.4 }}
            />
          ))}
        </div>
        <div className="container mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary border border-secondary/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
              <Trophy className="w-4 h-4" /> Hall of Fame
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              Our <span className="text-secondary">Achievers</span>
            </h1>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
            <p className="mt-6 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Celebrating the champions of Bal Vikas Public School — students who made us proud at District, Block, and State levels.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <ScrollReveal key={label} delay={i * 0.08}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <Icon className="w-5 h-5 text-secondary mx-auto mb-2" />
                  <p className="text-2xl font-serif font-bold text-white">{value}</p>
                  <p className="text-primary-foreground/70 text-xs font-medium">{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className="sticky top-[68px] z-30 bg-background/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  active === f
                    ? 'bg-primary text-white shadow-md scale-105'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Achievement grid */}
      <section className="py-16 bg-background flex-1">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => setSelected(item)}
                  className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm cursor-pointer group"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-40 group-hover:opacity-50 transition-opacity`} />
                    {/* Badge */}
                    <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold ${item.badgeColor} shadow-md`}>
                      {item.badge}
                    </div>
                    {/* Medal icon */}
                    <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                      <item.icon className={`w-5 h-5 ${item.medal === 'gold' ? 'text-yellow-500' : 'text-slate-400'}`} />
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-4">
                    <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">{item.level} Level</p>
                    <h3 className="font-bold text-black text-base leading-tight mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-snug">{item.name}</p>
                    <p className="text-xs text-muted-foreground/70 mt-1 italic">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <Trophy className="w-12 h-12 mx-auto mb-3 opacity-20" />
              <p>No achievements in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img src={selected.img} alt={selected.title} className="w-full aspect-square object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t ${selected.color} opacity-30`} />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-bold ${selected.badgeColor} shadow`}>
                  {selected.badge}
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">{selected.level} Level Achievement</p>
                <h3 className="text-2xl font-serif font-bold text-black mb-1">{selected.title}</h3>
                <p className="text-base font-semibold text-primary mb-1">{selected.name}</p>
                <p className="text-sm text-muted-foreground">{selected.subtitle}</p>
                <p className="text-sm font-semibold text-secondary mt-2">{selected.detail}</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                  <selected.icon className={`w-4 h-4 ${selected.medal === 'gold' ? 'text-yellow-500' : 'text-slate-400'}`} />
                  Bal Vikas Public School, Kalayat — Proud of our achievers!
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-14 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <Trophy className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold text-white mb-3">Proud of Every Achiever</h3>
            <p className="text-primary-foreground/75 max-w-xl mx-auto text-sm">
              BVPS Kalayat celebrates every student who represents our school with dedication and excellence. You inspire us all!
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
