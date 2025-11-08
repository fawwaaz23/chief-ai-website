import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  onRunDiagnostics: () => void;
  onRunTests: () => void;
}

export default function Header({ onRunDiagnostics, onRunTests }: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-border" data-testid="header">
      <h1 className="text-2xl font-bold flex items-center gap-2" data-testid="text-app-title">
        <Sparkles className="text-primary" />
        ChiefAI
      </h1>
      <div className="flex items-center gap-4">
        <Button 
          onClick={onRunDiagnostics} 
          variant="secondary"
          data-testid="button-run-diagnostics"
        >
          Run Diagnostics
        </Button>
        <Button 
          onClick={onRunTests} 
          variant="secondary"
          data-testid="button-run-tests"
        >
          Run Mock Tests
        </Button>
      </div>
    </header>
  );
}
