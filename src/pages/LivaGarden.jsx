import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function LivaGarden() {
return ( <div className="min-h-screen bg-[#F8F5F1]">
  <Navbar />

  {/* Hero */}
  <section className="px-6 md:px-16 pt-12 md:pt-20">

    <div className="rounded-[30px] md:rounded-[50px] overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1974&auto=format&fit=crop"
        alt="Liva Garden"
        className="w-full h-[350px] md:h-[700px] object-cover"
      />

    </div>

    <div className="mt-12 md:mt-20">

      <p className="text-[#B39B84] tracking-[5px] text-sm mb-4">
        PREMIUM VENUE
      </p>

      <h1 className="text-[45px] md:text-[90px] leading-tight font-light text-[#2A2A2A]">
        Liva Garden
      </h1>

      <p className="mt-6 text-[#8E8A86] text-lg md:text-xl">
        İstanbul • 400 Kişi
      </p>

      <p className="mt-8 max-w-3xl text-[#6F6B67] leading-8">
        Doğanın zarafeti ile modern mimariyi bir araya getiren
        Liva Garden, düğün, nişan ve özel organizasyonlar için
        unutulmaz bir deneyim sunar.
      </p>

    </div>

  </section>

  {/* Features */}
  <section className="px-6 md:px-16 py-24">

    <h2 className="text-4xl md:text-5xl font-light text-[#2A2A2A] mb-12">
      Mekan Özellikleri
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div className="bg-white rounded-[30px] p-8">
        <h3 className="text-2xl mb-3">👥 Kapasite</h3>
        <p className="text-[#8E8A86]">400 Kişi</p>
      </div>

      <div className="bg-white rounded-[30px] p-8">
        <h3 className="text-2xl mb-3">🚗 Otopark</h3>
        <p className="text-[#8E8A86]">Mevcut</p>
      </div>

      <div className="bg-white rounded-[30px] p-8">
        <h3 className="text-2xl mb-3">🎵 Canlı Müzik</h3>
        <p className="text-[#8E8A86]">Mevcut</p>
      </div>

    </div>

  </section>

  {/* Gallery */}
  <section className="px-6 md:px-16 pb-24">

    <h2 className="text-4xl md:text-5xl font-light text-[#2A2A2A] mb-12">
      Galeri
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <img
        src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1974&auto=format&fit=crop"
        alt=""
        className="rounded-[30px] h-[350px] w-full object-cover"
      />

      <img
        src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1974&auto=format&fit=crop"
        alt=""
        className="rounded-[30px] h-[350px] w-full object-cover"
      />

    </div>

  </section>

  {/* CTA */}
  <section className="px-6 md:px-16 pb-24">

    <div className="bg-[#2A2A2A] rounded-[40px] p-12 md:p-20 text-center">

      <h2 className="text-white text-4xl md:text-6xl font-light mb-8">
        Hayalinizdeki
        <br />
        Organizasyon İçin
      </h2>

      <Link
  to="/contact?venue=Liva Garden"
  className="inline-block px-10 py-4 bg-[#D6BFA7] rounded-full tracking-[3px] hover:opacity-90 duration-300"
>
  Teklif Al
</Link>

    </div>

  </section>

  <Footer />

</div>
);
}
