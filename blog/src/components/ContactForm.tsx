'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import Banner, { BannerData } from '@/components/Banner';

type From = {
  from: string;
  subject: string;
  message: string;
};
export default function ContactForm() {
  const [form, setForm] = useState<From>({
    from: '',
    subject: '',
    message: '',
  });
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setBanner({ message: '성공했어!!', state: 'success' });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };

  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        className="w-full max-w-md flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white"
        onSubmit={onSubmit}
      >
        <label className="font-semibold" htmlFor="from">
          Your Email
        </label>
        <input
          className="text-black"
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />
        <label className="font-semibold" htmlFor="subject">
          Subject
        </label>
        <input
          className="text-black"
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
        />
        <label className="font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          className="text-black"
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
        />
        <button className="bg-yellow-300 text-black font-bold hover:bg-amber-400">
          Submit
        </button>
      </form>
    </section>
  );
}
