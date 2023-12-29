import { NextResponse } from "next/server";
import { useSearchParams } from "next/navigation";
import { draftMode } from "next/headers";
import { getPostAndMorePosts } from "@/lib/api"
import Container from "@/components/container";
import Layout from "@/components/layout";
import PostHeader from "@/components/post-header";
import PostTitle from "@/components/post-title";
import PostBody from "@/components/post-body";
export default async function Post({ params, searchParams }: { params: { slug: string }, searchParams?: { [key: string]: string | undefined };
}) {
  const { isEnabled } = draftMode();
  // const searchParams = useSearchParams();
  const previewData = isEnabled ? searchParams?.previewData : null;
  const postData = previewData ? JSON.parse(previewData) : null;
  const { post } = await getPostAndMorePosts(params?.slug, isEnabled, postData) || {};
  

  
  return (
    <Layout preview={isEnabled}>
      <Container>
        {/* <PostTitle>{post?.title}</PostTitle> */}
        <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
        <PostBody content={post?.content} />
      </Container>
    </Layout>
    // <div className="container">
    //   <h1>{post?.title}</h1>
    //   <div dangerouslySetInnerHTML={{ __html: post?.content }} />
    // </div>
  )
}