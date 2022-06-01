const getID = document.getElementById("id");
const getAdvice = document.querySelector('.adviceapi');
const btnOnclick = document.querySelector('#dice');



const getAdviceAPIData = axios.get('https://api.adviceslip.com/advice').then((response) =>{
    return response.data;

}).then((responseData) =>{
    getID.innerHTML = responseData.slip.id;
    getAdvice.innerHTML = responseData.slip.advice;
    // console.log(responseData.slip.id)

}).catch(err =>{
    console.log(err)
});

// load advice immediately page is loaded
window.onload = getAdviceAPIData

btnOnclick.addEventListener('click',async () =>{
    return await getAdviceAPIData()
});


getAdviceAPIData();