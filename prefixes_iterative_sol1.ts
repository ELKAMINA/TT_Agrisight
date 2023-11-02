function getStrings<T>(array: T[]): string[] {
    const stringifiedArr = array.map(it => typeof it === 'object' ? JSON.stringify(it) : `${it}`) // O(n)
    const newArr: string[]= [];

    for (let i= 0; i < stringifiedArr.length; i++){
        let temp = stringifiedArr[i];
        newArr.push(temp);
        for (let j = i + 1; j < stringifiedArr.length; j++){
            temp += stringifiedArr[j]
            newArr.push(temp);
            if (j === stringifiedArr.length - 1 && stringifiedArr[i + 2]) {
                newArr.push(stringifiedArr[i] + stringifiedArr[i + 2])
            }
        }
    }
    return newArr;
}

// const combinaisons: string[] = getStrings([1,"k", "true", "hehe", {"kikou": 5}]);
// const combinaisons: string[] = getStrings(["c", "v", "l", "g"]);
const combinaisons: string[] = getStrings(["c", "n", "s"]);
// console.log('combi ', combinaisons)

// This code isn't the most optimized code in terms of time and space complexity
// Time complexity O(n^3) - Space complexity O(n^2) bc of the newArray i created