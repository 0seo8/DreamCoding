import React from 'react';
import { Post } from '@/service/posts';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  post: Post
}

export default function PostCard({post: {title, path, description, featured, date, category}}:Props) {
  return (
  <Link href={`/post/${path}`}>
   <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
     <Image className="w-full" src={`/images/posts/${path}.png`} alt={title} width={300} height={200} />
     <div className="flex flex-col items-center p-4">
       <time className="self-end text-gray-700">{date.toString()}</time>
     <h3 className="text-lg font-bold">{title}</h3>
     {/*truncate : 한줄이 넘어가면 자동으로 잘라지게 함 단, w-full이 적용된 상태여야지 적용이 됨.*/}
     <p className="w-full truncate text-center">{description}</p>
     <span className="text-sm rounded-lg bg-green-100 px-2 my-2">
       {category}
     </span>
     </div>
   </article>
  </Link>
 );
}