import { ArrowUp } from "lucide-react"

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <footer className="relative py-10 bg-card/80 backdrop-blur-md mt-16 z-10">
            <div className="footer-ambient-aura" />
            <div className="footer-glow-line" />

            <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-foreground/60 text-center sm:text-left">
                    &copy; {new Date().getFullYear()} Kim Magpatoc, BSCpE. All rights reserved.
                </p>
                
                <button
                    onClick={scrollToTop}
                    className="p-2.5 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300 hover:scale-105 active:scale-95"
                    aria-label="Back to top"
                >
                    <ArrowUp size={20} />
                </button>
            </div>
        </footer>
    )
}