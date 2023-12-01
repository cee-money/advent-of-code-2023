const { numbers } = require('./data')
const { formattedData, getSum } = require('./day1_part1')

// TODO:
// convert word numbers to numeric strings but leave letters for run on edge case
// then run part 1's work on the reformatted data:
    // remove non numeric digits
    // shorten to two digits (concatenate first and last)
    // sum all digits

const convertWordNumbers = (string) => {
    for (let i = 0; i < numbers.length; i++) {
        let replacement = numbers[i].split('')
        replacement.splice(-1, 0, (i + 1).toString())
        
        string = string.replaceAll(numbers[i], replacement.join(''))

        if (i === numbers.length - 1){
            return string
        }
    }
}

const reformattedData = formattedData.map((item) => {
    return convertWordNumbers(item)
})

const getUpdatedSum = () => {
   return getSum(reformattedData)
}

module.exports = getUpdatedSum