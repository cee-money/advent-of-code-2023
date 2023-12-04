const { getSum } = require('./challenges/day1/part1')
const getUpdatedSum = require('./challenges/day1/part2')
const { getSumOfPossibleGames } = require('./challenges/day2/part1')
const getSumOfPowers = require('./challenges/day2/part2')

// ------------------- DAY 02 ----------------------- //

const day2_1Solution = getSumOfPossibleGames
console.log('Day 2, part 1: ' + day2_1Solution())

const day2_2Solution = getSumOfPowers
console.log('Day 2, part 2: ' + day2_2Solution())

// ------------------- DAY 01 ----------------------- //

const day1_2Solution = getUpdatedSum
console.log('Day 1, part 2: ' + day1_2Solution())

const day1_1Solution = getSum
console.log('Day 1, part 1: ' + day1_1Solution())
