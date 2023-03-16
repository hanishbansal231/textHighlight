const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>{
  let pra = document.querySelector('p');
  let text = pra.textContent.split(" ");
  let span = document.createElement('span');
  for(let i = 0;i < text.length;i++){
    if(text[i].length > 8){
      span.textContent = text[i];
      span.classList.add('highlight');
      text[i] = span.outerHTML;
    }
  }
  pra.innerHTML = text.join(" ");
});