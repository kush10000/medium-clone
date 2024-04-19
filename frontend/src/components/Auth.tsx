import { signupInput } from "@kush10000/medium-comm"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { LabelledInput } from "./LabelledInput"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Auth = ({type}: {type: "signup" | "signin"}) =>{

    const [postInputs,setPostInputs] = useState<signupInput>({
        email:"",
        password:""
    })
    const navigate = useNavigate();

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signup' ?'signup':'signin'}`,postInputs);
            const jwt = response.data.jwt;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch(e) {
            alert("error while sigining up")
        }
    }

    return <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        {type === "signin" ? "Sign in" : "Create an account"} 
                    </div>
                    <div className=" text-slate-400 ">
                        {type === "signin" ? "Don't have an account?" : "Already have an account? "} 
                        {type === "signin" ? <Link className="pl-2 underline" to={"/signup"}>Sign up</Link> : 
                        <Link className="pl-2 underline" to={"/signin"}>Login</Link>} 
                    </div>
                </div>
                <div className="pt-8">
                    <LabelledInput label="Email" placeholder="donjon@gmail.com" onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })

                    }}/>
                    <LabelledInput label="password" type="password" placeholder="" onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })

                    }}/>
                </div>
                <div>
                    <button type="button" onClick={sendRequest} className="text-white mt-8 w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        {type === "signup"?"Sign Up":"Sign in"}
                    </button>
                </div>
            </div>
        </div>
    </div>
}