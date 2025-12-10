
// Init featured reviews Swiper
const featured = new Swiper(".featured-swiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: { slidesPerView: 1.2 },
  },
})

const additionalReviews = [
  {
    avatar: "https://i.pravatar.cc/60?img=16",
    username: "danish_design",
    country: "Denmark",
    flag: "https://flagcdn.com/24x18/dk.png",
    timeAgo: "5 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Mayus created a minimalist furniture store that perfectly represents our Scandinavian design philosophy. The user experience is clean and intuitive, and the inventory management system handles our complex product variations seamlessly.",
    gigDetails: "$520 • 11 days • Furniture Store Build",
    hasResponse: true,
    response: "Thank you! Your furniture designs are truly inspiring. Happy to help bring them online!",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=24",
    username: "irish_organic",
    country: "Ireland",
    flag: "https://flagcdn.com/24x18/ie.png",
    timeAgo: "5 months ago",
    isRepeated: true,
    rating: 5,
    review:
      "Exceptional work on our organic food marketplace! The multi-vendor system works perfectly and the subscription box feature has been a huge hit with customers. The SEO optimization has improved our visibility significantly.",
    gigDetails: "$680 • 14 days • Multi-vendor Marketplace",
    hasResponse: false,
  },
  {
    avatar: "https://i.pravatar.cc/60?img=41",
    username: "greek_pottery",
    country: "Greece",
    flag: "https://flagcdn.com/24x18/gr.png",
    timeAgo: "6 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Mayus built a beautiful store for our traditional Greek pottery. The cultural storytelling elements and product customization features work wonderfully. International shipping integration has opened up new markets for us.",
    gigDetails: "$360 • 9 days • Cultural Artisan Store",
    hasResponse: true,
    response: "Your pottery is absolutely beautiful! Honored to help share Greek culture with the world.",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=19",
    username: "polish_amber",
    country: "Poland",
    flag: "https://flagcdn.com/24x18/pl.png",
    timeAgo: "6 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Outstanding execution on our amber jewelry store! The product authentication system and certificate generation feature give customers confidence in our genuine Baltic amber. The store design is elegant and professional.",
    gigDetails: "$440 • 10 days • Jewelry Authentication Store",
    hasResponse: false,
  },
  {
    avatar: "https://i.pravatar.cc/60?img=27",
    username: "czech_crystal",
    country: "Czech Republic",
    flag: "https://flagcdn.com/24x18/cz.png",
    timeAgo: "7 months ago",
    isRepeated: true,
    rating: 5,
    review:
      "Mayus delivered an exceptional crystal and glassware store with stunning product galleries and 360-degree view functionality. The B2B wholesale section has streamlined our dealer relationships significantly.",
    gigDetails: "$590 • 12 days • Crystal Gallery + B2B Portal",
    hasResponse: true,
    response: "Your crystal work is absolutely stunning! Thank you for the opportunity to showcase such artistry.",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=36",
    username: "hungarian_wine",
    country: "Hungary",
    flag: "https://flagcdn.com/24x18/hu.png",
    timeAgo: "7 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Perfect wine e-commerce solution! The vintage tracking system, cellar management features, and age verification process work flawlessly. The tasting notes integration and wine pairing suggestions have enhanced customer experience.",
    gigDetails: "$650 • 13 days • Wine E-commerce + Features",
    hasResponse: false,
  },
  {
    avatar: "https://i.pravatar.cc/60?img=43",
    username: "portuguese_tiles",
    country: "Portugal",
    flag: "https://flagcdn.com/24x18/pt.png",
    timeAgo: "8 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Mayus created a magnificent store for our traditional Portuguese tiles (azulejos). The pattern visualization tool and custom design service integration have revolutionized how customers interact with our products.",
    gigDetails: "$480 • 11 days • Tile Design Studio",
    hasResponse: true,
    response: "Your azulejos are works of art! Happy to help preserve and share this beautiful Portuguese tradition.",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=14",
    username: "austrian_alpine",
    country: "Austria",
    flag: "https://flagcdn.com/24x18/at.png",
    timeAgo: "8 months ago",
    isRepeated: true,
    rating: 5,
    review:
      "Exceptional alpine sports equipment store! The gear compatibility checker and mountain weather integration provide incredible value to our customers. The seasonal inventory management system handles our complex product cycles perfectly.",
    gigDetails: "$720 • 15 days • Alpine Sports Store + Weather API",
    hasResponse: false,
  },
  {
    avatar: "https://i.pravatar.cc/60?img=48",
    username: "slovenian_honey",
    country: "Slovenia",
    flag: "https://flagcdn.com/24x18/si.png",
    timeAgo: "9 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Beautiful organic honey store with educational content about beekeeping and sustainability. The subscription service for regular honey deliveries and the bee adoption program integration have created a loyal customer community.",
    gigDetails: "$380 • 8 days • Organic Honey Store + Subscriptions",
    hasResponse: true,
    response:
      "Your commitment to sustainable beekeeping is inspiring! Happy to help spread awareness about bee conservation.",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=21",
    username: "estonian_digital",
    country: "Estonia",
    flag: "https://flagcdn.com/24x18/ee.png",
    timeAgo: "9 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Cutting-edge digital services marketplace with blockchain integration for secure transactions. The smart contract system for service delivery and the reputation scoring algorithm work flawlessly. Truly innovative solution!",
    gigDetails: "$850 • 18 days • Blockchain Marketplace",
    hasResponse: true,
    response:
      "Your vision for blockchain integration was ahead of its time! Exciting to work on such innovative projects.",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=52",
    username: "singapore_tech",
    country: "Singapore",
    flag: "https://flagcdn.com/24x18/sg.png",
    timeAgo: "9 months ago",
    isRepeated: true,
    rating: 5,
    review:
      "Flawless execution! Mayus built our electronics store with advanced filtering and comparison features. The integration with our warehouse system is seamless.",
    gigDetails: "$890 • 16 days • Electronics Store + Inventory",
    hasResponse: false,
  },
  {
    avatar: "https://i.pravatar.cc/60?img=53",
    username: "dubai_luxury",
    country: "UAE",
    flag: "https://flagcdn.com/24x18/ae.png",
    timeAgo: "10 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "The luxury watch store Mayus created is absolutely stunning. VIP customer portal, authentication certificates, and white-glove shipping integration all work perfectly.",
    gigDetails: "$1200 • 20 days • Luxury Watch Store",
    hasResponse: true,
    response: "It was an honor to work on such a prestigious brand. Thank you for the trust!",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=54",
    username: "thai_cuisine",
    country: "Thailand",
    flag: "https://flagcdn.com/24x18/th.png",
    timeAgo: "10 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Our Thai restaurant's online ordering system is fantastic! The menu customization, spice level options, and delivery integration work smoothly.",
    gigDetails: "$280 • 5 days • Restaurant Ordering System",
    hasResponse: false,
  },
  {
    avatar: "https://i.pravatar.cc/60?img=55",
    username: "kiwi_outdoor",
    country: "New Zealand",
    flag: "https://flagcdn.com/24x18/nz.png",
    timeAgo: "10 months ago",
    isRepeated: true,
    rating: 5,
    review:
      "Amazing outdoor adventure gear store! The rental booking system and trail finder integration are unique features our customers love.",
    gigDetails: "$520 • 10 days • Adventure Gear + Rentals",
    hasResponse: true,
    response: "New Zealand's landscapes are incredible! Glad to help adventurers explore them.",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=56",
    username: "colombian_coffee",
    country: "Colombia",
    flag: "https://flagcdn.com/24x18/co.png",
    timeAgo: "11 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Mayus created the perfect platform for our specialty coffee brand. Farm-to-cup traceability, subscription options, and brewing guides make it special.",
    gigDetails: "$420 • 9 days • Coffee Subscription Store",
    hasResponse: false,
  },
  {
    avatar: "https://i.pravatar.cc/60?img=57",
    username: "swedish_furniture",
    country: "Sweden",
    flag: "https://flagcdn.com/24x18/se.png",
    timeAgo: "11 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Clean, minimalist furniture store that matches our brand perfectly. The AR room preview feature is a game-changer for conversions.",
    gigDetails: "$680 • 14 days • Furniture Store + AR Preview",
    hasResponse: true,
    response: "Scandinavian design is always a pleasure to work with. Thank you!",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=58",
    username: "moroccan_rugs",
    country: "Morocco",
    flag: "https://flagcdn.com/24x18/ma.png",
    timeAgo: "11 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Beautiful store for our handwoven Berber rugs. The storytelling elements about our artisans and custom sizing tool are excellent.",
    gigDetails: "$340 • 7 days • Artisan Rug Store",
    hasResponse: false,
  },
  {
    avatar: "https://i.pravatar.cc/60?img=59",
    username: "scottish_whisky",
    country: "UK",
    flag: "https://flagcdn.com/24x18/gb.png",
    timeAgo: "12 months ago",
    isRepeated: true,
    rating: 5,
    review:
      "Outstanding whisky e-commerce with age verification, tasting notes database, and collector features. The rare bottles auction system is fantastic.",
    gigDetails: "$780 • 15 days • Whisky Store + Auctions",
    hasResponse: true,
    response: "Working on whisky e-commerce was a treat! Cheers to your success!",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=60",
    username: "indian_spices",
    country: "India",
    flag: "https://flagcdn.com/24x18/in.png",
    timeAgo: "12 months ago",
    isRepeated: false,
    rating: 5,
    review:
      "Our spice marketplace is thriving! Recipe integration, spice pairing suggestions, and freshness guarantees have set us apart.",
    gigDetails: "$390 • 8 days • Spice Marketplace",
    hasResponse: false,
  },
  {
    avatar: "https://i.pravatar.cc/60?img=61",
    username: "chilean_wines",
    country: "Chile",
    flag: "https://flagcdn.com/24x18/cl.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Excellent wine store with vineyard virtual tours and wine club subscriptions. The harvest tracking feature is unique and customers love it.",
    gigDetails: "$560 • 12 days • Winery E-commerce",
    hasResponse: true,
    response: "Chilean wines deserve a beautiful showcase. Happy to deliver!",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=62",
    username: "vietnamese_art",
    country: "Vietnam",
    flag: "https://flagcdn.com/24x18/vn.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Mayus built an elegant gallery for our traditional lacquerware art. The virtual exhibition feature and artist profiles add great depth.",
    gigDetails: "$450 • 10 days • Art Gallery Store",
    hasResponse: false,
  },
  {
    avatar: "https://i.pravatar.cc/60?img=63",
    username: "turkish_bazaar",
    country: "Turkey",
    flag: "https://flagcdn.com/24x18/tr.png",
    timeAgo: "1 year ago",
    isRepeated: true,
    rating: 5,
    review:
      "Our Grand Bazaar-style marketplace is beautiful! Multi-vendor system, bargaining feature simulation, and cultural storytelling are perfect.",
    gigDetails: "$720 • 14 days • Marketplace Platform",
    hasResponse: true,
    response: "Turkish craftsmanship is legendary. Honored to showcase it online!",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=64",
    username: "egyptian_artifacts",
    country: "Egypt",
    flag: "https://flagcdn.com/24x18/eg.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Stunning replica artifact store with authentication certificates and historical context for each piece. Educational and commercial balance is perfect.",
    gigDetails: "$480 • 11 days • Artifact Store",
    hasResponse: false,
  },
  {
    avatar: "https://i.pravatar.cc/60?img=65",
    username: "peruvian_textiles",
    country: "Peru",
    flag: "https://flagcdn.com/24x18/pe.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Beautiful store for our alpaca textiles! The artisan profiles, fair trade certifications, and sizing guides are exactly what we needed.",
    gigDetails: "$380 • 8 days • Textile E-commerce",
    hasResponse: true,
    response: "Peruvian textiles are incredible. Thank you for sharing this craft with the world!",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=66",
    username: "norwegian_salmon",
    country: "Norway",
    flag: "https://flagcdn.com/24x18/no.png",
    timeAgo: "1 year ago",
    isRepeated: true,
    rating: 5,
    review:
      "Our premium seafood store is performing excellently. Cold chain tracking, freshness guarantees, and subscription boxes work flawlessly.",
    gigDetails: "$620 • 13 days • Seafood E-commerce",
    hasResponse: false,
  },
  {
    avatar: "https://i.pravatar.cc/60?img=67",
    username: "kenyan_coffee",
    country: "Kenya",
    flag: "https://flagcdn.com/24x18/ke.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Mayus created an amazing platform for our single-origin coffee. Farm stories, roast date tracking, and brewing tutorials are great additions.",
    gigDetails: "$340 • 7 days • Coffee Direct Store",
    hasResponse: true,
    response: "Kenyan coffee is exceptional! Happy to help connect farmers directly with customers.",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=68",
    username: "icelandic_wool",
    country: "Iceland",
    flag: "https://flagcdn.com/24x18/is.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Perfect store for our traditional lopapeysa sweaters. The customization tool for patterns and size guide with real measurements are excellent.",
    gigDetails: "$420 • 9 days • Wool Products Store",
    hasResponse: false,
  },
  {
    avatar: "https://i.pravatar.cc/60?img=69",
    username: "jamaican_rum",
    country: "Jamaica",
    flag: "https://flagcdn.com/24x18/jm.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Our rum distillery store is fantastic! Age verification, cocktail recipes, and distillery tour booking integration work seamlessly.",
    gigDetails: "$480 • 10 days • Spirits E-commerce",
    hasResponse: true,
    response: "Caribbean rum culture is vibrant! Great working on this project.",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=70",
    username: "latvian_linen",
    country: "Latvia",
    flag: "https://flagcdn.com/24x18/lv.png",
    timeAgo: "1 year ago",
    isRepeated: true,
    rating: 5,
    review:
      "Beautiful linen products store with fabric care guides and custom sizing. The traditional pattern catalog is a wonderful touch.",
    gigDetails: "$350 • 8 days • Linen Store",
    hasResponse: false,
  },
  {
    avatar: "https://i.pravatar.cc/60",
    username: "filipino_crafts",
    country: "Philippines",
    flag: "https://flagcdn.com/24x18/ph.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Mayus built a wonderful marketplace for Filipino artisans. The community features and artisan stories make it more than just a store.",
    gigDetails: "$520 • 11 days • Artisan Marketplace",
    hasResponse: true,
    response: "Filipino craftsmanship deserves global recognition. Thank you for this opportunity!",
  },
{
  avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  username: "romanian_honey",
  country: "Romania",
  flag: "https://flagcdn.com/24x18/ro.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Our organic honey store is perfect. Bee farm stories, pollen analysis certificates, and seasonal availability tracking are great features.",
  gigDetails: "$320 • 7 days • Honey E-commerce",
  hasResponse: false,
},
{
  avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  username: "argentinian_leather",
  country: "Argentina",
  flag: "https://flagcdn.com/24x18/ar.png",
  timeAgo: "1 year ago",
  isRepeated: true,
  rating: 5,
  review:
    "Stunning leather goods store! The product customization tool, monogramming options, and care guides are exactly what premium buyers expect.",
  gigDetails: "$580 • 12 days • Leather Goods Store",
  hasResponse: true,
  response: "Argentinian leather quality is unmatched. Proud to showcase it!",
},
{
  avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  username: "croatian_olive",
  country: "Croatia",
  flag: "https://flagcdn.com/24x18/hr.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Perfect olive oil store with harvest tracking, tasting notes, and pairing suggestions. The subscription model has been very successful.",
  gigDetails: "$380 • 8 days • Olive Oil E-commerce",
  hasResponse: false,
},
{
  avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
  username: "bulgarian_rose",
  country: "Bulgaria",
  flag: "https://flagcdn.com/24x18/bg.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Mayus created a beautiful store for our rose products. The ingredient transparency and production process showcases build trust with customers.",
  gigDetails: "$340 • 7 days • Natural Beauty Store",
  hasResponse: true,
  response: "Bulgarian rose products are legendary. Happy to help share them globally!",
},
{
  avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  username: "maltese_crafts",
  country: "Malta",
  flag: "https://flagcdn.com/24x18/mt.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Our traditional lace and filigree store is elegant and functional. The artisan profiles and heritage storytelling are wonderful additions.",
  gigDetails: "$420 • 9 days • Heritage Crafts Store",
  hasResponse: false,
},
{
  avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  username: "lithuanian_amber",
  country: "Lithuania",
  flag: "https://flagcdn.com/24x18/lt.png",
  timeAgo: "1 year ago",
  isRepeated: true,
  rating: 5,
  review:
    "Excellent Baltic amber jewelry store! Authentication system, inclusion catalogs, and custom design requests work perfectly.",
  gigDetails: "$480 • 10 days • Amber Jewelry Store",
  hasResponse: true,
  response: "Baltic amber has millions of years of history. Honored to showcase it!",
},
{
  avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  username: "malaysian_batik",
  country: "Malaysia",
  flag: "https://flagcdn.com/24x18/my.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Beautiful batik fabric store with pattern meanings explained and custom fabric ordering. The cultural education content is appreciated by customers.",
  gigDetails: "$360 • 8 days • Batik Fabric Store",
  hasResponse: false,
},
{
  avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  username: "indonesian_teak",
  country: "Indonesia",
  flag: "https://flagcdn.com/24x18/id.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Mayus built an impressive furniture store with 3D product views and sustainability certifications. The custom order system handles complex requests well.",
  gigDetails: "$720 • 15 days • Furniture E-commerce",
  hasResponse: true,
  response: "Indonesian craftsmanship is world-renowned. Thank you for the collaboration!",
},

{
  avatar: "https://randomuser.me/api/portraits/men/80.jpg",
  username: "cypriot_olive",
  country: "Cyprus",
  flag: "https://flagcdn.com/24x18/cy.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Our family olive farm store is perfect. Generation stories, harvest updates, and oil tasting subscriptions create real customer connections.",
  gigDetails: "$340 • 7 days • Farm Direct Store",
  hasResponse: false,
},
{
  avatar: "https://randomuser.me/api/portraits/men/81.jpg",
  username: "uruguayan_leather",
  country: "Uruguay",
  flag: "https://flagcdn.com/24x18/uy.png",
  timeAgo: "1 year ago",
  isRepeated: true,
  rating: 5,
  review:
    "Stunning leather accessories store with customization and monogramming. The quality guarantee and care service booking are excellent features.",
  gigDetails: "$460 • 10 days • Leather Accessories",
  hasResponse: true,
  response: "Uruguayan leather craftsmanship is exceptional. Great working together!",
},
{
  avatar: "https://randomuser.me/api/portraits/women/82.jpg",
  username: "nigerian_fashion",
  country: "Nigeria",
  flag: "https://flagcdn.com/24x18/ng.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Amazing African fashion store! The fabric catalog, custom tailoring requests, and occasion guides are perfect for our customers.",
  gigDetails: "$520 • 11 days • Fashion E-commerce",
  hasResponse: false,
},
{
  avatar: "https://randomuser.me/api/portraits/men/83.jpg",
  username: "taiwanese_tea",
  country: "Taiwan",
  flag: "https://flagcdn.com/24x18/tw.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Mayus created the perfect tea store with harvest tracking, brewing guides, and teaware pairing. The subscription tea club is very popular.",
  gigDetails: "$420 • 9 days • Tea E-commerce",
  hasResponse: true,
  response: "Taiwanese oolong teas are exceptional. Honored to help share the culture!",
},
{
  avatar: "https://randomuser.me/api/portraits/women/84.jpg",
  username: "slovak_glass",
  country: "Slovakia",
  flag: "https://flagcdn.com/24x18/sk.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Beautiful glass art store with custom commission system and artist portfolios. The packaging tracking for fragile items works excellently.",
  gigDetails: "$480 • 10 days • Glass Art Store",
  hasResponse: false,
},
{
  avatar: "https://randomuser.me/api/portraits/men/85.jpg",
  username: "serbian_honey",
  country: "Serbia",
  flag: "https://flagcdn.com/24x18/rs.png",
  timeAgo: "1 year ago",
  isRepeated: true,
  rating: 5,
  review:
    "Our artisan honey store is thriving! The bee-friendly practices showcase and seasonal variety subscriptions have built a loyal customer base.",
  gigDetails: "$320 • 7 days • Honey E-commerce",
  hasResponse: true,
  response: "Serbian beekeeping traditions are wonderful. Happy to support sustainable practices!",
},
{
  avatar: "https://randomuser.me/api/portraits/women/86.jpg",
  username: "costa_rican_coffee",
  country: "Costa Rica",
  flag: "https://flagcdn.com/24x18/cr.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Mayus built an amazing coffee store with farm virtual tours and sustainability certifications. The freshness tracking is a unique feature.",
  gigDetails: "$380 • 8 days • Coffee Direct Store",
  hasResponse: false,
},
{
  avatar: "https://randomuser.me/api/portraits/men/87.jpg",
  username: "ethiopian_textiles",
  country: "Ethiopia",
  flag: "https://flagcdn.com/24x18/et.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Beautiful traditional textile store! The weaving technique explanations and artisan community features make it more than just shopping.",
  gigDetails: "$420 • 9 days • Traditional Textiles",
  hasResponse: true,
  response: "Ethiopian textile heritage is rich and beautiful. Thank you for sharing it!",
},
{
  avatar: "https://randomuser.me/api/portraits/women/88.jpg",
  username: "guatemalan_crafts",
  country: "Guatemala",
  flag: "https://flagcdn.com/24x18/gt.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Wonderful Mayan crafts marketplace with artisan cooperatives featured. The fair trade certifications and cultural context add real value.",
  gigDetails: "$460 • 10 days • Crafts Marketplace",
  hasResponse: false,
},
{
  avatar: "https://randomuser.me/api/portraits/men/89.jpg",
  username: "mongolian_cashmere",
  country: "Mongolia",
  flag: "https://flagcdn.com/24x18/mn.png",
  timeAgo: "1 year ago",
  isRepeated: true,
  rating: 5,
  review:
    "Luxurious cashmere store with herder stories and quality grading explanations. The care guides and repair services booking are great additions.",
  gigDetails: "$580 • 12 days • Cashmere E-commerce",
  hasResponse: true,
  response: "Mongolian cashmere is unparalleled. Proud to help showcase its quality!",
},
{
  avatar: "https://randomuser.me/api/portraits/women/90.jpg",
  username: "panamanian_hats",
  country: "Panama",
  flag: "https://flagcdn.com/24x18/pa.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Perfect Panama hat store! The weave quality guides and custom sizing system are exactly what discerning customers need.",
  gigDetails: "$380 • 8 days • Hat E-commerce",
  hasResponse: false,
},
{
  avatar: "https://randomuser.me/api/portraits/men/91.jpg",
  username: "lebanese_food",
  country: "Lebanon",
  flag: "https://flagcdn.com/24x18/lb.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Mayus created a fantastic gourmet food store with recipe pairings and gift box builder. International shipping for fragile items works well.",
  gigDetails: "$440 • 9 days • Gourmet Food Store",
  hasResponse: true,
  response: "Lebanese cuisine is incredible. Happy to help share it worldwide!",
},
{
  avatar: "https://randomuser.me/api/portraits/women/92.jpg",
  username: "bhutan_textiles",
  country: "Bhutan",
  flag: "https://flagcdn.com/24x18/bt.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Beautiful store for our traditional woven textiles. The pattern meanings and artisan village features create meaningful customer connections.",
  gigDetails: "$420 • 9 days • Heritage Textiles",
  hasResponse: false,
},
{
  avatar: "https://randomuser.me/api/portraits/men/93.jpg",
  username: "nepali_crafts",
  country: "Nepal",
  flag: "https://flagcdn.com/24x18/np.png",
  timeAgo: "1 year ago",
  isRepeated: true,
  rating: 5,
  review:
    "Our Himalayan crafts store is perfect! The fair trade focus, artisan empowerment stories, and product authenticity certificates are excellent.",
  gigDetails: "$380 • 8 days • Himalayan Crafts",
  hasResponse: true,
  response: "Nepali artisanship is remarkable. Honored to support the communities!",
},
{
  avatar: "https://randomuser.me/api/portraits/women/94.jpg",
  username: "tunisian_pottery",
  country: "Tunisia",
  flag: "https://flagcdn.com/24x18/tn.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Mayus built a stunning pottery store with workshop booking and custom design requests. The traditional technique videos are a nice educational touch.",
  gigDetails: "$340 • 7 days • Pottery E-commerce",
  hasResponse: false,
},
{
  avatar: "https://randomuser.me/api/portraits/men/95.jpg",
  username: "cuban_cigars",
  country: "Cuba",
  flag: "https://flagcdn.com/24x18/cu.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Excellent cigar store with humidor guides and aging recommendations. The tasting notes and pairing suggestions elevate the experience.",
  gigDetails: "$520 • 11 days • Premium Cigars Store",
  hasResponse: true,
  response: "Cuban cigar culture is legendary. Great project to work on!",
},
{
  avatar: "https://randomuser.me/api/portraits/women/96.jpg",
  username: "jordanian_jewelry",
  country: "Jordan",
  flag: "https://flagcdn.com/24x18/jo.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Beautiful Middle Eastern jewelry store with customization and heritage storytelling. The authentication and appraisal features build trust.",
  gigDetails: "$480 • 10 days • Heritage Jewelry",
  hasResponse: false,
},
{
  avatar: "https://randomuser.me/api/portraits/men/97.jpg",
  username: "sri_lankan_gems",
  country: "Sri Lanka",
  flag: "https://flagcdn.com/24x18/lk.png",
  timeAgo: "1 year ago",
  isRepeated: true,
  rating: 5,
  review:
    "Mayus created an excellent gemstone store with certification integration and mine-to-market traceability. Virtual consultations work smoothly.",
  gigDetails: "$680 • 14 days • Gemstone E-commerce",
  hasResponse: true,
  response: "Sri Lankan gems are world-famous. Thank you for trusting me with this!",
},
{
  avatar: "https://randomuser.me/api/portraits/women/98.jpg",
  username: "pakistani_carpets",
  country: "Pakistan",
  flag: "https://flagcdn.com/24x18/pk.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Stunning carpet store with detailed knot count specifications and room visualization. The custom sizing calculator is very helpful.",
  gigDetails: "$520 • 11 days • Carpet E-commerce",
  hasResponse: false,
},

{
  avatar: "https://i.pravatar.cc/60?img=12",
  username: "azerbaijani_caviar",
  country: "Azerbaijan",
  flag: "https://flagcdn.com/24x18/az.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Premium caviar store with freshness tracking and serving guides. The cold chain shipping integration ensures perfect delivery every time.",
  gigDetails: "$580 • 12 days • Luxury Food Store",
  hasResponse: true,
  response: "Caspian caviar deserves premium presentation. Happy with the results!",
},
{
  avatar: "https://i.pravatar.cc/60?img=47",
  username: "omani_frankincense",
  country: "Oman",
  flag: "https://flagcdn.com/24x18/om.png",
  timeAgo: "1 year ago",
  isRepeated: false,
  rating: 5,
  review:
    "Beautiful aromatics store with grade explanations and burning rituals guides. The heritage and sustainability focus resonates with customers.",
  gigDetails: "$380 • 8 days • Aromatics E-commerce",
  hasResponse: false,
},

  {
    avatar: "https://i.pravatar.cc/60?img=1",
    username: "bahraini_pearls",
    country: "Bahrain",
    flag: "https://flagcdn.com/24x18/bh.png",
    timeAgo: "1 year ago",
    isRepeated: true,
    rating: 5,
    review:
      "Mayus created an elegant natural pearl store with diving heritage stories and authentication certificates. The custom design service is excellent.",
    gigDetails: "$620 • 13 days • Pearl Jewelry Store",
    hasResponse: true,
    response: "Bahraini pearl diving heritage is fascinating. Honored to showcase it!",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=2",
    username: "qatari_art",
    country: "Qatar",
    flag: "https://flagcdn.com/24x18/qa.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Stunning art gallery platform with virtual exhibition tours and collector membership features. The bidding system for limited editions works perfectly.",
    gigDetails: "$780 • 16 days • Art Gallery Platform",
    hasResponse: false,
  },
  {
    avatar: "https://i.pravatar.cc/60?img=3",
    username: "kuwaiti_perfume",
    country: "Kuwait",
    flag: "https://flagcdn.com/24x18/kw.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Luxurious perfume store with scent profile matching and custom blend requests. The gift packaging and personal shopping service integration is excellent.",
    gigDetails: "$540 • 11 days • Perfume E-commerce",
    hasResponse: true,
    response: "Arabian perfumery is an art form. Thank you for this opportunity!",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=4",
    username: "saudi_dates",
    country: "Saudi Arabia",
    flag: "https://flagcdn.com/24x18/sa.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Perfect premium dates store with variety guides and gift box customization. The Ramadan special collections feature drives excellent seasonal sales.",
    gigDetails: "$420 • 9 days • Gourmet Dates Store",
    hasResponse: false,
  },
  {
    avatar: "https://i.pravatar.cc/60?img=6",
    username: "belgian_lace",
    country: "Belgium",
    flag: "https://flagcdn.com/24x18/be.png",
    timeAgo: "1 year ago",
    isRepeated: true,
    rating: 5,
    review:
      "Mayus built a beautiful lace products store with pattern catalogs and custom orders. The artisan heritage storytelling adds wonderful depth.",
    gigDetails: "$380 • 8 days • Lace E-commerce",
    hasResponse: true,
    response: "Belgian lace craftsmanship is legendary. Happy to showcase it online!",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=7",
    username: "luxembourg_wine",
    country: "Luxembourg",
    flag: "https://flagcdn.com/24x18/lu.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Elegant Moselle wine store with vineyard stories and tasting event booking. The wine club subscription model is very successful.",
    gigDetails: "$480 • 10 days • Wine E-commerce",
    hasResponse: false,
  },
  {
    avatar: "https://i.pravatar.cc/60?img=9",
    username: "liechtenstein_crafts",
    country: "Liechtenstein",
    flag: "https://flagcdn.com/24x18/li.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Beautiful alpine crafts store with local artisan features and limited edition releases. The exclusivity appeals to our discerning customers.",
    gigDetails: "$420 • 9 days • Alpine Crafts Store",
    hasResponse: true,
    response: "Liechtenstein's intimate craft community is special. Great collaboration!",
  },
  {
    avatar: "https://i.pravatar.cc/60?img=10",
    username: "andorran_ski",
    country: "Andorra",
    flag: "https://flagcdn.com/24x18/ad.png",
    timeAgo: "1 year ago",
    isRepeated: false,
    rating: 5,
    review:
      "Great ski equipment store with gear fitting guides and resort partnership integrations. The rental reservation system works seamlessly.",
    gigDetails: "$560 • 12 days • Ski Equipment Store",
    hasResponse: false,
  },
]

