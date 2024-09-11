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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          strategy="lazyOnload"
          onLoad={() => {
            console.log('Script loaded correctly');
          }}
          type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script
          strategy="lazyOnload"
          onLoad={() => {
            console.log('Script loaded correctly');
          }}
          nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </head>
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
