const { data } = require('./data')

// TODO:
// remove non numeric digits
// shorten to two digits (concatenate first and last)
// sum all digits

const formattedData = data.split('\n')

const extractNums = (string) => {
    return string.replace(/[a-zA-Z]/g, '')
}

const shortenNums = (string) => {
    return parseInt(string.charAt(0) + string.charAt(string.length - 1))
}

const getSum = (data = formattedData) => {
    const extractedNums = data.map((item) => {
        return extractNums(item)
    })
    //console.log('extracted numbers: ' + extractedNums)

    const shortenedNums = extractedNums.map((item) => {
        return shortenNums(item)
    })
    //console.log('shortened numbers: ' + shortenedNums)

    const sum = shortenedNums.reduce((a, b) => a + b, 0)
    return sum
}

module.exports = { 
    formattedData,
    getSum
}
