/*var sid = "ACd41c991b11854f1b42955c3c3863d314";
var authToken = "ef3d688a67ffa8be6537209a263b88a0";
var twilioNumber = "+17323558445";*/

/*
var sid = "replace this with your account sid";
var authToken = "replace this with your authorization token";
var twilioNumber = "replace this text with your twilio phone number, include country code, no dashes";
*/

/*
EXAMPLES

var sid = "ACd41c991e11554f1b42955c3c3863d314";
var authToken = "ef3d688b67ffa8bd6937209a263b88a0";
var twilioNumber = "+11234567890";

*/

function make_base_auth(user, password) {
    var tok = user + ':' + password;
    var hash = btoa(tok);
    return 'Basic ' + hash;
}
