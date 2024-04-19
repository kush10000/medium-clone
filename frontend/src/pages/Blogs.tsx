import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";


export default function Blogs(){
    const {loading,blogs} = useBlogs();

    if(loading){
        return<div className="flex justify-center">
            <div>
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
            </div>
            
        </div>
    }
    
    return <div>
        <Appbar />
            <div className="flex justify-center">
            <div className="flex flex-col justify-center ">
                {blogs.map(blog => <BlogCard
                authorName={blog.author.email}
                title={blog.title}
                content={blog.content}
                id={blog.id}
                publishedDate="{blog.publishedDate}"
                />)}
            </div>
        </div>
    </div>
}