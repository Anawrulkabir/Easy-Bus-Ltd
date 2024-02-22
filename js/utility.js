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

// calculating total price and grand price
let totalPrice = 0;
let grandPrice = 0;

// applying coupon code 
let couponValue = 0;





// Adding bg-[#1DD100] to every button while they are clicked by adding an eventlistner
// increasing selectedTotalSeat number
// decrease the avaiable seat number


    btnA1.addEventListener('click',function(){
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


            const pricelabel = document.getElementById('total-price');
            const priceText = parseFloat(pricelabel.innerText);
    
            totalPrice = priceText;
            totalPrice += 550;
    
            pricelabel.innerText = totalPrice;
    
    
            const grandPriceLabel = document.getElementById('grand-price')
            const grandPriceText = parseFloat(grandPriceLabel.innerText);


            grandPrice = totalPrice;
            grandPriceLabel.innerText = grandPrice;
            // checking the coupon code 
            document.getElementById('add-cuppon-here').addEventListener('keyup',function(event){
            const couponeText = event.target.value;
            document.getElementById('apply-cuppon-btn').addEventListener('click',function(){
                if(couponeText == 'NEW15'){
                    grandPrice = totalPrice - (totalPrice * 0.15);
                 }else if(couponeText == 'Couple 20'){
                    grandPrice = totalPrice - (totalPrice * 0.20);
                 }else{
                    
                 }

                 grandPriceLabel.innerText = grandPrice;

                 })
            })

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

            const pricelabel = document.getElementById('total-price');
        const priceText = parseFloat(pricelabel.innerText);

        totalPrice = priceText;
        totalPrice += 550;

        pricelabel.innerText = totalPrice;


        const grandPriceLabel = document.getElementById('grand-price')
        const grandPriceText = parseFloat(grandPriceLabel.innerText);


            grandPrice = totalPrice;
            grandPriceLabel.innerText = grandPrice;
            // checking the coupon code 
            document.getElementById('add-cuppon-here').addEventListener('keyup',function(event){
            const couponeText = event.target.value;
            document.getElementById('apply-cuppon-btn').addEventListener('click',function(){
                if(couponeText == 'NEW15'){
                    grandPrice = totalPrice - (totalPrice * 0.15);
                 }else if(couponeText == 'Couple 20'){
                    grandPrice = totalPrice - (totalPrice * 0.20);
                 }else{
                    
                 }

                 grandPriceLabel.innerText = grandPrice;

                 })
            })


           
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



            const pricelabel = document.getElementById('total-price');
        const priceText = parseFloat(pricelabel.innerText);

        totalPrice = priceText;
        totalPrice += 550;

        pricelabel.innerText = totalPrice;


        const grandPriceLabel = document.getElementById('grand-price')
        const grandPriceText = parseFloat(grandPriceLabel.innerText);
        
        grandPrice = totalPrice;
        grandPriceLabel.innerText = grandPrice;
       // checking the coupon code 
       document.getElementById('add-cuppon-here').addEventListener('keyup',function(event){
        const couponeText = event.target.value;
        document.getElementById('apply-cuppon-btn').addEventListener('click',function(){
            if(couponeText == 'NEW15'){
                grandPrice = totalPrice - (totalPrice * 0.15);
             }else if(couponeText == 'Couple 20'){
                grandPrice = totalPrice - (totalPrice * 0.20);
             }else{
                
             }

             grandPriceLabel.innerText = grandPrice;

             })
        })

            
     
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



            const pricelabel = document.getElementById('total-price');
        const priceText = parseFloat(pricelabel.innerText);

        totalPrice = priceText;
        totalPrice += 550;

        pricelabel.innerText = totalPrice;


        const grandPriceLabel = document.getElementById('grand-price')
        const grandPriceText = parseFloat(grandPriceLabel.innerText);
        
        grandPrice = totalPrice;
        grandPriceLabel.innerText = grandPrice;
        // checking the coupon code 
        document.getElementById('add-cuppon-here').addEventListener('keyup',function(event){
            const couponeText = event.target.value;
            document.getElementById('apply-cuppon-btn').addEventListener('click',function(){
                if(couponeText == 'NEW15'){
                    grandPrice = totalPrice - (totalPrice * 0.15);
                 }else if(couponeText == 'Couple 20'){
                    grandPrice = totalPrice - (totalPrice * 0.20);
                 }else{
                    
                 }

                 grandPriceLabel.innerText = grandPrice;

                 })
            })


            
            
     
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


            const pricelabel = document.getElementById('total-price');
        const priceText = parseFloat(pricelabel.innerText);

        totalPrice = priceText;
        totalPrice += 550;

        pricelabel.innerText = totalPrice;


        const grandPriceLabel = document.getElementById('grand-price')
        const grandPriceText = parseFloat(grandPriceLabel.innerText);
        
        grandPrice = totalPrice;
        grandPriceLabel.innerText = grandPrice;
        // checking the coupon code 
        document.getElementById('add-cuppon-here').addEventListener('keyup',function(event){
            const couponeText = event.target.value;
            document.getElementById('apply-cuppon-btn').addEventListener('click',function(){
                if(couponeText == 'NEW15'){
                    grandPrice = totalPrice - (totalPrice * 0.15);
                 }else if(couponeText == 'Couple 20'){
                    grandPrice = totalPrice - (totalPrice * 0.20);
                 }else{
                    
                 }

                 grandPriceLabel.innerText = grandPrice;

                 })
            })


           
     
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


            const pricelabel = document.getElementById('total-price');
        const priceText = parseFloat(pricelabel.innerText);

        totalPrice = priceText;
        totalPrice += 550;

        pricelabel.innerText = totalPrice;


        const grandPriceLabel = document.getElementById('grand-price')
        const grandPriceText = parseFloat(grandPriceLabel.innerText);
        
        grandPrice = totalPrice;
        grandPriceLabel.innerText = grandPrice;
        // checking the coupon code 
        document.getElementById('add-cuppon-here').addEventListener('keyup',function(event){
            const couponeText = event.target.value;
            document.getElementById('apply-cuppon-btn').addEventListener('click',function(){
                if(couponeText == 'NEW15'){
                    grandPrice = totalPrice - (totalPrice * 0.15);
                 }else if(couponeText == 'Couple 20'){
                    grandPrice = totalPrice - (totalPrice * 0.20);
                 }else{
                    
                 }

                 grandPriceLabel.innerText = grandPrice;

                 })
            })

            
     
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



            const pricelabel = document.getElementById('total-price');
            const priceText = parseFloat(pricelabel.innerText);
    
            totalPrice = priceText;
            totalPrice += 550;
    
            pricelabel.innerText = totalPrice;
    
    
            const grandPriceLabel = document.getElementById('grand-price')
            const grandPriceText = parseFloat(grandPriceLabel.innerText);
            
            grandPrice = totalPrice;
            grandPriceLabel.innerText = grandPrice;
            // checking the coupon code 
            document.getElementById('add-cuppon-here').addEventListener('keyup',function(event){
                const couponeText = event.target.value;
                document.getElementById('apply-cuppon-btn').addEventListener('click',function(){
                    if(couponeText == 'NEW15'){
                        grandPrice = totalPrice - (totalPrice * 0.15);
                     }else if(couponeText == 'Couple 20'){
                        grandPrice = totalPrice - (totalPrice * 0.20);
                     }else{
                        
                     }
    
                     grandPriceLabel.innerText = grandPrice;
    
                     })
                })
    
       
           
     
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



            const pricelabel = document.getElementById('total-price');
        const priceText = parseFloat(pricelabel.innerText);

        totalPrice = priceText;
        totalPrice += 550;

        pricelabel.innerText = totalPrice;


        const grandPriceLabel = document.getElementById('grand-price')
        const grandPriceText = parseFloat(grandPriceLabel.innerText);
        
        grandPrice = totalPrice;
        grandPriceLabel.innerText = grandPrice;
        // checking the coupon code 
        document.getElementById('add-cuppon-here').addEventListener('keyup',function(event){
            const couponeText = event.target.value;
            document.getElementById('apply-cuppon-btn').addEventListener('click',function(){
                if(couponeText == 'NEW15'){
                    grandPrice = totalPrice - (totalPrice * 0.15);
                 }else if(couponeText == 'Couple 20'){
                    grandPrice = totalPrice - (totalPrice * 0.20);
                 }else{
                    
                 }
                 grandPriceLabel.innerText = grandPrice;

                 })
            })
        }
        
       
       
    })

    



// Displaying total selected seats and available seats
function purchase(){
    const purchaseSeatCount = document.getElementById('purchase-seat-count');
    purchaseSeatCount.innerText = selectedTotalSeat;

    const availableSeatLeft = document.getElementById('total-seat-left');
    availableSeatLeft.innerText = totalAvailableSeat;
}

