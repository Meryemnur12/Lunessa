export default function CTA() {
  return (
    <section className="px-6 md:px-16 pb-24 md:pb-40">

      <div className="bg-[#2A2A2A] rounded-[35px] md:rounded-[50px]
      px-6 sm:px-10 md:px-20
      py-16 md:py-28
      text-center relative overflow-hidden">

        {/* Blur Effect */}
        <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px]
        bg-[#D6BFA7]/20 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>

        <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px]
        bg-[#D6BFA7]/10 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>

        {/* Content */}
        <p className="text-[#D6BFA7] tracking-[4px] md:tracking-[5px]
        text-xs md:text-sm mb-6 md:mb-8 relative">

          HAYALİNİZDEKİ GÜN İÇİN

        </p>

        <h3 className="text-[36px] sm:text-[50px] md:text-[70px]
        leading-[50px] sm:leading-[65px] md:leading-[85px]
        text-white font-light relative">

          En Özel Anlarınızı
          <br />
          Birlikte Planlayalım.

        </h3>

        <p className="text-[#CFCFCF]
        text-base md:text-lg
        leading-8 md:leading-9
        max-w-3xl mx-auto
        mt-8 md:mt-10 relative">

          Lunessa ile unutulmaz organizasyon deneyimi yaşayın.
          Zarif detaylar, modern dokunuşlar ve premium hizmet
          ile hayalinizdeki günü gerçeğe dönüştürelim.

        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center
        gap-4 md:gap-6 mt-10 md:mt-14 relative">

          <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5
          bg-[#D6BFA7] text-[#2A2A2A]
          rounded-full tracking-[3px] text-sm
          hover:opacity-90 duration-300">

            Teklif Al

          </button>

          <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5
          border border-[#D6BFA7] text-white
          rounded-full tracking-[3px] text-sm
          hover:bg-[#D6BFA7]
          hover:text-[#2A2A2A]
          duration-300">

            İletişime Geç

          </button>

        </div>

      </div>

    </section>
  )
}