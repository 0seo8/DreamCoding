import React from 'react';
import { SiGithub, SiNotion, SiVelog } from 'react-icons/si';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: '영서에게 메일 보내기',
};
const LINKS = [
  { icon: <SiGithub />, url: 'https://github.com/0seo8' },
  {
    icon: <SiNotion />,
    url: 'https://0seo23.notion.site/26dd97822a6440c7b6125f7d2516377d?pvs=4',
  },
  { icon: <SiVelog />, url: 'https://velog.io/@0seo8' },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>00seo23@gmail.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            className="text-5xl hover:text-yellow-400"
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
