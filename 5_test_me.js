function addNumbers(number1, number2) {
    return number1 + number2;
}

function evenLengthMessage(string) {
    return string.length % 2 === 0;
}

function doesThisMentionMe(message) {
    return message.includes("brock");
}

module.exports = { addNumbers, evenLengthMessage, doesThisMentionMe }