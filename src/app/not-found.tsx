export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <div className="mb-4 text-6xl">🔍</div>
      <h1 className="font-display mb-3 text-4xl font-extrabold tracking-tight text-text">Page Not Found</h1>
      <p className="mb-8 text-text-2">The page you're looking for doesn't exist.</p>
      <a href="/" className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-all hover:bg-accent-2">
        ← Back to Home
      </a>
    </div>
  );
}
