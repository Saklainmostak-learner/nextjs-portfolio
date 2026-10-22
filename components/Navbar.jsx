"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "@/data/site";
const links = [
  { title: "About", href: "/#about" },
  { title: "Skills", href: "/#skills" },
  { title: "Projects", href: "/#projects" },
  { title: "Education", href: "/#education" },
  { title: "Contact", href: "/#contact" },
];
export default function Navbar() {
  const [open,setOpen] = useState(false);
  const pathname = usePathname();
  return <header className="site-header"><nav className="nav shell" aria-label="Main navigation">
    <Link className="brand" href="/" onClick={()=>setOpen(false)}><span className="brand-symbol">S<span>.</span></span><span>{profile.name}<small>DEVELOPER / PORTFOLIO</small></span></Link>
    <div className="desktop-nav">{links.map(x=><Link key={x.href} href={x.href}>{x.title}</Link>)}</div>
    <div className="nav-right"><a className="nav-contact" href="/#contact">Let’s talk <ArrowUpRight size={15}/></a><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={open?"Close menu":"Open menu"}>{open?<X/>:<Menu/>}</button></div>
  </nav>{open&&<div className="mobile-nav shell">{links.map(x=><Link onClick={()=>setOpen(false)} key={x.href} href={x.href}>{x.title}<ArrowUpRight size={16}/></Link>)}</div>}</header>;
}
