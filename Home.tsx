import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AIInteractionPanel from '@/components/AIInteractionPanel';
import FeaturesSection from '@/components/FeaturesSection';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [errorHint, setErrorHint] = useState('');
  const [diagOutput, setDiagOutput] = useState('');
  const [testsOutput, setTestsOutput] = useState('');

  const handleAskAI = async (input: string) => {
    console.log('Ask AI:', input);
    setLoading(true);
    setResponse('');
    setErrorHint('');
    
    //todo: remove mock functionality
    setTimeout(() => {
      setResponse(`You asked: "${input}"\n\nThis is a placeholder response. The backend will be implemented next to connect to OpenAI and provide real AI-powered answers with comprehensive error handling.`);
      setLoading(false);
    }, 1500);
  };

  const handleRunDiagnostics = async () => {
    console.log('Running diagnostics...');
    setDiagOutput('Running diagnostics...');
    setErrorHint('');
    
    //todo: remove mock functionality
    setTimeout(() => {
      setDiagOutput('OPTIONS ok. Status 200. Response body (options): \n\nDiagnostics will test endpoint connectivity and CORS configuration once backend is implemented.');
    }, 1000);
  };

  const handleRunTests = async () => {
    console.log('Running mock tests...');
    
    //todo: remove mock functionality
    const results = [
      'JSON reply: PASS',
      'Plain text reply: PASS',
      '500 JSON error: PASS',
      'Malformed JSON: PASS',
      'Empty body: PASS',
      'Non-Response input: PASS',
    ];
    setTestsOutput(results.join('\n'));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-foreground font-sans">
      <Header 
        onRunDiagnostics={handleRunDiagnostics}
        onRunTests={handleRunTests}
      />
      <Hero />
      <AIInteractionPanel
        onAskAI={handleAskAI}
        loading={loading}
        response={response}
        errorHint={errorHint}
        diagOutput={diagOutput}
        testsOutput={testsOutput}
      />
      <FeaturesSection />
    </div>
  );
}
