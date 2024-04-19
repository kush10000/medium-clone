export const FullBlogSkeleton = () => {
    return <div className="mt-20">
    <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full max-w-screen-2xl">
            <div className="col-span-8">
                <div className="text-5xl font-extrabold">
                    {/* Skeleton for title */}
                    <div className="h-12 w-4/5 bg-gray-200 rounded"></div>
                </div>
                <div className="text-slate-500 pt-2">
                    {/* Skeleton for date */}
                    <div className="h-4 w-40 bg-gray-200 rounded"></div>
                </div>
                <div className="pt-4">
                    {/* Skeleton for content */}
                    <div className="h-5 w-full bg-gray-200 rounded"></div>
                    <div className="h-5 w-full bg-gray-200 rounded mt-4"></div>
                    <div className="h-5 w-full bg-gray-200 rounded mt-4"></div>
                    <div className="h-5 w-full bg-gray-200 rounded mt-4"></div>
                </div>
            </div>
            <div className="col-span-4">
                <div className="text-slate-600 text-lg">
                    {/* Skeleton for author label */}
                    <div className="h-6 w-20 bg-gray-200 rounded"></div>
                </div>
                <div className="flex w-full">
                    <div className="pr-4 flex flex-col justify-center">
                        {/* Skeleton for avatar */}
                        <div className="h-20 w-20 bg-gray-200 rounded-full"></div>
                    </div>
                    <div>
                        <div className="text-xl font-bold">
                            {/* Skeleton for author email */}
                            <div className="h-8 w-40 bg-gray-200 rounded"></div>
                        </div>
                        <div className="pt-2 text-slate-500">
                            {/* Skeleton for catch phrase */}
                            <div className="h-4 w-60 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

}