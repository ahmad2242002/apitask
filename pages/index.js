import Image from 'next/image'
import { Inter } from 'next/font/google'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Link from 'next/link.js';
import GetDataApi from './api/getDataApi'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className=' text-5xl mx-36 mt-8 '>Users</h1>
      <GetDataApi >
        
      </GetDataApi>
   </main>

  )
  }
