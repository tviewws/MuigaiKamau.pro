import { Link } from "react-router";
import { Home, ArrowRight } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[600px] flex items-center justify-center bg-[#F9FAFB] py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="text-[#D4AF37] font-bold text-[120px] leading-none mb-4">404</div>
        <h1 className="text-[#0F172A] font-bold text-[32px] sm:text-4xl mb-4">Page Not Found</h1>
        <p className="text-[#1F2937] text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-[#D4AF37] text-[#0F172A] px-8 py-4 rounded font-bold text-lg hover:bg-[#b8952b] transition-colors gap-2"
        >
          <Home className="w-5 h-5" />
          Back to Home
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
