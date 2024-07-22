const colorChangeElement = document.getElementById('colorChangeElement');

function changeBackgroundColor() {
    const letters = '0123456789ABCDEF';
    let color='#';
    
    for (let i = 0; i < 3; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    colorChangeElement.style.backgroundColor = color;
}
setInterval(changeBackgroundColor, 1000);
  for(let i=0;i<256;i++){
      const paragraph=document.createElement('div')
      paragraph.textContent = 'YACINE IS HERE!!'
      document.getElementById('rep1').appendChild(paragraph);
  }





