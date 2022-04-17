function caesarCipher(s, k) {
    let coll = "abcdefghijklmnopqrstuvwxyz";
    let res = "";
    let IND = (v) => {
        return v > 25 ? IND(v-26) : v;
    }
    for(let i = 0; i < s.length; i++){
        let tp = s[i].toLocaleLowerCase();
        if(!coll.includes(tp)){
            res += s[i];
        }else{
            let index = coll.indexOf(tp) + k > 25 ?
             IND(coll.indexOf(tp) + k - 26) :
             (coll.indexOf(tp) + k);
            res += s[i] == tp ? coll[index] : coll[index].toLocaleUpperCase();
        }        
    }
    return res;

}

caesarCipher("There's-a-starman-waiting-in-the-sky", 3);

// Output should be: "Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb"
 