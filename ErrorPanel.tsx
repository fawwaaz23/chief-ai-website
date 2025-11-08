interface ErrorPanelProps {
  errorHint: string;
}

export default function ErrorPanel({ errorHint }: ErrorPanelProps) {
  if (!errorHint) return null;

  return (
    <div className="mt-4 bg-destructive/10 border border-destructive p-3 rounded-md text-sm" data-testid="panel-error">
      <strong className="text-destructive-foreground">Debug hint:</strong>
      <pre className="whitespace-pre-wrap mt-2 text-destructive-foreground font-mono" data-testid="text-error-hint">
        {errorHint}
      </pre>
      <div className="mt-2 text-xs text-destructive-foreground/80">
        If you see CORS errors, ensure backend includes <code className="bg-destructive/20 px-1 py-0.5 rounded">Access-Control-Allow-Origin: *</code> (or your domain).
      </div>
    </div>
  );
}
