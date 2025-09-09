import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart } from "lucide-react";

const About = () => {
  return (
    <main className="pt-20">
      {/* ===== Main Section ===== */}
      <section className="py-20 bg-gradient-to-br from-[#fdfcfb] to-[#f8f5f2]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-light text-[#2c2c2c] mb-6 leading-tight">
                  The Art of <span className="text-[#B48A7C]">Fashion</span> Redefined
                </h1>
                <p className="text-lg text-[#6b6b6b] leading-relaxed max-w-2xl">
                  We believe fashion is more than clothing—it’s an expression of art, passion, and individuality.
                  Every piece in our collection is carefully curated to embody elegance, quality, and timeless beauty.
                </p>
              </div>

              {/* Feature cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#E8BBA0] to-[#D4A574] rounded-full flex items-center justify-center mb-4 text-white">
                      <Award className="h-7 w-7" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[#2c2c2c] mb-2">
                      Premium Quality
                    </h3>
                    <p className="text-sm text-[#6b6b6b] leading-relaxed">
                      Handpicked materials and exceptional craftsmanship in every garment we offer.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#E8BBA0] to-[#D4A574] rounded-full flex items-center justify-center mb-4 text-white">
                      <Heart className="h-7 w-7" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[#2c2c2c] mb-2">
                      Made with Love
                    </h3>
                    <p className="text-sm text-[#6b6b6b] leading-relaxed">
                      Each creation is designed with passion and attention to detail, and care for your unique style.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right image */}
            <div className="relative animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/lovable-uploads/bea22de6-6b02-48f8-a618-8f783bb7f534.png"
                  alt="Elegant boutique interior showcasing premium fashion collection"
                  className="w-full h-[600px] object-cover"
                  width={600}
                  height={600}
                  loading="eager"
                  decoding="sync"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                {/* subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Commitment Section ===== */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2c2c] mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-[#6b6b6b] leading-relaxed">
              Every detail matters when creating pieces that celebrate your unique elegance and sophistication.
            </p>

            <div className="mt-8">
              <Link
                to="/collection"
                className="inline-flex items-center justify-center rounded-md border border-[#B48A7C] px-6 py-2 text-[#B48A7C] hover:bg-[#B48A7C] hover:text-white transition-colors"
              >
                Explore the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
