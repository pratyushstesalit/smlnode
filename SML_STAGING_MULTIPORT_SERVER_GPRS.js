require('events').EventEmitter.prototype._maxListeners = 100;
var net = require('net');
var moment = require("moment");
var path = require('path'); 
var fs = require('fs');
const cluster = require('cluster');
var rn = require('random-number');
/* var options = {
  min:  6975
, max:  6984
, integer: true
}  */
//for staging server
var optionssteg = {
  min:  6971
, max:  6975
, integer: true
} 
//Set this before calling other cluster function
//cluster.schedulingPolicy = cluster.SCHED_RR;
const numCPUs = 5;
var HOST = '45.114.141.29';
//var HOST = '127.0.0.1';


//Database Connection
var pgp = require('pg-promise')();
//var conString = "pg://postgres:sil123@127.0.0.1:5432/smlidb";
var conString = "pg://postgres:sil123@127.0.0.1:5432/smlidb";
var db = pgp(conString);

//var aj = require('array-json-transform');
var splitLines = require('split-lines');

//Array for instant message

var instmsg = {};
var msgObj = {};

var localremortData = new Object();
// this function called to create vtuid-vehicleid mapping
localRemortportMap();
var lclrmtarr = {};


if (cluster.isMaster) {
		
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
	console.log('Cluster forked.');
  }


  cluster.on('online', function(worker) {
        console.log('Worker for Second Server ' + worker.process.pid + ' is online');
    });
	
  cluster.on('exit', function(worker, code, signal) {
    console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
  });
  
  cluster.on('listening', function(worker, address) {
	  //console.log('A worker is now connected to '+ address.address + ':'+address.port);
	});

} else if (cluster.isWorker) {
	 
	   //net.createServer(processdata).listen(8200, HOST);// for test
	   //net.createServer(processdata).listen(8149, HOST);// for test
       net.createServer(processdata).listen(8100, HOST);
	   net.createServer(processdata).listen(8101, HOST);  
       net.createServer(processdata).listen(8102, HOST);
	   net.createServer(processdata).listen(8103, HOST);
	   net.createServer(processdata).listen(8104, HOST);
	   net.createServer(processdata).listen(8105, HOST); 
	   net.createServer(processdata).listen(8106, HOST);  
       net.createServer(processdata).listen(8107, HOST); 
	   net.createServer(processdata).listen(8108, HOST);
	   net.createServer(processdata).listen(8109, HOST);
	   net.createServer(processdata).listen(8110, HOST);
	   net.createServer(processdata).listen(8111, HOST);  
       net.createServer(processdata).listen(8112, HOST);
	   net.createServer(processdata).listen(8113, HOST);
	   net.createServer(processdata).listen(8114, HOST); 
	   net.createServer(processdata).listen(8115, HOST);
	   net.createServer(processdata).listen(8116, HOST);
	   net.createServer(processdata).listen(8117, HOST);
	   net.createServer(processdata).listen(8118, HOST); 
	   net.createServer(processdata).listen(8119, HOST);
	   net.createServer(processdata).listen(8120, HOST);
	   net.createServer(processdata).listen(8121, HOST);
	   net.createServer(processdata).listen(8122, HOST);  
       net.createServer(processdata).listen(8123, HOST);
	   net.createServer(processdata).listen(8124, HOST);
	   net.createServer(processdata).listen(8125, HOST);
	   net.createServer(processdata).listen(8126, HOST); 
	   net.createServer(processdata).listen(8127, HOST);  
       net.createServer(processdata).listen(8128, HOST); 
	   net.createServer(processdata).listen(8129, HOST);
	   net.createServer(processdata).listen(8130, HOST);
	   net.createServer(processdata).listen(8131, HOST);
	   net.createServer(processdata).listen(8132, HOST);  
       net.createServer(processdata).listen(8133, HOST);
	   net.createServer(processdata).listen(8134, HOST);
	   net.createServer(processdata).listen(8135, HOST); 
	   net.createServer(processdata).listen(8136, HOST);
	   net.createServer(processdata).listen(8137, HOST);//No data is coming
	   net.createServer(processdata).listen(8138, HOST);
	   net.createServer(processdata).listen(8139, HOST);
       net.createServer(processdata).listen(8140, HOST);//End for Bilaspur
	   net.createServer(processdata).listen(8141, HOST);//Start of DURG
	   net.createServer(processdata).listen(8142, HOST);
	   net.createServer(processdata).listen(8143, HOST);
	   net.createServer(processdata).listen(8144, HOST);
	   net.createServer(processdata).listen(8145, HOST);
	   net.createServer(processdata).listen(8146, HOST);
	   net.createServer(processdata).listen(8147, HOST);
	   net.createServer(processdata).listen(8148, HOST);
	   net.createServer(processdata).listen(8149, HOST);
	   net.createServer(processdata).listen(8150, HOST);
	   net.createServer(processdata).listen(8151, HOST);
	   net.createServer(processdata).listen(8152, HOST);
	   net.createServer(processdata).listen(8153, HOST);
	   net.createServer(processdata).listen(8154, HOST);
	   net.createServer(processdata).listen(8155, HOST);
	   net.createServer(processdata).listen(8156, HOST);
	   net.createServer(processdata).listen(8157, HOST);
	   net.createServer(processdata).listen(8158, HOST);
	   net.createServer(processdata).listen(8159, HOST);
	   net.createServer(processdata).listen(8160, HOST);
	   net.createServer(processdata).listen(8161, HOST);
	   net.createServer(processdata).listen(8162, HOST);
	   net.createServer(processdata).listen(8163, HOST);
	   net.createServer(processdata).listen(8164, HOST);
	   net.createServer(processdata).listen(8165, HOST);
	   net.createServer(processdata).listen(8166, HOST);
	   net.createServer(processdata).listen(8167, HOST);
	   net.createServer(processdata).listen(8168, HOST);
	   net.createServer(processdata).listen(8169, HOST);
	   net.createServer(processdata).listen(8170, HOST);
	   net.createServer(processdata).listen(8171, HOST);
	   net.createServer(processdata).listen(8172, HOST);
	   net.createServer(processdata).listen(8173, HOST);
	   net.createServer(processdata).listen(8174, HOST);
	   net.createServer(processdata).listen(8175, HOST);  
	   net.createServer(processdata).listen(8176, HOST); 
	   net.createServer(processdata).listen(8177, HOST); 
	   net.createServer(processdata).listen(8178, HOST); 
	   net.createServer(processdata).listen(8179, HOST);
	   
	   
	   
	   //8180-8200
	    
	   net.createServer(processdata).listen(8180, HOST);
	   net.createServer(processdata).listen(8181, HOST);
	   net.createServer(processdata).listen(8182, HOST);
	   net.createServer(processdata).listen(8183, HOST);
	   net.createServer(processdata).listen(8184, HOST);
	   net.createServer(processdata).listen(8185, HOST);
	   net.createServer(processdata).listen(8186, HOST);
	   net.createServer(processdata).listen(8187, HOST);
	   net.createServer(processdata).listen(8188, HOST);
	   net.createServer(processdata).listen(8189, HOST);
	   net.createServer(processdata).listen(8190, HOST);
	   net.createServer(processdata).listen(8191, HOST);
	   net.createServer(processdata).listen(8192, HOST);
	   net.createServer(processdata).listen(8193, HOST);
	   net.createServer(processdata).listen(8194, HOST);
	   net.createServer(processdata).listen(8195, HOST);
	   net.createServer(processdata).listen(8196, HOST);
	   net.createServer(processdata).listen(8197, HOST);
	   net.createServer(processdata).listen(8198, HOST);
	   net.createServer(processdata).listen(8199, HOST);
	   
	   net.createServer(processdata).listen(8200, HOST);// Port used for instant messaging
	   //8201 - 8240   Ambikapur
	   
	   net.createServer(processdata).listen(8201, HOST);  
       net.createServer(processdata).listen(8202, HOST);
	   net.createServer(processdata).listen(8203, HOST);
	   net.createServer(processdata).listen(8204, HOST);
	   net.createServer(processdata).listen(8205, HOST); 
	   net.createServer(processdata).listen(8206, HOST);  
       net.createServer(processdata).listen(8207, HOST); 
	   net.createServer(processdata).listen(8208, HOST);
	   net.createServer(processdata).listen(8209, HOST);
	   net.createServer(processdata).listen(8210, HOST);
	   net.createServer(processdata).listen(8211, HOST);  
       net.createServer(processdata).listen(8212, HOST);
	   net.createServer(processdata).listen(8213, HOST);
	   net.createServer(processdata).listen(8214, HOST); 
	   net.createServer(processdata).listen(8215, HOST);
	   net.createServer(processdata).listen(8216, HOST);
	   net.createServer(processdata).listen(8217, HOST);
	   net.createServer(processdata).listen(8218, HOST); 
	   net.createServer(processdata).listen(8219, HOST);
	   net.createServer(processdata).listen(8220, HOST);
	   net.createServer(processdata).listen(8221, HOST);
	   net.createServer(processdata).listen(8222, HOST);  
       net.createServer(processdata).listen(8223, HOST);
	   net.createServer(processdata).listen(8224, HOST);
	   net.createServer(processdata).listen(8225, HOST);
	   net.createServer(processdata).listen(8226, HOST); 
	   net.createServer(processdata).listen(8227, HOST);  
       net.createServer(processdata).listen(8228, HOST); 
	   net.createServer(processdata).listen(8229, HOST);
	   net.createServer(processdata).listen(8230, HOST);
	   net.createServer(processdata).listen(8231, HOST);
	   net.createServer(processdata).listen(8232, HOST);  
       net.createServer(processdata).listen(8233, HOST);
	   net.createServer(processdata).listen(8234, HOST);
	   net.createServer(processdata).listen(8235, HOST); 
	   net.createServer(processdata).listen(8236, HOST);
	   net.createServer(processdata).listen(8237, HOST);
	   net.createServer(processdata).listen(8238, HOST);
	   net.createServer(processdata).listen(8239, HOST);
       net.createServer(processdata).listen(8240, HOST); 
	   
	   net.createServer(processdata).listen(8241, HOST);//Start of Khairagarh
	   net.createServer(processdata).listen(8242, HOST);
	   net.createServer(processdata).listen(8243, HOST);
	   net.createServer(processdata).listen(8244, HOST);
	   net.createServer(processdata).listen(8245, HOST);
	   net.createServer(processdata).listen(8246, HOST);
	   net.createServer(processdata).listen(8247, HOST);
	   net.createServer(processdata).listen(8248, HOST);
	   net.createServer(processdata).listen(8249, HOST);
	   net.createServer(processdata).listen(8250, HOST);
	   net.createServer(processdata).listen(8251, HOST);
	   net.createServer(processdata).listen(8252, HOST);
	   net.createServer(processdata).listen(8253, HOST);
	   net.createServer(processdata).listen(8254, HOST);
	   net.createServer(processdata).listen(8255, HOST);
	   net.createServer(processdata).listen(8256, HOST);
	   net.createServer(processdata).listen(8257, HOST);
	   net.createServer(processdata).listen(8258, HOST);
	   net.createServer(processdata).listen(8259, HOST);
	   net.createServer(processdata).listen(8260, HOST);
	   net.createServer(processdata).listen(8261, HOST);
	   net.createServer(processdata).listen(8262, HOST);
	   net.createServer(processdata).listen(8263, HOST);
	   net.createServer(processdata).listen(8264, HOST);
	   net.createServer(processdata).listen(8265, HOST);
	   net.createServer(processdata).listen(8266, HOST);
	   net.createServer(processdata).listen(8267, HOST);
	   net.createServer(processdata).listen(8268, HOST);
	   net.createServer(processdata).listen(8269, HOST);
	   net.createServer(processdata).listen(8270, HOST);
	   net.createServer(processdata).listen(8271, HOST);
	   net.createServer(processdata).listen(8272, HOST);
	   net.createServer(processdata).listen(8273, HOST);
	   net.createServer(processdata).listen(8274, HOST);
	   net.createServer(processdata).listen(8275, HOST);
	   net.createServer(processdata).listen(8276, HOST); 
	   net.createServer(processdata).listen(8277, HOST); 
	   net.createServer(processdata).listen(8278, HOST); 
	   net.createServer(processdata).listen(8279, HOST);
	   net.createServer(processdata).listen(8280, HOST);
	   net.createServer(processdata).listen(8281, HOST);
	   net.createServer(processdata).listen(8282, HOST);
	   net.createServer(processdata).listen(8283, HOST);
	   net.createServer(processdata).listen(8284, HOST);
	   net.createServer(processdata).listen(8285, HOST);
	   net.createServer(processdata).listen(8286, HOST);
	   net.createServer(processdata).listen(8287, HOST);
	   net.createServer(processdata).listen(8288, HOST);
	   net.createServer(processdata).listen(8289, HOST);
	   net.createServer(processdata).listen(8290, HOST);
	   net.createServer(processdata).listen(8291, HOST);
	   net.createServer(processdata).listen(8292, HOST);
	   net.createServer(processdata).listen(8293, HOST);
	   net.createServer(processdata).listen(8294, HOST);
	   net.createServer(processdata).listen(8295, HOST);
	   net.createServer(processdata).listen(8296, HOST);
	   net.createServer(processdata).listen(8297, HOST);
	   net.createServer(processdata).listen(8298, HOST);
	   net.createServer(processdata).listen(8299, HOST);
	   
	   
	   //port 8300 - 8330
	   net.createServer(processdata).listen(8300, HOST); 
	   net.createServer(processdata).listen(8301, HOST);  
       net.createServer(processdata).listen(8302, HOST);
	   net.createServer(processdata).listen(8303, HOST);
	   net.createServer(processdata).listen(8304, HOST);
	   net.createServer(processdata).listen(8305, HOST); 
	   net.createServer(processdata).listen(8306, HOST);  
       net.createServer(processdata).listen(8307, HOST); 
	   net.createServer(processdata).listen(8308, HOST);
	   net.createServer(processdata).listen(8309, HOST);
	   net.createServer(processdata).listen(8310, HOST);
	   net.createServer(processdata).listen(8311, HOST);  
       net.createServer(processdata).listen(8312, HOST);
	   net.createServer(processdata).listen(8313, HOST);
	   net.createServer(processdata).listen(8314, HOST); 
	   net.createServer(processdata).listen(8315, HOST);
	   net.createServer(processdata).listen(8316, HOST);
	   net.createServer(processdata).listen(8317, HOST);
	   net.createServer(processdata).listen(8318, HOST); 
	   net.createServer(processdata).listen(8319, HOST);
	   net.createServer(processdata).listen(8320, HOST);
	   net.createServer(processdata).listen(8321, HOST);
	   net.createServer(processdata).listen(8322, HOST);  
       net.createServer(processdata).listen(8323, HOST);
	   net.createServer(processdata).listen(8324, HOST);
	   net.createServer(processdata).listen(8325, HOST);
	   net.createServer(processdata).listen(8326, HOST); 
	   net.createServer(processdata).listen(8327, HOST);  
       net.createServer(processdata).listen(8328, HOST); 
	   net.createServer(processdata).listen(8329, HOST);
	   net.createServer(processdata).listen(8330, HOST);  
	   
  function processdata(connection) {
	   var SCUID = 0;
       var clientIP = 0;
	   var clientPort = 0;
	   var localport1 = 0;
	   var vehObj = {};
	   //var msgObj = {};
	   var vehicleInformation = 0;
	   console.log('client connected');
	   	      
	   connection.on('close', function() {
		  console.log('client closed');
	   });
	    connection.on('data', function(data) {
			console.log("------------------------------------------------------------------------------");	
			console.log('CONNECTED TO CLIENT:\r\n IP: ' + clientIP +'  PORT: '+ clientPort +'  Local Port:: '+ connection.localPort + "  Proc: " + process.pid +"\n");
			//console.log(data.toString('utf-8'));
			//logData(data); // log the data in data file
			 console.log("This is RAW Data Just Printed: " +  data.toString('utf-8'));
			 var data3 = data.toString('utf-8');			
		     var currentdate = moment().format('YYYY-MM-DD');
		     var currenttime = new moment ().format("HH:mm:ss");
			 console.log('CURRENT DATE:  ' + currentdate + '  CURRENT TIME:  ' + currenttime +"\n");
			 var timedate = 'CURRENT DATE:  ' + currentdate + '  CURRENT TIME:  ' + currenttime + '\r\n';;
             
			 clientIP = connection.remoteAddress;
		     clientPort = connection.remotePort;
		     clientPort = clientPort.toString();
			 localport1 = (connection.localPort).toString();
			 //console.log(localport1);
			 //logData1(timedate,localport1);
			if (localport1 != 8200){
				
				console.log('IF BLOCK: ' + localport1);
				var firstChar = data3.charAt(0);
				 if(firstChar == '{'){
					 var data1 = splitLines(data3);
					 //console.log("data1 length inside if block:::" + data1.length);
					 for(var i = 0 ; i < data1.length - 1;  i++ ){
						try {
							var data2 = 0;
							data2 = JSON.parse(data1[i]);
							//console.log("DATA IN TRY BLOCK :: " + data1[i] );
							 } catch (e) {
								//return false;
							}
						 
						 if(typeof(data2.vehicle_identification) !== 'undefined'){
							 
							SCUID = data2.vehicle_identification.id;
							if(SCUID == '1'){
								//console.log('The SCUID is '+ SCUID);
								SCUID = getScuid(localport1);
								console.log('The SCUID: '+ SCUID+ '  Local Port: '+ localport1);
							}
							console.log("This SCU ID: "+ SCUID);
							if(typeof SCUID != 'undefined') {
								 vehicleInformation = "VHINF" + "," + SCUID + "," + clientIP + "," + clientPort;
								 //console.log("SCUID: " +SCUID +"\r\n");
								 //add SCUID for Broadcasting Msg  //sample:: {"inner_sign_message":"HAPPY DIWALE"}
								 //instmsg[SCUID] = ({"SCUID":SCUID,"PORT":localport1,"MSG": 0,"MSGTIME": 0,"MSGDATE": 0});
								 //console.log(instmsg);
								 //creating json object for vehicle information
								 var scuidparam = "SCUID";
								 var scuidvalue = SCUID;
								 var ipparam = "rec_ip";
								 var ipvalue = clientIP;
								 var portparam = "rec_port";
								 var portvalue = clientPort;
								 vehObj[scuidparam] = scuidvalue;
								 vehObj[ipparam] = ipvalue;
								 vehObj[portparam] = portvalue;
								 //var JsonObject = JSON.stringify(JSON.parse(vehObj));
								 //console.log(vehObj);
							}
						 }else{
							 if(Object.keys(vehObj).length != 0){
								 console.log("VEHICLE INFORMATION IN IF BLOCK");
								 console.log("------------------------------------------------------------------------------");
								 console.log('CURRENT DATE:  ' + currentdate + '  CURRENT TIME:  ' + currenttime +"\n");
								 console.log('CONNECTED TO CLIENT:\r\n IP: ' + clientIP +'  PORT: '+ clientPort +'  Local Port:: '+ connection.localPort +'  SCUID:  '+ SCUID +"\n");
								 //Create and Write MESSAGE
								 var finalmsg = 0 ;
								 if(typeof instmsg[SCUID] != 'undefined') {
								 //var finalmsg = generatebdMsg(SCUID);
									 if(SCUID == instmsg[SCUID].SCUID && instmsg[SCUID].MSG != 0){
											//console.log("MESSAGE VERIFICATION");
											//console.log(instmsg[SCUID].MSG );
											var msgparam = "inner_sign_message";
											var msgvalue = instmsg[SCUID].MSG;
											msgObj[msgparam] = msgvalue;
											finalmsg = JSON.stringify(msgObj);
											console.log("FINAL MESSAGE: " + finalmsg);
											var msg = finalmsg.toString();
											//connection.write(msg+"\n");
											console.log("BROADCAST THE MESSAGE SUCCESSFULLY.");
											setTimeout(function() {
												 var msgvalue1 = "NO SMOKING        WELCOME TO CITY BUS SERVICES";
												 msgObj[msgparam] = msgvalue1;
												 finalmsg = JSON.stringify(msgObj);
												 var msg = finalmsg.toString();
												 console.log("FINAL MESSAGE: " + msg);
												 //connection.write(msg+"\n");
											}, 15000); 
											instmsg[SCUID].MSG = 0;
											instmsg[SCUID].MSGTIME = 0;
											instmsg[SCUID].MSGDATE = 0;
											console.log(instmsg);							  										
										}
								 
								 }
								 var rcvddata1 = JSON.stringify(data2);
								 rcvddata1 = rcvddata1.slice(2,5);
								 //console.log('SPLIT DATA ' + rcvddata1);
								  //console.log(data2);
								 if(rcvddata1 == 'gps'){
									 
									console.log('GPRS DATA:');
									//console.log(data2);
									prepareSMLdata(data2,vehObj,localport1,SCUID,clientIP,clientPort);
									
								 }else{
									 
									console.log('VHMD DATA:');
									//console.log(data2);
									//prepareSMLdata(data2,vehObj,localport1,SCUID,clientIP,clientPort);
								 }
								 
							 }else{
								 console.log("NO VEHICLE INFORMATION. ");
							 }
						 }
					}
					 
				}else{//for normal Data format
					if(vehicleInformation != 0){
						//console.log("VEHICLE INFORMATION. " + vehicleInformation + "\r\n");
						console.log('CONNECTED TO CLIENT:\r\n IP: ' + clientIP +'  PORT: '+ clientPort +'  Local Port:: '+ connection.localPort +'  SCUID:  '+ SCUID +"\n");
						var sendNormalData = data3 + ',' + vehicleInformation;
						prepareNORMALdata(data3,sendNormalData,localport1,SCUID,clientIP,clientPort);
						
					}else{
						logData1(data3,localport1);
						console.log("NO VEHICLE INFORMATION");
						connection.end();
					}
			    }//End for normal data
				
			}else{
				//console.log('ELSE BLOCK: ' + localport1);
				var msgdata = JSON.parse(data3);
				if(typeof(msgdata.SCUNOS) !== 'undefined'){
					connection.end();
					var scunos = msgdata.SCUNOS;
					var advmsg = msgdata.MSG;
					advmsg = advmsg.toString();
					scunos = scunos.split(',');
					//console.log('length: ' + scunos.length);
					for(var m = 0; m < scunos.length; m++){
						
						var vtunomsg = scunos[m].toString();
						//console.log('SCUNO:  ' + scunos[m]);
						updateInsmsgforAdv(advmsg,vtunomsg);
					}
				}
			}
	  });//Main Data Connection
	    connection.on('error', function (exc) {
				//console.log("ignoring exception: " + exc);
				//console.log("exception: " + exc.stack);
				console.log("CLIENT NOT CONNECTED PROPERLY");
	   });
	   
	   connection.on('end', function (exc) {
				console.log("Client Socket connection terminited.");
	   });
  }

  process.on('message', function(msg) {
  console.log(msg);
    if(msg === 'shutdown') {
      // initiate graceful close of any connections to server
    }
  });
  // for uncaught exception
  /* process.on('uncaughtException', function (err) {
	//console.log(err);
    console.log('CONNECTION REFUSED');
  });   */
}

