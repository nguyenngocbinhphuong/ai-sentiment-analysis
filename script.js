function analyze(){

let text=document.getElementById("textInput").value.toLowerCase();
let resultDiv=document.getElementById("result");

if(text.trim()===""){
resultDiv.innerHTML="⚠️ Vui lòng nhập phản hồi khách hàng";
return;
}

/* từ khóa cảm xúc */

let positiveWords=[
"tốt","tuyệt","tuyệt vời","hài lòng","thích",
"ưng","ok","ổn","đẹp","nhanh","chất lượng"
];

let negativeWords=[
"tệ","kém","chậm","bực","thất vọng",
"xấu","dở","lỗi","hỏng","không hài lòng"
];

/* từ khóa chủ đề */

let productWords=["sản phẩm","chất lượng","đẹp","lỗi","hỏng"];
let shippingWords=["giao","ship","vận chuyển","chậm","nhanh"];
let serviceWords=["nhân viên","hỗ trợ","tư vấn","dịch vụ"];

/* tính điểm cảm xúc */

let score=0;

positiveWords.forEach(word=>{
if(text.includes(word)) score++;
});

negativeWords.forEach(word=>{
if(text.includes(word)) score--;
});

/* xác định cảm xúc */

let sentiment="";
let emoji="";

if(score>1){
sentiment="Tích cực";
emoji="😊";
}
else if(score<0){
sentiment="Tiêu cực";
emoji="😡";
}
else{
sentiment="Trung lập";
emoji="😐";
}

/* xác định chủ đề */

let topic="dịch vụ";

productWords.forEach(word=>{
if(text.includes(word)) topic="sản phẩm";
});

shippingWords.forEach(word=>{
if(text.includes(word)) topic="giao hàng";
});

serviceWords.forEach(word=>{
if(text.includes(word)) topic="dịch vụ hỗ trợ";
});

/* tạo phản hồi CSKH */

let reply="";

if(sentiment==="Tích cực"){

reply="Cảm ơn bạn đã phản hồi tích cực về "+topic+
". Chúng tôi rất vui khi sản phẩm/dịch vụ mang lại trải nghiệm tốt cho bạn.";

}

else if(sentiment==="Tiêu cực"){

reply="Chúng tôi rất xin lỗi vì trải nghiệm chưa tốt liên quan đến "+topic+
". Chúng tôi sẽ kiểm tra và cải thiện dịch vụ để phục vụ bạn tốt hơn.";

}

else{

reply="Cảm ơn bạn đã chia sẻ phản hồi về "+topic+
". Chúng tôi sẽ ghi nhận ý kiến để cải thiện sản phẩm và dịch vụ.";

}

/* hiển thị kết quả */

resultDiv.innerHTML=

"<h3>"+emoji+" Phân tích cảm xúc: "+sentiment+"</h3>"+
"<b>Chủ đề phản hồi:</b> "+topic+
"<br><br>"+
"<b>💬 Phản hồi CSKH:</b><br>"+reply;

}
