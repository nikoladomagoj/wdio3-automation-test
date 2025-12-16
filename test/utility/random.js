export function randomNumber(length = 5) {
    const chars = '0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

function randomString(length = 6) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

function randomEmail() {
    return `user${randomNumber(6)}@mail.com`;
}

function randomMobile() {
    return randomNumber(10); 
}
function randomFirstName() {
    return `Name${randomString(4)}`;
}

function randomLastName() {
    return `Surname${randomString(4)}`;
}

module.exports = { randomNumber, randomEmail, randomMobile, randomFirstName, randomLastName };