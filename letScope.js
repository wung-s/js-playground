var funcs = [];
let i = 200;
for (let i = 0; i < 5; i++) {
    funcs.push( function(){
        console.log('i has: ', i );
    } );
}
console.log('outer:', i);
funcs[3]();