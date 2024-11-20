// Given an array nums of size n, return the majority element. The majority element is the element that
// appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function majorityElement(nums: number[]): number {
    let candidate: number | null = null;
    let count = 0;

    // Tahap pertama: Temukan kandidat mayoritas
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Karena dijamin bahwa ada elemen mayoritas, kita tidak perlu validasi lebih lanjut
    return candidate!;
}

// Contoh penggunaan
const soal1 = [7, 7, 7, 7, 8, 1, 6];
console.log("1. " + majorityElement(soal1)); // Output: 7

// Create a function to convert roman numeral to integer.

function romanToInt(s: string): number {
    // Membuat objek untuk peta simbol Romawi ke nilai integer
    const romanMap: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    
    // Iterasi melalui string angka Romawi
    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];

        // Jika nilai saat ini kurang dari nilai berikutnya, kurangi nilai saat ini
        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}

// Contoh penggunaan
console.log("2. " + romanToInt("MCMXCIV")); // Output: 1994


// Given an integer numRows, return the first numRows of
// Pascal's triangle

function generate(numRows: number): number[][] {
    const triangle: number[][] = [];

    // Generate each row one by one
    for (let row = 0; row < numRows; row++) {
        const currentRow: number[] = new Array(row + 1).fill(1); // Initialize current row with 1's

        // Update the elements between the first and last elements
        for (let col = 1; col < row; col++) {
            currentRow[col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
        }

        // Add the current row to the triangle
        triangle.push(currentRow);
    }

    return triangle;
}

// Example 1
console.log(generate(5)); 
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

// Example 2
console.log(generate(1)); 
// Output: [[1]]