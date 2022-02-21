let userName = 'David';
let userQuestion = 'Will it rain today?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

(userName != null) ? console.log(`Hello, ${userName}`) : console.log('Hello!');

console.log(`${userName} has asked the following question: ${userQuestion}?`);
console.log(randomNumber);

switch (randomNumber) {
    case 0:
        eightBall = 'Outlook not so good'
        console.log(eightBall);
        break;
    case 1:
        eightBall = 'My sources say no'
        console.log(eightBall);
        break;
    case 2:
        eightBall = 'Reply hazy try again'
        console.log(eightBall);
        break;
    case 3:
        eightBall = 'Do not count on it'
        console.log(eightBall);
        break;
    case 4:
        eightBall = 'Cannot predict now'
        console.log(eightBall);
        break;
    case 5:
        eightBall = 'Signs point to yes'
        console.log(eightBall);
        break;
    case 6:
        eightBall = 'It is decidedly so'
        console.log(eightBall);
        break;
    case 7:
        eightBall = 'It is certain'
        console.log(eightBall);
        break;
    default:
        console.log('Sorry Magic 8 Ball is out to lunch.');
}

