// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop(cats);
}

function destructivelyRemoveFirstCat(){
    cats.shift(cats);
}

function appendCat(cat){
    return [...cats, cat]
}

function prependCat(name){
    return [name, ...cats]
}

function removeLastCat(){
    const cat4 = cats.slice(0, 2)
    return cat4
}

function removeFirstCat(){
    const cat4 = cats.slice(1)
    return cat4
}