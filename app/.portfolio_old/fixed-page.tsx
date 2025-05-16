"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useSearchParams } from "next/navigation";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  size: string;
  location: string;
  style: string;
  year: string;
  mainImage: string;
  gallery: string[];
  details: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: "p1",
    title: "모던 미니멀 23평 공간",
    description: "기능성과 심미성이 조화로운 모던 미니멀 스타일의 23평 아파트",
    size: "23평",
    location: "서울 마포구",
    style: "모던",
    year: "2022",
    mainImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
    gallery: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87"
    ],
    details: "조화로운 색채와 깔끔한 디자인으로 실용성과 심미성을 동시에 충족시킨 인테리어 프로젝트입니다. 미니멀한 풀프레임 도어와 엔지니어드 스톤 마블로 공간의 고급스러움을 높였습니다."
  },
  {
    id: "p2",
    title: "내추럴 스타일 32평 아파트",
    description: "따뜻한 우드 톤과 자연스러운 소재를 활용한 32평 아파트 인테리어",
    size: "32평",
    location: "경기 성남시",
    style: "내추럴",
    year: "2023",
    mainImage: "https://images.unsplash.com/photo-1617098474202-0d0d7f3d4046",
    gallery: [
      "https://images.unsplash.com/photo-1617098474202-0d0d7f3d4046",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    ],
    details: "자연스러운 우드 소재와 파스텔 톤의 조화로운 조합으로 편안하고 안정적인 공간을 연출했습니다. 따뜻한 조명과 식물들을 적절히 배치하여 생동감을 더했습니다."
  },
  {
    id: "p3",
    title: "클래식 노블 40평 인테리어",
    description: "클래식한 스타일을 현대적으로 재해석한 40평 아파트 인테리어",
    size: "40평",
    location: "서울 강남구",
    style: "클래식",
    year: "2023",
    mainImage: "https://images.unsplash.com/photo-1618219944342-824e40a13285",
    gallery: [
      "https://images.unsplash.com/photo-1618219944342-824e40a13285",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221",
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a"
    ],
    details: "클래식한 모티프와 현대적 요소를 절제히 조화시켜 품격 있는 공간을 연출했습니다. 고급스러운 채널튜프트 소파와 고전적인 배색의 조화가 특징입니다."
  },
  {
    id: "p4",
    title: "스카이 블루 25평 싱글하우스",
    description: "파스텔 블루 톤을 사용한 시원한 25평 싱글하우스 인테리어",
    size: "25평",
    location: "서울 서초구",
    style: "모던",
    year: "2022",
    mainImage: "https://images.unsplash.com/photo-1616137466211-f939a420be84",
    gallery: [
      "https://images.unsplash.com/photo-1616137466211-f939a420be84",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92",
      "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f"
    ],
    details: "파스텔 블루 톤을 액센트로 활용하여 시원하고 편안한 분위기를 연출했습니다. 1인 가구에 적합한 가구 배치와 스마트한 스토리지 솔루션을 적용했습니다."
  },
  {
    id: "p5",
    title: "삼성동 34평 에이지리스 아파트",
    description: "분리형 주방과 넓은 거실이 포인트인 34평 아파트 인테리어",
    size: "34평",
    location: "서울 강남구",
    style: "모던",
    year: "2023",
    mainImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c"
    ],
    details: "분리형 주방과 넓은 거실 공간을 활용하여 첨단 모던 인테리어를 연출했습니다. 전체적으로 모노톤 팔레트를 사용하여 심플하면서도 세련된 분위기를 연출했습니다."
  },
  {
    id: "p6",
    title: "반포 직장인 쾌적로운 45평",
    description: "반려동물과 함께하는 라이프스타일에 맞춤 제작한 45평 인테리어",
    size: "45평",
    location: "서울 서초구",
    style: "내추럴",
    year: "2022",
    mainImage: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92",
    gallery: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab"
    ],
    details: "가족과 반려동물이 함께 살기 좋은 공간을 설계했습니다. 환경 친화적인 소재를 사용하고 편안한 공간 구성으로 사용자의 라이프스타일을 반영했습니다."
  },
];

