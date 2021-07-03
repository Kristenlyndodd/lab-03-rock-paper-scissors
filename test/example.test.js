import { didUserWin } from '../utils.js';
const test = QUnit.test;

test('testing a draw', (expect) => {
    //Arrange
    const expected = 'draw';
    //Act 
    const draw1 = didUserWin('rock', 'rock');
    const draw2 = didUserWin('paper', 'paper');
    const draw3 = didUserWin('scissors', 'scissors');

    //Expect
    expect.equal(draw1, expected);
    expect.equal(draw2, expected);
    expect.equal(draw3, expected);
});

test('testing user loss', (expect) => {
    //Arrange
    const expected = 'loss';
    
    const loss1 = didUserWin('rock', 'paper');
    const loss2 = didUserWin('paper', 'scissors');
    const loss3 = didUserWin('scissors', 'rock');
    
    //Expect
    expect.equal(loss1, expected);
    expect.equal(loss2, expected);
    expect.equal(loss3, expected);
});

test('testing user win', (expect) => {
    //Arrange
    const expected = 'win';   
    //Act 
    const win1 = didUserWin('rock', 'scissors');
    const win2 = didUserWin('scissors', 'paper');
    const win3 = didUserWin('paper', 'rock');

    //Expect
    expect.equal(win1, expected);
    expect.equal(win2, expected);
    expect.equal(win3, expected);
});
