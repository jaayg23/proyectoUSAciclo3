function traerInformacionSalones(){
	$.ajax({    
    url : 'https://g73664e6c770cfe-partyroom.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/partyroom/partyroom',
	data: "{}",
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
		$("#resultadoSalones").empty();
        let miTabla = '<table>';
		for (i=0; i<respuesta.items.length; i++){
			miTabla += '<tr>';
	        miTabla += '<td>'+ respuesta.items[i].id+ '</td>'; 		
	        miTabla += '<td>'+ respuesta.items[i].owner+ '</td>'; 		
	        miTabla += '<td>'+ respuesta.items[i].capacity+ '</td>'; 		
	        miTabla += '<td>'+ respuesta.items[i].category_id+ '</td>'; 		
	        miTabla += '<td>'+ respuesta.items[i].name+ '</td>'; 		
			miTabla += '</tr>';
	
		}
        miTabla += '</table>';
	    $("#resultadoSalones").append(miTabla);    

	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status);
    }
});
}

function guardarInformacionSalones(){
	let misDatos = {
		id: $("#idSalones").val(),
        category_id: $("#category_id").val(),
        owner: $("#owner").val(),
        capacity: $("#capacity").val(),
        name: $("#nameSalones").val()
	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
    'https://g73664e6c770cfe-partyroom.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/partyroom/partyroom',
	{data: datosJson,
    type : 'POST',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    statusCode : {
		201 :  function() {
			alert("guardado!");
			$("#idSalones").val("");
			$("#category_id").val("");
			$("#owner").val("");
			$("#capacity").val("");
			$("#nameSalones").val("");
        	traerInformacionSalones();	
			}
		}
	});
}

function traerInformacionClientes(){
	$.ajax({    
    url : 'https://g73664e6c770cfe-partyroom.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
	data: "{}",
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
		$("#resultadoClientes").empty();
        let miTabla = '<table>';
		for (i=0; i<respuesta.items.length; i++){
			miTabla += '<tr>';
	        miTabla += '<td>'+ respuesta.items[i].id+ '</td>'; 		
	        miTabla += '<td>'+ respuesta.items[i].name+ '</td>'; 		
	        miTabla += '<td>'+ respuesta.items[i].email+ '</td>'; 		
	        miTabla += '<td>'+ respuesta.items[i].age+ '</td>'; 				
			miTabla += '</tr>';
	
		}
        miTabla += '</table>';
	    $("#resultadoClientes").append(miTabla);    

	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status);
    }
});
}

function guardarInformacionClientes(){
	let misDatos = {
		id: $("#idClientes").val(),
        name: $("#nameClientes").val(),
        email: $("#email").val(),
        age: $("#age").val(),
	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
    'https://g73664e6c770cfe-partyroom.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
	{data: datosJson,
    type : 'POST',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    statusCode : {
		201 :  function() {
			alert("guardado!");
			$("#idClientes").val("");
			$("#nameClientes").val("");
			$("#email").val("");
			$("#age").val("");
        	traerInformacionSalones();	
			}
		}
	});
}