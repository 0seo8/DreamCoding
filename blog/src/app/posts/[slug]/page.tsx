import React from 'react';
import { getPostData } from '@/service/posts';
import Image from 'next/image'
import PostContent from '@/components/PostContent';

type Props = {
  params: {
    slug : string;
  }
}

export default async  function PostPage({params: {slug}}:Props) {
  const post = await getPostData(slug);
  return (
  <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
    <Image className="w-full h-1/5 max-h-[500px]" src={`/images/posts/${post.path}.png`} alt={post.title} width={760} height={420} />
    <PostContent post={post} />
  </article>
 );
}