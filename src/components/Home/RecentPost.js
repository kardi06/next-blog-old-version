import { sortBlog } from '@/src/utils'
import React from 'react'
import BlogLayoutOne from '../Blog/BlogLayoutOne';
import BlogLayoutTwo from '../Blog/BlogLayoutTwo';
import Link from 'next/link';

export default function RecentPost({blogs}) {
    const sortedBlog = sortBlog(blogs);
    return (
        <section className='w-full mt-32 px-32 flex flex-col items-center justify-center'>
            <div className='flex justify-between w-full'>
                <h2 className='inline-block font-bold capitalize text-4xl'>Recent Post</h2>
                <Link href="/categories/all" className='inline-block font-medium text-accent underline underline-offset-2 text-lg'>View All</Link>
            </div>
            <div className='grid grid-cols-3 grid-rows-3 gap-16 mt-16'>
                {
                    sortedBlog.slice(5,11).map((blog, index) => {
                        return <article className='col-span-1 row-span-1 relative' key={index}>blog-layout 3</article>
                    })
                }
            </div>
        </section>
    )
}
