import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

function WhatsAppButton() {
  const phoneNumber = '254720418250';
  const message = 'Hello Larrium Tech, I would like to inquire about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="whatsapp-icon-wrapper">
        <MessageCircle className="h-7 w-7 text-white transition-transform group-hover:scale-110" />
      </div>
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
}

export default WhatsAppButton;
