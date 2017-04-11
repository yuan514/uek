window.onload=function()
			{
				var fontSize=100;
				var designWidth=750;
				function rem(){
					var CW=document.documentElement.clientWidth;
				var scale=CW/designWidth;
				  // alert(CW);
				  // 显示宽度的窗口
				document.querySelector("html").style.fontSize=fontSize*scale+"px";
				}
				rem();
				window.onresize=rem;
			}
