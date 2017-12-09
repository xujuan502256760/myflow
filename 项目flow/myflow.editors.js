(function($){
var myflow = $.myflow;

$.extend(true, myflow.editors, {
	buttonEditor:function(tn){
		var _props,_k,_div,_src,_r;
		this.init=function(props,k,div,src,r,event){
			_props=props;_k=k;_div=div;_src=src;_r=r;
			// $('<button style="width:100%;"/>').val(props[_k].value).change(function(){
			// 	props[_k].value=$(this).val();
			// }).appendTo('#'+_div);
			if(tn=="设置"){
				$('<button  style="width:60px" onclick="$we.app.flows.openSetRuleView()">设置</button>').val(props[_k].value).change(function(){
					props[_k].value=$(this).val();
				}).appendTo('#'+_div);
			}else if(tn=="请选择"){
				$('<button  style="width:60px" onclick="$we.app.flows.openChooseRule()">请选择</button>').val(props[_k].value).change(function(){
					props[_k].value=$(this).val();
				}).appendTo('#'+_div);
			}
			// $('<button  style="width:60px" onclick="$we.app.abcd()">'+tn+'</button>').val(props[_k].value).change(function(){
			// 	props[_k].value=$(this).val();
			// }).appendTo('#'+_div);
			$('#'+_div).data('editor', this);
		}
		this.destroy=function(){
			$('#'+_div+' button').each(function(){
				_props[_k].value = $(this).val();
			});
		}
	},
	inputEditor : function(){
		var _props,_k,_div,_src,_r;
		this.init = function(props, k, div, src, r){
			_props=props; _k=k; _div=div; _src=src; _r=r;
			console.info("KKKK:" + k)
			$('<input style="width:100%;"/>').val(props[_k].value).change(function(){
				props[_k].value = $(this).val();
			}).appendTo('#'+_div);
			
			$('#'+_div).data('editor', this);
		}
		this.destroy = function(){
			$('#'+_div+' input').each(function(){
				_props[_k].value = $(this).val();
			});
		}
	},
	selectEditor : function(arg){
		var _props,_k,_div,_src,_r;
		this.init = function(props, k, div, src, r){
			_props=props; _k=k; _div=div; _src=src; _r=r;

			var sle = $('<select  style="width:100%;"/>').val(props[_k].value).change(function(){
				props[_k].value = $(this).val();
			}).appendTo('#'+_div);
			
			if(typeof arg === 'string'){
				$.ajax({
				   type: "GET",
				   url: arg,
				   success: function(data){
					  var opts = eval(data);
					 if(opts && opts.length){
						for(var idx=0; idx<opts.length; idx++){
							sle.append('<option value="'+opts[idx].value+'">'+opts[idx].name+'</option>');
						}
						sle.val(_props[_k].value);
					 }
				   }
				});
			}else {
				for(var idx=0; idx<arg.length; idx++){
					sle.append('<option value="'+arg[idx].value+'">'+arg[idx].name+'</option>');
				}
				sle.val(_props[_k].value);
			}
			
			$('#'+_div).data('editor', this);
		};
		this.destroy = function(){
			$('#'+_div+' input').each(function(){
				_props[_k].value = $(this).val();
			});
		};
	}
});

})(jQuery);
