import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft, 
  Instagram, 
  Facebook, 
  Send, 
  Menu, 
  X, 
  Check, 
  MapPin, 
  Clock, 
  Phone, 
  Sparkles,
  Heart,
  Gift,
  Package,
  Mail,
  Palette
} from 'lucide-react';
import { services } from './data/services';
import { useLenis } from './hooks/useLenis';
import { fadeUp, staggerContainer, fadeLeft, fadeInSlow } from './lib/motion';

// Official WhatsApp outline SVG icon component
function WhatsAppIcon({ className = "w-16 h-16 fill-[#67C15E]" }) {
  return (
    <svg 
      viewBox="0 0 48 48" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-700.000000, -360.000000)" fill="#67C15E">
          <path d="M723.993033,360 C710.762252,360 700,370.765287 700,383.999801 C700,389.248451 701.692661,394.116025 704.570026,398.066947 L701.579605,406.983798 L710.804449,404.035539 C714.598605,406.546975 719.126434,408 724.006967,408 C737.237748,408 748,397.234315 748,384.000199 C748,370.765685 737.237748,360.000398 724.006967,360.000398 L723.993033,360.000398 L723.993033,360 Z M717.29285,372.190836 C716.827488,371.07628 716.474784,371.034071 715.769774,371.005401 C715.529728,370.991464 715.262214,370.977527 714.96564,370.977527 C714.04845,370.977527 713.089462,371.245514 712.511043,371.838033 C711.806033,372.557577 710.056843,374.23638 710.056843,377.679202 C710.056843,381.122023 712.567571,384.451756 712.905944,384.917648 C713.258648,385.382743 717.800808,392.55031 724.853297,395.471492 C730.368379,397.757149 732.00491,397.545307 733.260074,397.27732 C735.093658,396.882308 737.393002,395.527239 737.971421,393.891043 C738.54984,392.25405 738.54984,390.857171 738.380255,390.560912 C738.211068,390.264652 737.745308,390.095816 737.040298,389.742615 C736.335288,389.389811 732.90737,387.696673 732.25849,387.470894 C731.623543,387.231179 731.017259,387.315995 730.537963,387.99333 C729.860819,388.938653 729.198006,389.89831 728.661785,390.476494 C728.238619,390.928051 727.547144,390.984595 726.969123,390.744481 C726.193254,390.420348 724.021298,389.657798 721.340985,387.273388 C719.267356,385.42535 717.856938,383.125756 717.448104,382.434484 C717.038871,381.729275 717.405907,381.319529 717.729948,380.938852 C718.082653,380.501232 718.421026,380.191036 718.77373,379.781688 C719.126434,379.372738 719.323884,379.160897 719.549599,378.681068 C719.789645,378.215575 719.62006,377.735746 719.450874,377.382942 C719.281687,377.030139 717.871269,373.587317 717.29285,372.190836 Z" />
        </g>
      </g>
    </svg>
  );
}

// Detailed custom SVG butterfly component with hover & float animations
function Butterfly({ className = "w-16 h-16 text-pink-deep", style }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="currentColor" 
      className={`${className} transition-transform duration-500 hover:scale-120`}
      style={style}
    >
      {/* Body */}
      <rect x="48" y="32" width="4" height="38" rx="2" className="fill-pink-deep/80" />
      {/* Left Wing (Upper and Lower) */}
      <path d="M 48 40 C 32 12, 6 18, 10 46 C 12 62, 28 66, 48 54 C 32 72, 16 82, 11 67 C 6 52, 32 52, 48 49" className="fill-pink/50 stroke-pink-deep stroke-[1.5]" />
      {/* Right Wing (Upper and Lower) */}
      <path d="M 52 40 C 68 12, 94 18, 90 46 C 88 62, 72 66, 52 54 C 68 72, 84 82, 89 67 C 94 52, 68 52, 52 49" className="fill-pink/50 stroke-pink-deep stroke-[1.5]" />
      {/* Antennae */}
      <path d="M 49 32 Q 44 20 34 16 M 51 32 Q 56 20 66 16" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="34" cy="16" r="1.5" />
      <circle cx="66" cy="16" r="1.5" />
    </svg>
  );
}

