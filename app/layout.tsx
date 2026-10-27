
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engineering Signal | AI, Computer Vision & Systems",
  description:
    "An engineering portfolio exploring artificial intelligence, computer vision, software engineering, and reliable systems.",
  applicationName: "Engineering Signal",
  openGraph: {
    title: "Engineering Signal — Ideas into Systems",
    description:
      "Explore projects, experiments, and engineering ideas at the intersection of AI and software systems.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
