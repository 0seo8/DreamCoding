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

export type PostData = Post & {
  content: string;
  next: Post | null ;
  prev: Post | null
};


export async function getNonFeaturedPosts(): Promise<Post[]>{
  return getAllPosts()
    .then(posts => posts.filter((post) => !post.featured))
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

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts',  `${fileName}.md`);
  const posts = await getAllPosts()
    const post = posts.find(post => post.path === fileName);

    if(!post)
      throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

    const index = posts.indexOf(post);
    const prev = index < posts.length - 1 ? posts[index + 1] : null;
    const next = index > 0 ? posts[index - 1] : null;
    const content = await readFile(filePath, 'utf-8');
    return {...post, content, next, prev};
}