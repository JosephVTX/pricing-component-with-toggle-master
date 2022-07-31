const planDateInput = document.querySelector("#plan-date__input"),
allPrice = document.querySelectorAll(".price>p:nth-child(2)");



function setAllPrice(boolean){

    const priceArr = [19, 24, 39]

    if(boolean){

        allPrice.forEach((e, i) =>{

            e.textContent = `${priceArr[i]}.99`
        })
    }
    else{
        allPrice.forEach((e, i) =>{
            e.textContent = `${priceArr[i]*10}.99`
            
        })
    }


}


planDateInput.addEventListener("input", ()=> setAllPrice(planDateInput.checked)) 