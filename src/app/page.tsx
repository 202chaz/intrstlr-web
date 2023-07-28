'use client'

import Image from 'next/image'
import { useEffect } from 'react';
import Head from 'next/head'

export default function Home() {
  let textArray = [
    "Reduce Your Stress.",
    "Help to Link With Positive \n Past Memories.",
    "Help You Set a Ritual.",
    "Transform the Ambiance of a Space.",
    "Improve Your Mood.",
    "Help With Your Sleep.",
    "Promote Feelings Of \n Tranquillity and Calm.",
    "Relax The Mind and Body."
  ];

  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;
  let typedTextSpan: any;
  let cursorSpan: any;

  const erase = () => {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

  const type = () => {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

  useEffect(() => {
    typedTextSpan = document.querySelector(".typed-text");
    cursorSpan = document.querySelector(".cursor");
    if(textArray.length) setTimeout(type, newTextDelay + 250)
  }, [])

  return (
    <>
      <Head>
        <title>INTRSTLR | Coming Soon</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2 className="main-heading">INTRSTLR</h2>
        <div className="typewriter">
          <p>I Can <span className="typed-text"></span><span className="cursor">&nbsp;</span></p>
        </div>

        <div className="main-container">
          <Image 
            alt="Picture of candle"
            src="/cndl.png" 
            width={500}
            height={500}
          />
        </div>
      </main>
    </>
  )
}