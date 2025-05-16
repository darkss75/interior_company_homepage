import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

const CompanyIntro = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Section */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1618220179428-22790b461013"
                alt="디자인크림 인테리어 스튜디오"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg max-w-[250px]">
              <p className="text-xl font-bold mb-2">전문 디자이너 팀</p>
              <p className="text-sm">오랜 경험과 전문성을 갖춘 디자인 팀이 고객 님의 공간을 트렌디하게 디자인합니다.</p>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:col-span-7">
            <h2 className="section-title">
              인테리어를 넘어 <span className="gold-text">사람 자체와 맞닿은</span> 공간 디자인
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              디자인크림은 공간을 단순한 꾸미기가 아닌, 고객님의 생활과 취향을 담아내는 생활공간으로 디자인합니다. 함께 이야기하고 지내며 그 고객만의 접근방식을 찾아내는 과정을 중요하게 생각합니다.
            </p>
            
            <div className="space-y-4 mb-8">
              <FeatureItem>
                연결배열, 위동, 색상이론 등을 활용한 공간 플래닝 전문
              </FeatureItem>
              <FeatureItem>
                고객님의 라이프스타일에 맞는 맞춤형 공간 제안
              </FeatureItem>
              <FeatureItem>
                실용성과 심미성이 조화로운 공간 연출
              </FeatureItem>
              <FeatureItem>
                전문 설계사 자격 보유 인테리어 디자이너 팀
              </FeatureItem>
              <FeatureItem>
                시공과 관리에 이르기까지 원스톱 프로세스
              </FeatureItem>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/about">
                  자세히 알아보기
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <Link href="/contact">
                  무료 상담 신청
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex items-start">
      <div className="mr-3 mt-1 bg-primary/10 rounded-full p-1">
        <Check size={16} className="text-primary" />
      </div>
      <p>{children}</p>
    </div>
  );
};

export default CompanyIntro;