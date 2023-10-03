function diff(start, end, format)
    {
        let diff = start - end;
        let yr = diff/31536000000;
        let year = parseInt(yr)
        let F = yr - year;
        let mon =F*12
        let month = parseInt(mon)
        let E = mon - month
        let d = E*30.44
        let days = parseInt(d);
        let A = d - days;
        let h = A*24;
        let hours = parseInt(h);
        let B = h - hours;
        let m = B*60
        let min = parseInt(m);
        let C = m - min;
        let s = C*60
        let sec = parseInt(s);
        let D = s - sec;
        let ms = D*1000;
        let millisec = parseInt(ms);
        console.log(`Time difference: ${year}:${month}:${days}:${hours}:${min}:${sec}:${millisec}`)
    }
let today = new Date();
let check_date = new Date('29 May, 1998 21:30:00')
diff(today, check_date );
console.log(today)