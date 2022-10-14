var1 = 'attribute vec3 coordinates;void main(void) { gl_Position = vec4(coordinates, 1.0);}';
var2 = 'void main(void) {gl_FragColor = vec4(1, 1, 1, 1);}';
var3 = [
	-.75,-.25,.25,
	.75,-.25,.25,
	
	-.75,-.25,-.25,
	.75,-.25,-.25,
	
	-.75,.25,.25,
	.75,.25,.25,
	
	-.75,.25,-.25,
	.75,.25,-.25,
	
	-.25,-.75,.25,
	-.25,.75,.25,
	
	-.25,-.75,-.25,
	-.25,.75,-.25,
	
	.25,-.75,.25,
	.25,.75,.25,
	
	.25,-.75,-.25,
	.25,.75,-.25,
	
	.25,.25,-.75,
	.25,.25,.75,
	
	.25,-.25,-.75,
	.25,-.25,.75,
	
	-.25,.25,-.75,
	-.25,.25,.75,
	
	-.25,-.25,-.75,
	-.25,-.25,.75
	];
var4 = false
var5 = 0
var6 = 0
var7 = [-.75,-.25,.25,.75,-.25,.25,-.75,-.25,-.25,.75,-.25,-.25,-.75,.25,.25,.75,.25,.25,-.75,.25,-.25,.75,.25,-.25,-.25,-.75,.25,-.25,.75,.25,-.25,-.75,-.25,-.25,.75,-.25,.25,-.75,.25,.25,.75,.25,.25,-.75,-.25,.25,.75,-.25,.25,.25,-.75,.25,.25,.75,.25,-.25,-.75,.25,-.25,.75,-.25,.25,-.75,-.25,.25,.75,-.25,-.25,-.75,-.25,-.25,.75];
var8 = 0
var9 = 0
var10 = [[.5,.5,.5,false],[0,.5,.5,false],[-.5,.5,.5,false],[.5,0,.5,false],[0,0,.5,false],[-.5,0,.5,false],[.5,-.5,.5,false],[0,-.5,.5,false],[-.5,-.5,.5,false]];
var11 = [[.5,.5,0,false],[0,.5,0,false],[-.5,.5,0,false],[.5,0,0,false],[0,0,0,false],[-.5,0,0,false],[.5,-.5,0,false],[0,-.5,0,false],[-.5,-.5,0,false]];
var12 = [[.5,.5,-.5,false],[0,.5,-.5,false],[-.5,.5,-.5,false],[.5,0,-.5,false],[0,0,-.5,false],[-.5,0,-.5,false],[.5,-.5,-.5,false],[0,-.5,-.5,false],[-.5,-.5,-.5,false]];
var13 = [.2,.2,.2,
	-.2,-.2,-.2,
	-.2,.2,.2,
	.2,-.2,-.2,
	.2,-.2,.2,
	-.2,.2,-.2,
	-.2,-.2,.2,
	.2,.2,-.2
	];

var14 = [
	.2,.2,.2,
	.2,.2,-.2,
	
	.2,.2,.2,
	.2,-.2,.2,
	
	.2,.2,.2,
	-.2,.2,.2,
	
	-.2,-.2,.2,
	-.2,-.2,-.2,
	
	-.2,-.2,.2,
	-.2,.2,.2,
	
	-.2,-.2,.2,
	.2,-.2,.2,
	
	-.2,.2,-.2,
	-.2,.2,.2,
	
	-.2,.2,-.2,
	-.2,-.2,-.2,
	
	-.2,.2,-.2,
	.2,.2,-.2,
	
	.2,-.2,-.2,
	.2,-.2,.2,
	
	.2,-.2,-.2,
	.2,.2,-.2,
	
	.2,-.2,-.2,
	-.2,-.2,-.2,
]

var15 = [-.2,.2,0,.2,-.2,0,.2,.2,0,-.2,-.2,0]
var16 = [.2,.2,0,-.2,.2,0,.2,.2,0,.2,-.2,0,-.2,-.2,0,-.2,.2,0,-.2,-.2,0,.2,-.2,0]

var17 = "1"

function function1(arg1,arg2) {
	document.getElementById(arg1).innerHTML = arg2;
	return;
}

