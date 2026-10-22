import "./globals.css";
export const metadata = {
  metadataBase: new URL("https://github.com/Saklainmostak-learner"),
  title: { default: "Saqlain Mostak | Full Stack Developer", template: "%s" },
  description: "Saqlain Mostak is a Bangladesh-based junior full-stack developer building responsive products with React, Next.js, Node.js and MongoDB. Explore SportNest, ArtHub, FORMA and KeenKeeper.",
  openGraph: { title: "Saqlain Mostak — Developer Portfolio", description: "Thoughtful interfaces, real projects and continuous learning.", type: "website", images: [{ url: "/og-cover.png", width: 1200, height: 630 }] },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }) { return <html lang="en"><body suppressHydrationWarning>{children}</body></html>; }
