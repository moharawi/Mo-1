var xmlDoc;
var dsalObjectArray = [];
    
      
//$(document).ready(function(){
// id,projectName,country,town,latitude,longitude,scope,technology,capacity,feedWater,offTaker,units,contractDate,onlineDate,status,contractScope,estimatedEPCcost,epcContracto1,epcContractor2
/*
function loadxml(){
    if (window.ActiveXObject){
		xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async=false; //Enforce download of XML file first. IE only.
	}
	else if (document.implementation && document.implementation.createDocument)
		xmlDoc= document.implementation.createDocument("","doc",null);
		if (typeof xmlDoc!="undefined")
		xmlDoc.load("./../ajax/SAWR2.xml");
}  
*/
//function loadFileToElement(filename)
//{
/*
    var xmlHTTP = new XMLHttpRequest();
    try
    {
    xmlHTTP.open("GET", "SAWR.xml", false);
    xmlHTTP.send(null);
    }
    catch (e) {
        window.alert("Unable to load the requested file.");
        return;
    }

    document.getElementById(elementId).innerHTML=xmlHTTP.responseText;
//}
*/

function dsalWaterObject(id,projectName,country,town,latitude,longitude,scope,technology,capacity,feedWater,offTaker,units,contractDate,onlineDate,status,contractScope,estimatedEPCcost,epcContracto1,epcContractor2)
{
	this.id = id;
	this.projectName = projectName;
	this.country = country;
	this.town = town;
	this.latitude = latitude;
	
	this.longitude = longitude;
	this.scope = scope;
	this.technology = technology;
	this.capacity = capacity;
	this.feedWater = feedWater;
	
	this.offTaker = offTaker;
	this.units = units;
	this.contractDate = contractDate;
	this.onlineDate = onlineDate;
	this.status = status;
	
	this.contractScope = contractScope;
	this.estimatedEPCcost = estimatedEPCcost;
	this.epcContracto1 = epcContracto1;
	this.epcContractor2 = epcContractor2;
}



//$(document).load('ajax/SAWR2.xml', function() {
//  alert('Load was performed.');
//});


/*

$.ajax({
	type: "Get",
	url: "http://localhost:8888/SAWR.xml",
	dataType: "xml",
	success: function(xml) {*/
//	function readXML()
//    {
//    alert("I'm in 2 first")
//	 alert(dsalObjectArray.length);
	 //if(xmlDoc.readyState == 4)
     //  {
		//$(document).ready(function(){
		//alert($(xmlDat).find('row').length)
		var local_i = 0;
		$(xmlDatLarge).find('row').each(function(){
			
			var chkID = $(this).find('Id').text()
			var chkLat = $(this).find('Latitude').text()
			var chkLong = $(this).find('Longitude').text()
			//if(chkLat == ''){latitude1 = 0}else{latitude1 = chkLat}
			//if(chkLong == ''){longitude1 = 0}else{longitude1 = chkLong}
			
			if(chkLat != '' || chkLong != ''){
			
			var id1 = parseInt($(this).find('Id').text());
			var projectName1 = $(this).find('Project_Name').text();
			var country1 = $(this).find('Country').text();
			var town1 = $(this).find('Town').text();
			var latitude1 = parseFloat($(this).find('Latitude').text());
			
			var longitude1 = parseFloat($(this).find('Longitude').text());
			var scope1 = $(this).find('Scope').text();
			var technology1 = $(this).find('Technology').text();
			var capacity1 = parseFloat($(this).find('Capacity').text());
			var feedWater1 = $(this).find('Feed_water').text();
			
			var offTaker1 = $(this).find('Offtaker').text();
			var units1 = parseFloat($(this).find('Units').text());
			var contractDate1 = parseInt($(this).find('Contract_date').text());
			var onlineDate1 = parseInt($(this).find('Online_date').text());
			var status1 = $(this).find('Status').text();
			
			var contractScope1 = $(this).find('Contract_scope').text();
			var estimatedEPCcost1 = parseFloat($(this).find('Estimated_EPC_cost').text());
			var epcContracto11 = $(this).find('EPC_Contractor_desal_1').text();
			var epcContractor21 = $(this).find('EPC_Contractor_desal_2').text();
			//if(local_i == 462){alert()}
			dsalObjectArray.push(new dsalWaterObject(id1,projectName1,country1,town1,latitude1,longitude1,scope1,technology1,capacity1,feedWater1,offTaker1,units1,contractDate1,onlineDate1,status1,contractScope1,estimatedEPCcost1,epcContracto11,epcContractor21))
			//local_i++;
			}
			//local_i++;
			
			});
		//});
		//alert("done!")
	//} else{
	//alert("Error")
	//}
//}//,
//	error: function(){
		//$(dsalObjectArray).each(function(e){
			//alert(dsalObjectArray.length)
		
		//});
//	}



//});*/
