/* Application Constants for Savera City - Land & Plot Selling */

export const COMPANY_STATS = {
  yearsExperience: "20+",
  plotsSold: "5,000+",
  townshipsDelivered: "25+",
  happyPlotOwners: "3,800+",
  ongoingTownships: "12+"
};

export const PLOT_SIZES = [
  { code: "SD", value: "600", label: "SD - 600 Sq.Ft (20' × 30')", sqft: 600, dimension: "20' × 30'", yds: "66.6 Sq.Yds", category: "Starter Compact Plot" },
  { code: "SC", value: "1200", label: "SC - 1200 Sq.Ft (30' × 40')", sqft: 1200, dimension: "30' × 40'", yds: "133.3 Sq.Yds", category: "Standard 3BHK Plot" },
  { code: "SF", value: "1500", label: "SF - 1500 Sq.Ft (30' × 50')", sqft: 1500, dimension: "30' × 50'", yds: "166.6 Sq.Yds", category: "Premium Villa Plot" },
  { code: "SB", value: "1800", label: "SB - 1800 Sq.Ft (36' × 50')", sqft: 1800, dimension: "36' × 50'", yds: "200 Sq.Yds", category: "Deluxe Duplex Plot" },
  { code: "SE", value: "2400", label: "SE - 2400 Sq.Ft (40' × 60')", sqft: 2400, dimension: "40' × 60'", yds: "266.6 Sq.Yds", category: "Commercial / Twin Plot" },
  { code: "SA", value: "3600", label: "SA - 3600 Sq.Ft (50' × 72')", sqft: 3600, dimension: "50' × 72'", yds: "400 Sq.Yds", category: "Executive Large Plot" },
  { code: "SG", value: "4800", label: "SG - 4800 Sq.Ft (60' × 80')", sqft: 4800, dimension: "60' × 80'", yds: "533.3 Sq.Yds", category: "Grand Estate Plot" }
];

export const PROPERTY_TYPES = [
  { value: "all", label: "All Plot Types" },
  { value: "Residential Plot", label: "Residential Plots" },
  { value: "Commercial Plot", label: "Commercial Plots" },
  { value: "Gated Township", label: "Gated Township Plots" },
  { value: "Farmhouse Plot", label: "Farmhouse & Villa Plots" }
];

export const LOCATIONS = [
  { value: "all", label: "All Locations" },
  { value: "Bakhtiyarpur", label: "Bakhtiyarpur (Active)" },
  { value: "Chapra", label: "Chapra (Coming Soon)" },
  { value: "Dighwara", label: "Dighwara (Coming Soon)" }
];

export const CONFIGURATIONS = [
  { value: "all", label: "All Plot Codes & Sizes" },
  { value: "SD (600)", label: "SD - 600 Sq.Ft (20×30)" },
  { value: "SC (1200)", label: "SC - 1200 Sq.Ft (30×40)" },
  { value: "SF (1500)", label: "SF - 1500 Sq.Ft (30×50)" },
  { value: "SB (1800)", label: "SB - 1800 Sq.Ft (36×50)" },
  { value: "SE (2400)", label: "SE - 2400 Sq.Ft (40×60)" },
  { value: "SA (3600)", label: "SA - 3600 Sq.Ft (50×72)" },
  { value: "SG (4800)", label: "SG - 4800 Sq.Ft (60×80)" }
];

export const PROJECT_STATUSES = [
  { value: "all", label: "All Statuses" },
  { value: "Ready Registry", label: "Ready Registry & Mutation" },
  { value: "Under Development", label: "Under Development" },
  { value: "Upcoming Township", label: "Upcoming Township" }
];

export const BUDGET_RANGES = [
  { value: "all", label: "Any Plot Budget" },
  { value: "0-15", label: "Under ₹15 Lakh" },
  { value: "15-30", label: "₹15 Lakh - ₹30 Lakh" },
  { value: "30-50", label: "₹30 Lakh - ₹50 Lakh" },
  { value: "50-100", label: "₹50 Lakh - ₹1 Crore" },
  { value: "100+", label: "Above ₹1 Crore" }
];

export const CONTACT_INFO = {
  address: "Head Office: Aashiyana Digha Road, Near Bharat Petrol Pump | Site Address: NH-30, Bakhtiyarpur Four Lane, Alipur, Patna - 803212",
  phone: "+91 98765 43210",
  email: "saveracity11@gmail.com",
  whatsapp: "+919876543210",
  hours: "Mon - Sat: 9:30 AM - 6:30 PM",
  mapsLink: "https://maps.google.com/?q=Bakhtiyarpur+Four+Lane+Patna"
};
