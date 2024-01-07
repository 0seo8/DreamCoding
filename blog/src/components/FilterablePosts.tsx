//카테고리라는 상태를 가지기 때문에 클라이언트 컴포넌트가 되어야 함.
'use client'
import React, { useState } from 'react';
import { Post } from '@/service/posts';
import PostsGrid from '@/components/PostsGrid';
import Categories from '@/components/Categories';

type Props = {
  posts: Post[];
  categories: string[];
}

const ALL_POSTS = 'All Posts'

export default function FilterablePosts({posts, categories}:Props) {
  const [selected, setSelected] = useState(ALL_POSTS)
  const filtered = selected === ALL_POSTS ? posts : posts.filter(post => post.category===selected)
  return (
  <section className="flex m-4">
    <PostsGrid posts={filtered} />
    <Categories
      categories={[ALL_POSTS, ...categories]}
      selected={selected}
      onClick={setSelected}
    />
  </section>
 );
}