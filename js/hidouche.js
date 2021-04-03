function estmation() {
    //  Total initialized
    let priceTotal = 0;

    // calculate prive area
    let area= document.getElementById("area");
    let priceArea = 1000*area.value;

    // clculate price rooms
    let numberOfRooms = document.getElementById("number_of_rooms");
    let priceRooms = 10000*numberOfRooms.value;


    // calculate price material
    function choiceMaterial() {
        let valueSelected = document.getElementById("material").selectedIndex;
        let optionSelected = document.getElementById("mySelect").options;
        
        if (valueSelected[0]) {
            priceTotal = (priceArea + priceRooms)*1.15;

        }
        else if (valueSelected[1]) {
            priceTotal = (priceArea + priceRooms)*1.2;
        }
        else {
            priceTotal = (priceArea + priceRooms)*1.3;
        }


    }
   
    // priceTotal = (priceArea + priceRooms);
    let resultFinal = document.getElementById("result_final");
    resultFinal.innerText = "Le devis est: " + priceTotal + "euros";
    return priceTotal;

}





