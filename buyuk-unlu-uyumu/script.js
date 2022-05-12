
function buyukUnluUyumu(str) {
    let ince = ["e", "i", "ö", "ü"];
    let kalin = ["a", "ı", "o", "u"];


    let str_modified = str.toLowerCase();


    if (str_modified.length === 0) {
        return "Lutfen bir kelime giriniz!";
    }
    else {
        let y = "";
        for (i = 0 ; i < str_modified.length ; i++) {
            y = str_modified[i];
            let y1 = ince.indexOf(y);
            let y2 = kalin.indexOf(y);
            if (y1 != -1) {
                var a = true;
            }
            if(y2 != -1) {
                var b = true;
            }
        }
        if (a === true && b === true) {
            return "Buyuk unlu uyumuna uymaz!"
        } else {
            return "Buyuk unlu uyumuna uygundur!"
        }
    }
}



