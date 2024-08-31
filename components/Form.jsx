import Link from 'next/link'
import React from 'react'

const Form = ({ type, post, setPost, enviando, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type}</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} y comparte prompts con el mundo, deja a tu imaginacion volar!
      </p>
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2x1 flex flex-col gap-7 glassmorphism'>
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Tu prompt aqui 
            </span>
            <textarea value={post.prompt} onChange={(e) => setPost({... post, prompt: e.target.value})} placeholder='Escribe tu prompt...' required className='form_textarea'>

            </textarea>
          </label>
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Tag <span className='font-normal'>(#producto, #webdevelopment, #idea)</span>
            </span>
            <textarea value={post.tag} onChange={(e) => setPost({... post, tag: e.target.value})} placeholder='Escribe tu tag...' required className='form_textarea'>
            </textarea>
          </label>
          <div className="flex-end mb-3 mb-5 gap-4">
            <Link href="/" className='text-gray-500 text-sm'>Cancel</Link>
            <button 
            type='submit'
              disabled={enviando}
              className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
            >
              {
                enviando ? `${type}...`: `${type}`
              }
            </button>
          </div>
      </form>
    </section>
  )
}

export default Form