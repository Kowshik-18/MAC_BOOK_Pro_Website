



function buttonProcedure(id_button, id_display, number){
    document.getElementById(id_button).addEventListener('click', ()=> {
        document.getElementById(id_display).innerText = number;
        totalCalculation();
        document.getElementById('apply-button').disabled = false;
     });
}




function totalCalculation(){
    // debugger;
    const memoryCost = document.getElementById('extra-memory-cost').innerText;
    const storageCost = document.getElementById     ('extra-storage-cost').innerText;
    const deliveryCharge = document.getElementById     ('delivery-charge').innerText;


    const totalPrice = 1299 + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCharge);

    updateTotalPrice('total-price', totalPrice);
    return totalPrice;
}


function updateTotalPrice(id_totalprice, num){
    const totalUpdates = document.getElementsByClassName(id_totalprice);
    for(const totalUpdate of totalUpdates){
        totalUpdate.innerText = num;
    }
}


document.getElementById('apply-button').addEventListener('click', ()=>{
      const inputPromo = document.getElementById('input-promo');

      if(inputPromo.value == 'stevekaku'){
        const mainPrice = totalCalculation() - totalCalculation() * 0.2;

        document.getElementById('apply-button').disabled = true;

        updateTotalPrice('total-price', mainPrice);
      }

      inputPromo.value = '';
});




buttonProcedure('memory-8GB', 'extra-memory-cost', 0);
buttonProcedure('memory-16GB', 'extra-memory-cost', 180);

buttonProcedure('storage-256GB', 'extra-storage-cost', 0);
buttonProcedure('storage-512GB', 'extra-storage-cost', 100);
buttonProcedure('storage-1TB', 'extra-storage-cost', 180);

buttonProcedure('delivery-free', 'delivery-charge', 0);
buttonProcedure('delivery-pay', 'delivery-charge', 20);