function function2(arg1,arg2,arg3,arg4=null,arg5=null) {
	tempVar1 = document.createElement(arg1);
	tempVar1.id = arg2;
	if (arg4) {
		tempVar1.type = arg4;
	}
	if (arg5) {
		var tempVar2 = window[arg5];
		tempVar1.onclick = function(){tempVar2()};
	}
	document.body.appendChild(tempVar1);
	function1(arg2,arg3);
}

function function3() {
	tempVar1 = null
	tempVar9 = document.getElementById("id4")
	if (!tempVar9){
		/*for (let i=0; i<var14.length;i++) {
			var3.push(var14[i])
			var7.push(var14[i])
		}*/
		document.body.innerHTML = "";
		function12("id5")
		function12("id6")
		function12("id7")
		tempVar1 = document.createElement("canvas");
		tempVar1.addEventListener("mousedown",function7,false)
		tempVar1.addEventListener("mouseup",function8,false)
		tempVar1.addEventListener("mousemove",function9,false)
		tempVar1.addEventListener("mouseout",function10,false)
	}
	else{
		tempVar1 = document.getElementById("id4");
	}
	tempVar1.id = "id4";
	tempVar1.width = 500;
	tempVar1.height = 500;
	document.body.appendChild(tempVar1);
	tempVar2 = tempVar1.getContext("webgl");
	tempVar2.clearColor(0.0,0.0,0.0,1.0);
	tempVar2.clear(tempVar2.COLOR_BUFFER_BIT);
	tempVar3 = var3;
	for (let i = 0;i < var10.length;i++){
		if (var10[i][3] == "1"){
			for (let j = 0;j < var13.length;j++){
				if (j%3==0) {
					tempVar3.push(var10[i][0] + var13[j])
					tempVar3.push(var10[i][1] + var13[j+1])
					tempVar3.push(var10[i][2] + var13[j+2])
				}
			}
		}
		if (var10[i][3] == "2"){
			for (let j = 0;j < var14.length;j++){
				if (j%3==0) {
					tempVar3.push(var10[i][0] + var14[j])
					tempVar3.push(var10[i][1] + var14[j+1])
					tempVar3.push(var10[i][2] + var14[j+2])
				}
			}
		}
	}
	for (let i = 0;i < var11.length;i++){
		if (var11[i][3] == "1"){
			for (let j = 0;j < var13.length;j++){
				if (j%3==0) {
					tempVar3.push(var11[i][0] + var13[j])
					tempVar3.push(var11[i][1] + var13[j+1])
					tempVar3.push(var11[i][2] + var13[j+2])
				}
			}
		}
		if (var11[i][3] == "2"){
			for (let j = 0;j < var14.length;j++){
				if (j%3==0) {
					tempVar3.push(var11[i][0] + var14[j])
					tempVar3.push(var11[i][1] + var14[j+1])
					tempVar3.push(var11[i][2] + var14[j+2])
				}
			}
		}
	}
	for (let i = 0;i < var12.length;i++){
		if (var12[i][3] == "1"){
			for (let j = 0;j < var13.length;j++){
				if (j%3==0) {
					tempVar3.push(var12[i][0] + var13[j])
					tempVar3.push(var12[i][1] + var13[j+1])
					tempVar3.push(var12[i][2] + var13[j+2])
				}
			}
		}
		if (var12[i][3] == "2"){
			for (let j = 0;j < var14.length;j++){
				if (j%3==0) {
					tempVar3.push(var12[i][0] + var14[j])
					tempVar3.push(var12[i][1] + var14[j+1])
					tempVar3.push(var12[i][2] + var14[j+2])
				}
			}
		}
	}
	tempVar10 = Math.cos(var8);
	tempVar11 = Math.sin(var8);
	for (let i = 0; i < tempVar3.length; i++) {
		if ((i % 3) == 0) {
			tempVar12 = tempVar3[i]
			tempVar13 = tempVar3[i+2]
			tempVar3[i] = (tempVar12 * tempVar10) - (tempVar13 * tempVar11);
			tempVar3[i+2] = (tempVar13 * tempVar10) + (tempVar12 * tempVar11);
		}
	}
	tempVar14 = Math.cos(var9);
	tempVar15 = Math.sin(var9);
	for (let i = 0; i < tempVar3.length; i++) {
		if ((i % 3) == 0) {
			tempVar12 = var3[i+2]
			tempVar13 = var3[i+1]
			tempVar3[i+2] = (tempVar12 * tempVar14) - (tempVar13 * tempVar15);
			tempVar3[i+1] = (tempVar13 * tempVar14) + (tempVar12 * tempVar15);
		}
	}
	var tempVar4 = tempVar2.createBuffer();
	tempVar2.bindBuffer(tempVar2.ARRAY_BUFFER, tempVar4);
	tempVar2.bufferData(tempVar2.ARRAY_BUFFER, new Float32Array(tempVar3), tempVar2.STATIC_DRAW);
	tempVar2.bindBuffer(tempVar2.ARRAY_BUFFER, null);
	tempVar5 = tempVar2.createShader(tempVar2.VERTEX_SHADER);
	tempVar2.shaderSource(tempVar5, var1);
	tempVar2.compileShader(tempVar5);
	tempVar6 = tempVar2.createShader(tempVar2.FRAGMENT_SHADER);
	tempVar2.shaderSource(tempVar6,var2);
	tempVar2.compileShader(tempVar6);
	tempVar7 = tempVar2.createProgram();
	tempVar2.attachShader(tempVar7, tempVar5);
	tempVar2.attachShader(tempVar7, tempVar6);
	tempVar2.linkProgram(tempVar7);
	tempVar2.useProgram(tempVar7);
	tempVar2.bindBuffer(tempVar2.ARRAY_BUFFER, tempVar4);
	tempVar8 = tempVar2.getAttribLocation(tempVar7, "coordinates");
	tempVar2.vertexAttribPointer(tempVar8, 3, tempVar2.FLOAT, false, 0, 0);
	tempVar2.enableVertexAttribArray(tempVar8);
	tempVar2.enable(tempVar2.DEPTH_TEST);
	tempVar2.clear(tempVar2.COLOR_BUFFER_BIT | tempVar2.DEPTH_BUFFER_BIT);
	tempVar2.viewport(0,0,tempVar1.width,tempVar1.height);
	tempVar2.drawArrays(tempVar2.LINES,0,500);
}

