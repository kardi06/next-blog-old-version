import Image from 'next/image'
import React from 'react'
import  Tag from '../Elements/Tag'
import Link from 'next/link'
import { slug } from 'github-slugger'

export default function BlogLayoutOne({blog}) {
    return (
        <div className='group inline-block overflow-hidden rounded-xl'>
            <div className='absolute top-0 left-0 bottom-0 right-0 h-full 
                bg-gradient-to-b from-transparent from-0% to-dark/90  rounded-3xl z-10 
            '/>
            <Image src={blog.image.filePath.replace("../public","")} 
                alt={blog.title}
                blurDataURL={blog.image.blurhashDataURL}
                width={blog.image.width}
                height={blog.image.height}
                className='h-full w-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300 '
            />
            <div className='w-full absolute bottom-0 p-10 z-20'>
                <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} className='px-6 text-sm py-2 !border'/>
                <Link href={blog.url} className='mt-6'>
                    <h2 className='font-bold capitalize text-2xl text-light mt-4'>
                        <span className='bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-no-repeat transition-[background-size] duration-500 bg-left-bottom'>
                            {blog.title}
                        </span>
                    </h2>
                </Link>
            </div>
        </div>
    )
}