export default function PortfolioPage() {
  const searchParams = useSearchParams();
  const defaultFilter = searchParams?.get("filter") || "all";
  
  const [filter, setFilter] = useState<string>(defaultFilter);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Filter data based on selection
  const filteredData = portfolioData.filter(item => {
    if (filter === "all") return true;
    if (filter === "size") return true; // Show all sizes in size tab
    if (filter === "location") return true; // Show all locations in location tab
    if (filter === "style") return true; // Show all styles in style tab
    return item.style === filter || item.size === filter || item.location === filter;
  });

  const openItemDetails = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <div className="relative h-[30vh] md:h-[40vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1609766857041-ed402ea8069a"
          alt="포트폴리오"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
              포트폴리오
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-shadow">
              디자인크림이 완성한 다양한 인테리어 프로젝트
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue={defaultFilter} className="w-full" onValueChange={setFilter}>
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <TabsTrigger value="all" className={filter === "all" ? "bg-primary text-white" : ""}>
                  전체보기
                </TabsTrigger>
                <TabsTrigger value="size" className={filter === "size" ? "bg-primary text-white" : ""}>
                  평수별
                </TabsTrigger>
                <TabsTrigger value="location" className={filter === "location" ? "bg-primary text-white" : ""}>
                  지역별
                </TabsTrigger>
                <TabsTrigger value="style" className={filter === "style" ? "bg-primary text-white" : ""}>
                  스타일별
                </TabsTrigger>
              </TabsList>
            </div>

            {/* All Projects */}
            <TabsContent value="all" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredData.map((item) => (
                  <Dialog key={item.id}>
                    <DialogTrigger asChild>
                      <Card className="cursor-pointer overflow-hidden group hover:shadow-lg transition-shadow">
                        <div className="relative h-64 w-full overflow-hidden">
                          <Image 
                            src={item.mainImage} 
                            alt={item.title} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-300" 
                          />
                          <div className="absolute top-3 right-3">
                            <Badge variant="secondary" className="bg-black/70 text-white hover:bg-black/70">
                              {item.size}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground mb-2">{item.description}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                              {item.style}
                            </Badge>
                            <Badge variant="outline">
                              {item.location}
                            </Badge>
                            <Badge variant="outline">
                              {item.year}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    
                    <DialogContent className="max-w-4xl">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <div className="relative aspect-square rounded-md overflow-hidden mb-4">
                            <Image
                              src={item.mainImage}
                              alt={item.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {item.gallery.map((img, index) => (
                              <div key={index} className="relative aspect-square rounded-md overflow-hidden">
                                <Image
                                  src={img}
                                  alt={`${item.title} gallery ${index+1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                          <p className="text-muted-foreground mb-6">{item.description}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                              <p className="text-sm text-muted-foreground">스타일</p>
                              <p className="font-medium">{item.style}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">평수</p>
                              <p className="font-medium">{item.size}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">지역</p>
                              <p className="font-medium">{item.location}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">완공연도</p>
                              <p className="font-medium">{item.year}</p>
                            </div>
                          </div>
                          
                          <Separator className="my-6" />
                          
                          <div>
                            <h3 className="text-lg font-semibold mb-2">프로젝트 상세</h3>
                            <p>{item.details}</p>
                          </div>
                          
                          <div className="mt-8">
                            <Button asChild className="w-full bg-primary hover:bg-primary/90">
                              <a href="/contact">
                                이런 스타일로 문의하기
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </TabsContent>

            {/* By Size */}
            <TabsContent value="size" className="mt-4">
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {[...new Set(portfolioData.map(item => item.size))].map((size) => (
                    <Button 
                      key={size} 
                      variant="outline"
                      onClick={() => setFilter(size)}
                      className={filter === size ? "bg-primary text-white border-primary" : ""}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredData.map((item) => (
                    <Dialog key={item.id}>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer overflow-hidden group hover:shadow-lg transition-shadow">
                          <div className="relative h-64 w-full overflow-hidden">
                            <Image 
                              src={item.mainImage} 
                              alt={item.title} 
                              fill 
                              className="object-cover group-hover:scale-105 transition-transform duration-300" 
                            />
                            <div className="absolute top-3 right-3">
                              <Badge variant="secondary" className="bg-black/70 text-white hover:bg-black/70">
                                {item.size}
                              </Badge>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground mb-2">{item.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                                {item.style}
                              </Badge>
                              <Badge variant="outline">
                                {item.location}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      
                      {/* Dialog content */}
                      <DialogContent className="max-w-4xl">
                        {/* Same content as in the "all" tab */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <div className="relative aspect-square rounded-md overflow-hidden mb-4">
                              <Image
                                src={item.mainImage}
                                alt={item.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              {item.gallery.map((img, index) => (
                                <div key={index} className="relative aspect-square rounded-md overflow-hidden">
                                  <Image
                                    src={img}
                                    alt={`${item.title} gallery ${index+1}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                            <p className="text-muted-foreground mb-6">{item.description}</p>
                            
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div>
                                <p className="text-sm text-muted-foreground">스타일</p>
                                <p className="font-medium">{item.style}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">평수</p>
                                <p className="font-medium">{item.size}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">지역</p>
                                <p className="font-medium">{item.location}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">완공연도</p>
                                <p className="font-medium">{item.year}</p>
                              </div>
                            </div>
                            
                            <Separator className="my-6" />
                            
                            <div>
                              <h3 className="text-lg font-semibold mb-2">프로젝트 상세</h3>
                              <p>{item.details}</p>
                            </div>
                            
                            <div className="mt-8">
                              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                                <a href="/contact">
                                  이런 스타일로 문의하기
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* By Location */}
            <TabsContent value="location" className="mt-4">
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {[...new Set(portfolioData.map(item => item.location))].map((location) => (
                    <Button 
                      key={location} 
                      variant="outline"
                      onClick={() => setFilter(location)}
                      className={filter === location ? "bg-primary text-white border-primary" : ""}
                    >
                      {location}
                    </Button>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredData.map((item) => (
                    <Dialog key={item.id}>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer overflow-hidden group hover:shadow-lg transition-shadow">
                          <div className="relative h-64 w-full overflow-hidden">
                            <Image 
                              src={item.mainImage} 
                              alt={item.title} 
                              fill 
                              className="object-cover group-hover:scale-105 transition-transform duration-300" 
                            />
                            <div className="absolute top-3 right-3">
                              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/10">
                                {item.location}
                              </Badge>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground mb-2">{item.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              <Badge variant="outline">
                                {item.size}
                              </Badge>
                              <Badge variant="outline">
                                {item.style}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      
                      {/* Dialog content (same as other tabs) */}
                      <DialogContent className="max-w-4xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <div className="relative aspect-square rounded-md overflow-hidden mb-4">
                              <Image
                                src={item.mainImage}
                                alt={item.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              {item.gallery.map((img, index) => (
                                <div key={index} className="relative aspect-square rounded-md overflow-hidden">
                                  <Image
                                    src={img}
                                    alt={`${item.title} gallery ${index+1}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                            <p className="text-muted-foreground mb-6">{item.description}</p>
                            
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div>
                                <p className="text-sm text-muted-foreground">스타일</p>
                                <p className="font-medium">{item.style}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">평수</p>
                                <p className="font-medium">{item.size}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">지역</p>
                                <p className="font-medium">{item.location}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">완공연도</p>
                                <p className="font-medium">{item.year}</p>
                              </div>
                            </div>
                            
                            <Separator className="my-6" />
                            
                            <div>
                              <h3 className="text-lg font-semibold mb-2">프로젝트 상세</h3>
                              <p>{item.details}</p>
                            </div>
                            
                            <div className="mt-8">
                              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                                <a href="/contact">
                                  이런 스타일로 문의하기
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* By Style */}
            <TabsContent value="style" className="mt-4">
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {[...new Set(portfolioData.map(item => item.style))].map((style) => (
                    <Button 
                      key={style} 
                      variant="outline"
                      onClick={() => setFilter(style)}
                      className={filter === style ? "bg-primary text-white border-primary" : ""}
                    >
                      {style}
                    </Button>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredData.map((item) => (
                    <Dialog key={item.id}>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer overflow-hidden group hover:shadow-lg transition-shadow">
                          <div className="relative h-64 w-full overflow-hidden">
                            <Image 
                              src={item.mainImage} 
                              alt={item.title} 
                              fill 
                              className="object-cover group-hover:scale-105 transition-transform duration-300" 
                            />
                            <div className="absolute top-3 right-3">
                              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/10">
                                {item.style}
                              </Badge>
                            </div>
                          </div>
                          <CardContent className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground mb-2">{item.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                              <Badge variant="outline">
                                {item.size}
                              </Badge>
                              <Badge variant="outline">
                                {item.location}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      
                      {/* Dialog content (same as other tabs) */}
                      <DialogContent className="max-w-4xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <div className="relative aspect-square rounded-md overflow-hidden mb-4">
                              <Image
                                src={item.mainImage}
                                alt={item.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              {item.gallery.map((img, index) => (
                                <div key={index} className="relative aspect-square rounded-md overflow-hidden">
                                  <Image
                                    src={img}
                                    alt={`${item.title} gallery ${index+1}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                            <p className="text-muted-foreground mb-6">{item.description}</p>
                            
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div>
                                <p className="text-sm text-muted-foreground">스타일</p>
                                <p className="font-medium">{item.style}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">평수</p>
                                <p className="font-medium">{item.size}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">지역</p>
                                <p className="font-medium">{item.location}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">완공연도</p>
                                <p className="font-medium">{item.year}</p>
                              </div>
                            </div>
                            
                            <Separator className="my-6" />
                            
                            <div>
                              <h3 className="text-lg font-semibold mb-2">프로젝트 상세</h3>
                              <p>{item.details}</p>
                            </div>
                            
                            <div className="mt-8">
                              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                                <a href="/contact">
                                  이런 스타일로 문의하기
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}