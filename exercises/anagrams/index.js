// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const modifiedString = (theString) => {
        //create a punctuation array to delete all punctuation from the string
        let punctuation = ['!', '.', ',', ' ']
        for (let i = 0; i < punctuation.length; i++) {
            theString = theString.replaceAll(punctuation[i], '').toLowerCase()
        }
        // sort the string in alphabetical order
        theString = theString.split('').sort()
        theString = theString.join('')
        return theString
    }
    stringA = modifiedString(stringA)
    stringB = modifiedString(stringB)
    if (stringA === stringB) return true
    else return false
}

module.exports = anagrams;
