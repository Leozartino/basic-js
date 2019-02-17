var funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function () {
        console.log(i);
    });
};
// para qualquer chamada da função, será impresso o valor 10.
funcs [2] ();
funcs [8] ();