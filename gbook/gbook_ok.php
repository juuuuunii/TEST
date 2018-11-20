<!-- gbook 저장역할 -->
<?
include_once "inc/connect.php";
$writer = "";
if(isset($_POST['writer'])) $writer = $_POST['writer'];
$content = "";
if(isset($_POST['content'])) $content = $_POST['content'];
$email = "";
if(isset($_POST['email'])) $email = $_POST['email'];
$wdate = date("Y-m-d H:i:s");

/*
$title = "테스트랍니다.";
$content = "작성을 했지요.";
$writer = "이 글의 주인입니다.";
$email = "메일이 궁금한가요.";
$wdate = "2018-11-16 11:18:19";

// insert(데이터넣기)/update(데이트수정)/select(데이터선택)/delete(데이터삭제)
$sql = " insert into guestbook set ";
//$sql.= "title = '".$title."',"; //sql은 추가할 때 .을 붙인다
$sql.= "content = '".$content."',";
$sql.= "writer = '".$writer."',";
$sql.= "email = '".$email."',";
$sql.= "wdate = '".$wdate."'";
//echo $sql;
//for($i=0; $i<100; $i++)
mysqli_query($connect, $sql);

이렇게 써도 됨.
$sql.= "title = '$title',";
$sql.= "content = '$content',";
$sql.= "writer = '$writer',";
$sql.= "email = '$email',";
$sql.= "wdate = '$wdate',";
*/
?>
<script>
location.href = "gbook.php"
</script>