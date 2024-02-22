// seat e click korle event hobe 

// select item by id 
const numberOfSeatPurchased = document.getElementById('purchase-seat-count');
const numberOfSeatLeft = document.getElementById('seat-left');
const totalPriceLabel = document.getElementById('total-price');
const grandPriceLabel = document.getElementById('grand-price');
const applyCuponText = document.getElementById('add-cuppon-here');
const applyCupponBtn = document.getElementById('apply-cuppon-btn');
const applyCupponArea = document.getElementById('apply-cuppon-area');
const cupponTextPlaceHolder = document.getElementById('add-cuppon-here');
const passengerNameTextArea = document.getElementById('passenger-name-textarea');

const nameLength = 0;
passengerNameTextArea.addEventListener('keyup', function(event){
   const nameText = event.target.value;
   const len = nameText.length;

   nameLength = len;
   
});
const phoneNumberTextArea = document.getElementById('phone-number-textarea');

const numberLength = 0;
phoneNumberTextArea.addEventListener('keyup', function(event){
   const nameText = event.target.value;
   const len = nameText.length;

   numberLength = len;
   
});





const buttons = document.getElementsByClassName('kbd')

const buttonA1 = document.getElementById('A1')
const buttonA2 = document.getElementById('A2')
const buttonA3 = document.getElementById('A3')
const buttonA4 = document.getElementById('A4')
const buttonB1 = document.getElementById('B1')
const buttonB2 = document.getElementById('B2')
const buttonB3 = document.getElementById('B3')
const buttonB4 = document.getElementById('B4')


let count = 1;
let total = 0;
let grand = 0;

let A1 = false;
let A2 = false;
let A3 = false;
let A4 = false;

let B1 = false;
let B2 = false;
let B3 = false;
let B4 = false;

let new15Cuppon = false;
let couple20Cuppon = false;




function getButtonById( buttonId ){
    const id = document.getElementById(buttonId);
    return id;
}


buttonA1.addEventListener('click', function (){

    if(count < 5 && A1 == false && nameLength !== 0 && numberLength !== 0){

        A1 = true;
        const idName = getButtonById('A1');

        idName.style.backgroundColor = '#1DD100';

        let numSeatPur = Number.parseInt(numberOfSeatPurchased.innerText);
        numSeatPur = numSeatPur + 1;

        numberOfSeatPurchased.innerText = numSeatPur;

       let numSeatAvail = Number.parseInt(numberOfSeatLeft.innerText);
       numSeatAvail = numSeatAvail - 1;

       numberOfSeatLeft.innerText = numSeatAvail;


       //console.log(numSeatAvail);

       count = count + 1;


       const dynamicSeat = document.getElementById('dynamicially-added-seat');
       const newSeatBooking = document.createElement('newSeatBooking');

       newSeatBooking.innerHTML = `<div class="flex flex-row justify-between">
       <div>
           <p>A1</p>
       </div>
       <div>
           <p>Economy</p>
       </div>
       <div>
           <p>550</p>
       </div>

   </div>`;


       dynamicSeat.appendChild(newSeatBooking);


       let totalPrice = Number.parseInt(totalPriceLabel.innerText);
       totalPrice = total
       total = total + 550;
       totalPriceLabel.innerText = total;

       let grandPrice = Number.parseInt(grandPriceLabel.innerText);
       grandPrice = grand;

       grand = total;
       grandPriceLabel.innerText = grand;














    }

    


})

















