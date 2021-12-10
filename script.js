
const topBar = document.getElementsByClassName("top-bar")[0];
const lowerBar = document.getElementsByClassName("below-top-bar")[0];

document.querySelectorAll(".properties").forEach(item=>{
    item.addEventListener('click',()=>{
        if(lowerBar.innerText == "0"){
            if((item.innerText >="1" && item.innerText <='9')|| item.innerText =="."){
                lowerBar.innerText = item.innerText;
                topBar.innerText = item.innerText;
            }         
        }
        else if(lowerBar.innerText == "X" || lowerBar.innerText=="/"|| lowerBar.innerText == "+" || lowerBar.innerText == "-"){
            lowerBar.innerText = item.innerText=="AC"? '0': item.innerText;
            topBar.innerText = item.innerText=="AC"? '': topBar.innerText.concat(item.innerText);
        }
        else{
            if(item.innerText == "AC"){
                lowerBar.innerText = 0;
                topBar.innerText ="";
            }else if(item.innerText >='0' && item.innerText <='9'){
                lowerBar.innerText = lowerBar.innerText.concat(item.innerText);
                topBar.innerText = topBar.innerText.concat(item.innerText);
            }else if(item.innerText == "="){
                lowerBar.innerText = eval(topBar.innerText);
                topBar.innerText = topBar.innerText.concat("=",lowerBar.innerText); 
            }else{
                topBar.innerText = topBar.innerText.concat(item.innerText == "X"? "*": item.innerText);
                lowerBar.innerText = item.innerText;
            }
        }
    })
})

