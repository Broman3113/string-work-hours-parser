(()=>{
    const stringParseArea = document.querySelector('#string-parse-area');
    const hoursElement = document.querySelector('#hours');
    const minutesElement = document.querySelector('#minutes');
    const sumElement = document.querySelector('#sum');
    const stringSumElement = document.querySelector('#string-sum');

    const parseString = (string) => {
        // 1hr 30min 2hr 30min make regex to parse this and separate hours and minutes into integers
    
        const regex = /(\d+)(hr|min)/g; // matches 1hr, 30min, 2hr, 30min
        const matches = string.match(regex);
        let hours = 0;
        let minutes = 0;
        matches.forEach((match) => {
            const number = parseInt(match.match(/\d+/g)[0]); // get the number from the match and convert to integer
            const unit = match.match(/(hr|min)/g)[0]; // get the unit from the match
            if (unit === 'hr') {
                hours += number;
            } else {
                minutes += number;
            }
        });
        hours += Math.floor(minutes / 60);
        minutes = minutes % 60;
        return { hours, minutes };
    }

    stringParseArea.addEventListener('input', (e) => {
        const { hours, minutes } = parseString(e.target.value);
        hoursElement.innerHTML = hours;
        minutesElement.innerHTML = minutes;
        sumElement.innerHTML = hours + minutes / 60;
        stringSumElement.innerHTML = `${hours}hr ${minutes}min`;
    });


})()