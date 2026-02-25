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
  isPopular?: boolean;
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
  isPopular = false,
  highlighted = false,
  image,
  badge,
  priceNote
}: OfferCardProps) {
  const isThreeUnit = title.toLowerCase().includes("3") || title.toLowerCase().includes("três");

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className={`relative rounded-[2.5rem] overflow-visible border-2 transition-all duration-300 flex flex-col bg-card ${
        isThreeUnit 
          ? "ring-2 ring-green-500 shadow-2xl scale-[1.02] border-green-500/50" 
          : highlighted 
            ? "border-primary shadow-[0_30px_60px_rgba(156,38,184,0.25)]" 
            : "border-border shadow-xl hover:shadow-2xl hover:border-primary/50"
      }`}
    >
      {isThreeUnit && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex justify-center">
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg whitespace-nowrap"
          >
            🔥 MAIS ESCOLHIDO
          </motion.div>
        </div>
      )}
      
      {badge && !isThreeUnit && (
        <div className="bg-gradient-to-r from-primary to-secondary text-white text-center py-3 font-black text-xs tracking-[0.2em] uppercase">
          {badge}
        </div>
      )}

      <div className="p-8 md:p-10 flex flex-col items-center space-y-8">
        {highlighted && !badge && !isThreeUnit && (
          <div className="absolute top-8 right-8">
            <span className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Mais Escolhido</span>
          </div>
        )}
        
        <h3 className="text-2xl font-black text-gray-900 text-center uppercase tracking-tight">{title}</h3>
        
        {image && (
          <div className="w-52 h-52 relative group">
             <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
             <img src={image} alt={title} className="w-full h-auto object-cover rounded-xl drop-shadow-2xl relative z-10" />
          </div>
        )}

        <div className="text-center">
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm font-bold block mb-1">
              De {originalPrice}
            </span>
          )}
          <div className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-black text-primary tracking-tighter">{price}</span>
            {priceNote && (
              <span className="text-primary font-bold text-[10px] uppercase tracking-wider mt-1">{priceNote}</span>
            )}
          </div>
          {installments && (
            <p className="text-sm font-bold text-gray-500 mt-2">{installments}</p>
          )}
          {savings && (
            <div className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-[10px] font-black mt-4 uppercase tracking-widest">
              ECONOMIZE {savings}
            </div>
          )}
        </div>

        <ul className="space-y-4 w-full">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-4 text-sm md:text-base text-gray-600 font-medium">
              <div className="bg-green-100 text-green-600 rounded-lg p-1.5 flex-shrink-0">
                <Check className="w-3.5 h-3.5 font-bold" />
              </div>
              {feature}
            </li>
          ))}
          <li className="flex flex-col gap-1 border-t border-primary/10 pt-4">
            <div className="flex items-center gap-4 text-sm font-black text-primary uppercase tracking-tighter">
              <div className="bg-primary/10 text-primary rounded-lg p-1.5 flex-shrink-0">
                <Truck className="w-3.5 h-3.5" />
              </div>
              FRETE GRÁTIS PARA TODO BRASIL
            </div>
          </li>
        </ul>

        <div className="mt-auto w-full space-y-4">
          <div className="space-y-2">
            <p className="text-center text-base font-semibold text-gray-800 mb-4">
              Escolha sua forma de pagamento abaixo:
            </p>
            <Button 
              asChild
              size="lg" 
              className={`w-full rounded-2xl text-base sm:text-lg font-black h-auto min-h-[4rem] py-4 shadow-xl hover:shadow-primary/40 transition-all whitespace-normal leading-tight uppercase tracking-tight ${
                highlighted || isThreeUnit ? "bg-gradient-to-r from-primary to-secondary" : "bg-gray-900"
              }`}
            >
              <a href={onlineLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                💳 PAGAR ONLINE AGORA
              </a>
            </Button>
            <div className="text-center">
              <p className="text-[10px] font-black text-gray-900 uppercase tracking-widest">
                💳 Pagamento Online Seguro
              </p>
              <p className="text-[11px] text-gray-500 font-bold mt-1">
                ✔ Aprovação imediata • ✔ Parcelamento disponível • ✔ Envio mais rápido
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-100">
            <Button 
              asChild
              size="lg"
              className="w-full rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-black h-auto min-h-[4rem] py-4 shadow-xl hover:scale-[1.02] transition-all uppercase tracking-tight"
            >
              <a 
                href={`https://wa.me/5591980215556?text=${encodeURIComponent("Olá quero verificar se minha cidade aceita pagamento na entrega para o Lipo Extremo")}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Truck className="w-5 h-5" />
                🚚 PAGAR NA ENTREGA
            </Button>
            <div className="text-center">
              <p className="text-[10px] font-black text-gray-900 uppercase tracking-widest">
                • Prefere pagar somente quando receber?
              </p> 
                <p className="text-[11px] text-gray-500 text-center mt-2 font-bold uppercase">
              Clique em "Pagar na Entrega" e nossa equipe verifica a disponibilidade na sua cidade agora pelo WhatsApp.
            </p>
          </div>
        </div>
    </motion.div>
  );
}
