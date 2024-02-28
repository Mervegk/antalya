import React from 'react'
import { Announcment } from '@/app/data/announcment';

async function getPosts(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}

export async function generateMetaData({ params }) {
    /*  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
         next: { revalidate: 30 }
     }) */
    const post = await getPosts(params.id);
    return {
        title: post.title,
    }
}

export default async function page({ params }) {
    const post = await getPosts(params.id)
    return (
        <div className='min-h-[calc(100vh-545px)] h-full w-full  flex flex-col justify-center items-center '>
            <div className='text-center'>
                <h3 className='font-bold text-base md:text-lg lg:text-xl mb-4'>{post.title.toLocaleUpperCase()}</h3>
                <div>
                    <p>{post.body}</p>
                </div>
            </div>

        </div>
    )
}

