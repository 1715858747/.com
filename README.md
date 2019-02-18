
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <link rel="icon" href="images/logofirst.jpg">
  <title>炫酷播放器</title>
  <link rel="stylesheet" href="css/style.css" />
      <style>
	    /* body {
	    		   margin:0;
	    		   padding:0;
	    		}
	    		.player{
	               width:1130px;
	    		   height:730px;
	    		   height:630px;
	               background-color:#cc3300;
	               margin: 0 auto 0;
	             }
	    		  .title{
	    		     width:1130px;
	    			 height:48px;
	    			 background-color:#993300;
	    			 font-size:24px;
	    			 font-weight:bold;
	    			 text-align:center;
	    			 line-height:48px;
	    		 }
	    		  .videocontent{
	    		     width:1130px;
	    			 height:636px;
	    			 background-color:#000;
	    		 }
	    		 .controls{
	    		     width:1130px;
	    			 height:46px;
	    			 background-color:#3333cc;
	    		 }
	    		 .videofile{
	    		    width:1130px;
	    			 height:636px;
	    		}
	            
	    		 }
	    		 
	    		 }
	             
	    		 } */
	  </style>
 </head>
 <body>
	<div class="player">
		<div class="title">制作音乐播放器</div>
		<div class="content">
			<video src="video/想起了你，是想起那样一个夏天.mp4" class="videofile"></video>
		</div>
		<div class="control">
			<div class="play"></div>
			<div class="volume"></div>
			<div class="progress">
				<div class="changes"></div>
			</div>
        	<div class="openfile"></div>
		</div>
	</div>
       <!--  <div class="player">
        		     <div class="title">炫酷播放器</div>
        			 <div class="videocontent">
        			 </div>
        			 <div class="controls">
        			      
                  
        				  
        			 </div>
        		</div> -->
      <!--<div class="box1"></div>
	        <div class="box2">
			     <div class="box3">
					  <ul>
					    <li><img src="images/logofirst.jpg"/></li>
				      	<li style="background:url(images/logofirst.jpg)" width="50" height="50"></li>
				      	<li>2</li>
				      	<li>3</li>
				      	<li>4</li>
				      	<li>5</li>
				      	<li>6</li>
						<li><input type="text" placeholder="请输入信息"></li>
						<li>搜索</li>
				      </ul>
				 </div>
			</div>-->
			<script type="text/javascript" src="js/script.js"></script>
			<script>
	        var playB=document.querySelector(".play");
			var toggle="off";   //开关//
			var video=document.querySelector(".videofile");
				playB.onclick=function(){
                     if(toggle=="off"){
					      video.play();
						  playB.style.backgroundImage="url(images/pause.png)";
						  toggle="on";
					 }else{
						 video.pause();
						 playB.style.backgroundImage="url(images/play.png)";
						 toggle="off";
					 }
 				}
				function getProgress(){
                var percent = video.currentTime / video.duration;
                playProgress.style.width = percent * (progressWrap.offsetWidth) - 2 + "px";
                showProgress.innerHTML = (percent * 100).toFixed(1) + "%";
            }
				      
	 </script>
 </body>
</html>

