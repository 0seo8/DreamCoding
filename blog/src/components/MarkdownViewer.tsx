// 'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import Image from 'next/image';

type Props = {
  content: string
}
export default function MarkdownViewer({content}: Props) {
  return (
  <ReactMarkdown
    className="prose max-w-none"
    remarkPlugins={[remarkGfm]}
    components={{
       code({children, className, node, ref, ...props}) {
         const match = /language-(\w+)/.exec(className || '')
         return match ? (
           <SyntaxHighlighter
             language={match[1]}
             PreTag="div"
             {...props}
             style={materialDark}
           >
             {String(children).replace(/\n$/, '')}
           </SyntaxHighlighter>
         ) : (
           <code {...props} className={className}>
             {children}
           </code>
         )
       },
      img: (image) => (
        <Image
          className='w-full max-h-60 object-cover'
          src={image.src || ''}
          alt={image.alt || ''}
          width={500}
          height={350}
        />
      ),
    }}
  >
    {content}
  </ReactMarkdown>
 );
}