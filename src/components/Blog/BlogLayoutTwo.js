import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Tag } from '../Elements/Tag'
import { format } from 'date-fns'

export default function BlogLayoutTwo({blog}) {
    return (
        <div className='grid grid-cols-12 gap-4 items-center text-dark'>
            <Link href={blog.url} className='col-span-4 h-full rounded-xl overflow-hidden'>
                <Image src={blog.image.filePath.replace("../public","")} 
                    alt={blog.title}
                    blurDataURL={blog.image.blurhashDataURL}
                    width={blog.image.width}
                    height={blog.image.height}
                    className='aspect-square w-full h-full object-center object-cover'
                />
            </Link>
            <div className='col-span-8 w-full'>
                <span className='uppercase text-accent font-semibold text-sm'>{blog.tags[0]}</span>
                <Link href={blog.url} className='inline-block my-1'>
                    <h2 className='font-semibold capitalize text-lg'>
                        <span className='bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-no-repeat transition-[background-size] duration-500 bg-left-bottom'>
                            {blog.title}
                        </span>
                    </h2>
                </Link>
                <span>{format(new Date(blog.publishedAt), 'dd MMMM yyyy')}</span>
            </div>
        </div>
    )
}
