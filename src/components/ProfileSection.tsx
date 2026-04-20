import { useScrollReveal } from "@/hooks/useScrollReveal";
import { User, Ruler, MapPin, Flag, Footprints, Building2 } from "lucide-react";

const profileData = [
  { icon: User, label: "Age", value: "28" },
  { icon: Ruler, label: "Height", value: "1.82m" },
  { icon: MapPin, label: "Position", value: "Attacking Midfielder" },
  { icon: Footprints, label: "Preferred Foot", value: "Right" },
  { icon: Flag, label: "Nationality", value: "Nigerian" },
  { icon: Building2, label: "Current Club", value: "None" },
];

const ProfileSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="profile" className="py-24 md:py-32 section-padding">
      <div ref={ref} className="max-w-7xl mx-auto">
        <p className={`text-primary text-sm font-medium tracking-[0.25em] uppercase mb-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          Scouting Report
        </p>
        <h2 className={`font-display text-4xl md:text-5xl tracking-wide text-foreground mb-12 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          PLAYER PROFILE
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {profileData.map((item, i) => (
            <div
              key={item.label}
              className={`glass-card rounded-lg p-6 transition-all duration-700 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              <item.icon className="text-primary mb-3" size={20} />
              <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-foreground font-semibold text-lg">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
