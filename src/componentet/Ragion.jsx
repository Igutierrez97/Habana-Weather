
import { Dark } from './Dark'
import Reloj from './Reloj'

export const Region = () => {

    return (

        <div className='grid grid-cols-3'>
            <div className='justify-self-start mt-5 '>
                <Dark />
            </div>
            <div className='flex flex-col items-center m-1'>


                <h1 className='text-3xl sm:text-4xl'>La Habana, Cuba</h1>
                <div>
                    <span className='max-h-24'>
                        <Reloj />
                    </span>
                </div>
            </div>
        </div>
    )

}