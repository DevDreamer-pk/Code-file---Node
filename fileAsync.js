// const fs = require('fs');
// import path from 'path';
import fs from 'fs';
import path from 'path';

// const filePath = path.join(__dirname, 'employee.txt');
// const filePathResolved = path.resolve(__dirname, 'employee.txt');
// const fileExtentionName = path.extname('employee.txt');

fs.writeFile('employee.txt', 'Paramjeet loves you prabhjot', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File created');
    }
    }
)

fs.appendFile('employee.txt', '\n Okay babes', (err, data) => {
    if (err) {
        console.log(err);
    }   else {
        console.log('File updated');
    }
})