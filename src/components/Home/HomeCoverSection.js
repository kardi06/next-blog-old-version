import { sortBlog } from '@/src/utils'
import Image from 'next/image';
import React from 'react'

export default function HomeCoverSection({blogs}) {
    
    const sortedBlogs = sortBlog(blogs);
    const blog = sortedBlogs[0];
    
    return (
        <div className='w-full inline-block'>
            <article className='flex flex-col items-start justify-end mx-10 relative h-[85vh]'>
                <div className='absolute top-0 left-0 bottom-0 right-0 h-full 
                    bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl z-0 
                '/>
                <Image src={blog.image.filePath.replace("../public","")} 
                    alt={blog.title}
                    blurDataURL={blog.image.blurhashDataURL}
                    fill
                    className='h-full w-full object-center object-cover rounded-3xl -z-10'
                />
            </article>    
        </div>
    )
}
