import { useState, useEffect } from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Link } from 'wouter';
import { ClipboardList, Users, UserCheck, GraduationCap, ArrowRight, Phone, Star, MessageSquare, CheckCircle2 } from 'lucide-react';
import { getFeedbacks, saveFeedback, type FeedbackEntry, roleLabels } from '@/lib/feedback-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/* ── Star display (read-only) ─────────────────────────── */
function StarDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} className={`w-4 h-4 ${s <= rating ? 'fill-secondary text-secondary' : 'text-muted-foreground/20'}`} />
      ))}
    </div>
  );
}

/* ── Inline star picker ───────────────────────────────── */
function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <button key={s} type="button" onClick={() => onChange(s)}
          onMouseEnter={() => setHovered(s)} onMouseLeave={() => setHovered(0)}>
          <Star className={`w-6 h-6 transition-colors ${s <= (hovered || value) ? 'fill-secondary text-secondary' : 'text-muted-foreground/30'}`} />
        </button>
      ))}
    </div>
  );
}

/* ── Main page ────────────────────────────────────────── */
export default function Admissions() {
  const [feedbacks, setFeedbacks] = useState<FeedbackEntry[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState<FeedbackEntry['role'] | ''>('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => { setFeedbacks(getFeedbacks()); }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!name.trim() || name.length < 2) errs.name = 'Name is required';
    if (!role) errs.role = 'Please select your role';
    if (rating === 0) errs.rating = 'Please select a rating';
    if (!message.trim() || message.length < 5) errs.message = 'Please write your feedback';
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const entry = saveFeedback({ name, role: role as FeedbackEntry['role'], category: 'overall', rating, feedback: message });
    setFeedbacks([entry, ...feedbacks]);
    setSubmitted(true);
    setName(''); setRole(''); setRating(0); setMessage('');
  }

  const steps = [
    { icon: ClipboardList, title: '1. Inquiry & Information', description: 'Visit our campus or contact the admission office to learn about our curriculum, facilities, and fee structure.' },
    { icon: Users, title: '2. Application Submission', description: 'Collect the admission form from the school office. Submit the filled form along with required documents (birth certificate, previous school records, photos).' },
    { icon: UserCheck, title: '3. Interaction / Interview', description: "A brief, friendly interaction with the student and parents to understand the child's background and educational needs." },
    { icon: GraduationCap, title: '4. Enrollment', description: 'Upon confirmation, pay the admission fees and complete the final enrollment formalities to join the BVPS family.' },
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-primary pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Admissions</h1>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Join the BVPS family. Admissions open for Classes 1 to 12.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-lg mb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <ScrollReveal>
              <div className="max-w-3xl">
                <h2 className="text-3xl font-serif font-bold text-black mb-6">Start Your Child's Journey With Us</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Bal Vikas Public School welcomes students from all backgrounds. We believe in providing equal opportunities for quality education. Admissions are currently open for <strong>Classes 1 through 12</strong>.
                </p>
                <div className="inline-flex items-center gap-3 px-4 py-3 bg-primary/5 rounded-xl text-primary font-medium border border-primary/10">
                  <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
                  Please note: We do not offer Pre-primary classes. Admissions start directly from Class 1.
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <h2 className="text-3xl font-serif font-bold text-black mb-12 text-center">The Admission Process</h2>
          </ScrollReveal>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-border/60 -translate-y-1/2 z-0"></div>
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="bg-white p-6 rounded-2xl border border-border shadow-sm h-full relative group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-14 h-14 bg-secondary text-primary rounded-xl flex items-center justify-center mb-6 shadow-md shadow-secondary/30 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ── Class 11 & 12 Streams ── */}
          <ScrollReveal>
            <div className="mt-20 mb-6">
              <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Senior Secondary</span>
              <h2 className="text-3xl font-serif font-bold text-black mt-1 mb-2">Streams for Class 11 & 12</h2>
              <p className="text-muted-foreground max-w-2xl">Students joining Class 11 choose one of the following streams. Each stream is designed to align with future career goals.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {/* Non-Medical */}
            <ScrollReveal delay={0.05}>
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-full">
                <div className="bg-primary px-6 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white">Stream: Non-Medical</h3>
                </div>
                <div className="divide-y divide-border">
                  <div className="px-6 py-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Compulsory Subjects</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />English Core</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Physics</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Chemistry</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Biology / Mathematics</li>
                    </ul>
                  </div>
                  <div className="px-6 py-4 bg-muted/30">
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Optional Subjects <span className="text-muted-foreground font-normal normal-case tracking-normal">(Choose one)</span></p>
                    <p className="text-sm text-muted-foreground">Fine Arts (Painting) · Design · Physical Education · Artificial Intelligence</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Medical */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-full">
                <div className="bg-primary px-6 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white">Stream: Medical</h3>
                </div>
                <div className="divide-y divide-border">
                  <div className="px-6 py-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Compulsory Subjects</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />English Core</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Physics</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Chemistry</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Biology</li>
                    </ul>
                  </div>
                  <div className="px-6 py-4 bg-muted/30">
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Optional Subjects <span className="text-muted-foreground font-normal normal-case tracking-normal">(Choose one)</span></p>
                    <p className="text-sm text-muted-foreground">Fine Arts (Painting) · Design · Physical Education · Artificial Intelligence</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Commerce */}
            <ScrollReveal delay={0.15}>
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-full">
                <div className="bg-primary px-6 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white">Stream: Commerce</h3>
                </div>
                <div className="divide-y divide-border">
                  <div className="px-6 py-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Compulsory Subjects</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />English Core</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Accountancy</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Business Studies</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />Economics</li>
                    </ul>
                  </div>
                  <div className="px-6 py-4 bg-muted/30">
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">5th Compulsory Subject <span className="text-muted-foreground font-normal normal-case tracking-normal">(Tick any ONE)</span></p>
                    <p className="text-sm text-muted-foreground mb-3">Fine Arts (Painting) · Design · Physical Education · Artificial Intelligence</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">6th Additional Subject <span className="text-muted-foreground font-normal normal-case tracking-normal">(Tick any ONE)</span></p>
                    <p className="text-sm text-muted-foreground">Fine Arts (Painting) · Design · Physical Education · Artificial Intelligence</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Humanities */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-full">
                <div className="bg-primary px-6 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white">Stream: Humanities</h3>
                </div>
                <div className="divide-y divide-border">
                  <div className="px-6 py-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Compulsory Subject</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />English Core</li>
                    </ul>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Optional Compulsory Subjects <span className="text-muted-foreground font-normal normal-case tracking-normal">(Tick any FOUR)</span></p>
                    <p className="text-sm text-muted-foreground">Hindi · Political Science · Mathematics · History · Economics · Geography</p>
                  </div>
                  <div className="px-6 py-4 bg-muted/30">
                    <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">6th Additional Subject <span className="text-muted-foreground font-normal normal-case tracking-normal">(Tick any ONE)</span></p>
                    <p className="text-sm text-muted-foreground">Fine Arts (Painting) · Design · Physical Education · Artificial Intelligence</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4} className="mt-0 text-center">
            <div className="bg-primary text-white rounded-3xl p-10 shadow-xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-serif font-bold mb-4">Have Questions?</h3>
              <p className="text-primary-foreground/80 mb-8">Our admission counselors are here to help you through every step of the process.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919812550200" className="inline-flex w-full sm:w-auto items-center justify-center h-12 bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-full px-8 gap-2 transition-colors">
                  <Phone className="w-5 h-5" /> Call +91 98125 50200
                </a>
                <Link href="/contact" className="inline-flex w-full sm:w-auto items-center justify-center h-12 border border-white text-white hover:bg-white hover:text-primary font-bold rounded-full px-8 backdrop-blur-sm bg-white/10 transition-colors gap-2">
                  Message Us <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── Compact Feedback Section ── */}
      <section className="py-16 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">

          {/* Inline feedback form */}
          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6 md:p-8 mb-10">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-secondary" />
                <h3 className="text-xl font-serif font-bold text-black">Share Your Feedback</h3>
              </div>

              {submitted ? (
                <div className="flex items-center gap-3 py-4 text-green-700">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <div>
                    <p className="font-semibold">Thank you for your feedback!</p>
                    <button className="text-sm underline mt-0.5 text-green-600" onClick={() => setSubmitted(false)}>Submit another</button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="Your name" value={name} onChange={e => setName(e.target.value)} className="rounded-lg" />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <Select value={role} onValueChange={v => setRole(v as FeedbackEntry['role'])}>
                        <SelectTrigger className="rounded-lg">
                          <SelectValue placeholder="You are a…" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="parent">Parent / Guardian</SelectItem>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="alumni">Alumni</SelectItem>
                          <SelectItem value="visitor">Visitor</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.role && <p className="text-xs text-destructive mt-1">{errors.role}</p>}
                    </div>
                  </div>

                  <div>
                    <StarPicker value={rating} onChange={setRating} />
                    {errors.rating && <p className="text-xs text-destructive mt-1">{errors.rating}</p>}
                  </div>

                  <div>
                    <Textarea placeholder="Write your feedback here…" value={message} onChange={e => setMessage(e.target.value)} className="rounded-lg min-h-[90px] resize-none" />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" className="bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-lg px-8">
                    Submit Feedback
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* All submitted feedbacks */}
          {feedbacks.length > 0 && (
            <>
              <ScrollReveal>
                <h4 className="text-lg font-serif font-bold text-black mb-5 flex items-center gap-2">
                  <Star className="w-4 h-4 text-secondary fill-secondary" /> What People Say
                </h4>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-4">
                {feedbacks.map((entry, idx) => (
                  <ScrollReveal key={entry.id} delay={idx * 0.05}>
                    <div className="bg-white rounded-xl p-5 border border-border shadow-sm flex flex-col gap-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-bold text-primary">{entry.name}</p>
                          <p className="text-xs text-muted-foreground">{roleLabels[entry.role]}</p>
                        </div>
                        <StarDisplay rating={entry.rating} />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">"{entry.feedback}"</p>
                      <p className="text-xs text-muted-foreground/50">
                        {new Date(entry.submittedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </>
          )}

        </div>
      </section>
    </div>
  );
}
