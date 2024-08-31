'use client'
import React, { useEffect, useState } from 'react'
import PromptCard from './PromptCard'

const PrompCardList = ({data, handleTagClick}) => {
  return (
  <div className="mt-16 prompt_layout">
    {
      data.map((post) => (
        <PromptCard
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}
        />
      ))}
    
  </div>
  )
}

const Feed = () => {

  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChang = () => {

  }

  const fetchPosts = async () => {
    const res = await fetch('/api/prompt');
    const data = await res.json();

    setPosts(data)
  }
  useEffect(() => {
    fetchPosts();
  },[])

  return (
     <section className='feed'>
      <form className='relative w-full flex-center'>
        <input type="text"
        placeholder='Busca un tag o un nombre de usuario'
        value={searchText}
        onChange={handleSearchChang}
        required
        className='search_input peer' />
      </form>
      <PrompCardList 
      data={posts}
      handleTagClick={() => {}} />
     </section>
  )
}

export default Feed