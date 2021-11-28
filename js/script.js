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
                    
                    alert("Please choose a crust");
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