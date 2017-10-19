<template>
	<Row>
		<Col span="24">
		<Form :ref="fromId" :model="queryData" :rules="queryRule" :label-width="labelWidth" :show-message="showMessage" inline>
			<slot name="searchFormItem"></slot>
			<FormItem :label-width="5">
				<Button type="primary" icon="ios-search" @click="handleSubmit()">查询</Button>
			</FormItem>
		</Form>
		</Col>
		<Col span="24">
		<slot name="toolBar"></slot>
		</Col>
		<Col span="24">
		<Table :border="showBorder" :stripe="showStripe" :show-header="showHeader" :height="height ? 520 : ''" :size="tableSize" :highlight-row="highlightRow" :no-data-text="noDataText" :data="queryResultData" :columns="girdColumns">
		</Table>
		</Col>
		<Col span="24">
		<div style="float: right;margin: 10px;overflow: hidden">
			<Page :total="pageData.total" :current.sync="pageData.current" :page-size-opts="pageData.pageSizeOpts" @on-change="pageChange" @on-page-size-change="pageSizeChange" show-sizer show-elevator show-total placement="top"></Page>
		</div>
		</Col>
	</Row>
</template>

<!--
	props{
		id:String required,
		url:String required,
		dataType: String default json,
		columns:{} required , 
		queryData:{} required, 
		queryRule:{},
		labelWidth: int default 80,
		showMessage: Boolean default false
	}
-->
<script>
	export default {
		name: 'BasePagination',
		props: {
			id: {
				required: true,
				type: String
			},
			url: {
				required: true,
				type: String
			},
			limit: {
				type: Number,
				default: 10
			},
			start: {
				type: Number,
				default: 1
			},
			dataType: {
				type: String,
				default: 'json'
			},
			labelWidth: {
				type: Number,
				default: 80
			},
			showMessage: {
				type: Boolean,
				default: false
			},
			queryData: {
				required: true,
				type: Object
			},
			queryRule: {
				type: Object,
				default: function() {
					return {}
				}
			},
			showBorder: {
				type: Boolean,
				default: true
			},
			showStripe: {
				type: Boolean,
				default: true
			},
			showHeader: {
				type: Boolean,
				default: true
			},
			highlightRow: {
				type: Boolean,
				default: true
			},
			showIndex: {
				type: Boolean,
				default: false
			},
			showCheckbox: {
				type: Boolean,
				default: false
			},
			tableSize: {
				type: String,
				default: 'default'
			},
			height: {
				type: Number,
				default: 0
			},
			noDataText: {
				type: String,
				default: '未能获取到数据'
			},
			columns: {
				type: Array,
				required: true,
				default: []
			},
		},
		data() {
			return {
				pageData: {
					pageSizeOpts: [10, 20, 50, 100],
					current: 1,
					total: 0,
					limit: this.$props.limit
				},
				queryResultData: []
			}
		},
		computed: {
			pageQueryString() {
				this.$set(this.queryData, 'limit', this.pageData.limit);
				this.$set(this.queryData, 'start', this.pageData.current);
				return this.queryData;
			},
			fromId() {
				return 'pfrom_' + this.id;
			},
			girdColumns() {
				var cols = this.$props.columns.slice();
				if(this.$props.showIndex == true) {
					cols.unshift({
						type: 'index',
						width: 60,
						align: 'center'
					});
				}
				if(this.$props.showCheckbox == true) {
					cols.unshift({
						type: 'selection',
						width: 60,
						align: 'center'
					});
				}
				return cols;
			},
		},
		methods: {
			loadData() {
				var vm = this;
				vm.$ajax({
					url: vm.url,
					dataType: vm.dataType,
					data: vm.pageQueryString,
					success(data) {
						vm.pageData.total = parseInt(data['total'], 10);
						vm.queryResultData = data['data'];
					}
				});
			},
			handleSubmit() {
				var vm = this;
				vm.$refs[vm.fromId].validate((valid) => {
					if(valid) {
						vm.pageData.current = 1;
						vm.loadData();
					} else {
						vm.$Message.error('查询参数不正确!');
					}
				})
			},
			pageChange(d) {
				this.pageData.current = d;
				this.loadData();
			},
			pageSizeChange(d) {
				this.pageData.limit = d;
				if(this.pageData.current == 1) {
					this.loadData();
				}
			},
		},
		mounted: function() {
			this.$nextTick(function() {
				this.loadData();
			})
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>