export default function Packages() {
  return (
    <section className="px-6 md:px-16 py-24 md:py-40">

      <div className="text-center mb-16 md:mb-24">

        <p className="text-[#B39B84] tracking-[5px] text-xs md:text-sm mb-4 md:mb-6">
          ÖZEL PAKETLER
        </p>

        <h3 className="text-[36px] sm:text-[45px] md:text-[60px]
        leading-[50px] md:leading-[70px]
        text-[#2A2A2A] font-light">

          Size En Uygun
          <br />
          Organizasyon Paketini Seçin.

        </h3>

      </div>

      {/* Package Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">

        {/* Silver Package */}
        <div className="bg-white rounded-[30px] md:rounded-[40px] p-10 md:p-14 shadow-sm hover:-translate-y-3 duration-500">

          <p className="text-[#B39B84] tracking-[4px] text-sm mb-6 md:mb-8">
            SILVER
          </p>

          <h4 className="text-4xl md:text-5xl text-[#2A2A2A] font-light mb-8 md:mb-10">
            ₺49.999
          </h4>

          <div className="space-y-5 md:space-y-6 text-[#8E8A86] text-base md:text-lg">

            <p>• Organizasyon Planlaması</p>
            <p>• Masa Düzeni</p>
            <p>• Fotoğraf Alanı</p>
            <p>• Müzik Sistemi</p>

          </div>

          <button className="mt-10 md:mt-14 w-full py-4 md:py-5 border border-[#D6BFA7] rounded-full tracking-[3px] text-sm hover:bg-[#D6BFA7] duration-300">
            Paketi İncele
          </button>

        </div>

        {/* Gold Package */}
        <div className="bg-[#2A2A2A] rounded-[30px] md:rounded-[40px] p-10 md:p-14 shadow-sm hover:-translate-y-3 duration-500 relative overflow-hidden">

          <div className="absolute top-6 right-6 bg-[#D6BFA7] text-[#2A2A2A] px-5 py-2 rounded-full text-xs tracking-[2px]">
            POPÜLER
          </div>

          <p className="text-[#D6BFA7] tracking-[4px] text-sm mb-6 md:mb-8">
            GOLD
          </p>

          <h4 className="text-4xl md:text-5xl text-white font-light mb-8 md:mb-10">
            ₺89.999
          </h4>

          <div className="space-y-5 md:space-y-6 text-[#D8D8D8] text-base md:text-lg">

            <p>• Premium Organizasyon</p>
            <p>• Canlı Müzik</p>
            <p>• Özel Dekorasyon</p>
            <p>• Profesyonel Fotoğrafçı</p>
            <p>• Video Çekimi</p>

          </div>

          <button className="mt-10 md:mt-14 w-full py-4 md:py-5 bg-[#D6BFA7] text-[#2A2A2A] rounded-full tracking-[3px] text-sm hover:opacity-90 duration-300">
            Paketi İncele
          </button>

        </div>

        {/* Signature Package */}
        <div className="bg-white rounded-[30px] md:rounded-[40px] p-10 md:p-14 shadow-sm hover:-translate-y-3 duration-500">

          <p className="text-[#B39B84] tracking-[4px] text-sm mb-6 md:mb-8">
            SIGNATURE
          </p>

          <h4 className="text-4xl md:text-5xl text-[#2A2A2A] font-light mb-8 md:mb-10">
            ₺149.999
          </h4>

          <div className="space-y-5 md:space-y-6 text-[#8E8A86] text-base md:text-lg">

            <p>• Full VIP Organizasyon</p>
            <p>• Luxury Mekan Seçimi</p>
            <p>• Özel Konsept Tasarımı</p>
            <p>• Drone Çekimi</p>
            <p>• Sınırsız Destek</p>

          </div>

          <button className="mt-10 md:mt-14 w-full py-4 md:py-5 border border-[#D6BFA7] rounded-full tracking-[3px] text-sm hover:bg-[#D6BFA7] duration-300">
            Paketi İncele
          </button>

        </div>

      </div>

    </section>
  )
}