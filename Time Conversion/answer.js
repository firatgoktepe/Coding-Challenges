function timeConversion(s){
    let time = s.split(':');
    let hour = time[0];
    let minutes = time[1];
    let seconds = time[2].slice(0,2);
    let ampm = time[2].slice(2);
    if(ampm === 'PM'){
        if(hour === '12'){
            hour = '12';
        }else{
            hour = parseInt(hour) + 12;
        }
    }else{
        if(hour === '12'){
            hour = '00';
        }
    }
    return hour + ':' + minutes + ':' + seconds;
}