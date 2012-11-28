$(document).ready(function(){
	
	/* ++++++++++++++++++++++++++++++++++++++++++++++++++ Global Variables and Interaction ++++++++++++++++++++++++++++++++++++++++++++++++++  */
	var browserWidth = $(window).width()
	
	// Get browser width when resized
	$(window).resize(function() {
		browserWidth = $(window).width();
	});
	
	/* ++++++++++++++++++++++++++++++++++++++++++++++++++ Login Screen Interaction ++++++++++++++++++++++++++++++++++++++++++++++++++  */
	
	// Setup login screen baseed on project
	$( "body" ).on("click", "#login-nav nav ul li", function(){
		var sLink = $(this).text();
		if(sLink == "SIPS"){
			loginLoader(this, "SIPS", "Welcome to the Sustainable Infrastructure Planning Systems", "sips");
		} else if(sLink == "IEDSS"){
			loginLoader(this, "IEDSS", "Welcome to the Integrative Energy Decision Support Systems", "iedss");
		} else if(sLink == "UTS"){
			loginLoader(this, "UTS", "Welcome to the Urban Traffic Systems", "uts");
		} else if(sLink == "LMDSS"){
			loginLoader(this, "LMDSS", "Welcome to the Labor Market Decision Support Systems", "lmdss");
		} else {
			resetLoginLoader(this);
		}
	});
	
	
	/* ++++++++++++++++++++++++++++++++++++++++++++++++++ Main Screen Interaction ++++++++++++++++++++++++++++++++++++++++++++++++++  */
	
	// New case creation
	/*$( "#main-new-case-container" ).dialog({
		autoOpen: false,
		height: 560,
		width: 440,
		modal: true,
		Cancel: function() {
				$( this ).dialog( "close" );
		},
		close: function() {
			allFields.val( "" ).removeClass( "ui-state-error" );
		}
	});*/
	var cname = "Case 1 yeah!"
	var clink = "img/sips.png"
	var cdesc = "This is case 1 mini description"
	var i1 = 1;
	var i2 = 1;
	var cid;
	var sid;
	var myDate = new Date();
	var displayDate = (myDate.getMonth()+1) + '/' + (myDate.getDate()) + '/' + myDate.getFullYear() + " " + myDate.getHours() + ':' + myDate.getMinutes();
	
	$( "body" ).on("click", "#main-cases input", function(){
		$("#main-new-case-container").show();
		$(".main-content-blocked").show();
		// for the dialog
		//$( "#main-new-case-container" ).dialog( "open" );
	});
	$( "body" ).on("click", "#case-cancel", function(){
		$("#main-new-case-container").hide()
		$(".main-content-blocked").hide();
	});
	
	// New Case Creation
	/* for the dialog
	$("#main-new-case-container").dialog({
		height: 140,
		modal: true
	});
	*/
	$( "body" ).on("click", "#case-add", function(){
		cid = i1
		cname = "Case "+i1
		cdesc = "This is case "+i1+" mini description"
		
		newCaseItem(cid, clink, cname, cdesc, displayDate);
		
		$("#main-new-case-container").hide()
		i1++;
		
		$(".main-content-blocked").hide();
	});
	
	// Selected Case Details
	$( "body" ).on("click", "div.main-cases-wrapper ul li", function(event){
		var cid_selected = event.target.id;
		$(".main-selected-case").children('h1').text(cname.substring(0,4)+cid_selected.substring(10));
		$(".main-selected-case-wrapper").toggle()
		$(".main-selected-case-wrapper").attr('id',cid_selected+'-scr')
	});
	
	// New Scenario Creation
	$( "body" ).on("click", ".main-selected-case-right input", function(event){
		sid = i2
		sname = "Scenario"+sid
		var ncid = $(this).parent().parent().parent().attr('id')//.substring(10,11);
		newScenarioItem(sname, ncid, sid)
		i2++;
	});
	
	// Selected Scenario Details
	$( "body" ).on("click", ".main-selected-case-right ul li", function(event){
		var sid_selected = event.target.id;
		$(".main-selected-scenario").children('h1').text('Scenario '+sid_selected.substring(16)+' Details');
		$(".main-selected-scenario").toggle()
	});
	
	
	// Edit a case
	$( "body" ).on("click", '.main-selected-opt input[name="case-edit"]', function(event){
		window.location.replace("simulation.html")
	});
	
	
	
	/* ++++++++++++++++++++++++++++++++++++++++++++++++++ Simulation Screen Interaction ++++++++++++++++++++++++++++++++++++++++++++++++++  */
	
	/* +++++++++++++++++++++++++ Simulation Header +++++++++++++++++++++++++ */
	
	// Set the width size of Viz and Time Windows
	var rightPanelWidth = browserWidth - $("#sim-dv-container").width();//240;
	var timeRightControlWidth = rightPanelWidth - $("#sim-time-control-left").width() - 20 - 1;//211 - 30;
	var rightPanelWidthPercent = (rightPanelWidth/browserWidth)*100;
	var timeRightControlWidthPercent = (timeRightControlWidth/rightPanelWidth)*100;
	$('#sim-vis-container').css('width', rightPanelWidthPercent+'%');
	$('#sim-time-container').css('width', rightPanelWidthPercent+'%');
	$('#sim-time-control-right').css('width', timeRightControlWidthPercent+'%');
	$('.main-content').css('width', timeRightControlWidthPercent+'%');
	
	//Switch View
	$( "body" ).on("click", '#sim-scenario-opt .sim-dv-wrapper-icon', function(event){
		var chdis = $('#sim-dv-container').css('display')
		if( chdis == "none"){
			$("#sim-dv-container").css('display', 'block')
			$(this).text('Hide DVs')
			var rightPanelWidth = browserWidth - $("#sim-dv-container").width();//240;
			var rightPanelWidthPercent = (rightPanelWidth/browserWidth)*100;
			$('#sim-vis-container').css('width', rightPanelWidthPercent+'%');
			$('#sim-time-container').css('width', rightPanelWidthPercent+'%');
			
			$('#sim-vis-map').addClass('right-shadow');
			$('#sim-vis-other').addClass('right-shadow');
			$('#sim-vis-content').addClass('right-shadow');
			
		} else {
			$("#sim-dv-container").css('display', 'none')
			$(this).text('Show DVs')
			$('#sim-vis-container').css('width', '100%');
			$('#sim-time-container').css('width', '100%');
			
			
			$('#sim-vis-map').removeClass('right-shadow');
			$('#sim-vis-other').removeClass('right-shadow');
			$('#sim-vis-content').removeClass('right-shadow');
		}
	});
	
	$( "body" ).on("click", '#sim-scenario-opt .sim-kpi-wrapper-icon', function(event){
		var chdis = $('#sim-kpi-container').css('display')
		var rightPanelWidth = browserWidth - $("#sim-kpi-content-left").width();//240;
		var rightMainPanelWidth = browserWidth - $(".main-system").width() - 4;//240;
		
		var rightPanelWidthPercent = (rightPanelWidth/browserWidth)*100;
		var rightMainPanelWidthPercent = (rightMainPanelWidth/browserWidth)*100;
		
		if( chdis == "none"){
			$("#sim-kpi-container").css('display', 'block')
			$(this).text('Hide KPIs')
			$('#sim-kpi-content-right-wrapper').css('width', rightPanelWidthPercent+'%');
			$('.main-user').css('width', rightMainPanelWidthPercent+'%');
		} else {
			$("#sim-kpi-container").css('display', 'none')
			$(this).text('Show KPIs')
		}
	});
	
	/* +++++++++++++++++++++++++ Decision Variables +++++++++++++++++++++++++ */
		
	// Selecting database DV category
	$("section#dv-catg-drivers").show()
	$( "body" ).on("click", '#sim-dv-db-content-block-header ul li', function(event){
		// show the content of the selected category
		var catgId = $(this).text().toLowerCase();
		$("section#dv-db-catg-"+catgId+"-h").show()
		$("section#dv-db-catg-"+catgId+"-h").siblings().hide()
		
		// highlite the selected category
		$(this).addClass('sim-view-block-header-selected');
		$(this).siblings().removeClass('sim-view-block-header-selected');
	});
	
	// Minimize windows
	$( "body" ).on("click", 'li.min-icon', function(event){
		$(this).parent().parent().next().slideToggle(500);
		$(this).switchClass('min-icon', 'max-icon');
	});
	
	// Minimize windows
	$( "body" ).on("click", 'li.max-icon', function(event){
		$(this).parent().parent().next().slideToggle(500);
		$(this).switchClass('max-icon', 'min-icon');
	});
	
	// Switch Views to list
	$( "body" ).on("click", 'li.grid-view-icon', function(event){
		$(this).switchClass('grid-view-icon', 'list-view-icon');
		var classIdH = $(this).parent().parent().next().children('.sim-view-list').attr('id');
		var classIdS = $(this).parent().parent().next().children('.sim-view-block').attr('id');
		$('#'+classIdH).hide();
		$('#'+classIdS).show();
		
	});
	
	// Switch Views to grid
	$( "body" ).on("click", 'li.list-view-icon', function(event){
		$(this).switchClass('list-view-icon', 'grid-view-icon');
		var classIdS = $(this).parent().parent().next().children('.sim-view-list').attr('id');
		var classIdH = $(this).parent().parent().next().children('.sim-view-block').attr('id');
		$('#'+classIdH).hide();
		$('#'+classIdS).show();
	});
	
	// Show description of database DVs
	$( "body" ).on("click", '#sim-dv-db-content-block-content section ul li img', function(event){
		
		// if the description window is alredy open, then close it
		if($("#sim-dv-db-content-desc-container").css('display') != "none"){
			$('#sim-dv-db-content-desc-container').toggle(
				"slide", 
				{
					direction: 'down',
					duration: 'fast',
					easing: 'easeOutQuart'
			});
		}
		
		clearDescriptionContent()
		
		// set the desctiption content with the selected DV
		var thisId = $(this).parent().attr('id');
		
		$('#sim-dv-db-content-block-desc-content div.desc-content-info').attr('id',thisId+'-info');
		$('#sim-dv-db-content-block-desc-content div.desc-content-attr').attr('id',thisId+'-attr');
		$('#sim-dv-db-content-block-desc-content div.desc-content-add').attr('id',thisId+'-add');
		
		$('#sim-dv-db-content-block-desc-header h3').text($('#'+thisId).children('p').text().replace(/([a-z])([A-Z])/g, '$1 $2'));
		$('#sim-dv-db-content-block-desc-content div#'+thisId+'-info'+' h4').text($('#'+thisId).children('p').text().replace(/([a-z])([A-Z])/g, '$1 $2'));
		$('#sim-dv-db-content-block-desc-content div#'+thisId+'-info'+' p').text("Sorry, no details provided.");
		//$('#sim-dv-db-content-block-desc-content div#'+thisId+'-info'+' p').text($('#'+thisId).children('p').text()+" detials details details detials details details detials details details detials details details");
		$('#sim-dv-db-content-block-desc-content div#'+thisId+'-attr'+' ul').append('<li>'+$('#'+thisId).children('p').text().replace(/([a-z])([A-Z])/g, '$1 $2')+" Attribute 1"+'</li>');
		$('#sim-dv-db-content-block-desc-content div#'+thisId+'-attr'+' ul').append('<li>'+$('#'+thisId).children('p').text().replace(/([a-z])([A-Z])/g, '$1 $2')+" Attribute 2"+'</li>');
		
		// open the description window and hilight the selected item
		$(this).parent().addClass('sim-view-block-content-selected')
		$(this).parent().parent().parent().parent().height(110).animate()
		$('#sim-dv-db-content-desc-container').toggle(
			"slide", 
			{
				direction: 'down',
				duration: 'slow',
				easing: 'easeOutQuart'
		});//.slideToggle(500)
	});
	
	// Close database DVs description from cancel button
	$( "body" ).on("click", 'li.cancel-icon', function(event){
		clearDescriptionContent()
		
		$(this).parent().parent().parent().toggle(
			"slide", 
			{
				direction: 'down',
				duration: 'slow',
				easing: 'easeOutQuart'
			}, function(){
				$("#sim-dv-db-content-block-content").height(230).animate()
		});//.slideToggle(500)
		
	});
	
	// Adding selected DV
	$( "body" ).on("click", 'div.desc-content-add input', function(event){
		
		var myCatgName = $("#sim-dv-db-content-block-header li.sim-view-block-header-selected").text();
		var myDvIdLength = $(this).parent().attr('id');
		var myDvId = $(this).parent().attr('id').substring(0,myDvIdLength.length-4)+"-l";
		var myDvName = $("#sim-dv-db-content-block-desc-content div.desc-content-info h4").text();
		var myImg = "'./../img/icon/"+myCatgName+"_icon.png";
		
		addDbDvToMyDv(myCatgName, myDvId, myDvName, myImg);
		
		var myDvIdKPI = $(this).parent().attr('id').substring(0,myDvIdLength.length-4)+"-k";
		addMyDvToKPIs(myCatgName, myDvIdKPI, myDvName, myImg);
		
		// add graphs for paul stuff
		addPlotToKPIs(myDvId, myDvName);
		
		//drawd3js(myDvId);       
		
		
		// Close database DVs description when a DV's been added
		$(this).parent().parent().parent().parent().toggle(
			"slide", 
			{
				direction: 'down',
				duration: 'slow',
				easing: 'easeOutQuart'
			}, function(){
				$("#sim-dv-db-content-block-content").height(230).animate()
		});
		
		clearDescriptionContent();
		
	});
	
	// Show slected DV Attributes
	$( "body" ).on("click", '#sim-dv-my-content-list section ul li span', function(event){
		
		var selectedMyDvId = $(this).parent().attr('id');
		var selectedMyDvCatg = $('#'+selectedMyDvId).parent().parent().children('h4').text();
		var selectedMyDvName = $('#'+selectedMyDvId).children('p').text();
		
		// set attribute values
		$("#sim-selected-dv-header div.sim-selected-dv-header-title h3").text(selectedMyDvCatg);
		$("#sim-selected-dv-header div.sim-selected-dv-header-title h4").text(selectedMyDvName);
		
		// show detailed and attribute window
		$(this).parent().animate({
			backgroundColor: "#333",
			}, 500, function(){
				$("#sim-selected-dv-container").toggle(
				"slide", 
				{
					direction: 'right',
					duration: 'slow',
					easing: 'easeOutQuart'
				});//.show();
				
				$("#sim-dv-my-content-list").toggle(
				"slide",
				{
					direction: 'left',
					duration: 'slow',
					easing: 'easeOutQuart'
				});//.hide();
			})
	});
	
	// return to selected items list
	$( "body" ).on("click", '#sim-selected-dv-header input', function(event){
		
		$("#sim-dv-my-content-list").toggle(
			"slide", 
			{
				direction: 'left',
				duration: 'slow',
				easing: 'easeOutQuart'
			}, function(){
				$("#sim-dv-db-content-block-content").height(230).animate()
				$(this).find('li').animate({backgroundColor: "#999"}, 500);
			});//.hide();
		$("#sim-selected-dv-container").toggle(
			"slide", 
			{
				direction: 'right',
				duration: 'slow',
				easing: 'easeOutQuart'
			}, function(){
				$("#sim-dv-db-content-block-content").height(230).animate()
			});//.hide();
	});
	
	
	
	// Hide show data
	$( "body" ).on("click", '#sim-kpi-left-content-list .show-icon', function(event){
		var thisId = $(this).parent().parent().attr('id');
		$('#'+thisId.substring(0,thisId.length-2)+'-p').hide();
		$(this).removeClass('show-icon').addClass('hide-icon');
	});
	
	$( "body" ).on("click", '#sim-kpi-left-content-list .hide-icon', function(event){
		var thisId = $(this).parent().parent().attr('id');
		$('#'+thisId.substring(0,thisId.length-2)+'-p').show();
		$(this).removeClass('hide-icon').addClass('show-icon');
	});
	
	
	
	// delete DV from my list
	$( "body" ).on("click", '#sim-dv-my-content-list .delete-icon', function(event){
		var thisId = $(this).parent().parent().attr('id');
		var thisIdLength = thisId.length-2;
		
		removeDvFromMyDv(thisId.substring(0,thisIdLength));
		
	});
	
	
	// Fill DVs with data ((((( temp )))))
	fillDatabaseDvsHeader("dv-db-catg-paul", "Paul")
	fillDatabaseDvsHeader("dv-db-catg-transport", "Transport")
	fillDatabaseDvsHeader("dv-db-catg-energy", "Energy")
	fillDatabaseDvsHeader("dv-db-catg-water", "Water")
	
	for(x=1;x<dvList.length;x++){
		//fillDatabaseDvs("dv-db-catg-transport", "dv-db-transport-"+x, "Transport "+x, "#")
		fillDatabaseDvs("dv-db-catg-paul", "dv-db-paul-"+x, dvList[x], "'./../img/icon/paul_icon.png")
	}
	
	for(x=1;x<12;x++){
		//fillDatabaseDvs("dv-db-catg-transport", "dv-db-transport-"+x, "Transport "+x, "#")
		fillDatabaseDvs("dv-db-catg-transport", "dv-db-transport-"+x, "Transport"+x, "'./../img/icon/transport_icon.png")
	}
	
	for(x=1;x<4;x++){
		fillDatabaseDvs("dv-db-catg-energy", "dv-db-energy-"+x, "Energy "+x, "'./../img/icon/energy_icon.png")
	}
	
	for(x=1;x<8;x++){
		fillDatabaseDvs("dv-db-catg-water", "dv-db-water-"+x, "Water "+x, "'./../img/icon/water_icon.png")
	}
	
	
	/* +++++++++++++++++++++++++ Visualization +++++++++++++++++++++++++ */
	
	//Switch View between map and other options
	$( "body" ).on("click", '#sim-vis-header ul li.map-view-icon', function(event){
		var chdis = $('#sim-vis-map').css('display')
		if( chdis == "none"){
			$("#sim-vis-map").css('display', 'block')
			$("#sim-vis-map").siblings().css('display', 'none')
			$(".map-view-icon").css("background-color", "#fff")
			$(".map-view-icon").siblings().not(".drivers-icon").css("background-color", "")
		} else {
			$("#sim-vis-map").css('display', 'none')
			$(".map-view-icon").css("background-color", "")
		}
		google.maps.event.trigger(map, 'resize');
	});
	
	$( "body" ).on("click", '#sim-vis-header ul li.othr-view-icon', function(event){
		var chdis = $('#sim-vis-other').css('display')
		if( chdis == "none"){
			$("#sim-vis-other").css('display', 'block')
			$("#sim-vis-other").siblings().css('display', 'none')
			$(".othr-view-icon").css("background-color", "#fff")
			$(".othr-view-icon").siblings().not(".drivers-icon").css("background-color", "")
		} else {
			$("#sim-vis-other").css('display', 'none')
			$(".othr-view-icon").css("background-color", "")
		}
	});
	
	$( "body" ).on("click", '#sim-vis-header ul li.drivers-icon', function(event){
		var chdis = $('#sim-vis-drivers-container').css('display')
		if( chdis == "none"){
			//$("#sim-vis-drivers-container").css('display', 'block')
				//$("#sim-vis-drivers-container").siblings().css('display', 'none')
			$(".drivers-icon").css("background-color", "#fff")
				//$(".drivers-icon").siblings().css("background-color", "")
		} else {
			//$("#sim-vis-drivers-container").css('display', 'none')
			$(".drivers-icon").css("background-color", "")
		}
		
		$("#sim-vis-drivers-container").toggle(
			"slide", 
			{
				direction: 'right',
				duration: 'slow',
				easing: 'easeOutQuart'
			}, function(){
				$("#sim-vis-drivers").show();
			});
			
			
	});
	
	$( "body" ).on("click", '#sim-vis-drivers span.reg-layer', function(event){
		//heatmap.setMap(heatmap.getMap() ? null : map);
		
		asir_s.setMap(asir_s.getMap() ? null : map);
		baha_s.setMap(baha_s.getMap() ? null : map);
		shamaliyah_s.setMap(shamaliyah_s.getMap() ? null : map);
		jawf_s.setMap(jawf_s.getMap() ? null : map);
		
		madinah_s.setMap(madinah_s.getMap() ? null : map);
		qasim_s.setMap(qasim_s.getMap() ? null : map);
		
		qurayyat_s.setMap(qurayyat_s.getMap() ? null : map);
		riyad_s.setMap(riyad_s.getMap() ? null : map);
		sharqiyah_s.setMap(sharqiyah_s.getMap() ? null : map);
		
		hail_s.setMap(hail_s.getMap() ? null : map);
		jizan_s.setMap(jizan_s.getMap() ? null : map);
		makkah_s.setMap(makkah_s.getMap() ? null : map);
		najran_s.setMap(najran_s.getMap() ? null : map);
		
		tabuk_s.setMap(tabuk_s.getMap() ? null : map);
	});
	
	$( "body" ).on("click", '#sim-vis-drivers span.water-layer', function(event){
		//heatmap1_2.setMap(heatmap1_2.getMap() ? null : map);
		//heatmap1.setMap(heatmap1.getMap() ? null : map);
		heatmap4.setMap(heatmap4.getMap() ? null : map);
		
	});
	
	$( "body" ).on("click", '#sim-vis-drivers span.power-layer', function(event){
		heatmap2.setMap(heatmap2.getMap() ? null : map); 
	});
	
	/* +++++++++++++++++++++++++ KPI +++++++++++++++++++++++++ */
	
	// Test Paul data
	
	$( "body" ).on("click", '#sim-scenario-run', function(event){
		
		$(this).css('background-color', '#f00')
		//alert(variables[0])
		//initPaul();
		
		run();// Paul
		runD3js();
		
		
		//alert(variables)
	});
	
/*	$( "body" ).on("click", '#sim-scenario-reset', function(event){
		
		$(this).css('background-color', '#f00')
		initPaul();
	});*/
	
	
	
	/* +++++++++++++++++++++++++ Temporal +++++++++++++++++++++++++ */
	
	
	$( "span.time-line" ).slider({
			min: 1950,
			max: 2050,
			value: 1950,
			step: 1,
			slide: function( event, ui ) {
				$( "span.time-label" ).text( ui.value );
				$("span.time-mark").css('left',''+ui.value-1950-0.1+'%')
				
				//for(var i = 0; i < variables.length; i++) {
					chartppList[0].setSelection(['1990',]);
				//}
			}
		});
		
		//chart.setSelection(['1990']);
		$( "body" ).on("click", 'span.step-right', function(event){
		//$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		//	" - $" + $( "#slider-range" ).slider( "values", 1 ) );
		//chartppList[0].setSelection(['2049.5',4971245459.973991]);
		chartppList[0].setSelection([{row:0,column:'1990'}]);
		alert('right')
		});
		
		
		$( "body" ).on("click", 'span.step-left', function(event){
			
		});
		
		//var dsalPoints3 = [];
		//var pointArray3 = null;
		//var heatmap3 = null;
		$( "body" ).on("click", 'span.run-icon', function(event){
			//var timeChange = 0;
			$("span.time-mark").css('left','0%');
			
			for(var i=0; i<100; i++){
				$("span.time-mark").css('left',i-0.1+'%');
				$( "span.time-label" ).text( 1950+i );
				/*
				var dsalPoints3 = [];
				for(var y=0; y<100; y++){
					
					if(dsalObjectArray[y].contractDate < i+1950){
						dsalPoints3.push(new google.maps.LatLng(dsalObjectArray[y].latitude, dsalObjectArray[y].longitude))
					}
					
				}
				 var pointArray3 = new google.maps.MVCArray(dsalPoints3);
				 if(i!=0){heatmap3.setMap(null);}
				 var heatmap3 = new google.maps.visualization.HeatmapLayer({
		          data: pointArray3,
		          radius: 50
		        });
		        
		        heatmap3.setMap(map);
			*/	
			}
		});
	
	/* ++++++++++++++++++++++++++++++++++++++++++++++++++ Reporting Screen Interaction ++++++++++++++++++++++++++++++++++++++++++++++++++  */
	
	
});//End of Ready function
