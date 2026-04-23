import { Phone, MessageCircle } from "lucide-react";

const StickyActions = () => {
  return (
    <>
      {/* Floating WhatsApp - all screens */}
      <a
        href="https://wa.me/918669736979"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/40 hover:scale-110 transition-transform animate-float"
      >
        <MessageCircle size={26} />
      </a>

      {/* Mobile sticky bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-jet/95 backdrop-blur-xl border-t border-border p-3 flex gap-2">
        <a
          href="tel:+918669736979"
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-full bg-silver-gradient text-jet font-semibold text-sm"
        >
          <Phone size={16} /> Book Call
        </a>
        <a
          href="https://wa.me/918669736979"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 h-12 rounded-full bg-whatsapp text-white font-semibold text-sm"
        >
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>
    </>
  );
};

export default StickyActions;
