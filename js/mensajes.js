function traerInformacionMensajes(){
	$.ajax({    
    url : 'https://g73664e6c770cfe-partyroom.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
	data: "{}",
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
		$("#resultadoMensajes").empty();
        let miTabla = '<table>';
		for (i=0; i<respuesta.items.length; i++){
			miTabla += '<tr>';
	        miTabla += '<td>'+ respuesta.items[i].id+ '</td>'; 		
	        miTabla += '<td>'+ respuesta.items[i].messagetext+ '</td>'; 
            miTabla += '<td><button onclick="editarRegistroMensajes('+respuesta.items[i].id+' )">Editar</button>' 						
			miTabla += '</tr>';
	
		}
        miTabla += '</table>';
	    $("#resultadoMensajes").append(miTabla);    

	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status);
    }
});
}

function guardarInformacionMensajes(){
	let misDatos = {
		id: $("#idMensajes").val(),
        messagetext: $("#messagetext").val(),
	};
	let datosJson = JSON.stringify(misDatos); 
	$.ajax(    
    'https://g73664e6c770cfe-partyroom.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
	{data: datosJson,
    type : 'POST',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    statusCode : {
		201 :  function() {
			alert("guardado!");
			$("#idMensajes").val("");
			$("#messagetext").val("");
        	traerInformacionMensajes();	
			}
		}
	});
}

function editarRegistroMensajes (id){
	$.ajax({    
	url : 'https://g73664e6c770cfe-partyroom.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message/'+id,
	data: "{}",
	type : 'GET',
	dataType : 'json',
	contentType: "application/json; charset=utf-8",

	success : function(respuesta) {
		console.log(respuesta);
		let miTabla = '<table>';
		for (i=0; i<respuesta.items.length; i++){
			$("#idMensajes").val(respuesta.items[i].id);
			$("#messagetext").val(respuesta.items[i].messagetext);
		}
	},
	error : function(xhr, status) {
		alert('ha sucedido un problema:' +status + json);
	}
});
}

function actualizarInformacionMensajes(){
	let misDatos = {
		id: $("#idMensajes").val(),
        messagetext: $("#messagetext").val(),
	};
	let datosJson = JSON.stringify(misDatos);
	$.ajax(    
	'https://g73664e6c770cfe-partyroom.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
	{data: datosJson,
	type : 'PUT',
	dataType : 'json',
	contentType: "application/json; charset=utf-8",

	statusCode : {
		201 : function() {
			alert("guardado!");
			$("#idMensajes").val("")
			$("#messagetext").val("");
			traerInformacionMensajes();
		}
	}
});
}

function borrarInformacionMensajes(){
	let misDatos ={
		id: $("#idMensajes").val()
	};
	let datosJson = JSON.stringify(misDatos)
	$.ajax({    
		url : 'https://g73664e6c770cfe-partyroom.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/message/message',
		data: datosJson,
		type : 'DELETE',
		dataType : 'json',
		contentType: "application/json; charset=utf-8",
		statusCode : {
			204 : function() {
				alert("borrado!");
				$("#idMensajes").val("")
				$("#messagetext").val("");
				traerInformacionMensajes();
			}
		}
	});
}

