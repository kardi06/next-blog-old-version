import { allDocs } from 'contentlayer/generated'
import HomeCoverSection from '../components/Home/HomeCoverSection'
import FeaturedPost from '../components/Home/FeaturedPost'
import RecentPost from '../components/Home/RecentPost'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allDocs}/>
      <FeaturedPost blogs={allDocs}/>
      <RecentPost blogs={allDocs}/>
      <Footer/>
    </main>
  )
}
