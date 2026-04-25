import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/brandigo-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "bg-jet/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
      )}
    >
      <div className="container-tight flex h-28 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" aria-label="Brandigo Marketing — Home">
          <img
            src={logo}
            alt="Brandigo Marketing"
            className="h-20 md:h-24 w-auto transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_4px_22px_hsl(0_0%_92%/0.18)]"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                  isActive ? "text-silver-bright bg-secondary/60" : "text-muted-foreground hover:text-silver-bright"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <a href="https://wa.me/918669736979" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </Button>
          <Button asChild size="sm">
            <Link to="/contact">Book Free Call</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-silver"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-jet/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="container-tight py-6 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                    isActive ? "text-silver-bright bg-secondary/60" : "text-muted-foreground"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="flex gap-3 pt-4">
              <Button asChild variant="outline" className="flex-1">
                <a href="https://wa.me/918669736979" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </Button>
              <Button asChild className="flex-1">
                <Link to="/contact">Book Call</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
