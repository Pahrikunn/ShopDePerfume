

// parallax on parfume
const dior = document.getElementById('dior');
const diorbg = document.getElementById('dior-bg');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    console.log(value);
    
    dior.style.transform = 'translate(0, -'+value+'px)';
    
    diorbg.style.transform = 'translate(0, -'+(value * 0.5)+'px)';

    diorbg.style.transform += 'rotate('+ (value * 0.1) +'deg)';

});



document.getElementById("cart").addEventListener("click", function() {
    // Add class "clicked" to the button
    this.classList.add("clicked");
  });