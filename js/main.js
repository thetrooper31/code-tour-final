(function () {
    "use strict";

  
    
      var regalo = document.getElementById('regalo');
      var regalo = document.getElementById('regalo');
      
      document.addEventListener('DOMContentLoaded', function () {

      


      
    
      //Seleccionamos elemento por id       Campos Datos Usuario
      var nombre = document.getElementById('nombre');
      var apellido = document.getElementById('apellido');
      var email = document.getElementById('email');
      //Campos PAses
      var pase_dia = document.getElementById('pase_dia');
      var pase_dosdias = document.getElementById('pase_dosdias');
      var pase_completo = document.getElementById('pase_completo');
      //botones y div
      var calcular = document.getElementById('calcular');
      var errordiv = document.getElementById('error');
      var botonRegistro = document.getElementById('btnRegistro');
      var lista_productos = document.getElementById('lista-productos')
      var suma = document.getElementById('suma-total');
      
      // botonRegistro.disabled = true;  

      //regalos
      // var camisas = document.getElementById('camisa-evento');
      var etiquetas = document.getElementById('etiquetas');

      
      calcular.addEventListener('click', calcularMontos); //capturo el evento click
      pase_dia.addEventListener('blur', mostrarDias);// evento que guarda el valor introducido en el input
      pase_dosdias.addEventListener('blur', mostrarDias);
      pase_completo.addEventListener('blur', mostrarDias);




      //validacion formulario
      nombre.addEventListener('blur', validarCampos);
      apellido.addEventListener('blur', validarCampos);
      email.addEventListener('blur', validarCampos);
      email.addEventListener('blur', validarMail);

       function validarCampos(){  // función anónima para validar formulario 
        if(this.value == '') {
          errorDiv.style.display= 'block';
          errorDiv.innerHTML ="este campo es obligatorio";
          this.style.border = '1px solid red';
          errorDiv.style.border = '1px solid red';
        } else{
          errorDiv.style.display = 'none';
          this.style.border = '1px solid #cccccc';
        }
      }
      function validarMail(){
        if(this.value.indexOf("@") > -1){
          errorDiv.style.display = 'none';
          this.style.border = '1px solid #cccccc'; 
        } else {
          errorDiv.style.display= 'block';
          errorDiv.innerHTML ="correo no válido";
          this.style.border = '1px solid red';
          errorDiv.style.border = '1px solid red';
        }
      }

    


      function calcularMontos(event){
        event.preventDefault();
        if(regalo.value == '') {  // funcion que confirma seleccion del regalo (value igual a nada = alert!)
          alert("Debes elegir un regalo");
          regalo.focus();
        } else {
          var boletosDia = pase_dia.value, // var que calcula la cantidad de tickets
              boletos2Dias = pase_dosdias.value,
              boletoCompleto = pase_completo.value,
              cantEtiquetas = etiquetas.value;
          
          var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletoCompleto * 50) + (cantEtiquetas * 2);
          
          
          var listadoProductos = new Array();
          var esp = "";
          if(boletosDia >=1){ // valido form para que no entren valores igual a cero
            listadoProductos.push(boletosDia + 'Ticket por un día');
          }
          if(boletos2Dias >=1){
            listadoProductos.push(boletos2Dias + 'Ticket por dos días');
          }
          if(boletoCompleto >=1){
            listadoProductos.push(boletoCompleto + 'Ticket completo');
          }
          if(cantEtiquetas >=1){
            listadoProductos.push(cantEtiquetas + 'Etiquetas');
          }
          lista_productos.innerHTML = ''; // pinto en pantalla lista productos
          for(var i = 0; i< listadoProductos.length; i++) {
            lista_productos.innerHTML += listadoProductos[i] +'<br/>';
          }
         suma.innerHTML = totalPagar.toFixed(2) + ' ' + "€"; // pinto el total, uso toFixed 2 para un máximo de dos decimales (evita problemas al realizar cobros por tarjetas)

         botonRegistro.disabled = false;  
         document.getElementById('total_pedido').value = totalPagar;                                                   

        }
      }
      function mostrarDias() {
        var boletosDia = parseInt(pase_dia.value, 10) || 0,
            boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
            boletoCompleto = parseInt(pase_completo.value, 10) || 0;
     
         var diasElegidos = [];
     
         if(boletosDia > 0) {
           diasElegidos.push('viernes');
         }
         if(boletos2Dias > 0) {
           diasElegidos.push('viernes', 'sabado');
         }
         if(boletoCompleto > 0) {
           diasElegidos.push('viernes', 'sabado', 'domingo');
         }
         for (var i = 0; i < diasElegidos.length; i++) {
           document.getElementById(diasElegidos[i]).style.display = 'block';
     }
              
       }

   }
            
      
      );
                 
    })(); 

    $(function() {
      $('.programa-evento .info-curso:first').show();
      $('.menu-programa a:first').addClass('activo');
      $('.menu-programa a').on('click', function(){
          $('.menu-programa a').removeClass('activo');
          $(this).addClass('activo');
          $('.ocultar').hide();
          var enlace = $(this).attr('href');
          $(enlace).fadeIn(1000);
          return false;
      });

      $('.invitado-info').colorbox({inline:true, width:"50%"});
      $('.boton_newsletter').colorbox({inline:true, width:"50%"});
      var map = L.map('map').setView([36.717825, -4.433418], 17);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      L.marker([36.717825, -4.433418]).addTo(map)
          .bindPopup('CodeSpace Academy<br> Calle Compositor Lehmberg Ruiz, 13')
          .openPopup();
          
    });

    
