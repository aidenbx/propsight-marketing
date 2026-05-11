import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '800'],
});

export const metadata = {
  title: 'Vestio — AI Property Scout for Australia',
  description: 'Vestio helps first home buyers and investors across Australia find better properties faster. AI-scored daily digest, capital growth signals, and inspection scheduling.',
  keywords: 'property search australia, AI property, first home buyer australia, property investor, sydney property, brisbane property, investment property app, daily property digest',
  openGraph: {
    title: 'Vestio — Find your next property smarter',
    description: 'AI-powered daily property digest for Australian buyers and investors.',
    url: 'https://vestio.com.au',
    siteName: 'Vestio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Vestio — AI Property Scout' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vestio — AI Property Scout',
    description: 'AI-powered daily property digest for Australian buyers and investors.',
    images: ['/og-image.png'],
  },
  metadataBase: new URL('https://vestio.com.au'),
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
