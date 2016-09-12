window.onload = function(){
    	var content = document.getElementById("content");
		var contentList = content.getElementsByTagName("div");
		var title_list = document.getElementById("title_list");
	    var lists = title_list.getElementsByTagName("li");
	    for(var i=0; i<lists.length; i++){
	         lists[i].index = i;
	         lists[i].onclick = function() {
		         for(var n= 0;n<lists.length;n++){
		             lists[n].className = "";
		             // contentList[n].className = "hide";
		             contentList[n].style.display="none";
		         }
		         // this.className = "on";
		         // contentList[this.index].className = "";
		         contentList[this.index].style.display="block";
	         }
	    }

    }