import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 z-10">
            <div className="container max-w-5xl mx-auto text-center">
                <div className="space-y-6">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight whitespace-nowrap">
                        <span className="animate-fade-in">Hello, My name is</span>
                        <span className="text-primary text-glow animate-fade-in-delay-1"> Kim</span>
                        <span className="text-foreground animate-fade-in-delay-2"> Magpatoc</span>
                    </h1>

                    <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto animate-fade-in-delay-3">
                        A Computer Engineering student with a foundation in both software and hardware-related skills.
                    </p>
                    <div className="pt-4 animate-fade-in-delay-4">
                        <a 
                            href="#projects" 
                            className="inline-block px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                        >
                            View my Projects
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-foreground/60 mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}