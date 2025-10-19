import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Hapus duplikasi, cukup satu
import "./fonts.css"; // Impor font kustom
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Suspense } from "react"; // Tambah ini untuk loading state



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Belajar Aksara Jawa",
  description: "Belajar membaca dan menulis Aksara Jawa dengan cara yang menyenangkan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50`}>
        <Navbar />
        <main className="flex-1">
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-[calc(100vh-160px)] p-8"> {/* Adjust height untuk navbar + footer */}
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div> {/* Spinner sederhana */}
                  <p className="text-lg text-slate-600">Memuat halaman...</p>
                </div>
              </div>
            }
          >
            {children}
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}