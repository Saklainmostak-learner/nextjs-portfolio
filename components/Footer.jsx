import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/site";
export default function Footer(){return <footer className="footer"><div className="shell footer-top"><div><div className="footer-wordmark">Let’s make something <em>meaningful.</em></div><p>Have an idea or an opportunity? I’d love to hear about it.</p></div><a className="footer-cta" href="#contact">Get in touch <ArrowUpRight size={20}/></a></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} {profile.name}. Built with intention.</span><div><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><Link href="/">Back to top ↑</Link></div></div></footer>}
