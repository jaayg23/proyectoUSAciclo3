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
            miTabla += '<td><button onclick="editarRegistroClientes('+respuesta.items[i].id+' )">Editar</button>';				
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
        	traerInformacionClientes();	
			}
		}
	});
}

function editarRegistroClientes (id){
	$.ajax({    
	url : 'https://g73664e6c770cfe-partyroom.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client/'+id,
	data: "{}",
	type : 'GET',
	dataType : 'json',
	contentType: "application/json; charset=utf-8",

	success : function(respuesta) {
		console.log(respuesta);
		let miTabla = '<table>';
		for (i=0; i<respuesta.items.length; i++){
			$("#idClientes").val(respuesta.items[i].id);
			$("#nameClientes").val(respuesta.items[i].name);
			$("#email").val(respuesta.items[i].email);
			$("#age").val(respuesta.items[i].age);
		}
	},
	error : function(xhr, status) {
		alert('ha sucedido un problema:' +status + json);
	}
});
}

function actualizarInformacionClientes(){
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
	type : 'PUT',
	dataType : 'json',
	contentType: "application/json; charset=utf-8",

	statusCode : {
		201 : function() {
			alert("guardado!");
			$("#idClientes").val("")
			$("#nameClientes").val("");
			$("#email").val("");
			$("#age").val("");
			traerInformacionClientes();
		}
	}
});
}

function borrarInformacionClientes(){
	let misDatos ={
		id: $("#idClientes").val()
	};
	let datosJson = JSON.stringify(misDatos)
	$.ajax({    
		url : 'https://g73664e6c770cfe-partyroom.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/client/client',
		data: datosJson,
		type : 'DELETE',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
		statusCode : {
			204 : function() {
				alert("borrado!");
				$("#idClientes").val("")
				$("#nameClientes").val("");
				$("#email").val("");
				$("#age").val("");
				traerInformacionClientes();
			}
		}
	});
}