// Safe image loader that falls back to a minimal, elegant placeholder with the circle motif
function ImageWithPlaceholder({ src, alt, className, circleSize = "w-48 h-48" }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-pink-veil flex items-center justify-center border border-grey-line/30 ${className}`}>
      {(!loaded || error) && (
        <div className="absolute inset-0 flex items-center justify-center p-16 bg-gradient-to-tr from-white via-pink-veil/40 to-white">
          <div className={`${circleSize} border border-pink-deep/50 rounded-full flex flex-col items-center justify-center text-center bg-white/40 backdrop-blur-[2px] shadow-neon relative`}>
            {/* Tiny accent butterfly inside placeholder */}
            <Butterfly className="absolute -top-4 -right-4 w-16 h-16 text-pink-deep/70 animate-float" />
            <span className="font-script text-pink-deep text-3xl mb-4 text-neon select-none">Giospy</span>
            <span className="font-sans text-[0.55rem] tracking-[0.2em] text-grey-mid uppercase select-none">
              Dettagli Unici
            </span>
          </div>
        </div>
      )}
      {!error && (
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          loading="lazy"
        />
      )}
    </div>
  );
}

function App() {
  // Activate Lenis smooth scrolling
  useLenis();

  // Scroll tracking for Navbar background fade and Scroll indicator
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Section Tracking for Navbar Active States
  const [activeSection, setActiveSection] = useState('hero');
  useEffect(() => {
    const sections = ['hero', 'chi-sono', 'servizi', 'galleria', 'negozio', 'recensioni', 'contatti'];
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      return new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      }, { rootMargin: '-40% 0px -50% 0px' });
    });

    sections.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (el && observers[idx]) observers[idx].observe(el);
    });

    return () => {
      sections.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el && observers[idx]) observers[idx].unobserve(el);
      });
    };
  }, []);

  // Services State: active modal service
  const [selectedService, setSelectedService] = useState(null);

  // Preloader State
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Gallery State: Lightbox
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const galleryItems = [
    { id: 1, src: '/images/gallery/631535025_834704796278694_803275824695326151_n.jpg', aspect: 'aspect-[3/4]', title: 'Allestimento Dettagli Confettata' },
    { id: 2, src: '/images/gallery/632836640_834702842945556_3720174263478202045_n.jpg', aspect: 'aspect-square', title: 'Composizione Battesimo' },
    { id: 3, src: '/images/gallery/632969879_834703872945453_8849651318739511180_n.jpg', aspect: 'aspect-[4/3]', title: 'Allestimento Tavolo e Fiori' },
    { id: 4, src: '/images/gallery/633083080_834702799612227_899273304496927423_n.jpg', aspect: 'aspect-[3/4]', title: 'Composizione Arco di Palloncini' },
    { id: 5, src: '/images/gallery/633303963_834705952945245_1116523771665722656_n.jpg', aspect: 'aspect-square', title: 'Dettagli Bomboniere Battesimo' },
    { id: 6, src: '/images/gallery/633716119_834704749612032_2169080066703238118_n.jpg', aspect: 'aspect-[4/3]', title: 'Scenografia Compleanno Speciale' },
    { id: 7, src: '/images/gallery/633842026_834703786278795_8032739535979596582_n.jpg', aspect: 'aspect-[3/4]', title: 'Confettata e Dettagli Regali' },
    { id: 8, src: '/images/gallery/633921020_834704729612034_2230551293785115302_n.jpg', aspect: 'aspect-square', title: 'Allestimento Bomboniere e Scatoline' },
    { id: 9, src: '/images/gallery/633932414_834705819611925_2793717015689532187_n.jpg', aspect: 'aspect-[4/3]', title: 'Sweet Table a Tema' },
    { id: 10, src: '/images/gallery/635283826_834702722945568_5033417465310315479_n.jpg', aspect: 'aspect-[3/4]', title: 'Dettagli Confezione Bomboniera' },
    { id: 11, src: '/images/gallery/636811494_839875352428305_9216875470578860843_n.jpg', aspect: 'aspect-square', title: 'Scatoline Personalizzate Giospy' },
    { id: 12, src: '/images/gallery/638293483_839875559094951_4218435661900675763_n.jpg', aspect: 'aspect-[4/3]', title: 'Allestimento Torta Scenografica' },
    { id: 13, src: '/images/gallery/639491660_839875329094974_2173645640516293311_n.jpg', aspect: 'aspect-[3/4]', title: 'Angolo Regali e Bomboniere' },
    { id: 14, src: '/images/gallery/639814993_839875429094964_3922714330503082606_n.jpg', aspect: 'aspect-square', title: 'Segnaposto Calligrafato a Mano' }
  ];

  // Testimonials list representing real Google Reviews
  const testimonials = [
    {
      author: "Laura Ferrandes",
      quote: "Ha creato l'allestimento per il battesimo della mia bimba: tutto stupendo, curato in ogni dettaglio. Davvero una professionista impeccabile.",
      stars: 5,
      date: "3 settimane fa"
    },
    {
      author: "Marta Rosella",
      quote: "Ha capito a pieno le mie esigenze e ne ha tirato fuori un capolavoro. Giorgia è in grado di leggere nella mente dei suoi clienti.",
      stars: 5,
      date: "1 mese fa"
    },
    {
      author: "Ilaria Maiulini",
      quote: "Tutto meraviglioso, oltre le aspettative. Una garanzia assoluta per qualsiasi tipo di evento speciale a Latina.",
      stars: 5,
      date: "2 mesi fa"
    },
    {
      author: "Federica Di Mario",
      quote: "Bomboniere e partecipazioni fatte con una cura pazzesca. Giorgia è gentilissima e super disponibile, consigliatissima!",
      stars: 5,
      date: "3 mesi fa"
    },
    {
      author: "Silvia Coletta",
      quote: "Lo showroom a Latina è delizioso, ti fa sognare solo ad entrarci. Allestimenti di altissima classe per il battesimo di mio figlio.",
      stars: 5,
      date: "2 settimane fa"
    },
    {
      author: "Chiara Valente",
      quote: "Giorgia ha curato la confettata e i dettagli del nostro matrimonio. Invitati entusiasti e scenografia da favola. Grazie di cuore!",
      stars: 5,
      date: "4 mesi fa"
    },
    {
      author: "Valentina Rossi",
      quote: "Professionalità, eleganza e creatività. Se cercate un evento che lasci il segno a Latina, Giospy è la scelta migliore.",
      stars: 5,
      date: "1 mese fa"
    },
    {
      author: "Giulia Mancini",
      quote: "Ho ordinato dei gadget personalizzati per la nascita di mio nipote. Consegna puntuale e lavoro raffinatissimo.",
      stars: 5,
      date: "5 giorni fa"
    }
  ];

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    tipoEvento: 'Battesimo',
    data: '',
    messaggio: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // TODO: collegare a /api/contact (Vercel serverless)
  };

  const resetForm = () => {
    setFormData({
      nome: '',
      email: '',
      telefono: '',
      tipoEvento: 'Battesimo',
      data: '',
      messaggio: ''
    });
    setFormSubmitted(false);
  };

  // Close Lightbox on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight' && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
      }
      if (e.key === 'ArrowLeft' && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  // Floating Progress Circle WhatsApp widget
  const { scrollYProgress } = useScroll();
  const radius = 20;
  const strokeWidth = 1.5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [circumference, 0]);

  return (
    <div className="min-h-screen bg-white text-graphite overflow-x-hidden selection:bg-pink-veil selection:text-graphite">
      
      {/* 0. PRELOADER */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              y: "-100%",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-[9999] bg-offwhite flex flex-col items-center justify-center select-none"
          >
            <div className="relative flex flex-col items-center justify-center">
              
              {/* Glowing pink halo behind logo */}
              <div className="absolute w-[200px] h-[200px] bg-pink-veil rounded-full filter blur-[40px] opacity-70 animate-pulse pointer-events-none" />

              {/* Logo in the center (enlarged) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 w-[220px] h-[220px] flex items-center justify-center"
              >
                <img src="/images/logo/logo giorgia.png" alt="Giospy Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(201,155,150,0.3)]" />
              </motion.div>
              {/* Script name with fade-in delay */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-4 flex flex-col items-center gap-4"
              >
                <span className="font-script text-4xl text-graphite transform -rotate-[2deg]">Giospy</span>
                <span className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-grey-mid font-semibold">Event Planner</span>
              </motion.div>

              {/* Loading progress bar directly under the text */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-24 w-[200px] h-[4px] bg-pink-veil rounded-full overflow-hidden relative"
              >
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                  className="h-full bg-pink-deep rounded-full"
                />
              </motion.div>

              {/* First floating butterfly (top-right, enlarged and solid) */}
              <motion.div
                initial={{ opacity: 0, scale: 0, x: -50, y: 50 }}
                animate={{ opacity: 1, scale: 1, x: 80, y: -100 }}
                transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
                className="absolute"
              >
                <Butterfly className="w-32 h-32 text-pink-deep animate-float" />
              </motion.div>

              {/* Second floating butterfly (bottom-left, solid) */}
              <motion.div
                initial={{ opacity: 0, scale: 0, x: 50, y: -50 }}
                animate={{ opacity: 1, scale: 1, x: -95, y: 95 }}
                transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                className="absolute"
              >
                <Butterfly className="w-24 h-24 text-pink-deep animate-float-slow" style={{ animationDelay: '0.4s' }} />
              </motion.div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 1. NAVBAR */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md py-8 border-b border-grey-line' : 'bg-transparent py-16 border-b border-transparent'
      }`}>
        <div className="max-w-[1440px] mx-auto px-24 md:px-48 flex items-center justify-between">
          <a href="#hero" className="hover:opacity-80 transition-opacity flex items-center gap-16">
            <img src="/images/logo/logo giorgia.png" alt="Giospy Logo" className="h-64 w-auto object-contain" />
            <div className="flex flex-col text-left">
              <span className="font-script text-2xl leading-none text-graphite transform -rotate-[2deg]">Giospy</span>
              <span className="font-sans text-[0.55rem] tracking-[0.25em] uppercase text-grey-mid font-semibold mt-4">Event Planner</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-48 font-sans">
            {[
              { id: 'chi-sono', label: 'Chi sono' },
              { id: 'servizi', label: 'Servizi' },
              { id: 'galleria', label: 'Galleria' },
              { id: 'negozio', label: 'Il Negozio' },
              { id: 'recensioni', label: 'Recensioni' },
              { id: 'contatti', label: 'Contatti' }
            ].map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className={`text-[0.8125rem] uppercase tracking-[0.14em] transition-colors duration-300 relative py-8 ${
                  activeSection === link.id ? 'text-graphite font-normal' : 'text-grey-mid hover:text-graphite'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-pink"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a 
              href="#contatti" 
              className="bg-pink text-graphite hover:bg-pink-deep hover:text-white px-24 py-8 text-[0.8125rem] uppercase tracking-[0.14em] transition-all duration-300 rounded-full"
            >
              Richiedi un preventivo
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button 
            className="md:hidden text-graphite p-8 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Apri menu"
          >
            <Menu className="w-24 h-24" />
          </button>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-50 flex flex-col justify-between p-32"
          >
            <div className="flex items-center justify-between border-b border-grey-line pb-16">
              <img src="/images/logo/logo giorgia.png" alt="Giospy Logo" className="h-48 w-auto object-contain" />
              <button onClick={() => setMobileMenuOpen(false)} aria-label="Chiudi menu" className="p-8 text-graphite">
                <X className="w-24 h-24" />
              </button>
            </div>

            {/* Decorative background circle motif */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
              <div className="w-[300px] h-[300px] border border-graphite rounded-full" />
            </div>

            <nav className="flex flex-col gap-24 my-auto items-center">
              {[
                { id: 'chi-sono', label: 'Chi sono' },
                { id: 'servizi', label: 'Servizi' },
                { id: 'galleria', label: 'Galleria' },
                { id: 'negozio', label: 'Il Negozio' },
                { id: 'recensioni', label: 'Recensioni' },
                { id: 'contatti', label: 'Contatti' }
              ].map((link) => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-graphite hover:text-pink transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-16 items-center">
              <a 
                href="https://wa.me/393935601713" 
                target="_blank" 
                rel="noreferrer"
                className="w-full text-center bg-pink text-graphite py-8 text-[0.8125rem] uppercase tracking-[0.14em] rounded-full"
              >
                Scrivimi su WhatsApp
              </a>
              <span className="text-[0.7rem] text-grey-mid tracking-widest uppercase">Latina, Via dei Volsci 115</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      <section id="hero" className="relative pt-96 md:pt-128 pb-160 bg-white">
        <div className="max-w-[1440px] mx-auto px-24 md:px-48 grid grid-cols-1 lg:grid-cols-12 gap-48 items-center">
          
          {/* Hero text */}
          <motion.div 
            initial="hidden"
            animate={loading ? "hidden" : "visible"}
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col items-start relative w-full"
          >
            {/* Left Side Butterfly - Middle Right (flying wide) */}
            <Butterfly className="absolute top-[30%] -right-32 w-12 h-12 text-pink-deep animate-fly-2 pointer-events-none select-none hidden md:block" style={{ animationDelay: '1s' }} />

            {/* Left Side Butterfly - Top Middle (flying wide) */}
            <Butterfly className="absolute -top-16 left-64 w-8 h-8 text-pink-deep animate-fly-3 pointer-events-none select-none hidden sm:block" style={{ animationDelay: '2s' }} />
            <motion.span variants={fadeUp} className="text-[0.7rem] font-sans font-medium uppercase tracking-[0.3em] text-grey-mid mb-24 block">
              EVENT PLANNER · LATINA
            </motion.span>
            
            <motion.h1 
              variants={fadeUp}
              className="text-[clamp(2.3rem,6vw,4.5rem)] font-serif font-light text-graphite leading-[1.08] tracking-[-0.01em] mb-32"
            >
              Immagina il tuo allestimento, <br />
              <span className="text-pink-deep font-serif italic font-normal">chiudi gli occhi</span>.<br />
              Al resto penso io.
            </motion.h1>

            <motion.p variants={fadeUp} className="font-sans text-[1.0625rem] leading-[1.8] text-grey-mid max-w-[500px] mb-48">
              Allestimenti, bomboniere e personalizzazioni per nascite, battesimi, compleanni ed eventi. Curati in ogni dettaglio, su misura per voi.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-24 w-full sm:w-auto">
              <a 
                href="https://wa.me/393935601713" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink hover:bg-pink-deep text-graphite hover:text-white px-24 py-8 text-[0.8125rem] uppercase tracking-[0.14em] transition-all duration-300 rounded-full text-center flex items-center justify-center gap-8 group"
              >
                <WhatsAppIcon className="w-16 h-16 fill-current" />
                Scrivimi su WhatsApp
              </a>
              <a 
                href="#servizi" 
                className="border border-grey-line hover:border-graphite text-graphite px-24 py-8 text-[0.8125rem] uppercase tracking-[0.14em] transition-all duration-300 rounded-full text-center"
              >
                Scopri i servizi
              </a>
            </motion.div>
          </motion.div>

          {/* Overlapping Boutique Collage: Neon Wall Sign & Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={loading ? { opacity: 0, scale: 0.96 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative w-full h-[400px] sm:h-[480px]"
          >
            {/* Background glowing blob */}
            <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] bg-pink-veil/50 rounded-full filter blur-[80px] -z-10 pointer-events-none" />

            {/* Floating Logo with Neon Glow (without circular frame container) */}
            <div className="absolute -left-8 sm:-left-32 top-12 w-[280px] h-[280px] sm:w-[480px] sm:h-[480px] flex items-center justify-center z-10 select-none">
              <img src="/images/logo/logo giorgia.png" alt="Giospy Allestimenti Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(201,155,150,0.45)]" />

              {/* Butterflies directly flitting around the neon sign */}
              <Butterfly className="absolute -top-6 -left-4 w-20 h-20 sm:w-32 sm:h-32 text-pink-deep animate-float-slow" />
              <Butterfly className="absolute top-8 -right-6 w-12 h-12 sm:w-16 sm:h-16 text-pink-deep animate-float" style={{ animationDelay: '2s' }} />
              <Butterfly className="absolute -bottom-4 right-16 w-12 h-12 sm:w-16 sm:h-16 text-pink-deep animate-float-fast" style={{ animationDelay: '1.2s' }} />
            </div>

            {/* Overlapping Portrait Image with elegant arches / smooth rounded corners */}
            <div className="absolute right-8 sm:right-48 bottom-12 w-[140px] h-[190px] sm:w-[230px] sm:h-[310px] rounded-t-[100px] rounded-b-[30px] overflow-hidden border-[6px] border-white shadow-xl bg-pink-veil z-20">
              <ImageWithPlaceholder 
                src="/images/hero.jpg" 
                alt="Giorgia, Giospy Event Planner" 
                className="w-full h-full object-cover"
                circleSize="w-48 h-48"
              />
            </div>

            {/* Tiny badges or extra detail layers for boutique styling */}
            <div className="absolute bottom-2 left-12 bg-white/90 backdrop-blur-sm border border-pink-deep/20 px-16 py-8 rounded-full shadow-sm z-30 flex items-center gap-8 animate-float">
              <span className="w-6 h-6 bg-pink-deep rounded-full animate-ping" />
              <span className="text-[0.6rem] font-sans font-medium uppercase tracking-[0.15em] text-graphite">
                Showroom Aperto
              </span>
            </div>

            {/* Moved from left side: now floats on the right near the badge (flying wide) */}
            <Butterfly className="absolute bottom-16 left-32 w-10 h-10 text-pink-deep animate-fly-1 pointer-events-none select-none" style={{ animationDelay: '0.5s' }} />

          </motion.div>

        </div>

        {/* Bottom Center Butterfly (occupies the empty middle space) */}
        <Butterfly className="absolute top-[60%] left-[45%] w-14 h-14 text-pink-deep animate-fly-3 pointer-events-none select-none z-10 hidden lg:block" style={{ animationDelay: '1.5s' }} />

      </section>


      {/* 3. ABOUT SECTION ("Chi sono") */}
      <section id="chi-sono" className="py-64 lg:py-160 bg-offwhite border-y border-grey-line/40 relative overflow-hidden">
        {/* Soft background glow blobs */}
        <div className="absolute -left-96 top-12 w-[400px] h-[400px] bg-pink-veil/40 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute -right-96 bottom-12 w-[400px] h-[400px] bg-pink-veil/30 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-[1140px] mx-auto px-24 md:px-48 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-64 items-center">
            
            {/* Left Photo - Asymmetric boutique detail */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInSlow}
              className="lg:col-span-5"
            >
              <div className="relative overflow-visible">
                {/* Floating butterfly sitting on the frame */}
                <Butterfly className="absolute -top-6 -right-6 w-24 h-24 text-pink-deep animate-float" style={{ animationDelay: '0.5s' }} />
                
                <div className="rounded-[36px] overflow-hidden aspect-[3/4] w-full border-[8px] border-pink-veil shadow-sm transition-transform duration-500 hover:rotate-2 hover:scale-[1.01] hover:shadow-md">
                  <ImageWithPlaceholder 
                    src="/images/chi sono/Screenshot 2026-07-13 180044.png" 
                    alt="Giorgia, Giospy Event Planner" 
                    className="w-full h-full object-cover"
                    circleSize="w-48 h-48"
                  />
                </div>
              </div>
              <span className="text-[0.7rem] font-sans uppercase tracking-[0.2em] text-grey-mid mt-24 block text-right font-light italic">
                La cura nei particolari · Latina
              </span>
            </motion.div>

            {/* Right details */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <motion.span variants={fadeLeft} className="text-[0.7rem] font-sans font-medium uppercase tracking-[0.3em] text-grey-mid mb-24 block">
                CHI SONO
              </motion.span>

              <motion.blockquote 
                variants={fadeLeft}
                className="text-graphite font-serif font-light italic text-[clamp(1.35rem,2.2vw,1.9rem)] leading-[1.4] mb-32 relative pl-24 border-l border-pink-deep"
              >
                "Ogni evento parte da un'idea vostra. Il mio lavoro è renderla reale, esattamente come l'avevate immaginata."
              </motion.blockquote>

              <motion.p variants={fadeLeft} className="font-sans text-[1.0625rem] leading-[1.8] text-grey-mid mb-24">
                Sono Giorgia, event planner. Nel mio negozio a Latina progetto allestimenti su misura e curo ogni dettaglio, dalle bomboniere alle partecipazioni.
              </motion.p>

              <motion.p variants={fadeLeft} className="font-sans text-[1.0625rem] leading-[1.8] text-grey-mid mb-48">
                Amo le cose semplici e curate: uno stile essenziale, elegante, che lascia parlare i dettagli. Credo che la vera eleganza stia nella sottrazione, non nell'eccesso.
              </motion.p>

              <motion.div variants={fadeLeft} className="w-full">
                <hr className="border-t border-grey-line mb-24" />
                <div className="flex flex-wrap gap-8 font-serif italic text-[0.95rem] text-pink-deep">
                  <span className="bg-pink-veil/70 px-16 py-8 rounded-full border border-pink/25 hover:bg-pink-veil transition-colors select-none">Allestimenti</span>
                  <span className="bg-pink-veil/70 px-16 py-8 rounded-full border border-pink/25 hover:bg-pink-veil transition-colors select-none">Bomboniere</span>
                  <span className="bg-pink-veil/70 px-16 py-8 rounded-full border border-pink/25 hover:bg-pink-veil transition-colors select-none">Partecipazioni</span>
                  <span className="bg-pink-veil/70 px-16 py-8 rounded-full border border-pink/25 hover:bg-pink-veil transition-colors select-none">Personalizzazioni</span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 4. SERVICES SECTION ("Servizi") */}
      <section id="servizi" className="py-64 lg:py-160 bg-white relative overflow-hidden">
        {/* Soft background glow blobs */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-veil/30 rounded-full filter blur-[150px] pointer-events-none" />

        <div className="max-w-[1140px] mx-auto px-24 md:px-48 relative z-10">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-64 text-center md:text-left"
          >
            <motion.span variants={fadeLeft} className="text-[0.7rem] font-sans font-medium uppercase tracking-[0.3em] text-grey-mid mb-16 block">
              SERVIZI
            </motion.span>
            <motion.h2 variants={fadeLeft} className="text-[clamp(2.2rem,3.8vw,3.2rem)] font-serif font-light text-graphite leading-[1.15]">
              Cosa posso realizzare per te
            </motion.h2>
            <motion.div variants={fadeInSlow} className="w-48 h-[1px] bg-pink-deep mx-auto md:mx-0 mt-16" />
          </motion.div>

          {/* Grid Layout of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32">
            {services.map((service) => {
              // Icon mapping based on service ID
              let IconComponent = Sparkles;
              if (service.id === "allestimenti") IconComponent = Sparkles;
              else if (service.id === "nascite-battesimi") IconComponent = Heart;
              else if (service.id === "compleanni-feste") IconComponent = Gift;
              else if (service.id === "bomboniere") IconComponent = Package;
              else if (service.id === "partecipazioni") IconComponent = Mail;
              else if (service.id === "personalizzazioni") IconComponent = Palette;

              return (
                <motion.div 
                  key={service.id}
                  layout
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInSlow}
                  className="bg-white border border-pink-veil/85 rounded-[24px] p-32 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col justify-between relative group hover:-translate-y-4"
                >
                  <div>
                    {/* Top small glowing circle with neon icon */}
                    <div className="w-48 h-48 rounded-full border border-pink bg-pink-veil/20 flex items-center justify-center shadow-neon text-pink-deep text-neon relative mb-24 group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-24 h-24 filter drop-shadow-[0_0_3px_rgba(201,155,150,0.65)]" />
                    </div>

                    <h3 className="text-2xl font-serif text-graphite font-normal mb-12">
                      {service.title}
                    </h3>
                    
                    <p className="text-grey-mid font-sans text-[0.9rem] leading-relaxed mb-16 font-light">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-16 pt-16 border-t border-grey-line/25">
                    {/* Toggle expand button to open global modal */}
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="text-[0.75rem] font-sans uppercase tracking-[0.1em] text-pink-deep hover:text-graphite transition-colors duration-300 flex items-center gap-4 font-semibold"
                    >
                      Scopri dettagli
                      <ChevronRight className="w-16 h-16" />
                    </button>

                    <a 
                      href={`https://wa.me/393935601713?text=Ciao%20Giorgia,%20vorrei%20informazioni%20su%20${encodeURIComponent(service.title)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-graphite hover:text-[#25D366] transition-colors p-4"
                      title="Richiedi informazioni su WhatsApp"
                    >
                      <WhatsAppIcon className="w-16 h-16 fill-current" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 5. GALLERY SECTION ("Galleria") */}
      <section id="galleria" className="py-64 lg:py-160 bg-offwhite border-y border-grey-line/40">
        <div className="max-w-[1140px] mx-auto px-24 md:px-48">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-64 flex flex-col md:flex-row md:items-end justify-between gap-24"
          >
            <div>
              <motion.span variants={fadeLeft} className="text-[0.7rem] font-sans font-medium uppercase tracking-[0.3em] text-grey-mid mb-16 block">
                GALLERIA
              </motion.span>
              <motion.h2 variants={fadeLeft} className="text-[clamp(2rem,3.5vw,3rem)] font-serif font-light text-graphite leading-[1.15]">
                Le mie realizzazioni
              </motion.h2>
            </div>
            <motion.p variants={fadeInSlow} className="font-sans text-[0.95rem] text-grey-mid max-w-[320px] font-light">
              Ogni immagine racconta un frammento di sogni realizzati, bomboniere curate ed eventi indimenticabili.
            </motion.p>
          </motion.div>

          {/* Editorial Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-24">
            {galleryItems.slice(0, showAllPhotos ? galleryItems.length : 6).map((item, index) => (
              <motion.div 
                key={item.id} 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInSlow}
                className="break-inside-avoid mb-24 group relative cursor-pointer overflow-hidden border border-pink-veil/60 bg-white rounded-[24px] shadow-sm hover:shadow-[0_0_24px_rgba(219,165,160,0.95)] hover:border-pink-deep/60 transition-all duration-500 hover:-translate-y-2"
                onClick={() => setLightboxIndex(index)}
              >
                <div className={`relative ${item.aspect} w-full overflow-hidden rounded-[23px]`}>
                  <ImageWithPlaceholder 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full hover:scale-105 transition-transform duration-700 ease-out"
                    circleSize="w-24 h-24"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {!showAllPhotos && (
            <div className="flex justify-center mt-48">
              <button 
                onClick={() => setShowAllPhotos(true)}
                className="bg-pink hover:bg-pink-deep text-graphite hover:text-white px-24 py-8 text-[0.8125rem] uppercase tracking-[0.14em] transition-all duration-300 rounded-full font-medium shadow-sm hover:shadow-[0_0_15px_rgba(219,165,160,0.4)] text-center"
              >
                Vedi tutte le foto
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex items-center justify-center p-24"
            onClick={() => setLightboxIndex(null)}
          >
            <div className="absolute top-24 right-24 flex items-center gap-16">
              <span className="text-[0.8rem] font-sans text-grey-mid tracking-widest uppercase">
                {lightboxIndex + 1} / {galleryItems.length}
              </span>
              <button 
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
                className="p-8 text-graphite hover:text-pink transition-colors"
                aria-label="Chiudi"
              >
                <X className="w-24 h-24" />
              </button>
            </div>

            {/* Prev Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
              }}
              className="absolute left-16 md:left-32 p-16 text-graphite hover:text-pink-deep transition-colors"
              aria-label="Precedente"
            >
              <ChevronLeft className="w-32 h-32" />
            </button>

            {/* Lightbox content */}
            <div 
              className="max-w-[800px] max-h-[80vh] flex flex-col items-center gap-16"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full overflow-hidden border border-grey-line bg-pink-veil flex items-center justify-center">
                <img 
                  src={galleryItems[lightboxIndex].src} 
                  alt={galleryItems[lightboxIndex].title} 
                  className="max-w-full max-h-[70vh] object-contain"
                  onError={(e) => {
                    // Fail gracefully by hiding image and showing fallback inline
                    e.target.style.display = 'none';
                  }}
                />
                {/* Visual placeholder inside lightbox if image fails to load */}
                <div className="w-[400px] h-[400px] flex-col items-center justify-center p-24 text-center hidden error-fallback bg-pink-veil">
                  <div className="w-64 h-64 border border-pink rounded-full mx-auto flex items-center justify-center mb-16">
                    <span className="font-script text-pink text-3xl">G</span>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-grey-mid">Immagine Bozza</span>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
              }}
              className="absolute right-16 md:right-32 p-16 text-graphite hover:text-pink-deep transition-colors"
              aria-label="Successivo"
            >
              <ChevronRight className="w-32 h-32" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>


      {/* 6. SHOP SECTION ("Il negozio") */}
      <section id="negozio" className="py-64 lg:py-160 bg-offwhite border-b border-grey-line/40 relative overflow-hidden">
        {/* Glowing backdrop blob */}
        <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-pink-veil/40 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="max-w-[1140px] mx-auto px-24 md:px-48 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-64 items-center">
                {/* Left Column: Text details */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-6 flex flex-col items-start"
            >
              <motion.span variants={fadeLeft} className="text-[0.7rem] font-sans font-medium uppercase tracking-[0.3em] text-grey-mid mb-24 block">
                IL NEGOZIO
              </motion.span>
              
              <motion.h2 
                variants={fadeLeft}
                className="text-[clamp(2.2rem,3.8vw,3.2rem)] font-serif font-light text-graphite leading-[1.15] mb-24"
              >
                Vieni nel mio Showroom
              </motion.h2>

              <motion.p variants={fadeLeft} className="font-sans text-[1.0625rem] leading-[1.8] text-grey-mid mb-32">
                Uno spazio accogliente e curato a Latina dove poter vedere, toccare con mano e scegliere insieme ogni singolo dettaglio per il tuo evento speciale. Qui trovi i campionari di partecipazioni, bomboniere, allestimenti di prova e la celebre parete neon circolare.
              </motion.p>

              {/* Specific info rows formatted as boutique pills */}
              <motion.div variants={fadeLeft} className="flex flex-col gap-16 w-full mb-48 text-graphite font-sans">
                <div className="flex items-center gap-16 p-16 bg-white border border-pink-veil/60 rounded-2xl shadow-sm hover:border-pink-deep/40 transition-all duration-300">
                  <div className="w-48 h-48 rounded-full border border-pink bg-pink-veil/20 flex items-center justify-center shadow-neon text-pink-deep shrink-0">
                    <MapPin className="w-16 h-16 shrink-0 filter drop-shadow-[0_0_3px_rgba(201,155,150,0.65)]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.65rem] font-sans uppercase tracking-widest text-grey-mid">Indirizzo</span>
                    <span className="text-[0.95rem] font-light">Via dei Volsci 115, 04100 Latina (LT)</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-16 p-16 bg-white border border-pink-veil/60 rounded-2xl shadow-sm hover:border-pink-deep/40 transition-all duration-300">
                  <div className="w-48 h-48 rounded-full border border-pink bg-pink-veil/20 flex items-center justify-center shadow-neon text-pink-deep shrink-0">
                    <Clock className="w-16 h-16 shrink-0 filter drop-shadow-[0_0_3px_rgba(201,155,150,0.65)]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.65rem] font-sans uppercase tracking-widest text-grey-mid">Orari Showroom</span>
                    <span className="text-[0.95rem] font-light font-medium">Martedì – Sabato: 09:30 - 12:30 | 16:00 - 19:00</span>
                  </div>
                </div>

                <div className="flex items-center gap-16 p-16 bg-white border border-pink-veil/60 rounded-2xl shadow-sm hover:border-pink-deep/40 transition-all duration-300">
                  <div className="w-48 h-48 rounded-full border border-pink bg-pink-veil/20 flex items-center justify-center shadow-neon text-pink-deep shrink-0">
                    <Phone className="w-16 h-16 shrink-0 filter drop-shadow-[0_0_3px_rgba(201,155,150,0.65)]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[0.65rem] font-sans uppercase tracking-widest text-grey-mid">Contatto Diretto</span>
                    <span className="text-[0.95rem] font-light font-semibold">+39 393 560 1713</span>
                  </div>
                </div>
              </motion.div>

              <motion.a 
                variants={fadeLeft}
                href="https://maps.google.com/?q=Giospy+Via+dei+Volsci+115+Latina" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink hover:bg-pink-deep text-graphite hover:text-white px-24 py-10 text-[0.75rem] uppercase tracking-[0.12em] transition-all duration-300 rounded-[20px] font-medium shadow-sm hover:shadow-[0_0_15px_rgba(219,165,160,0.4)] text-center inline-flex items-center justify-center gap-12 group w-fit mt-8"
              >
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left leading-normal">
                  <span>Ottieni indicazioni</span>
                  <span>su Google Maps</span>
                </div>
                <MapPin className="w-16 h-16 text-graphite group-hover:text-white transition-colors shrink-0" />
              </motion.a>
            </motion.div>

            {/* Right Column: Single Shop Photo */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInSlow}
              className="lg:col-span-6 relative"
            >
              <div className="relative overflow-visible">
                {/* Accent butterfly on the corner of the picture */}
                <Butterfly className="absolute -top-6 -left-6 w-16 h-16 text-pink-deep animate-float" />
                
                <div className="rounded-[36px] overflow-hidden aspect-[3/4] w-full border-[8px] border-pink-veil shadow-sm transition-transform duration-500 hover:rotate-2 hover:scale-[1.01] hover:shadow-md">
                  <ImageWithPlaceholder 
                    src="/images/negozio.jpeg" 
                    alt="Negozio Giospy - Via dei Volsci 115 Latina" 
                    className="w-full h-full object-cover"
                    circleSize="w-48 h-48"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION ("Recensioni") */}
      <section id="recensioni" className="py-64 lg:py-160 bg-offwhite/40 overflow-hidden border-t border-grey-line/25">
        <div className="max-w-[1440px] mx-auto px-24 relative z-10">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-64 text-center"
          >
            {/* Google-Branded header */}
            <div className="flex items-center justify-center gap-12 mb-16">
              {/* Google G logo */}
              <svg viewBox="0 0 24 24" className="w-32 h-32 shrink-0">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <motion.h2 variants={fadeLeft} className="text-[clamp(2.2rem,3.8vw,3.2rem)] font-serif font-light text-graphite leading-none">
                Recensioni su Google
              </motion.h2>
            </div>
            
            <motion.div variants={fadeLeft} className="flex flex-wrap items-center justify-center gap-16 text-grey-mid font-sans text-[0.85rem] font-light">
              <span className="font-semibold text-graphite">Valutazione: 4.9 / 5.0</span>
              <div className="flex text-yellow-500 text-lg">★★★★★</div>
              <span>Basato su 22 recensioni reali</span>
            </motion.div>
            
            <motion.div variants={fadeInSlow} className="w-48 h-[1px] bg-pink-deep mx-auto mt-24" />
          </motion.div>

          {/* Scrolling Marquee container */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInSlow}
            className="w-full relative overflow-visible py-16"
          >
            <div className="animate-marquee hover:[animation-play-state:paused] flex gap-24 py-16">
              
              {/* Render testimonials list twice for seamless infinite scrolling */}
              {[...testimonials, ...testimonials].map((t, index) => (
                <div 
                  key={index} 
                  className="w-[320px] md:w-[360px] shrink-0 bg-white border border-grey-line/50 rounded-3xl p-24 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between select-none relative group hover:border-pink-deep/30"
                >
                  <div>
                    {/* Header: Google branding per card */}
                    <div className="flex items-center justify-between mb-16">
                      <div className="flex items-center gap-12">
                        {/* Dummy avatar with letter */}
                        <div className="w-48 h-48 rounded-full bg-pink-veil flex items-center justify-center text-pink-deep font-sans font-semibold text-[1rem] uppercase shrink-0">
                          {t.author.charAt(0)}
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[0.85rem] font-sans font-medium text-graphite tracking-tight leading-tight">
                            {t.author}
                          </span>
                          <span className="text-[0.65rem] font-sans text-grey-mid/80 font-light mt-2">
                            {t.date}
                          </span>
                        </div>
                      </div>
                      
                      {/* Google color branded minimal 'G' */}
                      <svg viewBox="0 0 24 24" className="w-16 h-16 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </div>

                    {/* Stars in gold/yellow */}
                    <div className="flex text-yellow-500 text-[0.8rem] gap-2 mb-8">
                      {"★".repeat(t.stars)}
                    </div>

                    {/* Quote */}
                    <p className="text-graphite font-sans font-light text-[0.85rem] leading-[1.6] text-left">
                      "{t.quote}"
                    </p>
                  </div>
                </div>
              ))}
              
            </div>
          </motion.div>



        </div>
      </section>


      {/* 8. CONTACT SECTION ("Contatti") */}
      <section id="contatti" className="py-64 lg:py-160 bg-offwhite border-t border-grey-line/40">
        <div className="max-w-[1140px] mx-auto px-24 md:px-48">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-64 items-start">
            
            {/* Left Column info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-5 flex flex-col items-start w-full"
            >
              <motion.span variants={fadeLeft} className="text-[0.7rem] font-sans font-medium uppercase tracking-[0.3em] text-grey-mid mb-24 block">
                CONTATTI
              </motion.span>
              
              <motion.h2 
                variants={fadeLeft}
                className="text-[clamp(2rem,3.5vw,3rem)] font-serif font-light text-graphite leading-[1.15] mb-24"
              >
                Raccontami la tua idea
              </motion.h2>

              <motion.p variants={fadeLeft} className="font-sans text-[1.0625rem] leading-[1.8] text-grey-mid mb-48 max-w-[420px]">
                Scrivimi su WhatsApp o compila il modulo a fianco: sarò felice di ascoltarti e risponderti con una proposta personalizzata su misura.
              </motion.p>

              {/* WhatsApp Button */}
              <motion.div variants={fadeLeft} className="w-full sm:w-auto mb-48">
                <a 
                  href="https://wa.me/393935601713" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-pink hover:bg-pink-deep text-graphite hover:text-white px-24 py-8 text-[0.8125rem] uppercase tracking-[0.14em] transition-all duration-300 rounded-full inline-flex items-center justify-center gap-12 group font-medium"
                >
                  <WhatsAppIcon className="w-16 h-16 shrink-0" />
                  Messaggio su WhatsApp
                </a>
              </motion.div>

              {/* Styled Contact details */}
              <motion.div variants={fadeLeft} className="w-full border-t border-grey-line pt-32 flex flex-col gap-16 text-[0.85rem] font-sans text-grey-mid font-light">
                <div className="flex items-center gap-12">
                  <div className="w-32 h-32 rounded-full bg-pink-veil flex items-center justify-center text-pink-deep shrink-0">
                    <MapPin className="w-16 h-16" />
                  </div>
                  <span>Via dei Volsci 115, 04100 Latina (LT)</span>
                </div>
                <div className="flex items-center gap-12">
                  <div className="w-32 h-32 rounded-full bg-pink-veil flex items-center justify-center text-pink-deep shrink-0">
                    <Mail className="w-16 h-16" />
                  </div>
                  <a href="mailto:info@giospy.it" className="hover:text-pink-deep transition-colors">info@giospy.it</a>
                </div>
                <div className="flex flex-wrap items-center gap-12 text-[0.7rem] tracking-wider text-grey-mid/60 mt-8 pt-16 border-t border-grey-line/45">
                  <span>Giospy di Giorgia</span>
                  <span>•</span>
                  <span>P.IVA 03194720593</span>
                </div>
              </motion.div>

              {/* Google Maps widget */}
              <motion.div 
                variants={fadeInSlow}
                className="w-full mt-32 border border-pink-veil p-8 bg-white rounded-[24px] shadow-sm overflow-hidden"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.410972412852!2d12.898621376823376!3d41.46471377128956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13250c60cb77d079%3A0xe2128e08fca54d7e!2sVia%20dei%20Volsci%20115%2C%2004100%20Latina%20LT%2C%20Italy!5e0!3m2!1sen!2sit!4v1700000000000!5m2!1sen!2sit" 
                  className="w-full h-[220px] rounded-[16px] border-0" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Giospy Latina Showroom Map"
                />
              </motion.div>
            </motion.div>

            {/* Right Column Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInSlow}
              className="lg:col-span-7 bg-white p-32 md:p-48 border border-grey-line/50 w-full"
            >
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-32"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                      
                      {/* Underline only input field: Nome */}
                      <div className="flex flex-col gap-8">
                        <label htmlFor="nome" className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-grey-mid font-medium">
                          Nome e cognome *
                        </label>
                        <input 
                          type="text" 
                          id="nome"
                          required
                          value={formData.nome}
                          onChange={(e) => setFormData({...formData, nome: e.target.value})}
                          placeholder="es. Laura Rossi"
                          className="border-b border-grey-line bg-transparent py-8 text-graphite placeholder-grey-mid/40 focus:border-pink-deep focus:outline-none transition-colors duration-300 font-sans font-light text-[0.95rem]"
                        />
                      </div>

                      {/* Underline only input field: Email */}
                      <div className="flex flex-col gap-8">
                        <label htmlFor="email" className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-grey-mid font-medium">
                          Email *
                        </label>
                        <input 
                          type="email" 
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="es. laura@esempio.it"
                          className="border-b border-grey-line bg-transparent py-8 text-graphite placeholder-grey-mid/40 focus:border-pink-deep focus:outline-none transition-colors duration-300 font-sans font-light text-[0.95rem]"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                      
                      {/* Underline only input field: Telefono */}
                      <div className="flex flex-col gap-8">
                        <label htmlFor="telefono" className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-grey-mid font-medium">
                          Telefono
                        </label>
                        <input 
                          type="tel" 
                          id="telefono"
                          value={formData.telefono}
                          onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                          placeholder="es. +39 347..."
                          className="border-b border-grey-line bg-transparent py-8 text-graphite placeholder-grey-mid/40 focus:border-pink-deep focus:outline-none transition-colors duration-300 font-sans font-light text-[0.95rem]"
                        />
                      </div>

                      {/* Dropdown field: Tipo Evento */}
                      <div className="flex flex-col gap-8">
                        <label htmlFor="tipoEvento" className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-grey-mid font-medium">
                          Tipo di evento *
                        </label>
                        <select 
                          id="tipoEvento"
                          required
                          value={formData.tipoEvento}
                          onChange={(e) => setFormData({...formData, tipoEvento: e.target.value})}
                          className="border-b border-grey-line bg-transparent py-8 text-graphite focus:border-pink-deep focus:outline-none transition-colors duration-300 font-sans font-light text-[0.95rem] cursor-pointer"
                        >
                          <option value="Battesimo">Battesimo</option>
                          <option value="Nascita">Nascita / Benvenuto</option>
                          <option value="Compleanno">Compleanno</option>
                          <option value="Matrimonio">Matrimonio</option>
                          <option value="Altro">Altro evento</option>
                        </select>
                      </div>

                    </div>

                    {/* Underline only input field: Data */}
                    <div className="flex flex-col gap-8">
                      <label htmlFor="data" className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-grey-mid font-medium">
                        Data indicativa evento
                      </label>
                      <input 
                        type="date" 
                        id="data"
                        value={formData.data}
                        onChange={(e) => setFormData({...formData, data: e.target.value})}
                        className="border-b border-grey-line bg-transparent py-8 text-graphite focus:border-pink-deep focus:outline-none transition-colors duration-300 font-sans font-light text-[0.95rem]"
                      />
                    </div>

                    {/* Underline only textarea field: Messaggio */}
                    <div className="flex flex-col gap-8">
                      <label htmlFor="messaggio" className="text-[0.65rem] font-sans tracking-[0.2em] uppercase text-grey-mid font-medium">
                        Raccontami la tua idea o richiesta *
                      </label>
                      <textarea 
                        id="messaggio"
                        required
                        rows="3"
                        value={formData.messaggio}
                        onChange={(e) => setFormData({...formData, messaggio: e.target.value})}
                        placeholder="Descrivi brevemente lo stile, i colori o i dettagli che immagini..."
                        className="border-b border-grey-line bg-transparent py-8 text-graphite placeholder-grey-mid/40 focus:border-pink-deep focus:outline-none transition-colors duration-300 font-sans font-light text-[0.95rem] resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-16 flex flex-col gap-16 items-start">
                      <button 
                        type="submit"
                        className="bg-pink hover:bg-pink-deep text-graphite hover:text-white px-24 py-8 text-[0.8125rem] uppercase tracking-[0.14em] transition-all duration-300 rounded-full inline-flex items-center gap-12 group font-medium"
                      >
                        Invia richiesta
                        <Send className="w-16 h-16 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform" />
                      </button>
                      <span className="text-[0.65rem] font-sans text-grey-mid/60 leading-normal">
                        * Per scopi dimostrativi il modulo è visivo-only. Sarà collegato a <code>/api/contact</code> in produzione.
                      </span>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-64 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-64 h-64 bg-pink-veil border border-pink rounded-full flex items-center justify-center mb-24">
                      <Check className="w-24 h-24 text-pink-deep" />
                    </div>
                    <h3 className="font-serif text-3xl text-graphite mb-16 font-light">
                      Grazie, {formData.nome.split(' ')[0]}!
                    </h3>
                    <p className="font-sans text-grey-mid text-[0.95rem] max-w-[360px] leading-relaxed mb-32">
                      Il tuo messaggio è stato ricevuto correttamente. Ti risponderò al più presto con una proposta su misura.
                    </p>
                    <button 
                      onClick={resetForm}
                      className="border-b border-pink hover:border-pink-deep pb-4 text-[0.8125rem] uppercase tracking-[0.1em] text-graphite transition-all"
                    >
                      Invia un altro messaggio
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>


      {/* 9. FOOTER */}
      <footer className="py-32 bg-white border-t border-grey-line/60">
        <div className="max-w-[1440px] mx-auto px-24 md:px-48">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-24 items-start mb-24">
            
            {/* Left Column: Brand Info */}
            <div className="md:col-span-5 flex flex-col items-start text-left">
              <a href="#hero" className="hover:opacity-80 transition-opacity flex items-center gap-16 mb-8">
                <img src="/images/logo/logo giorgia.png" alt="Giospy Logo" className="h-96 w-auto object-contain" />
                <div className="flex flex-col text-left">
                  <span className="font-script text-3xl leading-none text-graphite transform -rotate-[2deg]">Giospy</span>
                  <span className="font-sans text-[0.65rem] tracking-[0.25em] uppercase text-grey-mid font-semibold mt-4">Event Planner</span>
                </div>
              </a>
              <p className="font-sans text-[0.85rem] font-light text-grey-mid leading-[1.6] max-w-[320px] mb-16">
                Allestimenti, bomboniere e partecipazioni per rendere unico ogni tuo evento speciale. Giospy Event Planner.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-16">
                <a 
                  href="https://www.instagram.com/giospy_event/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-32 h-32 border border-grey-line hover:border-pink rounded-full flex items-center justify-center text-grey-mid hover:text-pink-deep transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-16 h-16" />
                </a>
                <a 
                  href="https://www.facebook.com/Giospy-event-planner" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-32 h-32 border border-grey-line hover:border-pink rounded-full flex items-center justify-center text-grey-mid hover:text-pink-deep transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-16 h-16" />
                </a>
                <a 
                  href="https://wa.me/393935601713" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-32 h-32 border border-grey-line hover:border-pink rounded-full flex items-center justify-center text-grey-mid hover:text-pink-deep transition-all"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-16 h-16" />
                </a>
              </div>
            </div>

            {/* Middle Column: Nav Links */}
            <div className="md:col-span-3 flex flex-col items-start text-left">
              <span className="font-sans text-[0.7rem] font-medium tracking-[0.2em] uppercase text-graphite mb-16 block">
                Navigazione
              </span>
              <div className="flex flex-col gap-8 text-[0.8rem] font-sans text-grey-mid font-light">
                <a href="#chi-sono" className="hover:text-pink-deep transition-colors">Chi sono</a>
                <a href="#servizi" className="hover:text-pink-deep transition-colors">Servizi</a>
                <a href="#galleria" className="hover:text-pink-deep transition-colors">Galleria</a>
                <a href="#negozio" className="hover:text-pink-deep transition-colors">Il Negozio</a>
                <a href="#recensioni" className="hover:text-pink-deep transition-colors">Recensioni</a>
                <a href="#contatti" className="hover:text-pink-deep transition-colors">Contatti</a>
              </div>
            </div>

            {/* Right Column: Showroom Info */}
            <div className="md:col-span-4 flex flex-col items-start text-left">
              <span className="font-sans text-[0.7rem] font-medium tracking-[0.2em] uppercase text-graphite mb-16 block">
                Showroom
              </span>
              <div className="flex flex-col gap-8 text-[0.8rem] font-sans text-grey-mid font-light">
                <span>Via dei Volsci 115, Latina</span>
                <span>Martedì – Sabato: 09:30 - 12:30 | 16:00 - 19:00</span>
                <span>Domenica e Lunedì: Chiuso</span>
                <a href="mailto:info@giospy.it" className="hover:text-pink-deep transition-colors mt-8 block">info@giospy.it</a>
              </div>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="border-t border-grey-line/45 pt-16 flex flex-col sm:flex-row justify-between items-center gap-16 text-[0.7rem] font-sans tracking-wider text-grey-mid/60 uppercase">
            <span>© 2026 Giospy Latina. Tutti i diritti riservati.</span>
            <span>Sito realizzato da RuoccoAgency.</span>
          </div>

        </div>
      </footer>

      {/* FLOAT WIDGET: WhatsApp CTA + Scroll linked circle indicator */}
      <div className="fixed bottom-32 right-32 z-30 flex flex-col gap-16 items-center">
        <a 
          href="https://wa.me/393935601713" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative w-48 h-48 bg-white border border-grey-line rounded-full flex items-center justify-center hover:border-pink transition-colors group shadow-sm"
          aria-label="Contattami su WhatsApp"
        >
          {/* Progress Circle SVG */}
          <svg className="absolute -inset-1 w-56 h-56 -rotate-90 pointer-events-none">
            <motion.circle
              cx="28"
              cy="28"
              r={radius}
              stroke="#C99B96"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              style={{ strokeDashoffset }}
            />
          </svg>
          <WhatsAppIcon className="w-24 h-24 text-graphite group-hover:text-[#25D366] transition-colors" />
        </a>
      </div>

      {/* 4.5 SERVICES MODAL DETAIL OVERLAY */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-24 bg-graphite/40 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white border border-pink-veil rounded-[32px] p-32 md:p-48 shadow-xl max-w-[550px] w-full relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top background subtle blush glow */}
              <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-pink-veil/40 to-transparent -z-10" />

              {/* Close Button */}
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-24 right-24 w-32 h-32 rounded-full border border-grey-line hover:border-pink-deep flex items-center justify-center text-grey-mid hover:text-graphite transition-all bg-white/80 backdrop-blur-sm"
                aria-label="Chiudi finestra"
              >
                <X className="w-16 h-16" />
              </button>

              {/* Header Icon + Title */}
              <div className="flex items-center gap-16 mb-24">
                <div className="w-48 h-48 rounded-full border border-pink bg-pink-veil/20 flex items-center justify-center shadow-neon text-pink-deep text-neon shrink-0">
                  {selectedService.id === "allestimenti" && <Sparkles className="w-24 h-24" />}
                  {selectedService.id === "nascite-battesimi" && <Heart className="w-24 h-24" />}
                  {selectedService.id === "compleanni-feste" && <Gift className="w-24 h-24" />}
                  {selectedService.id === "bomboniere" && <Package className="w-24 h-24" />}
                  {selectedService.id === "partecipazioni" && <Mail className="w-24 h-24" />}
                  {selectedService.id === "personalizzazioni" && <Palette className="w-24 h-24" />}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[0.65rem] font-sans font-medium uppercase tracking-[0.25em] text-grey-mid">
                    SERVIZIO ESCLUSIVO
                  </span>
                  <h3 className="text-3xl font-serif text-graphite font-normal mt-2 leading-none">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="text-left font-sans text-grey-mid text-[0.95rem] leading-[1.8] font-light space-y-16 mb-32">
                <p className="text-graphite font-serif italic text-lg leading-relaxed mb-16 border-l-2 border-pink pl-16">
                  "{selectedService.description}"
                </p>
                <p>
                  {selectedService.details}
                </p>
              </div>

              {/* CTA Row */}
              <div className="flex flex-col sm:flex-row gap-16 items-center pt-24 border-t border-grey-line/45">
                <a 
                  href={`https://wa.me/393935601713?text=Ciao%20Giorgia,%20vorrei%20informazioni%20su%20${encodeURIComponent(selectedService.title)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-pink hover:bg-pink-deep text-graphite hover:text-white px-24 py-8 text-[0.8125rem] uppercase tracking-[0.14em] transition-all duration-300 rounded-full inline-flex items-center justify-center gap-12 group font-medium"
                >
                  <WhatsAppIcon className="w-16 h-16 shrink-0" />
                  Richiedi Informazioni
                </a>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto text-grey-mid hover:text-graphite px-24 py-8 text-[0.8125rem] uppercase tracking-[0.14em] transition-all duration-300 rounded-full border border-grey-line hover:border-graphite text-center"
                >
                  Torna ai Servizi
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
