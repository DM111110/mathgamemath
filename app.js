const quizData = [{
	question: "10 պոմպերի օգնությամբ 10 րոպեում կարելի է արտամղել 10 տոննա ջուր: Քանի՞ րոպեում է հնարավոր 25 պոմպերով արտամղել 25 տոննա ջուր:",
	a: "10",
	b: "15",
	c: "20",
	d: "25",
	correct: "a",
},
{
	question: "Երկու գնացքներ, որոնցից յուրաքանչյուրն ունի 250 մետր երկարություն և 45 կմ/ժ արագություն, շարժվում են հակառակ ուղղություններով և անցնում են իրար կողքով: Քանի՞ վայրկյան կտևի անցումային այդ ժամանակը:",
	a: "25մ/վրկ",
	b: "35մ/վրկ",
	c: "45մ/վրկ",
	d: "15մ/վրկ",
	correct: "a",
},
{
	question: "Եռանիշ թիվը վերջանում է 2-ով: Եթե այն տեղափոխենք թվի սկիզբը, ապա նոր ստացված թվի 90%-ը 4-ով փոքր կլինի սկզբնական թվից: Գտնել եռանիշ թիվը:",
	a: "201",
	b: "202",
	c: "203",
	d: "204",
	correct: "b",
},
{
	question: "Երկու թվերի գումարը 162 է: Նրանցից մեծը փոքրի վրա բաժանելիս քանորդում ստացվում է 5: Գտեք այդ թվերը:",
	a: "27 և 135",
	b: "117 և 45",
	c: "79 և 83",
	d: "128 և 34",
	correct: "a",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
	return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
	const data = quizData[index]
	const ans = getAnswer()
	if (ans === data.correct) {
		correct++;
	} else {
		incorrect++;
	}
	index++;
	loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
	(inputEl) => {
		if (inputEl.checked) {
			ans = inputEl.value;
		}
	}
)
return ans;
}

const reset = () => {
allInputs.forEach(
	(inputEl) => {
		inputEl.checked = false;
	}
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
	<div class="col">
		<h3 class="w-100"> Դուք պատասխանեցիք ${correct} / ${total} հարցերից </h3>
	</div>
`
}
loadQuestion(index);