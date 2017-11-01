 
 //https://www.w3schools.com/jquery/jquery_dom_get.asp
 //use a loop to clear all ids?
 
 /*
go blue devils
 */
 
 $(document).ready(function(){ 
 $(".division").hide();
			 
$("h3").click(function(){
			$tempDiv = $(this).attr('id');
			$tempDiv2 = "#" + $tempDiv.slice(1);
		   $($tempDiv2).toggle();
   		    });	
			
$("#hchamp").click(function() {
	document.getElementById("c1").innerHTML = document.getElementById("eg18").innerHTML;
	document.getElementById("c2").innerHTML = document.getElementById("wg18").innerHTML;
	document.getElementById("c3").innerHTML = document.getElementById("mg18").innerHTML;
	document.getElementById("c4").innerHTML = document.getElementById("sg18").innerHTML;
});
			
$(".round1").click(function(){
			$tempRnd = $(this).attr('id');
			$tempRnd2 = $tempRnd.slice(1);
		    $tempRnd3 = ($tempRnd2 / 2 + $tempRnd2 % 2) - 0.5;
			$tempRnd4 = $tempRnd.charAt(0) + "g" + Math.round($tempRnd3);
			document.getElementById($tempRnd4).innerHTML = $(this).text();
   		    });		
			
$(".roundn").click(function(){
	//the need for this is because base 10 not 16
			$tempRnd = $(this).attr('id');
			$tempRnd2 = $tempRnd.slice(2);
		    $tempRnd3 = ($tempRnd2 / 2 + $tempRnd2 % 2) - 0.5;
			$tempRnd4 = Math.round($tempRnd3+10);
			if ($tempRnd4 == "19") {$tempRnd4 = "18";}
			$tempRnd4 = $tempRnd.charAt(0) + "g" + $tempRnd4;
			document.getElementById($tempRnd4).innerHTML = $(this).text();
   		    });	
			
$(".roundc").click(function(){
	// % 3 then 2 then one for different rounds? + 4?
			$tempRnd = $(this).attr('id');
			$tempRnd2 = $tempRnd.slice(1);
		    $tempRnd3 = ($tempRnd2 / 2 + $tempRnd2 % 2) - 0.5;
			$tempRnd4 = $tempRnd.charAt(0) + Math.round($tempRnd3 + 4);
			document.getElementById($tempRnd4).innerHTML = $(this).text();
   		    });				
			 

  });
