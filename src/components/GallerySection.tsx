import { useScrollReveal } from "@/hooks/useScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
import gallery17 from "@/assets/gallery-17.jpg";
import gallery18 from "@/assets/gallery-18.jpg";
import gallery19 from "@/assets/gallery-19.jpg";
import gallery20 from "@/assets/gallery-20.jpg";

const images = [
  { src: gallery1, alt: "Dribbling past defenders" },
  { src: gallery2, alt: "Celebrating a goal" },
  { src: gallery3, alt: "Close-up on the ball" },
  { src: gallery4, alt: "Training session" },
  { src: gallery5, alt: "Player portrait" },
  { src: gallery6, alt: "Aerial match view" },
  { src: gallery7, alt: "Aerial match view" },
  { src: gallery8, alt: "Aerial match view" },
  { src: gallery9, alt: "Aerial match view" },
  { src: gallery10, alt: "Aerial match view" },
  { src: gallery11, alt: "Aerial match view" },
  { src: gallery12, alt: "Aerial match view" },
  { src: gallery13, alt: "Aerial match view" },
  { src: gallery14, alt: "Aerial match view" },
  { src: gallery15, alt: "Aerial match view" },
  { src: gallery16, alt: "Aerial match view" },
  { src: gallery17, alt: "Aerial match view" },
  { src: gallery18, alt: "Aerial match view" },
  { src: gallery19, alt: "Aerial match view" },
  { src: gallery20, alt: "Aerial match view" },
];

const GallerySection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="gallery" className="py-24 md:py-32 section-padding bg-secondary/30">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className={`text-primary text-sm font-medium tracking-[0.25em] uppercase mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          In Action
        </p>
        <h2 className={`font-display text-4xl md:text-5xl tracking-wide text-foreground mb-12 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          GALLERY
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative aspect-square rounded-lg overflow-hidden group cursor-pointer transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
