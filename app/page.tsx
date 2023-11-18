import { allBlogs, allPosts } from '@/.contentlayer/generated'
import Link from '@/components/Link'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import Main from './Main'

export default function Home() {
  const sortedBlogs = sortPosts(allBlogs)
  const blogs = allCoreContent(sortedBlogs)
  return (
    <>
      {/* <div className="prose dark:prose-invert">
        {allPosts.map((post) => (
          <article key={post._id}>
            <Link href={post.slug} className="text-gray-900 dark:text-gray-100">
              {post.title}
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
      </div> */}
      <Main blogs={blogs} />
    </>
  )
}
