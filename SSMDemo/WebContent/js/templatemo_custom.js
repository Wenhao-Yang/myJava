"use strict";
var menuDisabled = false;
jQuery(document).ready(function($){

	/************** Menu Content Opening *********************/
	$(".main_menu a").on('click',function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		//$("#menu-container .content").hide();
		//$("#menu-container #menu-"+id[1]).show();
		//$("#menu-container .homepage").hide();
		return false;
	});
	

	$(".main_menu a.templatemo_homeservice").click(function(){
		$("#menu-container .portfolio").hide();
		$('#menu-container .services').fadeOut(1000, function(){
        $('#menu-container .homepage').fadeIn(1000);
	    });
		return false;
	});
	
	$(".main_menu a.templatemo_page2").click(function( ){
    $('#menu-container .homepage').fadeOut(1000, function(){									  
        $('#menu-container .services').fadeIn(1000);
	    });
	return false;
	});
	
	$(".main_menu a.templatemo_homeportfolio").click(function(){
		$('#menu-container .portfolio').fadeOut(1000, function(){
        $('#menu-container .homepage').fadeIn(1000);
	    });
		return false;
	});

	$(".main_menu a.templatemo_page3").click(function(){
		if ($('#inB').css("display")=='none' ){
			$('#menu-container .homepage').fadeOut(1000, function(){
		        $('#menu-container .portfolio').fadeIn(1000);
			});
			
		    $('#user-record-table').bootstrapTable('refresh'); //刷新表格
		    $('#uidInput').val(getCookie("uid"));
		    alert("你好用户 "+getCookie("uid")+" !");
			$('#user-record-table').bootstrapTable({
				method:'POST',
		        dataType:'json',
		        cache: false,
		        striped: true,                      //是否显示行间隔色
		        sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
		        url:"billt/userBill.action?uid="+getCookie("uid"),
		        pageNumber:1,                       //初始化加载第一页，默认第一页
		        pageSize: 5,                        //每页的记录行数（*）
		        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
		    });
			
			$('#user-money-table').bootstrapTable({
				method:'POST',
		        dataType:'json',
		        cache: false,
		        striped: true,                      //是否显示行间隔色
		        sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
		        url:"usert/userBalance.action?uid="+getCookie("uid"),
		        pageNumber:1,                       //初始化加载第一页，默认第一页
		        pageSize: 5,                        //每页的记录行数（*）
		        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
		    });
		}
		else{
			alert("请登录！");
		}
	    
		return false;
	});
	
	$(".main_menu a.templatemo_hometestimonial").click(function(){
		$('#menu-container .testimonial').fadeOut(1000, function(){
        $('#menu-container .homepage').fadeIn(1000);
	    });
		return false;
	});
	
	$(".main_menu a.templatemo_page4").click(function(){    
    $('#menu-container .homepage').fadeOut(1000, function(){
        $('#menu-container .testimonial').fadeIn(1000);
	    });
		return false
	});
	$(".main_menu a.templatemo_homeabout").click(function(){
		$('#menu-container .about').fadeOut(1000, function(){
        $('#menu-container .homepage').fadeIn(1000);
	    });
		return false;
	});

	$(".main_menu a.templatemo_page5").click(function(){    
//	    $('#menu-container .homepage').fadeOut(1000, function(){
//	        $('#menu-container .about').fadeIn(1000);
//		    });
		window.location.href="http://101.200.36.178/stockbbs/";
		return false;
	});
	
	$(".main_menu a.templatemo_homecontact").click(function(){
		$('#menu-container .contact').fadeOut(1000, function(){
        $('#menu-container .homepage').fadeIn(1000);
	    });
		return false;
	});
	
	$(".main_menu a.templatemo_page6").click(function(){    
		window.location.href="http://101.200.36.178/rate/hui.html"; 

	});
	
	
	/************** Gallery Hover Effect *********************/
	$(".overlay").hide();

	$('.gallery-item').hover(
	  function() {
	    $(this).find('.overlay').addClass('animated fadeIn').show();
	  },
	  function() {
	    $(this).find('.overlay').removeClass('animated fadeIn').hide();
	  }
	);


	/************** LightBox *********************/
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});


	$("a.menu-toggle-btn").click(function() {
	  $(".responsive_menu").stop(true,true).slideToggle();
	  return false;
	});
 
    $(".responsive_menu a").click(function(){
		$('.responsive_menu').hide();
	});

});

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}

function initialize() {
    var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(40.7823234,-73.9654161)
    };
    var map = new google.maps.Map(document.getElementById('templatemo_map'),  mapOptions);
}