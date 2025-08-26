import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Chatbot } from "@/components/chatbot"

export const metadata: Metadata = {
  title: 'Hope of Faith Foundation | Empowering Ugandan Children',
  description: 'The Hope of Faith Foundation is a non-profit organization dedicated to transforming the lives of vulnerable children in Uganda through education, healthcare, and community empowerment.',
  keywords: ['Hope of Faith Foundation', 'Uganda charity', 'non-profit Uganda', 'empower children Uganda', 'education in Uganda', 'healthcare in Uganda', 'vulnerable children support'],
  openGraph: {
    title: 'Hope of Faith Foundation | Empowering Ugandan Children',
    description: 'Join us in transforming the lives of vulnerable children in Uganda through holistic care, education, and sustainable development projects.',
    url: 'https://hopeoffaithfoundation.org',
    siteName: 'Hope of Faith Foundation',
    images: [
      {
        url: 'https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0062.jpg?raw=true',
        width: 1200,
        height: 630,
        alt: 'Hope of Faith Foundation - Empowering Communities in Uganda',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hope of Faith Foundation | Empowering Ugandan Children',
    description: 'Support our mission to provide education, healthcare, and a loving community for vulnerable children in Uganda.',
    images: ['https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0062.jpg?raw=true'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://hopeoffaithfoundation.org',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}
