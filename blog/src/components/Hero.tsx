import React from 'react';
import Image from 'next/image';
import profileImage from '../../public/images/profile.png'
import Link from 'next/link';

export default function Hero() {
  return (
  <section className="text-center">
    <Image className="rounded-full mx-auto" src={profileImage} alt="Picture of the auther" width={250} height={250}/>
    <h2 className="text-3xl font-bold mt-2">{"Hi, I'm youngseo"}</h2>
    <h3 className="text-xl font-semibold">FrontEnd Engineer</h3>
    <p>사용자의 사용성을 고려하는 프론트엔드 개발자 노영서입니다.</p>
    <Link href="/contact">
      <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">Contact Me</button>
    </Link>
  </section>
 );
}