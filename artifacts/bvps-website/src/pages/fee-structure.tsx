import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Link } from 'wouter';
import { IndianRupee, CheckCircle2, Phone, ArrowLeft, Info } from 'lucide-react';

export default function FeeStructure() {
  return (
    <div className="flex flex-col">
      <div className="bg-primary pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm">Admissions</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 mt-2">Fee Structure</h1>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
            <p className="mt-6 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Transparent fee details for all classes — session 2025–26.
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
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-12">

          {/* Fee Table */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl border border-border shadow-md overflow-hidden">
              <div className="bg-primary px-8 py-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <IndianRupee className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white">Class-wise Fee Structure</h2>
                  <p className="text-primary-foreground/70 text-sm">Approximate guide — exact details at admission office</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-primary/5 border-b border-border">
                    <tr>
                      <th className="text-left px-6 py-3 font-bold text-black">Class</th>
                      <th className="text-left px-6 py-3 font-bold text-black">Admission Fee (one-time)</th>
                      <th className="text-left px-6 py-3 font-bold text-black">Monthly Tuition</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ['Class 1 – 5',   '₹ 1,500', '₹ 600 – 800'],
                      ['Class 6 – 8',   '₹ 2,000', '₹ 800 – 1,000'],
                      ['Class 9 – 10',  '₹ 2,500', '₹ 1,000 – 1,200'],
                      ['Class 11 – 12', '₹ 3,000', '₹ 1,200 – 1,500'],
                    ].map(([cls, adm, mon]) => (
                      <tr key={cls} className="hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-4 font-semibold text-black">{cls}</td>
                        <td className="px-6 py-4 text-muted-foreground">{adm}</td>
                        <td className="px-6 py-4 text-muted-foreground">{mon}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-amber-50 border-t border-amber-100 flex items-start gap-2 text-xs text-amber-700">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                Annual charges, exam fees &amp; activity fees are separate. Visit the admission office for exact amounts.
              </div>
            </div>
          </ScrollReveal>

          {/* Documents Required */}
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

          {/* Payment Options */}
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

          {/* CTA */}
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
