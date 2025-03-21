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
      <body
        suppressHydrationWarning={true}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0,
        }}
      >
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
