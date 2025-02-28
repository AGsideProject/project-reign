import Footer from "components/layouts/footer";
import Header from "components/layouts/header";

export const metadata = {
  title: "Reign Models",
  description: "Reign Models Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
