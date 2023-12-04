// TODO find the highest number from every selection per color
// find the product of these numbers
// sum the products

const { reformattedDataAsObjects, Colors } = require('./part1')

const data = reformattedDataAsObjects()

const getPowers = () => {
    return data.map((game) => {
        const gameNum = Object.keys(game)[0]
        const selections = Object.values(game)[0]
        const redValsPerGame = []
        const greenValsPerGame = []
        const blueValsPerGame = []
        let lowestRed
        let lowestGreen
        let lowestBlue
        selections.forEach((selection) => {
            for (let key in selection) {
                if (key === Colors.RED) {
                    redValsPerGame.push(selection[key])
                    lowestRed = Math.max.apply(null, redValsPerGame)
                }
                if (key === Colors.GREEN) {
                    greenValsPerGame.push(selection[key])
                    lowestGreen = Math.max.apply(null, greenValsPerGame)
                }
                if (key === Colors.BLUE) {
                    blueValsPerGame.push(selection[key])
                    lowestBlue = Math.max.apply(null, blueValsPerGame)
                }
            }
        })
        return lowestRed * lowestGreen * lowestBlue
    })
}


const getSumOfPowers = () => {
    return getPowers().reduce((a, b) => a + b)
}

module.exports = getSumOfPowers
