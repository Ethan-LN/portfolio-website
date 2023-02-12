import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import "./globals.css"
export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-red-500">
      Hello world!
    </h1>
    </main>
  )
}
