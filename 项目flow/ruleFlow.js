; (function () {
	var _html = [
		'<div class="flow">',
		'<div id="myflow_tools" style="position: absolute;top: 10px; left: 10px; background-color: #fff; width: 70px; cursor: default; padding: 3px;">',
		'<div id="myflow_tools_handle" style="text-align: center;" class="ui-widget-header">工具集</div>',
		' <div class="node" id="myflow_save">',
		'<img src="images/save.gif" />&nbsp;&nbsp;保存</div>',
		'<div class="node" id="del">',
		' <img src="images/save.gif" />&nbsp;&nbsp;删除</div>',
		'<div>',
		'<hr />',
		'</div>',
		'<div class="node selectable" id="path">',
		'<img src="images/16/flow_sequence.png" />&nbsp;&nbsp;转换</div>',
		'<div>',
		'<hr />',
		'</div>',
		'<div class="node state" id="start" type="start">',
		'<img src="images/16/start_event_empty.png" />&nbsp;&nbsp;开始</div>',
		'<div class="node state" id="task" type="task">',
		'<img src="images/16/task_empty.png" />&nbsp;&nbsp;任务</div>',
		'<div class="node state" id="fork" type="fork">',
		'<img src="images/16/gateway_parallel.png" />&nbsp;&nbsp;分支</div>',
		'<div class="node state" id="join" type="join">',
		'<img src="images/16/gateway_parallel.png" />&nbsp;&nbsp;合并</div>',
		'<div class="node state" id="end" type="end">',
		'<img src="images/16/end_event_terminate.png" />&nbsp;&nbsp;结束</div>',
		'</div>',
		'<div id="myflow_props" style="position: absolute; top: 10px; right: 30px; background-color: #fff; width: 220px; padding: 3px;" class="ui-widget-content">',
		'<div id="myflow_props_handle" class="ui-widget-header">属性</div>',
		'<table border="1" width="100%" cellpadding="0" cellspacing="0">',
		'<tr>',
		'<td>aaa</td>',
		'</tr>',
		'<tr>',
		'<td>aaa</td>',
		'</tr>',
		'</table>',
		'<div>&nbsp;</div>',
		'</div>',

		'<div attr="myflow"></div>',
		'</div>',
	].join("");
	$we.app.flows = {};
	$we.app.flows.chooseRule = { id: "wewe", nameCh: "规则HHHH" };//选择到数据
	var init = function (parent) {
		$we.app.flows.view = this;
		$we.app.flows.data = $we.app.get('ruleData');//
		this.appendHTML(_html, parent);
		// this.data="({states:{rect20:{type:'start',text:{text:'开始'}, attr:{ x:450, y:52, width:50, height:50}, props:{text:{value:'开始'},temp1:{value:''},temp2:{value:''}}},rect21:{type:'task',text:{text:'规则A'}, attr:{ x:425, y:153, width:100, height:50}, props:{name:{value:'规则A'},desc:{value:''},rule:{value:'请选择'}}},rect22:{type:'fork',text:{text:'分支'}, attr:{ x:447, y:263, width:50, height:50}, props:{text:{value:'分支'},temp1:{value:''},temp2:{value:''}}},rect23:{type:'task',text:{text:'规则D'}, attr:{ x:236, y:394, width:100, height:50}, props:{name:{value:'规则D'},desc:{value:''},rule:{value:'请选择'}}},rect24:{type:'task',text:{text:'规则C'}, attr:{ x:421, y:392, width:100, height:50}, props:{name:{value:'规则C'},desc:{value:''},rule:{value:'请选择'}}},rect25:{type:'task',text:{text:'规则B'}, attr:{ x:642, y:393, width:100, height:50}, props:{name:{value:'规则B'},desc:{value:''},rule:{value:'请选择'}}},rect26:{type:'join',text:{text:'合并'}, attr:{ x:447, y:499, width:50, height:50}, props:{text:{value:'合并'},temp1:{value:''},temp2:{value:''}}},rect39:{type:'task',text:{text:'任务E'}, attr:{ x:422, y:615, width:100, height:50}, props:{name:{value:'任务E'},desc:{value:''},rule:{value:'请选择'}}},rect47:{type:'end',text:{text:'结束'}, attr:{ x:449, y:717, width:50, height:50}, props:{text:{value:'结束'},temp1:{value:''},temp2:{value:''}}}},paths:{path28:{from:'rect21',to:'rect22', dots:[],text:{text:'TO 分支'},textPos:{x:0,y:-10}, props:{text:{value:''}}},path30:{from:'rect22',to:'rect24', dots:[],text:{text:'TO 任务'},textPos:{x:0,y:-10}, props:{text:{value:''}}},path36:{from:'rect23',to:'rect26', dots:[{x:286,y:526}],text:{text:'TO 合并'},textPos:{x:0,y:-10}, props:{text:{value:'TO 合并'}}},path37:{from:'rect24',to:'rect26', dots:[],text:{text:'TO 合并'},textPos:{x:0,y:-10}, props:{text:{value:''}}},path38:{from:'rect25',to:'rect26', dots:[{x:695,y:522}],text:{text:'TO 合并'},textPos:{x:0,y:-10}, props:{text:{value:'TO 合并'}}},path41:{from:'rect20',to:'rect21', dots:[],text:{text:'TO 规则A'},textPos:{x:0,y:-10}, props:{text:{value:''}}},path42:{from:'rect22',to:'rect25', dots:[{x:694,y:290}],text:{text:'TO 规则B'},textPos:{x:0,y:-10}, props:{text:{value:'TO 规则B'}}},path45:{from:'rect22',to:'rect23', dots:[{x:284,y:288}],text:{text:'TO 规则D'},textPos:{x:13,y:-10}, props:{text:{value:'TO 规则D'}}},path46:{from:'rect26',to:'rect39', dots:[],text:{text:'TO 任务E'},textPos:{x:0,y:-10}, props:{text:{value:''}}},path48:{from:'rect39',to:'rect47', dots:[],text:{text:'TO 结束'},textPos:{x:0,y:-10}, props:{text:{value:''}}}},props:{props:{name:{value:'新建流程'},key:{value:''},desc:{value:''}}}})"
		// $we.app.flows.data="{states:{rect3:{type:'start',text:{text:'开始'}, attr:{ x:413, y:67, width:50, height:50}, props:{text:{value:'开始'},temp1:{value:''},temp2:{value:''}}},rect4:{type:'task',text:{text:'任务A'}, attr:{ x:385, y:156, width:100, height:50}, props:{name:{value:'任务A'},desc:{value:''},rule:{value:'请选择'}}}},paths:{},props:{props:{name:{value:'新建流程'},key:{value:''},desc:{value:''}}}}"
		$we.app.flows.myflow = $(this.node.myflow);
		// showFlowHander($we.app.flows.data);
		$(".ui-droppable svg").width("100%");
	}
	var showFlowHander = function (_data) {
		//然后清除画布
		if($we.app.flows.delFlow){
			$we.app.flows.delFlow();
		}
		var dt=""
		if(_data!=""){
			dt=eval("(" + _data + ")");
		}
		$we.app.flows.myflow.myflow({
			basePath: "",
			restore: dt,//eval("(" + _data + ")"),
			tools: {
				save: {
					onclick: function (data) {
						// alert(data);
						// show(data);
						saveHander(data);
					}
				}
			}
		});
	}
	//打开选择规则
	$we.app.flows.openChooseRule = function () {
		$we.app.flows.saveFlow();//先保存画布上的流程
		$we.app.flows.view.notify("trigger", "打开规则流程选择规则界面");
	}
	//已选择好规则
	$we.app.flows.choosedReady = function (_chooseRule) {
		//然后清除画布
		$we.app.flows.delFlow();
		//拿到选择的数据
		// $we.app.flows.chooseRule={id:"wewe334343",nameCh:"规则啊啊啊啊"};
		//格式化现有数据
		var newData = eval("(" + $we.app.flows.data + ")");
		//当前选中到节点
		var currentData = newData.states[$we.app.flows.currSelectRule.getId()];
		if (_chooseRule.length > 0) {//只有一个节点则赋值
			currentData.props.id.value = _chooseRule[0].id;
			currentData.props.nameCh.value = _chooseRule[0].nameCh;
			currentData.props.descr.value = _chooseRule[0].descr;
			// currentData.props.ruleId.value=_chooseRule[0].ruleId;//reasonCode			
			currentData.props.text.value = _chooseRule[0].nameCh;

		}
		var rectIndex = parseInt($we.app.flows.currSelectRule.getId().substring(0, 5).split('rect')[1]);
		
		//如果有多个规则，克隆
		if (_chooseRule.length > 1) {//从第二个开始克隆
			for (var i = 1; i < _chooseRule.length; i++) {
				// newData.states.attr["rect"+rectIndex].text="任务";
				newData.states["rect" + parseInt(rectIndex+i)] = {
					attr: {
						height: 50,
						width: 100,
						x: currentData.attr.x,
						y: currentData.attr.y + 70,
					},
					props: {
						text: { value: _chooseRule[i].nameCh },
						id: { value: _chooseRule[i].id },
						nameCh: { value: _chooseRule[i].nameCh },
						descr: { value: _chooseRule[i].descr },
						// ruleId:{value:_chooseRule[i].ruleId},
						id: { value: _chooseRule[i].id }
					},
					text: { text: "任务" },
					type: "task",
				}
			}
		}

		$we.app.flows.data = JSON.stringify(newData);//newData.toJSONString();
		showFlowHander($we.app.flows.data);

	}
	//打开设置
	$we.app.flows.openSetRuleView = function () {
		$we.app.flows.saveFlow();//先保存画布上的流程
		$we.app.flows.view.notify("trigger", "打开规则设置界面");
		// alert("设置");
	}
	$we.app.flows.setRuleReadey = function (_val) {

		//然后清除画布
		$we.app.flows.delFlow();
		//格式化现有数据
		var newData = eval("(" + $we.app.flows.data + ")");
		//当前选中到节点
		var currentData = newData.paths[$we.app.flows.currSelectRule.getId()];
		currentData.props.condition.value = _val;
		$we.app.flows.data = JSON.stringify(newData);//newData.toJSONString();
		showFlowHander($we.app.flows.data);
		//"[{"left":{"type":3,"value":null,"func":{"id":"1","params":""}},"opt":"!=","right":{"type":3,"value":null,"func":{"id":"2","params":""}}}]"
	}
	//保存数据
	var saveHander = function (obj) {
		$we.app.flows.data = obj;
		if (chcekHander(obj)) {
			$we.app.flows.view.notify("trigger", "保存规则流跟规则关系", {content: obj});
		}

	}
	//保存之前校验
	var chcekHander = function (obj) {
		var chcekData = eval("(" + obj + ")");
		if(chcekData.states.length<0){
			return false;
		}
		for (rect in chcekData.states) {
			if (chcekData.states[rect].type == "task" && chcekData.states[rect].props.ruleId.value == "") {
				alert("请选择规则");
				return false;
			}
		}
		if(chcekData.paths.length<0){
			return false;
		}
		for (path in chcekData.paths) {
			if (chcekData.paths[path].props.condition.value == "") {
				alert("请设置条件");
				return false;
			}
		}

		return true;
	}

	var reSetHander = function () {
		alert("选中之后");
	}
	$we.widget.reg("manage.ruleFlow", {
		init: init,
		interfaces: {
		 showEvent: showFlowHander
		},
		events: {
		},
	});
})();

