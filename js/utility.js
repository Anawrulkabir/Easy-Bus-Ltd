// All buttons 
// A
const btnA1 = document.getElementById('A1');
const btnA2 = document.getElementById('A2');
const btnA3 = document.getElementById('A3');
const btnA4 = document.getElementById('A4');
// B
const btnB1 = document.getElementById('B1');
const btnB2 = document.getElementById('B2');
const btnB3 = document.getElementById('B3');
const btnB4 = document.getElementById('B4');
// .......And rest of them will be included in future


let selectedTotalSeat = 0;
let totalAvailableSeat = 40;
let count = 1;

// it is for stop selection more than 4 seats
let a1 = false;
let a2 = false;
let a3 = false;
let a4 = false;

let b1 = false;
let b2 = false;
let b3 = false;
let b4 = false;

// Adding bg-[#1DD100] to every button while they are clicked by adding an eventlistner
// increasing selectedTotalSeat number
// decrease the avaiable seat number


    btnA1.addEventListener('click',function(){
        // btnA1.style.backgroundColor = '#1DD100';
       
        
        if( ! btnA1.classList.contains('bg-[#1DD100]') && a1 == false && count <= 4){
            btnA1.classList.add('bg-[#1DD100]' )
            selectedTotalSeat = selectedTotalSeat + 1;
            totalAvailableSeat = totalAvailableSeat - 1;
            purchase();
            a1 = true;
            count++;

            const dynamicSeat = document.getElementById('dynamicially-added-seat');
            const newSeatBooking = document.createElement('newSeatBooking');
     
            newSeatBooking.innerHTML = 
            `<div class="flex flex-row justify-between">
                 <div id="seat-name">
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
     
            
        }
       
    })
    btnA2.addEventListener('click',function(){
        
        if(! btnA2.classList.contains('bg-[#1DD100]')  && a2 == false && count <= 4){
            btnA2.classList.add('bg-[#1DD100]')
            selectedTotalSeat = selectedTotalSeat + 1;
            totalAvailableSeat = totalAvailableSeat - 1;
            purchase();
            a2 = true;
            count++;

            const dynamicSeat = document.getElementById('dynamicially-added-seat');
            const newSeatBooking = document.createElement('newSeatBooking');
     
            newSeatBooking.innerHTML = 
            `<div class="flex flex-row justify-between">
                 <div id="seat-name">
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
     
        }
        
    })
    btnA3.addEventListener('click',function(){
       
        if(! btnA3.classList.contains('bg-[#1DD100]')  && a3 == false && count <= 4){
            btnA3.classList.add('bg-[#1DD100]')
            selectedTotalSeat = selectedTotalSeat + 1;
            totalAvailableSeat = totalAvailableSeat - 1;
            purchase();
            a3 = true;count++;
            const dynamicSeat = document.getElementById('dynamicially-added-seat');
            const newSeatBooking = document.createElement('newSeatBooking');
     
            newSeatBooking.innerHTML = 
            `<div class="flex flex-row justify-between">
                 <div id="seat-name">
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
     
        }
      
    })
    btnA4.addEventListener('click',function(){
       
        if(! btnA4.classList.contains('bg-[#1DD100]') && a4 == false && count <= 4){
            btnA4.classList.add('bg-[#1DD100]' )
            selectedTotalSeat = selectedTotalSeat + 1;
            totalAvailableSeat = totalAvailableSeat - 1;
            purchase();
            a4 = true;count++;
            const dynamicSeat = document.getElementById('dynamicially-added-seat');
            const newSeatBooking = document.createElement('newSeatBooking');
     
            newSeatBooking.innerHTML = 
            `<div class="flex flex-row justify-between">
                 <div id="seat-name">
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
     
        }
       
    })
    btnB1.addEventListener('click',function(){
       
        if(! btnB1.classList.contains('bg-[#1DD100]') && b1 == false && count <= 4){
            btnB1.classList.add('bg-[#1DD100]')
            selectedTotalSeat = selectedTotalSeat + 1;
            totalAvailableSeat = totalAvailableSeat - 1;
            purchase();
            b1 = true;count++;
            const dynamicSeat = document.getElementById('dynamicially-added-seat');
            const newSeatBooking = document.createElement('newSeatBooking');
     
            newSeatBooking.innerHTML = 
            `<div class="flex flex-row justify-between">
                 <div id="seat-name">
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
     
        }
       
    })
    btnB2.addEventListener('click',function(){
        
        if(! btnB2.classList.contains('bg-[#1DD100]') && b2 == false && count <= 4){
            btnB2.classList.add('bg-[#1DD100]' )
            selectedTotalSeat = selectedTotalSeat + 1;
            totalAvailableSeat = totalAvailableSeat - 1;
            purchase();
            b2 = true;count++;
            const dynamicSeat = document.getElementById('dynamicially-added-seat');
            const newSeatBooking = document.createElement('newSeatBooking');
     
            newSeatBooking.innerHTML = 
            `<div class="flex flex-row justify-between">
                 <div id="seat-name">
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
     
        }
       
       
    })
    btnB3.addEventListener('click',function(){
       
        if(! btnB3.classList.contains('bg-[#1DD100]')  && b3 == false && count <= 4){
            btnB3.classList.add('bg-[#1DD100]')
            selectedTotalSeat = selectedTotalSeat + 1;
            totalAvailableSeat = totalAvailableSeat - 1;
            purchase();
            b3 = true;count++;
            const dynamicSeat = document.getElementById('dynamicially-added-seat');
            const newSeatBooking = document.createElement('newSeatBooking');
     
            newSeatBooking.innerHTML = 
            `<div class="flex flex-row justify-between">
                 <div id="seat-name">
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
     
        }
       
       
    })
    btnB4.addEventListener('click',function(){
        if( ! btnB4.classList.contains('bg-[#1DD100]')  && b4 == false && count <= 4){
            btnB4.classList.add('bg-[#1DD100]')
            selectedTotalSeat = selectedTotalSeat + 1;
            totalAvailableSeat = totalAvailableSeat - 1;
            purchase();
            b4 = true;count++;
            const dynamicSeat = document.getElementById('dynamicially-added-seat');
            const newSeatBooking = document.createElement('newSeatBooking');
            
            // adding dynamic element
            newSeatBooking.innerHTML = 
            `<div class="flex flex-row justify-between">
                 <div id="seat-name">
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


            // calculation of prices
            const totalPriceLabel = document.getElementById('total-price');
            const grandPriceLabel = document.getElementById('grand-price');
       
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

    



// Displaying total selected seats and available seats
function purchase(){
    const purchaseSeatCount = document.getElementById('purchase-seat-count');
    purchaseSeatCount.innerText = selectedTotalSeat;

    const availableSeatLeft = document.getElementById('total-seat-left');
    availableSeatLeft.innerText = totalAvailableSeat;
}



// increasing value of selected seat numbers
console.log(selectedTotalSeat);
console.log(totalAvailableSeat);

function dynamicallyAddedSeat(seatName){

       const dynamicSeat = document.getElementById('dynamicially-added-seat');
       const newSeatBooking = document.createElement('newSeatBooking');

       newSeatBooking.innerHTML = 
       `<div class="flex flex-row justify-between">
            <div id="seat-name">
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

    //    const selectedSeatName = document.getElementById('seat-name');
    //    selectedSeatName.innerHTML = seatName;
}