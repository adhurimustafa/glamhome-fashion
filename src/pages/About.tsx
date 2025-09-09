import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart } from "lucide-react";

const About = () => {
  return (
    <main className="pt-20">
      {/* Main Section */}
      <section className="py-20 bg-gradient-to-br from-[#fdfcfb] to-[#f8f5f2]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-12 animate-fade-in">
              {/* Title and Description */}
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-light text-[#2c2c2c] mb-8 leading-tight">
                  The Art of Fashion Redefined
                </h1>
                <p className="text-lg text-[#6b6b6b] leading-relaxed max-w-lg">
                  We believe fashion is more than clothing—it's an expression of art, passion, and individuality. 
                  Every piece in our collection is carefully curated to embody elegance, quality, and timeless beauty.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#E8B4A0] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[#2c2c2c] mb-3">
                      Premium Quality
                    </h3>
                    <p className="text-sm text-[#6b6b6b] leading-relaxed">
                      Handpicked materials and exceptional craftsmanship in every garment we offer.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#E8B4A0] to-[#D4A574] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[#2c2c2c] mb-3">
                      Made with Love
                    </h3>
                    <p className="text-sm text-[#6b6b6b] leading-relaxed">
                      Each piece is created with passion, attention to detail, and care for your unique style.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-scale-in">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/lovable-uploads/be2a2ed6-6b02-48f8-a618-8f78b3b7f534.png"
                  alt="Elegant boutique interior showcasing premium fashion collection"
                  className="w-full h-[600px] object-cover"
                  width="600"
                  height="600"
                  loading="eager"
                  decoding="sync"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                {/* Elegant overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#E8B4A0]/30 to-[#D4A574]/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#D4A574]/20 to-[#E8B4A0]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with generous spacing */}
      <section className="py-24 bg-[#faf9f7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2c2c] mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
              Every detail matters when creating pieces that celebrate your unique elegance and sophistication.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;