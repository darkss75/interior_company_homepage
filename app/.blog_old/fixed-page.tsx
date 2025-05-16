import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Tag } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "post1",
    title: "2024 ubd04 uc778ud14cub9acuc5b4 ud2b8ub80cub4dc",
    excerpt: "uace0uae09uc2a4ub7ecuc6b4 uc778ud14cub9acuc5b4ub97c uc704ud55c 2024 ubd04 uc2dcuc98c ud2b8ub80cub4dc uac00uc774ub4dc",
    date: "2024.04.15",
    readTime: "5ubd84",
    category: "ud2b8ub80cub4dc",
    image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f",
    url: "https://blog.naver.com/laillic"
  },
  {
    id: "post2",
    title: "uc791uc740 uacf5uac04uc744 ud65cuac1cuc2dcud0a4ub294 ub9c8uc220 5uac00uc9c0",
    excerpt: "uc791uc740 uacf5uac04uc774ub77c uc0c1uad00uc5c6uc774 ud65cuac1cuc2dcud0a4uc904 uc218 uc788ub294 uc778ud14cub9acuc5b4 ub178ud558uc6b0",
    date: "2024.04.01",
    readTime: "8ubd84",
    category: "uc2e0ucd95 uc778ud14cub9acuc5b4",
    image: "https://images.unsplash.com/photo-1617098474202-0d0d7f3d4046",
    url: "https://blog.naver.com/laillic"
  },
  {
    id: "post3",
    title: "ucf5cub85c uc778ud14cub9acuc5b4 ubc30uc0c9 uc870ud569ubc95",
    excerpt: "uc5b4ub5a4 uc0c9uc744 uc870ud569ud574uc57c ud69fuc124uc774uc9c0 uc54auc744uae4c? ucf5cub85c uc778ud14cub9acuc5b4ub97c uc704ud55c ubc30uc0c9 uac00uc774ub4dc",
    date: "2024.03.20",
    readTime: "6ubd84",
    category: "ucf5cub85c uac00uc774ub4dc",
    image: "https://images.unsplash.com/photo-1618219944342-824e40a13285",
    url: "https://blog.naver.com/laillic"
  },
  {
    id: "post4",
    title: "ube44uc6a9uc740 uc808uac10ud558uace0 ud6a8uacfc ub192uc774ub294 uc778ud14cub9acuc5b4 ud301",
    excerpt: "uc801uc740 ube44uc6a9uc73cub85c uc778ud14cub9acuc5b4 uace0uae09ud654 ubc29ubc95uacfc uc2e4uc81c uc0acuc81c",
    date: "2024.03.10",
    readTime: "7ubd84",
    category: "uacbduacc4",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
    url: "https://blog.naver.com/laillic"
  },
  {
    id: "post5",
    title: "uc9c0uc18duac00ub2a5ud55c uc778ud14cub9acuc5b4 uc18cuc7ac uc18cuac1c",
    excerpt: "ud658uacbd uce5cud654uc801uc774uace0 uac74uac15ud55c uc0b6uc744 uc704ud55c uc9c0uc18duc720 uac00ub2a5ud55c uc778ud14cub9acuc5b4 uc18cuc7ac",
    date: "2024.02.28",
    readTime: "10ubd84",
    category: "uc18cuc7ac uac00uc774ub4dc",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    url: "https://blog.naver.com/laillic"
  },
  {
    id: "post6",
    title: "ube14ub8e8 ud1a4 uc778ud14cub9acuc5b4 uc2a4ud0c0uc77cuadc0",
    excerpt: "ucfb4uc9c0uace0 uc548uc815uc801uc778 ube14ub8e8 ud1a4 uc778ud14cub9acuc5b4 uc2a4ud0c0uc77c - uc2e4uc81c uc0acub840 uccb4uc2a4 ud3b8",
    date: "2024.02.15",
    readTime: "5ubd84",
    category: "uc2a4ud0c0uc77c",
    image: "https://images.unsplash.com/photo-1615529151169-7b1ff50dc7f2",
    url: "https://blog.naver.com/laillic"
  }
];

const categories = [
  "ud2b8ub80cub4dc", 
  "uc2e0ucd95 uc778ud14cub9acuc5b4", 
  "ucf5cub85c uac00uc774ub4dc", 
  "uacbduacc4", 
  "uc18cuc7ac uac00uc774ub4dc", 
  "uc2a4ud0c0uc77c"
];

export default function BlogPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <div className="relative h-[30vh] md:h-[40vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1618220179428-22790b461013"
          alt="ube14ub85cuadf8"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
              ube14ub85cuadf8
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-shadow">
              ub514uc790uc778ud06cub9bc uc778ud14cub9acuc5b4uc758 ub178ud558uc6b0uc640 uc815ubcf4
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <Link href={post.url} key={post.id} target="_blank" rel="noopener noreferrer">
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-primary/90 hover:bg-primary/90 text-white">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                        <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                        <div className="flex items-center text-sm text-muted-foreground space-x-4">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button variant="ghost" className="text-primary p-0 hover:bg-transparent hover:text-primary/80">
                          ub354 uc77duae30 &rarr;
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="https://blog.naver.com/laillic" target="_blank" rel="noopener noreferrer">
                    ub124uc774ubc84 ube14ub85cuadf8uc5d0uc11c ub354 ubcf4uae30
                  </Link>
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <div className="bg-card p-6 rounded-lg shadow-sm mb-6">
                <h3 className="font-bold text-lg mb-4 border-b pb-2">uce74ud14cuace0ub9ac</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <Link 
                      key={index} 
                      href={`https://blog.naver.com/laillic`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group"
                    >
                      <span className="flex items-center group-hover:text-primary transition-colors">
                        <Tag size={14} className="mr-2" />
                        {category}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {Math.floor(Math.random() * 10) + 1}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-4">uace0uac1d ub9acubdf0</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4 py-2">
                    <p className="italic text-muted-foreground">"uc800ud76cuc9d1 uc778ud14cub9acuc5b4ub97c uc544uc8fc ub9dbuc2dcuac8c ud574uc8fcuc154uc11c ub9e4uc6b0 ub9ccuc871ud569ub2c8ub2e4. uc0c1ub2f4ubd80ud130 ud604uc7a5 uad00ub9acuae4cuc9c0 ucc9cuc815 ubc14ub8e8uc600uc2b5ub2c8ub2e4."</p>
                    <p className="text-sm mt-2">- uae40** uace0uac1d, 32ud3c9 uc544ud30cud2b8</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4 py-2">
                    <p className="italic text-muted-foreground">"uc18c ud1b5uc774 uc6d0ud65cud788 uc7a4ub294 ub514uc790uc774ub108uac00 ub9e4uc6b0 ub9c8uc74c uc5d0 ub4e4uc5c8uc5b4uc694. uc804ubc18uc801uc778 ud504ub85cuc138uc2a4uac00 uade0ub4dcuc788 uc88b uc558uc2b5ub2c8ub2e4."</p>
                    <p className="text-sm mt-2">- uc774** uace0uac1d, 45ud3c9 uc544ud30cud2b8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}