function function4() {
	document.body.innerHTML = "Goodbye!";
}

function function5(arg2) {
	var8 += arg2;
}
function function6(arg2) {
	var9 += arg2;
}
function function7(event) {
	var4 = true;
	var5 = event.pageX;
	var6 = event.pageY;
}
function function8() {
	var4 = false;
}
function function9(event) {
	if (var4) {
		function11()
		function5((event.pageX-var5) * .005);
		function6((event.pageY-var6) * .005);
		var5 = event.pageX
		var6 = event.pageY
		function3()
	}
}
function function10() {
	var4 = false;
}
function function11() {
	var3 = new Array()
	for (let i = 0; i < var7.length; i++) {
		var3.push(var7[i])
	}
}

function function12(arg1) {
	tempVar1 = null
	tempVar9 = document.getElementById(arg1)
	if (!tempVar9){
		tempVar1 = document.createElement("canvas");
		tempVar1.addEventListener("mousedown",function14,false)
	}
	else{
		tempVar1 = document.getElementById(arg1);
	}
	tempVar1.id = arg1;
	tempVar1.width = 200;
	tempVar1.height = 200;
	document.body.appendChild(tempVar1);
	tempVar2 = tempVar1.getContext("webgl");
	tempVar2.clearColor(0.0,0.0,0.0,1.0);
	tempVar2.clear(tempVar2.COLOR_BUFFER_BIT);
	tempVar3 = [
	.75,.25,0,
	-.75,.25,0,
	
	.75,-.25,0,
	-.75,-.25,0,
	
	.25,.75,0,
	.25,-.75,0,
	
	-.25,.75,0,
	-.25,-.75,0
	];
	//15,16,10
	if(arg1 == "id7"){
		for (let i = 0;i < var10.length;i++){
			if (var10[i][3] == "1"){
				for (let j = 0;j < var15.length;j++){
					if (j%3==0) {
						tempVar3.push(var10[i][0] + var15[j])
						tempVar3.push(var10[i][1] + var15[j+1])
						tempVar3.push(0)
					}
				}
			}
			if (var10[i][3] == "2"){
				for (let j = 0;j < var16.length;j++){
					if (j%3==0) {
						tempVar3.push(var10[i][0] + var16[j])
						tempVar3.push(var10[i][1] + var16[j+1])
						tempVar3.push(0)
					}
				}
			}
		}
	}
	if(arg1 == "id6"){
		for (let i = 0;i < var11.length;i++){
			if (var11[i][3] == "1"){
				for (let j = 0;j < var15.length;j++){
					if (j%3==0) {
						tempVar3.push(var11[i][0] + var15[j])
						tempVar3.push(var11[i][1] + var15[j+1])
						tempVar3.push(0)
					}
				}
			}
			if (var11[i][3] == "2"){
				for (let j = 0;j < var16.length;j++){
					if (j%3==0) {
						tempVar3.push(var11[i][0] + var16[j])
						tempVar3.push(var11[i][1] + var16[j+1])
						tempVar3.push(0)
					}
				}
			}
		}
	}
	if(arg1 == "id5"){
		for (let i = 0;i < var10.length;i++){
			if (var12[i][3] == "1"){
				for (let j = 0;j < var15.length;j++){
					if (j%3==0) {
						tempVar3.push(var12[i][0] + var15[j])
						tempVar3.push(var12[i][1] + var15[j+1])
						tempVar3.push(0)
					}
				}
			}
			if (var12[i][3] == "2"){
				for (let j = 0;j < var16.length;j++){
					if (j%3==0) {
						tempVar3.push(var12[i][0] + var16[j])
						tempVar3.push(var12[i][1] + var16[j+1])
						tempVar3.push(0)
					}
				}
			}
		}
	}
	var tempVar4 = tempVar2.createBuffer();
	tempVar2.bindBuffer(tempVar2.ARRAY_BUFFER, tempVar4);
	tempVar2.bufferData(tempVar2.ARRAY_BUFFER, new Float32Array(tempVar3), tempVar2.STATIC_DRAW);
	tempVar2.bindBuffer(tempVar2.ARRAY_BUFFER, null);
	tempVar5 = tempVar2.createShader(tempVar2.VERTEX_SHADER);
	tempVar2.shaderSource(tempVar5, var1);
	tempVar2.compileShader(tempVar5);
	tempVar6 = tempVar2.createShader(tempVar2.FRAGMENT_SHADER);
	tempVar2.shaderSource(tempVar6,var2);
	tempVar2.compileShader(tempVar6);
	tempVar7 = tempVar2.createProgram();
	tempVar2.attachShader(tempVar7, tempVar5);
	tempVar2.attachShader(tempVar7, tempVar6);
	tempVar2.linkProgram(tempVar7);
	tempVar2.useProgram(tempVar7);
	tempVar2.bindBuffer(tempVar2.ARRAY_BUFFER, tempVar4);
	tempVar8 = tempVar2.getAttribLocation(tempVar7, "coordinates");
	tempVar2.vertexAttribPointer(tempVar8, 3, tempVar2.FLOAT, false, 0, 0);
	tempVar2.enableVertexAttribArray(tempVar8);
	tempVar2.enable(tempVar2.DEPTH_TEST);
	tempVar2.clear(tempVar2.COLOR_BUFFER_BIT | tempVar2.DEPTH_BUFFER_BIT);
	tempVar2.viewport(0,0,tempVar1.width,tempVar1.height);
	tempVar2.drawArrays(tempVar2.LINES,0,200);
}
function function13(arg1){
	if (arg1 > 8 && arg1 < 18) {
		tempVar1 = arg1 % 9;
		if (!var11[tempVar1][3]) {
			var11[tempVar1][3] = var17
			if (var17 == "1") {
				var17 = "2"
			}
			else {
				var17 = "1"
			}
			var8 = 0
			var9 = 0
			function12("id6");
			function3();
		}
	}
	if (arg1 < 9){
		tempVar1 = arg1 % 9;
		if (!var12[tempVar1][3]) {
			var12[tempVar1][3] = var17;
			if (var17 == "1") {
				var17 = "2";
			}
			else {
				var17 = "1";
			}
			var8 = 0;
			var9 = 0;
			function12("id5");
			function3();
		}
	}
	if (arg1 > 17) {
		tempVar1 = arg1 % 9;
		if (!var10[tempVar1][3]) {
			var10[tempVar1][3] = var17;
			if (var17 == "1") {
				var17 = "2"
			}
			else {
				var17 = "1"
			}
			var8 = 0
			var9 = 0
			function12("id7");
			function3();
		}
	}
}

