import React from 'react'
import SetTours from '../components/Tour/SetTours'
import getTours from '../libs/getTours'

export default async function ToursPage() {
    const tours = await getTours()
    return (
        <div>
            <SetTours Tours={tours} />
        </div>
    )
}