//=====================================================================END OF MAIN PROGRAMME=================================================================

function prepareSMLdata(data2,vehObj,localport1,SCUID,clientIP,clientPort){
	//console.log('INSIDE SML DATA PREPARATION.');
	//console.log(data2);
	var rawdata = JSON.stringify(data2);
	var currentdate = moment().format('YYYY-MM-DD');
	var currenttime = new moment ().format("HH:mm:ss");
	var scuno = SCUID;
	var cip = clientIP;
	var cpt = clientPort;
	//console.log('IP: ' + cip +'  PORT: '+ cpt +'  SCUID:  '+ scuno +"\n");
	var jsonObject = {};
	var receivedData = [];
	jsonObject = data2;
	var veh_identification = "vehicle_information";
	jsonObject[veh_identification] = vehObj;
	var finalObject = JSON.stringify(jsonObject);
	//console.log(finalObject);
	var rcvdData = finalObject.toString();
	var randomPort = lclrmtarr[localport1].RMPORT;
	randomPort = randomPort.toString();
	//console.log(lclrmtarr[localport1]);
	//console.log('REMOTE PORT FOR SDC SERVER:  '+ randomPort);
	receivedData = sendToSMLSDCServers(finalObject,randomPort);
	//Send Data to SML Main Server
	//receivedData = sendToSMLServer(finalObject);
	var randomPortSteg = rn(optionssteg);
	randomPortSteg = randomPortSteg.toString();
	//console.log('REMOTE PORT FOR STAGING SERVER:  '+ randomPortSteg);
	sendToSMLStegServers(finalObject,randomPortSteg);					 
	//sendtoStagingServer(finalObject);
	//console.log(receivedData);
	db.query("SELECT smlidataid FROM sml.smliscudatafunctionlocal ($1,$2, $3, $4, $5, $6, $7,$8,$9,$10,$11,$12)",[scuno,rawdata,currentdate,currenttime,cip,cpt,rcvdData,receivedData['trnsdate'],receivedData['trnstime'],receivedData['trnstoip'],receivedData['trnstoport'],localport1])
	.then(function (smldata) {
		var smlidataId = smldata[0].smlidataid;
		console.log('SML JSON DATA SEND TO SDC SINGLE PORT SERVER: ' + smlidataId);
		
	})
	.catch(function (error) {
		   console.log(error); // display the error; 
	});
	
}

