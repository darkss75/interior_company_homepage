import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618219944342-824e40a13285')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow">
            나만의 공간을 디자인크림과 함께 <span className="text-primary">특별하게 완성</span>하세요
          </h2>
          
          <p className="text-lg mb-8 text-shadow">
            우리는 당신이 꿈꾸는 공간을 현실로 만들어 드립니다. 지금 바로 무료 상담을 신청하고 공간의 변화를 경험하세요.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transition-transform hover:-translate-y-1">
              <Phone className="text-primary w-10 h-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">전화 상담</h3>
              <p className="mb-4 text-white/80">바로 전화로 문의하시면 디자인 상담을 도와드립니다.</p>
              <a href="tel:010-6276-5219" className="text-xl font-bold text-primary block hover:underline">
                010-6276-5219
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 transition-transform hover:-translate-y-1">
              <Mail className="text-primary w-10 h-10 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">이메일 상담</h3>
              <p className="mb-4 text-white/80">이메일로 문의하시면 상세한 정보와 함께 답변드립니다.</p>
              <a href="mailto:laillic@naver.com" className="text-xl font-bold text-primary block hover:underline">
                laillic@naver.com
              </a>
            </div>
          </div>
          
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/contact">
              무료 상담 신청하기
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;