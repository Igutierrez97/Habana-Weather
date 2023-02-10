import clear from '../assets/clear.png'
import clouds from '../assets/clouds.png'
import sun from '../assets/sun.png'
import rain from '../assets/sun.png'

export const ItemImg = ({ data }) => {

    if (data.weather[0].main == 'Clouds') {
        return <img src={clouds} />
    }
    else if (data.weather[0].main == 'Clear') {
        return <img src={clear} />
    }

    else if (data.weather[0].main == 'Rain') {
        return <img src={rain} />
    }

    return (
        <img src={sun} />
    )
}
