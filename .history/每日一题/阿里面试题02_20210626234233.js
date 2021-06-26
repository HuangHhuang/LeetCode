var Obj = function(msg){
	this.msg = msg;
	this.shout = function(){
		alert(this.msg);
	}	
	this.waitAndShout = function(){
		//隔五秒钟后执行上面的shout方法
        var _self = this;
        setTimeout("_self.shout()",5000)
	}
}

Obj("huang").waitAndShout()
