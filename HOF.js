const sqr = (num) => {
    return num * num;
}

const dbl = (num) => {
    return num * 2;
}

const comp = (f1, f2) => value => f1(f2(value));

const sqrThenDbl = comp(sqr, dbl);
console.log(sqrThenDbl(5)); 
