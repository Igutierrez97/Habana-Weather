import { Usefecha } from '../hooks/useFecha'
import { ItemImg } from './ItemImg'


export const CardDia = (props) => {
    const { parseDate, day } = Usefecha(props.data.dt_txt)
    return (
        <div className='flex flex-row justify-around border-2 rounded-md md:m-1 xl:my-3 '>

            <div className='w-24 flex flex-col justify-around'>
                <p className='text-xl font-bold'>{props.data.main.temp}°C</p>
                <p className='font-medium'>Min {props.data.main.temp_min}°C</p>
            </div>

            <div className='w-24 h-24 mr-3' >
                <ItemImg data={props.data} />
            </div>

            <div className='flex flex-col justify-around'>
                <p className='text-xl font-bold'>
                    {day}
                </p>
                <p className='font-medium'>
                    {parseDate}
                </p>
            </div>
        </div>
    )
}
