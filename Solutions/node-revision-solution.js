// * Task 1

const sayHelloToPerson = person => {
    switch(person.toLowerCase()) {
        case "bob":
            console.log("Hello Bob!");
            break;
        case "ozzy osborne":
            console.log("Hi Ozzy!");
            break;
        default:
            console.log("Do I know you?");
            break;
    }   
}

sayHelloToPerson("Bob");             // "Hello Bob!"
sayHelloToPerson("ozzy osborne");    // "Hi Ozzy!"
sayHelloToPerson("Rob");             // "Do I know you?"

// =====================================================

// * Task 2

const filterCountries = (arr, searchStr) => {
    // Don't forget .toLowerCase()!
    return arr.filter(element => element.toLowerCase().includes(searchStr.toLowerCase()));
}

const countries = ["Germany", "Ireland", "South Africa", "Bangladesh", "Iceland"];

console.log(filterCountries(countries, 'f'));  // ["South Africa"];
console.log(filterCountries(countries, 'land'));  // ["Ireland", "Iceland"];
console.log(filterCountries(countries, 'i'));  // ["Ireland", "South Africa", "Iceland"];

// =====================================================

// * Task 3

const makeCamelCase = (str) => {
    // * Option 1. With split + join:
    let splitArray = str.split("-"); // Splits 'my-long-word' into array ['my', 'long', 'word']
    let newArray = [];  

    // Capitalizes the first letters of all array items except the first one
    // And pushes all items into the "new" array
    // So ['my', 'long', 'word'] in the "split" array becomes ['my', 'Long', 'Word'] in the "new" array)
    for (let i = 0; i < splitArray.length; i++) {
        if (i == 0) {
            newArray.push(splitArray[i]);
        } else {
            let newWord = splitArray[i][0].toUpperCase() + splitArray[i].slice(1);
            newArray.push(newWord);
        }
    }

    return newArray.join("");   // Joins ['my', 'Long', 'Word'] into a new string: 'myLongWord'


    // * Option 2. With map():
    
    // return str
    //     .split("-") // Splits 'my-long-word' into array ['my', 'long', 'word']
    //     .map(
    //         // Capitalizes the first letters of all array items except the first one
    //         // And pushes all items into the "new" array
    //         // So ['my', 'long', 'word'] in the "split" array becomes ['my', 'Long', 'Word'] in the "new" array)
    //         (word, index) =>
    //             index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    //     )
    //     .join(""); // Joins ['my', 'Long', 'Word'] into a new string: 'myLongWord'
}

console.log(makeCamelCase("background-color"))
console.log(makeCamelCase("list-style-image"))


// =====================================================

// * Task 4

// The rest parameter puts all your arguments into an array (no matter how many arguments you passed!)
const addNumbers = (...nums) => {
    let total = 0;

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current value is a number, add it to the total
        if (!isNaN(nums[i])) {
            total += nums[i];
        // Else, if the current value is not a number, quit the function and log a message explaining what happened
        } else {
            return "Error - you passed a non-number argument!";
        }
    }

    return total;
}

console.log(addNumbers(1, 2));  // 3
console.log(addNumbers(1, 2, 3, 4));  // 10
console.log(addNumbers(1, "hello", 3, 4));  // "Error - you passed a non-number argument!"

// =====================================================

// * Task 5

const addNumbersWithReduce = (...nums) => {
    let total = nums.reduce((count, num) => count += num);

    return total;
}

console.log(addNumbersWithReduce(1, 2));  // 3
console.log(addNumbersWithReduce(1, 2, 3, 4));  // 10