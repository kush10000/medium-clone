import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { FullBlogSkeleton } from "../components/FullBlogSkeleton";

export default function Blog(){
    const {id} = useParams();
    const {loading,blog} = useBlog({
        id:id || ""
    });

    if(loading){
        return<div>
            <FullBlogSkeleton/>
        </div>
    }
    
    return <div>
         {blog ? <FullBlog blog={blog} /> : <div>No blog found</div>}
    </div>
}