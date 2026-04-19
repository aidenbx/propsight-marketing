import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '800'],
});

export const metadata = {
  title: 'PropSight — AI Property Scout for Australia & New Zealand',
  description: "PropSight scans the property market every morning, scores every listing with AI, and delivers your personalised digest before you've had your coffee. Free to start.",
  keywords: 'property search australia, AI property, brisbane property, investment property app, daily property digest',
  openGraph: {
    title: 'PropSight — Find your next property smarter',
    description: 'AI-powered daily property digest for AU & NZ buyers.',
    url: 'https://propsight.com.au',
    siteName: 'PropSight',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'PropSight — AI Property Scout' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PropSight — AI Property Scout',
    description: 'AI-powered daily property digest for AU & NZ buyers.',
    images: ['/og-image.png'],
  },
  metadataBase: new URL('https://propsight.com.au'),
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
