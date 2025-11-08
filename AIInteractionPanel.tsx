import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import ResponsePanel from './ResponsePanel';
import ErrorPanel from './ErrorPanel';
import DiagnosticsPanel from './DiagnosticsPanel';
import TestsPanel from './TestsPanel';

interface AIInteractionPanelProps {
  onAskAI: (input: string) => void;
  loading: boolean;
  response: string;
  errorHint: string;
  diagOutput: string;
  testsOutput: string;
}

export default function AIInteractionPanel({
  onAskAI,
  loading,
  response,
  errorHint,
  diagOutput,
  testsOutput,
}: AIInteractionPanelProps) {
  const [input, setInput] = useState('');

  const handleAskAI = () => {
    if (input.trim()) {
      onAskAI(input);
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <section className="px-6 py-6 max-w-3xl mx-auto" data-testid="section-interaction">
      <div className="bg-card border border-card-border p-6 rounded-lg">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
          className="w-full min-h-28 p-3 rounded-md mb-4 font-sans resize-none"
          data-testid="input-prompt"
        />

        <div className="flex gap-3">
          <Button 
            onClick={handleAskAI} 
            disabled={loading || !input.trim()}
            variant="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            data-testid="button-ask-ai"
          >
            {loading ? <Loader2 className="animate-spin" data-testid="icon-loading" /> : 'Ask AI'}
          </Button>
          <Button 
            onClick={handleClear} 
            variant="secondary"
            data-testid="button-clear"
          >
            Clear
          </Button>
        </div>

        <ResponsePanel response={response} />
        <ErrorPanel errorHint={errorHint} />
        <DiagnosticsPanel output={diagOutput} />
        <TestsPanel output={testsOutput} />
      </div>
    </section>
  );
}
