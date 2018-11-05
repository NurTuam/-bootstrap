$(function(){
	'use strict';
	
//    三级联动
	let $citypicker1=$('#city-picker1');
	$citypicker1.citypicker();
	let $citypicker2=$('#city-picker2');
	$citypicker2.citypicker({province:'江苏省',city:'常州市',district:'溧阳市'});
	let $citypicker3=$('#city-picker3');
	$('#reset').click(function(){
		$citypicker3.citypicker('reset');
	});
	$('#destroy').click(function(){
		$citypicker3.citypicker('destroy');
	});
	
//	查看
    let Yincang=$('.yincang');
    Yincang.click(function(){
    	$(this).find('div').slideToggle(300);
    });
    
//  选项卡
    $('#tabs li').hover(function(){
//  	$(this).tab('show');
    	$(this).addClass('cur').siblings().removeClass('cur');
//  	$(this).addClass('cy_div active').siblings().removeClass('cy_div active');
    });
    
    $('#tabs li a').hover(function(){
    	$(this).tab('show');
    })
});