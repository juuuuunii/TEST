$("#bt_save").click(function() {
	var f = $("form[name='g_form']");
	var writer = $("#writer");
	var email = $("#email");
	var content = $("#content");
	if(writer.val() == "") {
		alert("글 쓰는 사람은 누구실까요");
		writer.focus();
		return false;
	}
	if(email.val() == "") {
		alert("이메일이 없나요");
		email.focus();
		return false;
	}
	if(content.val() == "") {
		alert("글은 쓴건가요");
		content.focus();
		return false;
	}	
	f.submit();
});

function delData(id) {
	location.href = "gbook_del.php?id="+id;
}