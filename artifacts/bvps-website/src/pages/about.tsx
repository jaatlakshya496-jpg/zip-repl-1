import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Target, BookOpen, Clock, Heart, Award, UserCircle2, Quote } from 'lucide-react';
import aboutImg from '@assets/generated_images/about-classroom.jpg';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-primary pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">About BVPS</h1>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Nurturing minds and shaping futures in Kalayat since 2004.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">Our History & Heritage</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bal Vikas Public School (BVPS) was established in the year 2004 with a clear vision: to bring quality, modern education to the heart of rural Haryana. 
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What started as a modest endeavor has blossomed into Kalayat's most trusted neighborhood school, now proudly serving over 945 students from Classes 1 to 12. We are a private, co-educational senior secondary institution offering instruction in Hindi medium, ensuring our students remain connected to their linguistic roots while mastering modern curriculum.
                </p>
                <div className="pt-4 flex gap-8 border-t border-border mt-8">
                  <div>
                    <p className="text-4xl font-serif font-bold text-black">2004</p>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Established</p>
                  </div>
                  <div>
                    <p className="text-4xl font-serif font-bold text-black">1-12</p>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Classes Offered</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img 
                  src={aboutImg} 
                  alt="Students in classroom" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/5"></div>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <ScrollReveal delay={0.1}>
              <div className="bg-white p-10 rounded-2xl border-t-4 border-secondary shadow-sm h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <Target className="w-12 h-12 text-secondary mb-6 relative z-10" />
                <h3 className="text-2xl font-serif font-bold text-black mb-4 relative z-10">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  To provide a nurturing, safe, and stimulating environment where every child can achieve their full academic, physical, and social potential. We strive to empower students with knowledge, moral values, and the confidence to succeed in an ever-changing world.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-primary text-primary-foreground p-10 rounded-2xl shadow-xl h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <BookOpen className="w-12 h-12 text-secondary mb-6 relative z-10" />
                <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Our Vision</h3>
                <p className="text-primary-foreground/80 leading-relaxed relative z-10">
                  To be recognized as a center of academic excellence that fosters critical thinking, creativity, and character development, preparing the youth of Kalayat to be responsible and contributing citizens of tomorrow.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Principal Section */}
          <ScrollReveal>
            <div className="mb-24 bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="shrink-0 flex flex-col items-center gap-3">
                  <div className="w-28 h-28 rounded-full bg-secondary/20 border-4 border-secondary flex items-center justify-center">
                    <UserCircle2 className="w-16 h-16 text-secondary" />
                  </div>
                  <div className="text-center">
                    <p className="text-white font-serif font-bold text-xl">Sh. Ramphal Sharma</p>
                    <p className="text-secondary text-sm font-medium uppercase tracking-wider mt-1">Principal</p>
                    <p className="text-primary-foreground/60 text-xs mt-1">Bal Vikas Public School, Kalayat</p>
                  </div>
                </div>
                <div className="flex-1">
                  <Quote className="w-10 h-10 text-secondary/40 mb-3" />
                  <p className="text-primary-foreground/85 text-lg leading-relaxed italic">
                    "At Bal Vikas Public School, we believe every child carries within them the seeds of greatness. Our mission is to nurture those seeds — with discipline, compassion, and knowledge — so they may grow into confident, responsible citizens who make their families and nation proud."
                  </p>
                  <p className="mt-6 text-primary-foreground/60 text-sm">
                    Under his guidance since the school's founding, BVPS has grown from a small institution into a thriving center of learning with nearly 945 students, 29 dedicated teachers, and a legacy of academic and sports excellence.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* School Details */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-md">
              <h2 className="text-3xl font-serif font-bold text-black mb-10 text-center">School Overview</h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-primary rounded-2xl">
                  <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-4 text-primary">
                    <Award className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-white">School Type</h4>
                  <p className="text-primary-foreground/70">Private, Co-educational<br/>(Boys & Girls)</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-primary rounded-2xl">
                  <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-4 text-primary">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-white">Academic Level</h4>
                  <p className="text-primary-foreground/70">Senior Secondary<br/>(Classes 1 to 12)</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-6 bg-primary rounded-2xl">
                  <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-4 text-primary">
                    <Heart className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-white">Medium</h4>
                  <p className="text-primary-foreground/70">Hindi Medium Instruction<br/>with English integration</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-primary rounded-2xl">
                  <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-4 text-primary">
                    <Clock className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-white">School Hours</h4>
                  <p className="text-primary-foreground/70">Mon–Sat: 8:00 AM – 3:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}
