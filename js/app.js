$(document).ready(function(){

    // height
    var section = $('.section');
    var Height = window.innerHeight;
    section.css('height',Height);

    (function(){
        
        function getSize(){
            var vpHeight = window.innerHeight;
            section.css('height',vpHeight);
            
        }
        
        window.addEventListener('resize',getSize);
    }());
});

// hamburger-btn
$(".hamburger-btn").click(function() {
        $(".hamburger-icon").toggleClass("hamburger-icon-active");
        $(".movil-menu").toggleClass("movil-menu-active");
        $(".nav").toggleClass("nav-active");
    });

$(".movil-menu__link").click(function(){
    $(".hamburger-icon").removeClass("hamburger-icon-active");
    $(".movil-menu").removeClass("movil-menu-active");
    $(".nav").removeClass("nav-active");
});

// Mail
function sendMail(){

    $("#enviar").attr("disabled", true);

    var     filter=/^[A-Za-z][A-Za-z0-9_]*@[A-Za-z0-9_]+.[A-Za-z0-9_.]+[A-za-z]$/;
    var     name =      $('#name').val();
    var     movil =     $('#movil').val();
    var     email =     $('#email').val();
    var     message =   $('#message').val();

    if (filter.test(email)){
        sendMail = "true";
    }else{
        $('#email').after("");
        //Aplicar estilos de error de envio
        // $("#contact-form").css("background","#e74c3c");
        sendMail = "false";
    }

    if (name.length == 0) {
        $('#name').after("");
        var sendMail = "false";
    }

    if (message.length == 0) {
        $('#message').after("");
        var sendMail = "false";
    }

    if (sendMail == "true") {
        var datos = {

            "name" : $('#name').val(),
            "movil" : $('#movil').val(),
            "email" : $('#email').val(),
            "message" : $('#message').val()
        };
        // alert("mensaje enviado");
        $.ajax({
            data:   datos,
            url:    'php/send_mail.php',
            type:   'post',

            beforeSend: function(){
                // $("#contact-form").css("background","#000");
                $("#enviar").val("Enviando…");
            },

            success: function(response){
                $('form')[0].reset();
                $("#enviar").val("Enviar");
                $(".nota").fadeIn();
                $("#enviar").removeAttr("disabled");
            }
        });
    } else {
        $("#enviar").removeAttr("disabled");
    }
} 
    
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.main-menu__link, .movil-menu__link, .logo-movil').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//jQuery Easing //
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});



// Trivia //
/* pregunta 1 */

var array1  = ['1. La UG cuenta con una planificación hasta _____, dividida en un Plan Prospectivo y un Plan Estratégico', '1. ¿Cuál de los siguientes criterios es el que pesa más dentro de la calificación?'];
var rand1   = array1[Math.floor(Math.random() * array1.length)];
var ans1    = array1.indexOf(rand1);
var ansOpt1;

    if (ans1 == 0) {
        // alert("pregunta1");
        ansOpt1 = ["2020", "2032", "2030"];
    } else{
        // alert("pregunta2");
        ansOpt1 = ["Investigación", "Organización", "Académica"];
    };

var question1 = new question({
    charName: rand1,
    answerOptions: ansOpt1,
    answer: 2,
    pageNumber: "page-1"
});

/* pregunta 2 */
var array2 = ['2. Hace 3 años los profesores a tiempo completo con título Phd eran 2, pero ahora son _____.', '2. ¿Las investigaciones no han parado desde el 2013 y hasta la actualidad hemos publicado muchos artículos científicos. Conoces el número?'];
var rand2 = array2[Math.floor(Math.random() * array2.length)];
var ans2    = array2.indexOf(rand2);
var ansOpt2;

    if (ans2 == 0) {
        ansOpt2 = ["70", "30", "90"];
    } else{
        ansOpt2 = ["382", "520", "545"];
    };

var question2 = new question({
    charName: rand2,
    answerOptions: ansOpt2,
    answer: 2,
    pageNumber: "page-2"
});


