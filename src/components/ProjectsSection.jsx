
const projects = [
    {
        id: 1,
        title: "Hospital Booking System",
        description: "Appointment system for streamlining patient schedules with a login authentication system.",
        image: "/",
        tags: ["Java", "MySQL, NetBeans"]
    },
    {
        id: 2,
        title: "Bus Terminal Ticketing System",
        description: "System for optimizing bus fare tickets to quicken speed-up costumer payments.",
        image: "/",
        tags: ["C++", "MySQL"]
    },
    {
        id: 3,
        title: "CNN-Based Pigpen Excrement Cleaner",
        description: "Automation of cleaning pig excrement using AI for rapid odor dissipation.",
        image: "/",
        tags: ["Python", "CNN", "ESP32"]
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Projects I created as a student of Computer Engineering.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full b-secondary text-secondary-foreground">
                                            {tag}    
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                                <p className="text-muted-foreground text-sm mb-1"> {project.description} </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}