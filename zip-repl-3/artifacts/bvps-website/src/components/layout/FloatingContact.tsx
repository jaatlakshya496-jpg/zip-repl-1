import { Phone, Clock, MapPin } from 'lucide-react';

export function FloatingContact() {
  return (
    <div className="w-full bg-primary text-primary-foreground text-sm font-medium py-2 hidden md:block border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-secondary" />
            <span>Railway Road, Kalayat, Haryana</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-secondary" />
            <span>Mon–Sat: 8:00 AM – 3:00 PM</span>
          </div>
        </div>
        <div className="flex items-center gap-2 font-bold tracking-wider">
          <Phone className="w-4 h-4 text-secondary" />
          <span>+91 98125 50200</span>
        </div>
      </div>
    </div>
  );
}
