let numbers = [5, 3, 8, 1, 2];

function addNumber(num) {
    numbers.push(num);
    console.log(`Added ${num} to the array.`);
}

function removeNumber(num) {
    const index = numbers.indexOf(num);
    if (index > -1) {
        numbers.splice(index, 1);
        console.log(`Removed ${num} from the array.`);
    }
}

function sortNumbers() {
    numbers.sort((a, b) => a - b);
    console.log("Array sorted in ascending order.");
}

function calculateSum() {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(`Sum of numbers: ${sum}`);
    return sum;
}

function calculateAverage() {
    if (numbers.length === 0) {
        console.log("Cannot calculate the average of an empty array.");
        return;
    }
    const sum = calculateSum();
    const average = sum / numbers.length;
    console.log(`Average of numbers: ${average.toFixed(2)}`);
}

console.log("Initial array:", numbers);
addNumber(4);
console.log("Array after adding 4:", numbers);
removeNumber(3);
console.log("Array after removing 3:", numbers);

sortNumbers();
console.log("Array after sorting:", numbers);

calculateSum();
calculateAverage();