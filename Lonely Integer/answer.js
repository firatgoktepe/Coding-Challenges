function lonelyinteger(a) {
    return a.find( n => a.indexOf(n) === a.lastIndexOf(n))
}