function prepareNORMALdata(data2,sendNormalData,localport1,SCUID,clientIP,clientPort){
	
	//console.log('INSIDE SML NORMAL DATA PREPARATION.');
	var currentdate = moment().format('YYYY-MM-DD');
	var currenttime = new moment ().format("HH:mm:ss");
	var scuno = SCUID;
	var cip = clientIP;
	var cpt = clientPort;
	//console.log('IP: ' + cip +'  PORT: '+ cpt +'  SCUID:  '+ scuno +"\n");
	var finalData = [sendNormalData];					 
	//console.log(" \r\nFINAL DATA  " + data2 + "\r\n");
	//Send Data to SDC SML Server
	//generate random port
	var randomPort = lclrmtarr[localport1].RMPORT;
	randomPort = randomPort.toString();
	//console.log('REMOTE PORT FOR SDC SERVER:  '+ randomPort);
	var receivedData = sendToSMLSDCServers(finalData,randomPort);
	//Send Data to STAGING SML Server
	//var receivedData = sendToSMLServer(finalData);
	var randomPortSteg = rn(optionssteg);
	randomPortSteg = randomPortSteg.toString();
	//console.log('REMOTE PORT FOR STAGING SERVER:  '+ randomPortSteg);
	sendToSMLStegServers(finalData,randomPortSteg);
	//sendtoStagingServer(finalData);
	//console.log(receivedData);
	db.query("SELECT smlidataid FROM sml.smliscudatafunctionlocal ($1,$2, $3, $4, $5, $6, $7,$8,$9,$10,$11,$12)",[scuno,data2,currentdate,currenttime,cip,cpt,sendNormalData,receivedData['trnsdate'],receivedData['trnstime'],receivedData['trnstoip'],receivedData['trnstoport'],localport1])
	.then(function (smldata) {
		var smlidataId = smldata[0].smlidataid;
		console.log('SML NORMAL DATA SEND TO SDC SINGLE PORT SERVER: ' + smlidataId);
				
	})
	.catch(function (error) {
		console.log(error); // display the error; 
	});
}

