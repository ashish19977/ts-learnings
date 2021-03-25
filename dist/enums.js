var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["OK"] = 0] = "OK";
    ErrorCodes[ErrorCodes["NOTOK"] = 1] = "NOTOK";
    ErrorCodes[ErrorCodes["AUTH"] = 2] = "AUTH";
    ErrorCodes[ErrorCodes["UNAUTH"] = 3] = "UNAUTH";
})(ErrorCodes || (ErrorCodes = {}));
var notOkCode = ErrorCodes.OK;
