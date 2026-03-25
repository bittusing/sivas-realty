import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-8xl font-bold text-primary font-[family-name:var(--font-heading)] mb-4">
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-text-dark font-[family-name:var(--font-heading)] mb-4">
          Page Not Found
        </h1>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved. Let us
          help you find what you need.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Go Home
          </Link>
          <Link
            href="/properties/"
            className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
          >
            View Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
