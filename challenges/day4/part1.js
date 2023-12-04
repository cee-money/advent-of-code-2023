let data = require('../../puzzle_input/day4_data')

const filterFalsey = (num) => {
    return !!num
}


const reformatData = () => {
    data = data.split('\n')
    data = data.map((item) => {
        let obj = item.split(':')
        const key = obj[0].slice(obj[0].length - 4, obj[0].length).trim()
        const nums = obj[1].split(' | ')
        const winning = nums[0].split(' ').filter(filterFalsey)
        const mine =  nums[1].split(' ').filter(filterFalsey)
        return obj = { [key]: { winning, mine } }
    })
    return data
}

const reformattedData = reformatData()

const findMatchesAndConvertToPoints = () => {
    return reformattedData.map((object) => {
        // console.log(Object.values(object)[0].winning)
        // console.log(Object.values(object)[0].mine)
        let count = 0
        Object.values(object)[0].winning.forEach((val) => {
            if (Object.values(object)[0].mine.includes(val)){
                count === 0 ? count++ : count *= 2 // increment first match by 1 then double each subsequent match (exponential)
            }
        })
        // console.log({ [Object.keys(object)[0]] : count })
        return count
    })
}

const getTotalPoints = () => {
    return findMatchesAndConvertToPoints().reduce((a, b) => a + b)
}

module.exports = getTotalPoints
