let scrollContainer = document.querySelector(".review-box");

        let backbtn = document.getElementById("backbtn")
        let nextbtn = document.getElementById("nextbtn")

        scrollContainer.addEventListener("wheel", (evt) => {
            evt.preventDefault();

            scrollContainer.scrollLeft += evt.deltaY
        });

        nextbtn.addEventListener("click", ()=>{
            scrollContainer.style.scrollBehaviour = "smooth";
            scrollContainer.scrollLeft += 900;
        })
        backbtn.addEventListener("click", ()=>{
            scrollContainer.style.scrollBehaviour = "smooth";
            scrollContainer.scrollLeft -= 900;
        })