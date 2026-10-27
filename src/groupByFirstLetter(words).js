function groupByFirstLetter(words) {
    const result = {};

    for (const word of words) {
        if (word.length === 0) continue;

        const key = word[0].toLowerCase();

        if (!result[key]) {
            result[key] = [];
        }

        result[key].push(word);
    }

    return result;
}

console.log(groupByFirstLetter(["Apple", "banana", "apricot", "Cherry", ""]));

console.log(groupByFirstLetter(["dog", "Duck", "elephant"]));