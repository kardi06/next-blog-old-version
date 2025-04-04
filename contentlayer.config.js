// contentlayer.config.js

import { makeSource, defineDocumentType } from '@contentlayer/source-files'
// import { description } from './project files/siteMetaData'

const Blog = defineDocumentType(() => ({
    name: 'Doc',
    filePathPattern: '**/**/*.mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        publishedAt: {
            type: 'date',
            required: true,
        },
        updatedAt: {
            type: 'date',
            required: true,
        },
        description: {
            type: 'string',
            required: true,
        },
        image: { 
            type: "image" , 
        },
        isPublished: {
            type: 'boolean',
            default: true,
        },
        author: {
            type: 'string',
            required: true,
        },
        tags: {
            type: 'list',
            of: { type: 'string' },
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
        }
    }
}))

export default makeSource({
    /* options */
    contentDirPath: 'content',
    documentTypes: [Blog],
})