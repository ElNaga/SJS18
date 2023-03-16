var items = ["Klima", "Gitara", "Slika", "Televizor"];
var newItems = items[Symbol.iterator]();
for (let i = 0; i < (items.length+1); i++) {
    console.log(newItems.next())
}
console.log(newItems);
// array that has been created by Symbol.iterator creates an object from the initial array on which it was called. 
// we can get values by using .next method on the newly created array 

//F-ja 2
console.log(items.length[Symbol.species]);


//f-ja 3
let items2 = ['Lamba','piramida'];
let items3 = items.concat(items2);
let items4 = [...items2, ...items3];
console.log(items4)
console.log(items3, 'is the result when you concat arrays items2 and items');

//F-ja 4 copyWithin()
let itemsCopiedWithitn = items3.copyWithin(0,3,4);
console.log(itemsCopiedWithitn, 'copied within');

//f-ja 5 .entries returns OBJECT array iterator - that holds 'value' array that has index and value, and if it's done interating (internal counter). Maybe that is from the .next function.
//...hmm


//PRASHANJE: Dali mora OBJEKTOT da ima interen iterator za da moze .next() da funcionira??
let entriesArray = items3.entries();
console.log(entriesArray);
console.log(entriesArray.next());
entriesArray.next();
console.log(entriesArray.next());
//entries


//Method 6 - .fill()

let newArray = items3.fill('shteker', 5,6);
console.log(newArray);
newArray = newArray.fill(0,0);
console.log(newArray);

// .fill dodava t.e. prepishuva vekje postoechki elementi vo nizata so verdnost zadadena vo funkcijata. Zapishuva vrednost od daden index pa nagore ili od daden do daden index.

//find vrakja element filter vrakja niza

//Method 7 - .filter()

// Method 8 .from()

let objekt = {
    broevi: [1,2],

    suma: function(a,b) {
        return this.broevi[0] + this.broevi[1]
    }
}

console.log(Array.from(objekt));
