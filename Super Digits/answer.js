function superDigit(n, k) {
    let p = ( n.split('').map(Number).reduce( (a,b) => a + b, 0) * k ).toString()
    return p.length > 1 ? superDigit(p, 1) : p
}


 

