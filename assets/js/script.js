
const botao = document.getElementById('calcular');



function will() {

    const ingressoind = document.getElementById('ingresso1').value;
    const preco1 = document.getElementById('preco1').value;
    const ingressopro = document.getElementById('ingresso2').value;
    const preco2 = document.getElementById('preco2').value;
    const comi = document.getElementById('comi').value
    const despesa = document.getElementById('desp').value

    const resultado = document.getElementById('resultado');





    if (ingressoind !== '' && preco1 !== '' && ingressopro !== '' && preco2 !== '') {

        const valorWILL = ((ingressoind * preco1) + (ingressopro * preco2)  );

        const totalWILL = valorWILL - (valorWILL * (comi / 100) ) - despesa
        
       
        console.log = valorWILL

       
        

          



        

        resultado.textContent = totalWILL ;


    } else {
        resultado.textContent = 'Preencha todos os campos !!!!'
    }


}

botao.addEventListener('click', will);