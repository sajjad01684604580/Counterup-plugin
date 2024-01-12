let counterup = document.querySelectorAll(".counterup");

let arr = Array.from(counterup);

// arr.map(function(item){

// })
arr.map((item)=>{
    console.log(item.dataset.number)

    let counter = 0
function name(){
    counter++
    // console.log(counter)
    item.innerHTML=counter
    if(counter==item.dataset.number){
        clearInterval(stop)
    }
}

// setInterval er modde jokhon kichu rakha hobe sheta thamte na bola porjonto cholte thakebe
let stop = setInterval(function(){
    name()
},1000/item.dataset.number)
      
})

