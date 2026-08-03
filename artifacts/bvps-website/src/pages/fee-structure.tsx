import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Link } from 'wouter';
import { IndianRupee, CheckCircle2, Phone, ArrowLeft, Info, BookOpen, FlaskConical, TrendingUp, Palette } from 'lucide-react';
import heroImg from '@assets/generated_images/hero-school.jpg';

// ── Fee Data ──────────────────────────────────────────────────────────────────

const classFees = [
  { cls: 'Class 1',  group: 'Primary',   color: 'bg-blue-50',   badge: 'bg-blue-100 text-blue-700',   admission: '₹ 3,000', monthly: '₹ 900',   annualFund: '₹ 1,500', totalYear: '₹ 12,300' },
  { cls: 'Class 2',  group: 'Primary',   color: 'bg-blue-50',   badge: 'bg-blue-100 text-blue-700',   admission: '₹ 3,000', monthly: '₹ 950',   annualFund: '₹ 1,500', totalYear: '₹ 12,900' },
  { cls: 'Class 3',  group: 'Primary',   color: 'bg-blue-50',   badge: 'bg-blue-100 text-blue-700',   admission: '₹ 3,500', monthly: '₹ 1,000', annualFund: '₹ 1,800', totalYear: '₹ 13,800' },
  { cls: 'Class 4',  group: 'Primary',   color: 'bg-blue-50',   badge: 'bg-blue-100 text-blue-700',   admission: '₹ 3,500', monthly: '₹ 1,050', annualFund: '₹ 1,800', totalYear: '₹ 14,400' },
  { cls: 'Class 5',  group: 'Primary',   color: 'bg-blue-50',   badge: 'bg-blue-100 text-blue-700',   admission: '₹ 3,500', monthly: '₹ 1,100', annualFund: '₹ 2,000', totalYear: '₹ 15,200' },
  { cls: 'Class 6',  group: 'Middle',    color: 'bg-green-50',  badge: 'bg-green-100 text-green-700', admission: '₹ 4,500', monthly: '₹ 1,300', annualFund: '₹ 2,000', totalYear: '₹ 17,600' },
  { cls: 'Class 7',  group: 'Middle',    color: 'bg-green-50',  badge: 'bg-green-100 text-green-700', admission: '₹ 4,500', monthly: '₹ 1,400', annualFund: '₹ 2,000', totalYear: '₹ 18,800' },
  { cls: 'Class 8',  group: 'Middle',    color: 'bg-green-50',  badge: 'bg-green-100 text-green-700', admission: '₹ 4,500', monthly: '₹ 1,500', annualFund: '₹ 2,500', totalYear: '₹ 20,500' },
  { cls: 'Class 9',  group: 'Secondary', color: 'bg-orange-50', badge: 'bg-orange-100 text-orange-700', admission: '₹ 5,500', monthly: '₹ 2,500', annualFund: '₹ 5,000', totalYear: '₹ 35,000' },
  { cls: 'Class 10', group: 'Secondary', color: 'bg-orange-50', badge: 'bg-orange-100 text-orange-700', admission: '₹ 5,500', monthly: '₹ 2,500', annualFund: '₹ 5,000', totalYear: '₹ 35,000' },
];

const seniorStreams = [
  {
    stream: 'Arts',
    hindiName: 'कला',
    icon: Palette,
    color: 'from-purple-600 to-purple-800',
    lightBg: 'bg-purple-50',
    border: 'border-purple-200',
    textColor: 'text-purple-700',
    subjects: ['Hindi / English', 'History', 'Political Science', 'Geography', 'Economics / Fine Arts'],
    admission: '₹ 7,000',
    monthly: '₹ 2,800',
    annualFund: '₹ 6,400',
    totalYear: '₹ 40,000',
  },
  {
    stream: 'Commerce',
    hindiName: 'वाणिज्य',
    icon: TrendingUp,
    color: 'from-emerald-600 to-emerald-800',
    lightBg: 'bg-emerald-50',
    border: 'border-emerald-200',
    textColor: 'text-emerald-700',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'English / Hindi', 'Maths (optional)'],
    admission: '₹ 7,000',
    monthly: '₹ 3,200',
    annualFund: '₹ 6,600',
    totalYear: '₹ 45,000',
  },
  {
    stream: 'Non-Medical',
    hindiName: 'विज्ञान',
    icon: FlaskConical,
    color: 'from-blue-600 to-blue-800',
    lightBg: 'bg-blue-50',
    border: 'border-blue-200',
    textColor: 'text-blue-700',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'English', 'Computer Science / Biology'],
    admission: '₹ 7,000',
    monthly: '₹ 3,700',
    annualFund: '₹ 5,600',
    totalYear: '₹ 50,000',
  },
];