let currentlyShown = 10
let loadedReviews = 0

document.getElementById("loadMoreBtn").addEventListener("click", () => {
  const reviewsContainer = document.getElementById("reviewsContainer")
  const reviewCount = document.getElementById("reviewCount")
  const loadMoreBtn = document.getElementById("loadMoreBtn")

  // Load 5 more reviews each time
  const reviewsToLoad = Math.min(5, additionalReviews.length - loadedReviews)

  for (let i = 0; i < reviewsToLoad; i++) {
    const review = additionalReviews[loadedReviews + i]

    const reviewHTML = `
      <article class="bg-white rounded-lg p-4 shadow-md review-card">
        <div class="review-header">
          <div class="review-user-info">
            <img src="${review.avatar}" alt="avatar" class="w-12 h-12 rounded-full flex-shrink-0" />
            <div class="review-user-details">
              <div class="review-user-meta">
                <p class="font-medium">${review.username}</p>
                <img src="${review.flag}" alt="${review.country}" />
                ${review.isRepeated ? '<span class="repeated-client-badge">Repeated Client</span>' : ""}
              </div>
              <p class="text-xs text-gray-500">${review.timeAgo}</p>
              <div class="review-rating">
                ${'<i class="ri-star-fill"></i>'.repeat(review.rating)}
              </div>
            </div>
          </div>
        </div>

        <p class="text-gray-700">${review.review}</p>

        <div class="review-footer">
          <div class="text-xs text-gray-500">${review.gigDetails}</div>
          ${
            review.hasResponse
              ? `
            <div class="text-xs text-gray-500">
              <div class="font-medium text-heading">Seller's Response</div>
              <div class="mt-1">${review.response}</div>
            </div>
          `
              : `
            <div class="text-xs text-gray-500">Helpful? <a href="#" class="text-gray-700 hover:underline">Yes</a> <span class="mx-2">|</span> <a href="#" class="text-gray-700 hover:underline">No</a></div>
          `
          }
        </div>
      </article>
    `

    reviewsContainer.insertAdjacentHTML("beforeend", reviewHTML)
  }

  loadedReviews += reviewsToLoad
  currentlyShown += reviewsToLoad

  // Update counter
  reviewCount.textContent = `Showing ${currentlyShown} of 942 reviews`

  // Hide button if all additional reviews are loaded
  if (loadedReviews >= additionalReviews.length) {
    loadMoreBtn.style.display = "none"
    reviewCount.textContent = `Showing ${currentlyShown} of 942 reviews • Load more by refreshing the page`
  }
})
