import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PatientGuideActions({ title }: { title: string }) {
  const printGuide = () => window.print();

  return (
    <div className="print:hidden">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        Take this guide with you
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Print this reviewed guide or save it as a PDF from your print window.
      </p>
      <Button type="button" onClick={printGuide} className="mt-4 min-h-11 w-full">
        <Printer className="h-4 w-4" />
        Print or save {title}
        <Download className="h-4 w-4" />
      </Button>
    </div>
  );
}