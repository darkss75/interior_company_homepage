import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div>
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold gold-text mb-4">ub514uc790uc778ud06cub9bc uc778ud14cub9acuc5b4</h3>
            <p className="text-muted-foreground mb-6">uc778ud14cub9acuc5b4ub97c ub118uc5b4 uc0acub78c uc790uccb4uc640 ub9deub2ffuc740 uacf5uac04 ub514uc790uc778</p>
            <div className="flex items-center mb-2">
              <Phone size={16} className="mr-2 text-primary" />
              <a href="tel:010-6276-5219" className="hover:text-primary transition-colors">
                010-6276-5219
              </a>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={16} className="mr-2 text-primary" />
              <a href="mailto:laillic@naver.com" className="hover:text-primary transition-colors">
                laillic@naver.com
              </a>
            </div>
            <div className="flex items-start mb-2">
              <MapPin size={16} className="mr-2 mt-1 flex-shrink-0 text-primary" />
              <address className="not-italic">
                uc11cuc6b8ud2b9ubcc4uc2dc uac15ub0a8uad6c
              </address>
            </div>
            <div className="flex items-start mb-4">
              <Clock size={16} className="mr-2 mt-1 flex-shrink-0 text-primary" />
              <div>
                <p>ud3c9uc77c: 09:00 - 18:00</p>
                <p>ud1a0uc694uc77c: 10:00 - 16:00 (uc608uc57duc81c)</p>
                <p>uc77c/uacf5ud734uc77c: ud734ubb34</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ub514uc790uc778ud06cub9bc uc778ud14cub9acuc5b4. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              uac1cuc778uc815ubcf4ucde8uae09ubc29uce68
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              uc774uc6a9uc57duad00
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;