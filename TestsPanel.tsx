interface TestsPanelProps {
  output: string;
}

export default function TestsPanel({ output }: TestsPanelProps) {
  if (!output) return null;

  return (
    <div className="mt-4 bg-green-900/20 border border-green-700 p-3 rounded-md text-sm text-green-100" data-testid="panel-tests">
      <strong>Mock Tests</strong>
      <pre className="whitespace-pre-wrap mt-2 font-mono" data-testid="text-tests-output">
        {output}
      </pre>
    </div>
  );
}
