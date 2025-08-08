"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Eye } from 'lucide-react';

interface Manga {
  id: number;
  title: string;
  cover: string;
  status: string;
  chapters: number;
  views?: string;
  rating?: number;
  description?: string;
  isHot?: boolean;
}

const FALLBACK_IMAGE = 'https://via.placeholder.com/300x400?text=No+Image';

const MangaHomepage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFacebookBrowser, setIsFacebookBrowser] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [userAgent, setUserAgent] = useState('');

  useEffect(() => {
    const ua = window.navigator.userAgent;
    setUserAgent(ua);
    
    // Detect Facebook in-app browser
    const isFB = ua.includes('FBAN') || ua.includes('FBAV') || ua.includes('Instagram');
    setIsFacebookBrowser(isFB);
    
    // Detect iOS
    setIsIOS(/iPad|iPhone|iPod/.test(ua));
    
    console.log('User Agent:', ua);
    console.log('Is Facebook Browser:', isFB);
    console.log('Is iOS:', /iPad|iPhone|iPod/.test(ua));
  }, []);

  const imageFilenames = [
    "482125061_122198253848104763_569734162814439841_n.jpg",
    "517380711_1845835563007930_6336123526310484926_n.jpg",
    "518016247_122134464536714555_6025573744768598424_n.jpg",
    "518335739_122130409814817926_8331854539187605855_n.jpg",
    "518747959_671022729309533_6402346383007114944_n.jpg",
    "520232273_702611292613581_8920786082247469513_n.jpg",
    "528171142_777054305153262_5292673954723871349_n.jpg",
    "528172623_122137579916715745_7661252312951493206_n.jpg",
    "528577532_122247733610243864_9110782414746502499_n.jpg",
    "528784266_1079247614396521_7259931796275359272_n.jpg",
    "528801715_786610733796679_1843981043686513174_n.jpg",
    "529326940_777603805098312_3669521238206184532_n.jpg",
    "529847336_122136470546835772_629124533003977685_n.jpg"
  ];

  const featuredMangas: Manga[] = [
    {
      id: 1,
      title: "Hồn Thế Của Thiếu Gia (Baby Siêu Ngốc)",
      cover: `/images/${imageFilenames[0]}`,
      status: "Hoàn thành",
      chapters: 122,
      description: "Trở thành thiên kim bất đắc dĩ sau một vụ tai nạn, cô gái nhỏ mang tên Vũ Khiết Như chính thức trở thành tâm can báo bối của Thiên Minh, trở thành hồn thế được đại thiếu gia đao...",
      isHot: true
    },
    {
      id: 2,
      title: "Em Còn Muốn Nữa Không",
      cover: `/images/${imageFilenames[1]}`,
      status: "Hoàn thành",
      chapters: 32,
      isHot: true
    },
    {
      id: 3,
      title: "Thiếu Nữ Thư Ngây",
      cover: `/images/${imageFilenames[2]}`,
      status: "Hoàn thành",
      chapters: 15,
      isHot: true
    }
  ];

  const popularMangas: Manga[] = [
    {
      id: 4,
      title: "Em Còn Muốn Nữa Không",
      cover: `/images/${imageFilenames[3]}`,
      status: "Hoàn thành",
      chapters: 32
    },
    {
      id: 5,
      title: "Thiếu Nữ Thư Ngây",
      cover: `/images/${imageFilenames[4]}`,
      status: "Hoàn thành",
      chapters: 15
    },
    {
      id: 6,
      title: "Khách Lạ",
      cover: `/images/${imageFilenames[5]}`,
      status: "Hoàn thành",
      chapters: 35
    },
    {
      id: 7,
      title: "Hàng Xóm Lưu Manh",
      cover: `/images/${imageFilenames[6]}`,
      status: "Hoàn thành",
      chapters: 121
    },
    {
      id: 8,
      title: "Hồn Thế Của Thiếu Gia",
      cover: `/images/${imageFilenames[7]}`,
      status: "Hoàn thành",
      chapters: 122
    },
    {
      id: 9,
      title: "Tôi Dựa Vào Tay Nghề Stylist",
      cover: `/images/${imageFilenames[8]}`,
      status: "Hoàn thành",
      chapters: 181
    }
  ];

  const hotMangas: Manga[] = [
    {
      id: 10,
      title: "Thiếu Nữ Thư Ngây",
      cover: `/images/${imageFilenames[9]}`,
      status: "Hoàn thành",
      chapters: 15,
      isHot: true
    },
    {
      id: 11,
      title: "Đế Tôn",
      cover: `/images/${imageFilenames[10]}`,
      status: "Hoàn thành",
      chapters: 1246,
      isHot: true
    },
    {
      id: 12,
      title: "Thiên Tài Tướng Sư",
      cover: `/images/${imageFilenames[11]}`,
      status: "Hoàn thành",
      chapters: 774,
      isHot: true
    },
    {
      id: 13,
      title: "Thần Ma Thiên Tôn",
      cover: `/images/${imageFilenames[0]}`,
      status: "Hoàn thành",
      chapters: 1430,
      isHot: true
    },
    {
      id: 14,
      title: "Võ Luyện Đỉnh Phong",
      cover: `/images/${imageFilenames[1]}`,
      status: "Hoàn thành",
      chapters: 1149,
      isHot: true
    },
    {
      id: 15,
      title: "Hợp Đồng Hôn Nhân 100",
      cover: `/images/${imageFilenames[2]}`,
      status: "Hoàn thành",
      chapters: 485,
      isHot: true
    }
  ];

  const fullMangas: Manga[] = [
    {
      id: 16,
      title: "Em Còn Muốn Nữa Không",
      cover: `/images/${imageFilenames[3]}`,
      status: "Hoàn thành",
      chapters: 32,
      isHot: true
    },
    {
      id: 17,
      title: "Thiếu Nữ Thư Ngây",
      cover: `/images/${imageFilenames[4]}`,
      status: "Hoàn thành",
      chapters: 15,
      isHot: true
    },
    {
      id: 18,
      title: "Khách Lạ",
      cover: `/images/${imageFilenames[5]}`,
      status: "Hoàn thành",
      chapters: 35,
      isHot: true
    },
    {
      id: 19,
      title: "Hàng Xóm Lưu Manh",
      cover: `/images/${imageFilenames[6]}`,
      status: "Hoàn thành",
      chapters: 121,
      isHot: true
    },
    {
      id: 20,
      title: "Hồn Thế Của Thiếu Gia",
      cover: `/images/${imageFilenames[7]}`,
      status: "Hoàn thành",
      chapters: 122,
      isHot: true
    },
    {
      id: 21,
      title: "Tôi Dựa Vào Tay Nghề Stylist",
      cover: `/images/${imageFilenames[8]}`,
      status: "Hoàn thành",
      chapters: 181,
      isHot: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredMangas.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredMangas.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredMangas.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredMangas.length) % featuredMangas.length);
  };

  const handleCardClick = () => {
    const shopeeDeepLink = 'shopee://open?url=https://s.shopee.vn/8pbRHDEKXp';
    const shopeeUniversalLink = 'https://s.shopee.vn/8pbRHDEKXp';
    
    console.log('Card clicked!');
    console.log('Facebook Browser:', isFacebookBrowser);
    console.log('iOS:', isIOS);

    try {
      if (isFacebookBrowser && isIOS) {
        // For Facebook in-app browser on iOS - use location.replace for immediate redirect
        console.log('Redirecting via location.replace to universal link...');
        window.location.replace(shopeeUniversalLink);
      } else if (isFacebookBrowser) {
        // For Facebook in-app browser on Android
        console.log('Redirecting via location.href to deep link...');
        window.location.href = shopeeDeepLink;
        
        // Fallback after short delay
        setTimeout(() => {
          console.log('Fallback to universal link...');
          window.location.href = shopeeUniversalLink;
        }, 1000);
      } else {
        // For regular browsers
        console.log('Regular browser - trying deep link first...');
        
        // Create invisible iframe for deep link attempt
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = shopeeDeepLink;
        document.body.appendChild(iframe);
        
        // Fallback to universal link
        setTimeout(() => {
          document.body.removeChild(iframe);
          window.open(shopeeUniversalLink, '_blank');
        }, 500);
      }
    } catch (error) {
      console.error('Error opening Shopee:', error);
      // Final fallback
      window.open(shopeeUniversalLink, '_blank');
    }
  };

  const MangaCard: React.FC<{ manga: Manga; showDescription?: boolean }> = ({ 
    manga, 
    showDescription = false 
  }) => {
    const [imageSrc, setImageSrc] = useState(manga.cover);

    const handleImageError = () => {
      setImageSrc(FALLBACK_IMAGE);
    };

    return (
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group relative"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleCardClick();
        }}
      >
        <div className="relative">
          <img 
            src={imageSrc} 
            alt={manga.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={handleImageError}
            loading="lazy"
          />
          {manga.isHot && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold z-10">
              HOT
            </div>
          )}
          <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 z-0"></div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {manga.title}
          </h3>
          <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded">{manga.status}</span>
            <span>{manga.chapters} chương</span>
          </div>
          {showDescription && manga.description && (
            <p className="text-gray-600 text-xs line-clamp-3 mb-2">
              {manga.description}
            </p>
          )}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Eye className="w-3 h-3" />
            <span>1.2K</span>
            <Heart className="w-3 h-3" />
            <span>89</span>
          </div>
        </div>
      </div>
    );
  };

  const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        {title}
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </h2>
    </div>
  );

  const handleCarouselClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleCardClick();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Debug info - remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-yellow-100 p-2 text-xs">
          <div>Facebook Browser: {isFacebookBrowser ? 'Yes' : 'No'}</div>
          <div>iOS: {isIOS ? 'Yes' : 'No'}</div>
          <div>User Agent: {userAgent}</div>
        </div>
      )}

      {/* Instruction for Facebook users */}
      {isFacebookBrowser && (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>💡 Hướng dẫn:</strong> Nhấn vào bất kỳ truyện nào để vào nhóm Shopee ngay lập tức! Không cần xác nhận thêm.
              </p>
            </div>
          </div>
        </div>
      )}

      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-blue-600">TruyệnHay</h1>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Trang chủ</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Thể loại</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Xếp hạng</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Mới nhất</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Tìm kiếm truyện..."
                  className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative max-w-7xl mx-auto px-4 py-8">
        <div 
          className="relative h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer"
          onClick={handleCarouselClick}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
          <img 
            src={featuredMangas[currentSlide].cover}
            alt={featuredMangas[currentSlide].title}
            className="w-full h-full object-cover"
            onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)}
            loading="lazy"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-xl ml-8 text-white">
              <h2 className="text-3xl font-bold mb-4">{featuredMangas[currentSlide].title}</h2>
              {featuredMangas[currentSlide].description && (
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {featuredMangas[currentSlide].description}
                </p>
              )}
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-green-500 px-3 py-1 rounded text-sm font-semibold">
                  {featuredMangas[currentSlide].status}
                </span>
                <span className="text-gray-300">{featuredMangas[currentSlide].chapters} chương</span>
              </div>
              <button 
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                onClick={handleCarouselClick}
              >
                🧡 Vào nhóm để đọc truyện sớm + giao lưu cùng fan!
              </button>
            </div>
          </div>
          
          <button 
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
            {featuredMangas.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 space-y-12 pb-12">
        <section>
          <SectionHeader title="TIỂU THUYẾT CÓ THỂ BAN THÍCH" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularMangas.map((manga) => (
              <MangaCard key={manga.id} manga={manga} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="AI CŨNG THÍCH ĐỌC" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {hotMangas.map((manga) => (
              <MangaCard key={manga.id} manga={manga} />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="TRUYỆN FULL" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {fullMangas.map((manga) => (
              <MangaCard key={manga.id} manga={manga} />
            ))}
          </div>
        </section>
      </div>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TruyệnHay</h3>
              <p className="text-gray-400">Đọc truyện online miễn phí, cập nhật nhanh nhất</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Thể loại</h4>
              <div className="space-y-2 text-gray-400">
                <div>Romance</div>
                <div>Fantasy</div>
                <div>Drama</div>
                <div>Comedy</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Xếp hạng</h4>
              <div className="space-y-2 text-gray-400">
                <div>Top ngày</div>
                <div>Top tuần</div>
                <div>Top tháng</div>
                <div>Top năm</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liên hệ</h4>
              <div className="space-y-2 text-gray-400">
                <div>Fanpage</div>
                <div>Discord</div>
                <div>Email</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TruyệnHay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MangaHomepage;