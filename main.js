let userName = 'David';
let userQuestion = '';
let randomNumber = Math.floor(Math.random() * 8));
let eightBall = '';

(userName != null) ? console.log(`Hello, ${userName}`) : console.log('Hello!');

console.log(`${userName} as asked the following question: ${userQuestion}?`);

switch (randomNumber) {
    case '0':
        eightBall = 'Outlook not so good'
        console.log(eightBall);
    case '1':
        eightBall = 'My sources say no'
        console.log(eightBall);
    case '2':
        eightBall = 'Reply hazy try again'
        console.log(eightBall);
    case '3':
        eightBall = 'Do not count on it'
        console.log(eightBall);
    case '4':
        eightBall = 'Cannot predict now'
        console.log(eightBall);
    case '5':
        eightBall = 'Signs point to yes'
        console.log(eightBall);
    case '6':
        eightBall = 'It is decidedly so'
        console.log(eightBall);
    case '7':
        eightBall = 'It is certain'
        console.log(eightBall);
    default:
        console.log('Sorry Magic 8 Ball is out to lunch.');
}

