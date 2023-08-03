import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Metadata } from "next";

config.autoAddCss = false;

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Adam Abbas",
  description: "Turning Visions into Digital Realities",
  themeColor: "#000000",
  openGraph: {
    type: "website",
    url: "https://adamabbas.dev",
    title: "Adam Abbas",
    description: "Turning Visions into Digital Realities",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Adam Abbas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Abbas",
    description: "Turning Visions into Digital Realities",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Adam Abbas",
      },
    ],
  },
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout