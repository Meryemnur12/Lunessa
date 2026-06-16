import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const organizations = [
  {
    title: "Düğün",
    slug: "wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1974&auto=format&fit=crop",
    description:
      "Hayalinizdeki düğünü en ince detayına kadar planlıyor ve unutulmaz bir deneyime dönüştürüyoruz.",
  },
  {
    title: "Nişan",
    slug: "engagement",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1974&auto=format&fit=crop",
    description:
      "Aileniz ve sevdiklerinizle paylaşacağınız özel nişan gününüzü zarafetle tasarlıyoruz.",
  },
  {
    title: "Kına",
    slug: "henna",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1974&auto=format&fit=crop",
    description:
      "Geleneksel kına gecelerini modern dokunuşlarla unutulmaz anılara dönüştürüyoruz.",
  },
  {
    title: "Söz",
    slug: "promise",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1974&auto=format&fit=crop",
    description:
      "Hayatınızın ilk adımlarını şık ve samimi organizasyonlarla taçlandırıyoruz.",
  },
  {
    title: "Doğum Günü",
    slug: "birthday",
    image:
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=1974&auto=format&fit=crop",
    description:
      "Her yaş için özel konseptlerle unutulmaz doğum günü kutlamaları hazırlıyoruz.",
  },
  {
    title: "Baby Shower",
    slug: "baby-shower",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1974&auto=format&fit=crop",
    description:
      "Minik misafiriniz için zarif ve keyifli baby shower organizasyonları sunuyoruz.",
  },
  {
    title: "Cinsiyet Partisi",
    slug: "gender-reveal",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1974&auto=format&fit=crop",
    description:
      "En heyecanlı anlardan birini özel konseptlerle unutulmaz hale getiriyoruz.",
  },
  {
    title: "Mezuniyet",
    slug: "graduation",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1974&auto=format&fit=crop",
    description:
      "Başarılarınızı sevdiklerinizle birlikte kutlayabileceğiniz özel etkinlikler tasarlıyoruz.",
  },
  {
    title: "Kurumsal Etkinlik",
    slug: "corporate",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1974&auto=format&fit=crop",
    description:
      "Markanızı ve kurumunuzu en iyi şekilde yansıtan profesyonel organizasyonlar hazırlıyoruz.",
  },
  {
    title: "Lansman",
    slug: "launch",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=1974&auto=format&fit=crop",
    description:
      "Yeni ürün ve hizmetlerinizi etkileyici organizasyonlarla tanıtmanıza yardımcı oluyoruz.",
  },
  {
    title: "Özel Davet",
    slug: "private-event",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1974&auto=format&fit=crop",
    description:
      "Seçkin misafirleriniz için benzersiz ve prestijli davetler organize ediyoruz.",
  },
];

