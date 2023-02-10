import moment from "moment"
import 'moment/locale/es'

export const Usefecha = (fecha) => {
    
 const date = fecha.split(" ")
 const parseDate = moment(date[0],).format('ll')
 const day = moment(date[0],).format('dddd').substring(0,2)
 return {parseDate, day}
}
