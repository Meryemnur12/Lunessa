import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Wedding() {
  return (
    <div className="min-h-screen bg-[#F8F5F1]">

      <Navbar />

      {/* Hero */}
      <section className="px-6 md:px-16 pt-12 md:pt-20">

        <div className="rounded-[30px] md:rounded-[50px] overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1974&auto=format&fit=crop"
            alt="Düğün Organizasyonu"
            className="w-full h-[350px] md:h-[700px] object-cover"
          />

        </div>

        <div className="mt-12 md:mt-20">

          <p className="text-[#B39B84] tracking-[5px] text-sm mb-4">
            PREMIUM WEDDING
          </p>

          <h1 className="text-[45px] md:text-[90px] leading-tight font-light text-[#2A2A2A]">
            Düğün
            <br />
            Organizasyonu
          </h1>

          <p className="mt-8 max-w-3xl text-[#6F6B67] leading-8">
            Hayatınızın en özel gününü kusursuz bir deneyime dönüştürüyoruz.
            Mekan seçiminden dekorasyona, karşılama alanlarından sahne
            tasarımına kadar tüm detayları sizin için planlıyoruz.
          </p>

        </div>

      </section>

      {/* Hizmetler */}
      <section className="px-6 md:px-16 py-24">

        <h2 className="text-4xl md:text-5xl font-light text-[#2A2A2A] mb-12">
          Neler Sunuyoruz?
        </h2>

        <div className="
  bg-white
  rounded-[30px]
  p-8
  hover:-translate-y-2
  hover:shadow-lg
  duration-300
">

          <div className="
  bg-white
  rounded-[30px]
  p-8
  hover:-translate-y-2
  hover:shadow-lg
  duration-300
">
            <h3 className="text-2xl mb-4">Mekan Seçimi</h3>
            <p className="text-[#8E8A86]">
              Konseptinize uygun mekan önerileri.
            </p>
          </div>

          <div className="
  bg-white
  rounded-[30px]
  p-8
  hover:-translate-y-2
  hover:shadow-lg
  duration-300
">
            <h3 className="text-2xl mb-4">Dekorasyon</h3>
            <p className="text-[#8E8A86]">
              Özel tasarım masa ve alan süslemeleri.
            </p>
          </div>

          <div className="
  bg-white
  rounded-[30px]
  p-8
  hover:-translate-y-2
  hover:shadow-lg
  duration-300
">
            <h3 className="text-2xl mb-4">Fotoğraf & Video</h3>
            <p className="text-[#8E8A86]">
              Profesyonel çekim hizmetleri.
            </p>
          </div>

          <div className="
  bg-white
  rounded-[30px]
  p-8
  hover:-translate-y-2
  hover:shadow-lg
  duration-300
">
            <h3 className="text-2xl mb-4">Koordinasyon</h3>
            <p className="text-[#8E8A86]">
              Tüm gün boyunca organizasyon yönetimi.
            </p>
          </div>

        </div>

      </section>

      {/* Galeri */}
      <section className="px-6 md:px-16 pb-24">

        <h2 className="text-4xl md:text-5xl font-light text-[#2A2A2A] mb-12">
          Düğün Galerisi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <img
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1974&auto=format&fit=crop"
            alt=""
            className="rounded-[30px] h-[300px] w-full object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1974&auto=format&fit=crop"
            alt=""
            className="rounded-[30px] h-[300px] w-full object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1974&auto=format&fit=crop"
            alt=""
            className="rounded-[30px] h-[300px] w-full object-cover"
          />

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 pb-24">

        <div className="bg-[#2A2A2A] rounded-[40px] p-12 md:p-20 text-center">

          <h2 className="text-white text-4xl md:text-6xl font-light mb-8">
            Hayalinizdeki
            <br />
            Düğünü Birlikte Tasarlayalım
          </h2>

          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-[#D6BFA7] rounded-full tracking-[3px]"
          >
            Teklif Al
          </Link>

        </div>

      </section>

      <Footer />

    </div>
  );
}