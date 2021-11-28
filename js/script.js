//business interface logic
function Pizza(pizza, size, crust, toppings, number){
    this.pizza=pizza;
    this.size=size;
    this.crust=crust;
    this.toppings=toppings;
    this.number=number;
    }
    //calculating price
    var priceSize, priceCrust, priceTopping;
    var price = function(pizzaSize, pizzaCrust, pizzaTopping, pizzaNumber){
        switch (pizzaSize){
            case " ":
                priceSize=0;
                break;
                case "large":
                    priceSize = 1200;
                    break;
                case "medium":
                    priceSize = 700;
                    break;
                case "small":
                    priceSize = 400;
                    break;
                default:
                
                    alert("Please select a pizza size");
            };
            switch (pizzaCrust) {
                case "":
                    priceCrust = 0;
                    break;
                case "crispy":
                    priceCrust = 150;
                    break;
                case "cheese":
                    priceCrust = 100;
                    break;
                case "beef":
                    priceCrust = 150;
                    break;
                default:
                    
                    alert("Please select a crust");
            };
        
            if (pizzaSize == 'large') {
                priceTopping = pizzaTopping.length * 150;
            } else if (pizzaSize == 'medium') {
                priceTopping = pizzaTopping.length * 100;
            } else if (pizzaSize == 'small') {
                priceTopping = pizzaTopping.length * 50;
            }
        
            var pizzaTotal = (priceSize + priceCrust + priceTopping)*pizzaNumber;
            return pizzaTotal;
        }


        //User interface logic
$(document).ready(function(){
    $("#next").click(function(event){
        event.preventDefault();
        $(".part-2").show();
        $(".part-1").hide();

         //Pickup button
         $("#pick-up").click(function() {
            //  alert("Dear customer, your order will be ready for pickup in 20 minutes hour.");
            var pickup = document.getElementById("picks").innerHTML="Dear customer, your order will be ready for pickup in 20 minutes. ";
        })
        //Checkout button
        $("#checkout").click(function() {
           
            //get form data
            var userName = $("#full-name").val();
            var userNumber = $("#phone-number").val();
            var userLocation = $("#location").val();

            if (userName == "" || userNumber == "" || userLocation == "") {
                alert("Please fill all the fields")
            } else {
                alert("Dear " + userName + " your order will be delivered to " + userLocation + " within the hour!");
           
            }
        })
    })
    //Add another pizza button
    $("#add").click(function(event) {
        event.preventDefault();

        //Add an extra order
        $(".part-2").hide();
        $(".part-3").hide();
        $(".part-1").show();
        document.getElementById("form1").reset();
    })

    //Delivery  pizza button
    $("#delivery").click(function() {
        $(".part-2").hide();
        $(".part-3").slideDown();
    })
})