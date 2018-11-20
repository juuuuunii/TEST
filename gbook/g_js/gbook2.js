/*
개발 API 명세서
1. API주소: gbook_api.php
2. chk: 'I', writer: "A", content: "B", email: "C"
   라는 데이터를저장
3. chk: 'D', id:2
   id가 2인 데이터를 삭제
4. chk = 'S'
   데이터 전송
*/

//공통함수 - 통신성동
function successFn(data) {
	
}

var gbook = new Ajax("gbook_api.php");
//가져오기
function getData(data) {
	console.log(data);
	if(data.code == 200) {
		//alert("데이터가 저장됨");
		var html = '';
		for(var i=0; i<data.lists.length; i++) {
			html += '<li>';
			html += '<div>'+data.lists[i].writer+' | '+data.lists[i].email+'</div>';
			html += '<div>'+data.lists[i].wdate+'</div>';
			html += '<p>'+data.lists[i].content+'</p>';
			html += '<i onclick="delData('+data.lists[i].id+')"></i>';
			html += '</li>';
		}
		$(".lists").html(html);	
		$("input, textarea").val('');	
	}
}
//삭제
function delData(id) {
	gbook.add({id:id, chk:"D"});
	gbook.send(getData);
}

//F5 누를시 실행
gbook.add({chk:"S"});
gbook.send(getData);




$("#bt_save").click(function() {
	var writer = $("#writer");
	var email = $("#email");
	var content = $("#content");
	if(writer.val() == "") {
		alert("글 쓰는 사람은 누구실까요");
		writer.focus();
		return false;
	}
	if(email.val() == "") {
		alert("이메일이 있어야해요");
		email.focus();
		return false;
	}
	if(content.val() == "") {
		alert("글은 쓴건가요");
		content.focus();
		return false;
	}
	//내용이 모두 채워져 있을 때
	gbook.add({
		chk: "I",
		writer: writer.val(),
		content: content.val(),
		email: email.val()
	});
	gbook.send(getData);
});