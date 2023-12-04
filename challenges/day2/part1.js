const data = require('./data')

// TODO
// format data - key is game id, value is array of objects with key for each selection and value is selection
// iterate and find every game whose selections are less than the limits per color:
    // 12 red, 13 green, and 14 blue as limits (so <= is possible, > impossible)

const formatData = () => {
    return data.split('\n').map((item) => {
        const itemArr = item.split(':')
        itemArr[0].startsWith('Game ') && itemArr.splice(0,1,itemArr[0].replace('Game ', ''))
        let itemObj = {}
        Object.assign(itemObj, {[itemArr[0]]: itemArr[1].split(';')})
        return itemObj
    })
}

const formattedData = formatData()

const Colors = {
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue'
}

const limits = {
    [Colors.RED]: 12,
    [Colors.GREEN]: 13,
    [Colors.BLUE]: 14
}

const allGames = []
const impossibleGames = []

const isOverLimit = (selection, gameNum) => {
    for (let key in selection) {
        if (key === Colors.RED && selection[key] > limits[Colors.RED]) {
            // console.log('over red limit', selection[key], gameNum)
            impossibleGames.push(gameNum)
            return
        } 
        if (key === Colors.GREEN && selection[key] > limits[Colors.GREEN]) {
            // console.log('over green limit', selection[key], gameNum)
            impossibleGames.push(gameNum)
            return
        } 
        if (key === Colors.BLUE && selection[key] > limits[Colors.BLUE]) {
            // console.log('over blue limit', selection[key], gameNum)
            impossibleGames.push(gameNum)
            return       
        }
    }
    // console.log('not over limit', selection, gameNum)
}

const reformattedDataAsObjects = () => {
    return formattedData.map((item, index) => {
        let newParentObj = {}
        let currentSelections = Object.values(item)[0]
        const selectionsAsObjects = currentSelections.map((selection) => {
            const formatted = selection.trim().split(' ')
            let newObj =   {}
            formatted.forEach((formattedItem, formattedIndex) => {
                if (formattedIndex % 2){
                    return Object.assign(newObj, {[formattedItem.replace(',', '')]: parseInt(formatted[formattedIndex - 1])})
                }
            })
            return newObj
        })
        currentSelections = []
        currentSelections = [...selectionsAsObjects]
        return Object.assign(newParentObj, {[index + 1]: currentSelections})
    })
}

const getImossibleGameNums = ()  => {
    return reformattedDataAsObjects().map((game) => {
        const gameNum = parseInt(Object.keys(game)[0])
        allGames.push(gameNum)
        const selections = Object.values(game)[0]
        for (i = 0; i < selections.length; i++) { 
            isOverLimit(selections[i], gameNum)
        }
    })
}

const getSumOfPossibleGames = () => {
    getImossibleGameNums()
    const possibleGames = allGames.filter((game) => {
       return !impossibleGames.includes(game)
    })
    // console.log(possibleGames)
    return possibleGames.reduce((a, b) => a + b, 0)
}

module.exports = {
    getSumOfPossibleGames,
    reformattedDataAsObjects,
    Colors
}
