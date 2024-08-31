'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const Nav = () => {

  const [toggleDropdown, setToggleDropdown] = useState(false);
  const { data: session } = useSession();

  return (
    <>
      <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
          <Image src="/assets/images/logo.svg"
            alt='Promptopia Logo'
            width={30}
            height={30}
            className='object-contain' />
          <p className='logo_text'>Promptopia</p>
        </Link>

        {/* DESKTOP NAVIGATION */}

        <div className="sm:flex hidden">
          {session?.user ? <>
            <div className="flex gap-3 md:gap:5">
              <Link href='/crear-prompt' className='black_btn'>
                Crear prompt
              </Link>
              <button type='submit' onClick={signOut} className='outline_btn'>
                Salir
              </button>
              <Link href='/profile'>
                <img src={session.user.image}
                  alt=""
                  className='rounded-full'
                  style={{ width: "50px" }} />
                {/* <Image src={session.user.image}
                    width={37}
                    height={37}
                    className='rounded-full'
                    alt='profile'/> */}
              </Link>
            </div>
          </> : <>
            {
              <button onClick={() => signIn()} className='black_btn'>Iniciar Sesion</button>
            }
          </>}

        </div>
        {/* MOBILE NAVIGATION */}

        <div className="sm:hidden flex relative">
          {session?.user ? <>
            <div className="flex">
              {/* <Image src={session.user.image}
                    width={37}
                    height={37}
                    className='rounded-full'
                    alt='profile' 
                    onClick={() => setToggleDropdown((prev) => !prev)}/> */}
              <img src={session.user.image}
                alt=""
                className='rounded-full'
                style={{ width: "40px" }}
                onClick={() => setToggleDropdown((prev) => !prev)} />

              {toggleDropdown && (
                <div className="dropdown">
                  <Link href='/profile'
                    className='dropdown_link'
                    onClick={() => setToggleDropdown(false)}>
                    Perfil
                  </Link>
                  <Link href='/crear-prompt'
                    className='dropdown_link'
                    onClick={() => setToggleDropdown(false)}>
                    Crear Prompt
                  </Link>
                  <button type='button'
                    onClick={() => {
                      setToggleDropdown(false)
                      signOut()
                    }}
                    className='mt-5 w-full black_btn'>
                    Salir
                  </button>
                </div>
              )}


            </div>
          </> : <>
            {
              <button onClick={() => signIn()} className='black_btn'>Iniciar Sesion</button>

            }
          </>
          }
        </div>
      </nav>
    </>
  )
}

export default Nav