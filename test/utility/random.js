export function randomNumber(length = 5) {
    const chars = '0123456789';
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

module.exports = { randomNumber, randomEmail, randomMobile };