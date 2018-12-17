listNews = [
	{
		news_content:"SKT Peanut: Thú săn mồi 'tiến hóa'",
		news_details_1 :"Han “Peanut” Wang-ho, người đi rừng được yêu thích nhất của ROX Tigers một thời sau màn trình diễn chói sáng tại CKTG 2016. Lối chơi tấn công hổ báo đã thành thương hiệu hay những pha cướp Baron thần kỳ với Lee Sin đã đem đến cho Peanut một lượng fan hâm mộ khổng lồ trên khắp thế giới. Thất bại năm ngoái trước SKT ở Bán Kết chính là trận đấu cuối cùng mà Peanut sát cánh cùng ROX bởi sau đó, siêu sao đi rừng này đã có mặt trong đội hình SKT để chinh phục những mục tiêu còn dang dở của anh.",
		news_details_1_img :"Images/peanut1.jpg",
		news_details_2 : "Hơn một năm qua, Peanut đã phải thay đổi mình để hòa nhập với lối chơi của SKT: trưởng thành hơn, cẩn thận hơn và tính toán hơn. Cho tới trận Tứ Kết của CKTG 2017 năm nay, phong độ phập phù của Peanut khiến nhiều người không khỏi lo lắng. Bỏ bên tai những chỉ trích đó, Peanut xuất hiện trong ván 5 quyết định của trận Bán Kết khi SKT đối đầu với RNG. Và rồi, hình ảnh ROX Peanut hiện về, đưa SKT T1 vượt qua gian khó và góp mặt trong trận chung kết thứ tư của họ.",
		news_content_1 :"Công thức chiến thắng của SKT",
		news_details_3_img  :"Images/peanut.jpg",
		newsArr1 :"SKT Peanut xuất phát với vai trò dự bị trong trận đấu với RNG <br/>Nhìn lại những chức vô địch vào năm 2015 và 2016, chúng ta biết SKT vận hành đội hình 6 người của mình nhuần nhuyễn tới mức nào. Ở 2015, đó là sự xuất hiện của Easyhoon bổ sung tuyệt vời cho đường giữa của SKT. Trong năm 2016, Bengi – Blank là hai cái tên xoay vòng giúp SKT trở thành đội đầu tiên bảo vệ thành công chức vô địch Thế Giới. Trong khi đa phần các đội thường rất khó khăn trong việc bố trí nhân sự của một đội hình 6 người, thế nhưng SKT lại biến nó trở thành công thức đến tới chiến thắng.<br/>Tại Bán Kết của CKTG 2016, SKT đã bị dẫn 2-1 bởi đối thủ của mình, ROX Tigers. HLV kkOma ngay lập tức đưa Bengi vào thay thế cho Blank khi đó. Sức ép khi đó đặt lên đôi vai của người đi rừng kỳ cựu bên phía SKT, nhưng bằng kinh nghiệm của mình, Bengi đã mang về hai chiến thắng cho SKT, qua đó có được chiến thắng chung cuộc 3-2 để có mặt trong trận Chung Kết định mệnh. Ở mùa giải 2017, Blank đã phần nào lấp được khoảng trống mà Bengi để lại. Trong trận Tứ Kết đầy khó khăn trước Misfits, Blank vào thế chỗ cho Peanut để giúp SKT giành được chiến thắng suýt sao 3-2.",
		newsArr2 : "Tại sao SKT lại có thể sử dụng quyền thay người để có được thành công như vậy? Trong quá khứ, các đội tuyển và người chơi từng tranh cãi rằng việc có người dự bị chất lượng là rất khó. Khi luyện tập, chắc chắn người chơi chính và người dự bị sẽ phải chia sẻ cùng một khoảng thời gian cố định để tập cùng cả đội – không ai trong số họ được tập luyện đầy đủ. Về mặt lý thuyết, điều đó có vẻ hợp lý, nhưng với SKT, bằng một cách nào đó mà họ vẫn có thể xoay vòng tuyển thủ của mình, và người vào thế chỗ vẫn luôn thi đấu rất thành công. Câu trả lời, nghe có vẻ khó tin, nhưng nó đến từ việc xây dựng mối quan hệ giữa chính thức và dự bị."
		
		
	}
]
function loadnews(){
	var news_content = document.getElementById("news_content");
	var news_details_1 = document.getElementById("news_details_1");
	var news_details_1_img = document.getElementById("news_details_1_img");
	var news_details_2 = document.getElementById("news_details_2");
	var news_content_1 = document.getElementById("news_content_1");
	var news_details_3 = document.getElementById("news_details_3");
	var news_details_3_img = document.getElementById("news_details_3_img");
	var news = document.getElementById("news");
	var newsArr = news[0].document.getElementsByTagName("p");
	
	news_content.innerHTML = listNews[x].news_content;
	news_details_1.innerHTML = listNews[x].news_details_1;
	news_details_1_img.src= listNews[x].news_details_1_img ;
	news_details_1_img.setAttribute("src",listNews[x].news_details_1_img);
	news_details_2.innerHTML = listNews[x].news_details_2;
	news_content_1.innerHTML = listNews[x].news_content_1;
	news_details_3.innerHTML = listNews[x].news_details_3;
	news_details_3_img.setAttribute("src",listNews[x].news_details_3_img);
	newsArr[0].innerHTML = listNews[x].newsArr1;
	newsArr[1].innerHTML = listNews[x].newsArr2;
}