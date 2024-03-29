"use Client";

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from "@/components/Providers";
import {NextAuthProvider} from "@/components/SessionProvider";
import StoreProvider from './globalRedux/StoreProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers><StoreProvider><NextAuthProvider>{children}</NextAuthProvider></StoreProvider></Providers>
      </body>
    </html>
  )
}
