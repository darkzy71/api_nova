  let ata1 = document.querySelector('div#horario')
  let ata2 = document.querySelector('div#educado')
  setInterval(() => {
    var d = new Date();
    const hora = d.getHours().toString().padStart(2, 0)
    const minuto = d.getMinutes().toString().padStart(2, 0)
    const segundo = d.getSeconds().toString().padStart(2, 0)
    if (ata2 < 4) {
        ata2.innerHTML = "Boa Tarde!"
    } else if (ata2 < 11) {
        ata2.innerHTML = "Boa Noite!"
    } else if (ata2 < 16) {
        ata2.innerHTML = "Boa Noite!"
    } else if (ata2 < 20) {
        ata2.innerHTML = "Boa Tarde!"
    }
    else {
        ata2.innerHTML = "tenha um bom dia!";
    }
    ata1.innerHTML = hora + ":" + minuto + ":" + segundo
  }, 250)