/* pregunta 3 */
var array3 = ['3. ¿Conoces el porcentaje de profesores titulares que tenemos de titulares a tiempo completo?', '3. Desde el 2013 hasta hoy hemos aumentado notoriamente el porcentaje de profesores titulares, hoy tenemos _____.'];
var rand3 = array3[Math.floor(Math.random() * array3.length)];
var ans3    = array3.indexOf(rand3);
var ansOpt3;

    if (ans3 == 0) {
        ansOpt3 = ["27%", "60%", "70%"];
    } else{
        ansOpt3 = ["50,1%", "56,60%", "47,80%"];
    };
var question3 = new question({
    charName: rand3,
    answerOptions: ansOpt3,
    answer: 1,
    pageNumber: "page-3"
});


/* pregunta 4 */
var array4 = ['4. Dentro de la UG puedes aplicar a:', '4. Nuestro cambio le da un granito de arena a la sociedad, tenemos _____ Proyectos de gestión Social.'];
var rand4 = array4[Math.floor(Math.random() * array4.length)];
var ans4    = array4.indexOf(rand4);
var ansOpt4;

    if (ans4 == 0) {
        ansOpt4 = ["Becas", "Ayudas económicas", "Todas las mencionadas"];
    } else{
        ansOpt4 = ["35", "27", "50"];
    };
var question4 = new question({
    charName: rand4,
    answerOptions: ansOpt4,
    answer: 2,
    pageNumber: "page-4"
});


/* pregunta 5 */
var array5 = ['5. Estamos en busca de la excelencia, desde el 2013 al 2016 hemos aumentado el porcentaje de profesores con título de 4to. nivel. El aumento ha sido del_____', '¿Conoces el porcentaje de profesores titulares que tenemos a tiempo completo?'];
var rand5 = array5[Math.floor(Math.random() * array5.length)];
var ans5    = array5.indexOf(rand5);
var ansOpt5;

    if (ans5 == 0) {
        ansOpt5 = ["50% al 70%", "37% al 90%", "48% al 83%"];
    } else{
        ansOpt5 = ["27%", "60%", "70%"];
    };
var question5 = new question({
    charName: rand5,
    answerOptions: ansOpt5,
    answer: 1,
    pageNumber: "page-5"
});


//define un prototipo
function question(option){
    this.charName = option.charName;
    this.answerOptions = option.answerOptions;
    this.answer = option.answer;
    this.pageNumber = option.pageNumber;
}

//template de preguntas HTML
var genQuestion = function(x){
    var stage = $('#Questions');
    stage.append('<div id="' + x.pageNumber + '" class="page hide"></div>');

    var questionsPage = $('#' + x.pageNumber);
    questionsPage.append('<header class="header"><h2 class="charName header__title">' + x.charName + '</h2></header>');
    questionsPage.append('<form>');
    questionsPage.append('<div class="answer"><input type="radio" name="tv1" value="0" class="answer__link" checked><label>' + x.answerOptions[0] + '</label></div>');
    questionsPage.append('<div class="answer"><input type="radio" name="tv1" value="1" class="answer__link"><label>' + x.answerOptions[1] + '</label></div>');
    questionsPage.append('<div class="answer"><input type="radio" name="tv1" value="2" class="answer__link"><label>' + x.answerOptions[2] + '</label></div>');
    // questionsPage.append('<div class="answer"><input type="radio" name="tv1" value="3" class="answer__link"><label>' + x.answerOptions[3] + '</label></div>');
    questionsPage.append('</form>');
    /*questionsPage.append('<br /><button class="btn center">Siguiente</button>');*/
}

//variables
var count = 0;
var nextPage = 1;

// calcula score
function showScore(){
    $('.score').append(count + " respuestas correctas de 5");
}

