//Create a function to convert Excel sheet column title to its corresponding column number.
function titleToNumber(columnTitle: string): number {
    let result = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        const char = columnTitle[i];
        const value = char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        result = result * 26 + value;
    }

    return result;
}

console.log("1. " + titleToNumber("AB"));


// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one
function findUnique(arr: number[]): number[] {
    return arr.filter((item, index) => arr.indexOf(item) === index && arr.lastIndexOf(item) === index);
}

const arrExc10 = [4,1,2,1,2];
console.log("2. " + findUnique(arrExc10));


//Given two strings s and t, return true if t is an anagram of s, and false otherwise
function isAnagram(s: string, t: string): boolean {
    // Jika panjang kedua string berbeda, langsung return false
    if (s.length !== t.length) {
        return false;
    }

    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    
    return sortedS === sortedT;
}

console.log("3. " + isAnagram("satu", "utas"));


//You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
function climbStairs(n: number): number {
    if (n <= 2) return n; 

    let prev2 = 1;
    let prev1 = 2;
    let current = 0;

    for (let i = 3; i <= n; i++) {
        current = prev1 + prev2;
        prev2 = prev1; 
        prev1 = current;
    }

    return prev1;
}

console.log("4. " + climbStairs(3));