buttonA2.addEventListener('click', function (){


    if(count < 5 && A2 == false && nameLength !== 0 && numberLength !== 0){

        A2 = true;
        const idName = getButtonById('A2');

        idName.style.backgroundColor = '#1DD100';
    
        let numSeatPur = Number.parseInt(numberOfSeatPurchased.innerText);
        numSeatPur = numSeatPur + 1;
    
        numberOfSeatPurchased.innerText = numSeatPur;
    
        let numSeatAvail = Number.parseInt(numberOfSeatLeft.innerText)
        numSeatAvail = numSeatAvail - 1;
    
        numberOfSeatLeft.innerText = numSeatAvail;
        count = count + 1;

        const dynamicSeat = document.getElementById('dynamicially-added-seat');
        const newSeatBooking = document.createElement('newSeatBooking');
 
        newSeatBooking.innerHTML = `<div class="flex flex-row justify-between">
        <div>
            <p>A2</p>
        </div>
        <div>
            <p>Economy</p>
        </div>
        <div>
            <p>550</p>
        </div>
 
    </div>`;
        dynamicSeat.appendChild(newSeatBooking);



        let totalPrice = Number.parseInt(totalPriceLabel.innerText);
       totalPrice = total
       total = total + 550;
       totalPriceLabel.innerText = total;

       let grandPrice = Number.parseInt(grandPriceLabel.innerText);
       grandPrice = grand;

       grand = total;
       grandPriceLabel.innerText = grand;

 
    }

  
})
buttonA3.addEventListener('click', function (){


    if(count < 5 && A3 == false  && nameLength !== 0 && numberLength !== 0){

        A3 = true;
        const idName = getButtonById('A3');

        idName.style.backgroundColor = '#1DD100';
    
        // if(idName.classList.contains('bg-[#1DD100]')){
        //     return;
        // }
    
        let numSeatPur = Number.parseInt(numberOfSeatPurchased.innerText);
        numSeatPur = numSeatPur + 1;
    
        numberOfSeatPurchased.innerText = numSeatPur;
    
        let numSeatAvail = Number.parseInt(numberOfSeatLeft.innerText)
        numSeatAvail = numSeatAvail - 1;
    
        numberOfSeatLeft.innerText = numSeatAvail;
        count = count + 1;

        const dynamicSeat = document.getElementById('dynamicially-added-seat');
        const newSeatBooking = document.createElement('newSeatBooking');
 
        newSeatBooking.innerHTML = `<div class="flex flex-row justify-between">
        <div>
            <p>A3</p>
        </div>
        <div>
            <p>Economy</p>
        </div>
        <div>
            <p>550</p>
        </div>
 
    </div>`;
        dynamicSeat.appendChild(newSeatBooking);



        let totalPrice = Number.parseInt(totalPriceLabel.innerText);
       totalPrice = total
       total = total + 550;
       totalPriceLabel.innerText = total;

       let grandPrice = Number.parseInt(grandPriceLabel.innerText);
       grandPrice = grand;

       grand = total;
       grandPriceLabel.innerText = grand;

 
    }


})
buttonA4.addEventListener('click', function (){

    if(count < 5 && A4 == false && nameLength !== 0 && numberLength !== 0){
        A4 = true;
        const idName = getButtonById('A4');

        idName.style.backgroundColor = '#1DD100';
    
        let numSeatPur = Number.parseInt(numberOfSeatPurchased.innerText);
        numSeatPur = numSeatPur + 1;
    
        numberOfSeatPurchased.innerText = numSeatPur;
    
        let numSeatAvail = Number.parseInt(numberOfSeatLeft.innerText)
        numSeatAvail = numSeatAvail - 1;
    
        numberOfSeatLeft.innerText = numSeatAvail;
        count = count + 1;


        const dynamicSeat = document.getElementById('dynamicially-added-seat');
        const newSeatBooking = document.createElement('newSeatBooking');
 
        newSeatBooking.innerHTML = `<div class="flex flex-row justify-between">
        <div>
            <p>A4</p>
        </div>
        <div>
            <p>Economy</p>
        </div>
        <div>
            <p>550</p>
        </div>
 
    </div>`;
        dynamicSeat.appendChild(newSeatBooking);



        let totalPrice = Number.parseInt(totalPriceLabel.innerText);
       totalPrice = total
       total = total + 550;
       totalPriceLabel.innerText = total;

       let grandPrice = Number.parseInt(grandPriceLabel.innerText);
       grandPrice = grand;

       grand = total;
       grandPriceLabel.innerText = grand;

 
    }


})

