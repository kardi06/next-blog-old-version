import React from 'react';
import Tag from "@/src/components/Elements/Tag";
import { allDocs } from "contentlayer/generated";
import Image from 'next/image';
import BlogDetails from '@/src/components/Blog/BlogDetails';
import RenderMdx from '@/src/components/Blog/RenderMdx';

export default function BlogPage({params}) {
    const blog = allDocs.find((blog) => blog._raw.flattenedPath === params.slug);
    return (
        <article>
            <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
                <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Tag link={`/categories/${blog.tags[0]}`} name={blog.tags[0]} className='px-6 text-sm py-2 !border'/>
                    <h1 className="inline-block mt-6 font-semibold capitalize text-light text-5xl leading-normal relative w-5/6">
                        {blog.title}
                    </h1>
                </div>
                <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-dark/60"/>
                    <Image src={blog.image.filePath.replace("../public","")} 
                        alt={blog.title}
                        blurDataURL={blog.image.blurhashDataURL}
                        width={blog.image.width}
                        height={blog.image.height}
                        className='aspect-square w-full h-full object-center'
                    />
            </div>
            <BlogDetails blog={blog}/>

            <div className="grid grid-cols-12 gap-16 mt-8 px-10">
                <div className="col-span-4">TOC</div>
                <RenderMdx blog={blog}/>
            </div>
        </article>
    )
}