/* 
Definition: 	Function to send data to SML Server
Parameters: 	RawData with Vehicle information
Author:		    Manoj
Date:		    11-08-2016 
*/
function sendToSMLServer(finalData) {
	    // STAGING SERVER
		//var trnstoip = '103.233.79.35';
	    //var trnstoport = 6998;
		//for SDC SERVER
		var trnstoport = 6975;
		var trnstoip = '103.51.8.36';// for SUDA
        //var trnstoip = '127.0.0.1';
		var trnsdate = 0;
        var trnstime = 0;
        var sendData = [];
		sendData['trnstoip'] = trnstoip;
        sendData['trnstoport'] = trnstoport.toString();		
		var client1 = new net.Socket();
		var finalSMLData = finalData.toString();
		
	client1.connect(trnstoport, trnstoip, function() {
		console.log('CONNECTED TO: ' + trnstoip + ':' + trnstoport);
		client1.write(finalSMLData);
		trnsdate = moment().format('YYYY-MM-DD');
		trnstime = new moment ().format("HH:mm:ss");
	});
	client1.on('data', function(data) {    
		console.log('DATA: ' + data);
		//Close the client socket completely
		client1.destroy();		
	}); 
	client1.on('close', function() {
	console.log('Connection closed'); 
    }); 
   console.log("\r\nDATA SEND TO SML SDC SERVER :: " + finalSMLData + "\r\n");
   trnsdate = moment().format('YYYY-MM-DD');
   trnstime = new moment ().format("HH:mm:ss");
   sendData['trnsdate'] = trnsdate;
   sendData['trnstime'] = trnstime;
   return sendData;
}

