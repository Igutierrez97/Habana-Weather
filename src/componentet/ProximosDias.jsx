import React from 'react'
import { CardDia } from './cardDia'
import { getClimaNextDay } from '../services/services'
import { useQuery } from 'react-query'




export const ProximosDias = () => {
    const { data, error, isLoading } = useQuery(["nextDay"], getClimaNextDay)

    if (isLoading) {

        return <div >
            <div  >
                <span >Loading...</span>
            </div>
        </div>

    }

    if (error) {

        return <span>Error: {error.message}</span>

    }

    return (
        <div className='md:grid md:grid-cols-2'>
            <div ><CardDia data={data[8]} /></div>
            <div><CardDia data={data[16]} /></div>
            <div ><CardDia data={data[24]} /></div>
            <div ><CardDia data={data[32]} /></div>
        </div>
    )
}
