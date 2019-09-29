<?php
$player1=$_POST['player1'];
$player2=$_POST['player2'];
?>
<html>
<head>
<title>
Online Tic Tac Toe
</title>
<link type="text/css" rel="stylesheet" href="style.css">
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="game.js"></script>
</head>
<div id="bd0">
<img src="bg.jpg" height="800" width="1400">
</div>
<body>
<div id="bd">
<div id="title">
Online Tic Tac Toe Game
</div>
<div id="game" >
<div id="g1" class="block"></div>
<div id="g2" class="block"></div>
<div id="g3" class="block"></div>
<div id="g4" class="block"></div>
<div id="g5" class="block"></div>
<div id="g6" class="block"></div>
<div id="g7" class="block"></div>
<div id="g8" class="block"></div>
<div id="g9" class="block"></div>


</div>
<div id="btx">
<div id="bt1"><?php echo $_POST['player1'];;?></div>
<div id="bt2"><?php echo $_POST['player2'];?></div>
<div id="bt3">VS</div>
</div>
</body>
</html>