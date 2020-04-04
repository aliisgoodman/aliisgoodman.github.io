var current = 0;
var w = parseInt($('.ourlunbotu').css('width'))
var h = parseInt($('.ourlunbotu').css('height'))
var lis = $('.banner>li')
//创建承载图片的li的宽高
$('.banner>li').css({width:w + 'px',height:h + 'px',})


//创建存放banner的容器ul的宽度。
$('.banner').css('width',lis.length * w + 'px')

//创建小圆点

for(var i = 0;i < lis.length;i++){
	if (i == current) {
		$('.cricle').append('<li class="active"></li>')
	}else{
		$('.cricle').append('<li></li>')
	}
}

//定义小圆点居中
$('.cricle').css('left',(parseInt($('.ourlunbotu').css('width'))-parseInt($('.cricle').css('width')))/2)

//按钮位置
$('.left').css('top',(parseInt($('.ourlunbotu').css('height'))-parseInt($('.left').css('height')))/2)
$('.right').css({
	top:(parseInt($('.ourlunbotu').css('height'))-parseInt($('.right').css('height')))/2,
	right:0
	})

			
	 // 所有小点点 点击事件
            $(".cricle>li").click(function() {
                // console.log($(this).index());
                var index = $(this).index();
                move(index);
            });
            // 显示第几个
            function showPic(index) {
                if (current < index) {
                    // 如果即将显示的 在后面
                    // 准备后面的图片
                    $(".banner>li")
                        .eq(0)
                        .after(lis.eq(index));

                    // 移动到后面一张
                    nextPic();
                } else {
                    // 如果即将显示的 在前面
                    $(".banner>li")
                        .eq(0)
                        .before(lis.eq(index));
                    prevPic();
                }
            }

            // 高亮小点点
            function activePoint(index) {
                $(".cricle>li")
                    .eq(index)
                    .addClass("active")
                    .siblings()
                    .removeClass("active");
            }

            function nextPic() {
                $(".banner").animate({ left: -w + "px" }, 300, function() {
                    $(".banner")
                        .append($(".banner>li").eq(0))
                        .css("left", "0px");
                });
            }

            function prevPic() {
                $(".banner")
                    .css("left", -w + "px")
                    .animate({ left: "0px" }, 300);
            }

            function move(index) {
                // 准备即将要显示的图片
                showPic(index);
                // 高亮即将要显示的点点
                activePoint(index);
                // 改变当前索引
                current = index;
            }

            function handleNext() {
                var nextIndex = current + 1 > lis.length - 1 ? 0 : current + 1;
                move(nextIndex);
            }
            function handlePrev() {
                var prevIndex = current - 1 < 0 ? lis.length - 1 : current - 1;
                move(prevIndex);
            }
            $('.right').click(handleNext)
            $('.left').click(handlePrev)

