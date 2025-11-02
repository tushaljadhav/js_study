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


## project 2 solution

```javascript
const form = document.querySelector('form');
// this usecase give you empty
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```

## project  3 solution
```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock') this is optional

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```