//checking respuesta
function checkAnswer(x){
    var finalAnswer = $('input:checked').val();
    if(nextPage == 5 && finalAnswer == x.answer){
        count++;
        $('#Questions').hide();
        $('#Finish').fadeIn();
        showScore();
    } else if(nextPage == 5){
        $('#Questions').hide();
        $('#Finish').fadeIn();
        showScore();
    } else if(finalAnswer == x.answer){
        count++;
        nextPage++;
        $('.page').hide();
        $('#Finish').hide();
        $('#page-' + nextPage).fadeIn();
    } else {
        nextPage++;
        $('.page').hide();
        $('#Finish').hide();
        $('#page-' + nextPage).fadeIn();
    }
}

//crea un nuevo juego y preguntas
function newGame(){
    var create1 = new genQuestion(question1);
    var create2 = new genQuestion(question2);
    var create3 = new genQuestion(question3);
    var create4 = new genQuestion(question4);
    var create5 = new genQuestion(question5);
}

//restart game
function restart(){
    count = 0;
    nextPage = 1;
    $('#Start-page').fadeIn();
    $('#page-1').hide();
    $('#page-2').hide();
    $('#page-3').hide();
    $('#page-4').hide();
    $('#page-5').hide();
    $('#Finish').hide();
    $('#Questions').fadeIn();
    $('.score').empty();
    $('#Finish').hide();
}

$(document).ready(function(){
    // when the start button is clicked
    $('#Start-page .btn').click(function(){
        $('#Start-page').hide();
        $('#page-1').fadeIn();
        $('#page-2').hide();
        $('#page-3').hide();
        $('#page-4').hide();
        $('#page-5').hide();
        $('#Finish').hide();
    });

    //generating the questions
    newGame();

    //events when next button is clicked
    $('#page-1 input').click(function(){
        // alert(question1.answer);
        // if (question1.answer == 0) {
        //     alert("ok");
        // } else{
        //     alert("No");
        // };
        var valida = $('input:checked').val();
        if (question1.answer == valida) {
            swal("¡Buen trabajo!", "Tu respuesta es correcta", "success");
            checkAnswer(question1);
        } else{
            swal("Ups!", "Tu respuesta es incorrecta", "error");
        };
        
    });

    $('#page-2 input').click(function(){
        var valida = $('input:checked').val();
        if (question2.answer == valida) {
            swal("¡Muy Bien!", "Tu respuesta es correcta", "success");
            checkAnswer(question2);
        } else{
            swal("Ups!", "Tu respuesta es incorrecta", "error");
        };
    });

    $('#page-3 input').click(function(){
        var valida = $('input:checked').val();
        if (question3.answer == valida) {
            swal("¡Bien Hecho!", "Tu respuesta es correcta", "success");
            checkAnswer(question3);
        } else{
            swal("Ups!", "Tu respuesta es incorrecta", "error");
        };
    });

    $('#page-4 input').click(function(){
        var valida = $('input:checked').val();
        if (question4.answer == valida) {
            swal("¡Buena Elección!", "Tu respuesta es correcta", "success");
            checkAnswer(question4);
        } else{
            swal("Ups!", "Tu respuesta es incorrecta", "error");
        };
    });

    $('#page-5 input').click(function(){
        var valida = $('input:checked').val();
        if (question5.answer == valida) {
            swal("¡Excelente!", "Tu respuesta es correcta", "success");
            checkAnswer(question5);
        } else{
            swal("Ups!", "Tu respuesta es incorrecta", "error");
        };
    });

    // event when try again is clicked
    $('#Finish .btn').click(function(){
        // restart();
    });
});



/* Registro Formulario */

