export const BlogSkeleton = () =>{
    return <div className="border-b p-4 border-slate-200 pb-4 w-screen max-w-screen-lg cursor-pointer">
        <div className="flex animate-pulse">
            <div className="flex flex-col justify-center">
            {/* Skeleton for Avatar */}
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
            <div className="font-extralight text-sm pl-2 flex flex-col justify-center">
            {/* Skeleton for authorName */}
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </div>
            <div className="text-xs flex flex-col justify-center pl-2">
            {/* Skeleton for bullet */}
            <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
            </div>
            <div className="font-light text-sm pl-2 flex flex-col justify-center">
            {/* Skeleton for publishedDate */}
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </div>
        </div>
        <div className="text-xl font-bold pt-4">
            {/* Skeleton for title */}
            <div className="h-8 w-3/4 bg-gray-200 rounded"></div>
        </div>
        <div className="text-md font-thin pt-2">
            {/* Skeleton for content */}
            <div className="h-5 w-full bg-gray-200 rounded"></div>
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
            {/* Skeleton for reading time */}
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
        </div>
    </div>

}