'use client'
import { useState } from 'react'
import CardTour from './CardTour';








export default function SetTours({ Tours }) {




    const categories = ["Тайвань", "Китай", "Южная Корея", "Япония"];

    const [activeIndex, setActiveIndex] = useState(0)
    const onClickActive = (index) => { setActiveIndex(index) }

    const [tours, setTours] = useState(Tours);
    console.log(typeof Tours)

    return (
        <div>
            <div className='flex justify-center p-5 mt-10'>
                <ul className='flex'>
                    <li onClick={() => onClickActive(0)} className={`${activeIndex === 0 ? "active" : ''} text-[16px] cursor-pointer select-none border p-3 rounded-xl mr-5`}>Все</li>
                    <li onClick={() => onClickActive(1)} className={`${activeIndex === 1 ? "active" : ''} text-[16px] cursor-pointer select-none border p-3 rounded-xl mr-5`}>Тайвань</li>
                    <li onClick={() => onClickActive(2)} className={`${activeIndex === 2 ? "active" : ''} text-[16px] cursor-pointer select-none border p-3 rounded-xl mr-5`}>Китай</li>
                    <li onClick={() => onClickActive(3)} className={`${activeIndex === 3 ? "active" : ''} text-[16px] cursor-pointer select-none border p-3 rounded-xl mr-5`}>Южная Корея</li>
                    <li onClick={() => onClickActive(4)} className={`${activeIndex === 4 ? "active" : ''} text-[16px] cursor-pointer select-none border p-3 rounded-xl mr-5`}>Япония</li>
                </ul>
            </div>

            <div className='container mx-auto items-center justify-center flex flex-wrap gap-y-20 gap-x-10'>

                {tours
                    .filter((tour) => {
                        if (activeIndex === 0) {
                            return true;
                        } else {
                            return tour.country.toLowerCase() === categories[activeIndex - 1].toLowerCase();
                        }
                    })
                    .map((tour) => (
                        <CardTour
                            key={tour.id}
                            id={tour.id}
                            name={tour.name}
                            data={tour.data}
                            city={tour.city}
                            country={tour.country}
                            price={tour.price}
                            accommodation={tour.accommodation}
                            guide={tour.guide}
                        />
                    ))}

            </div>
        </div>
    )
}
