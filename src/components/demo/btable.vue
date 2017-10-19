<template>
	<div>
		<BasePagination ref="profile" id="table1" :url="pagination.url" :dataGird="pagination.dataGird" dataType="jsonp" :queryData="pagination.queryData1" :queryRule="pagination.queryRule1" :columns="pagination.columns" :showCheckbox="true" :showIndex="true">
			<template slot="searchFormItem">
				<FormItem prop="nsrsbh" label="购方税号">
					<Input type="text" v-model="pagination.queryData1.nsrsbh" placeholder="用户名">
					</Input>
				</FormItem>
				<FormItem prop="start_time" label="开票日期起">
					<Col span="21">
					<DatePicker type="date" v-model="pagination.queryData1.start_time" @on-change="aa" placeholder="选择日期" :editable="false" :transfer="true"></DatePicker>
					</Col>

				</FormItem>
				<FormItem prop="end_time" label="开票日期止">
					<Col span="21">
					<DatePicker type="date" v-model="pagination.queryData1.end_time" @on-change="bb" placeholder="选择时间" :editable="false" :transfer="true"></DatePicker>
					</Col>
				</FormItem>
				<FormItem prop="fpdm" label="发票代码">
					<Input type="text" placeholder="fpdm">
					</Input>
				</FormItem>
				<FormItem prop="fphm" label="发票号码">
					<Input type="text" placeholder="fphm" v-model="pagination.queryData1.fphm">
					</Input>
				</FormItem>
			</template>
			<template slot="toolBar">
				<ButtonGroup>
					<Button type="ghost" icon="social-facebook">取消</Button>
					<Button type="ghost" icon="ios-search">确定</Button>
				</ButtonGroup>
			</template>
		</BasePagination>
	</div>
</template>

<script>
	import BasePagination from '@/components/common/BasePagination'

	export default {
		name: 'btable',
		components: {
			BasePagination
		},
		props: {},
		data() {
			return {
				pagination: {
					url: 'http://web.hydzfp.com/ei_access/html/listBilling.do',
					queryData1: {
						nsrsbh: '510302744676556',
						fpdm: '',
						fphm: '',
						start_time: '',
						end_time: ''
					},
					queryRule1: {
						nsrsbh: [{
							required: true,
							message: '请填写用户名',
							trigger: 'blur'
						}],
						fpdm: [{
							required: false,
							message: '长度不对12位',
							trigger: 'blur',
							type: 'string',
							max: 12,
						}],
						fphm: [{
							required: false,
							message: '长度不对10位',
							trigger: 'blur',
							type: 'string',
							max: 10,
						}]
					},
					columns: [{
							title: 'xsf_mc',
							key: 'XSF_MC',
							ellipsis: true
						},
						{
							title: 'fp_dm',
							key: 'FP_DM'
						},
						{
							title: 'fp_hm',
							key: 'FP_HM',
							ellipsis: true
						},
						{
							title: 'XSF_DZDH',
							key: 'XSF_DZDH',
							ellipsis: true
						}
					]
				}
			}
		},
		mounted: function() {
			this.$nextTick(function() {})
		},
		methods: {
			aa(d) {
				console.log(d)
				this.pagination.queryData1.start_time = d;
			},
			bb(d) {
				console.log(d)
				this.pagination.queryData1.end_time = d;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>