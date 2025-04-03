import { allDocs } from 'contentlayer/generated'
import HomeCoverSection from '../components/Home/HomeCoverSection'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allDocs}/>
    </main>
  )
}
