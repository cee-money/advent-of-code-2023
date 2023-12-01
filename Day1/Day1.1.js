const data = require("./data")

// TODO:
// pull any numeric digits from the strings
// if > 1 digits, only take the first and last ones and add those
// sum all of these digits

const formatData = () => {
    return data.data.split('\n')
}

const extractNums = (string) => {
    const regex = /[a-zA-Z]/g
    const extractedNums = string.replace(regex, '')
    return extractedNums
}

const shortenNums = (string) => {
    return parseInt(string.charAt(0) + string.charAt(string.length - 1))
}

const getSum = () => {
    const formattedData = formatData()
    const extractedNums = formattedData.map((item) => {
        return extractNums(item)
    })
    console.log('extracted numbers: ' + extractedNums)

    const shortenedNums = extractedNums.map((item) => {
        return shortenNums(item)
    })
    console.log('shortened numbers: ' + shortenedNums)

    const sum = shortenedNums.reduce((a, b) => a + b, 0)
    return 'sum: ' + sum
}

module.exports = getSum
