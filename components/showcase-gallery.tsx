"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { ChevronRight, X } from "lucide-react";
import Link from "next/link";

interface GalleryItemProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  size: string;
}

const galleryItems: GalleryItemProps[] = [
  {
    id: "gallery-1",
    title: "모던 미니멀 아파트",
    description: "32평형 아파트의 모던 미니멀 인테리어",
    image: "/images/gallery-1.jpg",
    category: "모던",
    size: "32평"
  },
  {
    id: "gallery-2",
    title: "내추럴 감성의 공간",
    description: "25평형 아파트의 내추럴 스타일 인테리어",
    image: "/images/gallery-2.jpg",
    category: "내추럴",
    size: "25평"
  },
  {
    id: "gallery-3",
    title: "클래식한 노블함",
    description: "45평형 아파트의 클래식 노블 인테리어",
    image: "/images/gallery-3.jpg",
    category: "클래식",
    size: "45평"
  },
  {
    id: "gallery-4",
    title: "우드 포인트 거실",
    description: "36평형 아파트의 우드 포인트 인테리어",
    image: "/images/gallery-4.jpg",
    category: "모던",
    size: "36평"
  },
  {
    id: "gallery-5",
    title: "그레이 톤 침실",
    description: "28평형 아파트의 그레이 침실 인테리어",
    image: "/images/gallery-5.jpg",
    category: "모던",
    size: "28평"
  },
  {
    id: "gallery-6",
    title: "모노톤 주방",
    description: "34평형 아파트의 모노톤 주방 인테리어",
    image: "/images/gallery-6.jpg",
    category: "모던",
    size: "34평"
  },
];

const ShowcaseGallery = () => {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItemProps | null>(null);

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-title">
            디자인크림 <span className="gold-text">포트폴리오</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            디자인크림이 만든 다양한 공간들을 살펴보세요. 고객님의 라이프스타일에 맞는 맞춤형 인테리어를 제안합니다.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-primary text-white" : ""}
            >
              전체보기
            </Button>
            <Button 
              variant={filter === "모던" ? "default" : "outline"}
              onClick={() => setFilter("모던")}
              className={filter === "모던" ? "bg-primary text-white" : ""}
            >
              모던
            </Button>
            <Button 
              variant={filter === "내추럴" ? "default" : "outline"}
              onClick={() => setFilter("내추럴")}
              className={filter === "내추럴" ? "bg-primary text-white" : ""}
            >
              내추럴
            </Button>
            <Button 
              variant={filter === "클래식" ? "default" : "outline"}
              onClick={() => setFilter("클래식")}
              className={filter === "클래식" ? "bg-primary text-white" : ""}
            >
              클래식
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image 
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white font-medium">{item.description}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">{item.size}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">{item.category}</span>
                      <div className="text-primary font-medium flex items-center">
                        자세히 보기 <ChevronRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative aspect-square">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold">{item.title}</h2>
                        <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">{item.size}</span>
                      </div>
                      <p className="text-muted-foreground mb-6">{item.description}</p>
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div>
                          <p className="text-sm text-muted-foreground">스타일</p>
                          <p className="font-medium">{item.category}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">공간</p>
                          <p className="font-medium">아파트</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">평수</p>
                          <p className="font-medium">{item.size}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">위치</p>
                          <p className="font-medium">서울 강남구</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                        <Link href="/portfolio">
                          더 많은 사례 보기
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
            <Link href="/portfolio">
              전체 포트폴리오 보기
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseGallery;