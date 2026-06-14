export default function Hero() {
  return (
    <section className="px-6 md:px-16 pt-10 md:pt-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

      {/* Left Side */}
      <div className="max-w-2xl text-center lg:text-left">

        <p className="text-[#B39B84] tracking-[4px] md:tracking-[5px] text-xs md:text-sm mb-6 md:mb-8">
          PREMIUM DÜĞÜN VE ORGANİZASYON DENEYİMİ
        </p>

        <h2 className="text-[42px] sm:text-[55px] md:text-[75px] lg:text-[90px]
        leading-[55px] sm:leading-[70px] md:leading-[90px] lg:leading-[100px]
        text-[#2A2A2A] font-light">

          Hayalinizdeki
          <br />
          Organizasyonu
          <br />
          Gerçeğe
          <br />
          Dönüştürün.

        </h2>

        <p className="mt-8 md:mt-10 text-[#8E8A86] text-base md:text-lg leading-8 md:leading-9 max-w-xl mx-auto lg:mx-0">
          Lunessa ile en özel günlerinizi zarif, modern ve unutulmaz
          bir deneyime dönüştürün.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 mt-10 md:mt-12">

          <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-[#2A2A2A] text-white rounded-full tracking-[3px] text-sm hover:opacity-90 duration-300">
            Organizasyonları Keşfet
          </button>

          <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 border border-[#D6BFA7] text-[#2A2A2A] rounded-full tracking-[3px] text-sm hover:bg-[#D6BFA7] duration-300">
            Teklif Al
          </button>

        </div>

      </div>

      {/* Right Side */}
      <div className="w-full max-w-[650px] h-[400px] sm:h-[500px] md:h-[650px] lg:h-[750px] rounded-[30px] md:rounded-[40px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1974&auto=format&fit=crop"
          alt="Wedding"
          className="w-full h-full object-cover"
        />

      </div>

    </section>
  )
}