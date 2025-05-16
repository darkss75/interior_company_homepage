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
            <h3 className="text-xl font-bold gold-text mb-4">디자인크림 인테리어</h3>
            <p className="text-muted-foreground mb-6">인테리어를 넘어 사람 자체와 맞닿은 공간 디자인</p>
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
                서울특별시 강남구
              </address>
            </div>
            <div className="flex items-start mb-4">
              <Clock size={16} className="mr-2 mt-1 flex-shrink-0 text-primary" />
              <div>
                <p>평일: 09:00 - 18:00</p>
                <p>토요일: 10:00 - 16:00 (예약제)</p>
                <p>일/공휴일: 휴무</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} 디자인크림 인테리어. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              개인정보취급방침
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;