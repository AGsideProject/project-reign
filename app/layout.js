import localFont from "next/font/local";
import "styles/globals.css";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const geitTest = localFont({
  src: "../public/fonts/Butler_Light_Stencil.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const myFont = localFont({
  src: "../public/fonts/Butler_Light_Stencil.otf",
  display: 'swap',
})

// const custom = localFont({
//   src: [
//     {
//       path: '../public/fonts/Butler_Light_Stencil.otf"',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './Roboto-Italic.woff2',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: './Roboto-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: './Roboto-BoldItalic.woff2',
//       weight: '700',
//       style: 'italic',
//     },
//   ],
// })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      // className={`${geitTest.variable} antialiased`}
      >
        {children}
      </body>
    </html >
  );
}
