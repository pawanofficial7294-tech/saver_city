/* Plot & Land Projects Data for Savera City */

export const projects = [
  {
    id: 1,
    slug: "savera-city-prime-enclave",
    name: "Savera City Prime Enclave",
    type: "Residential Plot",
    status: "Ready Registry",
    location: "Bakhtiyarpur",
    address: "Bakhtiyarpur Karauta Telmar Road / NH-30 Four Lane, Bakhtiyarpur",
    price: "₹9 Lakh - ₹54 Lakh",
    pricePerSqft: 1500,
    priceNum: 900000,
    totalLandArea: "25 Acres Gated Township",
    reraNumber: "BRERAP00382-2/836/R-763/2026",
    possessionDate: "Immediate Registry & Possession",
    featured: true,
    description: "Savera City Prime Enclave is a premier 25-acre RERA-approved mega plot township located on Bakhtiyarpur Karauta Telmar Road in Bakhtiyarpur. Offering government-approved plot layouts with clear titles, immediate registry, and 100% bank loan sanction. Built with 60ft wide main arterial roads, 40ft/30ft internal roads, underground electrical cabling, piped water connection, and 24x7 gated security.",
    shortDescription: "RERA approved active plot township on Bakhtiyarpur Karauta Telmar Road featuring plot sizes from 600 to 3600 sq.ft with spot registry.",
    configurations: ["600 sq.ft", "1200 sq.ft", "1500 sq.ft", "1800 sq.ft", "3600 sq.ft", "4800 sq.ft"],
    configDetails: [
      { size: "600 sq.ft.", dimension: "20' × 30'", price: "₹12.0 Lakh", type: "Starter Plot", yds: "66.6 Sq.Yds" },
      { size: "1,200 sq.ft.", dimension: "30' × 40'", price: "₹24.0 Lakh", type: "Standard Plot", yds: "133.3 Sq.Yds" },
      { size: "1,500 sq.ft.", dimension: "30' × 50'", price: "₹30.0 Lakh", type: "Premium Plot", yds: "166.6 Sq.Yds" },
      { size: "1,800 sq.ft.", dimension: "30' × 60'", price: "₹36.0 Lakh", type: "Deluxe Plot", yds: "200 Sq.Yds" },
      { size: "3,600 sq.ft.", dimension: "60' × 60'", price: "₹72.0 Lakh", type: "Executive Villa Plot", yds: "400 Sq.Yds" },
      { size: "4,800 sq.ft.", dimension: "60' × 80'", price: "₹96.0 Lakh", type: "Grand Estate Plot", yds: "533.3 Sq.Yds" }
    ],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "Gated Entry with Arch", "60ft & 40ft Blacktop Roads", "Underground Drainage System",
      "Underground Electrical Lines", "LED Street Lighting Grid", "24x7 Security & CCTV",
      "Central Park & Children Play Zone", "Township Perimeter Wall", "Water Supply Pipeline", "Temple & Community Hall"
    ],
    specifications: [
      { title: "Land Approval", detail: "RERA Registered & Circle Office approved residential land layout." },
      { title: "Legal & Registry", detail: "Clean Title deed, 100% Mutation guarantee & immediate spot registry." },
      { title: "Road Infrastructure", detail: "Heavy-duty bituminous blacktop roads (60ft main boulevard, 40ft & 30ft sub-roads)." },
      { title: "Utilities", detail: "Underground stormwater drain network and electrical transformer grid installed." },
      { title: "Bank Loans", detail: "Approved for home & plot purchase loans up to 80% by SBI, HDFC, ICICI, and LIC Housing." }
    ],
    floorPlans: [
      { name: "600 Sq.Ft Layout (20' × 30')", size: "600 Sq.Ft.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", desc: "Compact starter plot ideal for 2BHK duplex home construction." },
      { name: "1200 Sq.Ft Layout (30' × 40')", size: "1,200 Sq.Ft.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", desc: "Most popular 144 Sq.Yd plot for 3BHK spacious villa with parking." },
      { name: "1500 Sq.Ft Layout (30' × 50')", size: "1,500 Sq.Ft.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", desc: "180 Sq.Yd premium plot with front lawn space and 4BHK design potential." },
      { name: "1800 Sq.Ft Layout (30' × 60')", size: "1,800 Sq.Ft.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", desc: "200 Sq.Yd deluxe plot with ample backyard and double-car driveway." },
      { name: "3600 Sq.Ft Layout (60' × 60')", size: "3,600 Sq.Ft.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", desc: "400 Sq.Yd executive square plot for luxury bungalow / twin duplex units." },
      { name: "4800 Sq.Ft Layout (60' × 80')", size: "4,800 Sq.Ft.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", desc: "533 Sq.Yd grand estate plot for luxury mansion, private pool & landscaping." }
    ],
    nearbyPlaces: [
      { name: "Bailey Road Main Junction", distance: "2.5 km", type: "Road Transport" },
      { name: "AIIMS Patna Hospital", distance: "3.8 km", type: "Hospital" },
      { name: "Delhi Public School Patna", distance: "2.0 km", type: "School" },
      { name: "Patna Junction Railway Station", distance: "9.0 km", type: "Railway Station" }
    ],
    constructionStatus: {
      percentage: 90,
      currentPhase: "Road carpeting complete. Plot demarcation stones installed. Spot registry open.",
      timeline: [
        { phase: "Land Acquisition & Layout Approval", date: "Jan 2025", status: "Completed" },
        { phase: "Boundary Wall & Grand Entrance Arch", date: "Jul 2025", status: "Completed" },
        { phase: "Road & Sewerage Infrastructure", date: "May 2026", status: "Completed" },
        { phase: "Plot Demarcation & Registry", date: "Jun 2026", status: "In Progress" },
        { phase: "Township Handover", date: "Dec 2026", status: "Upcoming" }
      ]
    }
  },
  {
    id: 2,
    slug: "savera-green-meadows-township",
    name: "Savera Green Meadows Township",
    type: "Gated Township",
    status: "Ready Registry",
    location: "Bakhtiyarpur",
    address: "Main Bakhtiyarpur Highway Corridor, Bakhtiyarpur",
    price: "₹9 Lakh - ₹54 Lakh",
    pricePerSqft: 1500,
    priceNum: 900000,
    totalLandArea: "18 Acres Eco Township",
    reraNumber: "BRERAP/2026/1826-P",
    possessionDate: "Immediate Possession",
    featured: false,
    description: "Savera Green Meadows is an eco-friendly 18-acre gated plot township located in Bakhtiyarpur. Surrounded by green open spaces, this project offers ready-to-construct residential plots ranging from 600 sq.ft to 3600 sq.ft.",
    shortDescription: "Active gated plot township in Bakhtiyarpur with eco-friendly infrastructure and plot sizes 600 to 3600 sq.ft.",
    configurations: ["600 sq.ft", "1200 sq.ft", "1500 sq.ft", "1800 sq.ft", "3600 sq.ft", "4800 sq.ft"],
    configDetails: [
      { size: "600 sq.ft.", dimension: "20' × 30'", price: "₹9.0 Lakh", type: "Starter Plot", yds: "66.6 Sq.Yds" },
      { size: "1,200 sq.ft.", dimension: "30' × 40'", price: "₹18.0 Lakh", type: "Standard Plot", yds: "133.3 Sq.Yds" },
      { size: "1,500 sq.ft.", dimension: "30' × 50'", price: "₹22.5 Lakh", type: "Premium Plot", yds: "166.6 Sq.Yds" },
      { size: "1,800 sq.ft.", dimension: "30' × 60'", price: "₹27.0 Lakh", type: "Deluxe Plot", yds: "200 Sq.Yds" },
      { size: "3,600 sq.ft.", dimension: "60' × 60'", price: "₹54.0 Lakh", type: "Executive Villa Plot", yds: "400 Sq.Yds" },
      { size: "4,800 sq.ft.", dimension: "60' × 80'", price: "₹72.0 Lakh", type: "Grand Estate Plot", yds: "533.3 Sq.Yds" }
    ],
    images: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "50ft Main Entrance Boulevard", "Solar Street Light Grid", "Gated Security Guard House",
      "Rainwater Harvesting System", "Jogging & Cycling Track", "Children Park & Play Equipment",
      "Perimeter Security Wall", "Overhead Water Storage Tank"
    ],
    specifications: [
      { title: "Land Approval", detail: "JHRERA Registered & Ranchi Regional Development Authority approved layout." },
      { title: "Registry Status", detail: "Immediate Registry, Khata Transfer & Spot Possession." },
      { title: "Infrastructure", detail: "50ft & 30ft Wide Concrete Roads with Underground Utility Channels." }
    ],
    floorPlans: [
      { name: "600 Sq.Ft Layout Plan", size: "600 Sq.Ft.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", desc: "Starter residential plot option." },
      { name: "1200 Sq.Ft Layout Plan", size: "1,200 Sq.Ft.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", desc: "Standard 30x40 home construction plot." },
      { name: "1500 Sq.Ft Layout Plan", size: "1,500 Sq.Ft.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", desc: "30x50 plot with front garden area." },
      { name: "1800 Sq.Ft Layout Plan", size: "1,800 Sq.Ft.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", desc: "30x60 plot suitable for duplex villa." },
      { name: "3600 Sq.Ft Layout Plan", size: "3,600 Sq.Ft.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", desc: "Large villa plot layout." },
      { name: "4800 Sq.Ft Layout Plan", size: "4,800 Sq.Ft.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", desc: "Luxury estate plot configuration." }
    ],
    nearbyPlaces: [
      { name: "Ranchi Ring Road", distance: "0.5 km", type: "Transport" },
      { name: "Birsa Munda Airport", distance: "12.0 km", type: "Airport" },
      { name: "Orchid Medical Centre", distance: "6.5 km", type: "Hospital" }
    ],
    constructionStatus: {
      percentage: 100,
      currentPhase: "Township completely developed. Spot registry and immediate boundary construction permitted.",
      timeline: [
        { phase: "Land Acquisition", date: "May 2023", status: "Completed" },
        { phase: "Layout Approval & RERA", date: "Nov 2023", status: "Completed" },
        { phase: "Concrete Roads & Utilities", date: "Oct 2024", status: "Completed" },
        { phase: "Registry & Handover", date: "Jan 2025", status: "Completed" }
      ]
    }
  },
  {
    id: 3,
    slug: "savera-royal-valley-farmhouse-plots",
    name: "Savera Royal Valley & Farmhouses",
    type: "Farmhouse Plot",
    status: "Under Development",
    location: "Chapra",
    address: "Main Chapra Highway Corridor (Coming Soon), Chapra",
    price: "₹9 Lakh - ₹54 Lakh",
    pricePerSqft: 1500,
    priceNum: 900000,
    totalLandArea: "30 Acres Eco Farm Township",
    reraNumber: "BRERAP84920-1/901/R-2026",
    possessionDate: "Coming Soon",
    featured: true,
    description: "Savera Royal Valley offers serene farmhouse land plots and resort-style township plots in Chapra (Coming Soon). Perfect for country living, weekend retreats, and long-term land investment.",
    shortDescription: "Resort-style farmhouse & residential plots in Chapra (Coming Soon) with plot sizes 600 to 3600 sq.ft.",
    configurations: ["600 sq.ft", "1200 sq.ft", "1500 sq.ft", "1800 sq.ft", "3600 sq.ft", "4800 sq.ft"],
    configDetails: [
      { size: "600 sq.ft.", dimension: "20' × 30'", price: "₹7.2 Lakh", type: "Starter Plot", yds: "66.6 Sq.Yds" },
      { size: "1,200 sq.ft.", dimension: "30' × 40'", price: "₹14.4 Lakh", type: "Standard Plot", yds: "133.3 Sq.Yds" },
      { size: "1,500 sq.ft.", dimension: "30' × 50'", price: "₹18.0 Lakh", type: "Premium Plot", yds: "166.6 Sq.Yds" },
      { size: "1,800 sq.ft.", dimension: "30' × 60'", price: "₹21.6 Lakh", type: "Deluxe Plot", yds: "200 Sq.Yds" },
      { size: "3,600 sq.ft.", dimension: "60' × 60'", price: "₹43.2 Lakh", type: "Executive Villa Plot", yds: "400 Sq.Yds" },
      { size: "4,800 sq.ft.", dimension: "60' × 80'", price: "₹57.6 Lakh", type: "Grand Estate Plot", yds: "533.3 Sq.Yds" }
    ],
    images: [
      "/coming_soon.svg",
      "/coming_soon.svg"
    ],
    amenities: [
      "Clubhouse & Swimming Pool", "Fruit Orchards & Organic Garden", "40ft Wide Tree Lined Avenues",
      "Gated Security Post", "Solar Power Grid", "Drip Irrigation Line", "Gazebos & Picnic Lawn"
    ],
    specifications: [
      { title: "Land Title", detail: "100% Freehold General Category Agricultural to Residential Converted Land." },
      { title: "Boundary", detail: "Demarcation Pillars & Fencing provided for every plot owner." }
    ],
    floorPlans: [
      { name: "Farmhouse Plot Layout (600 - 4800 sq.ft)", size: "Flexible Sizes", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", desc: "Master layout plan for Royal Valley Farmhouses." }
    ],
    nearbyPlaces: [
      { name: "Gaya International Airport", distance: "4.0 km", type: "Airport" },
      { name: "Bodhgaya Mahabodhi Temple", distance: "8.5 km", type: "Tourist Destination" }
    ],
    constructionStatus: {
      percentage: 55,
      currentPhase: "Tree plantation & road alignment underway. Plot demarcation stones placed.",
      timeline: [
        { phase: "Fencing & Entrance", date: "Jan 2026", status: "Completed" },
        { phase: "Road Levelling", date: "Jun 2026", status: "In Progress" },
        { phase: "Handover & Registry", date: "Oct 2026", status: "Upcoming" }
      ]
    }
  },
  {
    id: 4,
    slug: "savera-commercial-trade-park-plots",
    name: "Savera Commercial Trade Park Plots",
    type: "Commercial Plot",
    status: "Ready Registry",
    location: "Bakhtiyarpur",
    address: "Bakhtiyarpur Commercial Highway Bypass, Bakhtiyarpur",
    price: "₹18 Lakh - ₹1.08 Cr",
    pricePerSqft: 3000,
    priceNum: 1800000,
    totalLandArea: "12 Acres Commercial Hub",
    reraNumber: "BRERAC48293-1/72/R-902/2026",
    possessionDate: "Ready Registry",
    featured: false,
    description: "Savera Commercial Trade Park is a strategic highway-facing commercial plot project situated directly on Bakhtiyarpur Bypass in Bakhtiyarpur.",
    shortDescription: "High-footfall commercial highway plots in Bakhtiyarpur active corridor with sizes from 600 to 3600 sq.ft.",
    configurations: ["600 sq.ft", "1200 sq.ft", "1500 sq.ft", "1800 sq.ft", "3600 sq.ft", "4800 sq.ft"],
    configDetails: [
      { size: "600 sq.ft.", dimension: "20' × 30'", price: "₹18.0 Lakh", type: "Commercial Kiosk Plot", yds: "66.6 Sq.Yds" },
      { size: "1,200 sq.ft.", dimension: "30' × 40'", price: "₹36.0 Lakh", type: "Retail Store Plot", yds: "133.3 Sq.Yds" },
      { size: "1,500 sq.ft.", dimension: "30' × 50'", price: "₹45.0 Lakh", type: "Showroom Frontage Plot", yds: "166.6 Sq.Yds" },
      { size: "1,800 sq.ft.", dimension: "30' × 60'", price: "₹54.0 Lakh", type: "Corporate Office Plot", yds: "200 Sq.Yds" },
      { size: "3,600 sq.ft.", dimension: "60' × 60'", price: "₹1.08 Cr", type: "Commercial Complex Plot", yds: "400 Sq.Yds" },
      { size: "4,800 sq.ft.", dimension: "60' × 80'", price: "₹1.44 Cr", type: "Highway Trade & Hotel Plot", yds: "533.3 Sq.Yds" }
    ],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "NH-28 Frontage", "100ft Service Road Access", "Heavy Duty Concrete Paving",
      "3-Phase Industrial Power Line", "Truck Bay & Commercial Parking", "24x7 Security CCTV"
    ],
    specifications: [
      { title: "Zoning", detail: "Approved Commercial Layout Zone suitable for High-Rise & Retail." },
      { title: "FAR & Ground Coverage", detail: "High FAR allowed for multi-story commercial building construction." }
    ],
    floorPlans: [
      { name: "Commercial Layout Plan", size: "600 - 4800 Sq.Ft.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", desc: "Strategic highway commercial plot zoning." }
    ],
    nearbyPlaces: [
      { name: "Muzaffarpur Junction Railway Station", distance: "5.0 km", type: "Railway" },
      { name: "NH-28 Toll Plaza", distance: "1.5 km", type: "Highway" }
    ],
    constructionStatus: {
      percentage: 85,
      currentPhase: "Highway service lane complete. Commercial plot handovers active.",
      timeline: [
        { phase: "Highway Approval", date: "Aug 2025", status: "Completed" },
        { phase: "Concrete Laying", date: "Feb 2026", status: "Completed" },
        { phase: "Registry Open", date: "Jun 2026", status: "In Progress" }
      ]
    }
  },
  {
    id: 5,
    slug: "savera-bihta-smart-township",
    name: "Savera Bihta Smart Plot City",
    type: "Gated Township",
    status: "Upcoming Township",
    location: "Dighwara",
    address: "Dighwara Highway Corridor (Coming Soon), Dighwara",
    price: "₹9 Lakh - ₹54 Lakh",
    pricePerSqft: 1500,
    priceNum: 900000,
    totalLandArea: "35 Acres Mega Smart Township",
    reraNumber: "BRERAP83921-2/80/R-2026",
    possessionDate: "Coming Soon",
    featured: true,
    description: "Savera Dighwara Smart Plot City is an upcoming mega plot township in Dighwara (Coming Soon).",
    shortDescription: "High-appreciation smart plot township in Dighwara (Coming Soon) with plot sizes from 600 to 3600 sq.ft.",
    configurations: ["600 sq.ft", "1200 sq.ft", "1500 sq.ft", "1800 sq.ft", "3600 sq.ft", "4800 sq.ft"],
    configDetails: [
      { size: "600 sq.ft.", dimension: "20' × 30'", price: "₹10.8 Lakh", type: "Starter Plot", yds: "66.6 Sq.Yds" },
      { size: "1,200 sq.ft.", dimension: "30' × 40'", price: "₹21.6 Lakh", type: "Standard Plot", yds: "133.3 Sq.Yds" },
      { size: "1,500 sq.ft.", dimension: "30' × 50'", price: "₹27.0 Lakh", type: "Premium Plot", yds: "166.6 Sq.Yds" },
      { size: "1,800 sq.ft.", dimension: "30' × 60'", price: "₹32.4 Lakh", type: "Deluxe Plot", yds: "200 Sq.Yds" },
      { size: "3,600 sq.ft.", dimension: "60' × 60'", price: "₹64.8 Lakh", type: "Executive Villa Plot", yds: "400 Sq.Yds" },
      { size: "4,800 sq.ft.", dimension: "60' × 80'", price: "₹86.4 Lakh", type: "Grand Estate Plot", yds: "533.3 Sq.Yds" }
    ],
    images: [
      "/coming_soon.svg",
      "/coming_soon.svg"
    ],
    amenities: [
      "EV Car Charging Station", "Smart Solar Streetlights", "Free Wi-Fi Community Hub",
      "60ft Wide Main Boulevard", "Gated Security", "Underground Sewerage Network"
    ],
    specifications: [
      { title: "Location Advantage", detail: "Located 3 km from IIT Patna & 5 km from Bihta Airport site." }
    ],
    floorPlans: [
      { name: "Smart City Master Plan", size: "600 - 4800 Sq.Ft.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", desc: "Bihta Mega Smart City plot masterplan." }
    ],
    nearbyPlaces: [
      { name: "IIT Patna Campus", distance: "3.0 km", type: "Education" },
      { name: "Bihta International Airport (Upcoming)", distance: "5.0 km", type: "Airport" }
    ],
    constructionStatus: {
      percentage: 35,
      currentPhase: "Pre-launch bookings open. Outer boundary wall completion in progress.",
      timeline: [
        { phase: "Pre-Launch & Boundary", date: "Jan 2026", status: "In Progress" },
        { phase: "Roads & Utilities", date: "Sep 2026", status: "Upcoming" },
        { phase: "Registry & Handover", date: "Jan 2027", status: "Upcoming" }
      ]
    }
  },
  {
    id: 6,
    slug: "savera-boulevard-eco-city",
    name: "Savera Boulevard Eco City",
    type: "Residential Plot",
    status: "Ready Registry",
    location: "Bakhtiyarpur",
    address: "Bakhtiyarpur Eco Enclave, Bakhtiyarpur",
    price: "₹9 Lakh - ₹54 Lakh",
    pricePerSqft: 1500,
    priceNum: 900000,
    totalLandArea: "15 Acres Luxury Plot Enclave",
    reraNumber: "BRERAP/2026/1004-P",
    possessionDate: "Immediate Registry",
    featured: false,
    description: "Savera Boulevard Eco City is an exclusive plot enclave in Bakhtiyarpur.",
    shortDescription: "Premium active residential plot enclave in Bakhtiyarpur with plot sizes 600 to 3600 sq.ft.",
    configurations: ["600 sq.ft", "1200 sq.ft", "1500 sq.ft", "1800 sq.ft", "3600 sq.ft", "4800 sq.ft"],
    configDetails: [
      { size: "600 sq.ft.", dimension: "20' × 30'", price: "₹15.0 Lakh", type: "Starter Plot", yds: "66.6 Sq.Yds" },
      { size: "1,200 sq.ft.", dimension: "30' × 40'", price: "₹30.0 Lakh", type: "Standard Plot", yds: "133.3 Sq.Yds" },
      { size: "1,500 sq.ft.", dimension: "30' × 50'", price: "₹37.5 Lakh", type: "Premium Plot", yds: "166.6 Sq.Yds" },
      { size: "1,800 sq.ft.", dimension: "30' × 60'", price: "₹45.0 Lakh", type: "Deluxe Plot", yds: "200 Sq.Yds" },
      { size: "3,600 sq.ft.", dimension: "60' × 60'", price: "₹90.0 Lakh", type: "Executive Villa Plot", yds: "400 Sq.Yds" },
      { size: "4,800 sq.ft.", dimension: "60' × 80'", price: "₹1.20 Cr", type: "Grand Estate Plot", yds: "533.3 Sq.Yds" }
    ],
    images: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
    ],
    amenities: [
      "Paved 40ft Internal Roads", "Landscaped Entry Plaza", "24x7 Armed Security Guards",
      "Underground Power Grid", "Clubhouse & Sports Court"
    ],
    specifications: [
      { title: "Land Approval", detail: "RRDA Approved & Ready for Bank Loan Sanction." }
    ],
    floorPlans: [
      { name: "Boulevard Enclave Layout", size: "600 - 4800 Sq.Ft.", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80", desc: "Exclusive luxury plot layout." }
    ],
    nearbyPlaces: [
      { name: "Rock Garden Kanke", distance: "2.5 km", type: "Park" },
      { name: "Kanke Dam Lake", distance: "3.0 km", type: "Lake" }
    ],
    constructionStatus: {
      percentage: 100,
      currentPhase: "Fully ready for spot registry and villa construction.",
      timeline: [
        { phase: "Development Complete", date: "Jan 2025", status: "Completed" }
      ]
    }
  }
];
