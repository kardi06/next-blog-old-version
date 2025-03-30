/** @type {import('next').NextConfig} */

// next.config.js
// import { withContentlayer } from 'next-contentlayer'
const {withContentlayer} = require('next-contentlayer')


const nextConfig = {}

// export default withContentlayer({nextConfig})
module.exports = withContentlayer({...nextConfig})
