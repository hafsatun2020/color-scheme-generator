const colorInput = document.querySelector(`input[type='color']`)
const btn = document.querySelector(`#btn`)
let colorValue;
let colors = document.querySelector('.colors')
let colorbox = document.querySelectorAll('.color')
const option  = document.getElementById("scheme");



window.addEventListener('DOMContentLoaded', function(){
      colorInput.addEventListener('change', function(){
       colorbox.forEach(color => color.style.backgroundColor = colorInput.value )
       //console.log(colorInput.value)145
       colorValue = colorInput.value 
       
 //console.log(colorValue)
    }) 
   

})

    

     
    

   

 

btn.addEventListener('click', function(e){
     e.preventDefault()
 let hex = colorValue.slice(1)
   // console.log(colorValue, hex)
    
    var i = option.selectedIndex;
   let selectedOption= option[i].value
     console.log(selectedOption)
    
        
    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${selectedOption}&count=5`)
    .then  (response => response.json())
    .then (data =>{
   
         //console.log(data)
                let randomColor = []
                for(let color of data.colors){
                        //console.log(color.hex.value)
                          randomColor.push(color.hex.value)
                    }
                    
             
                   console.log(randomColor)
              
                  colors.children[0].style.backgroundColor = randomColor[0]
                  colors.children[0].textContent = randomColor[0]
                  colors.children[1].style.backgroundColor = randomColor[1]
                  colors.children[1].textContent = randomColor[1]
                  colors.children[2].style.backgroundColor = randomColor[2]
                  colors.children[2].textContent= randomColor[2]
                  colors.children[3].style.backgroundColor = randomColor[3]
                  colors.children[3].textContent = randomColor[3]
                  colors.children[4].style.backgroundColor = randomColor[4]
                  colors.children[4].textContent= randomColor[4]
                  
                  
              
         console.log(data.mode[selectedOption])
    })
        
    
    
})
             
             
         /*   
        
        const text =  document.querySelectorAll('.text')
               
               
                      for(let i = 0; i < randomColor.length; i++){
                  text.forEach(text => {
                  
                    text.textContent = randomColor[i] + " "
                    })
                    
                    } */
                        
     
