import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Link } from 'wouter';
import { Building2, PhoneCall, CheckCircle2, Info, Video, ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import heroImg from '@assets/principal-ramphal-sharma.png';

export default function Interview() {
  return (
    <div className="flex flex-col">
      <div className="bg-primary pt-24 pb-16 px-4 relative overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover object-top opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/55" />
        <div className="container mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Admissions</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 mt-2">Interview & Interaction</h1>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
            <p className="mt-6 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              A brief, friendly interaction with the student and parents — not a test.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <Link href="/admissions" className="inline-flex items-center gap-2 mt-6 text-primary-foreground/70 hover:text-secondary transition-colors text-sm font-medium">
              <ArrowLeft className="w-4 h-4" /> Back to Admissions
            </Link>
          </ScrollReveal>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-10">

          <div className="grid md:grid-cols-2 gap-6">
            {/* What to expect */}
            <ScrollReveal delay={0.05}>
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Info className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-bold text-black text-lg">What to Expect</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    ['Duration',  '15–20 minutes, relaxed conversation'],
                    ['Who attends', 'Student + at least one parent/guardian'],
                    ['Language', 'Hindi or English — your comfort'],
                    ['Purpose', "Understanding the child's learning needs"],
                    ['No exam', 'Not a test — just a friendly interaction'],
                  ].map(([key, val]) => (
                    <li key={key} className="flex gap-3 text-sm border-b border-border pb-3 last:border-0 last:pb-0">
                      <span className="font-bold text-black w-28 shrink-0">{key}</span>
                      <span className="text-muted-foreground">{val}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Interaction modes */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Video className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="font-bold text-black text-lg">Interaction Modes</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: Building2, mode: 'In-Person (Recommended)', detail: 'Visit school between 9 AM – 12 PM, Mon–Sat. Best to call ahead.' },
                    { icon: PhoneCall, mode: 'Phone Call', detail: 'Our counselor will call on your mobile. Provide a preferred time in the application form.' },
                  ].map(({ icon: Icon, mode, detail }) => (
                    <div key={mode} className="flex gap-4 p-4 rounded-xl bg-muted/30 border border-border">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="font-bold text-black text-sm">{mode}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Tips */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                for: 'Student',
                bg: 'bg-primary',
                textColor: 'text-white',
                subColor: 'text-primary-foreground/80',
                dotColor: 'bg-secondary',
                iconColor: 'text-secondary',
                tips: ['Dress in school uniform: white shirt, black pants, black shoes', 'Be polite and confident', 'Know your previous class subjects', 'Carry your report card'],
              },
              {
                for: 'Parents',
                bg: 'bg-secondary/10 border border-secondary/30',
                textColor: 'text-black',
                subColor: 'text-muted-foreground',
                dotColor: 'bg-primary',
                iconColor: 'text-primary',
                tips: ["Bring all required documents", "Be ready to discuss child's strengths", 'Ask about curriculum and fee schedule', 'Note the school rules and calendar'],
              },
            ].map((t, i) => (
              <ScrollReveal key={t.for} delay={i * 0.08}>
                <div className={`rounded-2xl p-6 ${t.bg}`}>
                  <h4 className={`font-bold mb-4 flex items-center gap-2 text-base ${t.textColor}`}>
                    <CheckCircle2 className={`w-4 h-4 ${t.iconColor}`} />
                    Tips for {t.for}
                  </h4>
                  <ul className="space-y-3">
                    {t.tips.map(tip => (
                      <li key={tip} className={`text-sm flex items-start gap-2 ${t.subColor}`}>
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${t.dotColor}`} />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="bg-primary text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-serif font-bold mb-1">Ready to schedule your interaction?</h3>
                <p className="text-primary-foreground/80 text-sm">Fill the application form to choose your preferred date &amp; mode.</p>
              </div>
              <Link href="/application" className="inline-flex items-center gap-2 bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-full px-8 h-11 text-sm transition-colors whitespace-nowrap">
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}
