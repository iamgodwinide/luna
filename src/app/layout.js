import "./globals.css";
import {
  Montserrat
} from 'next/font/google'

const montserrat = Montserrat({
  subsets: [
    "latin"
  ],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ]
})


export const metadata = {
  title: "Free Luna",
  description: "Help Luna Find Freedom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
        <footer className="text-center p-3 bg-blue-300 text-lg font-bold">
          <p className="text-black">Copyright&copy; 2024. Help Save Luna💗</p>
        </footer>
      </body>
    </html>
  );
}
