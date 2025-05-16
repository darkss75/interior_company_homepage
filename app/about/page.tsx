import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "회사 소개 | 디자인크림 인테리어",
  description: "디자인크림 인테리어 회사 소개 - 인테리어를 넘어 사람 자체와 맞닿은 공간 디자인",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0"
          alt="디자인크림 인테리어 회사 소개"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
              회사 소개
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-shadow">
              인테리어를 넘어 사람 자체와 맞닿은 공간 디자인
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="section-title">우리의 <span className="gold-text">비전</span></h2>
            <p className="text-xl leading-relaxed">
              디자인크림은 공간을 단순한 꾸미기가 아닌, 고객님의 생활과 취향을 담아내는 생활공간으로 디자인합니다. 함께 이야기하고 지내며 그 고객만의 접근방식을 찾아내는 과정을 중요하게 생각합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="section-subtitle">당신만의 스타일로 완성되는 공간</h3>
              <p className="mb-6">
                디자인크림은 모든 고객님께 맞춤형 디자인 서비스를 제공합니다. 대량생산된 인테리어가 아닌, 고객님의 라이프스타일과 취향을 반영한 유니크한 공간을 만들어 드립니다.
              </p>
              <p className="mb-6">
                색상, 재질, La'Glam, De'Glam 등 다양한 스타일을 고려하여 공간의 가치를 높이고 생활의 질을 향상시키는 디자인을 추구합니다.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2"
                alt="디자인크림 인테리어 비전"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* CEO Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1573497491765-dccce02b29df"
                  alt="나경화 대표"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <h2 className="section-title">대표 인사말</h2>
              <h3 className="text-2xl font-bold gold-text mb-4">나경화 대표</h3>
              <p className="mb-6 text-lg">
                안녕하세요, 디자인크림 인테리어 대표 나경화입니다. 저희 디자인크림은 단순히 '예쁜 집'을 넘어 '당신다운 집'을 만들어 드리고자 합니다.
              </p>
              <p className="mb-6">
                오랜 시간 인테리어 디자인 분야에서 쌓아온 경험과 전문성을 바탕으로, 고객님의 라이프스타일과 취향을 세심하게 반영한 맞춤형 공간 디자인을 제공합니다. 집은 단순한 건물이 아닌 삶의 질을 결정하는 중요한 요소입니다.
              </p>
              <p className="mb-8">
                디자인크림과 함께 여러분만의 특별한 공간을 만들어가는 여정에 초대합니다. 여러분의 이야기를 들려주세요, 저희가 그 이야기를 공간에 담아내겠습니다.
              </p>
              <div className="flex items-center">
                <Image
                  src="/signature.png"
                  alt="나경화 대표 서명"
                  width={180}
                  height={60}
                  className="mr-4"
                />
                <div>
                  <p className="font-semibold">나경화</p>
                  <p className="text-sm text-muted-foreground">디자인크림 인테리어 대표</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Approach */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">디자인 <span className="gold-text">접근 방식</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card p-6 rounded-lg shadow-md transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl font-bold gold-text">01</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">분석 및 컨설팅</h3>
              <p className="text-center">
                고객의 라이프스타일, 취향, 요구사항을 면밀히 분석하고 전문적인 컨설팅을 통해 최적의 디자인 방향을 제시합니다.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl font-bold gold-text">02</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">맞춤형 디자인</h3>
              <p className="text-center">
                공간의 특성과 고객의 요구사항을 고려한 맞춤형 디자인을 제안하며 3D 시뮬레이션으로 완성된 모습을 미리 확인합니다.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md transition-transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl font-bold gold-text">03</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">정밀한 시공</h3>
              <p className="text-center">
                전문 시공팀이 디자인 의도를 정확히 구현하며 품질 관리를 통해 완벽한 마감을 보장합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">디자인크림과 함께 <span className="gold-text">새로운 공간</span>을 만들어보세요</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            지금 상담을 신청하시고 전문 디자이너의 맞춤형 제안을 받아보세요.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">
              무료 상담 신청하기
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}