/* 
Definition: 	Function to send data to SML Server
Parameters: 	RawData with Vehicle information,assigned port
Author:		    Manoj
Date:		    01-02-2017 
*/
function sendToSMLSDCServers(finalData,randomport) {
	    // STAGING SERVER
		//var trnstoip = '103.233.79.35';
	   // var trnstoport = 6998;
		//for SDC SERVER SML DATA SEND TO SDC SINGLE PORT SERVER:
		//var trnstoport = 6973;
		var trnstoport = randomport;
		var trnstoip = '103.51.8.36';// for SUDA
        //var trnstoip = '127.0.0.1';
		var trnsdate = 0;
        var trnstime = 0;
        var sendData = [];
		sendData['trnstoip'] = trnstoip;
        sendData['trnstoport'] = trnstoport.toString();		
		var client1 = new net.Socket();
		var finalSMLData = finalData.toString();
		console.log('CONNECTED TO SDC: ' + trnstoip + ':' + trnstoport);
	client1.connect(trnstoport, trnstoip, function() {
		
		client1.write(finalSMLData);
		trnsdate = moment().format('YYYY-MM-DD');
		trnstime = new moment ().format("HH:mm:ss");
		/* console.log('++++++++++++++++++++++++++++++++++++++++++++++');
	    console.log(net.Socket.address()); */
	});
	client1.on('data', function(data) {    
		console.log('DATA: ' + data);
		//Close the client socket completely
		client1.destroy();		
	}); 
	client1.on('close', function() {
	console.log('Connection closed'); 
    }); 
    console.log("\r\nSML SDC SERVER TO PORT :: " +trnstoport + '  DATA:  '+ finalSMLData + "\r\n");
   trnsdate = moment().format('YYYY-MM-DD');
   trnstime = new moment ().format("HH:mm:ss");
   sendData['trnsdate'] = trnsdate;
   sendData['trnstime'] = trnstime;
   return sendData;
}


