if(typeof(org_sc4k)=="undefined"||!org_sc4k)
var org_sc4k={};
else if(org_sc4k&&typeof(org_sc4k) !="object")
throw new Error("org_sc4k is not an Object type");

org_sc4k.EVENTS={
	NAME:"Summercollege4kids site event handling module",
	VERSION:1.0,
	addEventHandler:function (oNode, sEvt, fnHandler, bCapture){
		if(typeof(oNode.attachEvent) !="undefined")
		oNode.attachEvent("on"+sEvt, fnHandler);
		else
		oNode.addEventListener(sEvt,fnHandler, bCapture);
	},
	removeEventHandler:function(oNode,sEvt,fnHandler, bCapture){
		if(typeof(oNode.detachEvent) !="undefined")
		oNode.detachEvent("on"+sEvt, fnHandler);
		else
		oNode.removeEventListener (sEvt, fnHandler, bCapture);
	},
	
	getEventTarget:function(e){	
	if(typeof(window.event.srcElement) !="undefined")
	return window.event.srcElement;
	else return e.target;
	},
	
	stopEvent: function(e){
		if(typeof(window.event.srcElement) !="undefined")
		window.event.cancelBubble=true;
		else
		evt.stopPropagation();
	},
	preventDefault: function(evt){
		if(tyoeof(window.event.retunValue) !="undefined")
		window.event.returnValue=false;
		else evt.preventDefault();
	}
	
}