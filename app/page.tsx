import { Calendar, Star, Mountain, Utensils, Home, Download } from "lucide-react"

export default function HimachalTour() {
  const itinerary = [
    {
      day: 1,
      date: "9th Dec",
      title: "Mumbai to Delhi: Let's Goooo!",
      description:
        "Board the Garib Rath Express from Mumbai and start your North India adventure. Selfies, Antakshari, Uno, Insta Reels. Let the fun begin!",
      meals: "Own cost",
      accommodation: "Overnight Journey in Train",
    },
    {
      day: 2,
      date: "10th Dec",
      title: "Delhi to Chandigarh to Manali: Chill Scene",
      description:
        "Reach Delhi → Road trip to Chandigarh. Lunch on own, local shopping, then overnight road trip to Manali",
      meals: "Breakfast, Lunch, Dinner",
      accommodation: "Overnight journey to Manali",
    },
    {
      day: 3,
      date: "11th Dec",
      title: "Arrive Manali: DJ Night Included",
      description: "Morning relax, scenic views, gentle walk, momos. Evening full DJ Night – music, dance aur dhamaka!",
      meals: "Dinner only",
      accommodation: "Manali Valley Resort (4 Star)",
    },
    {
      day: 4,
      date: "12th Dec",
      title: "Solang Valley & Local Sightseeing",
      description:
        "Snow fun at Solang Valley & Atal Tunnel drive, Hidimba Temple visit, Mall Road shopping. Adventure aur vibe – dono chahiye!",
      meals: "Breakfast, Lunch, Dinner",
      accommodation: "Manali Valley Resort (4 Star)",
    },
    {
      day: 5,
      date: "13th Dec",
      title: "Kullu to Kasol",
      description:
        "Drive to Kullu for river rafting & paragliding, explore local markets. Later, head to Kasol for a relaxing evening.",
      meals: "Breakfast, Lunch, Dinner",
      accommodation: "Parvati Woods / Bricks and Woods Tent",
    },
    {
      day: 6,
      date: "14th Dec",
      title: "Explore Kasol & Travel to Dharamshala",
      description:
        "Kasol Market & Parvati River, visit Manikaran Sahib Gurudwara with Langar lunch. Evening: DJ Bash! One more DJ night?",
      meals: "Breakfast, Dinner Only",
      accommodation: "Hotel Spring Valley (4 Star)",
    },
    {
      day: 7,
      date: "15th Dec",
      title: "McLeodganj Exploration and Drive to Amritsar",
      description:
        "Explore spiritual McLeodganj, peaceful Dalai Lama Temple, and Shiva Café. Later begin journey to Amritsar (5-8 hrs). Chill playlist, travel snacks, mid-road dance reels.",
      meals: "Breakfast, Lunch, Dinner",
      accommodation: "Apple Tree/Grand Kabana (4 Star)",
    },
    {
      day: 8,
      date: "16th Dec",
      title: "Amritsar Ghumo aur Journey to Delhi",
      description:
        "Golden Temple ki roshni mein spiritual connection, Langar ki unlimited love, aur Jallianwala Bagh ki history. Phir patriotic thrill at Wagah Border Ceremony",
      meals: "Breakfast, Dinner",
      accommodation: "Overnight journey to Delhi",
    },
    {
      day: 9,
      date: "17th Dec",
      title: "Delhi Se Mumbai Ki Journey",
      description:
        "Delhi ki thodi si masti, phir Mumbai ki taraf! Train journey mein dosti, yaadein, aur endless masti...",
      meals: "Own cost",
      accommodation: "Overnight Journey in Train",
    },
    {
      day: 10,
      date: "18th Dec",
      title: "Mumbai Wapsi – Trip Khatam",
      description:
        "Mumbai wapas aake, dil bhar ke yaadein, aur next adventure ki planning shuru! Trip officially khatam... par memories forever rahengi.",
      meals: "Own cost",
      accommodation: "Home Sweet Home",
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] flex flex-col gap-3">
        {/* Book Now Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeU3eNYyVSdLGQ-Dp1jcmQzRDJdgkun8OaPLcxx7L29nGsqgw/viewform?usp=sharing&ouid=111157058529883492838"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl border border-amber-500 text-base md:text-lg backdrop-blur-sm"
        >
          <Calendar size={18} className="md:w-6 md:h-6" />
          <span className="font-semibold">Book Now</span>
        </a>

        {/* Download Itinerary Button */}
        <a
          href="/himachal-itinerary.pdf"
          download="Trip pdf.pdf"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl border border-blue-500 text-base md:text-lg backdrop-blur-sm"
        >
          <Download size={18} className="md:w-6 md:h-6" />
          <span className="font-semibold">Download Itinerary</span>
        </a>
      </div>

      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/background4.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          {/* Hero Section */}
          <div className="relative overflow-hidden">
            <div className="relative text-center py-12 md:py-20 px-4 md:px-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-yellow-300 mb-4 md:mb-6 drop-shadow-2xl">
                Himachal Pradesh
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold mb-6 md:mb-8 drop-shadow-lg">
                "आत्ता नाही तर कधीचं नाही"
              </p>
              <div className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto mb-6 md:mb-8 px-4">
                Experience the majestic beauty of the Himalayas on this 10-day journey
              </div>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 md:mb-12">Journey Route</h2>

            <div className="relative bg-slate-800/20 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/20">
              <div className="relative h-16 md:h-20 overflow-x-auto">
                <div className="flex items-center justify-between min-w-max px-2 md:px-4">
                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="text-white font-bold text-sm md:text-lg drop-shadow-lg whitespace-nowrap">
                      Mumbai
                    </span>
                    <div className="w-4 md:w-8 border-t-2 border-dashed border-white"></div>
                    <span className="text-white font-bold text-sm md:text-lg drop-shadow-lg whitespace-nowrap">
                      Delhi
                    </span>
                    <div className="w-4 md:w-8 border-t-2 border-dashed border-white"></div>
                    <span className="text-white font-bold text-sm md:text-lg drop-shadow-lg whitespace-nowrap">
                      Chandigarh
                    </span>
                    <div className="w-4 md:w-8 border-t-2 border-dashed border-white"></div>
                    <span className="text-white font-bold text-sm md:text-lg drop-shadow-lg whitespace-nowrap">
                      Manali
                    </span>
                    <div className="w-4 md:w-8 border-t-2 border-dashed border-white"></div>
                    <span className="text-white font-bold text-sm md:text-lg drop-shadow-lg whitespace-nowrap">
                      Atal tunnel
                    </span>
                    <div className="w-4 md:w-8 border-t-2 border-dashed border-white"></div>
                    <span className="text-white font-bold text-sm md:text-lg drop-shadow-lg whitespace-nowrap">
                      Solang Valley
                    </span>
                    <div className="w-4 md:w-8 border-t-2 border-dashed border-white"></div>
                    <span className="text-white font-bold text-sm md:text-lg drop-shadow-lg whitespace-nowrap">
                      Kullu
                    </span>
                    <div className="w-4 md:w-8 border-t-2 border-dashed border-white"></div>
                    <span className="text-white font-bold text-sm md:text-lg drop-shadow-lg whitespace-nowrap">
                      Kasol
                    </span>
                    <div className="w-4 md:w-8 border-t-2 border-dashed border-white"></div>
                    <span className="text-white font-bold text-sm md:text-lg drop-shadow-lg whitespace-nowrap">
                      Manikaran
                    </span>
                    <div className="w-4 md:w-8 border-t-2 border-dashed border-white"></div>
                    <span className="text-white font-bold text-sm md:text-lg drop-shadow-lg whitespace-nowrap">
                      Dharamshala
                    </span>
                    <div className="w-4 md:w-8 border-t-2 border-dashed border-white"></div>
                    <span className="text-white font-bold text-sm md:text-lg drop-shadow-lg whitespace-nowrap">
                      McLeodganj
                    </span>
                    <div className="w-4 md:w-8 border-t-2 border-dashed border-white"></div>
                    <span className="text-white font-bold text-sm md:text-lg drop-shadow-lg whitespace-nowrap">
                      Amritsar
                    </span>
                    <div className="w-4 md:w-8 border-t-2 border-dashed border-white"></div>
                    <span className="text-white font-bold text-sm md:text-lg drop-shadow-lg whitespace-nowrap">
                      Wagah Border
                    </span>
                    <div className="w-4 md:w-8 border-t-2 border-dashed border-white"></div>
                    <span className="text-white font-bold text-sm md:text-lg drop-shadow-lg whitespace-nowrap">
                      Golden Temple
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url(/background1.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 w-full">
            <div className="space-y-12 md:space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:order-1">
                  <div className="text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="text-amber-400" size={20} />
                      <span className="text-amber-400 font-semibold text-base md:text-lg drop-shadow-lg">
                        {itinerary[0].date}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
                      {itinerary[0].title}
                    </h2>
                    <p className="text-white text-base md:text-xl mb-4 md:mb-6 leading-relaxed drop-shadow-lg">
                      {itinerary[0].description}
                    </p>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-3">
                        <Utensils className="text-green-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Meals:</span> {itinerary[0].meals}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Home className="text-blue-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Stay:</span> {itinerary[0].accommodation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:order-2">
                  <div className="relative">
                    <img
                      src="/card1.jpg"
                      alt="Day 1"
                      className="w-full h-60 md:h-80 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-base">
                      Day 1
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:order-1">
                  <div className="relative">
                    <img
                      src="/card2.jpg"
                      alt="Day 2"
                      className="w-full h-60 md:h-80 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-base">
                      Day 2
                    </div>
                  </div>
                </div>
                <div className="md:order-2">
                  <div className="text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="text-amber-400" size={20} />
                      <span className="text-amber-400 font-semibold text-base md:text-lg drop-shadow-lg">
                        {itinerary[1].date}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
                      {itinerary[1].title}
                    </h2>
                    <p className="text-white text-base md:text-xl mb-4 md:mb-6 leading-relaxed drop-shadow-lg">
                      {itinerary[1].description}
                    </p>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-3">
                        <Utensils className="text-green-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Meals:</span> {itinerary[1].meals}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Home className="text-blue-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Stay:</span> {itinerary[1].accommodation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url(/background1.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 w-full">
            <div className="space-y-12 md:space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:order-1">
                  <div className="text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="text-amber-400" size={20} />
                      <span className="text-amber-400 font-semibold text-base md:text-lg drop-shadow-lg">
                        {itinerary[2].date}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
                      {itinerary[2].title}
                    </h2>
                    <p className="text-white text-base md:text-xl mb-4 md:mb-6 leading-relaxed drop-shadow-lg">
                      {itinerary[2].description}
                    </p>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-3">
                        <Utensils className="text-green-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Meals:</span> {itinerary[2].meals}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Home className="text-blue-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Stay:</span> {itinerary[2].accommodation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:order-2">
                  <div className="relative">
                    <img
                      src="/card3.jpg"
                      alt="Day 3"
                      className="w-full h-60 md:h-80 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-base">
                      Day 3
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:order-1">
                  <div className="relative">
                    <img
                      src="/card4.jpg"
                      alt="Day 4"
                      className="w-full h-60 md:h-80 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-base">
                      Day 4
                    </div>
                  </div>
                </div>
                <div className="md:order-2">
                  <div className="text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="text-amber-400" size={20} />
                      <span className="text-amber-400 font-semibold text-base md:text-lg drop-shadow-lg">
                        {itinerary[3].date}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
                      {itinerary[3].title}
                    </h2>
                    <p className="text-white text-base md:text-xl mb-4 md:mb-6 leading-relaxed drop-shadow-lg">
                      {itinerary[3].description}
                    </p>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-3">
                        <Utensils className="text-green-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Meals:</span> {itinerary[3].meals}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Home className="text-blue-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Stay:</span> {itinerary[3].accommodation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url(/background1.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 w-full">
            <div className="space-y-12 md:space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:order-1">
                  <div className="text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="text-amber-400" size={20} />
                      <span className="text-amber-400 font-semibold text-base md:text-lg drop-shadow-lg">
                        {itinerary[4].date}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
                      {itinerary[4].title}
                    </h2>
                    <p className="text-white text-base md:text-xl mb-4 md:mb-6 leading-relaxed drop-shadow-lg">
                      {itinerary[4].description}
                    </p>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-3">
                        <Utensils className="text-green-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Meals:</span> {itinerary[4].meals}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Home className="text-blue-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Stay:</span> {itinerary[4].accommodation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:order-2">
                  <div className="relative">
                    <img
                      src="/card5.jpg"
                      alt="Day 5"
                      className="w-full h-60 md:h-80 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-base">
                      Day 5
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:order-1">
                  <div className="relative">
                    <img
                      src="/card6.jpg"
                      alt="Day 6"
                      className="w-full h-60 md:h-80 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-base">
                      Day 6
                    </div>
                  </div>
                </div>
                <div className="md:order-2">
                  <div className="text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="text-amber-400" size={20} />
                      <span className="text-amber-400 font-semibold text-base md:text-lg drop-shadow-lg">
                        {itinerary[5].date}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
                      {itinerary[5].title}
                    </h2>
                    <p className="text-white text-base md:text-xl mb-4 md:mb-6 leading-relaxed drop-shadow-lg">
                      {itinerary[5].description}
                    </p>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-3">
                        <Utensils className="text-green-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Meals:</span> {itinerary[5].meals}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Home className="text-blue-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Stay:</span> {itinerary[5].accommodation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url(/background1.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 w-full">
            <div className="space-y-12 md:space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:order-1">
                  <div className="text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="text-amber-400" size={20} />
                      <span className="text-amber-400 font-semibold text-base md:text-lg drop-shadow-lg">
                        {itinerary[6].date}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
                      {itinerary[6].title}
                    </h2>
                    <p className="text-white text-base md:text-xl mb-4 md:mb-6 leading-relaxed drop-shadow-lg">
                      {itinerary[6].description}
                    </p>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-3">
                        <Utensils className="text-green-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Meals:</span> {itinerary[6].meals}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Home className="text-blue-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Stay:</span> {itinerary[6].accommodation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:order-2">
                  <div className="relative">
                    <img
                      src="/card7.jpg"
                      alt="Day 7"
                      className="w-full h-60 md:h-80 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-base">
                      Day 7
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:order-1">
                  <div className="relative">
                    <img
                      src="/card8.jpg"
                      alt="Day 8"
                      className="w-full h-60 md:h-80 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-base">
                      Day 8
                    </div>
                  </div>
                </div>
                <div className="md:order-2">
                  <div className="text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="text-amber-400" size={20} />
                      <span className="text-amber-400 font-semibold text-base md:text-lg drop-shadow-lg">
                        {itinerary[7].date}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
                      {itinerary[7].title}
                    </h2>
                    <p className="text-white text-base md:text-xl mb-4 md:mb-6 leading-relaxed drop-shadow-lg">
                      {itinerary[7].description}
                    </p>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-3">
                        <Utensils className="text-green-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Meals:</span> {itinerary[7].meals}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Home className="text-blue-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Stay:</span> {itinerary[7].accommodation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url(/background1.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 w-full">
            <div className="space-y-12 md:space-y-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:order-1">
                  <div className="text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="text-amber-400" size={20} />
                      <span className="text-amber-400 font-semibold text-base md:text-lg drop-shadow-lg">
                        {itinerary[8].date}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
                      {itinerary[8].title}
                    </h2>
                    <p className="text-white text-base md:text-xl mb-4 md:mb-6 leading-relaxed drop-shadow-lg">
                      {itinerary[8].description}
                    </p>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-3">
                        <Utensils className="text-green-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Meals:</span> {itinerary[8].meals}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Home className="text-blue-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Stay:</span> {itinerary[8].accommodation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:order-2">
                  <div className="relative">
                    <img
                      src="/card9.jpg"
                      alt="Day 9"
                      className="w-full h-60 md:h-80 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-base">
                      Day 9
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="md:order-1">
                  <div className="relative">
                    <img
                      src="/card10.jpg"
                      alt="Day 10"
                      className="w-full h-60 md:h-80 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-base">
                      Day 10
                    </div>
                  </div>
                </div>
                <div className="md:order-2">
                  <div className="text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="text-amber-400" size={20} />
                      <span className="text-amber-400 font-semibold text-base md:text-lg drop-shadow-lg">
                        {itinerary[9].date}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
                      {itinerary[9].title}
                    </h2>
                    <p className="text-white text-base md:text-xl mb-4 md:mb-6 leading-relaxed drop-shadow-lg">
                      {itinerary[9].description}
                    </p>
                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-3">
                        <Utensils className="text-green-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Meals:</span> {itinerary[9].meals}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Home className="text-blue-400" size={18} />
                        <span className="text-white text-sm md:text-lg drop-shadow-lg">
                          <span className="font-semibold">Stay:</span> {itinerary[9].accommodation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url(/background1.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16 w-full">
            <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-8 md:mb-16">Tour Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-6 md:mb-8 flex items-center gap-3 drop-shadow-lg">
                  <Star size={24} />
                  What's Included
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    "Hotel Accommodation at 4-star hotels (4 sharing basis)",
                    "All sightseeing and transfers by AC bus",
                    "Railway ticket Mumbai to Mumbai by 3rd AC",
                    "3 DJ nights (Manali - Kasol - Dharamshala)",
                    "Meals as per itinerary (breakfast, lunch and dinner) at hotel only",
                    "Professional Tour Manager",
                    "River rafting (free) & paragliding opportunities",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white text-sm md:text-lg drop-shadow-lg">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-6 md:mb-8 flex items-center gap-3 drop-shadow-lg">
                  <Mountain size={24} />
                  What's Not Included
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {[
                    "Sightseeing entrance fees or any other adventure activities",
                    "Personal expenses like laundry, tips, and telephone bills",
                    "Train meals during journey",
                    "Any other costing due to natural calamity or forced circumstances",
                    "Early check-in at hotels",
                    "Cost of any other services not specifically mentioned in inclusions",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white text-sm md:text-lg drop-shadow-lg">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 md:mt-12">
              <h3 className="text-xl md:text-2xl font-bold text-amber-400 mb-4 md:mb-6 flex items-center gap-3 drop-shadow-lg">
                <Home size={24} />
                Hotels Used
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-white text-sm md:text-lg drop-shadow-lg">
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold text-amber-300">Manali:</span> 2 Nights -
                    <a
                      href="https://manalivalleyresorts.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-200 underline transition-colors duration-200 ml-1"
                    >
                      Manali Valley Resort (4 Star)
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-amber-300">Kasol:</span> 1 Night -
                    <a
                      href="https://camps.furut.net/camps/parvati-woods-camp-kasol/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-200 underline transition-colors duration-200 ml-1"
                    >
                      Parvati Woods / Bricks and Woods Tent
                    </a>
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold text-amber-300">Dharamshala:</span> 1 Night -
                    <a
                      href="https://www.dlshotels.in/spring-valley-resort-dharamshala/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-200 underline transition-colors duration-200 ml-1"
                    >
                      Hotel Spring Valley (4 Star)
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-amber-300">Amritsar:</span> 1 Night -
                    <a
                      href="https://leveluphotels.com/hotel-grand-cabbana/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-300 hover:text-blue-200 underline transition-colors duration-200 ml-1"
                    >
                      Apple Tree/Grand Kabana (4 Star)
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">Tour Cost</h3>
              <p className="text-3xl md:text-5xl font-bold text-amber-400 drop-shadow-lg">₹16,500/-</p>
              <p className="text-white/90 mt-2 text-sm md:text-lg drop-shadow-lg">
                Per Person with 3rd AC Railway Booking
              </p>
            </div>

            <div className="mt-12 md:mt-16 text-center">
              <h3 className="text-2xl md:text-4xl font-bold text-amber-400 mb-4 md:mb-6 drop-shadow-lg">Thank You!</h3>
              <p className="text-base md:text-xl text-white mb-4 drop-shadow-lg px-4">
                Get ready for an unforgettable journey through the majestic Himalayas
              </p>
              <p className="text-sm md:text-lg text-slate-300 drop-shadow-lg px-4">
                Himachal Pradesh Tour 2025 • December 10-19, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
