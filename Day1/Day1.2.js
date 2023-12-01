const data = require('./data')

// TODO:
// convert full word numbers to real numbers but leave last letter for run ons
// sum all of these digits

const formatData = () => {
    return data.data.split('\n')
}
const formattedData = formatData()

const convertWordNumbers = (string) => {
    for (let i = 0; i < data.numbers.length; i++) {
        const wordNum = data.numbers[i]
        let replacement = wordNum.split('')
        const digit = (i + 1).toString()
        replacement.splice(-1, 0, digit)
        replacement = replacement.join('')
        
        string = string.replaceAll(wordNum, replacement)

        if (i === data.numbers.length - 1){
            console.log(string)
            return string
        }
    }
}

const reformattedData = formattedData.map((item) => {
    return convertWordNumbers(item)
})

const extractNums = (string) => {
    const regex = /[a-zA-Z]/g
    const extractedNums = string.replace(regex, '')
    return extractedNums
}

const shortenNums = (string) => {
    return parseInt(string.charAt(0) + string.charAt(string.length - 1))
}

const getSum = () => {
    const extractedNums = reformattedData.map((item) => {
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
