import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Venues() {
return ( <div className="min-h-screen bg-[#F8F5F1]">


  <Navbar />

  <section className="px-6 md:px-16 py-20">

    <p className="text-[#B39B84] tracking-[5px] text-sm mb-6">
      TÜM MEKANLAR
    </p>

    <h1 className="text-[45px] md:text-[80px] font-light text-[#2A2A2A] mb-16">
      Organizasyon
      <br />
      Mekanları
    </h1>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* Liva Garden */}
      <Link
        to="/venues/liva-garden"
        className="group block"
      >
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1974&auto=format&fit=crop"
          alt="Liva Garden"
          className="h-[450px] w-full object-cover rounded-[30px] group-hover:scale-[1.02] duration-500"
        />

        <h3 className="text-3xl mt-6 text-[#2A2A2A]">
          Liva Garden
        </h3>

        <p className="text-[#8E8A86] mt-2">
          İstanbul • 400 Kişi
        </p>
      </Link>

      {/* White Palace */}
      <Link
        to="/venues/white-palace"
        className="group block"
      >
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1974&auto=format&fit=crop"
          alt="White Palace"
          className="h-[450px] w-full object-cover rounded-[30px] group-hover:scale-[1.02] duration-500"
        />

        <h3 className="text-3xl mt-6 text-[#2A2A2A]">
          White Palace
        </h3>

        <p className="text-[#8E8A86] mt-2">
          İzmir • 600 Kişi
        </p>
      </Link>

      {/* Moonlight Hall */}
      <Link
        to="/venues/moonlight-hall"
        className="group block"
      >
        <img
          src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1974&auto=format&fit=crop"
          alt="Moonlight Hall"
          className="h-[450px] w-full object-cover rounded-[30px] group-hover:scale-[1.02] duration-500"
        />

        <h3 className="text-3xl mt-6 text-[#2A2A2A]">
          Moonlight Hall
        </h3>

        <p className="text-[#8E8A86] mt-2">
          Antalya • 350 Kişi
        </p>
      </Link>

    </div>

  </section>

  <Footer />

</div>


);
}
