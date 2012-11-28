
	
	/* ++++++++++++++++++++++++++++++++++++++++++++++++++ Global Variables and Interaction ++++++++++++++++++++++++++++++++++++++++++++++++++  */
	var browserWidth = $(window).width()
	
	// Get browser width when resized
	$(window).resize(function() {
		browserWidth = $(window).width();
	});
	
	
	/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */

// This function is to chnage the login screen based on projects for users to login to the system
function loginLoader(th, pname, msgname, imgname){
	pname = pname.toLowerCase();
	
	$(th).parent('ul').children().each(function () {
		$(this).removeAttr('class', 'login-selected');
	});
	$(th).attr('class','login-selected');
	$("div.login-wrapper div.login-invited").attr('id', 'login-'+pname+'-invited');
	$("div.login-wrapper div.login-new").attr('id', 'login-'+pname+'-new');
	$("div.login-wrapper div.login-reg").css("display", "block");
	$("#login-content div.login-intro h1").text(pname.toUpperCase());
	$("#login-content div.login-intro h2").text(msgname);
	$("#login-content div.login-intro img").attr("src","img/"+imgname+".png");
	$('#login-content form').attr('id', 'login-'+pname+'-form');
	$("#login-content form").css("display", "block");
}

// This function is to reset the login screen to its initial state
function resetLoginLoader(th){
	$(th).parent('ul').children().each(function () {
		$(this).removeAttr('class', 'login-selected');
	});
	$(th).removeClass("login-selected");
	$("div.login-wrapper div.login-invited").removeAttr('id');
	$("div.login-wrapper div.login-new").removeAttr('id');
	$("div.login-wrapper div.login-reg").css("display", "none");
	$("#login-content form").css("display", "none");
	$("#login-content div.login-intro h1").text("");
	$("#login-content div.login-intro h2").html("Welcome to the DSS Platform! <br/><br/> Please select the DSS System (on your left) to logon!");
	$("#login-content div.login-intro img").attr("src","img/cces.png");
	$('#login-content form').removeAttr('id');
}

// This function is for creating cases list items on the main screen
function newCaseItem(caseid, imglink, title, desc, datetime){
	var tempLi = $('<li><img src="'+imglink+'"/><h2>'+title+'</h2><p>'+desc +'\n'+ datetime+'</p></li>');
	tempLi.attr('id', 'cces-case-'+caseid);
	$("div.main-cases-wrapper ul").append(tempLi);
}

// This function is for creating scenario list items on the main screen
function newScenarioItem(scenariotitle, caseid, scenarioid){
	var tempLi = $('<li>'+scenariotitle+'</li>');
	tempLi.attr('id', caseid+'-'+scenarioid);
	$(".main-selected-case-right ul").append(tempLi);
}

// This function is to populate the database DVs header
function fillDatabaseDvsHeader(catgid, catgname){
	$("#sim-dv-db-content-block-header ul").append('<li id="'+catgid+'">'+catgname+'</li>');
	$('#sim-dv-db-content-block-content').append('<section id="'+catgid+'-h"><h4>'+catgname+'</h4><ul></ul></section>');
}

// This function is to populate the database DVs
function fillDatabaseDvs(catgid, dvid, dvname, dvimg){
	$('section#'+catgid+'-h ul').append('<li id="'+dvid+'"><img src="'+dvimg+'"  /><p>'+dvname+'</p></li>');
}

// This function is to add selected database DVs to MY DVs
function addDbDvToMyDv(selectedcatgname, selecteddvid, selecteddvname, selecteddvimg){	
	var mycatgid = "dv-my-catg-"+selectedcatgname.toLowerCase();
	var mydvid = selecteddvid//"dv-my-dv-"+selecteddvname.toLowerCase().split(' ').join('-');
	
	if($('#sim-dv-my-content-list section#'+mycatgid).length == 0){
		$('#sim-dv-my-content-list').append('<section id="'+mycatgid+'"><h4>'+selectedcatgname+'</h4><ul></ul></section>');
	}
	
	$('#sim-dv-my-content-list section#'+mycatgid+' ul').not('.sim-subicon').append('<li id="'+mydvid+'" class="beutify-temp"><span> > </span><img src="'+selecteddvimg+'"/><p>'+selecteddvname+'</p><ul class="sim-subicon"><li class="delete-icon">add</li><li class="show-icon">hide</li><li class="imprtnt-icon">imprt</li></ul></li>');
}

// This function is to add selected DVs to KPIs
function addMyDvToKPIs(selectedcatgname, selecteddvid, selecteddvname, selecteddvimg){	
	var mycatgid = "kpi-catg-"+selectedcatgname.toLowerCase();
	var mydvid = selecteddvid//"dv-my-dv-"+selecteddvname.toLowerCase().split(' ').join('-');
	
	if($('#sim-kpi-left-content-list section#'+mycatgid).length == 0){
		$('#sim-kpi-left-content-list').append('<section id="'+mycatgid+'"><h4>'+selectedcatgname+'</h4><ul></ul></section>');
	}
	
	$('#sim-kpi-left-content-list section#'+mycatgid+' ul').not('.sim-subicon').append('<li id="'+mydvid+'" class="beutify-temp"><img src="'+selecteddvimg+'"/><p>'+selecteddvname+'</p><ul class="sim-subicon"><li class="delete-icon">add</li><li class="show-icon">hide</li><li class="imprtnt-icon">imprt</li></ul></li>');
}



// Clear content when closing database DVs description
function clearDescriptionContent(selectedItem){

	if($("#sim-dv-db-content-block-content section ul li").is('.sim-view-block-content-selected')){
		$("#sim-dv-db-content-block-content section ul li").removeClass("sim-view-block-content-selected")
	}
	
	$('div.desc-content-add input').removeAttr('id');
	$('div.desc-content-attr').removeAttr('id');
	$('div.desc-content-attr ul li').remove();
	$('div.desc-content-info').removeAttr('id');
}


// add graphs for dv added
function addPlotToKPIs(dvid, myDvVal){
	var mydvid = dvid.substring(0,dvid.length-2)
	$('#sim-kpi-content-right').append('<div id="'+mydvid+'-p" class="sim-kpi-vis"><div class="sim-kpi-vis-header sim-window-header"><h2>'+myDvVal+'</h2><ul class="sim-window-header-icon"><li class="min-icon">min</li><li class="grid-view-icon">grid</li></ul></div><div id="'+mydvid+'-vis" class="sim-kpi-vis-content"></div><div/>');
	
	chartppList.push(new google.visualization.LineChart(document.getElementById(mydvid+'-vis')));
	 
	datappList.push(google.visualization.arrayToDataTable([
          ['Year', myDvVal],
          ['1940',  0],
          
        ]));
	
	
	variables.push(dvListVal[dvList.indexOf(myDvVal)]);
	
	plotD3js(mydvid, myDvVal, mydvid);

}



// remove data from chart array
function removeDvFromMyDv(selectedDvId){
	var myIndex = $('#'+selectedDvId+'-l').index()
	
	$('#'+selectedDvId+'-p').remove();
	$('#'+selectedDvId+'-l').remove();
	$('#'+selectedDvId+'-k').remove();
	
	chartppList.splice(myIndex, 1);
	datappList.splice(myIndex, 1);
	variables.splice(myIndex, 1);
}


//Set the main size
function initializeSize(){
	var rightMainPanelWidth = browserWidth - $(".main-system").width() - 4;//240;
	var rightMainPanelWidthPercent = (rightMainPanelWidth/browserWidth)*100;
	$('.main-user').css('width', rightMainPanelWidthPercent+'%');
}
