function sendToSMLStegServers(finalData,randomPortSteg) {
	     var trnstoip = '103.233.79.35';
		 var ToPORT = randomPortSteg;
        var client1 = new net.Socket();
		
	  client1.connect(ToPORT, trnstoip, function() {
		console.log('CONNECTED TO: ' + trnstoip + ':' + ToPORT);
		//client1.localPort = 25555;
		client1.write(finalData.toString());
	});
	client1.on('data', function(data) {    
		console.log('DATA: ' + data);
		
		//Close the client socket completely
		client1.destroy();		
	}); 
	client1.on('close', function() {
	console.log('Connection closed');
});    
  console.log("\r\nSML STAGING SERVER TO PORT :: " +ToPORT + '  DATA:  '+ finalData + "\r\n"); 
}
/* 
Definition: 	Function to send data to Distance Server for distance calculation
Parameters: 	Data Send to Staging Server
Author:		Manoj
Date:		23-03-2016 
*/
    function sendtoStagingServer(finalData) {
	     var trnstoip = '103.233.79.35';
		 var ToPORT = 6998;
        var client2 = new net.Socket({localPort:25555});
		
	  client2.connect(ToPORT, trnstoip, function() {
		console.log('CONNECTED TO: ' + trnstoip + ':' + ToPORT);
		client1.write(finalData.toString());
	});
	client2.on('data', function(data) {    
		console.log('DATA: ' + data);
		console.log('++++++++++++++++++++++++++++++++++++++++++++++');
	    console.log(client1.address());
		
		//Close the client socket completely
		client2.destroy();		
	}); 
	client2.on('close', function() {
	console.log('Connection closed');
});    
  console.log("\r\nStaging Server Data:: " + finalData + "\r\n"); 
}

