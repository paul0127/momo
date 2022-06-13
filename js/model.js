let type_pager = Vue.component('type_pager', {
	props: ['pages','nowpage'],
	template: `<ul class="pager" >
					<li class="pre" :class="nowpage>1?'':'unable'" @click="pre()"><i class="fas fa-angle-double-left"></i></li>
					<li v-for="p in pages" :class="{'active':p==nowpage}" @click="count(p)">
						{{p}}
					</li>
					<li class="next" :class="nowpage<pages?'':'unable'"  @click="next()"><i class="fas fa-angle-double-right"></i></li>
				</ul>`,
	methods: {
		count(p){
			if(this.nowpage!==p){
				let url = location.href;
				window.location.href = this.changeURLArg(url,'p',p);
			}
		},
		pre(){
			if(this.nowpage>1){
				let url = location.href;
				let p = this.nowpage - 1
				window.location.href = this.changeURLArg(url,'p',p);
			}
		},
		next(){
			if(this.nowpage<this.pages){
				let url = location.href;
				let p = this.nowpage + 1
				window.location.href = this.changeURLArg(url,'p',p);
			}
		},
		changeURLArg(url,arg,arg_val){ 
			var pattern=arg+'=([^&]*)'; 
			var replaceText=arg+'='+arg_val; 
			if(url.match(pattern)){ 
				var tmp='/('+ arg+'=)([^&]*)/gi'; 
				tmp=url.replace(eval(tmp),replaceText); 
				return tmp; 
			}else{ 
				if(url.match('[\?]')){ 
					return url+'&'+replaceText; 
				}else{ 
					return url+'?'+replaceText; 
				} 
			} 
			return url+'\n'+arg+'\n'+arg_val; 
		} 
	}
})

let status_1 = Vue.component('status_1', {
	props: [],
	template: `<div class="remarks yel">
					<p>資料審核中．．．</p>
				</div>`,
})

let status_2 = Vue.component('status_2', {
	props: [],
	template: `<div class="remarks" >
					<p>審核尚未通過！<br>說明審核未過原因，說明審核未過原因，說明審核未過原因，說明審核未過原因，說明審核未過原因，<br>若有其他問題請聯繫客服。</p>
				</div>`,
})

let status_3 = Vue.component('status_3', {
	props: [],
	template: `<div class="remarks gre" >
					<p>等待開放預購！</p>
				</div>`,
})

let status_4 = Vue.component('status_4', {
	props: [],
	template: `<div class="remarks gre" >
					<p>商品預購中...</p>
				</div>`,
})

let status_5 = Vue.component('status_5', {
	props: [],
	template: `<div>
					<div><a class="btnStyleC">確認作品預購績效</a>　　<a class="btnStyleC">下載訂購人資料明細</a></div>
					<div class="remarks blu" >
						<p>預購已結束，商品已進入製作階段，請確定依照生產方式描述進行製作並於指定出貨月份以前完成生產</p>
						<a class="btnStyleC jsbtn" @click="update">已完成製作，開始進行商品寄送</a>
					</div>
					<div class="creatStep">
						<span class="use">製作中</span>
						<span class="">發貨中</span>
						<span class="">完成訂單</span>
						<hr class="centerAlign">
					</div>
				</div>`,
	methods: {
		update(e) {
			this.$emit('up');
		}
	}
})

let status_6 = Vue.component('status_6', {
	props: [],
	template: `<div>
					<div ><a class="btnStyleC">確認作品預購績效</a>　　<a class="btnStyleC">下載訂購人資料明細</a></div>
					<div class="remarks blu">
						<p>商品寄送進行中……</p>
						<a class="btnStyleC jsbtn" @click="update">確認已完成商品寄送</a>
					</div>
					<div class="creatStep">
						<span class="complete">製作中</span>
						<span class="use">發貨中</span>
						<span class="">完成訂單</span>
						<hr class="centerAlign">
					</div>
				</div>`,
	methods: {
		update(e) {
			this.$emit('up');
		}
	}
})

let status_7 = Vue.component('status_7', {
	props: [],
	template: `<div>
					<div><a class="btnStyleC">確認作品預購績效</a>　　<a class="btnStyleC">下載訂購人資料明細</a></div>
					<div class="remarks blu">
						<p>進入保固階段，請多留意商品提問留言</p>
					</div>
					<div class="creatStep">
						<span class="complete">製作中</span>
						<span class="complete">發貨中</span>
						<span class="use">完成訂單</span>
						<hr class="centerAlign">
					</div>
				</div>`,
})

let class_list = [
	{
		'color':'status1',
		'text':'尚未送審'
	},
	{
		'color':'status3',
		'text':'審核中'
	},
	{
		'color':'status2',
		'text':'未通過審核'
	},
	{
		'color':'status4',
		'text':'等待預購'
	},
	{
		'color':'status5',
		'text':'預購中'
	},
	{
		'color':'status6',
		'text':'製作中'
	},
	{
		'color':'status6',
		'text':'發貨中'
	},
	{
		'color':'status8',
		'text':'已完成'
	}
]


let changeURLArg = function(url,arg,arg_val){ 
	var pattern=arg+'=([^&]*)'; 
	var replaceText=arg+'='+arg_val; 
	if(url.match(pattern)){ 
		var tmp='/('+ arg+'=)([^&]*)/gi'; 
		tmp=url.replace(eval(tmp),replaceText); 
		return tmp; 
	}else{ 
		if(url.match('[\?]')){ 
			return url+'&'+replaceText; 
		}else{ 
			return url+'?'+replaceText; 
		} 
	} 
	return url+'\n'+arg+'\n'+arg_val; 
} 

function typeQuery(a){
	var url = location.href;
	window.location.href = changeURLArg(url,'type',a);
}

function orderQuery(a){
	var url = location.href;
	window.location.href = changeURLArg(url,'order',a);
}
function fetchQuery(a){
	var url = location.href;
	window.location.href = changeURLArg(url,'limit',a);
}
function sortQuery(b){
	var url = location.href;
	window.location.href = changeURLArg(url,'ord',b);
}

function filterQuery(f){
	var url = location.href;
	window.location.href = changeURLArg(url,'filter',f);
}

function valueQuery(v){
	var url = location.href;
	window.location.href = changeURLArg(url,'value',v);
}

function pageSet(c){
	var url = location.href;
	window.location.href = changeURLArg(url,'p',c);
}

function classSet(c){
	var url = location.href;
	window.location.href = changeURLArg(url,'fliter',c);
}