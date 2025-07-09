import { useLoaderData } from "react-router-dom";


const BlogDetailes = () => {
    const blogs = useLoaderData();
    console.log(blogs);
    return (
        <div>
            <h1>This is blog Details page</h1>
        </div>
    );
};

export default BlogDetailes;