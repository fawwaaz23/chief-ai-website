interface ResponsePanelProps {
  response: string;
}

export default function ResponsePanel({ response }: ResponsePanelProps) {
  if (!response) return null;

  return (
    <div className="mt-4 bg-card border border-card-border p-4 rounded-md" data-testid="panel-response">
      <strong className="text-primary">Response</strong>
      <pre className="whitespace-pre-wrap mt-2 text-card-foreground font-mono text-sm" data-testid="text-ai-response">
        {response}
      </pre>
    </div>
  );
}
