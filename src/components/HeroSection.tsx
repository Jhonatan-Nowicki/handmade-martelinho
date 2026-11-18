
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById('contato');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen min-h-[100svh] flex items-center justify-center bg-cover bg-center bg-no-repeat md:bg-fixed"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, hsl(var(--hero-overlay)), hsl(220 13% 18% / 0.5))',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-5 sm:px-6 max-w-4xl mx-auto w-full py-20 md:py-0">

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-5 md:mb-6 leading-tight">
          {t('hero.titulo1')}

          <span className="block text-brand-blue-light bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {t('hero.titulo2')}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-2xl lg:text-3xl mb-7 md:mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          {t('hero.subtitulo')}

          <strong className="text-white">
            {' '}{t('hero.subtitulo_destaque')}
          </strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12">

          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground w-full max-w-[340px] sm:w-auto px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {t('hero.botao')}
          </Button>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
            {t('hero.itens')}
          </p>

        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="h-7 w-7 md:h-8 md:w-8 text-white/70" />
      </div>

    </section>
  );
};

export default HeroSection;
