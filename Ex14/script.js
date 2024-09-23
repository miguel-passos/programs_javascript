        var agora = new Date()
        var hora = agora.getHours()
        var msg = window.document.getElementById('msgola')
        var image = window.document.getElementById('img')
        msg.innerHTML = `Agora são ${hora} horas`
        var back = window.document.getElementById('fundo')
        if (hora < 11 && hora > 4) {
            back.style.backgroundColor = 'rgb(246, 237, 174)'
            image.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZV8B99vAH6tn6U44bzy-tJjHW2VYeLURnow&usqp=CAU" alt="">' 
        } else if (hora < 17 && hora > 11) {
            back.style.backgroundColor = 'rgb(252, 255, 154)'
            image.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkO1KU768pVEE42JlYN_NINy0yL0HnpWq3mA&usqp=CAU" alt="">'
        }else if (hora < 19 && hora > 17) {
            back.style.backgroundColor = 'rgb(197, 152, 46)'
            image.innerHTML = '<img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffotos-premium%2Fo-sol-estava-se-pondo-na-borda-da-cordilheira-da-montanha-por-do-sol_44074-5321.jpg&tbnid=fXOS3Ex5zatvfM&vet=12ahUKEwjq5-eAnfqFAxXTjZUCHe-9DBgQMygOegQIARBw..i&imgrefurl=https%3A%2F%2Fbr.freepik.com%2Ffotos-premium%2Fo-sol-estava-se-pondo-na-borda-da-cordilheira-da-montanha-por-do-sol_20862743.htm&docid=ZRF2k4cb8GZl_M&w=626&h=417&q=paisagem%20sol%20se%20pondo%20real&ved=2ahUKEwjq5-eAnfqFAxXTjZUCHe-9DBgQMygOegQIARBw" alt="">'
        }else if (hora < 24 && hora > 19) {
            back.style.backgroundColor = 'rgb(46, 45, 106)'
            image.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr99VfUaOwMlw6_ZOEaw_BrbS-09yoV2Nk-w&usqp=CAU" alt="">'
        }else if (hora >= 0 && hora < 4) {   
            back.style.backgroundColor = 'rgb(25, 9, 35)'
            image.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-RzdIvuUHN2oEM-GL5ULwkpKc7V4QWDABsgUo7L4kOSv08_snfBE41JDi1MTzSs1wck&usqp=CAU" alt="">'
        }