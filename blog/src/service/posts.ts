import path from "path"
import {readFile} from 'fs/promises'

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
}

export async function getFeaturedPosts():Promise<Post[]>{
  return getAllPosts()
    .then(posts => posts.filter((post) =>post.featured))
}

export async function getAllPosts(): Promise<Post[]> {
  // path에 있는 join을 이용해 현재 process가 동작하고 있는 경로를 받아와, 프로젝트 안의 data폴더 안에 있는 posts.json파일을 읽어옴
  const filePath = path.join(process.cwd(), 'data', 'posts.json')
  //promise에 있는 readFile을 가져와(promise를 반환) 원하는 사용하고자 하는 utf-8를 전달
  return readFile(filePath, 'utf-8')
    // 전달하는 data와 호출하는 data 동일하면 생략이 가능
    // .then(data => JSON.parse(data))
    .then<Post[]>(JSON.parse)
    //최신 data가 위로 오도록 정렬
    .then(post => post.sort((a, b)=> (a.date > b.date ? -1 : 1)))
}