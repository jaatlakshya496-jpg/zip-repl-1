import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Link } from 'wouter';
import {
  ClipboardList, Users, UserCheck, GraduationCap, ArrowRight, Phone,
  Star, MessageSquare, CheckCircle2, ChevronDown, ChevronUp,
  FileText, IndianRupee, Clock, MapPin, Calendar, BookOpen,
  Briefcase, User, Mail, Home, School, Send, CheckSquare, Square,
  Video, PhoneCall, Building2, X, Info, Quote,
} from 'lucide-react';
import principalImg from '@assets/principal-ramphal-sharma.png';
import { getFeedbacks, saveFeedback, type FeedbackEntry, roleLabels } from '@/lib/feedback-store';
import { saveApplication } from '@/lib/enquiry-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';

/* ─── Star display ─────────────────────────────────────── */
function StarDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} className={`w-4 h-4 ${s <= rating ? 'fill-secondary text-secondary' : 'text-muted-foreground/20'}`} />
      ))}
    </div>
  );
}

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

/* ─── Enquiry info accordion items ─────────────────────── */
const enquiryItems = [
  {
    icon: IndianRupee,
    title: 'Fee Structure',
    color: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-600 bg-emerald-100',
    content: (
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">Fees vary by class. Below is an approximate guide. Exact details are provided at the admission office.</p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="text-left px-4 py-2.5 font-semibold">Class</th>
                <th className="text-left px-4 py-2.5 font-semibold">Admission Fee</th>
                <th className="text-left px-4 py-2.5 font-semibold">Monthly Tuition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ['Class 1 – 5',  '₹ 1,500', '₹ 600 – 800'],
                ['Class 6 – 8',  '₹ 2,000', '₹ 800 – 1,000'],
                ['Class 9 – 10', '₹ 2,500', '₹ 1,000 – 1,200'],
                ['Class 11 – 12','₹ 3,000', '₹ 1,200 – 1,500'],
              ].map(([cls, adm, mon]) => (
                <tr key={cls} className="hover:bg-muted/30">
                  <td className="px-4 py-2.5 font-medium text-black">{cls}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{adm}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{mon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground italic">* Annual charges, exam fees & activity fees are separate. Visit office for exact amounts.</p>
      </div>
    ),
  },
  {
    icon: FileText,
    title: 'Documents Required',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600 bg-blue-100',
    content: (
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground mb-3">Please bring originals + 2 photocopies of each document at the time of submission.</p>
        {[
          ['Birth Certificate', 'Municipal / Gram Panchayat issued'],
          ['Aadhaar Card', 'Student\'s Aadhaar (parent if not available)'],
          ['Previous School TC', 'Transfer Certificate from last school attended'],
          ['Previous Class Report Card', 'Mark sheet / Progress card'],
          ['Passport Photos', '4 recent colour photos (white background)'],
          ['Residence Proof', 'Electricity bill / Ration card / Voter ID of parent'],
          ['Caste Certificate', 'If applicable (SC/BC/OBC)'],
        ].map(([doc, note]) => (
          <div key={doc} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border">
            <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-black">{doc}</p>
              <p className="text-xs text-muted-foreground">{note}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Clock,
    title: 'School Timings & Office Hours',
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-600 bg-orange-100',
    content: (
      <div className="space-y-3">
        {[
          { label: 'School Hours', value: 'Monday – Saturday: 8:00 AM – 3:00 PM', sub: 'Sunday: Closed' },
          { label: 'Admission Office', value: 'Monday – Saturday: 9:00 AM – 2:00 PM', sub: 'Best time to visit: 10 AM – 12 PM' },
          { label: 'Morning Assembly', value: 'Daily at 8:00 AM sharp', sub: 'All students must be present' },
          { label: 'Break / Recess', value: '12:00 PM – 12:30 PM', sub: 'Mid-day meal available' },
        ].map(({ label, value, sub }) => (
          <div key={label} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border">
            <Clock className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-bold text-black">{label}</p>
              <p className="text-sm text-muted-foreground">{value}</p>
              <p className="text-xs text-muted-foreground/70">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: MapPin,
    title: 'Contact & Location',
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600 bg-purple-100',
    content: (
      <div className="space-y-3">
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { icon: Phone, label: 'Phone', value: '+91 98125 50200', note: 'Mon–Sat, 9 AM – 2 PM' },
            { icon: MapPin, label: 'Address', value: 'Railway Road, Kalayat', note: 'District Kaithal, Haryana – 136027' },
            { icon: User, label: 'Principal', value: 'Sh. Ramphal Sharma', note: 'Available by appointment' },
            { icon: Building2, label: 'Board', value: 'Haryana Board (HBSE)', note: 'Bhiwani, Haryana' },
          ].map(({ icon: Icon, label, value, note }) => (
            <div key={label} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-border">
              <Icon className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{label}</p>
                <p className="text-sm font-semibold text-black">{value}</p>
                <p className="text-xs text-muted-foreground/70">{note}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://maps.google.com/?q=Bal+Vikas+Public+School+Kalayat+Kaithal+Haryana"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:text-secondary transition-colors mt-1"
        >
          <MapPin className="w-4 h-4" /> Open in Google Maps →
        </a>
      </div>
    ),
  },
];

/* ─── Interview tips ────────────────────────────────────── */
const interviewTips = [
  { for: 'Student', tips: ['Dress in school uniform: white shirt, black pants, black shoes', 'Be polite and confident', 'Know your previous class subjects', 'Carry your report card'] },
  { for: 'Parents', tips: ['Bring all required documents', 'Be ready to discuss child\'s strengths', 'Ask about curriculum and fee schedule', 'Note the school rules and calendar'] },
];

const timeSlots = ['9:00 AM – 10:00 AM', '10:00 AM – 11:00 AM', '11:00 AM – 12:00 PM', '12:00 PM – 1:00 PM'];

/* ─── Enrollment checklist ──────────────────────────────── */
const enrollmentItems = [
  'Admission confirmation letter from school',
  'Original + photocopy of all required documents',
  'Admission fee payment (cash / online transfer)',
  'Student Aadhaar card copy',
  'Signed school rules & parent declaration form',
  'Medical fitness certificate (if required)',
  '4 passport-size photographs',
  'Previous school TC (Transfer Certificate)',
  'School uniform: white shirt, black pants & black shoes (from approved vendor)',
  'School diary & stationery as per class list',
];

/* ─── Main page ─────────────────────────────────────────── */
export default function Admissions() {
  /* feedback state */
  const [feedbacks, setFeedbacks] = useState<FeedbackEntry[]>([]);
  const [fbSubmitted, setFbSubmitted] = useState(false);
  const [fbName, setFbName] = useState('');
  const [fbRole, setFbRole] = useState<FeedbackEntry['role'] | ''>('');
  const [fbRating, setFbRating] = useState(0);
  const [fbMessage, setFbMessage] = useState('');
  const [fbErrors, setFbErrors] = useState<Record<string, string>>({});

  /* enquiry accordion */
  const [openEnquiry, setOpenEnquiry] = useState<number | null>(null);

  /* application form state */
  const [appSubmitted, setAppSubmitted] = useState(false);
  const [appErrors, setAppErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    studentName: '', dob: '', gender: '', classApplying: '', stream: '',
    parentName: '', relation: '', mobile: '', email: '',
    address: '', previousSchool: '', message: '',
    interviewDate: '', interviewSlot: '', interviewMode: '',
  });

  /* enrollment checklist */
  const [checked, setChecked] = useState<boolean[]>(enrollmentItems.map(() => false));

  useEffect(() => { setFeedbacks(getFeedbacks()); }, []);

  function set(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }));
  }

  function validateApp() {
    const e: Record<string, string> = {};
    if (!form.studentName.trim()) e.studentName = 'Student name required';
    if (!form.dob) e.dob = 'Date of birth required';
    if (!form.gender) e.gender = 'Select gender';
    if (!form.classApplying) e.classApplying = 'Select class';
    if (!form.parentName.trim()) e.parentName = 'Parent name required';
    if (!form.mobile.trim() || !/^[6-9]\d{9}$/.test(form.mobile.replace(/\s/g,''))) e.mobile = 'Valid 10-digit mobile required';
    if (!form.address.trim()) e.address = 'Address required';
    return e;
  }

  function handleAppSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateApp();
    setAppErrors(errs);
    if (Object.keys(errs).length > 0) return;
    saveApplication({ ...form });
    setAppSubmitted(true);
    setForm({ studentName:'', dob:'', gender:'', classApplying:'', stream:'', parentName:'', relation:'', mobile:'', email:'', address:'', previousSchool:'', message:'', interviewDate:'', interviewSlot:'', interviewMode:'' });
  }

  function handleFbSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!fbName.trim() || fbName.length < 2) errs.name = 'Name is required';
    if (!fbRole) errs.role = 'Please select your role';
    if (fbRating === 0) errs.rating = 'Please select a rating';
    if (!fbMessage.trim() || fbMessage.length < 5) errs.message = 'Please write your feedback';
    setFbErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const entry = saveFeedback({ name: fbName, role: fbRole as FeedbackEntry['role'], category: 'overall', rating: fbRating, feedback: fbMessage });
    setFeedbacks([entry, ...feedbacks]);
    setFbSubmitted(true);
    setFbName(''); setFbRole(''); setFbRating(0); setFbMessage('');
  }

  const showStream = form.classApplying === '11' || form.classApplying === '12';
  const checkedCount = checked.filter(Boolean).length;

  return (
    <div className="flex flex-col">

      {/* ── Page Header ── */}
      <div className="bg-primary pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Admissions 2025–26</h1>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Join the BVPS family. Admissions open for Classes 1 to 12.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">

          {/* ── Banner ── */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-lg mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
            <ScrollReveal>
              <div className="max-w-3xl">
                <h2 className="text-3xl font-serif font-bold text-black mb-4">Start Your Child's Journey With Us</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                  Bal Vikas Public School welcomes students from all backgrounds. Admissions are open for <strong>Classes 1 through 12</strong> for the session 2025–26.
                </p>
                <div className="inline-flex items-center gap-3 px-4 py-3 bg-primary/5 rounded-xl text-primary font-medium border border-primary/10 text-sm">
                  <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
                  We do not offer Pre-primary classes. Admissions start from Class 1.
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ══════════════════════════════════════════════════
              STEP 1 — ENQUIRY & INFORMATION
          ══════════════════════════════════════════════════ */}
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-lg shrink-0">1</div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-black">Enquiry & Information</h2>
                <p className="text-muted-foreground text-sm">Click any card below to expand full details</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-3 mb-16">
            {enquiryItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.07}>
                <div className={`rounded-2xl border ${item.color} overflow-hidden`}>
                  <button
                    onClick={() => setOpenEnquiry(openEnquiry === i ? null : i)}
                    className="w-full flex items-center gap-4 px-6 py-4 text-left hover:bg-black/5 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.iconColor} shrink-0`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="flex-1 font-bold text-black text-base">{item.title}</span>
                    <motion.div animate={{ rotate: openEnquiry === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openEnquiry === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ══════════════════════════════════════════════════
              STEP 2 — APPLICATION SUBMISSION FORM
          ══════════════════════════════════════════════════ */}
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-lg shrink-0">2</div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-black">Application Submission</h2>
                <p className="text-muted-foreground text-sm">Fill this form to register your admission enquiry</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white rounded-3xl border border-border shadow-lg p-8 md:p-10 mb-16">
              {appSubmitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-black mb-3">Application Submitted!</h3>
                  <p className="text-muted-foreground mb-2 max-w-md mx-auto">Thank you! Your admission enquiry has been recorded. Our team will contact you within <strong>1–2 working days</strong> on the mobile number provided.</p>
                  <p className="text-sm text-muted-foreground mb-6">For urgent queries: <a href="tel:+919812550200" className="text-primary font-semibold">+91 98125 50200</a></p>
                  <button onClick={() => setAppSubmitted(false)} className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-secondary transition-colors border border-primary/20 rounded-full px-6 py-2.5">
                    Submit Another Application
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleAppSubmit} className="space-y-8">

                  {/* Student Details */}
                  <div>
                    <h4 className="font-bold text-black mb-4 flex items-center gap-2 text-base">
                      <User className="w-4 h-4 text-secondary" /> Student Details
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="lg:col-span-2">
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Student Full Name *</label>
                        <Input placeholder="e.g. Rahul Sharma" value={form.studentName} onChange={e => set('studentName', e.target.value)} />
                        {appErrors.studentName && <p className="text-xs text-destructive mt-1">{appErrors.studentName}</p>}
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Date of Birth *</label>
                        <Input type="date" value={form.dob} onChange={e => set('dob', e.target.value)} />
                        {appErrors.dob && <p className="text-xs text-destructive mt-1">{appErrors.dob}</p>}
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Gender *</label>
                        <Select value={form.gender} onValueChange={v => set('gender', v)}>
                          <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {appErrors.gender && <p className="text-xs text-destructive mt-1">{appErrors.gender}</p>}
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Class Applying For *</label>
                        <Select value={form.classApplying} onValueChange={v => set('classApplying', v)}>
                          <SelectTrigger><SelectValue placeholder="Select class" /></SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 12 }, (_, i) => i + 1).map(c => (
                              <SelectItem key={c} value={String(c)}>Class {c}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {appErrors.classApplying && <p className="text-xs text-destructive mt-1">{appErrors.classApplying}</p>}
                      </div>
                      {showStream && (
                        <div>
                          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Stream (Class 11–12)</label>
                          <Select value={form.stream} onValueChange={v => set('stream', v)}>
                            <SelectTrigger><SelectValue placeholder="Select stream" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="non-medical">Non-Medical (PCM)</SelectItem>
                              <SelectItem value="medical">Medical (PCB)</SelectItem>
                              <SelectItem value="commerce">Commerce</SelectItem>
                              <SelectItem value="humanities">Humanities / Arts</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                      <div className="sm:col-span-2 lg:col-span-3">
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Previous School Name (if any)</label>
                        <Input placeholder="e.g. Govt. Senior Secondary School, Kalayat" value={form.previousSchool} onChange={e => set('previousSchool', e.target.value)} />
                      </div>
                    </div>
                  </div>

                  {/* Parent Details */}
                  <div>
                    <h4 className="font-bold text-black mb-4 flex items-center gap-2 text-base">
                      <Briefcase className="w-4 h-4 text-secondary" /> Parent / Guardian Details
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Parent / Guardian Name *</label>
                        <Input placeholder="e.g. Suresh Kumar Sharma" value={form.parentName} onChange={e => set('parentName', e.target.value)} />
                        {appErrors.parentName && <p className="text-xs text-destructive mt-1">{appErrors.parentName}</p>}
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Relation to Student</label>
                        <Select value={form.relation} onValueChange={v => set('relation', v)}>
                          <SelectTrigger><SelectValue placeholder="Select relation" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="father">Father</SelectItem>
                            <SelectItem value="mother">Mother</SelectItem>
                            <SelectItem value="guardian">Guardian</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Mobile Number *</label>
                        <Input type="tel" placeholder="10-digit mobile" maxLength={10} value={form.mobile} onChange={e => set('mobile', e.target.value)} />
                        {appErrors.mobile && <p className="text-xs text-destructive mt-1">{appErrors.mobile}</p>}
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Email (optional)</label>
                        <Input type="email" placeholder="yourname@email.com" value={form.email} onChange={e => set('email', e.target.value)} />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Residential Address *</label>
                        <Textarea placeholder="House No., Street, Village/Town, District, Pincode" value={form.address} onChange={e => set('address', e.target.value)} className="resize-none min-h-[80px]" />
                        {appErrors.address && <p className="text-xs text-destructive mt-1">{appErrors.address}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Interview Preference */}
                  <div>
                    <h4 className="font-bold text-black mb-1 flex items-center gap-2 text-base">
                      <Calendar className="w-4 h-4 text-secondary" /> Interview / Interaction Preference
                    </h4>
                    <p className="text-xs text-muted-foreground mb-4">Optional — our team will confirm your slot</p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Preferred Date</label>
                        <Input type="date" value={form.interviewDate} onChange={e => set('interviewDate', e.target.value)} min={new Date().toISOString().split('T')[0]} />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Preferred Time Slot</label>
                        <Select value={form.interviewSlot} onValueChange={v => set('interviewSlot', v)}>
                          <SelectTrigger><SelectValue placeholder="Select slot" /></SelectTrigger>
                          <SelectContent>
                            {timeSlots.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Mode</label>
                        <Select value={form.interviewMode} onValueChange={v => set('interviewMode', v)}>
                          <SelectTrigger><SelectValue placeholder="How to meet?" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="in-person">In-Person (School Visit)</SelectItem>
                            <SelectItem value="phone">Phone Call</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5 block">Additional Message / Special Note</label>
                    <Textarea placeholder="Any specific question, requirement, or information you'd like to share…" value={form.message} onChange={e => set('message', e.target.value)} className="resize-none min-h-[80px]" />
                  </div>

                  <Button type="submit" className="bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-xl px-10 h-12 text-base gap-2 w-full sm:w-auto">
                    <Send className="w-4 h-4" /> Submit Application
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* ══════════════════════════════════════════════════
              STEP 3 — INTERVIEW / INTERACTION
          ══════════════════════════════════════════════════ */}
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-lg shrink-0">3</div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-black">Interview / Interaction</h2>
                <p className="text-muted-foreground text-sm">A brief, friendly interaction with the student and parents</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* What to expect */}
            <ScrollReveal delay={0.05}>
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="w-5 h-5 text-secondary" />
                  <h3 className="font-bold text-black text-base">What to Expect</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    ['Duration', '15–20 minutes, relaxed conversation'],
                    ['Who attends', 'Student + at least one parent/guardian'],
                    ['Language', 'Hindi or English — your comfort'],
                    ['Purpose', 'Understanding the child\'s learning needs'],
                    ['No exam', 'Not a test — just a friendly interaction'],
                  ].map(([key, val]) => (
                    <li key={key} className="flex gap-3 text-sm">
                      <span className="font-semibold text-black w-28 shrink-0">{key}</span>
                      <span className="text-muted-foreground">{val}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Interview modes */}
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Video className="w-5 h-5 text-secondary" />
                  <h3 className="font-bold text-black text-base">Interaction Modes</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: Building2, mode: 'In-Person (Recommended)', detail: 'Visit school between 9 AM – 12 PM, Mon–Sat. Best to call ahead.' },
                    { icon: PhoneCall, mode: 'Phone Call', detail: 'Our counselor will call on your mobile. Provide a preferred time in the form above.' },
                  ].map(({ icon: Icon, mode, detail }) => (
                    <div key={mode} className="flex gap-3 p-3 rounded-lg bg-muted/30 border border-border">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-black">{mode}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Tips for students and parents */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {interviewTips.map((t, i) => (
              <ScrollReveal key={t.for} delay={i * 0.08}>
                <div className={`rounded-2xl p-6 border ${i === 0 ? 'bg-primary border-primary/20' : 'bg-secondary/10 border-secondary/30'}`}>
                  <h4 className={`font-bold mb-3 flex items-center gap-2 ${i === 0 ? 'text-white' : 'text-black'}`}>
                    <CheckCircle2 className={`w-4 h-4 ${i === 0 ? 'text-secondary' : 'text-primary'}`} />
                    Tips for {t.for}
                  </h4>
                  <ul className="space-y-2">
                    {t.tips.map(tip => (
                      <li key={tip} className={`text-sm flex items-start gap-2 ${i === 0 ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                        <span className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${i === 0 ? 'bg-secondary' : 'bg-primary'}`} />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ══════════════════════════════════════════════════
              STEP 4 — ENROLLMENT
          ══════════════════════════════════════════════════ */}
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-lg shrink-0">4</div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-black">Enrollment</h2>
                <p className="text-muted-foreground text-sm">Final step — complete formalities & join the BVPS family</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Checklist */}
            <ScrollReveal delay={0.05}>
              <div className="bg-white rounded-2xl border border-border shadow-sm p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-black flex items-center gap-2">
                    <ClipboardList className="w-5 h-5 text-secondary" /> Enrollment Checklist
                  </h3>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${checkedCount === enrollmentItems.length ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'}`}>
                    {checkedCount}/{enrollmentItems.length} done
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">Tick each item as you prepare it before coming to school.</p>
                <ul className="space-y-2">
                  {enrollmentItems.map((item, i) => (
                    <li key={i}>
                      <button
                        onClick={() => setChecked(prev => prev.map((v, j) => j === i ? !v : v))}
                        className="w-full flex items-start gap-3 text-left p-2.5 rounded-lg hover:bg-muted/30 transition-colors group"
                      >
                        {checked[i]
                          ? <CheckSquare className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          : <Square className="w-5 h-5 text-muted-foreground/40 shrink-0 mt-0.5 group-hover:text-muted-foreground transition-colors" />
                        }
                        <span className={`text-sm transition-colors ${checked[i] ? 'text-muted-foreground line-through' : 'text-black'}`}>
                          {item}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                {checkedCount === enrollmentItems.length && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-semibold flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" /> You're all set! Visit school to complete enrollment.
                  </motion.div>
                )}
              </div>
            </ScrollReveal>

            {/* Enrollment info */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-4 h-full flex flex-col">
                <div className="bg-white rounded-2xl border border-border shadow-sm p-6 flex-1">
                  <h3 className="font-bold text-black mb-4 flex items-center gap-2">
                    <IndianRupee className="w-5 h-5 text-secondary" /> Fee Payment Options
                  </h3>
                  <div className="space-y-3">
                    {/* Cash */}
                    <div className="flex items-start gap-3 text-sm p-3 rounded-lg bg-muted/30 border border-border">
                      <IndianRupee className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-black">Cash</p>
                        <p className="text-xs text-muted-foreground">At the school office during working hours (Mon–Sat, 9 AM – 2 PM)</p>
                      </div>
                    </div>

                    {/* UPI */}
                    <a
                      href="upi://pay?pa=bvpskalayat@sbi&pn=Bal%20Vikas%20Public%20School&cu=INR"
                      className="flex items-start gap-3 text-sm p-3 rounded-lg bg-green-50 border border-green-200 hover:bg-green-100 transition-colors cursor-pointer group"
                    >
                      <IndianRupee className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold text-black group-hover:text-green-700">UPI / PhonePe / GPay / Paytm</p>
                        <p className="text-xs text-muted-foreground">UPI ID: <span className="font-mono font-bold text-green-700">bvpskalayat@sbi</span></p>
                        <p className="text-xs text-green-600 font-semibold mt-0.5">Tap to open payment app →</p>
                      </div>
                    </a>

                    {/* Bank Transfer */}
                    <div className="text-sm rounded-lg border border-blue-200 overflow-hidden">
                      <div className="flex items-start gap-3 p-3 bg-blue-50">
                        <IndianRupee className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-semibold text-black">Bank Transfer (NEFT / IMPS)</p>
                          <p className="text-xs text-muted-foreground mb-2">Transfer directly to school's bank account:</p>
                          <div className="space-y-1 text-xs">
                            <p><span className="font-bold text-black">Bank:</span> State Bank of India, Kalayat</p>
                            <p><span className="font-bold text-black">A/C Name:</span> Bal Vikas Public School</p>
                            <p><span className="font-bold text-black">A/C No.:</span> 39248675012</p>
                            <p><span className="font-bold text-black">IFSC:</span> SBIN0009876</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1.5 italic">* Please share transaction ID at office after transfer.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <GraduationCap className="w-8 h-8 text-secondary mb-3" />
                  <h4 className="font-bold text-lg mb-2">Welcome to BVPS!</h4>
                  <p className="text-primary-foreground/75 text-sm leading-relaxed">
                    Once enrolled, you'll receive the school diary, fee receipt, and a welcome letter. Your child's journey to excellence begins here.
                  </p>
                  <a href="tel:+919812550200" className="mt-4 inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:underline">
                    <Phone className="w-4 h-4" /> +91 98125 50200
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Class 11 & 12 Streams ── */}
          <ScrollReveal>
            <div className="mb-6">
              <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Senior Secondary</span>
              <h2 className="text-3xl font-serif font-bold text-black mt-1 mb-2">Streams for Class 11 & 12</h2>
              <p className="text-muted-foreground max-w-2xl">Students joining Class 11 choose one of the following streams.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { name: 'Non-Medical', compulsory: ['English Core', 'Physics', 'Chemistry', 'Biology / Mathematics'], optional: 'Fine Arts · Design · Physical Education · Artificial Intelligence', optLabel: 'Optional (Choose one)' },
              { name: 'Medical', compulsory: ['English Core', 'Physics', 'Chemistry', 'Biology'], optional: 'Fine Arts · Design · Physical Education · Artificial Intelligence', optLabel: 'Optional (Choose one)' },
              { name: 'Commerce', compulsory: ['English Core', 'Accountancy', 'Business Studies', 'Economics'], optional: 'Fine Arts · Design · Physical Education · Artificial Intelligence', optLabel: '5th & 6th Subject (Choose one each)' },
              { name: 'Humanities', compulsory: ['English Core'], optional: 'Hindi · Political Science · Mathematics · History · Economics · Geography', optLabel: 'Choose any FOUR compulsory + one additional' },
            ].map(stream => (
              <ScrollReveal key={stream.name} delay={0.05}>
                <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-full">
                  <div className="bg-primary px-6 py-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-white">Stream: {stream.name}</h3>
                  </div>
                  <div className="divide-y divide-border">
                    <div className="px-6 py-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-2">Compulsory Subjects</p>
                      <ul className="space-y-1">
                        {stream.compulsory.map(s => (
                          <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="px-6 py-4 bg-muted/30">
                      <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">{stream.optLabel}</p>
                      <p className="text-sm text-muted-foreground">{stream.optional}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ── Have Questions ── */}
          <ScrollReveal>
            <div className="bg-primary text-white rounded-3xl p-10 shadow-xl max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-serif font-bold mb-3">Have Questions?</h3>
              <p className="text-primary-foreground/80 mb-8">Our admission counselors are here to help you through every step.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919812550200" className="inline-flex w-full sm:w-auto items-center justify-center h-12 bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-full px-8 gap-2 transition-colors">
                  <Phone className="w-5 h-5" /> Call +91 98125 50200
                </a>
                <Link href="/contact" className="inline-flex w-full sm:w-auto items-center justify-center h-12 border border-white text-white hover:bg-white hover:text-primary font-bold rounded-full px-8 bg-white/10 transition-colors gap-2">
                  Message Us <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ── Principal's Message Section ── */}
      <section className="py-16 bg-primary/5 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-secondary font-semibold uppercase tracking-widest text-sm">From the Desk of</span>
              <h2 className="text-3xl font-serif font-bold text-black mt-1">Principal's Message</h2>
              <div className="w-16 h-1 bg-secondary mx-auto mt-3 rounded-full" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white rounded-3xl shadow-lg border border-border overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Photo side */}
                <div className="md:w-64 shrink-0 bg-primary flex flex-col items-center justify-center p-8 gap-4">
                  <div className="w-32 h-32 rounded-full border-4 border-secondary overflow-hidden shadow-xl">
                    <img
                      src={principalImg}
                      alt="Sh. Ramphal Sharma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-white font-serif font-bold text-lg leading-tight">Sh. Ramphal Sharma</p>
                    <p className="text-secondary text-sm font-semibold uppercase tracking-wider mt-1">Principal</p>
                    <p className="text-primary-foreground/60 text-xs mt-1">Bal Vikas Public School</p>
                    <p className="text-primary-foreground/60 text-xs">Kalayat, Haryana</p>
                  </div>
                </div>

                {/* Message side */}
                <div className="flex-1 p-8 md:p-10">
                  <Quote className="w-10 h-10 text-secondary/30 mb-4" />
                  <p className="text-muted-foreground text-base leading-relaxed italic mb-5">
                    "Welcome to Bal Vikas Public School — a place where every child's potential is recognized and nurtured. As you consider joining our school family, I want you to know that our doors are open to all students who are eager to learn, grow, and contribute to society."
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-5">
                    At BVPS, we believe education is not just about academics — it is about building character, confidence, and compassion. Our dedicated team of 29 teachers works tirelessly to ensure that every student receives personal attention and the best possible guidance.
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    I warmly invite you and your family to visit our school, meet our staff, and experience the BVPS spirit firsthand. We look forward to welcoming your child into our family for the session 2025–26.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:+919812550200"
                      className="inline-flex items-center gap-2 bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-full px-6 h-11 text-sm transition-colors"
                    >
                      <Phone className="w-4 h-4" /> Speak with the Principal
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-full px-6 h-11 text-sm transition-colors"
                    >
                      Send a Message <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Feedback Section ── */}
      <section className="py-16 bg-muted/40 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-border shadow-sm p-6 md:p-8 mb-10">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-secondary" />
                <h3 className="text-xl font-serif font-bold text-black">Share Your Feedback</h3>
              </div>
              {fbSubmitted ? (
                <div className="flex items-center gap-3 py-4 text-green-700">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <div>
                    <p className="font-semibold">Thank you for your feedback!</p>
                    <button className="text-sm underline mt-0.5 text-green-600" onClick={() => setFbSubmitted(false)}>Submit another</button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFbSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="Your name" value={fbName} onChange={e => setFbName(e.target.value)} />
                      {fbErrors.name && <p className="text-xs text-destructive mt-1">{fbErrors.name}</p>}
                    </div>
                    <div>
                      <Select value={fbRole} onValueChange={v => setFbRole(v as FeedbackEntry['role'])}>
                        <SelectTrigger><SelectValue placeholder="You are a…" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="parent">Parent / Guardian</SelectItem>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="alumni">Alumni</SelectItem>
                          <SelectItem value="visitor">Visitor</SelectItem>
                        </SelectContent>
                      </Select>
                      {fbErrors.role && <p className="text-xs text-destructive mt-1">{fbErrors.role}</p>}
                    </div>
                  </div>
                  <div>
                    <StarPicker value={fbRating} onChange={setFbRating} />
                    {fbErrors.rating && <p className="text-xs text-destructive mt-1">{fbErrors.rating}</p>}
                  </div>
                  <div>
                    <Textarea placeholder="Write your feedback here…" value={fbMessage} onChange={e => setFbMessage(e.target.value)} className="min-h-[90px] resize-none" />
                    {fbErrors.message && <p className="text-xs text-destructive mt-1">{fbErrors.message}</p>}
                  </div>
                  <Button type="submit" className="bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-lg px-8">
                    Submit Feedback
                  </Button>
                </form>
              )}
            </div>
          </ScrollReveal>

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
