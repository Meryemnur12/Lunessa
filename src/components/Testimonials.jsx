export default function Testimonials() {
  return (
    <section className="px-6 md:px-16 py-24 md:py-40">

      <div className="text-center mb-16 md:mb-24">

        <p className="text-[#B39B84] tracking-[5px] text-xs md:text-sm mb-4 md:mb-6">
          MÜŞTERİ YORUMLARI
        </p>

        <h3 className="text-[36px] sm:text-[45px] md:text-[60px]
        leading-[50px] md:leading-[70px]
        text-[#2A2A2A] font-light">

          İnsanlar
          <br />
          Lunessa İçin
          <br />
          Ne Diyor?

        </h3>

      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">

        {/* Card 1 */}
        <div className="bg-white rounded-[30px] md:rounded-[40px] p-8 md:p-12 shadow-sm hover:-translate-y-2 duration-500">

          <div className="flex items-center gap-2 text-xl md:text-2xl mb-8 md:mb-10">
            ⭐ ⭐ ⭐ ⭐ ⭐
          </div>

          <p className="text-[#6F6B67] leading-8 md:leading-9 text-base md:text-lg mb-10 md:mb-14">
            “Hayal ettiğimizden bile daha zarif bir düğün oldu.
            Her detay inanılmaz düşünülmüştü.”
          </p>

          <div className="flex items-center gap-4 md:gap-5">

            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F8F5F1] flex items-center justify-center text-[#2A2A2A] text-lg md:text-xl">
              A
            </div>

            <div>

              <h4 className="text-lg md:text-xl text-[#2A2A2A]">
                Ayşe & Mehmet
              </h4>

              <p className="text-[#8E8A86] mt-1 text-sm md:text-base">
                İstanbul
              </p>

            </div>

          </div>

        </div>

        {/* Card 2 */}
        <div className="bg-[#2A2A2A] rounded-[30px] md:rounded-[40px] p-8 md:p-12 shadow-sm hover:-translate-y-2 duration-500">

          <div className="flex items-center gap-2 text-xl md:text-2xl mb-8 md:mb-10">
            ⭐ ⭐ ⭐ ⭐ ⭐
          </div>

          <p className="text-[#D8D8D8] leading-8 md:leading-9 text-base md:text-lg mb-10 md:mb-14">
            “Lunessa sayesinde tüm süreç inanılmaz kolay geçti.
            Kendimizi gerçekten özel hissettik.”
          </p>

          <div className="flex items-center gap-4 md:gap-5">

            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#D6BFA7] flex items-center justify-center text-[#2A2A2A] text-lg md:text-xl">
              E
            </div>

            <div>

              <h4 className="text-lg md:text-xl text-white">
                Elif & Can
              </h4>

              <p className="text-[#B8B8B8] mt-1 text-sm md:text-base">
                İzmir
              </p>

            </div>

          </div>

        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-[30px] md:rounded-[40px] p-8 md:p-12 shadow-sm hover:-translate-y-2 duration-500">

          <div className="flex items-center gap-2 text-xl md:text-2xl mb-8 md:mb-10">
            ⭐ ⭐ ⭐ ⭐ ⭐
          </div>

          <p className="text-[#6F6B67] leading-8 md:leading-9 text-base md:text-lg mb-10 md:mb-14">
            “Profesyonel ekip, zarif organizasyon ve unutulmaz
            bir atmosfer… Her şey kusursuzdu.”
          </p>

          <div className="flex items-center gap-4 md:gap-5">

            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F8F5F1] flex items-center justify-center text-[#2A2A2A] text-lg md:text-xl">
              M
            </div>

            <div>

              <h4 className="text-lg md:text-xl text-[#2A2A2A]">
                Melisa & Kerem
              </h4>

              <p className="text-[#8E8A86] mt-1 text-sm md:text-base">
                Antalya
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}