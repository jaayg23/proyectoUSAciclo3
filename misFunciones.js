function traerInformacion(){
	$.ajax({    
    url : 'https://g73664e6c770cfe-partyroom.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/partyroom/partyroom',
	data: "{}",
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
		$("#resultado").empty();
        let miTabla = '<table>';
		for (i=0; i<respuesta.items.length; i++){
			miTabla += '<tr>';
	        miTabla += '<td>'+ respuesta.items[i].id+ '</td>'; 		
	        miTabla += '<td>'+ respuesta.items[i].brand+ '</td>'; 		
	        miTabla += '<td>'+ respuesta.items[i].name+ '</td>'; 		
	        miTabla += '<td>'+ respuesta.items[i].model+ '</td>'; 		
	        miTabla += '<td>'+ respuesta.items[i].category_id+ '</td>'; 		
			miTabla += '</tr>';
	
		}
        miTabla += '</table>';
	    $("#resultado").append(miTabla);    

	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status);
    }
});
}

function guardarInformacion(){
	let misDatos = {
		id: $("#id").val(),
        category_id: $("#category_id").val(),
        owner: $("#owner").val(),
        capacity: $("#capacity").val(),
        name: $("#name").val()
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
			$("#id").val("");
			$("#category_id").val("");
			$("#owner").val("");
			$("#capacity").val("");
			$("#name").val("");
        	traerInformacion();	
			}
		}
	});
}