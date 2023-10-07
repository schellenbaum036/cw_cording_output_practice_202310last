$(function () {
 	//opacity-rollover
	$('a .over_img').opOver(1.0,0.6,100,100);
 	//acordion
	$(".header_nav03 a").click(function () {
		$("#menu").slideToggle(function(e){
			var thisObj = $(this);
			if(thisObj.hasClass('open_menu')) {
				thisObj.removeClass('open_menu');
			} else {
				thisObj.addClass('open_menu').css('display','');
			}
		});
	});
});


$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 200; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
		// ページの読み込みが完了してから実行
		$(function() {
			// スクロールしたときに実行
			$(window).scroll(function () {
				// 目的のスクロール量を設定(px)
				var TargetPos = 100;
				// 現在のスクロール位置を取得
				var ScrollPos = $(window).scrollTop();
				// 現在位置が目的のスクロール量に達しているかどうかを判断
				if( ScrollPos >= TargetPos) {
					// 達していれば表示
					$("#pagetop").fadeIn();
				}
				else {
					// 達していなければ非表示
					$("#pagetop").fadeOut();
				}
			});
		});


/*=====================================================
meta: {
  title: "jquery-opacity-rollover.js",
  version: "2.1",
  copy: "copyright 2009 h2ham (h2ham.mail@gmail.com)",
  license: "MIT License(http://www.opensource.org/licenses/mit-license.php)",
  author: "THE HAM MEDIA - http://h2ham.seesaa.net/",
  date: "2009-07-21"
  modify: "2009-07-23"
}
=====================================================*/
(function($) {
	
	$.fn.opOver = function(op,oa,durationp,durationa){
		
		var c = {
			op:op? op:1.0,
			oa:oa? oa:0.6,
			durationp:durationp? durationp:'fast',
			durationa:durationa? durationa:'fast'
		};
		

		$(this).each(function(){
			$(this).css({
					opacity: c.op,
					filter: "alpha(opacity="+c.op*100+")"
				}).hover(function(){
					$(this).fadeTo(c.durationp,c.oa);
				},function(){
					$(this).fadeTo(c.durationa,c.op);
				})
		});
	},
	
	$.fn.wink = function(durationp,op,oa){

		var c = {
			durationp:durationp? durationp:'slow',
			op:op? op:1.0,
			oa:oa? oa:0.2
		};
		
		$(this).each(function(){
			$(this)	.css({
					opacity: c.op,
					filter: "alpha(opacity="+c.op*100+")"
				}).hover(function(){
				$(this).css({
					opacity: c.oa,
					filter: "alpha(opacity="+c.oa*100+")"
				});
				$(this).fadeTo(c.durationp,c.op);
			},function(){
				$(this).css({
					opacity: c.op,
					filter: "alpha(opacity="+c.op*100+")"
				});
			})
		});
	}
	
})(jQuery);