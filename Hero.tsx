import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="text-center py-12 px-6" data-testid="section-hero">
      <motion.h2 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="text-5xl font-bold mb-2"
        data-testid="text-hero-title"
      >
        Ask ChiefAI — Debug-friendly
      </motion.h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-6" data-testid="text-hero-description">
        This build includes richer diagnostics so you can quickly resolve backend issues with detailed status codes, response body analysis, and CORS hints.
      </p>
    </section>
  );
}
