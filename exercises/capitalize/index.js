// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const strArray = str.split(" ");
    for (let i = 0; i < strArray.length; i++){
        strArray[i] = strArray[i][0].toUpperCase() + strArray[i].substring(1);
    }
    return strArray.join(" ")
}

module.exports = capitalize;
