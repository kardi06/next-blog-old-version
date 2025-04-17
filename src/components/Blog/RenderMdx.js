"use client"
import React from 'react'
import {useMDXComponent} from 'next-contentlayer/hooks'
import Image from 'next/image'

const mdxComponent = {
    Image
}

function RenderMdx({blog}) {
    const MDXContent = useMDXComponent(blog.body.code)
    return (
        <div className='col-span-8 font-in'>
            <MDXContent components={mdxComponent}/>
        </div>
    )
}

export default RenderMdx