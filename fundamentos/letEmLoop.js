var funcs = [];

for (let i = 0; i < 10; i++){
    funcs.push(function () {
        console.log(i);
    });
};
//diferente do var, com o let é respeita o valor de i a cada iteração, pois possui o conceito de escopo
funcs [2] ();
funcs [8] ();