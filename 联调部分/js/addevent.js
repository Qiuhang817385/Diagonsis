function addEvent(params){
	try{
		  if(typeof params.elem=="object" && params.elem!=undefined){
			  if(window.addEventListener){
				     params.elem.addEventListener(params.eventType,params.func);
				  }else{
					 params.elem.attach("on"+params.eventType,params.func);  
				  }
		   }else{
			   throw new Error("不是对象或对象为空");
			   }
		}catch(ex){
		   alert(ex.message);	
		}   
   }
