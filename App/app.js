const getID = document.querySelector('#id');
const getAdvice = document.querySelector('.adviceapi');

const getAdviceAPIData = axios.get('https://api.adviceslip.com/advice').then((response) =>{
    return response.json();
}).then((responseData) =>{
    getID.innerText = responseData.slip.id;
    // getAdvice.innerHTML = responseData.slip.advice;

}).catch(err =>{
    console.log(err)
});

getAdviceAPIData();