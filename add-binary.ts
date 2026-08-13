function addBinary(a: string, b: string): string {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    const result: string[] = [];

    while (i >= 0 || j >= 0 || carry > 0) {
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;

        const sum = digitA + digitB + carry;
        result.push((sum % 2).toString());
        carry = Math.floor(sum / 2);

        i--;
        j--;
    }

    return result.reverse().join('');
};


console.log(addBinary("11", "1")); 


console.log(addBinary("1010", "1011")); 