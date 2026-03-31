import { useState, useEffect } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

export const Presentation = () => {
  const stats = [
    { value: "2+", label: "Años experiencia" },
    { value: "20+", label: "Proyectos" },
    // { value: "15+", label: "Clientes" },
  ];

  // Array de fotos
  const photos = ["/foto2.png", "/2foto.png"];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Cambiar foto cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-0 lg:pt-0 overflow-hidden bg-background"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 dark:bg-secondary/20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Logo Background */}
        <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-screen z-10">
          {/* Mobile background photo (solo visible en móvil) */}
          <div className="block lg:hidden absolute inset-0 w-full h-full z-0">
            <img
              src={photos[currentPhotoIndex]}
              alt="Kevin Lema - Ingeniero de Software"
              className="w-full h-full object-cover object-top opacity-60"
              style={{
                filter: "grayscale(0.2) blur(1.5px)",
                transition: "opacity 0.5s"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
          </div>

          {/* Left side - Content */}
          <div className="order-2 lg:order-1 space-y-2 lg:space-y-2 py-8 lg:py-0 relative z-10 text-white lg:text-inherit">
            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-foreground mb-2 text-balance leading-tight">
                Kevin Lema
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-red-500">
                Ingeniero de Software
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed text-pretty">
              Desarrollo soluciones tecnológicas innovadoras con enfoque en la
              calidad del código, la experiencia de usuario y las mejores
              prácticas de la industria. Especializado en desarrollo web
              full-stack.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/K3v1n17"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/kevin-lema-654bbb1b2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="mailto:kevinlema@example.com"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary text-muted-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>

              <Button variant="outline" size="lg" className="gap-2">
                <a href="/cv.pdf" target="_blank">
                  <FontAwesomeIcon icon={faDownload} />
                  Descargar CV
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Carrusel de fotos (solo visible en escritorio) */}
          <div className="order-1 lg:order-2 hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Profile Image with fade transition */}
              <div className="relative w-[320px] h-[400px] sm:w-[400px] sm:h-[500px] md:w-[440px] md:h-[560px] lg:w-[500px] lg:h-[650px] xl:w-[560px] xl:h-[720px] overflow-hidden">
                <img
                  key={currentPhotoIndex}
                  src={photos[currentPhotoIndex]}
                  alt="Kevin Lema - Ingeniero de Software"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0"
                  style={{
                    maskImage: `linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 100%),linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%),linear-gradient(to left, transparent 0%, black 15%, black 85%, transparent 100%)`,
                    WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 100%),linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%),linear-gradient(to left, transparent 0%, black 15%, black 85%, transparent 100%)`,
                    maskComposite: "intersect",
                    WebkitMaskComposite: "destination-in",
                    animation: "slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                />
              </div>

              {/* Indicadores de fotos */}
              <div className="flex justify-center gap-2 mt-4">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhotoIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentPhotoIndex
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/50 hover:bg-muted-foreground"
                    }`}
                    aria-label={`Photo ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <a href="#experience" aria-label="Scroll to experience section">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};
