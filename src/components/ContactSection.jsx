import { Mail, MapPin, Phone } from "lucide-react"
import { CiFacebook } from "react-icons/ci"

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative z-10">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-primary text-glow">Touch</span>
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
                    <p className="text-foreground/70 max-w-xl mx-auto">
                        Feel free to reach out. I'm open to discuss new opportunities.
                    </p>
                </div>

                <div className="max-w-xl mx-auto">
                    <h3 className="text-xl font-semibold mb-8 text-center text-foreground">
                        Contact Information
                    </h3>

                    <div className="flex flex-col space-y-6 max-w-xs mx-auto">
                        <div className="flex items-center gap-4 text-left">
                            <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground/60">Email</h4>
                                <a 
                                    href="mailto:mik.magpatoc@gmail.com" 
                                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                                >
                                    mik.magpatoc@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-left">
                            <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground/60">Phone</h4>
                                <a 
                                    href="tel:+639985398155" 
                                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                                >
                                    +63 998 539 8155
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-left">
                            <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground/60">Location</h4>
                                <p className="text-foreground font-medium">
                                    Sto. Tomas, Davao del Norte
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 mt-8 text-center">
                        <h4 className="text-sm font-medium text-foreground/70 mb-4">Connect With Me</h4>
                        <div className="flex justify-center">
                            <a 
                                href="https://www.facebook.com/cotapgam.mik/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Facebook Profile"
                                className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110 inline-flex items-center justify-center"
                            >
                                <CiFacebook size={28} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}