function function14(event) {
	tempVar1 = [520,10];
	tempVar2 = [520,220];
	tempVar3 = [520,430];
	
	if ((event.pageX >= 545 && event.pageX < 595) && (event.pageY >= 35 && event.pageY <85) ) {
		function13(2);
	}
	else if((event.pageX >= 595 && event.pageX < 645) && (event.pageY >= 35 && event.pageY <85) ) {
		function13(1);
	}
	else if((event.pageX >= 645 && event.pageX < 695) && (event.pageY >= 35 && event.pageY <85) ) {
		function13(0);
	}
	else if ((event.pageX >= 545 && event.pageX < 595) && (event.pageY >= 85 && event.pageY <135) ) {
		function13(5);
	}
	else if((event.pageX >= 595 && event.pageX < 645) && (event.pageY >= 85 && event.pageY <135) ) {
		function13(4);
	}
	else if((event.pageX >= 645 && event.pageX < 695) && (event.pageY >= 85 && event.pageY <135) ) {
		function13(3);
	}
	else if ((event.pageX >= 545 && event.pageX < 595) && (event.pageY >= 135 && event.pageY <185) ) {
		function13(8);
	}
	else if((event.pageX >= 595 && event.pageX < 645) && (event.pageY >= 135 && event.pageY <185) ) {
		function13(7);
	}
	else if((event.pageX >= 645 && event.pageX < 695) && (event.pageY >= 135 && event.pageY <185) ) {
		function13(6);
	}
	else if ((event.pageX >= 545 && event.pageX < 595) && (event.pageY >= 245 && event.pageY <295) ) {
		function13(11);
	}
	else if((event.pageX >= 595 && event.pageX < 645) && (event.pageY >= 245 && event.pageY <295) ) {
		function13(10);
	}
	else if((event.pageX >= 645 && event.pageX < 695) && (event.pageY >= 245 && event.pageY <295) ) {
		function13(9);
	}
	else if ((event.pageX >= 545 && event.pageX < 595) && (event.pageY >= 295 && event.pageY <345) ) {
		function13(14);
	}
	else if((event.pageX >= 595 && event.pageX < 645) && (event.pageY >= 295 && event.pageY <345) ) {
		function13(13);
	}
	else if((event.pageX >= 645 && event.pageX < 695) && (event.pageY >= 295 && event.pageY <345) ) {
		function13(12);
	}
	else if ((event.pageX >= 545 && event.pageX < 595) && (event.pageY >= 345 && event.pageY <395) ) {
		function13(17);
	}
	else if((event.pageX >= 595 && event.pageX < 645) && (event.pageY >= 345 && event.pageY <395) ) {
		function13(16);
	}
	else if((event.pageX >= 645 && event.pageX < 695) && (event.pageY >= 345 && event.pageY <395) ) {
		function13(15);
	}
	else if ((event.pageX >= 545 && event.pageX < 595) && (event.pageY >= 455 && event.pageY <505) ) {
		function13(20);
	}
	else if((event.pageX >= 595 && event.pageX < 645) && (event.pageY >= 455 && event.pageY <505) ) {
		function13(19);
	}
	else if((event.pageX >= 645 && event.pageX < 695) && (event.pageY >= 455 && event.pageY <505) ) {
		function13(18);
	}
	else if ((event.pageX >= 545 && event.pageX < 595) && (event.pageY >= 505 && event.pageY <555) ) {
		function13(23);
	}
	else if((event.pageX >= 595 && event.pageX < 645) && (event.pageY >= 505 && event.pageY <555) ) {
		function13(22);
	}
	else if((event.pageX >= 645 && event.pageX < 695) && (event.pageY >= 505 && event.pageY <555) ) {
		function13(21);
	}
	else if ((event.pageX >= 545 && event.pageX < 595) && (event.pageY >= 555 && event.pageY <605) ) {
		function13(26);
	}
	else if((event.pageX >= 595 && event.pageX < 645) && (event.pageY >= 555 && event.pageY <605) ) {
		function13(25);
	}
	else if((event.pageX >= 645 && event.pageX < 695) && (event.pageY >= 555 && event.pageY <605) ) {
		function13(24);
	}
}