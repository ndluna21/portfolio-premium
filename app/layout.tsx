import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Nguyễn Đức Luận — Frontend Developer",
  description:
    "Frontend Developer at APUS Digital Technology Solutions JSC specializing in enterprise ERP platforms. Building scalable systems with Next.js, TypeScript, React Hook Form, and Material UI.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Material UI",
    "React Hook Form",
    "ERP",
    "Ha Noi",
    "Vietnam",
    "APUS",
    "Nguyễn Đức Luận",
    "Duc Luan Nguyen",
  ],
  authors: [{ name: "Nguyễn Đức Luận" }],
  creator: "Nguyễn Đức Luận",
  openGraph: {
    title: "Nguyễn Đức Luận — Frontend Developer",
    description:
      "Frontend Developer at APUS Digital Technology Solutions JSC specializing in enterprise ERP platforms.",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Đức Luận — Frontend Developer",
    description:
      "Frontend Developer at APUS Digital Technology Solutions JSC specializing in enterprise ERP platforms.",
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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-text-primary antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
