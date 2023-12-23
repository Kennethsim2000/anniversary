import Image from 'next/image'
import Slider from './Slider.tsx';

const animation = { duration: 5000, easing: (t:any) => t }
export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center md:p-24 p-6">
      <Slider/>
    </main>
  )
}
