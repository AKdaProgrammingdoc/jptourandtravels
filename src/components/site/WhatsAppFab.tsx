import { MessageCircle } from "lucide-react";

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/917397397991"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full gradient-gold-bg text-primary-foreground shadow-gold transition-transform hover:scale-110"
      style={{ animation: "shimmer 2s ease-in-out infinite" }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
