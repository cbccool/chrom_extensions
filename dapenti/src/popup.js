function transfer(timeStamp){
	var ymd=new Date();
	ymd.setTime(timeStamp*1000);
	var month=(ymd.getMonth()+1).toString();
	var date=ymd.getDate().toString();
	return month+"-"+date;
}

function change(htmlobj,current){
	$(".header li").removeClass("current");
	$(".header "+current).addClass("current");
	var json=JSON.parse(htmlobj.responseText);
	$("body .content").empty();
	for(var i=0;i<json.length;i++){
		$("body .content").append("<li><small>"+transfer(json[i].created)+"</small><a href='"+json[i].url+"'>"+json[i].title+"</a>("+json[i].replies+")</li>");
	}
	$("body a").click(function(){
		chrome.tabs.create({ url: $(this).attr("href") });
	});  
}


function getHtmlContent(html,current){
	alert(html);
	$(".header li").removeClass("current");
	$(".header "+current).addClass("current");
	$("body .content").empty();
		$("body .content").html(html);
		$("body a").click(function(){
			chrome.tabs.create({ url: $(this).attr("href") });
		});  
	}

document.addEventListener('DOMContentLoaded', function () {	
       
   $(".hot").click(function(){
   	var html = "";		
		$.ajax({url:"http://www.dapenti.com/blog/blog.asp?name=xilei",
			dataType:"HTML",contentType: "application/html; charset=GBK",async:false, success: function(data) { 
					
	   			$(data).find("li").each(function (){
	   			
						$(this).find("a").attr("href", "http://dapenti.com/blog/"+$(this).find("a").attr("href"));
						html += "<li>"+$(this).html() +"</li>";
					});
				}
			});
			$(".header li").removeClass("current");
			$(this).addClass("current");
			$("body .content").html(html);
			$("body a").click(function(){
			chrome.tabs.create({ url: $(this).attr("href") });
		}); 
   });
   
   $(".hot").click();
   $(".new").click(function(){
   	var html = "";		
		$.ajax({url:"http://www.dapenti.com/blog/blog.asp?name=agile",
			dataType:"HTML",contentType: "application/html; charset=GBK",async:false, success: function(data) { 
					
	   			$(data).find("li").each(function (){
	   			
						$(this).find("a").attr("href", "http://dapenti.com/blog/"+$(this).find("a").attr("href"));
						html += "<li>"+$(this).html() +"</li>";
					});
				}
			});
			$(".header li").removeClass("current");
			$(this).addClass("current");
			$("body .content").html(html);
			$("body a").click(function(){
				chrome.tabs.create({ url: $(this).attr("href") });
			}); 
   });
   
});