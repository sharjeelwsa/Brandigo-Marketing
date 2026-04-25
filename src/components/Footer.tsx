import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/brandigo-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-jet-soft/40 mt-32">
      <div className="container-tight py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <img src={logo} alt="Brandigo Marketing" className="h-20 w-auto drop-shadow-[0_4px_22px_hsl(0_0%_92%/0.18)]" />
          <p className="text-sm text-muted-foreground max-w-xs">
            <span className="brand-name">Brandigo Marketing</span> — Vidharbha's leading 360° growth marketing agency. Online + Offline. Real leads. Real revenue.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="#" className="p-2 rounded-full border border-border hover:border-silver/50 hover:text-silver-bright transition-colors text-muted-foreground"><Instagram size={16} /></a>
            <a href="#" className="p-2 rounded-full border border-border hover:border-silver/50 hover:text-silver-bright transition-colors text-muted-foreground"><Facebook size={16} /></a>
            <a href="#" className="p-2 rounded-full border border-border hover:border-silver/50 hover:text-silver-bright transition-colors text-muted-foreground"><Linkedin size={16} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-silver-bright mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-silver-bright transition-colors">About</Link></li>
            <li><Link to="/case-studies" className="hover:text-silver-bright transition-colors">Case Studies</Link></li>
            <li><Link to="/testimonials" className="hover:text-silver-bright transition-colors">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-silver-bright transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-silver-bright mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Meta & Google Ads</li>
            <li>Social Media Management</li>
            <li>Website Development</li>
            <li>Hoardings & Auto Ads</li>
            <li>Coaching Institute Marketing</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-silver-bright mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-silver" />
              <span>Akola, Maharashtra<br />Serving Vidharbha & all India</span>
            </li>
            <li>
              <a href="tel:+918669736979" className="flex items-center gap-2 hover:text-silver-bright transition-colors">
                <Phone size={16} className="text-silver" /> +91 8669736979
              </a>
            </li>
            <li>
              <a href="https://wa.me/918669736979" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-silver-bright transition-colors">
                <MessageCircle size={16} className="text-silver" /> WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-tight py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} <span className="brand-name">Brandigo Marketing</span>. All rights reserved.</p>
          <p>Founded by Mohammad Sharjeel · Akola, Maharashtra</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
