const experiences = [
    {
        period: "2015 - 2019",
        role: "Web Developer",
        company: "Dinas Kominfo & BKAD Gunungkidul ",
        description:
            "Delivered custom web solutions for small businesses and startups. Built 15+ websites and applications, handling everything from design to deployment.",
        technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
        current: false,
    },
    {
        period: "Jun 29, 2021 - Dec 2021",
        role: "Frontend Web Developer",
        company: "Jobby.works",
        description:
            "I built and maintained the official website for Jobby.works, a job marketplace platform. My work involved creating a responsive, user-friendly interface for job seekers and employers, ensuring seamless navigation and a positive user experience across all devices.",
        technologies: ["React", "JavaScript", "CSS"],
        current: false,
    },
    {
        period: "January 2021 - May 2021",
        role: "Web Developer",
        company: "PT. Cipta Dinamika",
        description:
            "I designed the user interface (UI) and user experience (UX) for the official website of PT. Cipta Dinamika, ensuring a modern, intuitive design. Additionally, I developed an internal application for employee attendance tracking, streamlining the process of monitoring employee presence across all locations.",
        technologies: ["Figma", "JavaScript", "HTML", "CSS"],
        current: false,
    },
    {
        period: "May 9, 2022 - Dec 2023",
        role: "Frontend Web Developer",
        company: "CodeAttest",
        description:
            "I was responsible for developing the frontend of a real estate-focused SaaS platform, helping to create an innovative, interactive way for users to find their dream homes. Additionally, I built an internal dashboard for managing house listings, ensuring that agents and landlords could effectively maintain their property information",
        technologies: ["React", "Node.js", "MongoDB", "PHP", "Laravel"],
        current: false,
    },
    {
        period: "January 2023 - September 2023",
        role: "Frontend Web Developer",
        company: "Logique",
        description:
            "I played a key role in developing and maintaining various projects for Logique's clients, handling tasks such as feature implementation, bug fixing, and performance optimization. My work involved close collaboration with designers and backend developers to deliver high-quality web applications that met client requirements.",
        technologies: ["React", "TypeScript", "Next.js", "PHP"],
        current: false,
    },
    {
        period: "February 2025 - January 2026",
        role: "Full Stack Developer",
        company: "Watulintang Media",
        description: "I developed and maintained a range of web applications for Watulintang Media's diverse clients, taking projects from initial concept through to final deployment. I was responsible for building new features, enhancing existing functionality, and resolving technical issues across different platforms",
        technologies: ["PHP", "TypeScript", "Laravel", "MySQL", "Tailwind", "CodeIgniter"],
        current: false,
    }
]

export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div
                className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span
                        className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
                    >
                        Career Journey
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
                    >
                        Experience that{" "}
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            speaks volumes.
                        </span>
                    </h2>

                    <p
                        className="text-muted-foreground
           animate-fade-in animation-delay-200"
                    >
                        A timeline of my professional growth, from curious beginner to
                        senior engineer leading teams and building products at scale.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div
                                key={idx}
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && (
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                    )}
                                </div>

                                {/* Content */}
                                <div
                                    className={`pl-8 md:pl-0 ${idx % 2 === 0
                                        ? "md:pr-16 md:text-right"
                                        : "md:col-start-2 md:pl-16"
                                        }`}
                                >
                                    <div
                                        className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                                    >
                                        <span className="text-sm text-primary font-medium">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground mt-4">
                                            {exp.description}
                                        </p>
                                        <div
                                            className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""
                                                }`}
                                        >
                                            {exp.technologies.map((tech, techIdx) => (
                                                <span
                                                    key={techIdx}
                                                    className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
