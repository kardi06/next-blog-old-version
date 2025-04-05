import { sortBlog } from '@/src/utils'
import React from 'react'
import BlogLayoutOne from '../Blog/BlogLayoutOne';

export default function FeaturedPost({blogs}) {
    const sortedBlog = sortBlog(blogs);
    return (
        <section className='w-full mt-32 px-32 flex flex-col items-center justify-center'>
            <h2 className='w-full inline-block font-bold capitalize text-4xl'>FeaturedPost</h2>
            <div className='grid grid-cols-2 grid-rows-2 gap-6 mt-16'>
                <article className='col-span-1 row-span-1 relative'>
                    <BlogLayoutOne blog={sortedBlog[2]}/>
                </article>
                <article className='col-span-1 row-span-1 relative'>
                    blog Layout 1
                </article>
                <article className='col-span-1 row-span-1 relative'>
                    blog Layout 3
                </article>
            </div>
        </section>
    )
}
