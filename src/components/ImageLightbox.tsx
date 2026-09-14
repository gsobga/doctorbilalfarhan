import { Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ImageLightboxProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function ImageLightbox({ src, alt, width, height, className = "h-72" }: ImageLightboxProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          className={`group relative flex w-full overflow-hidden rounded-lg bg-muted p-0 ${className}`}
          aria-label={`Enlarge photo: ${alt}`}
        >
          <img
            src={src}
            alt={alt}
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            width={width}
            height={height}
            loading="lazy"
          />
          <span className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
            <Expand className="h-4 w-4" aria-hidden="true" />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90dvh] max-w-5xl overflow-auto p-4 sm:p-6">
        <DialogTitle className="font-serif text-xl text-primary">Humanitarian surgical service</DialogTitle>
        <DialogDescription>{alt}</DialogDescription>
        <img src={src} alt={alt} className="max-h-[72dvh] w-full object-contain" width={width} height={height} />
      </DialogContent>
    </Dialog>
  );
}