function limpiar(){
    document.getElementById("nombre").value = "";
}
function mostrar(){
    swal({   title: "Registrado",   text: "Ya estas participando en un sorteo.",   timer: 2000,   showConfirmButton: false });
    // swal("Felicidades, ya estás registrado.", "Estarás participando en un sorteo", "success");
}
function validar(){
    swal("Alto!", "Debes llenar todos los campos.", "error");
}
function registrar(){
  var nombre = document.getElementById("nombre").value;
  var mail = document.getElementById("mail").value;
  var facultad = document.getElementById("facultad").value;
  var cedula = document.getElementById("cedula").value;


      if(nombre == ""){
            validar();
            return;
            } else
      if(mail == ""){
            validar();
            return;
            } else
      if(facultad == ""){
            validar();
            return;
            } else
      if(cedula == ""){
            validar();
            return;
            } else
                {
                    mostrar();
                    var param={'nombre':nombre,'mail':mail,'facultad':facultad,'cedula':cedula};
                    $.ajax({
                    data: param,
                    type: "POST",
                    url:"../php/enviar.php",
                    async: true,
                    beforeSend: function () { 
                    },

                    success: function(response){
                        var dataJson= eval(response);

                        var resp= dataJson[0].respuesta;
                        if(resp== 'true'){ mostrar(); }   else  {  alert("error");}
                      },

                    error: function (obj, error, objError){
                        //alert("Se presento un error");
                    }

                    },"json");
                }
}


