const feedback = document.getElementById('feedback');
const submit = document.getElementById('button');
const form = document.getElementById('form1')
const error = document.getElementById('errormsg')
const counter = document.getElementById('counter')

feedback.addEventListener('input',()=>{
    counter.textContent = `${feedback.value.length}/200`
})

function feedbackValidate(){
    if(feedback.value.trim().length<10){
        error.textContent= `minimum 10 characters!`
        return false;
    }
        error.textContent = ''
        return true
    }

form.addEventListener('submit',(e)=>{
     e.preventDefault()
    if(feedbackValidate()){
        alert('your feedback submitted')
        form.reset();
        counter.textContent =`0/100`
    }
})







