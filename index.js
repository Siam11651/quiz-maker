let question = document.getElementsByTagName('textarea').namedItem('question');
let optionA = document.getElementsByTagName('input').namedItem('a');
let optionB = document.getElementsByTagName('input').namedItem('b');
let optionC = document.getElementsByTagName('input').namedItem('c');
let optionD = document.getElementsByTagName('input').namedItem('d');
let answer = document.getElementsByTagName('select').namedItem('answer');
let generateButton = document.getElementsByTagName('button').namedItem('generate');
let json = 
{
    question: null,
    options:
    {
        a: null,
        b: null,
        c: null,
        d: null
    },
    answer: null
};

let jsonOut = document.getElementsByTagName('textarea').namedItem('json');

generateButton.onclick = function()
{
    json.question = question.value;
    json.options.a = optionA.value;
    json.options.b = optionB.value;
    json.options.c = optionC.value;
    json.options.d = optionD.value;
    json.answer = answer.value;

    jsonOut.value = JSON.stringify(json);
}