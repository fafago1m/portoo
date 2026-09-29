import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './brand-logo';

const navigation = [
    { label: 'Projects', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Contact', href: '#contact' },
];

const socials = [
    { label: 'GitHub', href: 'https://github.com/fafago1m' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ihza-maulana-alfarisi-991a0b318?originalSubdomain=id' },
    { label: 'Instagram', href: 'https://www.instagram.com/_actshop/' },
];

export function Footer() {
    return (
        <footer className="border-t border-foreground/10 bg-muted px-6 pb-28 pt-12 text-foreground sm:px-8 md:pb-8 md:pt-16">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 pb-10 md:grid-cols-[1.4fr_1fr] md:gap-20 md:pb-14">
                    <div>
                        <a href="#home" aria-label="Ihza Dev — Home" className="inline-flex rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                            <BrandLogo />
                        </a>
                        <p className="mb-5 mt-6 max-w-[260px] text-sm leading-6 text-foreground/60">Full stack developer with an eye for design and the details in between.</p>
                        <a href="mailto:alfacastel3@gmail.com" className="inline-flex max-w-full items-center gap-2 text-sm font-semibold underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                            <span className="min-w-0 break-all">alfacastel3@gmail.com</span>
                            <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:gap-12">
                        <nav aria-label="Footer navigation">
                            <h2 className="mb-5 text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/40">Explore</h2>
                            <ul className="space-y-3">
                                {navigation.map((item) => (
                                    <li key={item.href}>
                                        <a href={item.href} className="inline-block rounded-sm py-1 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <nav aria-label="Footer social profiles">
                            <h2 className="mb-5 text-[10px] font-bold uppercase tracking-[0.15em] text-foreground/40">Elsewhere</h2>
                            <ul className="space-y-3">
                                {socials.map((social) => (
                                    <li key={social.label}>
                                        <a href={social.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-sm py-1 text-sm font-semibold text-foreground/80 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                                            {social.label}<ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 text-foreground/35 group-hover:text-primary" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-5 border-t border-foreground/10 pt-6">
                    <div className="flex flex-col gap-1.5 text-[11px] leading-5 text-foreground/50 sm:flex-row sm:gap-6">
                        <p>© {new Date().getFullYear()} Ihza.dev</p>
                        <p>Designed & built by Ihza.</p>
                    </div>
                    <a href="#home" className="group inline-flex shrink-0 items-center gap-3 rounded-full text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                        <span className="text-foreground/70 group-hover:text-primary">Back to top</span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-accent text-[#21113f] shadow-[2px_2px_0_rgba(0,0,0,0.12)] transition-transform motion-safe:group-hover:-translate-y-1">
                            <ArrowUp aria-hidden="true" className="h-4 w-4" />
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
