
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

  let pra = document.querySelector('p').textContent;

  console.log(pra)
  let text = pra.split(" ");
  // console.log(text)
  for (let i = 0; i < text.length; i++) {
    if (text[i].length > 8) {
      //   span.textContent = text[i];
      //   span.setAttribute('class', 'highlight');
      //  text[i] = span.outerHTML;
      // console.log(text[i]);
      const span = document.createElement('span');
      span.textContent = text[i];
      // span.className = 'highlight';
      span.setAttribute('class','highlight');
      console.log(span.outerHTML);
      text[i] = span.outerHTML;
    }
  }
  console.log(text)
  // pra.innerHTML = text.join(' ')
  pra.textContent = text.join(" ");



});