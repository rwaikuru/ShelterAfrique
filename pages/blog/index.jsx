import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {getAllPosts} from "../lib/post";

export async function getStaticProps() {
    const allPosts = await getAllPosts();

    return {
        props: { 
            allPosts: allPosts,
        },
    }
}


export default function BlogHome({ allPosts }) {
    return (
        <>
        <Head>
            <title>
                blog
                </title>
            </Head>
        </>
    )
}