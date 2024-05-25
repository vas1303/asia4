'use client'
import React from 'react'

import Counter from '../Counter';


export default function TourInfo({ id, name, data, city, price, nutrition, guide, image, counter, country }) {

    return (
        <div>
            <div className='container mx-auto mt-20 select-none'>

                <div className='flex '>
                    <div>
                        <img className='rounded-xl' src={image} alt="" />
                    </div>

                    <div className='flex flex-col mx-auto'>
                        <div className='flex flex-col items-end mb-10'>
                            <span className='mb-5 text-2xl font-bold'>{name}</span>
                            <span className='mb-5 text-2xl '>Дата: {data}</span>
                            <span className='mb-5 text-2xl '>Город: {city}</span>
                        </div>
                        <hr className='mb-10' />

                        <div className='flex flex-col'>
                            <span className='mb-5 text-2xl '>Страна путешествия: {country}</span>
                            <span className='mb-5 text-2xl '>{nutrition ? "Питание включено" : "Питание не включено"}</span>
                            <span className='mb-5 text-2xl '>{guide ? "Тур с гидом" : "Тур без гида"}</span>
                            <span className='mb-5 text-2xl '>Цена: {price}$</span>
                        </div>
                        <div className='flex flex-col justify-center items-center mt-5'>
                            <span>Количество участников</span>
                            <Counter counter={counter} />
                        </div >
                        <button className='border p-5 text-xl mt-5 bg-black text-white rounded-xl'> <a href="#callbackForm" onClick={(e) => { e.preventDefault(); document.getElementById('callbackForm').scrollIntoView({ behavior: 'smooth' }); }}> Оставить заявку </a> </button>

                    </div>
                </div>
            </div>

        </div>
    )
}

