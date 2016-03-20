$(function(){
            $('.images .item:first, .control1 span:first').addClass('active');
            var index = 0,
                    len = $('.images .item').length;
            autoPlay = function(){
                $('.images .item').eq(index++).addClass('active').siblings('.item').removeClass('active');
                //$('.title p').eq(index-1).addClass('active').siblings('p').removeClass('active');
                $('.control1 span').eq(index-1).addClass('active').siblings('span').removeClass('active');
                if(index == len){
                    index = 0;
                }
            },
                   loop = setInterval(autoPlay,5000);
            $('.control1 span').hover(function(){
                index = $(this).index();
                autoPlay();
                clearInterval(loop);
            },function(){
                loop = setInterval(autoPlay,5000);
            })
        })