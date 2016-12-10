let moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am --> 0
// January 1st 1970 @ 12:01am --> 60

let now = moment();

console.log('current timestamp', now.unix());

let timestamp = 1481342098;
let currentMoment = moment.unix(timestamp);

console.log('currentMoment', currentMoment.format('MMM D, YYYY @ h:mm a'));


console.log('currentMoment', now.format('MMMM Do, YYYY @ h:mm:ss A'));