/* Sweet Alert */
!function(a,b,c){"use strict";!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(d,e,f){var g=function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(f,"__esModule",{value:!0});var r,s,t,u,h=d("./modules/handle-dom"),i=d("./modules/utils"),j=d("./modules/handle-swal-dom"),k=d("./modules/handle-click"),l=d("./modules/handle-key"),m=g(l),n=d("./modules/default-params"),o=g(n),p=d("./modules/set-params"),q=g(p);f.default=t=u=function(){function e(a){var b=d;return b[a]===c?o.default[a]:b[a]}var d=arguments[0];if(h.addClass(b.body,"stop-scrolling"),j.resetInput(),d===c)return i.logStr("SweetAlert expects at least 1 attribute!"),!1;var f=i.extend({},o.default);switch(typeof d){case"string":f.title=d,f.text=arguments[1]||"",f.type=arguments[2]||"";break;case"object":if(d.title===c)return i.logStr('Missing "title" argument!'),!1;f.title=d.title;for(var g in o.default)f[g]=e(g);f.confirmButtonText=f.showCancelButton?"Confirm":o.default.confirmButtonText,f.confirmButtonText=e("confirmButtonText"),f.doneFunction=arguments[1]||null;break;default:return i.logStr('Unexpected type of argument! Expected "string" or "object", got '+typeof d),!1}q.default(f),j.fixVerticalPosition(),j.openModal(arguments[1]);for(var l=j.getModal(),n=l.querySelectorAll("button"),p=["onclick","onmouseover","onmouseout","onmousedown","onmouseup","onfocus"],t=function(b){return k.handleButton(b,f,l)},v=0;v<n.length;v++)for(var w=0;w<p.length;w++){var x=p[w];n[v][x]=t}j.getOverlay().onclick=t,r=a.onkeydown;var y=function(b){return m.default(b,f,l)};a.onkeydown=y,a.onfocus=function(){setTimeout(function(){s!==c&&(s.focus(),s=c)},0)},u.enableButtons()},t.setDefaults=u.setDefaults=function(a){if(!a)throw new Error("userParams is required");if("object"!=typeof a)throw new Error("userParams has to be a object");i.extend(o.default,a)},t.close=u.close=function(){var d=j.getModal();h.fadeOut(j.getOverlay(),5),h.fadeOut(d,5),h.removeClass(d,"showSweetAlert"),h.addClass(d,"hideSweetAlert"),h.removeClass(d,"visible");var e=d.querySelector(".sa-icon.sa-success");h.removeClass(e,"animate"),h.removeClass(e.querySelector(".sa-tip"),"animateSuccessTip"),h.removeClass(e.querySelector(".sa-long"),"animateSuccessLong");var f=d.querySelector(".sa-icon.sa-error");h.removeClass(f,"animateErrorIcon"),h.removeClass(f.querySelector(".sa-x-mark"),"animateXMark");var g=d.querySelector(".sa-icon.sa-warning");return h.removeClass(g,"pulseWarning"),h.removeClass(g.querySelector(".sa-body"),"pulseWarningIns"),h.removeClass(g.querySelector(".sa-dot"),"pulseWarningIns"),setTimeout(function(){var a=d.getAttribute("data-custom-class");h.removeClass(d,a)},300),h.removeClass(b.body,"stop-scrolling"),a.onkeydown=r,a.previousActiveElement&&a.previousActiveElement.focus(),s=c,clearTimeout(d.timeout),!0},t.showInputError=u.showInputError=function(a){var b=j.getModal(),c=b.querySelector(".sa-input-error");h.addClass(c,"show");var d=b.querySelector(".sa-error-container");h.addClass(d,"show"),d.querySelector("p").innerHTML=a,setTimeout(function(){t.enableButtons()},1),b.querySelector("input").focus()},t.resetInputError=u.resetInputError=function(a){if(a&&13===a.keyCode)return!1;var b=j.getModal(),c=b.querySelector(".sa-input-error");h.removeClass(c,"show");var d=b.querySelector(".sa-error-container");h.removeClass(d,"show")},t.disableButtons=u.disableButtons=function(a){var b=j.getModal(),c=b.querySelector("button.confirm"),d=b.querySelector("button.cancel");c.disabled=!0,d.disabled=!0},t.enableButtons=u.enableButtons=function(a){var b=j.getModal(),c=b.querySelector("button.confirm"),d=b.querySelector("button.cancel");c.disabled=!1,d.disabled=!1},"undefined"!=typeof a?a.sweetAlert=a.swal=t:i.logStr("SweetAlert is a frontend module!"),e.exports=f.default},{"./modules/default-params":2,"./modules/handle-click":3,"./modules/handle-dom":4,"./modules/handle-key":5,"./modules/handle-swal-dom":6,"./modules/set-params":8,"./modules/utils":9}],2:[function(a,b,c){Object.defineProperty(c,"__esModule",{value:!0});var d={title:"",text:"",type:null,allowOutsideClick:!1,showConfirmButton:!0,showCancelButton:!1,closeOnConfirm:!0,closeOnCancel:!0,confirmButtonText:"OK",confirmButtonColor:"#8CD4F5",cancelButtonText:"Cancel",imageUrl:null,imageSize:null,timer:null,customClass:"",html:!1,animation:!0,allowEscapeKey:!0,inputType:"text",inputPlaceholder:"",inputValue:"",showLoaderOnConfirm:!1};c.default=d,b.exports=c.default},{}],3:[function(b,c,d){Object.defineProperty(d,"__esModule",{value:!0});var e=b("./utils"),g=(b("./handle-swal-dom"),b("./handle-dom")),h=function(c,d,f){function s(a){l&&d.confirmButtonColor&&(k.style.backgroundColor=a)}var p,q,r,h=c||a.event,k=h.target||h.srcElement,l=k.className.indexOf("confirm")!==-1,m=k.className.indexOf("sweet-overlay")!==-1,n=g.hasClass(f,"visible"),o=d.doneFunction&&"true"===f.getAttribute("data-has-done-function");switch(l&&d.confirmButtonColor&&(p=d.confirmButtonColor,q=e.colorLuminance(p,-.04),r=e.colorLuminance(p,-.14)),h.type){case"mouseover":s(q);break;case"mouseout":s(p);break;case"mousedown":s(r);break;case"mouseup":s(q);break;case"focus":var t=f.querySelector("button.confirm"),u=f.querySelector("button.cancel");l?u.style.boxShadow="none":t.style.boxShadow="none";break;case"click":var v=f===k,w=g.isDescendant(f,k);if(!v&&!w&&n&&!d.allowOutsideClick)break;l&&o&&n?i(f,d):o&&n||m?j(f,d):g.isDescendant(f,k)&&"BUTTON"===k.tagName&&sweetAlert.close()}},i=function(b,c){var d=!0;g.hasClass(b,"show-input")&&(d=b.querySelector("input").value,d||(d="")),c.doneFunction(d),c.closeOnConfirm&&sweetAlert.close(),c.showLoaderOnConfirm&&sweetAlert.disableButtons()},j=function(b,c){var d=String(c.doneFunction).replace(/\s/g,""),e="function("===d.substring(0,9)&&")"!==d.substring(9,10);e&&c.doneFunction(!1),c.closeOnCancel&&sweetAlert.close()};d.default={handleButton:h,handleConfirm:i,handleCancel:j},c.exports=d.default},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],4:[function(c,d,e){Object.defineProperty(e,"__esModule",{value:!0});var f=function(b,c){return new RegExp(" "+c+" ").test(" "+b.className+" ")},g=function(b,c){f(b,c)||(b.className+=" "+c)},h=function(b,c){var d=" "+b.className.replace(/[\t\r\n]/g," ")+" ";if(f(b,c)){for(;d.indexOf(" "+c+" ")>=0;)d=d.replace(" "+c+" "," ");b.className=d.replace(/^\s+|\s+$/g,"")}},i=function(c){var d=b.createElement("div");return d.appendChild(b.createTextNode(c)),d.innerHTML},j=function(b){b.style.opacity="",b.style.display="block"},k=function(b){if(b&&!b.length)return j(b);for(var c=0;c<b.length;++c)j(b[c])},l=function(b){b.style.opacity="",b.style.display="none"},m=function(b){if(b&&!b.length)return l(b);for(var c=0;c<b.length;++c)l(b[c])},n=function(b,c){for(var d=c.parentNode;null!==d;){if(d===b)return!0;d=d.parentNode}return!1},o=function(b){b.style.left="-9999px",b.style.display="block";var d,c=b.clientHeight;return d="undefined"!=typeof getComputedStyle?parseInt(getComputedStyle(b).getPropertyValue("padding-top"),10):parseInt(b.currentStyle.padding),b.style.left="",b.style.display="none","-"+parseInt((c+d)/2)+"px"},p=function(b,c){if(+b.style.opacity<1){c=c||16,b.style.opacity=0,b.style.display="block";var d=+new Date,e=function(a){function b(){return a.apply(this,arguments)}return b.toString=function(){return a.toString()},b}(function(){b.style.opacity=+b.style.opacity+(new Date-d)/100,d=+new Date,+b.style.opacity<1&&setTimeout(e,c)});e()}b.style.display="block"},q=function(b,c){c=c||16,b.style.opacity=1;var d=+new Date,e=function(a){function b(){return a.apply(this,arguments)}return b.toString=function(){return a.toString()},b}(function(){b.style.opacity=+b.style.opacity-(new Date-d)/100,d=+new Date,+b.style.opacity>0?setTimeout(e,c):b.style.display="none"});e()},r=function(d){if("function"==typeof MouseEvent){var e=new MouseEvent("click",{view:a,bubbles:!1,cancelable:!0});d.dispatchEvent(e)}else if(b.createEvent){var f=b.createEvent("MouseEvents");f.initEvent("click",!1,!1),d.dispatchEvent(f)}else b.createEventObject?d.fireEvent("onclick"):"function"==typeof d.onclick&&d.onclick()},s=function(c){"function"==typeof c.stopPropagation?(c.stopPropagation(),c.preventDefault()):a.event&&a.event.hasOwnProperty("cancelBubble")&&(a.event.cancelBubble=!0)};e.hasClass=f,e.addClass=g,e.removeClass=h,e.escapeHtml=i,e._show=j,e.show=k,e._hide=l,e.hide=m,e.isDescendant=n,e.getTopMargin=o,e.fadeIn=p,e.fadeOut=q,e.fireClick=r,e.stopEventPropagation=s},{}],5:[function(b,d,e){Object.defineProperty(e,"__esModule",{value:!0});var f=b("./handle-dom"),g=b("./handle-swal-dom"),h=function(d,e,h){var i=d||a.event,j=i.keyCode||i.which,k=h.querySelector("button.confirm"),l=h.querySelector("button.cancel"),m=h.querySelectorAll("button[tabindex]");if([9,13,32,27].indexOf(j)!==-1){for(var n=i.target||i.srcElement,o=-1,p=0;p<m.length;p++)if(n===m[p]){o=p;break}9===j?(n=o===-1?k:o===m.length-1?m[0]:m[o+1],f.stopEventPropagation(i),n.focus(),e.confirmButtonColor&&g.setFocusStyle(n,e.confirmButtonColor)):13===j?("INPUT"===n.tagName&&(n=k,k.focus()),n=o===-1?k:c):27===j&&e.allowEscapeKey===!0?(n=l,f.fireClick(n,i)):n=c}};e.default=h,d.exports=e.default},{"./handle-dom":4,"./handle-swal-dom":6}],6:[function(c,d,e){var f=function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(e,"__esModule",{value:!0});var g=c("./utils"),h=c("./handle-dom"),i=c("./default-params"),j=f(i),k=c("./injected-html"),l=f(k),m=".sweet-alert",n=".sweet-overlay",o=function(){var c=b.createElement("div");for(c.innerHTML=l.default;c.firstChild;)b.body.appendChild(c.firstChild)},p=function(a){function b(){return a.apply(this,arguments)}return b.toString=function(){return a.toString()},b}(function(){var a=b.querySelector(m);return a||(o(),a=p()),a}),q=function(){var b=p();if(b)return b.querySelector("input")},r=function(){return b.querySelector(n)},s=function(b,c){var d=g.hexToRgb(c);b.style.boxShadow="0 0 2px rgba("+d+", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"},t=function(d){var e=p();h.fadeIn(r(),10),h.show(e),h.addClass(e,"showSweetAlert"),h.removeClass(e,"hideSweetAlert"),a.previousActiveElement=b.activeElement;var f=e.querySelector("button.confirm");f.focus(),setTimeout(function(){h.addClass(e,"visible")},500);var g=e.getAttribute("data-timer");if("null"!==g&&""!==g){var i=d;e.timeout=setTimeout(function(){var a=(i||null)&&"true"===e.getAttribute("data-has-done-function");a?i(null):sweetAlert.close()},g)}},u=function(){var b=p(),c=q();h.removeClass(b,"show-input"),c.value=j.default.inputValue,c.setAttribute("type",j.default.inputType),c.setAttribute("placeholder",j.default.inputPlaceholder),v()},v=function(b){if(b&&13===b.keyCode)return!1;var c=p(),d=c.querySelector(".sa-input-error");h.removeClass(d,"show");var e=c.querySelector(".sa-error-container");h.removeClass(e,"show")},w=function(){var b=p();b.style.marginTop=h.getTopMargin(p())};e.sweetAlertInitialize=o,e.getModal=p,e.getOverlay=r,e.getInput=q,e.setFocusStyle=s,e.openModal=t,e.resetInput=u,e.resetInputError=v,e.fixVerticalPosition=w},{"./default-params":2,"./handle-dom":4,"./injected-html":7,"./utils":9}],7:[function(a,b,c){Object.defineProperty(c,"__esModule",{value:!0});var d='<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';c.default=d,b.exports=c.default},{}],8:[function(a,b,d){Object.defineProperty(d,"__esModule",{value:!0});var e=a("./utils"),f=a("./handle-swal-dom"),g=a("./handle-dom"),h=["error","warning","info","success","input","prompt"],i=function(b){var d=f.getModal(),i=d.querySelector("h2"),j=d.querySelector("p"),k=d.querySelector("button.cancel"),l=d.querySelector("button.confirm");if(i.innerHTML=b.html?b.title:g.escapeHtml(b.title).split("\n").join("<br>"),j.innerHTML=b.html?b.text:g.escapeHtml(b.text||"").split("\n").join("<br>"),b.text&&g.show(j),b.customClass)g.addClass(d,b.customClass),d.setAttribute("data-custom-class",b.customClass);else{var m=d.getAttribute("data-custom-class");g.removeClass(d,m),d.setAttribute("data-custom-class","")}if(g.hide(d.querySelectorAll(".sa-icon")),b.type&&!e.isIE8()){var n=function(){for(var a=!1,e=0;e<h.length;e++)if(b.type===h[e]){a=!0;break}if(!a)return logStr("Unknown alert type: "+b.type),{v:!1};var i=["success","error","warning","info"],j=c;i.indexOf(b.type)!==-1&&(j=d.querySelector(".sa-icon.sa-"+b.type),g.show(j));var k=f.getInput();switch(b.type){case"success":g.addClass(j,"animate"),g.addClass(j.querySelector(".sa-tip"),"animateSuccessTip"),g.addClass(j.querySelector(".sa-long"),"animateSuccessLong");break;case"error":g.addClass(j,"animateErrorIcon"),g.addClass(j.querySelector(".sa-x-mark"),"animateXMark");break;case"warning":g.addClass(j,"pulseWarning"),g.addClass(j.querySelector(".sa-body"),"pulseWarningIns"),g.addClass(j.querySelector(".sa-dot"),"pulseWarningIns");break;case"input":case"prompt":k.setAttribute("type",b.inputType),k.value=b.inputValue,k.setAttribute("placeholder",b.inputPlaceholder),g.addClass(d,"show-input"),setTimeout(function(){k.focus(),k.addEventListener("keyup",swal.resetInputError)},400)}}();if("object"==typeof n)return n.v}if(b.imageUrl){var o=d.querySelector(".sa-icon.sa-custom");o.style.backgroundImage="url("+b.imageUrl+")",g.show(o);var p=80,q=80;if(b.imageSize){var r=b.imageSize.toString().split("x"),s=r[0],t=r[1];s&&t?(p=s,q=t):logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got "+b.imageSize)}o.setAttribute("style",o.getAttribute("style")+"width:"+p+"px; height:"+q+"px")}d.setAttribute("data-has-cancel-button",b.showCancelButton),b.showCancelButton?k.style.display="inline-block":g.hide(k),d.setAttribute("data-has-confirm-button",b.showConfirmButton),b.showConfirmButton?l.style.display="inline-block":g.hide(l),b.cancelButtonText&&(k.innerHTML=g.escapeHtml(b.cancelButtonText)),b.confirmButtonText&&(l.innerHTML=g.escapeHtml(b.confirmButtonText)),b.confirmButtonColor&&(l.style.backgroundColor=b.confirmButtonColor,l.style.borderLeftColor=b.confirmLoadingButtonColor,l.style.borderRightColor=b.confirmLoadingButtonColor,f.setFocusStyle(l,b.confirmButtonColor)),d.setAttribute("data-allow-outside-click",b.allowOutsideClick);var u=!!b.doneFunction;d.setAttribute("data-has-done-function",u),b.animation?"string"==typeof b.animation?d.setAttribute("data-animation",b.animation):d.setAttribute("data-animation","pop"):d.setAttribute("data-animation","none"),d.setAttribute("data-timer",b.timer)};d.default=i,b.exports=d.default},{"./handle-dom":4,"./handle-swal-dom":6,"./utils":9}],9:[function(b,c,d){Object.defineProperty(d,"__esModule",{value:!0});var e=function(b,c){for(var d in c)c.hasOwnProperty(d)&&(b[d]=c[d]);return b},f=function(b){var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(b);return c?parseInt(c[1],16)+", "+parseInt(c[2],16)+", "+parseInt(c[3],16):null},g=function(){return a.attachEvent&&!a.addEventListener},h=function(c){a.console&&a.console.log("SweetAlert: "+c)},i=function(b,c){b=String(b).replace(/[^0-9a-f]/gi,""),b.length<6&&(b=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]),c=c||0;var e,f,d="#";for(f=0;f<3;f++)e=parseInt(b.substr(2*f,2),16),e=Math.round(Math.min(Math.max(0,e+e*c),255)).toString(16),d+=("00"+e).substr(e.length);return d};d.extend=e,d.hexToRgb=f,d.isIE8=g,d.logStr=h,d.colorLuminance=i},{}]},{},[1]),"function"==typeof define&&define.amd?define(function(){return sweetAlert}):"undefined"!=typeof module&&module.exports&&(module.exports=sweetAlert)}(window,document);