/*
  Definition: 	Function to get all vtu-vehicle details
  Parameters: 	No parameter
  Author:		Manoj
  Date:		    06-04-2016 
  */
  
function localRemortportMap(){
	
	var localRemortSql = db.query({
    text: "SELECT localport1,remortport1 FROM sml.portmapping ORDER BY localport1 ASC;",
    values: []
    //rowMode: 'array'
    });
  	localRemortSql.then(function(dataValue) {
		localremortData = dataValue;
		addlocalremort(localremortData);
		//console.log(localremortData);
	}); 
	localRemortSql.catch(function (error) {
		console.log(error); // display the error; 
	});
	
  return;
}

function addlocalremort(localremortData){
	
	for(var j = 0; j< localremortData.length; j++) {
			   
	   lclrmtarr[localremortData[j].localport1] = ({"LCLPORT": localremortData[j].localport1,"RMPORT": localremortData[j].remortport1});
	   //console.log(lclrmtarr[localremortData[j].localport1]);
	   
	}
	
	//console.log(lclrmtarr);
	return lclrmtarr;
}

/* Definition: 	Function to log data in txt file
Parameters: 	rawdata(string)=raw data received in socket
Author:		Pratyush
Date:		01-04-2016 */
function logData(rawdata, packetIdentifier){
    var utfrawdata = rawdata.toString('utf-8');
		
	// write data in file for testing - // - pratyush ================= Create data log ==================
	filenum = filenum + 1;
	
	// create the variable to write the data
	var text2write = 'The raw data received: \r\n';
	
	// - pratyush ================= Create data log ==================	
	text2write += utfrawdata;
	fs.writeFile("data/" + packetIdentifier + "data" + "-" +filenum+".txt", text2write, function(err) {
		if(err) {
			return console.log(err);
		}

		console.log("\r\nThe file was saved! Filename: data"+filenum+".txt\n");
	}); 	
}

