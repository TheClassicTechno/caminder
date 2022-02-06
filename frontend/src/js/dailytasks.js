function enterNumber(n) {
    while (isNaN(parseInt(n))) {
      n = parseInt(prompt("Please enter a number: "));
    }
  
    for (var i = 1; i <= n; i++) {
  
      if (i % 15 === 0) {
        document.write("Fizz Buzz" + "<br>");
        continue;
      } else if (i % 3 === 0) {
        document.write("Fizz" + "<br>");
        continue;
      } else if (i % 5 === 0) {
        document.write("Buzz" + "<br>");
        continue;
      }
      document.write(i + "<br>");
    }
  
  };
  
  //enterNumber();

function req(data) {
  const request = new Request(`https://gunnhacks.m51kor8mpfn22.ca-central-1.cs.amazonlightsail.com/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}
const Url='https://gunnhacks.m51kor8mpfn22.ca-central-1.cs.amazonlightsail.com/';
$('.btn').click(function(){
	const time=[  
    { "start": "1:10 am", "end": "1:14 am"},
    { "start": "1:10 am", "end": "1:14 am"}
  ];
 
	$.ajax({
		url: Url,
		type:"POST",
    contentType: "application/json; charset=utf8",
    dataType: "json",
    data: time,
		success: function(result){
		console.log(result)
	},
	error:function(error){
		console.log('Error ${error}')
	}
})
})

$(() => {
  // function will get executed 
  // on click of submit button
  $("#submitButton").click(function(ev) {
      var form = $("#formId");
      var url = form.attr('action'); 
      alert("Form Submited Successfully");
      $.ajax({
          type: "POST",
          url: url,
          data: form.serialize(),
          success: function(data) {
                
              // Ajax call completed successfully
              alert("Form Submited Successfully");
          },
          error: function(data) {
                
              // Some error in ajax call
              alert("some Error");
          }
      });
  });
});




