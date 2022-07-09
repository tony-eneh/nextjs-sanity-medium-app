import Link from 'next/link';
import React from 'react';
import { urlFor } from '../sanity';
import { Post } from '../typings';

function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 lg:gap-3 py-5 px-5 md:px-0">
      {posts.map((post) => (
        <Link href={`/posts/${post.slug.current}`} key={post._id}>
          <div className="group space-y-5 overflow-hidden border rounded border-transparent">
            <img className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" src={urlFor(post.mainImage).url()!} alt={post.title} />
            <div className="flex justify-between space-x-5 h-14">
              <div>
                <p className="font-bold">{post.title}</p>
                <p>{post.description}</p>
              </div>
              <img
                className="w-20 object-cover"
                src={urlFor(post.author.image).url()}
                alt={post.author.name}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Posts;
