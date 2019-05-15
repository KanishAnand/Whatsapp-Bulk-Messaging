//this opens up the section of person to message
//replace value of John with name to send message
part1();
function part1(){
	name="John"
	var x=document.querySelector("[" + "title="+ name + "]");
	var ev=document.createEvent('MouseEvents');
	ev.initEvent('mousedown',true,true);
	x.dispatchEvent(ev);
	setTimeout(part2,3000);  //this is done bcz first functin takes time to load completely
}

//this part is to input text in textbox field
// change value of variable count to number of times you want to send message.
function part2(){
	count=10;
	for(var i=1;i<=count;i++){
	message="hello"
		var sel=document.querySelector('[contenteditable="true"]');
		var ev2=document.createEvent('UIEvent');
		ev2.initUIEvent('input',true,true);
		sel.innerHTML=message;
		sel.dispatchEvent(ev2);
		part3();
	}
}

//this part clicks send button
function part3(){
	var cl = document.querySelector('[data-icon="send"]');
	cl.click();
}