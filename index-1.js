// When we create a for loop to loop over an array, we base the loop's confition off of the  .length of the array, This works, but it's a lot of syntactic cruft to remember:
for (let i = 0; i < Array. length ; i ++) {
    //loop bofy
}

//The problem is that we're using a looping construct to  perform iteration.
//Looping vs. Iteration
// Loooping vd. iyrtsyion
//thhere's a pretty fine line seperating the concepts of looping and iteration. and only the truly pedaritic will call you out if you use one in place of the other.

//Looping ves. iteration
//There's a . pretty fine line operating the concepts of looping  construct to perform iteration.
//Looping vs. iteration
//There's a pretty fine line seperating the concepts of looping and iteration, and only the truly pedantic will call you out if you use on in place of the other.
//Loooping is the process of executomg a set of statements repeatedly until a condition is  met. it's great for when we want to do something a specific number of times(for loop) or unlimited times until the condition is met (while ror do while loop).
//iteration is the provess of executing a set of statements once for each element in a HTMLAllCollection. We can accomplish this with a for loop:

let myArray = ['d,'b', 'c'.'d', 'e', 'f', 'g'];

for ( let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);

}


//or with a while loop:
let myArra = ['d','b','c','d','e','f','g'];

let j = 0;

while(j < myArray.length) {
    console.log(myArray[j++]);
}

//but neither is very pretty. The for,,of statement gives us a bettwe way.

//for.. ..ofYsing for,,,of , the code above becomes:

const myArray = ['a',''b ','c',''d','e','f','g'];

for(const element of myArray) {
    console.log(element);

    //Using a construct that is specifically meant for iteration results in much clear code: whter's not intialization of a counter ,  no condition, no incrementing the  counter, and no bracket notation to access elements in the array(myArray[i]).


    //const versus let
///As you mnight've noticed, for,,of allows us to use const instea of let, in for and while statements, let is required because we are incrementing a counter variable. The incrementing process involves taking the counter's current value, addinf 1 to it, and then assigning that new value to the variable. That reassignement precludes us from using ut beloved const, which cannot be reassigned.
}


//iterating over..strings?
//A string is effectively an ordered cikkection( like an array) of charactes, which for...of is more than happy to iterate over:
for (const char of 'Hello, world!') [
    console.log(char);
]
// LOG: H
// LOG: e
// LOG: l
// LOG: l
// LOG: o
// LOG: ,
// LOG:
// LOG: w
// LOG: o
// LOG: r
// LOG: l
// LOG: d
// LOG: !

//The for,,in statement is similar to fo,,,of ; it's generally used for iterating over the properties in an object. The statement follows this syntax:
for (const [KEY]in [OBJECR]]) {
    //Code in the statement body
}
//The for ,,,in statement iterates over the properties in an object, but it doesn't pass the entire propety into the block, instead. it only passes in the keys:
const address = {
    street1" '11 Broadway',
    street 2: "2nd Floor",
    city: 'New York',
    state: 'NY'
    zipCode: '10004',

};

for(const key in address) {
    console,log(key);
}



// LOG: street1
// LOG: street2
// LOG: city
// LOG: state
// LOG: zipCode



//Accessing the objects values is as simple as combining  the passed iin key with the bracket operator.
const address = {
    street 1: '11 Broadway',
    street2: '2nd Floor',
    city: 'New York',
    state: 'NY',
    zipcode: "100004"
};


// LOG: 11 Broadway
// LOG: 2nd Floor
// LOG: New York
// LOG: NY
// LOG: 10004


//Dot operator!
//Can you think og why the bracket operator is required? Let's see what happens when you use the dot operatorco
    const address = {
    street1: '11 Broadway',
    street2: '2nd  Floor',
    city: 'New York',
    state: 'NY',
    zipcode: '100004'
};

for (const key in address) {
    console.log(address.key);
}



// LOG: undefined
// LOG: undefined
// LOG: undefined
// LOG: undefined
// LOG: undefined

//The for,,in statement iterates over five  properties in  address, siccessively passing in the object's keys, However,, inside the statement body we're  trying to access, address,key, if you recall from the lesson o objects, variables don't work with the dot operator because it treats the variable  names as a literal key --that is, address,key is tryingv to access the propety on address with a key of key, Since there is no key property in address, it returns undefined, To prove this, let's add a  key property to address:


address,keey = "Let's have a 'key' key!";

for (const  key in  address) {
    console.log(address.key);
}


// LOG: Let's have a 'key' key!
// LOG: Let's have a 'key' key!
// LOG: Let's have a 'key' key!
// LOG: Let's have a 'key' key!
// LOG: Let's have a 'key' key!
// LOG: Let's have a 'key' key!


//Usage

//Use for ... in statement whenever you want to enumerate the properties of an object.
//for,,,in and order
//Becayse array are objects, for,,in will work with arrays, in fact,because for,,,of was added  tp JavaScript later than fo,,,in , you might see older code that uses for...in to iterate over arrays. However, as a general rule, don't use for,,in with arrays. When iterating over an array, an ordered collection, we would expect the elements in the array to be dealt with in order, However, because of  how collection,we would expect the elements in the array to be dealt with in order.
//However,, because of how for ,,,in works under the hood, ther's no gurantee of order, From the  MDN Documentation

//A for,,,,in loop iterates over the properties of an object  in arbitarry order one cannot depend on the seeming orderliness of iterationm at least in a cross-broweser setting.


//What this means is thatm with for ,,,in , different  browsers might iterate over the same object's properties in different orders, That's not cool! Cross-browser consistency is v ery important, A lot of progress has been mad e towards standardizing the behavior of for,,in across all major browsers, but there's still no reason to use for,,,in with arrays when we  have the wonderfully consistent for,,of tailor made for the job.

//MDN- for...of
//MDN- for...in





