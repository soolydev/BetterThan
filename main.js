var sosapup;
function openwindow ()
{

  var width =500;
  var height = 300;
    	
    	
  var left = (window.innerWidth -width)/2;
  var top =(window.innerHeight-height)/2;
     		     	
      
	var windowFeatures = "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top;
	sosapup = window.open("popup.html","blaze", windowFeatures )

}

setTimeout (openwindow, 2000)

