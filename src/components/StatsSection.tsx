import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Trophy, Handshake, Shirt } from "lucide-react";

const stats = [
  { icon: Shirt, label: "Matches", value: "95+" },
  { icon: Target, label: "Goals", value: "31" },
  { icon: Handshake, label: "Assists", value: "43" },
  { icon: Trophy, label: "Awards", value: "7" },
];

const StatsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="stats" className="py-24 md:py-32 section-padding bg-secondary/30">
      <div ref={ref} className="max-w-7xl mx-auto text-center">
        <p className={`text-primary text-sm font-medium tracking-[0.25em] uppercase mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          Performance
        </p>
        <h2 className={`font-display text-4xl md:text-5xl tracking-wide text-foreground mb-16 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          CAREER STATS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="text-primary" size={24} />
              </div>
              <span className="font-display text-5xl md:text-6xl text-foreground tracking-wide">{s.value}</span>
              <span className="text-muted-foreground text-sm uppercase tracking-wider mt-2">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
