import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import bg from '../public/assets/bg.png'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container'>
     
     
      <div className='container-card'>
        <div className='container-left'>
        <div className='ctn-image'><Image src={bg}/></div>
        </div>
        <div className='container-right'>
          <div className='ctn-description'>
            <p className='description'>Une application mobile 100 % Congolaise.</p>
            <p className='description'> Déjà disponible pour Android sur PlayStore et Ios sur  AppStore</p>
          </div>
         
          <button> 
          <Link href="/Contact">Contact</Link>
          </button>
        </div>
        
       
      </div>
      </main>
    </>
  )
}
