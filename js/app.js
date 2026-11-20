
const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const changeClass = (filter) => {
    buttons.forEach((button) => {
        if(button.dataset.filter === filter) {
            button.classList.add("selected");
        } else {
            button.classList.remove("selected");
        }
    })
    
}

const searchHandler = (event) => {
    const searchValue = event.target.value.toLowerCase().trim();
    // console.log(product);
    // console.dir(searchValue);
    products.forEach((product) => {
        const productName = product.children[1].innerText.toLowerCase() ;
        // console.dir(productName);
        if(productName.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
       
        }
    })
    
}

const filterHandler = (event) => {
    const filter = event.target.dataset.filter;
     changeClass(filter);

    // console.log(filter);
    products.forEach((product) => {
        const category = product.dataset.category;
        // console.log(category);
        if(filter === "all") {
            product.style.display = "block";
        }else {
            if(filter === category) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        }
        
    })
    
}

searchInput.addEventListener("keyup", searchHandler);
buttons.forEach((button) => {
    button.addEventListener("click", filterHandler)
})