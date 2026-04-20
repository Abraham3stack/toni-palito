const Footer = () => (
  <footer className="border-t border-border/40 py-8 section-padding">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
      <span>&copy; {new Date().getFullYear()} Tony Palito. All rights reserved.</span>
      <span>Professional Football Player ⚽️</span>
    </div>
  </footer>
);

export default Footer;
