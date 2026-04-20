import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 section-padding">
      <div ref={ref} className="max-w-3xl mx-auto">
        <p className={`text-primary text-sm font-medium tracking-[0.25em] uppercase mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          Background
        </p>
        <h2 className={`font-display text-4xl md:text-5xl tracking-wide text-foreground mb-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          ABOUT ME
        </h2>

        <div className={`space-y-5 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed" style={{ textWrap: "pretty" }}>
            I am a dedicated and technically gifted central midfielder with strong physical presence and creative ability. I play as a box-to-box midfielder, contributing both defensively and offensively, controlling the tempo of the game and creating goal-scoring opportunities through intelligent positioning and vision.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed" style={{ textWrap: "pretty" }}>
            My game is built on discipline, consistency, and high work rate. I maintain composure under pressure, deliver accurate passes, and support team play with strong decision-making, contributing with goals and assists, including a standout season performance of 13 assists and 7 goals. I am committed to continuous improvement through rigorous training and always focused on helping my team achieve its objectives.
          </p>
          <p className="text-foreground font-semibold text-lg mt-8 border-l-2 border-primary pl-4">
            Available for trials and club opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
