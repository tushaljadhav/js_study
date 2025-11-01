# project Releted Dom

## projects links

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-v72tvyd5?file=1-colorChanger%2Findex.html)

# solution code

## project 1

``` javascript 
console.log("tushal")


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
  console.log(buttons)
  button.addEventListener('click' , function(event){
    console.log(event)
    console.log(event.target)
    if(event.target.id === 'grey'){
      body.style.backgroundColor = event.target.id ;
    }
    if(event.target.id === 'white'){
      body.style.backgroundColor = event.target.id ;
    }
    if(event.target.id === 'blue'){
      body.style.backgroundColor = event.target.id ;
    }
    if(event.target.id === 'yellow'){
      body.style.backgroundColor = event.target.id ;
    }
    if(event.target.id === 'orange'){
      body.style.backgroundColor = event.target.id ;
    }
  })

})
```