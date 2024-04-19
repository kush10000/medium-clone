import { Link } from "react-router-dom";

interface BlogCardProps{
    authorName:string;
    title:string;
    content:string;
    publishedDate:string;
    id:string;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
    id
}:BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="border-b p-4 border-slate-200 pb-4 w-screen max-w-screen-lg cursor-pointer">
            <div className="flex">
                <div className="flex flex-col justify-center">
                    <Avatar name={authorName} size="small"/>
                </div>
                <div className="font-extralight text-sm pl-2 flex flex-col justify-center"> {authorName} </div>
                <div className="text-xs flex flex-col justify-center pl-2">&#9679;</div>
                <div className="font-light text-sm pl-2 flex flex-col justify-center">{publishedDate}</div>
                
            </div>
            <div className="text-xl font-bold">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0,100) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4">
                {`${Math.ceil(content.length/100)} minute(s) read`}
            </div>

        </div>
    </Link>
}

export function Avatar({name,size}:{name:string,size:"small"|"big"}){
    return <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className={`${size === "small"?"text-xs":"text-md"} font-extralight text-gray-600 dark:text-gray-300`}>{name[0]}</span>
    </div>
}