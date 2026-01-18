const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44]

// for
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT)
        console.log(studentReport[i]);
}

// while
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT)
        console.log(studentReport[i]);
    i++;
}

// forEach
studentReport.forEach(i => {
    if (i < LIMIT)
        console.log(i);
})

// for...in
for (let i in studentReport) {
    if (studentReport[i] < LIMIT)
        console.log(studentReport[i]);
}

let today = new Date().getDay();
i = 0;
while (i < DAYS) {
    today += 1;
    switch (today % 7) {
        case 0: console.log("Sunday"); break;
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thursday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
    }
    i++;
}
