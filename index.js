const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const btnCheck = document.querySelector("#btn-check");
const errorMessage = document.querySelector("#error-message");
const availNotes = [2000,500,100,20,10,5,1];
const noOfNotes = document.querySelectorAll(".no-of-notes");
btnCheck.addEventListener("click", function Validation() {
    hideMessage();
    if (billAmount.value > 0) {
        console.log(cashAmount.value);
        console.log(billAmount.value);
        if (cashAmount.value > billAmount.value) {
            var amountReturned = cashAmount.value-billAmount.value;
            console.log("inside second if");
            calculateChange(amountReturned);
        }
         else{
            showMessage("the cash provided should be at least equal to the bill amount");
        }

    } else {
        console.log("last else")
        showMessage("Invalid Bill Amount");

    }

});
function calculateChange(amountReturned){
    for(let i=0; i<availNotes.length;i++){
        const numberOfNotes = Math.trunc(amountReturned/availNotes[i]);
        amountReturned = amountReturned %  availNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
    }

    
    

function hideMessage(){
    errorMessage.style.display ="none";
}

function showMessage(msg) {
   
    errorMessage.style.display = "block"
    errorMessage.innerText = msg;
    
}