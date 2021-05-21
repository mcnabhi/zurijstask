const convertFahrToCelsius = (n) => {
    let valueType = typeof n
    if(isNaN(n) || n === null) {
      return '"${n}" is not a valid number but a/an ${valuType}.'
    } else {
        let fToC = (n - 32) / 1.8;
        let result = `${n}/xBOF is ${fToC.toFixed(4)}/xBOC.`
        return result;
    }
}
convertFahrToCelsius("100");



const checkYuGiOh = [1, 'yu', 'gi', 'yu', 'oh', 'yu', 'gi', 7, 'yu', 'gi', 'yu', 'oh',]

checkYuGiOh[12] = 'fizzbuzz is meh'

console.log (checkYuGiOh);