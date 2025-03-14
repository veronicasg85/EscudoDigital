document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("quizForm").addEventListener("submit", function (event) {
        event.preventDefault(); 

        let puntaje = 0;

        let respuestasCorrectas = {
            q1: "correcto",
            q2: "correcto",
            q3: "correcto"
        };

        Object.keys(respuestasCorrectas).forEach((pregunta) => {
            let respuestaSeleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
            if (respuestaSeleccionada && respuestaSeleccionada.value === respuestasCorrectas[pregunta]) {
                puntaje++;
            }
        });

        let resultadoTexto = `Puntaje obtenido: ${puntaje} de 3`;
        if (puntaje === 3) {
            resultadoTexto += " 🎉 ¡Excelente!";
        } else if (puntaje === 2) {
            resultadoTexto += " 😊 ¡Bien hecho!";
        } else {
            resultadoTexto += " 😕 ¡Sigue practicando!";
        }

        document.getElementById("resultado").innerText = resultadoTexto;
    });
});

document.querySelector("button").addEventListener("click", function() {
    this.classList.add("clicked");
    setTimeout(() => this.classList.remove("clicked"), 100);
});

