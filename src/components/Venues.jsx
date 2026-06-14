export default function Venues() {
  return (
    <section className="px-6 md:px-16 py-24 md:py-40">

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">

        <div>

          <p className="text-[#B39B84] tracking-[5px] text-xs md:text-sm mb-4 md:mb-6">
            POPÜLER MEKANLAR
          </p>

          <h3 className="text-[36px] sm:text-[45px] md:text-[60px]
          leading-[50px] md:leading-[70px]
          text-[#2A2A2A] font-light">

            En Zarif
            <br />
            Organizasyon Alanları.

          </h3>

        </div>

        <button className="w-full md:w-auto px-8 py-4 border border-[#D6BFA7] rounded-full text-sm tracking-[3px] hover:bg-[#D6BFA7] duration-300">
          Tümünü Gör
        </button>

      </div>

      {/* Venue Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Card 1 */}
        <div className="group">

          <div className="h-[400px] md:h-[550px] rounded-[30px] md:rounded-[40px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1974&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-700"
            />

          </div>

          <div className="mt-8 flex items-center justify-between">

            <div>

              <h4 className="text-2xl md:text-3xl text-[#2A2A2A] mb-3">
                Liva Garden
              </h4>

              <p className="text-[#8E8A86] tracking-[2px] text-sm md:text-base">
                İstanbul • 400 Kişi
              </p>

            </div>

            <p className="text-[#B39B84] text-sm md:text-base">
              Premium
            </p>

          </div>

        </div>

        {/* Card 2 */}
        <div className="group">

          <div className="h-[400px] md:h-[550px] rounded-[30px] md:rounded-[40px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1974&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-700"
            />

          </div>

          <div className="mt-8 flex items-center justify-between">

            <div>

              <h4 className="text-2xl md:text-3xl text-[#2A2A2A] mb-3">
                White Palace
              </h4>

              <p className="text-[#8E8A86] tracking-[2px] text-sm md:text-base">
                İzmir • 600 Kişi
              </p>

            </div>

            <p className="text-[#B39B84] text-sm md:text-base">
              Luxury
            </p>

          </div>

        </div>

        {/* Card 3 */}
        <div className="group">

          <div className="h-[400px] md:h-[550px] rounded-[30px] md:rounded-[40px] overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1974&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-700"
            />

          </div>

          <div className="mt-8 flex items-center justify-between">

            <div>

              <h4 className="text-2xl md:text-3xl text-[#2A2A2A] mb-3">
                Moonlight Hall
              </h4>

              <p className="text-[#8E8A86] tracking-[2px] text-sm md:text-base">
                Antalya • 350 Kişi
              </p>

            </div>

            <p className="text-[#B39B84] text-sm md:text-base">
              Signature
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}