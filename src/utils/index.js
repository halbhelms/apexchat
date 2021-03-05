const dateToApiDateString = (dateString) => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    return `${year}-${month}-${day}`
}

const dateStringForDaysPrior = days => {
    let now = new Date()
    let daysAgo = 8.64e+7 * days
    let diff = now - daysAgo
    return dateToApiDateString(new Date(diff))
} 


export { dateToApiDateString, dateStringForDaysPrior }

