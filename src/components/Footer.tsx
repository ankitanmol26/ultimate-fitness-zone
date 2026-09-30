import { siteConfig } from "@/data/config";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "TRAINING", href: "#training" },
  { name: "FACILITIES", href: "#facilities" },
  { name: "GALLERY", href: "#gallery" },
  { name: "MEMBERSHIP", href: "#membership" },
  { name: "CONTACT", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#home" className="text-2xl font-heading font-bold tracking-wider text-white mb-6 inline-block">
              ULTIMATE <span className="text-primary">FITNESS</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm text-balance">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm font-bold tracking-wider uppercase">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">
                <span className="block text-white font-bold tracking-wider uppercase mb-1">Phone</span>
                {siteConfig.phone}
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block text-white font-bold tracking-wider uppercase mb-1">Location</span>
                {siteConfig.location}
              </li>
              <li>
                <a href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors text-sm font-bold tracking-wider uppercase inline-flex items-center">
                  GET DIRECTIONS &rarr;
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6">Social</h4>
            <ul className="space-y-3">
              <li>
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm font-bold tracking-wider uppercase">
                  Instagram
                </a>
              </li>
              <li>
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm font-bold tracking-wider uppercase">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Website Prototype
          </p>
        </div>
      </div>
    </footer>
  );
}