/* 
Definition: 	Function to add Message to Message Array for every SCUID
Parameters: 	RAW Message
Author:		    Manoj Koley
Date:		    25-10-2016 
*/
function addMsg(message){
	var msg = message;
	msgdate = moment().format('YYYY-MM-DD');
    msgtime = new moment ().format("HH:mm:ss");
	for (var key in instmsg){
		//console.log(key);
		instmsg[key].MSG = msg;
		instmsg[key].MSGTIME = msgtime;
        instmsg[key].MSGDATE = msgdate;		 
		
	}
} 

/* 
Definition: 	Function to generate Message for every SCUID
Parameters: 	SCUID
Author:		    Manoj Koley
Date:		    25-10-2016 
*/

function generatebdMsg(SCUID){
	
		if(SCUID == instmsg[SCUID].SCUID && instmsg[SCUID].MSG != 0){
			//console.log("MESSAGE VERIFICATION");
		    //console.log(instmsg[SCUID].MSG );
			var msgparam = "inner_sign_message";
			var msgvalue = instmsg[SCUID].MSG;
			msgObj[msgparam] = msgvalue;
			var finalObject = JSON.stringify(msgObj);
			//console.log(finalObject);
		    return finalObject;
		}
	
}

function updateInsmsgforAdv(advmsg,vtunomsg){
	
	var msgdate = moment().format('YYYY-MM-DD');
    var msgtime = new moment ().format("HH:mm:ss");
	//instmsg[SCUID] = ({"SCUID":SCUID,"PORT":localport1,"MSG": 0,"MSGTIME": 0,"MSGDATE": 0});
	
	var vtunumber = vtunomsg;
	if(typeof instmsg[vtunumber] != 'undefined') {
		var vtunum = instmsg[vtunumber].SCUID;
		vtunum = vtunum.toString();
		if(vtunumber == vtunum){
			
		   instmsg[vtunumber].MSG = advmsg;
		   instmsg[vtunumber].MSGTIME = msgtime;
		   instmsg[vtunumber].	MSGDATE = msgdate;
		   console.log( instmsg[vtunumber]);
		}
	}else{
		console.log('THE '+ vtunumber+ ' IS NOT CONNECTED.');
	}
}

/* 
Definition: 	Function to log date & time for data received
Parameters: 	time & date
Author:		    Manoj Koley
Date:		    25-10-2016 
*/
function logData1(timedate,scuid){
	var filename = scuid;
	fs.appendFile(filename, timedate, encoding='utf8', function (err) {
		//console.log('The log file is created');
		if (err) throw err;
	});
}


function getScuid(localport1){
	var scid = 1;
	var localport2 = localport1;
	if(localport2 == '8142'){
		
		scid = '71319';
		console.log('The scid: '+ scid+ '  Local Port: '+ localport2);
	}
	else if(localport2 == '8153'){
		
		scid = '71354';
		console.log('The scid: '+ scid+ '  Local Port: '+ localport2);
	}
	else if(localport2 == '8114'){
		
		scid = '3516';
		console.log('The scid: '+ scid+ '  Local Port: '+ localport2);
	}
	else if(localport2 == '8202'){
		
		scid = '150470';
		console.log('The scid: '+ scid+ '  Local Port: '+ localport2);
	}
	else if(localport2 == '8145'){
		
		scid = '71309';
		console.log('The scid: '+ scid+ '  Local Port: '+ localport2);
	}
	else if(localport2 == '8123'){
		
		scid = '3550';
		console.log('The scid: '+ scid+ '  Local Port: '+ localport2);
	}
	else if(localport2 == '8220'){
		
		scid = '150451';
		console.log('The scid: '+ scid+ '  Local Port: '+ localport2);
	}
	return scid;
}