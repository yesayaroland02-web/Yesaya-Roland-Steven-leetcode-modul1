function lengthOfLastWord(s: string): number {
    let i = s.length - 1;

    
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    // Hitung panjang kata terakhir
    let length = 0;
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
};

// Contoh 1
console.log(lengthOfLastWord("Hello World")); 

// Contoh 2
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4

// Contoh 3
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6