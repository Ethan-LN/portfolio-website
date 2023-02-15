import { Inter } from '@next/font/google'
import styles from './page.module.css'
import "./globals.css"
import personalImage from "../Resouce/Personal-photo-1-transformed.png"
import Image from 'next/image'

export default function Home() {
  return (
    <main >
      <h1 className="text-3xl font-bold text-white"> Ethan </h1>
      <div className='flex justify-center'>
        <Image src={personalImage} alt="my photo" width={300}/>
      </div>

    </main>
  )
}