const fortuneButton = document.getElementById('fortuneButton')
const submitButton = document.getElementById('submitButton')
const secretInput = document.getElementById('secretinput')

let bodyObj = {
    secret: secretInput.value
}
console.log('bodyOBJ', bodyObj)

const getFortune = () => axios.get('http://localhost:4000/api/fortune/').then((res)=>{
    window.alert(res.data)
})
fortuneButton.addEventListener('click', getFortune)

const createSecret = body => axios.post('http://localhost:4000/api/fortune/',body).then((res)=>{
window .alert(res.data)
})
submitButton.addEventListener('click',createSecret(bodyObj))

const prevent= () => event.preventDefault()
document.addEventListener('submit',prevent)

// let input = document.getElementById('secretInput')
// submitButton.addEventListener('click',console.log('click'))
// console.log(input.value)