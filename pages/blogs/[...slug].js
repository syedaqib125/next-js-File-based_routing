import { useRouter } from "next/router";

const BlogPage = () => {//adding catch-all routes
    const router = useRouter()

    console.log(router.query);
    return (
        <h1>The Blog Posts</h1>
    )
}

export default BlogPage;