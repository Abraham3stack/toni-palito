import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 md:py-32 section-padding">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <p className={`text-primary text-sm font-medium tracking-[0.25em] uppercase mb-3 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
          Reach Out
        </p>
        <h2 className={`font-display text-4xl md:text-5xl tracking-wide text-foreground mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          GET IN TOUCH
        </h2>
        <p className={`text-muted-foreground mb-12 transition-all duration-700 delay-150 ${visible ? "opacity-100" : "opacity-0"}`}>
          An experienced and reliable midfielder open to new club opportunities, trials, and professional engagements. Ready to bring quality, discipline, and performance to the next level.
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <a
            href="https://wa.me/+66955849366?text=Hello%2C%20I%20came%20across%20your%20profile%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity.%20Looking%20forward%20to%20connecting."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-md hover:brightness-110 active:scale-[0.97] transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
          <a
            href="mailto:tonyojeabulu786@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3 border border-foreground/20 text-foreground font-semibold text-sm rounded-md hover:bg-foreground/5 active:scale-[0.97] transition-all duration-200 w-full sm:w-auto justify-center"
          >
            <Mail size={18} />
            tony@email.com
          </a>
        </div>

        {/* Social links */}
        <div className={`flex items-center justify-center gap-6 transition-all duration-700 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}>
          <a
            href="https://www.instagram.com/toni_palito6?igsh=MW1ua2h1OG5jbWY3dw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Instagram
          </a>
          <span className="text-border">|</span>
          {/* <a
            href="https://twitter.com/ogbuabraham3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            Twitter / X
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
