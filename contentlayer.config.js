// contentlayer.config.js

import { makeSource, defineDocumentType } from '@contentlayer/source-files'

const Doc = defineDocumentType(() => ({
    name: 'Doc',
    filePathPattern: '**/**/*.mdx',
    fields: {
        title: {
            type: 'string',
        },
        publishAt: {
            type: 'date',
        },
        updatedAt: {
            type: 'date',
        },
    },
}))

export default makeSource({
    /* options */
    contentDirPath: 'content',
})