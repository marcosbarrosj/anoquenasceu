

function clicou(){
    let agora = new Date
    let ano = agora.getFullYear()

     let nasc = Number(window.prompt('Em que ano voçe nasceu?'))
     let idade = ano - nasc

     //dom]
     let saida = document.getElementById('saida')
    saida.innerHTML = ` <p> Quem nasceu em ${nasc} vai completar <mark><strong>${idade}</strong> </mark>  </p>`

   




   
}