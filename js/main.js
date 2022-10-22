var title = document.querySelector('.title')
var inp1 = document.querySelector('.inpf')

var btn1 = document.querySelector('.btn1')


var frm = document.querySelector('.frm')


frm.addEventListener('submit', (e)=>{
    var radio = document.querySelectorAll('.inp1')
    var title = document.querySelector('.title')
    var inp1 = document.querySelector('.inpf')

    // var soat = inp1.value / 4
    // var minut = soat * 60
    // console.log(minut);

    e.preventDefault()

    for(var i = 0; i < radio.length; i++){
        if(radio[0].checked){
            let soat = inp1.value / 4
            let minut = soat * 60

            title.textContent = radio[0].value + ' '
            title.textContent += Math.floor(inp1.value / 4) + ' soat '
            title.textContent += Math.floor(minut % 60) + ' minut'
        }
        if(radio[1].checked){
            let soat1 = inp1.value / 20
            let minut1 = soat1 * 60

            title.textContent = radio[1].value + ' '
            title.textContent += Math.floor(inp1.value / 20) + ' soat '
            title.textContent += Math.floor(minut1 % 60) + ' minut'
        }
        if(radio[2].checked){
            let soat2 = inp1.value / 70
            let minut2 = soat2 * 60

            title.textContent = radio[2].value + ' '
            title.textContent += Math.floor(inp1.value / 70) + ' soat '
            title.textContent += Math.floor(minut2 % 60) + ' minut'
        }
        if(radio[3].checked){
            let soat3 = inp1.value / 400
            let minut3 = soat3 * 60

            title.textContent = radio[3].value + ' '
            title.textContent += Math.floor(inp1.value / 400) + ' soat '
            title.textContent += Math.floor(minut3 % 60) + ' minut'
        }
    }
})