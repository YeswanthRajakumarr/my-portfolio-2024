import "./globals.css";
export const metadata = {
  title: "Yeswanth Rajakumar",
  description: "I'm Batman 😉",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto w-full max-w-3xl px-4 lg:px-20 pt-4 md:pt-10 ">
          {children}
        </div>
      </body>
    </html>
  );
}