export default function Organizations() {
  return (
    <div className="min-h-screen bg-[#F8F5F1]">
      <Navbar />

      <section className="px-6 md:px-16 py-20">
        <p className="text-[#B39B84] tracking-[5px] text-sm mb-6">
          ORGANİZASYONLAR
        </p>

        <h1 className="text-[45px] md:text-[80px] font-light text-[#2A2A2A] mb-16">
          Unutulmaz
          <br />
          Anlar Tasarlıyoruz
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {organizations.map((organization) => (
            <div
              key={organization.slug}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                bg-white
                h-[320px]
                shadow-sm
                hover:-translate-y-2
                duration-500
              "
            >
              {/* Arka Plan Fotoğraf */}
              <img
                src={organization.image}
                alt={organization.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  opacity-0
                  group-hover:opacity-100
                  duration-700
                "
              />

              {/* Karartma */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/50
                  opacity-0
                  group-hover:opacity-100
                  duration-700
                "
              />

              {/* İçerik */}
              <div
                className="
                  relative
                  z-10
                  h-full
                  p-8
                  flex
                  flex-col
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[#B39B84]
                      tracking-[4px]
                      text-xs
                      mb-4
                      group-hover:text-white
                      duration-500
                    "
                  >
                    PREMIUM EVENT
                  </p>

                  <h2
                    className="
                      text-3xl
                      text-[#2A2A2A]
                      font-light
                      mb-4
                      group-hover:text-white
                      duration-500
                    "
                  >
                    {organization.title}
                  </h2>

                  <p
                    className="
                      text-[#8E8A86]
                      leading-7
                      group-hover:text-white/90
                      duration-500
                    "
                  >
                    {organization.description}
                  </p>
                </div>

                <Link
                to="/organizations/wedding"
                className="
                  w-fit
                  px-8
                  py-4
                  border
                  border-[#D6BFA7]
                  rounded-full
                  tracking-[3px]
                  text-sm
                  duration-500
                  group-hover:bg-white
                  group-hover:text-black
                "
              >
                Teklif Al
              </Link>
              </div>
            </div>
          ))}

        </div>
      </section>

      <section className="px-6 md:px-16 pb-24">

  <p className="text-[#B39B84] tracking-[5px] text-sm mb-6">
    İLHAM GALERİSİ
  </p>

  <h2 className="text-[40px] md:text-[70px] leading-tight font-light text-[#2A2A2A] mb-16">
    Her Organizasyon,
    <br />
    Benzersiz Bir Hikaye Anlatır
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Büyük */}
    <div className="overflow-hidden rounded-[30px] group">
      <img
        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1974&auto=format&fit=crop"
        alt=""
        className="w-full h-[500px] object-cover group-hover:scale-105 duration-700"
      />
    </div>

    {/* Sağ Taraf */}
    <div className="grid grid-rows-2 gap-8">

      <div className="overflow-hidden rounded-[30px] group">
        <img
          src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1974&auto=format&fit=crop"
          alt=""
          className="w-full h-[235px] object-cover group-hover:scale-105 duration-700"
        />
      </div>

      <div className="overflow-hidden rounded-[30px] group">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1974&auto=format&fit=crop"
          alt=""
          className="w-full h-[235px] object-cover group-hover:scale-105 duration-700"
        />
      </div>

    </div>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">

    <div className="overflow-hidden rounded-[30px] group">
      <img
        src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1974&auto=format&fit=crop"
        alt=""
        className="w-full h-[280px] object-cover group-hover:scale-105 duration-700"
      />
    </div>

    <div className="overflow-hidden rounded-[30px] group">
      <img
        src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1974&auto=format&fit=crop"
        alt=""
        className="w-full h-[280px] object-cover group-hover:scale-105 duration-700"
      />
    </div>

    <div className="overflow-hidden rounded-[30px] group">
      <img
        src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1974&auto=format&fit=crop"
        alt=""
        className="w-full h-[280px] object-cover group-hover:scale-105 duration-700"
      />
    </div>

  </div>

</section>

<section className="px-6 md:px-16 pb-32">

  <p className="text-[#B39B84] tracking-[5px] text-sm mb-6">
    ORGANİZASYON SÜRECİ
  </p>

  <h2 className="text-[40px] md:text-[70px] leading-tight font-light text-[#2A2A2A] mb-20">
    Hayalinizden
    <br />
    Gerçeğe
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

    <div className="bg-white rounded-[30px] p-8">
      <span className="text-[#B39B84] text-sm tracking-[4px]">
        01
      </span>

      <h3 className="text-2xl text-[#2A2A2A] mt-4 mb-4">
        Hayalinizi Anlatın
      </h3>

      <p className="text-[#8E8A86] leading-7">
        Organizasyonunuz için tüm beklenti ve
        isteklerinizi dinliyoruz.
      </p>
    </div>

    <div className="bg-white rounded-[30px] p-8">
      <span className="text-[#B39B84] text-sm tracking-[4px]">
        02
      </span>

      <h3 className="text-2xl text-[#2A2A2A] mt-4 mb-4">
        Konsepti Tasarlayalım
      </h3>

      <p className="text-[#8E8A86] leading-7">
        Size özel tema, dekorasyon ve etkinlik
        planını oluşturuyoruz.
      </p>
    </div>

    <div className="bg-white rounded-[30px] p-8">
      <span className="text-[#B39B84] text-sm tracking-[4px]">
        03
      </span>

      <h3 className="text-2xl text-[#2A2A2A] mt-4 mb-4">
        Hazırlıkları Tamamlayalım
      </h3>

      <p className="text-[#8E8A86] leading-7">
        Tüm organizasyon sürecini profesyonel
        ekibimizle yönetiyoruz.
      </p>
    </div>

    <div className="bg-white rounded-[30px] p-8">
      <span className="text-[#B39B84] text-sm tracking-[4px]">
        04
      </span>

      <h3 className="text-2xl text-[#2A2A2A] mt-4 mb-4">
        Anın Tadını Çıkarın
      </h3>

      <p className="text-[#8E8A86] leading-7">
        Siz sadece özel gününüzün keyfini çıkarın,
        tüm detaylarla biz ilgilenelim.
      </p>
    </div>

  </div>

</section>

      <Footer />
    </div>
  );
}