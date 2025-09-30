import "./globals.css";
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: 'Rhythm & Remodeling: Comprehensive HCM Education | HCM Learning Center',
  description: 'Your comprehensive hub for excellence in HCM health education. Through expert interviews, interactive case discussions, and patient perspectives, we provide healthcare professionals with evidence-based, practical, and patient-centered learning for Hypertrophic Cardiomyopathy.',
  keywords: 'hypertrophic cardiomyopathy, HCM, cardiology, heart disease, cardiac remodeling, rhythm disorders, cardiovascular education, CME, BMS, Cytokinetics',
  authors: [{ name: 'HCM Learning Center' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Rhythm & Remodeling: Comprehensive HCM Education',
    description: 'Advancing knowledge, competence, and clinical excellence in the care of patients with Hypertrophic Cardiomyopathy.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/output (1).png',
        width: 1200,
        height: 630,
        alt: 'HCM Learning Center visual'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rhythm & Remodeling: Comprehensive HCM Education',
    description: 'Your comprehensive hub for excellence in HCM health education.',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
