let getKthMagicNumber = function(k) {
    let arr = [1];
    let i3 = 0, i5 = 0, i7 = 0;
    while (arr.length < k) {
        let num = Math.min(arr[i3] * 3, arr[i5] * 5, arr[i7] * 7);
        if (num === arr[i3] * 3) i3++;
        if (num === arr[i5] * 5) i5++;
        if (num === arr[i7] * 7) i7++;
        arr.push(num);
    }
    return arr[k - 1];
};