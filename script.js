function analyze(){

let text=document.getElementById("textInput").value.toLowerCase();
let resultDiv=document.getElementById("result");

if(text.trim()===""){
resultDiv.innerHTML="⚠️ Vui lòng nhập phản hồi khách hàng";
return;
}

/* từ khóa cảm xúc */

let positiveWords=["tốt","tuyệt","tuyệt vời","hài lòng","thích","ưng","ok","ổn","đẹp","nhanh","chất lượng"];
let negativeWords=["tệ","kém","chậm","bực","thất vọng","xấu","dở","lỗi","hỏng","không hài lòng"];

/* nhận diện chủ đề */

let productWords=["sản phẩm","chất lượng","đẹp","hỏng","lỗi"];
let shippingWords=["giao","ship","vận chuyển","nhanh","chậm"];
let serviceWords=["hỗ trợ","dịch vụ","nhân viên","tư vấn"];

/* tính điểm cảm xúc */

let score=0;

positiveWords.forEach(word=>{
if(text.includes(word)){score++;}
});

negativeWords.forEach(word=>{
if(text.includes(word)){score--;}
});

/* xác định cảm xúc */

let sentiment="";
let emotion="";

if(score>1){
sentiment="Tích cực";
emotion="😊";
}
else if(score<0){
sentiment="Tiêu cực";
emotion="😡";
}
else{
sentiment="Trung lập";
emotion="😐";
}

/* xác định chủ đề */

let topic="dịch vụ";

productWords.forEach(word=>{
if(text.includes(word)){topic="sản phẩm";}
});

shippingWords.forEach(word=>{
if(text.includes(word)){topic="giao hàng";}
});

serviceWords.forEach(word=>{
if(text.includes(word)){topic="dịch vụ hỗ trợ";}
});

/* tạo phản hồi thông minh */

let reply="";

if(sentiment==="Tích cực"){

reply=`Cảm ơn bạn đã phản hồi tích cực về ${topic}. 
Chúng tôi rất vui khi sản phẩm/dịch vụ mang lại trải nghiệm tốt cho bạn. 
Hy vọng sẽ tiếp tục phục vụ bạn trong những lần mua sắm tiếp theo.`;

}

else if(sentiment==="Tiêu cực"){

reply=`Chúng tôi rất xin lỗi vì trải nghiệm chưa tốt liên quan đến ${topic}. 
Đội ngũ CSKH sẽ kiểm tra lại vấn đề và cải thiện dịch vụ để mang lại trải nghiệm tốt hơn cho bạn.`;

}

else{

reply=`Cảm ơn bạn đã chia sẻ phản hồi về ${topic}. 
Chúng tôi luôn ghi nhận ý kiến của khách hàng để cải thiện sản phẩm và dịch vụ tốt hơn.`;

}

/* hiển thị */

resultDiv.innerHTML=`

<h3>${emotion} Phân tích cảm xúc: ${sentiment}</h3>

<b>Chủ đề phản hồi:</b> ${topic}

<br><br>

<b>💬 Phản hồi CSKH:</b><br>
${reply}

`;

}
