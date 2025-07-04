import { sortBlog } from '@/src/utils'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import  Tag  from '../Elements/Tag';
import { slug } from 'github-slugger';

export default function HomeCoverSection({blogs}) {
    
    const sortedBlogs = sortBlog(blogs);
    const blog = sortedBlogs[0];
    
    return (
        <div className='w-full inline-block'>
            <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]'>
                <div className='absolute top-0 left-0 bottom-0 right-0 h-full 
                    bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl z-0 
                '/>
                <Image src={blog.image.filePath.replace("../public","")} 
                    alt={blog.title}
                    blurDataURL={blog.image.blurhashDataURL}
                    fill
                    className='h-full w-full object-center object-cover rounded-3xl -z-10'
                />
                <div className='w-3/4 p-16 flex flex-col items-start justify-center z-0 text-light'>
                    <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]}/>
                    <Link href={blog.url} className='mt-6'>
                        <h1 className='font-bold capitalize text-4xl'>
                            <span className='bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-no-repeat transition-[background-size] duration-500 bg-left-bottom'>
                                {blog.title}
                            </span>
                        </h1>
                    </Link>
                    <p className='inline-block mt-4 text-xl font-in'>{blog.description}</p>
                </div>
            </article>    
        </div>
    )
}
