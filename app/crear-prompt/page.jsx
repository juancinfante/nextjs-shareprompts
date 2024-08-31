'use client'

import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from '@components/Form'

const CrearPromptPage = () => {

    const router = useRouter();
    const {data : session} = useSession();

    const [enviando, setEnviando] = useState(false);
    
    const [post, setPost] = useState({
        prompt: "",
        tag: ""
    });

    const crearPrompt = async (e) => {
        e.preventDefault()
        setEnviando(true)

        try {
            const res = await fetch('/api/prompt/new',{
                method: "POST",
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                    userID: session?.user.id
                })
            })
            if(res.ok){
                router.push('/');
            }
        } catch (error) {
            console.log(error)
        }finally{
            setEnviando(false);
        }
         
    }   

  return (
    <Form 
        type="Crear"
        post={post}
        setPost={setPost}
        enviando={enviando}
        handleSubmit={crearPrompt}
    />
)
}

export default CrearPromptPage