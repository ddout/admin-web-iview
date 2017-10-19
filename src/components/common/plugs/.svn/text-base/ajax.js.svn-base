import Vue from 'vue'
import iView from 'iview';

function install(Vue) {
	$.fn.serializeObject = function() {
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if(o[this.name]) {
				if(!o[this.name].push) {
					o[this.name] = [o[this.name]];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};

	// ajax
	Vue.prototype.$ajax = function(ajax_config = {}) {
		var vue_this = this;
		vue_this.$Message.config({
			top: 50,
			duration: 3
		});
		var _ajax_config = {
			url: '',
			type: 'POST',
			dataType: 'json',
			async: 'false',
			data: {},
			success: function(data) {},
			error: function(msg) {
				if(null == msg) {
					vue_this.$Message.error('通讯错误!');
				} else {
					vue_this.$Message.error(msg);
				}
			}
		};
		$.extend(_ajax_config, ajax_config);
		$.ajax({
			url: _ajax_config.url,
			type: _ajax_config.type,
			dataType: _ajax_config.dataType,
			async: _ajax_config.async,
			data: _ajax_config.data,
			beforeSend: function() {
				vue_this.$Spin.show();
			},
			complete: function() {
				vue_this.$Spin.hide();
			},
			success: function(data) {
				if(data['result'] == 'SUCCESS') {
					_ajax_config.success(data['rows']);
				} else if(data['result'] == 'ERROR') {
					_ajax_config.error(data['msg']);
				}
			},
			error: function(xhr, errorType, error) {
				if(xhr['status'] == '600') {
					vue_this.$Modal.error({
						title: "提示信息",
						content: "未登录",
						onOk() {
							console.log(111);
						}
					});
					return;
				} else if(xhr['status'] == '401') {
					vue_this.$Message.warning('您没有该操作的访问权限!');
				} else {
					vue_this.$Message.error('出错了! error:' + xhr['status']);
				}
			}
		});
	}

}

export default install;

Vue.use(install);