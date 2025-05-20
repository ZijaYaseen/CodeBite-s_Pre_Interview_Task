'use client';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '../data/main';

export default function Blogs() {
  return (
    <main>
      <section className="max-w-[1440px] mx-auto font-roboto md:py-20 py-10 px-5 md:px-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Design events near your
            </h2>
            <Link href="/events"
               className="text-purple-600 font-medium text-base hover:underline">
                Explore Events &rarr;
              
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {posts.map(post => (
              <div key={post.id} className="bg-white rounded-[5px] shadow-md overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <span className='absolute top-4 left-4 px-2 py-1 text-sm font-semibold rounded-[4px] bg-purple-100 text-purple-800'>
                    {post.category}
                  </span>
                </div>
                <div className="p-4">
                    <span className='text-base font-medium text-black'>
                    {post.category}
                </span>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h3>
                  <Link href={post.link}>
                    <button className="text-purple-600 font-medium text-base hover:underline">
                      Buy Tickets &rarr;
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}