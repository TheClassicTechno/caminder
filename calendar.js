const Url='http://3.97.12.86:5000/';
$('.btn').click(function(){
	const data={ name:"Said",id:23};
	$.ajax({
		url: Url,
		type:"GET",
		success: function(result){
		console.log(result)
	},
	error:function(error){
		console.log('Error ${error}')
	}

})
})