
$(function(){
	//走进人人信
	$(".about div").mouseover(function(){
		$(this).find(".about_t").show();
	}).mouseout(function(){
		$(this).find(".about_t").hide();
	});
	//导航栏吸顶
//	var wh=$(window).height();
	$(window).scroll(function(){
		var s=$(window).scrollTop();
		if(s>=40){
			$(".nav_bj").addClass("nav_xd");
		}
		else{
			$(".nav_bj").removeClass("nav_xd");
		}
		//子页面二级导航吸顶
		if(s>=399){
			$(".tab").addClass("tab_xd");
			$(".tidai").show();
		}else{
			$(".tab").removeClass("tab_xd");
			$(".tidai").hide();
		}
	});
	//关于我们tab切换
	$(".tab_3>li").eq(0).show();
	$(".tab_1 li").click(function(){
		var num = $(this).index();
		$(".tab_2").animate({left:'160'*num},function(){$(".tab_1 li").eq(num).addClass("red").siblings().removeClass("red");$(".tab_3>li").eq(num).show().siblings().hide();});
	});
	$(".team_img").mouseover(function(){
		$(this).siblings(".team_2").animate({bottom:'0'});
	}).mouseout(function(){
		$(this).siblings(".team_2").animate({bottom:'-162'});
	});

	var num1 = $(".course_Big").length;
	var num2 = $(".course_Small").length;
	$(".course_Line").height(num1*185+num2*130-100);
	
	//分页居中
	var gs = $(".gs").children('li').length;
	var gs0 = $(".gs1").children('li').length;
	var gs1 = gs-2;
	var gs2 = gs0-2;
	$(".gs").width(gs1*40+130);
	$(".gs1").width(gs2*40+130);

	//产品服务--产品问卷
	
	$(".dx span").click(function(){
		var span=$(this);
		var spanC=span.attr("class");
		var spanC1="."+spanC+"1";
		$(spanC1).click();
	});

	$(".dx span").click(function(){
		$(this).addClass('whether').parent().siblings().find("span").removeClass("whether");
	});

	$("#btnSubmit").click(function(){
        var whether=$('input:radio[name="whether"]:checked').val();
        if(whether==null){
            alert("请选择!");
            return false;
        };
        var whether1= $('input:radio[name="whether1"]:checked').val();
        if(whether1==null){
            alert("请选择!");
            return false;
        };       
        var whether2= $('input:radio[name="whether2"]:checked').val();
        if(whether2==null){
            alert("请选择!");
            return false;
        };     
        if(whether==0){
            if(whether1==0 || whether2==0){
               $(".answer").hide();
               $(".pattern").show();
            }
            else{
                window.location.href="index.html";
            }
        }
        else{
            window.location.href="index.html";
        }
     });
	//产品服务--风险问卷
		for (var i = 0; i <= 12; i++) {
			var i2=i+1;
			if(i>=9){
				$(".wind-ti p").eq(i).css("background-image","url(img/f"+i2+".png)");
			}else{
				$(".wind-ti p").eq(i).css("background-image","url(img/f"+0+i2+".png)");
			}
			
		};

		$(".dx1 span").click(function(){
			var spanx=$(this);
			var spanxC=spanx.attr("class");
			var spanxC1="."+spanxC+"1";
			$(spanxC1).click();
		});

		$(".dx1 span").click(function(){
			$(this).addClass('whether1').parent().siblings().find("span").removeClass("whether1");
		});

		$("#btnSubmit1").click(function(){
	        var pic1= $('input:radio[name="topic1"]:checked').val();
	        var pic2= $('input:radio[name="topic2"]:checked').val();
	        var pic3= $('input:radio[name="topic3"]:checked').val();
	        var pic4= $('input:radio[name="topic4"]:checked').val();
	        var pic5= $('input:radio[name="topic5"]:checked').val();
	        var pic6= $('input:radio[name="topic6"]:checked').val();
	        var pic7= $('input:radio[name="topic7"]:checked').val();
	        var pic8= $('input:radio[name="topic8"]:checked').val();
	        var pic9= $('input:radio[name="topic9"]:checked').val();
	        var pic10= $('input:radio[name="topic10"]:checked').val();
	        var pic11= $('input:radio[name="topic11"]:checked').val();
	        var pic12= $('input:radio[name="topic12"]:checked').val();

	        if(pic1==null){
	            alert("题1：请选择!");
	            return false;
	        };
	        if(pic2==null){
	            alert("题2：请选择!");
	            return false;
	        };      
	        if(pic3==null){
	            alert("题3：请选择!");
	            return false;
	        };  
	        if(pic4==null){
	            alert("题4：请选择!");
	            return false;
	        };  
	        if(pic5==null){
	            alert("题5：请选择!");
	            return false;
	        };  
	        if(pic6==null){
	            alert("题6：请选择!");
	            return false;
	        };  
	        if(pic7==null){
	            alert("题7：请选择!");
	            return false;
	        };  
	        if(pic8==null){
	            alert("题8：请选择!");
	            return false;
	        };  
	        if(pic9==null){
	            alert("题9：请选择!");
	            return false;
	        };  
	        if(pic10==null){
	            alert("题10：请选择!");
	            return false;
	        };  
	        if(pic11==null){
	            alert("题11：请选择!");
	            return false;
	        };  
	        if(pic12==null){
	            alert("题12：请选择!");
	            return false;
	        };  
	        var fens = Number(pic1) + Number(pic2) + Number(pic3) + Number(pic4) + Number(pic5) + Number(pic6) + Number(pic7) + Number(pic8) + Number(pic9) + Number(pic10) + Number(pic11) + Number(pic12);
	        // var fens =90;测试
	        if(fens<=24){
	        	$(".zhezao").show();
	        	$("body").addClass('over');
	        	$(".tanc span").html("保守型");
	        	$(".tanc p").html("此类投资者对于投资产品的任何下跌都不愿意接受，甚至不能承受极小的资产波动，属于风险厌恶型的投资者，首要目的是保持投资的稳定性与资产的保值，这类投资者需要注意为达到上述目标回报率可能很低，以换取本金免于受损和较高的流动性。");
	        }
	        else if(fens>24&&fens<=36){
	        	$(".zhezao").show();
	        	$("body").addClass('over');
	        	$(".tanc span").html("相对保守型");
	        	$(".tanc p").html("此类投资者不愿意接受暂时的投资损失，关注本金的安全，往往是稍微有些风险厌恶型的投资者，首要投资目标是资产一定程度的增值，为了获得一定的收益能承受少许本金损失和波动，此类投资者可以承受少许的资产波动和本金损失风险。");
	        }
	        else if(fens>26&&fens<=72){
	        	$(".zhezao").show();
	        	$("body").addClass('over');
	        	$(".tanc span").html("稳健型");
	        	$(".tanc p").html("此类投资者愿意承担一定程度的风险，主要强调投资风险和资产增值之间的平衡，为了获得一定收益可以承受投资产品价格的波动，甚至可以承受一段时间内投资产品价格的下跌，此类投资者可以承受一定程度的资产波动风险和本金亏损风险。");
	        }
	        else if(fens>72&&fens<=86){
	        	$(".zhezao").show();
	        	$("body").addClass('over');
	        	$(".tanc span").html("相对积极型");
	        	$(".tanc p").html("此类投资者为了获得高回报的投资收益，能够承受投资产品价格的显著波动，主要投资目标是实现资产增值，为实现目标往往愿意承担相当程度的风险，此类投资者可以承受相当大的资产波动风险和本金亏损风险。");
	        }
	        else if(fens>86&&fens<=100){
	        	$(".zhezao").show();
	        	$("body").addClass('over');
	        	$(".tanc span").html("积极型");
	        	$(".tanc p").html("此类投资者能够承受投资产品价格的剧烈波动，也可以承担这种波动所带来的结果，投资目标主要是取得超额收益，为实现投资目标愿意冒更大的风险，此类投资者能够承担相当大的投资风险和更大的本金亏损风险。");
	        }       
		});
		
		$("#btnSubmit2").click(function(){
			$(".zhezao").hide();
			$("body").removeClass('over');
		})
});
