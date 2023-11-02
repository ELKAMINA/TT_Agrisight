function eachPrefix<T>(input: T[]): string[] {
    let newArr: string[] = [];
    let combo: string = '';
    for(const i of input){
        combo += i;
        newArr.push(combo);
    }
    return newArr
}

function getStrings<T>(arr: string[]): string[] {
    let result: string[] = [];

    function combination(input: string[]){
        result = result.concat(eachPrefix(input));
        result = result.filter((value, index, self) => {
            return self.indexOf(value) === index;
        })
        if(input.length !== 1){
            input.splice(1,1);
            return combination(input);
        }
    }
    combination(arr);
    return result;
}

function finalResult(input: string[]): string[] {
    let finalArr: string[]= [];
    for(let i = 0; i < input.length; i++){
        let arr = input;
        arr = arr.slice(i);
        finalArr = finalArr.concat(getStrings(arr));
    }
    return finalArr;
}

// const combinaisons: string[] = getStrings([1,"k", "true", "hehe", {"kikou": 5}]);
const combinaisons = finalResult(["a","b","c","d","e","f"]);
// const combinations = eachPrefix(["c", "v", "l", "g"]);
// const combinaisons: string[] = getStrings(["c", "n", "s"]);
console.log('combi ', combinaisons)

// This code isn't the most optimized code in terms of time and space complexity
// Time complexity O(n^3) - Space complexity O(n^2) bc of the newarrayay i created