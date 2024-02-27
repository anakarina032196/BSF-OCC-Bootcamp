//topic: introduction to arrays

//creating an array
let characters = ['pippin', 'goku', 'layla', 'morgana', 'aang'];

// accesing array elements
console.log('character 2: ', characters[1]);
console.log('character 5: ', characters[4]);
console.log('the last character: ', characters[characters.length-1]);

//modifying array elements
characters.push('sasuke');
characters.pop();
characters[0] = 'crybaby';
console.log("modified array: ", characters);

// Array Iteration
for(let i = 0; i < characters.length; i++) {
    console.log('Character ', i+1, characters[i]);
}

characters.forEach(function(character) {
    console.log(character)
})

// indexOf
console.log(characters.indexOf('layla'));

/// includes
console.log('Includes a value: ', characters.includes('sasuke'));

// join
console.log('Joined array: ', characters.join(' - '));

// slice
let slicedArray = characters.slice(1, 4);
console.log('Sliced array: ', slicedArray)

// splice
let removedElements = characters.splice(0, 2);
console.log('Removed elements: ', removedElements);
console.log('Updated Array: ', characters);