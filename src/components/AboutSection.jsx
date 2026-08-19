import { Code, Settings, SquareTerminal } from "lucide-react"


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Computer Engineering Student</h3>

                        <p className="text-muted-foreground">
                            Experienced in embedded systems and full-stack development using C++, Python, Javascript, HTML, and CSS in software development
                            and hardware integration with devices such as ESP32 and Arduino while also competent in Computer networking.
                        </p>
                        <p className="text-muted-foreground">
                            I am committed to learn and apply my skills in delivering an outstanding result in any given task.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a href="https://drive.google.com/file/d/1N4p0S7eTtMJlus5tyMiJ3WDj2GIlo2af/view?usp=sharing" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Software & Hardware </h4>
                                    <p className="text-muted-foreground">
                                        Capable of doing any computer-related tasks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <SquareTerminal className="h-6 w-6 text-primary" />
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Software Development </h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive applications and system with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Settings className="h-6 w-6 text-primary" />
                                </div>
                                 <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Hardware Integration </h4>
                                    <p className="text-muted-foreground">
                                        Combining different components and devices for an effective system.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}