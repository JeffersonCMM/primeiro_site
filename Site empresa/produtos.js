const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
    btn.addEventListener('click', function(){
        alert("Compra Realizada Com Sucesso!");
    });
});