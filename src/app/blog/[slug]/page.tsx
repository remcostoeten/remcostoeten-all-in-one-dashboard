import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'
import { format } from 'date-fns'
import { useMDXComponent } from '@/core/hooks/useMDXComponent'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) return {}
  return { title: post.title }
}

const MDXContent = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code)
  return <Component />
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) notFound()

  return (
    <article className="mx-auto max-w-2xl py-16">
      <div className="mb-6 text-center">
        <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
        <time dateTime={post.date} className="text-sm text-gray-600">
          {format(new Date(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <MDXContent code={post.body.code} />
    </article>
  )
}