
var interval1; var interval2; var interval3; var a; var b; var c;
a = false; b = false; c = false; var num = 0; var nombre = "";
var x = ""; var y = ""; var datos = 0;
//var desplazamiento = ale
function countdown(element, minutes, seconds) {
    datos = Aleatorios(50);//2
    x = PosicionAleatoriaX(50, 750);
    y = PosicionAleatoriaY(150, 420);

   
    nombre = NombresDrop();
    var drop = "<img src='/Imagenes/Enfermo4.png' id=" + nombre + "' class='ui-widget-header' style='position:fixed;top:" + y + "px;left:" + x + "px'/>";
    
    // Fetch the display element
    var el = document.getElementById(element);
    // Set the timer
    if (element == 'countdown1') {

        interval1 = setInterval(function () {
            if (seconds == 0) {
                if (minutes == 0) {
                    $("img[id^='droppable']").remove();
                    clearInterval(interval1);
                    clearInterval(interval2);//1
                    
                    (el.innerHTML = "STOP!");//AQUI SE EJECUTA CÓDIGO CUANDO FINALIZA LA CUENTA ATRAS 
                    //$("#dinamico").append(drop);
                    arrastrar();
                    // $("#IDPaciente").val(datos);
                    //$("#Nombre").val(datos);
                    //$("#Apellido").val(datos);
                    //$("#Edad").val(datos);
                    //$("#Reloj").val(datos);
                    //$("#IDEnfermedad").val(datos);
                    //$("#Baja").val(datos);
                    //$("#Eliminado").val(datos);  
                    //$("#btnmostrar").click();//3 
                    //$("#boton").click();//4     
                    //$("#timer1").click();//5                   
                    return;
                } else {
                    minutes--;
                    seconds = 60;
                }
            }

            if (minutes > 0) {
                var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
            } else {
                var minute_text = '';
            }

            var second_text = seconds > 1 ? '' : '';
            
           
            
            el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + '';
            seconds--;
        }, 500);
    }

    if (element == 'countdown2') {

        interval2 = setInterval(function () {
            if (seconds == 0) {
                if (minutes == 0) {
                    clearInterval(interval2);
                    //(el.innerHTML = "STOP!");
                    datos = Aleatorios(50);                    
                    $("#IdUsuario").val(datos);
                    $("#Nombre").val(datos);
                    $("#Apellidos").val(datos);
                    $("#Usuario").val(datos);
                    $("#Pass").val(datos);
                    //$("#btnmostrar").click();//3   
                    $("#dinamico").append(drop);
                    $("#boton").click(); //enviar asincrono
                    $("img[id^='droppable']").fadeOut(EnfermoAleatorio(4000, 6000), function () {
                        this.remove();
                    });
                    arrastrar();  
                    $("#med1").html(medic1);
                    $("#med2").html(medic2);
                    $("#med3").html(medic3);
                    $("#med4").html(medic4);
                    $("#timer2").click();
                    return;
                } else {
                    minutes--;
                    seconds = 60;
                }
            }

            if (minutes > 0) {
                var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
            } else {
                var minute_text = '';
            }

            var second_text = seconds > 1 ? '' : '';

            el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + '';
            seconds--;
        }, 400);
    }
    if (element == 'countdown3') {

        interval3 = setInterval(function () {
            if (seconds == 0) {
                if (minutes == 0) {
                    (el.innerHTML = "STOP!");//AQUI SE EJECUTA ALGO CUANDO FINALIZA LA CUENTA ATRAS                
                    clearInterval(interval3); //22:00 Jesús hay que hacer una variable interval por cada reloj captura con un if quien llego
                    // a cero y que llame a countdown
                    //alert("dentro");  
                    //c = true;
                    //clickbutton(a, b, c)
                    $("#timer3").click();
                    return;
                } else {
                    minutes--;
                    seconds = 60;
                }
            }

            if (minutes > 0) {
                var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
            } else {
                var minute_text = '';
            }

            var second_text = seconds > 1 ? '' : '';

            el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + '';
            seconds--;
        }, 1000);
    }

}