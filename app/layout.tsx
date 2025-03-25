import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Inter, Lora, Source_Sans_3, IBM_Plex_Serif} from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

//This is the MAIN font currently
const robotoSans = Roboto({ 
  weight:"300",
  style:"normal",
  subsets:["latin"]
});

const InterFont = Inter({ 
  weight:"400",
  subsets:["latin"]
});

const LoraFont = Lora({ 
  weight:"400",
  subsets:["latin"]
});

const SourceSans3 = Source_Sans_3({ 
  weight:"300",
  subsets:["latin"]
});

const IBM_Plex_SerifFont = IBM_Plex_Serif({
  weight:"300",
  subsets:["latin"]
});

export const metadata: Metadata = {
  title: "Ideal Strategies",
  description: "Generated by create next app", // edit
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSans.className} antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
};
