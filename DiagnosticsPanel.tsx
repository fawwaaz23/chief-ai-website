interface DiagnosticsPanelProps {
  output: string;
}

export default function DiagnosticsPanel({ output }: DiagnosticsPanelProps) {
  if (!output) return null;

  return (
    <div className="mt-4 bg-blue-900/20 border border-blue-700 p-3 rounded-md text-sm text-blue-100" data-testid="panel-diagnostics">
      <strong>Diagnostics</strong>
      <pre className="whitespace-pre-wrap mt-2 font-mono" data-testid="text-diagnostics-output">
        {output}
      </pre>
    </div>
  );
}
