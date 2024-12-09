"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function App() {
  return (
    <div className="min-h-screen  text-black"
    
    style={{
      backgroundImage: `url('images/background.jpeg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    >
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold">Soul Script</div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-orange-500">HOME</Link>
          <Link href="#" className="text-gray-400 hover:text-white">PRICING</Link>
          <Link href="#" className="text-gray-400 hover:text-white">ABOUT US</Link>
          <Link href="#" className="text-gray-400 hover:text-white">SHOWCASE</Link>
        </div>
        <Link href="/chat"><Button className="bg-white text-black hover:bg-orange-500 hover:text-white">
          Let&apos;s get started
        </Button></Link>
        
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="relative text-center">
          <h1 className="text-8xl font-bold tracking-wider mb-4">SOUL SCRIPT.AI</h1>
          <div className="text-[rgb(233_33_151)] font-bold text-3xl tracking-wider opacity-50 mb-8">
            Where life unfold in Codes
          </div>
         

          {/* Main Character Image */}
          <div className="mt-12 relative flex justify-center">
            <Image
              src="/images/pixelcut-new.png"
              alt="AI Character"
              width={800}
              height={600}
              className="mx-auto"
            />
            {/* 001 Section */}
            <div className="absolute bottom-0 left-0 p-8 text-left">
              <h2 className="text-2xl font-bold mt-4">
              Where Code Meets Imagination
              </h2>
              <p className="text-[rgb(88_2_152)] mt-4 max-w-md">
              Dive into the world of AI-driven creativity. Soul Script AI empowers you to generate unique 3D characters, blending technology with imagination. Unlock endless design possibilities as you craft personalized characters effortlessly.
              </p>
              
              {/* VR Headset Image */}
              <div className="mt-8">
                <Image
                  src="/images/mind.png"
                  alt="VR Headset"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <div className="flex items-center mt-2">
                  <div className="w-24 h-1 bg-orange-500 rounded-full" />
                  <span className="ml-2 text-sm">Generating content...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Interaction Section */}
<section className="container mx-auto px-4 py-16">
  <h2 className="text-4xl font-bold text-center mb-16">
    CHAT WITH SOUL SCRIPT AI<br />
    TO DESIGN AND CUSTOMIZE YOUR CHARACTERS.
  </h2>

  {/* Soul Script AI Introduction */}
  <div className="text-lg text-center mb-12">
    <p>
      With <strong>Soul Script AI</strong>, you can now engage in intelligent, dynamic conversations to design and personalize your characters. Just like having a conversation with a creative assistant, Soul Script AI allows you to specify design choices, tweak details, and customize your characters by simply chatting with the AI.
    </p>
    
  </div>

  <div className="relative max-w-4xl mx-auto">
    <div className="grid grid-cols-3 gap-8">
      {[
        "Help me design a character with green eyes and blonde hair",
        "Can you make my character's outfit more futuristic?",
        "I want to add a glowing aura around my character."
      ].map((command, i) => (
        <div
          key={i}
          className="bg-light p-6 rounded-lg"
        >
          <div className="text-sm text-dark mb-2">Chat-Based Command</div>
          <div className="text-lg">{command}</div>
          <div className="mt-4 flex justify-end">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
          </div>
        </div>
      ))}
    </div>

    <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-light rounded-full flex items-center justify-center">
      <ChevronLeft className="w-6 h-6" />
    </button>
    <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-light rounded-full flex items-center justify-center">
      <ChevronRight className="w-6 h-6" />
    </button>
  </div>
</section>


      {/* Early Access Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-6xl font-bold text-center mb-12">EARLY ACCESS</h2>
        <div className="max-w-xl mx-auto">
          <div className="flex">
            <Input
              type="email"
              placeholder="Your email here..."
              className="flex-1 bg-transparent border-white/20 focus:border-orange-500"
            />
            <Button className="ml-2 bg-white text-black hover:bg-orange-500 hover:text-white">
              SUBMIT
            </Button>
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-white/10">
        <div className="flex justify-between items-center">
          <div className="text-sm text-black">
            all right reserved @char.ai
          </div>
          <div className="flex space-x-8">
            <Link href="#" className="text-black hover:text-white">PRICING</Link>
            <Link href="#" className="text-black hover:text-white">ABOUT US</Link>
            <Link href="#" className="text-black hover:text-white">SHOWCASE</Link>
          </div>
          <div className="text-sm text-black">
            CONTACT@CHAR.AI
          </div>
        </div>
      </footer>
    </div>
  )
}

