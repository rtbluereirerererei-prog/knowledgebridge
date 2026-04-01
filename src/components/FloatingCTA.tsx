import Link from "next/link";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center md:hidden px-4">
      <Link
        href="/contact"
        className="w-full max-w-sm bg-accent text-white text-center font-medium py-3.5 rounded-full shadow-lg hover:bg-accent-dark transition-colors"
      >
        無料相談はこちら
      </Link>
    </div>
  );
}
