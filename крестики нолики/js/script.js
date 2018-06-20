$(document).ready(function()
{
	var $count = 0;

	$('#tab td').click(function()
	{
		$count+=1;
		if($count%2==0){
			$(this).text('O');
		
	} else{
		$(this).text('X');
	}
	
	

	});

});