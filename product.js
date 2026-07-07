//selecting sideNav and menu icon
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

//search area
var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")


search.addEventListener("keyup",function(){
        var enteredValue = this.value.toUpperCase()
        
        for(i=0;i<productlist.length;i++){
            var productname = productlist[i].querySelector("p").textContent
            if(productname.toUpperCase().indexOf(enteredValue)<0){
                productlist[i].style.display="none"
            }
            else{
                productlist[i].style.display="block"
            }
        }
    })
