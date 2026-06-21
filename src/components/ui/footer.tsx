import { personal } from "@/lib/data";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1f1f1f]">
      <div className="container-main py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-foreground">
            {personal.name}
          </p>
          <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase mt-2">
            {personal.title}
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-2">
          <a
            href={`mailto:${personal.email}`}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150 tracking-[0.15em] uppercase"
          >
            {personal.email}
          </a>
          <a
            href={`https://${personal.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-150 tracking-[0.15em] uppercase"
          >
            LinkedIn
          </a>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
          <p className="text-[0.7rem] text-muted-foreground tracking-[0.15em] uppercase font-mono">
            &copy; {year} {personal.name}
          </p>
          <a
            href="#"
            className="w-10 h-10 border border-[#1f1f1f] inline-flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-150"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
