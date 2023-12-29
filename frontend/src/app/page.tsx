import Image from 'next/image'
import Container from '@/components/container'
import MoreStories from '@/components/more-stories'
import HeroPost from '@/components/hero-post'
import Intro from '@/components/intro'
import Layout from '@/components/layout'
import { getAllPostsForHome } from '@/lib/api'
import { CMS_NAME } from '@/lib/constants'
import Link from 'next/link'



const fetchPreview = async () => {
  const { WORDPRESS_PREVIEW_SECRET } = process.env;
  const res = await fetch(
    `http://localhost:3000/api/preview?secret=${WORDPRESS_PREVIEW_SECRET}&id=14`,
    {
      next: {
        revalidate: 1,
      }
    }
  )
  const post = await res.json()

  return post
}

export default async function Home() {
  // const post = await fetchPreview();
  const { edges } = await getAllPostsForHome(false) || { edges: [] };
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  const { WORDPRESS_PREVIEW_SECRET } = process.env;
  // 
  // console.log(post);

  return (
    <Layout preview={false}>
      <Container>
        <Intro />
        
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}
