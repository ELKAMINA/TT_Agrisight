//Time complexity && space complexity  : O(n^2) bc 
//it's iterating through input once and string combined
//grows in each iteration (linearly)
export function eachPrefix(input: string[]): string[] {
    let newArr: string[] = [];
    let combo: string = '';
    for(const i of input){
        combo += i;
        newArr.push(combo);
    }
    return newArr
}

//Time complexity : O(n^3) : recursive calls (O(n))
//and each step is calling eachPrefix which O(n^2)
//Space complexity : O(n^2) due to result that stores ^2 strings
//For each index, gives us all combinations possibles without 
//duplicates 
export function getStrings(arr: string[]): string[] {
    let result: string[] = [];

    function combination(input: string[]){
        if (!input.length)
            return;
        result = result.concat(eachPrefix(input));
        //To remove duplicates
        result = result?.filter((value, index, self) => {
            return self.indexOf(value) === index;
        })
        if(input.length !== 1){
        // As we need to traverse all the array
        // we need to splice the second index
            input.splice(1,1);
            return combination(input);
        }
    }
    combination(arr);
    return result;
}

//Time Complexity : O(n^4)
//Space complexity : O(n^2)
//This function slice the initial input from the beginning
//at each iteration to constitue
export function finalResult<T>(input: T[]): string[] {
    if (!input.length)
        return [];
    const stringifiedArr = input?.map(it => typeof it === 'object' ? JSON.stringify(it) : `${it}`) //O(n)
    let finalArr: string[]= [];
    for(let i = 0; i < stringifiedArr.length; i++){
        let arr = stringifiedArr;
        arr = arr.slice(i);
        // At each iteration, gives us all the combinations
        // for an index
        finalArr = finalArr.concat(getStrings(arr));
    }
    return finalArr;
}

// This code can be optimized as the time complexity is in worst cases: O(n^4) and space complexity is: O(n^2)
