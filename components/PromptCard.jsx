import { useSession } from 'next-auth/react';
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete}) => {

    const { data: session } = useSession()
    const router = useRouter()
    const pathName = usePathname();

    const [copied, setCopied] = useState("");

    const handleCopy = () => {
        setCopied(post.prompt)
        navigator.clipboard.writeText(post.prompt)
        setTimeout(() => setCopied(""), 3000);
    }


    return (
        <div className="prompt_card">
            <div className="flex justify-between items-start gap-5">
                <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                    <Image src={post.creador.image}
                        alt="user_image"
                        width={40}
                        height={40}
                        className='rounded-full object-contain' />
                </div>
                <div className="flex flex-col">
                    <h3 className='font-stoshi font-semibold text-gray-900'>{post.creador.username}</h3>
                    <p className='font-inter text-sm text-gray-500'>{post.creador.email}</p>
                </div>
                <button className='copy_btn' onClick={handleCopy}>
                    <img src={copied === post.prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'} />
                </button>
            </div>
            <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
            <p className='font-inter text-sm blue_gradient cursor-pointer' onClick={() => handleTagClick && handleTagClick(post.tag)}>#{post.tag} </p>
            {session?.user.id === post.creador._id && pathName === "/profile" && (
                <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
                    <p
                        className='font-inter text-sm green_gradient cursor-pointer'
                        onClick={handleEdit}
                    >
                        Editar
                    </p>
                    <p
                        className='font-inter text-sm orange_gradient cursor-pointer'
                        onClick={handleDelete}
                    >
                    Eliminar
                    </p>
                </div>
            )}
        </div>
    )
}

export default PromptCard