import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";

export default function Contact() {

  const [searchParams] = useSearchParams();
  const venue = searchParams.get("venue");

  return (
    <div className="min-h-screen bg-[#F8F5F1]">

      <Navbar />

      <section className="px-6 md:px-16 py-20">

        <p className="text-[#B39B84] tracking-[5px] text-sm mb-6">
          TEKLİF AL
        </p>

        <h1 className="text-[45px] md:text-[80px] font-light text-[#2A2A2A] mb-6">
          Hayalinizdeki
          <br />
          Organizasyonu Planlayalım
        </h1>

        <p className="text-[#8E8A86] max-w-2xl mb-16">
          Etkinliğiniz hakkında birkaç bilgi paylaşın,
          size en uygun organizasyon teklifini hazırlayalım.
        </p>

        <form className="max-w-4xl">

          {venue && (
            <input
              type="text"
              value={venue}
              readOnly
              className="w-full bg-white rounded-2xl p-5 outline-none mb-6"
            />
          )}

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Ad Soyad"
              className="bg-white rounded-2xl p-5 outline-none"
            />

            <input
              type="tel"
              placeholder="Telefon"
              className="bg-white rounded-2xl p-5 outline-none"
            />

            <input
              type="email"
              placeholder="E-posta"
              className="bg-white rounded-2xl p-5 outline-none"
            />

            <select className="bg-white rounded-2xl p-5 outline-none">
              <option>Etkinlik Türü</option>
              <option>Düğün</option>
              <option>Nişan</option>
              <option>Kına</option>
              <option>Söz</option>
              <option>Kurumsal Etkinlik</option>
            </select>

            <input
              type="date"
              className="bg-white rounded-2xl p-5 outline-none"
            />

            <input
              type="number"
              placeholder="Misafir Sayısı"
              className="bg-white rounded-2xl p-5 outline-none"
            />

          </div>

          <textarea
            placeholder="Organizasyonunuz hakkında bilgi verin..."
            rows="6"
            className="w-full bg-white rounded-2xl p-5 outline-none mt-6"
          />

          <button
            type="submit"
            className="mt-8 px-10 py-4 bg-[#D6BFA7] rounded-full tracking-[3px] hover:opacity-90 duration-300"
          >
            TEKLİF AL
          </button>

        </form>

      </section>

      <Footer />

    </div>
  );
}