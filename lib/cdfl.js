export default function cdfl(hash1, hash2) {
    let res = 0;
    for (let char = 0; char < hash1.length; char++) {
        if (hash1[char] === hash2[char]) {
            res += 1;
        }
        else {
            return res;
        }
    }

    return res;
}