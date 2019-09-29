jQuery(document).ready(function() {
$turn= 0;
var game = ["","","","","","","","",""];
	$('#game div').click(function(){
		var x= $(this).position();
		if(x.left==0 && x.top==0)
		{ 
		    if(!game[0] && $turn==0)
			{
				game[0]= '0';
				$('#g1').append("<img src='x.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 1;
			} 
			else if(!game[0] && $turn==1)
			{
				game[0]= '1';
				$('#g1').append("<img src='o.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 0;
			} 
			else
			{
				alert('Invalid Move');
			}
		}
		else if(x.left==105 && x.top==0)
		{ 
		    if(!game[1] && $turn==0)
			{
				game[1]= '0';
				$('#g1').append("<img src='x.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 1;
			} 
			else if(!game[1] && $turn==1)
			{
				game[1]= '1';
				$('#g1').append("<img src='o.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 0;
			} 
			else
			{
				alert('Invalid Move');
			}
		}
		
		else if(x.left==210 && x.top==0)
		{ 
		    if(!game[2] && $turn==0)
			{
				game[2]= '0';
				$('#g1').append("<img src='x.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 1;
			} 
			else if(!game[2] && $turn==1)
			{
				game[2]= '1';
				$('#g1').append("<img src='o.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 0;
			} 
			else
			{
				alert('Invalid Move');
			}
		}
		
		else if(x.left==0 && x.top==105)
		{ 
		    if(!game[3] && $turn==0)
			{
				game[3]= '0';
				$('#g1').append("<img src='x.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 1;
			} 
			else if(!game[3] && $turn==1)
			{
				game[3]= '1';
				$('#g1').append("<img src='o.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 0;
			} 
			else
			{
				alert('Invalid Move');
			}
		}
		else if(x.left==105 && x.top==105)
		{ 
		    if(!game[4] && $turn==0)
			{
				game[4]= '0';
				$('#g1').append("<img src='x.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 1;
			} 
			else if(!game[4] && $turn==1)
			{
				game[4]= '1';
				$('#g1').append("<img src='o.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 0;
			} 
			else
			{
				alert('Invalid Move');
			}
		}
		
		else if(x.left==210 && x.top==105)
		{ 
		    if(!game[5] && $turn==0)
			{
				game[5]= '0';
				$('#g1').append("<img src='x.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 1;
			} 
			else if(!game[5] && $turn==1)
			{
				game[5]= '1';
				$('#g1').append("<img src='o.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 0;
			} 
			else
			{
				alert('Invalid Move');
			}
		}
		
		else if(x.left==0 && x.top==210)
		{ 
		    if(!game[6] && $turn==0)
			{
				game[6]= '0';
				$('#g1').append("<img src='x.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 1;
			} 
			else if(!game[6] && $turn==1)
			{
				game[6]= '1';
				$('#g1').append("<img src='o.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 0;
			} 
			else
			{
				alert('Invalid Move');
			}
		}
		else if(x.left==105 && x.top==210)
		{ 
		    if(!game[7] && $turn==0)
			{
				game[7]= '0';
				$('#g1').append("<img src='x.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 1;
			} 
			else if(!game[7] && $turn==1)
			{
				game[7]= '1';
				$('#g1').append("<img src='o.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 0;
			} 
			else
			{
				alert('Invalid Move');
			}
		}
		
		else if(x.left==210 && x.top==210)
		{ 
		    if(!game[8] && $turn==0)
			{
				game[8]= '0';
				$('#g1').append("<img src='x.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 1;
			} 
			else if(!game[8] && $turn==1)
			{
				game[8]= '1';
				$('#g1').append("<img src='o.png' class='x1' style='position: absolute;left: "+x.left+"px;top: "+x.top+"px;'>");
				$turn= 0;
			} 
			else
			{
				alert('Invalid Move');
			}
		}
		if((game[0]=='0'&&game[1]=='0'&&game[2]=='0')||(game[3]=='0'&&game[4]=='0'&&game[5]=='0')||(game[6]=='0'&&game[7]=='0'&&game[8]=='0')||(game[0]=='0'&&game[3]=='0'&&game[6]=='0')||(game[1]=='0'&&game[4]=='0'&&game[7]=='0')||(game[2]=='0'&&game[5]=='0'&&game[8]=='0')||(game[0]=='0'&&game[4]=='0'&&game[8]=='0')||(game[2]=='0'&&game[4]=='0'&&game[6]=='0'))
		{
		  alert('Player1 Wins!');
		  $flag= 1;
		}
	    else if((game[0]=='1'&&game[1]=='1'&&game[2]=='1')||(game[3]=='1'&&game[4]=='1'&&game[5]=='1')||(game[6]=='1'&&game[7]=='1'&&game[8]=='1')||(game[0]=='1'&&game[3]=='1'&&game[6]=='1')||(game[1]=='1'&&game[4]=='1'&&game[7]=='1')||(game[2]=='1'&&game[5]=='1'&&game[8]=='1')||(game[0]=='1'&&game[4]=='1'&&game[8]=='1')||(game[2]=='1'&&game[4]=='1'&&game[6]=='1'))
		{
			alert('Player2 Wins!');
			$flag= 1;
		}
		else if(game[0] && game[1] && game[2] && game[3] && game[4] && game[5] && game[6] && game[7] && game[8] )
		{
			alert('It`s a draw!');
			$flag= 1;
		
		}
		if($flag== 1)
		{
			$turn= 0;
			game = ["","","","","","","","",""];
			$('.x1').remove();
			$flag= 0;
		}
	});
});