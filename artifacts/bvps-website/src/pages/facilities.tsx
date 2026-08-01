import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { 
  BookOpen, 
  Monitor, 
  Presentation, 
  Trees, 
  Camera, 
  Droplets,
  LayoutGrid
} from 'lucide-react';
import libImg from '@assets/generated_images/facility-library.jpg';
import compImg from '@assets/generated_images/facility-computer.jpg';
import playImg from '@assets/Screenshot_20260721_095641_1784611430135.jpg';
import smartImg from '@assets/generated_images/facility-smartclass.jpg';
import classroomImg from '@assets/generated_images/about-classroom.jpg';
import buildingImg from '@assets/Screenshot_20260721_095657_1784611430157.jpg';
import campusImg from '@assets/Screenshot_20260721_100046_1784611430370.jpg';

export default function Facilities() {
  const facilities = [
    {
      title: 'Rich Library',
      description: 'A quiet, well-stocked library with a vast collection of academic books, literature, reference materials, and daily newspapers to encourage reading habits.',
      icon: BookOpen,
      image: libImg
    },
    {
      title: 'Computer Lab',
      description: 'Modern computer lab equipped with updated systems and internet access to ensure students are digitally literate and future-ready.',
      icon: Monitor,
      image: compImg
    },
    {
      title: 'Smart Classes',
      description: 'Digital interactive boards in classrooms that make learning visual, engaging, and highly effective for complex subjects.',
      icon: Presentation,
      image: smartImg
    },
    {
      title: 'Spacious Playground',
      description: 'A large, safe playground for sports, physical education, and recreation. We believe physical health is crucial for mental acuity.',
      icon: Trees,
      image: playImg
    },
    {
      title: 'CCTV Security',
      description: '24/7 CCTV surveillance across the campus to ensure the absolute safety and security of all our students and staff.',
      icon: Camera,
      image: buildingImg
    },
    {
      title: 'RO Drinking Water',
      description: 'Clean, safe, and chilled RO drinking water facilities available on every floor for the health and hygiene of our students.',
      icon: Droplets,
      image: campusImg
    },
    {
      title: 'Spacious Classrooms',
      description: 'Well-ventilated, naturally lit, and spacious classrooms (31 in total) designed to provide a comfortable learning environment.',
      icon: LayoutGrid,
      image: classroomImg
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-primary pt-24 pb-16 px-4 relative overflow-hidden">
        <img src={buildingImg} alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/55" />
        <div className="container mx-auto text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Facilities</h1>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
            <p className="mt-6 text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Modern amenities blending with traditional values to create the perfect learning environment.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group">
                  <div className="h-52 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/10 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                    <img 
                      src={facility.image} 
                      alt={facility.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <facility.icon className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-black mb-3">{facility.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
}