export default function FeeStructure() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <div className="bg-primary pt-24 pb-16 px-4 relative overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/55" />
        <div className="container mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Admissions</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 mt-2">Fee Structure</h1>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
            <p className="mt-6 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Complete, transparent fee details for Class 1 to 12 — Session 2025–26.
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
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-14">

          {/* ── Class 1–10 Table ── */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl border border-border shadow-md overflow-hidden">
              <div className="bg-primary px-8 py-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white">Class 1 – 10 Fee Structure</h2>
                  <p className="text-primary-foreground/70 text-sm">Session 2025–26</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-primary/5 border-b border-border">
                    <tr>
                      <th className="text-left px-5 py-3 font-bold text-black">Class</th>
                      <th className="text-left px-5 py-3 font-bold text-black">Level</th>
                      <th className="text-left px-5 py-3 font-bold text-black">Admission Fee<br /><span className="text-xs font-normal text-muted-foreground">(one-time)</span></th>
                      <th className="text-left px-5 py-3 font-bold text-black">Monthly Tuition</th>
                      <th className="text-left px-5 py-3 font-bold text-black">Annual Fund</th>
                      <th className="text-left px-5 py-3 font-bold text-black text-green-700">Total / Year</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {classFees.map((row) => (
                      <tr key={row.cls} className={`${row.color} hover:brightness-95 transition-all`}>
                        <td className="px-5 py-3.5 font-bold text-black">{row.cls}</td>
                        <td className="px-5 py-3.5">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${row.badge}`}>{row.group}</span>
                        </td>
                        <td className="px-5 py-3.5 text-muted-foreground">{row.admission}</td>
                        <td className="px-5 py-3.5 text-muted-foreground">{row.monthly}</td>
                        <td className="px-5 py-3.5 text-muted-foreground">{row.annualFund}</td>
                        <td className="px-5 py-3.5 font-bold text-green-700">{row.totalYear}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="px-6 py-4 bg-primary/5 border-t border-border flex items-start gap-2 text-xs text-muted-foreground">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                Annual total excludes one-time admission fee. Admission fee is paid only once at the time of joining.
              </div>
            </div>
          </ScrollReveal>

          {/* ── Class 11–12 Stream Cards ── */}
          <ScrollReveal>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <IndianRupee className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-black">Class 11 &amp; 12 — Stream-wise Fees</h2>
                  <p className="text-muted-foreground text-sm">Session 2025–26 · Choose your stream below</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {seniorStreams.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.stream} className={`rounded-3xl border ${s.border} overflow-hidden shadow-md`}>
                      {/* Stream header */}
                      <div className={`bg-gradient-to-br ${s.color} px-6 py-5 text-white`}>
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-5 h-5" />
                          <span className="text-xs font-semibold uppercase tracking-widest opacity-80">Stream</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold">{s.stream}</h3>
                        <p className="text-white/70 text-sm">{s.hindiName}</p>
                      </div>

                      {/* Fee breakdown */}
                      <div className={`${s.lightBg} px-6 py-5 space-y-3`}>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Admission Fee <span className="text-xs">(one-time)</span></span>
                          <span className="font-semibold text-black">{s.admission}</span>
                        </div>
                        <div className="flex justify-between text-sm border-t border-border pt-3">
                          <span className="text-muted-foreground">Monthly Tuition</span>
                          <span className="font-semibold text-black">{s.monthly}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Annual Fund</span>
                          <span className="font-semibold text-black">{s.annualFund}</span>
                        </div>
                        <div className={`flex justify-between text-base font-bold border-t border-border pt-3 ${s.textColor}`}>
                          <span>Total per Year</span>
                          <span>{s.totalYear}</span>
                        </div>
                      </div>

                      {/* Subjects */}
                      <div className="px-6 py-4 bg-white border-t border-border">
                        <p className="text-xs font-bold text-black mb-2 uppercase tracking-wide">Key Subjects</p>
                        <ul className="space-y-1">
                          {s.subjects.map((sub) => (
                            <li key={sub} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${s.textColor}`} />
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-4 text-xs text-muted-foreground flex items-start gap-1.5">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                Admission fee (₹ 7,000) is paid only once at the time of joining. Annual total = monthly × 12 + annual fund.
              </p>
            </div>
          </ScrollReveal>

          {/* ── Documents Required ── */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl border border-border shadow-md p-8">
              <h2 className="text-2xl font-serif font-bold text-black mb-2">Documents Required at Admission</h2>
              <p className="text-muted-foreground text-sm mb-6">Please bring originals + 2 photocopies of each document.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ['Birth Certificate', 'Municipal / Gram Panchayat issued'],
                  ['Aadhaar Card', "Student's Aadhaar (parent if not available)"],
                  ['Previous School TC', 'Transfer Certificate from last school'],
                  ['Previous Report Card', 'Mark sheet / Progress card'],
                  ['Passport Photos', '4 recent colour photos (white background)'],
                  ['Residence Proof', 'Electricity bill / Ration card / Voter ID'],
                  ['Caste Certificate', 'If applicable (SC / BC / OBC)'],
                ].map(([doc, note]) => (
                  <div key={doc} className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-border">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-black">{doc}</p>
                      <p className="text-xs text-muted-foreground">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── Payment Options ── */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl border border-border shadow-md p-8">
              <h2 className="text-2xl font-serif font-bold text-black mb-6 flex items-center gap-2">
                <IndianRupee className="w-6 h-6 text-secondary" /> Fee Payment Options
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm p-4 rounded-xl bg-muted/30 border border-border">
                  <IndianRupee className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Cash</p>
                    <p className="text-xs text-muted-foreground">At the school office during working hours (Mon–Sat, 9 AM – 2 PM)</p>
                  </div>
                </div>
                <a href="upi://pay?pa=bvpskalayat@sbi&pn=Bal%20Vikas%20Public%20School&cu=INR"
                  className="flex items-start gap-3 text-sm p-4 rounded-xl bg-green-50 border border-green-200 hover:bg-green-100 transition-colors group">
                  <IndianRupee className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <p className="font-semibold text-black group-hover:text-green-700">UPI / PhonePe / GPay / Paytm</p>
                    <p className="text-xs text-muted-foreground">UPI ID: <span className="font-mono font-bold text-green-700">bvpskalayat@sbi</span></p>
                    <p className="text-xs text-green-600 font-semibold mt-0.5">Tap to open payment app →</p>
                  </div>
                </a>
                <div className="text-sm rounded-xl border border-blue-200 overflow-hidden">
                  <div className="flex items-start gap-3 p-4 bg-blue-50">
                    <IndianRupee className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-black">Bank Transfer (NEFT / IMPS)</p>
                      <div className="space-y-1 text-xs mt-2">
                        <p><span className="font-bold text-black">Bank:</span> State Bank of India, Kalayat</p>
                        <p><span className="font-bold text-black">A/C Name:</span> Bal Vikas Public School</p>
                        <p><span className="font-bold text-black">A/C No.:</span> 39248675012</p>
                        <p><span className="font-bold text-black">IFSC:</span> SBIN0009876</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 italic">* Share transaction ID at office after transfer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── CTA ── */}
          <ScrollReveal>
            <div className="bg-primary text-white rounded-3xl p-8 text-center">
              <h3 className="text-xl font-serif font-bold mb-2">Questions about fees?</h3>
              <p className="text-primary-foreground/80 text-sm mb-5">Call us or visit the school office Mon–Sat, 9 AM – 2 PM.</p>
              <a href="tel:+919812550200" className="inline-flex items-center gap-2 bg-secondary text-primary hover:bg-secondary/90 font-bold rounded-full px-8 h-11 text-sm transition-colors">
                <Phone className="w-4 h-4" /> +91 98125 50200
              </a>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
}
