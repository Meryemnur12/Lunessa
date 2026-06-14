import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MoonlightHall() {
return ( <div className="min-h-screen bg-[#F8F5F1]">


  <Navbar />

  <section className="px-6 md:px-16 pt-12 md:pt-20">

    <div className="rounded-[30px] md:rounded-[50px] overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1974&auto=format&fit=crop"
        alt="Moonlight Hall"
        className="w-full h-[350px] md:h-[700px] object-cover"
      />

    </div>

    <div className="mt-12 md:mt-20">

      <p className="text-[#B39B84] tracking-[5px] text-sm mb-4">
        SIGNATURE VENUE
      </p>

      <h1 className="text-[45px] md:text-[90px] leading-tight font-light text-[#2A2A2A]">
        Moonlight Hall
      </h1>

      <p className="mt-6 text-[#8E8A86] text-lg md:text-xl">
        Antalya • 350 Kişi
      </p>

      <p className="mt-8 max-w-3xl text-[#6F6B67] leading-8">
        Akdeniz'in eşsiz atmosferinde unutulmaz düğün ve özel organizasyon deneyimleri sunar.
      </p>

    </div>

  </section>

  <Footer />

</div>


);
}
