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
        title: "uc785ub825 uc624ub958",
        description: "uc774ub984, uc5f0ub77ducc98, uc774uba54uc77c, uac1cuc778uc815ubcf4 ub3d9uc758ub294 ud544uc218uc785ub2c8ub2e4.",
        variant: "destructive"
      });
      return;
    }
    
    // Success toast (in real implementation this would submit to backend)
    toast({
      title: "ubb38uc758uac00 uc811uc218ub418uc5c8uc2b5ub2c8ub2e4",
      description: "uace0uac1dub2d8uc758 ubb38uc758uac00 uc811uc218ub418uc5c8uc2b5ub2c8ub2e4. uc870uc18d uc5f0ub77dub4dcub9acuaca0uc2b5ub2c8ub2e4.",
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
          src="/images/hero-bg.jpg"
          alt="ubb38uc758ud558uae30"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
              ubb38uc758ud558uae30
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-shadow">
              ub2f9uc2e0ub9ccuc758 uacf5uac04 ub514uc790uc778uc744 uc704ud55c ucee8uc124ud305uc744 ubc1buc544ubcf4uc138uc694
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
                  <TabsTrigger value="consultation">ubb34ub8cc uc0c1ub2f4 uc2e0uccad</TabsTrigger>
                  <TabsTrigger value="estimation">ubc14ub85c uacacuc801 ubc1buae30</TabsTrigger>
                </TabsList>
                
                <TabsContent value="consultation" className="mt-6">
                  <Card>
                    <CardContent className="pt-6">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">uc774ub984 <span className="text-red-500">*</span></Label>
                            <Input 
                              id="name" 
                              name="name" 
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="uc774ub984uc744 uc785ub825ud574 uc8fcuc138uc694" 
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">uc804ud654ubc88ud638 <span className="text-red-500">*</span></Label>
                            <Input 
                              id="phone" 
                              name="phone" 
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="uc5f0ub77duc744 ubc1buae30 uc704ud55c uc804ud654ubc88ud638" 
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">uc774uba54uc77c <span className="text-red-500">*</span></Label>
                            <Input 
                              id="email" 
                              name="email" 
                              type="email" 
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="uc774uba54uc77c uc8fcuc18c" 
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address">uc8fcuc18c</Label>
                            <Input 
                              id="address" 
                              name="address" 
                              value={formData.address}
                              onChange={handleChange}
                              placeholder="uc778ud14cub9acuc5b4ub97c uc9c4ud589ud560 uc8fcuc18c" 
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Label>uacf5uac04 uc720ud615 <span className="text-red-500">*</span></Label>
                          <RadioGroup 
                            value={formData.propertyType} 
                            onValueChange={handleRadioChange}
                            className="flex flex-wrap gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="apartment" id="apartment" />
                              <Label htmlFor="apartment" className="cursor-pointer">uc544ud30cud2b8</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="house" id="house" />
                              <Label htmlFor="house" className="cursor-pointer">ub2e8ub3c5uc8fcud0dd</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="officetel" id="officetel" />
                              <Label htmlFor="officetel" className="cursor-pointer">uc624ud53cuc2a4ud154</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="commercial" id="commercial" />
                              <Label htmlFor="commercial" className="cursor-pointer">uc0c1uc5c5uacf5uac04</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="other" id="other" />
                              <Label htmlFor="other" className="cursor-pointer">uae30ud0c0</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="size">ud3c9uc218 (ucca8ucca8uc774uc2dc uc51c ub192uc774)</Label>
                            <Input 
                              id="size" 
                              name="size" 
                              value={formData.size}
                              onChange={handleChange}
                              placeholder="uc608) 32ud3c9 (2.4m)" 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="budget">uc608uc0b0</Label>
                            <Input 
                              id="budget" 
                              name="budget" 
                              value={formData.budget}
                              onChange={handleChange}
                              placeholder="uc608uc0b0 ubc94uc704" 
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">ubb38uc758 ub0b4uc6a9</Label>
                          <Textarea 
                            id="message" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="uad6cuccb4uc801uc778 ubb38uc758 ub0b4uc6a9uc744 uc791uc131ud574 uc8fcuc138uc694" 
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
                            uac1cuc778uc815ubcf4 ucde8uae09 ubc0f uc774uc6a9uc5d0 uad00ud55c ub3d9uc758 <span className="text-red-500">*</span> <br />
                            <span className="text-muted-foreground">
                              uc218uc9d1ud55c uac1cuc778uc815ubcf4ub294 uc0c1ub2f4 uc11cube44uc2a4 uc81cuacf5 ubaa9uc801uc73cub85cub9cc uc0acuc6a9ub429ub2c8ub2e4.
                            </span>
                          </Label>
                        </div>

                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                          <Send className="mr-2 h-4 w-4" /> uc0c1ub2f4 uc2e0uccad ud558uae30
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
                            <Label htmlFor="name-est">uc774ub984 <span className="text-red-500">*</span></Label>
                            <Input 
                              id="name-est" 
                              name="name" 
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="uc774ub984uc744 uc785ub825ud574 uc8fcuc138uc694" 
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone-est">uc804ud654ubc88ud638 <span className="text-red-500">*</span></Label>
                            <Input 
                              id="phone-est" 
                              name="phone" 
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="uc5f0ub77duc744 ubc1buae30 uc704ud55c uc804ud654ubc88ud638" 
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address-est">uc8fcuc18c <span className="text-red-500">*</span></Label>
                            <Input 
                              id="address-est" 
                              name="address" 
                              value={formData.address}
                              onChange={handleChange}
                              placeholder="uc778ud14cub9acuc5b4ub97c uc9c4ud589ud560 uc8fcuc18c" 
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="size-est">ud3c9uc218 <span className="text-red-500">*</span></Label>
                            <Input 
                              id="size-est" 
                              name="size" 
                              value={formData.size}
                              onChange={handleChange}
                              placeholder="uc608) 32ud3c9" 
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <Label>uacf5uac04 uc720ud615 <span className="text-red-500">*</span></Label>
                          <RadioGroup 
                            value={formData.propertyType} 
                            onValueChange={handleRadioChange}
                            className="flex flex-wrap gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="apartment" id="apartment-est" />
                              <Label htmlFor="apartment-est" className="cursor-pointer">uc544ud30cud2b8</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="house" id="house-est" />
                              <Label htmlFor="house-est" className="cursor-pointer">ub2e8ub3c5uc8fcud0dd</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="officetel" id="officetel-est" />
                              <Label htmlFor="officetel-est" className="cursor-pointer">uc624ud53cuc2a4ud154</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="commercial" id="commercial-est" />
                              <Label htmlFor="commercial-est" className="cursor-pointer">uc0c1uc5c5uacf5uac04</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message-est">ubb38uc758 ub0b4uc6a9</Label>
                          <Textarea 
                            id="message-est" 
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="uacacuc801uc744 uc704ud55c ucd94uac00uc801uc778 uc0acud56dub4e4uc744 uc791uc131ud574 uc8fcuc138uc694" 
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
                            uac1cuc778uc815ubcf4 ucde8uae09 ubc0f uc774uc6a9uc5d0 uad00ud55c ub3d9uc758 <span className="text-red-500">*</span> <br />
                            <span className="text-muted-foreground">
                              uc218uc9d1ud55c uac1cuc778uc815ubcf4ub294 uacacuc801 uc11cube44uc2a4 uc81cuacf5 ubaa9uc801uc73cub85cub9cc uc0acuc6a9ub429ub2c8ub2e4.
                            </span>
                          </Label>
                        </div>

                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                          <Send className="mr-2 h-4 w-4" /> uacacuc801 ubc1buae30
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
                <h2 className="text-2xl font-bold mb-6 gold-text">ubb38uc758 uc815ubcf4</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">uc804ud654 ubb38uc758</h3>
                      <p className="text-muted-foreground mb-1">uc9c1ud1b5ud55c uc0c1ub2f4uc744 uc6d0ud558uc2e0ub2e4uba74</p>
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
                      <h3 className="font-semibold mb-1">uc774uba54uc77c ubb38uc758</h3>
                      <p className="text-muted-foreground mb-1">24uc2dcuac04 uc774ub0b4uc5d0 ub2f5ubcc0ud574 ub4dcub9bdub2c8ub2e4</p>
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
                      <h3 className="font-semibold mb-1">uc624uc2dcub294 uae38</h3>
                      <p className="text-muted-foreground">
                        uc11cuc6b8ud2b9ubcc4uc2dc uac15ub0a8uad6c
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">uc6b4uc601 uc2dcuac04</h3>
                      <p className="text-muted-foreground mb-1">ud3c9uc77c: 09:00 - 18:00</p>
                      <p className="text-muted-foreground mb-1">ud1a0uc694uc77c: 10:00 - 16:00 (uc608uc57duc81c)</p>
                      <p className="text-muted-foreground">uc77c/uacf5ud734uc77c: ud734ubb34</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-4">uc790uc8fcubb3bub294 uc9c8ubb38</h2>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger>uc778ud14cub9acuc5b4 uc9c4ud589 uae30uac04uc740 uc5b4ub5a0ud55c uac83uc778uac00uc694?</AccordionTrigger>
                    <AccordionContent>
                      uc77cubc18uc801uc73cub85c 30ud3c9 uae30uc900 uc2ecud50c uc778ud14cub9acuc5b4 uacbduc6b0 4-5uc8fcuac00 uc18cuc694ub418uba70, ud48dub3c5ud55c uc778ud14cub9acuc5b4ub098 uad6cuccb4uc801uc778 uacf5uac04uc758 uacbduc6b0 6-8uc8fcuac00 uc18cuc694ub429ub2c8ub2e4. ucee8uc124ud305 uc2dcuc5d0 uc815ud655ud55c uc77cuc815uc744 uc0c1ub2f4ud574 ub4dcub9acuaca0uc2b5ub2c8ub2e4.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger>uacacuc801uc740 ubb34ub8ccuc778uac00uc694?</AccordionTrigger>
                    <AccordionContent>
                      ub124, uccab uacacuc801uc740 ubb34ub8ccub85c uc9c4ud589ub429ub2c8ub2e4. uc804ubb38 ub514uc790uc774ub108uac00 uace0uac1dub2d8uc758 uacf5uac04uc744 uc0c1uc138ud788 ud655uc778ud55c ud6c4 ud544uc694ud55c uc778ud14cub9acuc5b4 ubc29ud5a5uc744 uc81cuc2dcud574 ub4dcub9acuaca0uc2b5ub2c8ub2e4.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger>uc778ud14cub9acuc5b4 ubaa9uc801uc5d0 ub9deub294 uace0uac1d uc9c0uc6d0uc774 uc788ub098uc694?</AccordionTrigger>
                    <AccordionContent>
                      ud2b8ub80cub4dc ubd84uc11d, ub514uc790uc778 ubc29ud5a5 uc124uc815, 3D ub808ub354ub9c1, uace0uac1d uc694uccaduc0acud56d ubc18uc601 ub4f1 uc0c1uc138ud55c uace0uac1d uc9c0uc6d0uc774 uc788uc2b5ub2c8ub2e4. uc800ud76c ub514uc790uc778ud06cub9bc uc778ud14cub9acuc5b4ub294 uace0uac1d ub9ccuc871uc744 ucd5cuc6b0uc120uc73cub85c uc0dduac01ud558uace0 uc788uc2b5ub2c8ub2e4.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger>uc2dcuacf5 ud6c4 uad00ub9ac ubc0f ASub294 uc5b4ub5a0ud55c uac83uc778uac00uc694?</AccordionTrigger>
                    <AccordionContent>
                      uc2dcuacf5 uc644ub8cc ud6c4 3uac1cuc6d4uae4cuc9c0 ubb34uc0c1 ASub97c uc9c4ud589ud558uace0 uc788uc73cuba70, uadf8 uc774ud6c4uc5d0ub3c4 uae30uc220uc801 uacb0ud568uc758 uacbduc6b0 ubb34uc0c1uc73cub85c uc9c4ud589ud574 ub4dcub9bdub2c8ub2e4. uc791uc740 ubb38uc81cub3c4 ube44uc6a9 uac80ud1a0 uc5c6uc774 ucc3dub9acud558uac8c ucc98ub9acud574ub4dcub9bdub2c8ub2e4.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-5">
                    <AccordionTrigger>uc18cuc794 uc624ud53cuc2a4ub3c4 uac00ub2a5ud55cuac00uc694?</AccordionTrigger>
                    <AccordionContent>
                      ub124, 10ud3c9/20ud3c9 uadc0ud55c uc624ud53cuc2a4, uc74dubc29 ub4f1 uc18cuacf5uac04 ub9acubaa8ub378ub9c1uc774ub098 uc0c1uc5c5uacf5uac04 uc778ud14cub9acuc5b4 uc5educ2dc uc804ubb38uc801uc73cub85c uc9c4ud589ud558uace0 uc788uc2b5ub2c8ub2e4. uc791uc740 uacf5uac04uc774ub77cub3c4 ub514uc790uc778uc774 uc911uc694ud558uc2dcuae30uc5d0 uc804ubb38uc801uc778 ucee8uc124ud305uc744 ubc1buc544ubcf4uc138uc694.
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