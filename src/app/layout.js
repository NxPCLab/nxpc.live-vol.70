// RootLayout.js
import { Inter } from "next/font/google";
import Image from "next/image";
import Noise from "../../public/noisetrans02.png";
import WebGLCanvas from "./components/WebGLCanvas";
import { metadata } from "./components/meta";
import "./globals.css";
import styles from "./modules/layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <div className={styles.figureContainer}>
            <Image
              src={Noise}
              alt="Noise overlay"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.canvasContainer}>
            <WebGLCanvas />
          </div>
          <div className={styles.content}>{children}</div>
        </div>
      </body>
    </html>
  );
}
