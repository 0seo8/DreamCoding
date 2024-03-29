import React from 'react';
import { getAllPosts, getFeaturedPosts } from '@/service/posts';
import FilterablePosts from '@/components/FilterablePosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: '스택 관련 블로그 글',
};
export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePosts posts={posts} categories={categories} />;
}

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map((post) => ({
    slug: post.path,
  }));
}
