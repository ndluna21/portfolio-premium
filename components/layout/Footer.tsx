import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface/50">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm font-mono">
          <span className="text-primary">~/</span>
          {personalInfo.nameEn.toLowerCase().replace(" ", "-")}
        </p>
        <p className="text-text-muted text-sm">
          Built with Next.js 15 · TypeScript · Tailwind CSS · Framer Motion
        </p>
        <p className="text-text-muted text-sm">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
