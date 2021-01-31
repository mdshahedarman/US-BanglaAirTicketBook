// *********************************total calculation area********************************
// updating total field
function updateTotal(totalValue) {
    const getSubtotal = document.getElementById('subtotal');
    const getVat = document.getElementById('vat');
    const getTotal = document.getElementById('total');

    getSubtotal.innerText = '$' + totalValue;
    getVat.innerText = '$' + (totalValue * 0.1);
    getTotal.innerText = '$' + (totalValue + totalValue * 0.1);
}
function calculateTotal() {
    const getFirstClass = document.getElementById('firstClassInput');
    const getEconomy = document.getElementById('economyInput');
    return 150 * parseFloat(getFirstClass.value) + 100 * parseFloat(getEconomy.value);
}

//increment decrement area
function inputUpdate(increase, id) {
    const getInput = document.getElementById(id + 'Input');
    let getInputValue = parseFloat(getInput.value);
    if (increase) getInputValue++;
    else if (!increase && getInputValue > 0) getInputValue--;
    getInput.value = getInputValue;
    let totalValue = calculateTotal();
    updateTotal(totalValue);
}






//*******************************confirmation of ticket buying area****************************
// // date picking area
// document.getElementById('date1').addEventListener('change', function () {
//     ticketInfo.departure = this.value;
// });
// document.getElementById('date2').addEventListener('change', function () {
//     ticketInfo.returnDate = this.value;
// });
document.getElementById('bookNow').addEventListener('click', function () {
    // keyboard input error handling
    let totalValue = calculateTotal();
    updateTotal(totalValue);


    // validation cheak
    if (
        document.getElementById('f-from').value == '' ||
        document.getElementById('f-to').value == '' ||
        document.getElementById('date1').value == '' ||
        document.getElementById('date2').value == '' ||
        document.getElementById('firstClassInput').value == '' ||
        document.getElementById('economyInput').value == ''
    ) {
        alert("Please input all information");
    }
    else {

        // show hide section
        document.getElementById('confirmationPopup').style.display = 'block';
        document.getElementById('confirmBox').style.display = 'block';
        document.getElementById('purchaseBox').style.display = 'none';
        document.getElementById('form').style.display = 'none';
        document.getElementById('doc').style.display = 'none';



        // ticket data showing option
        document.getElementById('from').innerText = document.getElementById('f-from').value;
        document.getElementById('to').innerText = document.getElementById('f-to').value;
        document.getElementById('dDate').innerText = document.getElementById('date1').value;
        document.getElementById('rDate').innerText = document.getElementById('date2').value;
        document.getElementById('fcTicket').innerText = document.getElementById('firstClassInput').value;
        document.getElementById('eTicket').innerText = document.getElementById('economyInput').value;
        document.getElementById('totalCost').innerText = document.getElementById('total').innerText.replace('$', '');
    }


});


function getBack() {
    document.getElementById('confirmationPopup').style.display = 'none';
    document.getElementById('form').style.display = 'block';
    document.getElementById('doc').style.display = 'block';
}
function purchaseShow() {
    document.getElementById('confirmBox').style.display = 'none';
    document.getElementById('purchaseBox').style.display = 'block';
}