import { ChangeEvent, useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export default function Publish(){
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const navigate = useNavigate();
    return <div className="w-full">
        <Appbar />
        <div className="flex justify-center w-full mt-6">
            <div className="max-w-screen-xl w-full">
                <div className="px-4 py-2 bg-white rounded-b-lg w-full">
                    <input type="text" onChange={(e)=>{
                        setTitle(e.target.value)
                    }}  className="w-full bg-gray-50 border boreder-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder="Title" required />
                    <TextEditor onChange={(e)=>{
                            setContent(e.target.value)
                        }} />
                    <button type="submit" onClick={async()=>{
                        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                            title,
                            content
                        },{
                            headers:{
                                Authorization: localStorage.getItem('token')
                            }
                        })
                        navigate(`/blog/${response.data.id}`)
                    }} className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
                        Publish post
                    </button>
                </div>
                
                
            </div>
        </div>
    </div>
}

function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}) {
    return <div>
        <div className="w-full mb-4 my-4">
            <div className="flex items-center justify-between rounded-b-lg border ">
                <div className="px-4 py-2 bg-gray-50 rounded-b-lg w-full">
                    <label htmlFor="editor" className="sr-only">Publish post</label>
                    <textarea
                        onChange={onChange}
                        id="editor"
                        rows={8}
                        className="block w-full px-0 text-sm text-gray-800 bg-gray-50 border-0 placeholder-gray-400 pl-2 focus:outline-none"
                        placeholder="Write an article..."
                        
                        required
                    ></textarea>
                </div>
            </div>
            
        </div>
    </div>

}