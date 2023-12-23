'use client'

import Image from 'next/image'
import { useEffect } from 'react';
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  let textArray = [
    "reduce your stress.",
    "help to link with positive \n past memories.",
    "help you set a ritual.",
    "transform the ambiance of a space.",
    "improve your mood.",
    "help with your sleep.",
    "promote feelings of \n tranquillity and calm.",
    "relax the mind and body."
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
      if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    }
    else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  const type = () => {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    }
    else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  const startCountdown = () => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date() as any,
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "02/01/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {

        const now = new Date().getTime(),
          distance = countDown - now;
        // @ts-ignore
        document.getElementById("days").innerText = Math.floor(distance / (day)),
          // @ts-ignore
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          // @ts-ignore
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          // @ts-ignore
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          // @ts-ignore
          document.getElementById("headline").innerText = "It's Launch Day!";
          // @ts-ignore
          document.getElementById("countdown").style.display = "none";
          // @ts-ignore
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }

  useEffect(() => {
    startCountdown()
    typedTextSpan = document.querySelector(".typed-text");
    cursorSpan = document.querySelector(".cursor");
    if (textArray.length) setTimeout(type, newTextDelay + 250)
  }, [])

  return (
    <>
      <div className="video-container">
        <video id="background-video" className='background-video' autoPlay loop muted playsInline poster="https://intrstlr.nyc3.cdn.digitaloceanspaces.com/video_poster.png">
          <source src="https://intrstlr.nyc3.cdn.digitaloceanspaces.com/intrstlr_add.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <h1 id="headline">Aromatherapy Candles</h1>
          <div id="countdown">
            <ul>
              <li><span id="days"></span>days</li>
              <li><span id="hours"></span>Hours</li>
              <li><span id="minutes"></span>Minutes</li>
              <li><span id="seconds"></span>Seconds</li>
            </ul>
          </div>
          <div id="content" className="emoji">
            <span>🥳</span>
            <span>🎉</span>
            <span>🎂</span>
          </div>
        </div>
        <div>
          <div className="typewriter">
            <p>I can <span className="typed-text"></span><span className="cursor">&nbsp;</span></p>
          </div>
        </div>
      </div>
    </>
  )
}
