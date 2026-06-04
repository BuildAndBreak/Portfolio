const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Tiago Pereira. All rights reserved.
        </p>
        <p className="text-muted-foreground text-xs font-mono opacity-60">
          crafted with React + TypeScript + Tailwind
        </p>
      </div>
    </footer>
  );
}
