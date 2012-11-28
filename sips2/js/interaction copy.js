$(document).ready(function(){
				
				//Global Variables
				window.dv_item_gl = "";
				var ee = [];
				var en = [];
				var browserPost;
				
				/*
				//read JSON file
				function getUsers( ) {
					return $.getJSON("userslist.json").pipe(function (datajs) {
						return datajs.elements;
					});
				}

				// Usage:
				getUsers().done(function (elements) {
					$(elements).each( function(){
						en.push(elements.name);
						ee.push(elements.value);
					});
				});
				*/
				function getElementsjs(filename) {
					$.getJSON(filename, function(data){
						$.each(data.elements, function(i,s){
							en.push(s.name);
							ee.push(s.elem);
							
							//een++;
						});
					});
					}
				//getElementsjs("http://localhost:8888/userslist.json");
				
				// add db dv to my dv
				$("body").on("click", ".dv_db_item img", function () {
					
					//getElementsjs("userslist.json");//.done(function(){
						//alert(en);
					//});
					
					
					var dv_copy = $(this).parent().clone();
					var new_dv = $(dv_copy).append('<a href="#" class="button_1">>></a>');
					
					
					// add id from name
					//var dv_item_id = $(new_dv).find('p').text();
					//$(new_dv).attr('id', dv_item_id);
					
					///////////////////////////////////////////////
					// detect the browser and replace its name to a stakeholder heheheheeeee
					var browser;
					
					
					if($.browser.mozilla){
						browser = "MEP";}//"Firefox";}
					else if($.browser.msie){
						browser = "Internet Explorer";}
					else if($.browser.opera){
						browser = "Opera";}
					else if($.browser.safari){
						browser = "MOWE";}//"Safari";}
					else {
						browser = "SEC";}//"Unknown";}
					
					///////////////////////////////////////////////
					
					
					var dv_num = $(new_dv).find('p').text().replace('name ', 'Decision Variable no.');
					$(new_dv).find('p').text(dv_num);
					//$(new_dv).find('p').append(' '+browserPost)
					
					$(new_dv).removeClass('dv_db_item').addClass('dv_item');
					
					var textid = $(this).parent().find('p').text().replace(/ /g, '_');
					$(new_dv).attr('id', textid);
					
					//dv_item_gl = new_dv;
					$("ol.dv_items").append(new_dv);
					//$("ol.dv_items").append(new_dv);
					window.dv_item_gl = new_dv;
					
					//$("ol.dv_items").append('<li class="dv_item"><img src="images/about_us.png" /> <!-- D.V. icon --><p>Decision Variable no.1</p><a href="#" class="button_1">>></a></li>');
					
					// now check the size of li
					if($("ol.dv_items li").length > 5){
						$("ol.dv_items li").width(224);
					} else {
						$("ol.dv_items li").width(238);
					}
					
					//$( "ol.dv_items" ).children().selectable();
					
					//add settings frame
					var settings_clone = $('.dv_settings_frame').clone();
					$(settings_clone).attr('id', textid+'_f');
					$(settings_clone).find("div#add_btn").attr('id','add_btn_'+textid);
					$('.dv_settings_frame').parent().append(settings_clone);
					
					
					///////////////////////////////////////////////
					//$.post("http://localhost:8888/master.php", {name: browser}, function(returnedData){
					//	browserPost = returnedData;
					//	alert(browserPost);
					//});
					var valString = $(new_dv).html();//new_dv.toString();
					//$.parseJSON($(new_dv).html());
					
					$.ajax({
						type: "POST",
						//cache: false,
						//dataType: "json",
						url: "http://localhost:8888/master.php",
						data: {name: browser, elems:valString},
						//contentType: "application/json; charset=utf-8",
						success: function(data){
							browserPost = data;
							//alert('This is from the setter ****** '+browserPost);
						},
						error: function(){
							alert("Ops!! "+en);
						}
            		});
            		///////////////////////////////////////////////
					
				});
				
				
				//Droppable forward
				
				//$( "#catalog" ).accordion();
				var dragOptions = {
					appendTo: "body",
					helper: "clone",
					revert: false
				};
				
				$( "li.dv_db_item" ).draggable(dragOptions);
				
				
				var dropOptions = {
					activeClass: "ui-state-default",
					hoverClass: "ui-state-hover",
					accept: ":not(.ui-sortable-helper)",
					drop: function( event, ui ) {
				
						//$( this ).find( ".placeholder" ).remove();
						//$( "<li></li>" ).text( ui.draggable.text().replace('name ', 'Decision Variable no.') ).appendTo( this );
						var new_dv = $(ui.draggable).clone().append('<a href="#" class="button_1">>></a>');
						var dv_num = $(new_dv).find('p').text().replace('name ', 'Decision Variable no.');
						$(new_dv).find('p').text(dv_num);
						$(new_dv).removeClass('dv_db_item').addClass('dv_item');
						
						$( this ).append(new_dv);
						//$(ui.draggable).remove();
						
						//$( "ol.dv_items" ).children().selectable();
						if($("ol.dv_items li").length > 5){
							$("ol.dv_items li").width(224);
						} else {
							$("ol.dv_items li").width(238);
						}
					}
					
				};
				
				var sortOptions = {
					
					items: "li",
					sort: function() {
						// gets added unintentionally by droppable interacting with sortable
						// using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
						$( this ).removeClass( "ui-state-default" );
					}
				};
				
				$( "ol.dv_items" ).droppable(dropOptions).sortable(sortOptions).selectable();
				
				//$( "#tabs_cont ul" ).children().draggable( dragOptions );
				//$( "ul.dv_items_all " ).children().droppable( dropOptions ).sortable(sortOptions);
				
				
				
				
				/*
				
				
				$( "ol.dv_items" ).droppable({
					activeClass: "ui-state-default",
					hoverClass: "ui-state-hover",
					accept: ":not(.ui-sortable-helper)",
					drop: function( event, ui ) {
				
						//$( this ).find( ".placeholder" ).remove();
						//$( "<li></li>" ).text( ui.draggable.text().replace('name ', 'Decision Variable no.') ).appendTo( this );
						var new_dv = $(ui.draggable).clone().append('<a href="#" class="button_1">>></a>');
						var dv_num = $(new_dv).find('p').text().replace('name ', 'Decision Variable no.');
						$(new_dv).find('p').text(dv_num);
						$(new_dv).removeClass('dv_db_item').addClass('dv_item');
						
						$( this ).append(new_dv);
						//$(ui.draggable).remove();
						
					}
					
				}).sortable({
					
					items: "li",
					sort: function() {
						// gets added unintentionally by droppable interacting with sortable
						// using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
						$( this ).removeClass( "ui-state-default" );
					}
				});
				
				
				*/
				
				
				
				
				//Droppable backward
				/*
				//$( "#catalog" ).accordion();
				$( "ol.dv_items li" ).draggable({
					appendTo: "body",
					helper: "clone"
				});
				
				$( "dv_items_all ul" ).droppable({
					activeClass: "ui-state-default",
					hoverClass: "ui-state-hover",
					accept: ":not(.ui-sortable-helper)",
					drop: function( event, ui ) {
				
						//$( this ).find( ".placeholder" ).remove();
						//$( "<li></li>" ).text( ui.draggable.text().replace('name ', 'Decision Variable no.') ).appendTo( this );
						var new_dv = $(ui.draggable).clone();
						$(new_dv).find('a').remove();
						var dv_num = $(new_dv).find('p').text().replace('Decision Variable no.', 'name ');
						$(new_dv).find('p').text(dv_num);
						$(new_dv).removeClass('dv_item').addClass('dv_db_item');
						
						$( this ).append(new_dv);
						$(ui.draggable).remove();
						
					}
					
				}).sortable({
					
					items: "li:not(.placeholder)",
					sort: function() {
						// gets added unintentionally by droppable interacting with sortable
						// using connectWithSortable fixes this, but doesn't allow you to customize active/hoverClass options
						$( this ).removeClass( "ui-state-default" );
					}
				});
				*/
				
				//duplicate settings frame for every decision variable
				//$('.dv_settings_frame').parent().children().each(){
					
				//}
				
				
				
				// button show and hide settings panel
				/*$("body").on("click", ".button_1", function () {
					$(".dv_settings_frame").animate({width: 'toggle'});
					
					if($(".dv_settings_frame").width() < 249){
						marker.setMap(map);
						riyadh.setOptions({fillOpacity:0.35});
					}else{
						marker.setMap(null);
						riyadh.setOptions({fillOpacity:0});
					}
					
					//$(this).parent().attr('id') == "population"{
					$('#scale_label_1').text($(this).parent().attr('id'));
					//}
					
				});*/
				
				// new one with multiple settings frame
				$("body").on("click", ".button_1", function () {
					
					getElementsjs("http://localhost:8888/userlist.json");
					//alert('This is NOT from the setter ****** '+en+'  *******  '+ee[2]);
					alert(ee.length);
					if(ee[ee.length-1] != null){
						//for (var i = 0; i < ee.length; i++) {
							$("ol.dv_items").append('<li class="dv_items_all">'+ee[ee.length-1]+'</li>');
							//Do something
    					//}
					//$("ol.dv_items").append('<li class="dv_items_all">'+ee[ee.length-1]+'</li>');
					}
					
					var frameid1 = "#"+$(this).parent().attr('id')+"_f";
					$(frameid1).animate({width: 'toggle'});
					//$(".dv_settings_frame").animate({width: 'toggle'});
					
					//if($(".dv_settings_frame").width() < 249){
					if($(frameid1).width() < 249){
						marker.setMap(map);
						riyadh.setOptions({fillOpacity:0.35});
					}else{
						marker.setMap(null);
						riyadh.setOptions({fillOpacity:0});
					}
					
					//$(this).parent().attr('id') == "population"{
					var textid2 = frameid1+" #scale_label_1";
					$(textid2).text(frameid1);
					//}
					
					//alert(frameid1 + " the selected id = " + frameid1);
					$(".dv_settings_frame").each( function(){
					if($(this).attr('id') != frameid1.substring(1, frameid1.length)) {
					if($(this).css("display") != "none"){
					$(this).css("display", "none");}}
					//alert($(this).attr('id'));	
						//if($(this).attr('id') == frameid1){
							//if($(this).width() > 20){
							//	$(this).animate({width: 'toggle'});
							//	var frameid2 = $(this).attr('id');
							//	alert(frameid2 + " the selected id = " + frameid1);
							//}
						//}
					});
					
				});
				// end of the new frame settings --
				
				
				
				// show and hide Database decision varialbes items
				$("body").on("click", ".dv_frame span img:eq(0)", function () {
					$("#tabs").slideToggle({width: 'toggle'});
					
					if($("#tabs").height() > 10){
						$(".dv_items").height(517);
					} else {
						$(".dv_items").height(287);
					}
					
					if($("ol.dv_items li").length > 9){
						$("ol.dv_items li").width(224);
					} else {
						$("ol.dv_items li").width(238);
					}
					
				});
				
				if($("ol.dv_items li").length > 5){
					$("ol.dv_items li").width(224);
				} else {
					$("ol.dv_items li").width(238);
				}
				
				// show and hide selected decision variables
				$(".dv_frame span img:eq(1)").click(function () {
					$(".dv_items").slideToggle({width: 'toggle'});
				});
				
				
			
				//Tabs
				$(function() {
					$( "#tabs" ).tabs({
						collapsible: true,
						ajaxOptions: {
							error: function( xhr, status, index, anchor ) {
								$( anchor.hash ).html(
								"<p> Couldn't load this tab. We'll try to fix this as soon as possible. </p>" +
								"<p>If this wouldn't be a demo. </p>" );
							}
						},
						load: function(event, ui) {
						
						var dragOptions = {
							appendTo: "body",
							helper: "clone",
							revert: false
							};
							
						$( "li.dv_db_item" ).draggable(dragOptions);
						//$( "#tabs_cont ul" ).children().draggable( dragOptions );
						
						}
					});
					
				});
				
				
				
				//removing decision variables
				$("body").on("click", "#dv_rmv", function () {
				
					$(".removeMe").remove();
					//$( "ol.dv_items" ).children().selectable( "destroy" );
					preset();
					$("input[type=text], textarea").val("");
					$('p#inp1').text("");
					scale = "";
					$('#dv_attr_group').reset();
				
				});
				
				// start simulation
				var isSim = -1;
				$("body").on("click", "#dv_sim", function () {
					run();
					
					
					
					
					chartp.draw(datap, optionsb);
					chartp2.draw(datap, optionsb);
					//setInterval(function(){myLoop();},2000);
					var i = datep;                     //  set your counter to 1

					function myLoop () {           //  create a loop function
						setTimeout(function () {    //  call a 3s setTimeout when the loop is called
							var randomNum = Math.ceil(Math.random()*10);
							datep = datep+1;
							
							gdpp1 = scale*randomNum;
							gdpp2 = (capacity/randomNum)*10;
							
							var dateps = datep.toString();
					
							datap.addRows([[dateps, gdpp1, gdpp2]]);
							chartp.draw(datap, optionsb);
							chartp2.draw(datap, optionsb);          //  your code here
							
							i++;                     //  increment the counter
							if (i < 2030) {            //  if the counter < 10, call the loop function
								myLoop();             //  ..  again which will trigger another 
							}                        //  ..  setTimeout()
						}, 100)
					}

					myLoop(); 
					
        
				});


				
				//enable decision variables to be selected and deleated
				$("body").on("click", "#dv_edt", function () {
					
					$( "ol.dv_items" ).children().selectable({
						disabled: false,
						selected: function(event, ui) { 
							$(this).addClass("removeMe");
						}
						//,	unselected: function(event, ui) { 
						//		$(".dv_item").removeClass("removeMe");
						//	}
					});
										
					$( "ol.dv_items" ).bind( "selectableunselected", function(event, ui) {
						$(".dv_item").removeClass("removeMe");
					});
					
					$( "#dv_edt.button_3" ).switchClass( "button_3", "button_3_down" );
					$( "#dv_edt.button_3_down" ).switchClass( "button_3_down", "button_3" );
					//return false;
					
					if($("#dv_edt").hasClass("button_3_down")){
						$( "ol.dv_items" ).children().selectable( "destroy" );
					}
				
				});
				
				
				
				//new script
				
			});
