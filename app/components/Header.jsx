import Link from 'next/link'
import React from 'react'
import { getServerSession } from "next-auth";
import Logout from './Auth/Logout';


export default async function Header() {
    const session = await getServerSession()
    return (
        <div className='container mx-auto '>

            <nav className=''>
                <ul className='flex justify-around mt-10 border rounded-xl p-3 bg-black '>

                    <Link className='hover:bg-white  hover:text-black text-white rounded-md font-semibold text-[16px] cursor-pointer px-5 py-2' href="http://localhost:3000/">ASIA TRAVEL</Link>
                    <Link className='hover:bg-white hover:text-black text-white rounded-md font-semibold text-[16px] cursor-pointer px-5 py-2' href="/Tours">ТУРЫ</Link>
                    {
                        !session && <Link className='bg-[#adc8ed] text-white rounded-xl font-semibold text-[16px] cursor-pointer px-5 py-2' href="/Login">ВОЙТИ</Link>
                    }
                    {
                        !!session && <Logout />
                    }



                </ul>
            </nav>
        </div>
    )
}
