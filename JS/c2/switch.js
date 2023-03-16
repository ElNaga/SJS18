const product = prompt ("Produkt?")


switch (product) {
    case 'Milk':
        console.log("The price of Milk is 10 den")
        break;
    case 'Bread':
        console.log("The price of bread is 20 den")
        break;
    case 'Banana':
        console.log("The price of banana is 30 den")
        break;
    case 'Apple':
        console.log("The price of apple is 40 den")
        break;
    case 'Peach':
        console.log("The price of peach is 50 den")
        break;

    default:
        console.log("Onknown product")
        break;
}