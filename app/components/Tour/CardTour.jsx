import Link from 'next/link'
import React from 'react'


export default function CardTour({ id, name, data, city, country, price, accommodation, guide }) {
    return (


        <div className='w-[25%] border rounded-xl mt-10 block'>


            <div className='flex flex-col '>
                <div className='font-bold bg-white mr-5  rounded-sm flex items-center flex-col mt-5'>
                    <p>{name}</p>
                    <p className='text-red-500'>Дата: {data}</p>
                </div>
                <hr className='mt-3 mb-3' />
                <div className=' bg-white ml-5 rounded-sm flex  flex-col'>
                    <p>Город: {city}</p>
                    <p>Страна: {country}</p>
                    <p className='text-green-800 font-bold'>Цена: {price}$</p>
                    <p>Проживание: {accommodation ? "Включено" : "Отсутсвует"}</p>
                    <p>{guide ? "Тур с гидом" : "Тур без гида"}</p>

                </div>

                <div className='flex mt-10 mb-3 items-center justify-center self-center'>

                    <Link href={`/Tours/${id}`} className='border rounded-xl py-3 px-12 cursor-pointer hover:bg-[#DF6951] hover:text-white transition-all'>Подробнее</Link>
                </div>
            </div>
        </div>
    )
}

