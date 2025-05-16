"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    size: "",
    budget: "",
    message: "",
    propertyType: "apartment",
    privacyConsent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, propertyType: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, privacyConsent: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.privacyConsent) {
      toast({
        title: "입력 오류",
        description: "이름, 연락처, 이메일, 개인정보 동의는 필수입니다.",
        variant: "destructive"
      });
      return;
    }
    
    // Success toast (in real implementation this would submit to backend)
    toast({
      title: "문의가 접수되었습니다",
      description: "고객님의 문의가 접수되었습니다. 조속 연락드리겠습니다.",
      variant: "default"
    });
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      size: "",
      budget: "",
      message: "",
      propertyType: "apartment",
      privacyConsent: false
    });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[40vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1618219740975-d40978bb7378"
          alt="문의하기"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
              문의하기
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-shadow">
              당신만의 공간 디자인을 위한 컨설팅을 받아보세요
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-8">
              <Tabs defaultValue="consultation" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="consultation">무료 상담 신청</TabsTrigger>
                  <TabsTrigger value="estimation">바로 견적 받기</TabsTrigger>
                </TabsList>
                
                <TabsContent value="consultation" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">이름 <span className="text-red-500">*</span></Label>
                            <Input 
                              id="name" 
                              name="name" 
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="이름을 입력해 주세요" 
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">전화번호 <span className="text-red-500">*</span></Label>
                            <Input 
                              id="phone" 
                              name="phone" 
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="연락을 받기 위한 전화번호" 
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">이메일 <span className="text-red-500">*</span></Label>
                            <Input 
                              id="email" 
                              name="email" 
                              type="email" 
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="이메일 주소" 
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address">주소</Label>
                            <Input 
                              id="address" 
                              name="address" 
                              value={formData.address}
                              onChange={handleChange}
                              placeholder="인테리어를 진행할 주소" 
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Label>공간 유형 <span className="text-red-500">*</span></Label>
                          <RadioGroup 
                            value={formData.propertyType} 
                            onValueChange={handleRadioChange}
                            className="flex flex-wrap gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="apartment" id="apartment" />
                              <Label htmlFor="apartment" className="cursor-pointer">아파트</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="house" id="house" />
                              <Label htmlFor="house" className="cursor-pointer">단독주택</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="officetel" id="officetel" />
                              <Label htmlFor="officetel" className="cursor-pointer">오피스텔</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="commercial" id="commercial" />
                              <Label htmlFor="commercial" className="cursor-pointer">상업공간</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="other" id="other" />
                              <Label htmlFor="other" className="cursor-pointer">기타</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="size">평수 (천정이시 층 높이)</Label>
                            <Input 
                              id="size" 
                              name="size" 
                              value={formData.size}
                              onChange={handleChange}
                              placeholder="예) 32평 (2.4m)" 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="budget">예산</Label>
                            <Input 
                              id="budget" 
                              name="budget" 
                              value={formData.budget}
                              onChange={handleChange}
                              placeholder="예산 범위" 
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">문의 내용</Label>
                          <Textarea 
                            id="message" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="구체적인 문의 내용을 작성해 주세요" 
                            rows={5} 
                          />
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox 
                            id="privacyConsent" 
                            checked={formData.privacyConsent}
                            onCheckedChange={handleCheckboxChange}
                          />
                          <Label htmlFor="privacyConsent" className="text-sm">
                            개인정보 취급 및 이용에 관한 동의 <span className="text-red-500">*</span> <br />
                            <span className="text-muted-foreground">
                              수집한 개인정보는 상담 서비스 제공 목적으로만 사용됩니다.
                            </span>
                          </Label>
                        </div>

                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                          <Send className="mr-2 h-4 w-4" /> 상담 신청하기
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="estimation" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name-est">이름 <span className="text-red-500">*</span></Label>
                            <Input 
                              id="name-est" 
                              name="name" 
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="이름을 입력해 주세요" 
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone-est">전화번호 <span className="text-red-500">*</span></Label>
                            <Input 
                              id="phone-est" 
                              name="phone" 
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="연락을 받기 위한 전화번호" 
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address-est">주소 <span className="text-red-500">*</span></Label>
                            <Input 
                              id="address-est" 
                              name="address" 
                              value={formData.address}
                              onChange={handleChange}
                              placeholder="인테리어를 진행할 주소" 
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="size-est">평수 <span className="text-red-500">*</span></Label>
                            <Input 
                              id="size-est" 
                              name="size" 
                              value={formData.size}
                              onChange={handleChange}
                              placeholder="예) 32평" 
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Label>공간 유형 <span className="text-red-500">*</span></Label>
                          <RadioGroup 
                            value={formData.propertyType} 
                            onValueChange={handleRadioChange}
                            className="flex flex-wrap gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="apartment" id="apartment-est" />
                              <Label htmlFor="apartment-est" className="cursor-pointer">아파트</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="house" id="house-est" />
                              <Label htmlFor="house-est" className="cursor-pointer">단독주택</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="officetel" id="officetel-est" />
                              <Label htmlFor="officetel-est" className="cursor-pointer">오피스텔</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="commercial" id="commercial-est" />
                              <Label htmlFor="commercial-est" className="cursor-pointer">상업공간</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message-est">문의 내용</Label>
                          <Textarea 
                            id="message-est" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="견적을 위한 추가적인 사항들을 작성해 주세요" 
                            rows={5} 
                          />
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox 
                            id="privacyConsent-est" 
                            checked={formData.privacyConsent}
                            onCheckedChange={handleCheckboxChange}
                          />
                          <Label htmlFor="privacyConsent-est" className="text-sm">
                            개인정보 취급 및 이용에 관한 동의 <span className="text-red-500">*</span> <br />
                            <span className="text-muted-foreground">
                              수집한 개인정보는 견적 서비스 제공 목적으로만 사용됩니다.
                            </span>
                          </Label>
                        </div>

                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                          <Send className="mr-2 h-4 w-4" /> 견적 받기
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-4">
              <div className="bg-card rounded-lg p-6 shadow-sm mb-6">
                <h2 className="text-2xl font-bold mb-6 gold-text">문의 정보</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">전화 문의</h3>
                      <p className="text-muted-foreground mb-1">직통한 상담을 원하신다면</p>
                      <a href="tel:010-6276-5219" className="text-lg font-bold gold-text">
                        010-6276-5219
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">이메일 문의</h3>
                      <p className="text-muted-foreground mb-1">24시간 이내에 답변해 드립니다</p>
                      <a href="mailto:laillic@naver.com" className="text-lg gold-text break-all">
                        laillic@naver.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">오시는 길</h3>
                      <p className="text-muted-foreground">
                        서울특별시 강남구
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">운영 시간</h3>
                      <p className="text-muted-foreground mb-1">평일: 09:00 - 18:00</p>
                      <p className="text-muted-foreground mb-1">토요일: 10:00 - 16:00 (예약제)</p>
                      <p className="text-muted-foreground">일/공휴일: 휴무</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">자주묻는 질문</h2>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger>인테리어 진행 기간은 어떠한 것인가요?</AccordionTrigger>
                    <AccordionContent>
                      일반적으로 30평 기준 심플 인테리어 경우 4-5주가 소요되며, 풍부한 인테리어나 구체적인 공간의 경우 6-8주가 소요됩니다. 컨설팅 시에 정확한 일정을 상담해 드리겠습니다.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger>견적은 무료인가요?</AccordionTrigger>
                    <AccordionContent>
                      네, 첫 견적은 무료로 진행됩니다. 전문 디자이너가 고객님의 공간을 상세히 확인한 후 필요한 인테리어 방향을 제시해 드리겠습니다.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger>인테리어 목적에 맞는 고객 지원이 있나요?</AccordionTrigger>
                    <AccordionContent>
                      트렌드 분석, 디자인 방향 설정, 3D 렌더링, 고객 요청사항 반영 등 상세한 고객 지원이 있습니다. 저희 디자인크림 인테리어는 고객 만족을 최우선으로 생각하고 있습니다.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger>시공 후 관리 및 AS는 어떠한 것인가요?</AccordionTrigger>
                    <AccordionContent>
                      시공 완료 후 3개월까지 무상 AS를 진행하고 있으며, 그 이후에도 기술적 결함의 경우 무상으로 진행해 드립니다. 작은 문제도 비용 검토 없이 창의하게 처리해드립니다.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-5">
                    <AccordionTrigger>소형 오피스도 가능한가요?</AccordionTrigger>
                    <AccordionContent>
                      네, 10평/20평 귀한 오피스, 욕방 등 소공간 리모델링이나 상업공간 인테리어 역시 전문적으로 진행하고 있습니다. 작은 공간이라도 디자인이 중요하시기에 전문적인 컨설팅을 받아보세요.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}