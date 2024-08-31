'use client'

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams  } from 'next/navigation'
import Form from '@components/Form'

const CrearPromptPage = () => {

    const router = useRouter();
    const {data : session} = useSession();

    const searchParams = useSearchParams();
    const promptId = searchParams.get("id");
    

    const [enviando, setEnviando] = useState(false);
    
    const [post, setPost] = useState({
        prompt: "",
        tag: ""
    });

    useEffect(() => {
        const getPromptDetails = async () => {
          const response = await fetch(`/api/prompt/${promptId}`);
          const data = await response.json();
    
          setPost({
            prompt: data.prompt,
            tag: data.tag,
          });
        };
    
        if (promptId) getPromptDetails();
      }, [promptId]);

    const updatePrompt = async (e) => {
        e.preventDefault()
        setEnviando(true)

        try {
            const res = await fetch(`/api/prompt/${promptId}`,{
                method: "PATCH",
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
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
        type="Editar"
        post={post}
        setPost={setPost}
        enviando={enviando}
        handleSubmit={updatePrompt}
    />
)
}

export default CrearPromptPage