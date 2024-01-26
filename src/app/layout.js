import "./globals.css";
export const metadata = {
  title: "Yeswanth Rajakumar",
  description: "I'm Batman 😉",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-full max-w-3xl px-4 pt-4 mx-auto lg:px-20 md:pt-10 ">
          {children}
        </div>
      </body>
    </html>
  );
}
