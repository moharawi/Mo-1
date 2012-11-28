var scale = 1;
var capacity = 1;

function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox')
         .removeAttr('checked').removeAttr('selected');
}

$(document).ready(function(){
	
	
		$('.error').hide();
		$('#add_btn').button();
		
		// try to get the id of the frame and compare it witht he button substring id to make sure the form submit something
		/*var selectedsettings = "";
		var framesettingsid = $(this).attr('id') != frameid1.substring(1, frameid1.length);
		$(".dv_settings_frame").each( function(){
			if($(this).css("display") != "none"){
				selectedsettings = "1";
				
			}
		});*/
					
					
		//var myframeid.substring(1, frameid1.length)
		
		$("body").on("click", "div#add_btn", function () {  
			
			//var thisframeid = $(this).parent().parent().parent().attr('id');
			
			// validate and process form here  
			
			$('.error').hide();
			 scale = $("input#scale_1").val();  
			if (scale == "") {  
				$("label#scale_error").show();  
				$("input#scale_1").focus();  
				return false;  
			}  
        
			 capacity = $("input#w3_capacity_1").val();  
			if (capacity == "") {  
				$("label#w3_capacity_error").show();  
				$("input#w3_capacity_1").focus();  
				return false;  
			}
			  
			//var psize = $("input#w3_psize_1:checked").val();  
			var psize = $("input[name='w3_psize_1']:checked").val();
			if ($("input[name='w3_psize_1']:checked").length <= 0) {  
				$("label#w3_psize_error").show();  
				$("input#w3_psize_1").focus();  
				return false;  
			}
			
			//$(".dv_settings_frame").animate({width: 'toggle'});
			
			var dataString = 'scale='+ scale + '&capacity=' + capacity + '&psize=' + psize;  
			//alert (dataString);return false;  
			$.ajax({  
				type: "POST",  
				url: "# ",  
				data: dataString,  
				success: function() {
					$('p#inp1').text($('p#inp1').text().replace('replace', scale));
					$('p#inp2').text($('p#inp2').text().replace('replace', capacity));
					$('p#inp3').text($('p#inp3').text().replace('replace', psize));
					addPlot();
				}  
			});  
			//return false;  
      
		 
	}); 
	
	
});