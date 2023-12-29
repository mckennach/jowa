import { NextResponse } from "next/server";
import { draftMode } from 'next/headers'
import { redirect } from "next/navigation";
import { getPreviewPost } from "@/lib/api";

export async function GET(request: Request) {

  // const { secret, id, slug } = request.query;
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const id = searchParams.get('id');
  const slug = searchParams.get('slug');
  // return NextResponse.json({ message: 'Test' }, { status: 200 });
  // return NextResponse.redirect(`/posts/another-test-post`);

  // Check the secret and next parameters
  // This secret should only be known by this API route
  if (
    !process.env.WORDPRESS_PREVIEW_SECRET ||
    secret !== process.env.WORDPRESS_PREVIEW_SECRET ||
    (!id && !slug)
  ) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
  

  // // Fetch WordPress to check if the provided `id` or `slug` exists
  const post = await getPreviewPost(id || slug, id ? 'DATABASE_ID' : 'SLUG')

  // // If the post doesn't exist prevent preview mode from being enabled
  if (!post) {
    return NextResponse.json({ message: 'Post not found' }, { status: 401 });
  }

  // return NextResponse.json({ post }, { status: 200 });

  // // Enable Draft Mode by setting the cookie
  draftMode().enable();
  const postData = {
    post: {
      id: post.databaseId,
      slug: post.slug,
      status: post.status,
    }
  }


  // Redirect to the path from the fetched post
  const redirectUrl = new URL(`/posts/${ post?.slug || post?.databaseId }`, request.url);
  console.log(redirectUrl);
  redirectUrl.searchParams.append('previewData', JSON.stringify(postData));

  return NextResponse.redirect(redirectUrl);

}