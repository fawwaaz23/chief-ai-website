import { Brain, Rocket, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function FeaturesSection() {
  return (
    <section className="px-6 py-8 max-w-6xl mx-auto" data-testid="section-features">
      <h3 className="text-2xl font-bold mb-4">Premium Features</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard
          icon={Brain}
          title="Smart Recipe Generator"
          description="Generate personalized recipes from ingredients."
        />
        <FeatureCard
          icon={Rocket}
          title="Code Assistant"
          description="Get intelligent help with coding challenges and debugging."
        />
        <FeatureCard
          icon={Zap}
          title="Instant Answers"
          description="Receive quick, accurate responses to any question."
        />
      </div>
    </section>
  );
}
