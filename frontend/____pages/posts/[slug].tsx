import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { draftMode } from 'next/headers'
import { GetStaticPaths, GetStaticProps } from 'next'
import Container from '../../src/components/container'
import PostBody from '../../src/components/post-body'
import MoreStories from '../../src/components/more-stories'
import Header from '../../src/components/header'
import PostHeader from '../../src/components/post-header'
import SectionSeparator from '../../src/components/section-separator'
import Layout from '../../src/components/layout'
import PostTitle from '../../src/components/post-title'
import Tags from '../../src/components/tags'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../src/lib/api'
import { CMS_NAME } from '../../src/lib/constants'
import { is } from 'date-fns/locale'

export default function Post({ post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts?.edges
  
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${post.title} | Next.js Blog Example with ${CMS_NAME}`}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  }
}
