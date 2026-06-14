export default function Services() {
  return (
    <section className="px-6 md:px-16 py-24 md:py-40">

      <div className="text-center mb-16 md:mb-24">

        <p className="text-[#B39B84] tracking-[5px] text-xs md:text-sm mb-4 md:mb-6">
          HİZMETLERİMİZ
        </p>

        <h3 className="text-[36px] sm:text-[45px] md:text-[60px] leading-[50px] md:leading-[70px] text-[#2A2A2A] font-light">
          Özel Günlerinizi
          <br />
          Unutulmaz Hale Getiriyoruz.
        </h3>

      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 md:gap-8">

        {/* Card 1 */}
        <div className="bg-white rounded-[30px] md:rounded-[35px] p-8 md:p-10 hover:-translate-y-3 duration-500 shadow-sm">

          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F8F5F1] flex items-center justify-center text-2xl mb-8 md:mb-10">
            💍
          </div>

          <h4 className="text-2xl text-[#2A2A2A] mb-5 md:mb-6">
            Düğün
          </h4>

          <p className="text-[#8E8A86] leading-8">
            Hayalinizdeki düğünü zarif detaylarla gerçeğe dönüştürüyoruz.
          </p>

        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-[30px] md:rounded-[35px] p-8 md:p-10 hover:-translate-y-3 duration-500 shadow-sm">

          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F8F5F1] flex items-center justify-center text-2xl mb-8 md:mb-10">
            🌸
          </div>

          <h4 className="text-2xl text-[#2A2A2A] mb-5 md:mb-6">
            Nişan
          </h4>

          <p className="text-[#8E8A86] leading-8">
            Modern ve romantik nişan organizasyonları hazırlıyoruz.
          </p>

        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-[30px] md:rounded-[35px] p-8 md:p-10 hover:-translate-y-3 duration-500 shadow-sm">

          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F8F5F1] flex items-center justify-center text-2xl mb-8 md:mb-10">
            ✨
          </div>

          <h4 className="text-2xl text-[#2A2A2A] mb-5 md:mb-6">
            Kına
          </h4>

          <p className="text-[#8E8A86] leading-8">
            Geleneksel ve modern dokunuşları bir araya getiriyoruz.
          </p>

        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-[30px] md:rounded-[35px] p-8 md:p-10 hover:-translate-y-3 duration-500 shadow-sm">

          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F8F5F1] flex items-center justify-center text-2xl mb-8 md:mb-10">
            🥂
          </div>

          <h4 className="text-2xl text-[#2A2A2A] mb-5 md:mb-6">
            After Party
          </h4>

          <p className="text-[#8E8A86] leading-8">
            Eğlenceli ve premium after party deneyimleri sunuyoruz.
          </p>

        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-[30px] md:rounded-[35px] p-8 md:p-10 hover:-translate-y-3 duration-500 shadow-sm">

          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#F8F5F1] flex items-center justify-center text-2xl mb-8 md:mb-10">
            🎉
          </div>

          <h4 className="text-2xl text-[#2A2A2A] mb-5 md:mb-6">
            Özel Davet
          </h4>

          <p className="text-[#8E8A86] leading-8">
            Size özel unutulmaz davet organizasyonları planlıyoruz.
          </p>

        </div>

      </div>

    </section>
  )
}