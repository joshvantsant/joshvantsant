export default function ExperiencePage() {
  const education = experience.filter(e => e.type === 'education');
  const research = experience.filter(e => e.subtype === 'research');
  const industrial = experience.filter(e => e.subtype === 'industrial');

  return (
    <div className="min-h-screen px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-light tracking-wide">
            Experience
          </h1>
          <p className="text-muted-foreground mt-4 font-light">
            Education, research, and professional experience
          </p>
        </div>

        {/* CV GRID */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT COLUMN — EDUCATION */}
          <div>
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
              Education
            </h2>

            <div className="space-y-10 border-l border-border pl-6">
              {education.map((item, i) => (
                <div key={i} className="relative">
                  
                  {/* timeline dot */}
                  <div className="absolute -left-[34px] top-1 w-2 h-2 rounded-full bg-foreground" />

                  <p className="text-sm text-muted-foreground">{item.period}</p>
                  <h3 className="text-lg font-light mt-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.organisation}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — EXPERIENCE */}
          <div>
            <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
              Experience
            </h2>

            {/* Research */}
            <div className="mb-12">
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Research
              </h3>

              <div className="space-y-10 border-l border-border pl-6">
                {research.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[34px] top-1 w-2 h-2 rounded-full bg-foreground" />

                    <p className="text-sm text-muted-foreground">{item.period}</p>
                    <h3 className="text-lg font-light mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.organisation}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Industrial */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Industrial
              </h3>

              <div className="space-y-10 border-l border-border pl-6">
                {industrial.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[34px] top-1 w-2 h-2 rounded-full bg-foreground" />

                    <p className="text-sm text-muted-foreground">{item.period}</p>
                    <h3 className="text-lg font-light mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.organisation}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
