import { Check, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface OfferCardProps {
  title: string;
  price: string;
  installments?: string;
  originalPrice?: string;
  savings?: string;
  features: string[];
  codLink: string;
  onlineLink: string;
  highlighted?: boolean;
  image?: string;
  badge?: string;
  priceNote?: string;
}

export function OfferCard({
  title,
  price,
  installments,
  originalPrice,
  savings,
  features,
  codLink,
  onlineLink,
  highlighted = false,
  image,
  badge,
  priceNote,
}: OfferCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
  className={`relative rounded-3xl flex flex-col p-8 transition-all duration-300
    ${highlighted
      ? "bg-white border-2 border-purple-600 shadow-2xl z-10 my-4"
      : "bg-white border border-gray-200 shadow-md"}
  `}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
          {badge}
        </div>
      )}

      {image && (
        <img
          src={image}
          alt={title}
          className="w-32 h-32 object-contain mx-auto mb-4"
        />
      )}

      <h3 className="text-2xl font-black text-center mb-4">
        {title}
      </h3>

      <div className="text-center mb-6">
        {originalPrice && (
          <p className="line-through text-gray-400">
            De {originalPrice}
          </p>
        )}

        <p className="text-4xl font-black text-primary">
          {price}
        </p>

        {installments && (
          <p className="text-sm font-bold text-gray-600">
            {installments}
          </p>
        )}

        {priceNote && (
          <p className="text-xs font-bold text-primary mt-1">
            {priceNote}
          </p>
        )}
      </div>

      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <Check className="w-4 h-4 text-green-600" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="space-y-4 mt-auto">
        <Button
          asChild
          size="lg"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black shadow-xl"
        >
          <a
            href={onlineLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-5 h-5" />
            💳 PAGAR ONLINE AGORA
          </a>
        </Button>

        <p className="text-center text-xs font-bold text-gray-600">
          🔒 Pagamento 100% Seguro • Aprovação imediata
        </p>

        <Button
          asChild
          size="lg"
          className="w-full bg-green-600 text-white font-black"
        >
          <a
            href={codLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Truck className="w-5 h-5" />
            🚚 PAGAR NA ENTREGA
          </a>
        </Button>

        <p className="text-center text-xs font-bold">
          Prefere pagar quando receber?
          <br />
          Clique e verifique a disponibilidade via WhatsApp.
        </p>
      </div>
    </motion.div>
  );
}