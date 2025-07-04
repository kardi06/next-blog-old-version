import { sortBlog } from '@/src/utils'
import React from 'react'
import BlogLayoutOne from '../Blog/BlogLayoutOne';
import BlogLayoutTwo from '../Blog/BlogLayoutTwo';

export default function FeaturedPost({blogs}) {
    const sortedBlog = sortBlog(blogs);
    return (
        <section className='w-full mt-32 px-32 flex flex-col items-center justify-center'>
            <h2 className='w-full inline-block font-bold capitalize text-4xl dark:text-light'>FeaturedPost</h2>
            <div className='grid grid-cols-2 grid-rows-2 gap-6 mt-16'>
                <article className='col-span-1 row-span-2 relative'>
                    <BlogLayoutOne blog={sortedBlog[1]}/>
                </article>
                <article className='col-span-1 row-span-1 relative'>
                    <BlogLayoutTwo blog={sortedBlog[2]}/>
                </article>
                <article className='col-span-1 row-span-1 relative'>
                    <BlogLayoutTwo blog={sortedBlog[3]}/>
                </article>
            </div>
        </section>
    )
}
