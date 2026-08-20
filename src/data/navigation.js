/* Centralized Navigation Route Lists for Land & Plot Selling */

export const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    dropdown: [
      { label: "About Savera City", path: "/about" },
      { label: "Chairperson's Message", path: "/about/chairman" },
      { label: "Mission & Vision", path: "/about/mission-vision" },
      { label: "Why Us", path: "/why-savera-city" }
    ]
  },
  {
    label: "Plot Townships",
    path: "/projects",
    dropdown: [
      { label: "All Plot Townships", path: "/projects" },
      { label: "Residential Plots", path: "/projects?type=Residential Plot" },
      { label: "Gated Townships", path: "/projects?type=Gated Township" },
      { label: "Commercial Highway Plots", path: "/projects?type=Commercial Plot" },
      { label: "Farmhouse Plots", path: "/projects?type=Farmhouse Plot" }
    ]
  },
  { label: "Ongoing Townships", path: "/projects?status=Ongoing" },
  { label: "Why Choose Us", path: "/why-savera-city" },
  { label: "Contact Us", path: "/contact" }
];

export const footerLinks = {
  company: [
    { label: "About Savera City", path: "/about" },
    { label: "Chairperson's Desk", path: "/about/chairman" },
    { label: "Mission & Vision", path: "/about/mission-vision" },
    { label: "Why Choose Us", path: "/why-savera-city" },
    { label: "Work With Us", path: "/careers" }
  ],
  projects: [
    { label: "Residential Plots (600 - 4800 sq.ft)", path: "/projects" },
    { label: "Gated Plot Townships", path: "/projects" },
    { label: "Commercial Highway Plots", path: "/projects" },
    { label: "Farmhouse Plots", path: "/projects" },
    { label: "Ready Registry Plots", path: "/projects" }
  ],
  quick: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Blog & News", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
    { label: "Careers", path: "/careers" }
  ]
};

export const socialLinks = [
  { platform: "Facebook", url: "https://facebook.com/saveracity", iconName: "Facebook" },
  { platform: "Instagram", url: "https://instagram.com/saveracity", iconName: "Instagram" },
  { platform: "Twitter", url: "https://twitter.com/saveracity", iconName: "Twitter" },
  { platform: "LinkedIn", url: "https://linkedin.com/company/saveracity", iconName: "Linkedin" },
  { platform: "YouTube", url: "https://youtube.com/saveracity", iconName: "Youtube" }
];