buttonB1.addEventListener('click', function (){


    if(count < 5 && B1 == false && nameLength !== 0 && numberLength !== 0){

        B1 = true;

        const idName = getButtonById('B1');

        idName.style.backgroundColor = '#1DD100';
    
        let numSeatPur = Number.parseInt(numberOfSeatPurchased.innerText);
        numSeatPur = numSeatPur + 1;
    
        numberOfSeatPurchased.innerText = numSeatPur;
    
        let numSeatAvail = Number.parseInt(numberOfSeatLeft.innerText)
        numSeatAvail = numSeatAvail - 1;
    
        numberOfSeatLeft.innerText = numSeatAvail;
        count = count + 1;


        const dynamicSeat = document.getElementById('dynamicially-added-seat');
        const newSeatBooking = document.createElement('newSeatBooking');
 
        newSeatBooking.innerHTML = `<div class="flex flex-row justify-between">
        <div>
            <p>B1</p>
        </div>
        <div>
            <p>Economy</p>
        </div>
        <div>
            <p>550</p>
        </div>
 
    </div>`;
        dynamicSeat.appendChild(newSeatBooking);


        let totalPrice = Number.parseInt(totalPriceLabel.innerText);
       totalPrice = total
       total = total + 550;
       totalPriceLabel.innerText = total;

       let grandPrice = Number.parseInt(grandPriceLabel.innerText);
       grandPrice = grand;

       grand = total;
       grandPriceLabel.innerText = grand;

 
    }

})
buttonB2.addEventListener('click', function (){

    if(count < 5 && B2 == false && nameLength !== 0 && numberLength !== 0){
        B2 = true;
        const idName = getButtonById('B2');

        idName.style.backgroundColor = '#1DD100';
    
        let numSeatPur = Number.parseInt(numberOfSeatPurchased.innerText);
        numSeatPur = numSeatPur + 1;
    
        numberOfSeatPurchased.innerText = numSeatPur;
    
        let numSeatAvail = Number.parseInt(numberOfSeatLeft.innerText)
        numSeatAvail = numSeatAvail - 1;
    
        numberOfSeatLeft.innerText = numSeatAvail;
        count = count + 1;

        const dynamicSeat = document.getElementById('dynamicially-added-seat');
        const newSeatBooking = document.createElement('newSeatBooking');
 
        newSeatBooking.innerHTML = `<div class="flex flex-row justify-between">
        <div>
            <p>B2</p>
        </div>
        <div>
            <p>Economy</p>
        </div>
        <div>
            <p>550</p>
        </div>
 
    </div>`;
        dynamicSeat.appendChild(newSeatBooking);


        let totalPrice = Number.parseInt(totalPriceLabel.innerText);
       totalPrice = total
       total = total + 550;
       totalPriceLabel.innerText = total;

       let grandPrice = Number.parseInt(grandPriceLabel.innerText);
       grandPrice = grand;

       grand = total;
       grandPriceLabel.innerText = grand;

 
    }


})
buttonB3.addEventListener('click', function (){

    if(count < 5 && B3 == false && nameLength !== 0 && numberLength !== 0){
        B3 = true;
        const idName = getButtonById('B3');

        idName.style.backgroundColor = '#1DD100';
    
        let numSeatPur = Number.parseInt(numberOfSeatPurchased.innerText);
        numSeatPur = numSeatPur + 1;
    
        numberOfSeatPurchased.innerText = numSeatPur;
    
        let numSeatAvail = Number.parseInt(numberOfSeatLeft.innerText)
        numSeatAvail = numSeatAvail - 1;
    
        numberOfSeatLeft.innerText = numSeatAvail;
        count = count + 1;



        const dynamicSeat = document.getElementById('dynamicially-added-seat');
        const newSeatBooking = document.createElement('newSeatBooking');
 
        newSeatBooking.innerHTML = `<div class="flex flex-row justify-between">
        <div>
            <p>B3</p>
        </div>
        <div>
            <p>Economy</p>
        </div>
        <div>
            <p>550</p>
        </div>
 
    </div>`;
        dynamicSeat.appendChild(newSeatBooking);


       let totalPrice = Number.parseInt(totalPriceLabel.innerText);
       totalPrice = total
       total = total + 550;
       totalPriceLabel.innerText = total;

       let grandPrice = Number.parseInt(grandPriceLabel.innerText);
       grandPrice = grand;

       grand = total;
       grandPriceLabel.innerText = grand;

 
    }


})
buttonB4.addEventListener('click', function (){


    if(count < 5 && B4 == false && nameLength !== 0 && numberLength !== 0){
        B4 = true;

        const idName = getButtonById('B4');

        idName.style.backgroundColor = '#1DD100';
    
        let numSeatPur = Number.parseInt(numberOfSeatPurchased.innerText);
        numSeatPur = numSeatPur + 1;
    
        numberOfSeatPurchased.innerText = numSeatPur;
    
        let numSeatAvail = Number.parseInt(numberOfSeatLeft.innerText)
        numSeatAvail = numSeatAvail - 1;
    
        numberOfSeatLeft.innerText = numSeatAvail;
        count = count + 1;

        const dynamicSeat = document.getElementById('dynamicially-added-seat');
        const newSeatBooking = document.createElement('newSeatBooking');
 
        newSeatBooking.innerHTML = `<div class="flex flex-row justify-between">
        <div>
            <p>B4</p>
        </div>
        <div>
            <p>Economy</p>
        </div>
        <div>
            <p>550</p>
        </div>
 
    </div>`;
        dynamicSeat.appendChild(newSeatBooking);


        let totalPrice = Number.parseInt(totalPriceLabel.innerText);
       totalPrice = total
       total = total + 550;
       totalPriceLabel.innerText = total;

       let grandPrice = Number.parseInt(grandPriceLabel.innerText);
       grandPrice = grand;

       grand = total;
       grandPriceLabel.innerText = grand;

 
    }

})



applyCuponText.addEventListener('keyup', function(event){
    const checkingCupponText =  event.target.value;

    if(checkingCupponText === "NEW15"){
        new15Cuppon = true;
    }else if(checkingCupponText === "Couple 20"){
        couple20Cuppon = true;
    }

    applyCupponBtn.addEventListener('click', function(){
        if(new15Cuppon == true){
            // console.log("yeyyy");
            grand = grand - (grand * 15)/100;
            grandPriceLabel.innerText = grand;

            applyCupponArea.classList.add('hidden');


        }else if(couple20Cuppon == true){
            // console.log("ahahahha");
            grand = grand - (grand * 20)/100;
            grandPriceLabel.innerText = grand;
            applyCupponArea.classList.add('hidden');
        }
        else{

        }
    })



})





