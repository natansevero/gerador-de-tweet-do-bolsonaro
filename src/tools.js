import dayjs from 'dayjs'

const getNumbers = () => {
    const number = Math.floor(Math.random() * (Math.random() * 1000000 ) + 1 )

    return number.toLocaleString()
}

const getDate = () => {
    return dayjs().format('HH:mm - DD MMM YYYY')
}

export { 
  getNumbers,  getDate
}
