function getSundaysPerYear(year) {
    let date = new Date(year, 0, 1);
    while (date.getDay() != 0) {
      date.setDate(date.getDate() + 1);
    }
    let days = [];
    while (date.getFullYear() == year) {
      let m = date.getMonth() + 1;
      let d = date.getDate();
      days.push(
        m + " " + (d < 10 ? '0' + d : d) +" "+ year
        
      );
      date.setDate(date.getDate() + 7);
    }
    return days.filter( (e,i,a) => a[i].slice(-7, -5) === '01' )
  };

function getSundaysForGivenRange(year1, year2) {
    for(let year = year1; year <= year2; year++){
        console.log(getSundaysPerYear(year));
    }
};