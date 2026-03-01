import { useEffect,useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { 
  CheckCircle2, 
  ArrowRight, 
  Leaf, 
  Flame, 
  Clock, 
  ShieldCheck, 
  Truck, 
  X,
  Zap,
  ThumbsUp,
  AlertTriangle,
  Timer,
  Check,
  Star,
  ZapOff,
  Activity
} from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { OfferCard } from "../components/OfferCard";
import { SectionHeading } from "@/components/SectionHeading";
import { FloatingCTA } from "@/components/FloatingCTA";

const HERO_IMG = "/images/lipo-insta-1.jpg";
const PRODUCT_HAND = "/images/lipo-insta-2.jpg";
const PRODUCT_LIFESTYLE = "/images/lipo-insta-3.jpg";
const BEFORE_AFTER_1 = "/images/testimonial-1.jpg";
const BEFORE_AFTER_2 = "/images/testimonial-2.jpg";
const BEFORE_AFTER_3 = "/images/testimonial-3.jpg";

const UrgencyBanner = ({ text }: { text: string }) => (
  <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 px-4 text-center font-bold text-sm uppercase tracking-wider">
    <div className="container mx-auto flex items-center justify-center gap-2">
      <Timer className="w-4 h-4 animate-pulse" />
      {text}
    </div>
  </div>
);

const SectionCTA = ({ text = "QUERO EMAGRECER AGORA" }) => (
  <div className="flex justify-center px-4 mt-12">
    <ScrollLink to="pricing" smooth={true} offset={-50} className="w-full sm:w-auto">
      <Button size="lg" className="w-full sm:w-auto h-auto min-h-[4rem] py-4 px-8 text-lg sm:text-xl rounded-xl font-black bg-gradient-to-r from-primary to-secondary shadow-xl hover:shadow-primary/30 whitespace-normal leading-tight uppercase tracking-tight">
        {text}
      </Button>
    </ScrollLink>
  </div>
);

  export default function Home() {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);
const [mounted, setMounted] = useState(false);
useEffect(() => {
  setMounted(true);
}, []);

const handleSound = () => {
  if (!videoRef.current) return;

  videoRef.current.muted = false;
  videoRef.current.currentTime = 0;
  videoRef.current.play();

  setSoundOn(true);
};

const togglePlay = () => {
  if (!videoRef.current) return;

  if (videoRef.current.paused) {
    videoRef.current.play();
  } else {
    videoRef.current.pause();
  }
};
  
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const benefits = [
    {
      icon: <Flame className="w-8 h-8 text-orange-500" />,
      title: "Queima Gordura",
      desc: "Acelera o metabolismo e age diretamente na gordura localizada."
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Reduz Medidas",
      desc: "Sinta a diferença nas suas roupas já nas primeiras semanas."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Mais Energia",
      desc: "Combate o cansaço e te dá disposição para o dia todo."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Controle do Apetite",
      desc: "Reduz a ansiedade e a vontade incontrolável de comer doces."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-500" />,
      title: "Resultados Progressivos",
      desc: "Efeito duradouro que evita o temido efeito sanfona."
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-pink-500" />,
      title: "Sem Dietas Extremas",
      desc: "Emagreça com saúde sem precisar passar fome."
    }
  ];

  const steps = [
    { number: "01", title: "Faça o Pedido", desc: "Selecione seu kit ideal" },
    { number: "02", title: "Pagamento", desc: "Escolha a melhor forma" },
    { number: "03", title: "Envio", desc: "Despachamos para você" },
    { number: "04", title: "Receba", desc: "Entrega rápida em casa" },
    { number: "05", title: "Transformação", desc: "Inicie seu tratamento" }
  ];

  return (
    <div className="min-h-screen w-full bg-background overflow-x-hidden font-body">
      <FloatingCTA />
      
      <header className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-display font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              LIPO EXTREMO
            </span>
          </div>
          <ScrollLink to="pricing" smooth={true} offset={-50}>
             <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6 shadow-lg shadow-primary/20">
               QUERO EMAGRECER
             </Button>
          </ScrollLink>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-48 lg:pb-32 bg-white">
        <UrgencyBanner text="Promoção Exclusiva:Ultimas unidades com FRETE GRATÍS! " />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-200/200 via-white to-pink-200/200"></div>
        <div className="container mx-auto px-4 relative z-10 mt-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 border border-primary/20">
                <Star className="w-4 h-4 fill-current" />
                <span>MÉTODO COMPROVADO POR +5MIL DE PESSOAS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight sm:leading-[1.1] mb-6 text-gray-900">
                Cansada de tentar emagrecer e <span className="text-gradient">nada funcionar?</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-medium">
                Descubra o método que já ajudou mais de 5Mil pessoas a eliminar até 12kg sem sofrimento.
              </p>
              
              <div className="flex flex-col items-center lg:items-start gap-4 mb-8">
                <ScrollLink to="results" smooth={true} offset={-50} className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto h-auto min-h-[4.5rem] py-4 px-10 text-xl sm:text-2xl rounded-2xl font-black bg-gradient-to-r from-primary to-secondary shadow-2xl hover:shadow-primary/40 transition-all uppercase tracking-tight">
                    QUERO SABER MAIS
                  </Button>
                </ScrollLink>
                <div className="text-[10px] sm:text-xs text-gray-500 font-medium flex flex-col items-center lg:items-start gap-1">
                  <p className="flex items-center gap-1">💳 Pagamento online disponível para todo o Brasil.</p>
                  <p className="flex items-center gap-1">🚚 Pagamento na entrega disponível em regiões selecionadas.</p>
                </div>
                <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                  <Timer className="w-4 h-4 animate-pulse" />
                  <span>Estoque limitado — alta demanda esta semana.</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-gray-500 font-semibold text-sm">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Pagamento na Entrega</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> Frete Grátis</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-primary" /> 30 Dias de Garantia</div>
              </div>
            </motion.div>
            
            <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  className="relative order-first lg:order-last"
>
  <div className="absolute inset-0 bg-primary/20 rounded-full blur-[120px] transform scale-75 animate-pulse"></div>

  <div className="relative">
    <video
      ref={videoRef}
      className="relative z-10 w-full h-auto object-cover rounded-3xl"
      playsInline
      preload="metadata"
      muted
    >

      <source src="/videos/video-entrada-1.mp4" type="video/mp4" />
      Seu navegador não suporta vídeo.
    </video>

    {mounted && !soundOn && (
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-3x1 z-20">
      <button
        type="button"
        onClick={handleSound}
       className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-full text-white font-bold shadow-xl"
         >
          🔊 ATIVAR SOM
      </button>
      </div>
    )}

{soundOn && (
  <button
    onClick={togglePlay}
    className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-md z-20"
  >
    {videoRef.current?.paused ? "▶ Continuar" : "⏸ Pausar"}
  </button>
)}

  </div>

<p className="text-sm text-gray-600 mt-3 text-center">
  ⚠️ O erro que está travando seu emagrecimento pode estar sendo revelado nesse vídeo.
</p>

</motion.div>
            </div>
            </div>
            </section>

      {/* --- PROBLEM SECTION --- */}
      <section className="py-10 sm:py-12 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeading 
            title="Por que é tão difícil emagrecer sozinha?" 
            subtitle="Você não tem culpa. O sistema foi feito para te manter no ciclo da frustração." 
            centered={true}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <ZapOff className="text-red-500" />, title: "Metabolismo Lento", desc: "Seu corpo armazena gordura em vez de queimar como energia." },
              { icon: <Activity className="text-orange-500" />, title: "Efeito Sanfona", desc: "Você perde peso, mas recupera tudo em dobro pouco tempo depois." },
              { icon: <X className="text-red-600" />, title: "Inchaço Constante", desc: "A sensação de estar sempre pesada e com as roupas apertadas." },
              { icon: <AlertTriangle className="text-yellow-600" />, title: "Ansiedade Alimentar", desc: "O estresse te faz buscar refúgio em doces e carboidratos." },
              { icon: <Clock className="text-blue-600" />, title: "Falta de Tempo", desc: "Rotinas exaustivas que não deixam espaço para exercícios." },
              { icon: <ThumbsUp className="text-purple-600" />, title: "Dietas Frustradas", desc: "Promessas milagrosas que só trazem fome e desânimo." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-black text-gray-900 mb-2 uppercase text-sm tracking-widest">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <SectionCTA text="MUDAR MINHA HISTÓRIA AGORA" />
        </div>
      </section>

      {/* --- MECHANISM SECTION --- */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-2xl"></div>
              <img src={PRODUCT_HAND} alt="Lipo Extremo Tecnologia" className="relative z-10 rounded-xl shadow-2xl w-full h-auto object-cover" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-5xl font-black mb-8 leading-tight text-gray-900">
                Por que o Lipo Extremo é <span className="text-primary">Diferente</span> de tudo que você já viu?
              </h2>
              <div className="space-y-8">
                {[
                  { t: "Fórmula Avançada", d: "Combinação precisa de 7 ativos naturais que trabalham em sinergia total." },
                  { t: "Aceleração Metabólica", d: "Transforma sua gordura em fonte pura de energia para o dia todo." },
                  { t: "Redução de Retenção", d: "Dê adeus ao inchaço e sinta a leveza já nos primeiros dias." },
                  { t: "Suporte Energético", d: "Mais disposição para treinar e encarar a rotina sem cansaço." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black">
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-gray-900">{item.t}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOCIAL PROOF (REORGANIZED) --- */}
      <section id="results" className="py-12 sm:py-24 bg-gray-50 scroll-mt-16">
        <div className="container mx-auto px-4">
          <SectionHeading title="Resultados Reais de Clientes" subtitle="Veja as transformações mais impactantes de quem seguiu o tratamento" centered={true} />
          
          <div className="mt-16 space-y-24">
            {/* 1. Strongest Before/After first */}
            <div>
              <h3 className="text-2xl font-black mb-10 text-center text-gray-900 uppercase tracking-widest">Transformações em Destaque</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,].map((i) => (
                  <div key={i} className="relative group rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform transition-all hover:scale-[1.02]">
                    <img 
                      src={`/images/social-proof/ba-${i}.jpg`} 
                      alt={`Transformação Real ${i}`} 
                      className="w-full h-auto object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Testimonial Cards */}
            <div className="bg-white py-4 rounded-[3rem] shadow-xl border border-gray-100">
              <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: "Mariana S.", result: "-8kg", text: "Perdi 8kg em 2 meses, estou muito feliz! Minhas roupas voltaram a servir.", img: "/images/testimonials/user-1.jpg" },
                    { name: "Carla P.", result: "-12kg", text: "Primeira vez que consegui emagrecer sem sofrimento. O produto chegou rápido.", img: "/images/testimonials/user-2.jpg" },
                    { name: "Juliana M.", result: "-6kg", text: "Eu não acreditava muito, mas resolvi testar. Em 3 semanas já vi muita diferença!", img: "/images/testimonials/user-3.jpg" }
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary/20 mb-4 shadow-md">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex items-center gap-1 mb-4 text-yellow-400">
                        {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                      </div>
                      <p className="text-gray-600 italic mb-6 leading-relaxed">"{item.text}"</p>
                      <div className="mt-auto w-full flex items-center justify-between">
                        <span className="font-black text-gray-900">{item.name}</span>
                        <span className="bg-primary/10 text-primary font-black px-3 py-1 rounded-lg text-sm">{item.result}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. WhatsApp Prints */}
            <div>
              <h3 className="text-2xl font-black mb-10 text-center text-gray-900 uppercase tracking-widest">Feedback no WhatsApp</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white p-1 hover:rotate-1 transition-transform">
                    <img src={`/images/social-proof/wa-${i}.jpg`} alt={`WhatsApp ${i}`} className="w-full h-auto object-cover rounded-xl" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Video Testimonials */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-black mb-10 text-center text-gray-900 uppercase tracking-widest">Depoimentos em Vídeo</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                {[
                  { src: "/videos/testimonial-1.mp4", poster: "/videos/poster-1.jpg", label: "Relato Emocional" },
                  { src: "/videos/testimonial-2.mp4", poster: "/videos/poster-2.jpg", label: "Experiência de Compra" }
                ].map((v, i) => (
                  <div key={i} className="space-y-4 w-full max-w-[260px]">
                    <div className="bg-black rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[9/16] relative">
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full hMAX-H-[70VH] rounded-3x1 object-cover"
                      >
                        <source src={v.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <p className="text-center font-black text-primary uppercase text-sm tracking-tighter">{v.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <SectionCTA text="QUERO MEU RESULTADO TAMBÉM" />
        </div>
      </section>

      {/* --- SCARCITY SECTION --- */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-gray-900 to-black text-white text-center border-y border-white/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex justify-center mb-6">
            <div className="bg-red-600 text-white px-6 py-2 rounded-full font-black text-sm animate-pulse uppercase tracking-widest">
              Atenção: Oferta por Tempo Limitado
            </div>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">Últimas unidades com condição promocional.</h2>
          <p className="text-xl text-gray-400 font-medium">Não perca a chance de garantir seu kit com o maior desconto do ano.</p>
        </div>
      </section>

      {/* --- BONUS SECTION --- */}
      <section className="py-10 sm:py-14 bg-purple-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeading 
            title="🎁 BÔNUS EXCLUSIVOS POR TEMPO LIMITADO" 
            subtitle="Somente para pedidos realizados hoje enquanto durar o estoque promocional." 
            centered={true}
          />
          
          <div className="mt-8 bg-white p-8 sm:p-12 rounded-[2.5rem] border border-primary/20 shadow-xl">
            <p className="text-xl font-bold text-gray-900 mb-8 text-center">Ao finalizar seu pedido, você recebe gratuitamente:</p>


            <div className="bg-white rounded-2xl p-4 space-y-3 shadow-sm">
  <div className="flex items-center gap-2">
    <Check className="w-4 h-4 text-primary" />
    <span>Guia Sucos Detox</span>
  </div>

  <div className="flex items-center gap-2">
    <Check className="w-4 h-4 text-primary" />
    <span>Guia Prático de Lanches Saudáveis</span>
  </div>

  <div className="flex items-center gap-2">
    <Check className="w-4 h-4 text-primary" />
    <span>Cardápio Detox Power 7 Dias</span>
  </div>
</div>

            
            <div className="mt-12 p-3 bg-red-50 border-2 border-red-100 rounded-2xl text-center">
              <p className="text-red-700 font-bold mb-4 flex items-center justify-center gap-2">
                ⚠️ Esses bônus não estão disponíveis na compra comum e podem sair do ar a qualquer momento.
              </p>
              <p className="text-gray-700 text-sm font-medium">
                Após concluir sua compra, basta enviar o número do pedido no WhatsApp para receber seus bônus digitais gratuitamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- RISK REVERSAL --- */}
      <section id="garantia" className="py-12 sm:py-24 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-center mb-8">
            <ShieldCheck className="w-24 h-24 text-primary animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-black mb-6 uppercase tracking-tighter">RISCO ZERO — OU SEU DINHEIRO DE VOLTA</h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Confiamos tanto na eficácia do Lipo Extremo que oferecemos uma garantia blindada de 30 dias. 
            Se você não notar resultados, devolvemos 100% do seu investimento sem perguntas.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 font-bold text-sm uppercase tracking-widest">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            Sua satisfação é nossa prioridade absoluta
          </div>
        </div>
      </section>

      {/* --- COD TRUST BLOCK --- */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto my-10 p-6 rounded-2xl border border-green-200 bg-green-50 shadow-sm">
            <h2 className="text-2xl font-bold text-green-700 text-center mb-4">
              🚚 Pague Somente Quando Receber na Sua Casa
            </h2>
            <p className="text-gray-700 text-center mb-4">
              A entrega é realizada em até 24h (dependendo da sua região) com frete grátis.<br />
              Você só paga quando o produto chegar até você, direto com o entregador.
            </p>
            <p className="font-semibold text-green-700 text-center mb-6">
              Sem risco. Sem pagamento antecipado.
            </p>
            <div className="space-y-3 text-gray-700 max-w-md mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span><strong>À vista:</strong> Pix, Dinheiro ou Cartão de Débito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span><strong>Parcelado:</strong> Cartão de Crédito em até 12x</span>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-600 text-center">
              Entregas de segunda a sábado, das 08h às 19h (exceto domingos e feriados).
            </p>
          </div>
        </div>
      </section>

      {/* --- OFFER SECTION --- */}
      <section id="pricing" className="py-12 sm:py-24 bg-white scroll-mt-16">
        <div id="protocolo-start-7d" className="scroll-mt-32"></div>
        <div className="container mx-auto px-4">
          <SectionHeading title="Escolha Seu Tratamento" subtitle="Selecione o kit ideal para o seu objetivo de emagrecimento" centered={true} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto mt-16 items-center">
            <OfferCard 
              title="Kit Máximo (5 Potes)" price=" 12x de R$ 49,33" originalPrice="R$ 997,00" savings="R$ 520,00"
              highlighted={false}
              badge="MAIOR ECONOMIA"
              features={[
                "ou R$ 477,00 à Vista.",
                "Tratamento para 150 dias",
                "5 Potes Lipo Extremo",
                "💪 Melhor custo-benefício",
                "🎁 Guia Sucos Detox",
                "🎁 Guia Prático de Lanches Saudáveis",
                "🎁 Cardápio Detox Power 7 Dias"
              ]}
              codLink="https://entrega.logzz.com.br/pay/mem42e406/lipoextremo5potes477"
              onlineLink="https://ev.braip.com/ref?pl=pla6lvdl&ck=chel0xpl&af=afi11lgv0o"
              image={HERO_IMG}
            />
            
            <OfferCard 
              title="Kit Recomendado (3 Potes)" price="12x de R$ 28,65 " originalPrice="R$ 597,00" savings="R$ 320,00" 
              highlighted={true}
              badge="MAIS ESCOLHIDO"
              features={[
                  " ou R$ 277,00 à Vista.",
                  "Tratamento para 90 dias",
                  "3 Potes Lipo Extremo",
                  "🔥 MAIS VENDIDO",
                  "🎁 Guia Sucos Detox",
                  "🎁 Guia Prático de Lanches Saudáveis"
                ]}
              codLink="https://entrega.logzz.com.br/pay/mem42e406/xmnru-lipoextremo3potes277"
              onlineLink="https://ev.braip.com/ref?pl=plan2plq&ck=chel0xpl&af=afi11lgv0o"
              image={HERO_IMG}
            />
            <div className="bg-gray-100 rounded-2xl p-6 text-center my-8">
              <h3 className="text-xl font-bold text-gray-800">
                💡 Ainda não tem certeza?
              </h3>
              <p className="text-gray-600 mt-2">
                Se você quer testar antes de investir no tratamento completo,
                veja as opções abaixo e escolha a que faz mais sentido para você.
              </p>
            </div>
            <OfferCard 
              title="Kit Inicial (1 Pote)" price="12x de R$ 20,37" originalPrice="R$ 297,00" 
              badge=" Quero Experimentar"
              priceNote="Ideal para testar por 30 dias"
              features={[
                " ou R$ 197,00 à Vista.",
                "Tratamento para 30 dias",
                "1 Pote Lipo Extremo",
                "🎁 Guia Sucos Detox (Bônus Exclusivo)"
              ]}
              codLink="https://entrega.logzz.com.br/pay/mem42e406/lipoextremo1pote197"
              onlineLink="https://ev.braip.com/ref?pl=plaplxpw&ck=chel0xpl&af=afi11lgv0o"
              image={HERO_IMG}
            />
          </div>
        </div>
      </section>
      
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center my-8">
        <h3 className="text-xl font-bold text-green-700">
          🔰 Quer começar com investimento reduzido?
          
        </h3>
        <p className="text-gray-600 mt-2">
          Conheça o Plano Start e comece sua transformação
          com um valor mais acessível.
        </p>
      </div>
      {/* --- DIGITAL PRODUCT SECTION --- */}
      <section  id="protocolo-start-7d" className="py-12 sm:py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="relative bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col items-center">
              <div className="relative bg-white rounded-[3ren] overflow-visible shadow-2x1">

{/* Badge */}
  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30">
                <div className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-orange-100 text-orange-900 font-bold text-xs mb-6 border border-orange-400 uppercase tracking-widest">
      ULTIMAS VAGAS
    </div>
  </div>
<div className="flex flex-col items-center">
  <div className="w-full max-w-sm mb-8">
                <img 
                  src="/images/digital-product.png" 
                  alt="Protocolo Start Detox 7D" 
                  className="w-full h-auto object-contain mx-auto"

                />
              </div>
              </div>
              </div>

              <div className="w-full text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-bold text-xs mb-6 border border-green-200 uppercase tracking-widest">
                  OPÇÃO ACESSÍVEL
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2 leading-tight">
                  Protocolo Start Detox 7D™
                </h2>
                <p className="text-gray-600 font-bold mb-6">
                  Não pode investir no tratamento completo agora?<br/>
                  <span className="text-primary">Comece com o plano estratégico de 7 dias.</span>
                </p>
                
                <div className="flex items-baseline justify-center gap-2 mb-8">
                  <span className="text-gray-500 text-lg line-through">R$ 97,00</span>
                  <span className="text-4xl font-black text-gray-900">12x de R$5,47 </span>
                  {[ "ou R$ 47,00 à Vista."]}
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  O Protocolo Start Detox 7D™ é o plano ideal para quem quer iniciar o emagrecimento de forma estruturada. Em 7 dias você aprende como desinflamar, organizar sua alimentação e acelerar seus resultados com estratégia.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
                  <div className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    Plano Detox 7 Dias
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    Cardápio Estratégico +150 Receitas 
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    Guia de Lanches Saudáveis
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    Manual de Sucos Detox
                  </div>
                </div>

                <div className="space-y-3 mb-10 p-6 bg-green-50 rounded-2xl border border-green-100 text-left">
                  <p className="font-bold text-gray-900 text-sm uppercase tracking-widest mb-2">Bônus Exclusivos:</p>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    🎁 Lista de Compras Estratégica
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    🎁 Checklist Diário
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    🎁 Guia de Erros que Sabotam o Emagrecimento
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-8 p-4 bg-gray-50 rounded-xl border border-gray-200 text-left mx-auto max-w-sm">
                  <ShieldCheck className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Garantia de 7 Dias</p>
                    <p className="text-gray-600 text-xs leading-relaxed">"Se você não gostar em até 7 dias, devolvemos seu dinheiro."</p>
                  </div>
                </div>

                <Button 
                  asChild
                  size="lg" 
                  className="w-full h-auto min-h-[4rem] py-4 text-lg font-black rounded-2xl bg-gradient-to-r from-green-600 to-green-500 shadow-xl hover:shadow-green-500/30 uppercase tracking-tight"
                >
                  <a href="https://pay.cakto.com.br/xxnymio_771347" target="_blank" rel="noopener noreferrer">
                    QUERO COMEÇAR AGORA POR R$47
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading title="Dúvidas Frequentes" centered={true} />
          <Accordion type="single" collapsible className="w-full space-y-4 mt-12">
            {[
              { q: "Posso pagar na entrega em qualquer região?", a: "O pagamento na entrega está disponível para diversas regiões metropolitanas e cidades selecionadas. No checkout você poderá verificar a disponibilidade para seu CEP. O pagamento online (cartão/pix) está disponível para 100% do território nacional." },
              { q: "O pagamento online é seguro?", a: "Sim, utilizamos as plataformas Braip e Logzz, líderes em segurança de pagamentos no Brasil. Seus dados são criptografados e protegidos. O pagamento online garante o processamento imediato do seu pedido e envio via SEDEX prioritário." },
              { q: "Tem efeitos colaterais?", a: "Lipo Extremo é um suplemento 100% natural. No entanto, gestantes, lactantes e pessoas com doenças pré-existentes devem consultar um médico antes de usar." },
              { q: "Aprovado pela Anvisa?", a: "O produto é dispensado de registro conforme a RDC 240/2018, sendo fabricado seguindo rigorosos padrões de qualidade e segurança." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-gray-50 border border-gray-100 rounded-[1.5rem] px-6 py-1 overflow-hidden">
                <AccordionTrigger className="font-black text-left text-gray-900 hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-12 sm:py-24 bg-primary text-white text-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase leading-tight tracking-tighter">Comece Sua Transformação Hoje</h2>
          <ScrollLink to="pricing" smooth={true} offset={-50} className="w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto h-auto min-h-[4.5rem] py-4 px-16 text-2xl rounded-2xl font-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] whitespace-normal leading-tight uppercase tracking-tight transform hover:scale-105 transition-transform">
              RECEBER EM CASA — ESCOLHER PAGAMENTO
            </Button>
          </ScrollLink>
        </div>
      </section>

      <footer className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 text-center md:text-left max-w-6xl">
          <div>
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Distribuído por:</h4>
            <p className="text-xl font-black text-gray-900 mb-1">CICLO369 NUTRITION LTDA</p>
            <p className="text-gray-500 font-medium">CNPJ: 60.013.838/0001-41</p>
          </div>
          <div>
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Suporte ao Cliente:</h4>
            <div className="space-y-2">
              <p className="text-gray-600 font-semibold">atendimento@lipoextremohardcore.com.br</p>
              <p className="text-gray-600 font-semibold">WhatsApp: +55 91 98021-5556</p>
              <p className="text-gray-600 font-semibold">Telefone: (14) 98229-2161</p>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-[10px] text-gray-300 uppercase tracking-widest font-black">
          © {new Date().getFullYear()} Lipo Extremo. Todos os direitos reservados.
          <div className="mt-4 flex justify-center gap-8">
            <span className="hover:text-primary cursor-pointer transition-colors">Política de Privacidade</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Termos de Uso</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
