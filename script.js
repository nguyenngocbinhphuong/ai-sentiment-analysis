function analyze(){

let text=document
.getElementById("textInput")
.value
.toLowerCase();

let resultDiv=
document.getElementById("result");

if(text.trim()===""){

resultDiv.innerHTML=
"⚠️ Vui lòng nhập phản hồi khách hàng";

resultDiv.className="result neutral";

return;

}

let positiveWords=[
"tốt","tuyệt","hài lòng","ưng","ok",
"đẹp","nhanh","chất lượng","thích",
"tuyệt vời","ổn","đỉnh"
];

let negativeWords=[
"tệ","kém","chậm","bực",
"thất vọng","xấu","dở",
"lỗi","hỏng"
];

let score=0;

positiveWords.forEach(word=>{
if(text.includes(word)){
score++;
}
});

negativeWords.forEach(word=>{
if(text.includes(word)){
score--;
}
});

let sentiment="";
let reply="";

if(score>0){

sentiment="😊 Tích cực (Score: "+score+")";

reply=
"💬 Phản hồi:<br>Cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của chúng tôi!";

resultDiv.className="result positive";

}

else if(score<0){

sentiment="😡 Tiêu cực (Score: "+score+")";

reply=
"💬 Phản hồi:<br>Chúng tôi rất xin lỗi vì trải nghiệm chưa tốt. Chúng tôi sẽ kiểm tra và cải thiện dịch vụ.";

resultDiv.className="result negative";

}

else{

sentiment="😐 Trung lập (Score: "+score+")";

reply=
"💬 Phản hồi:<br>Cảm ơn bạn đã gửi phản hồi. Chúng tôi sẽ tiếp tục cải thiện dịch vụ.";

resultDiv.className="result neutral";

}

resultDiv.innerHTML=
sentiment+"<br><br>"+reply;

}


/* copy kết quả */

function copyResult(){

let result=document
.getElementById("result")
.innerText;

if(result===""){

alert("Chưa có kết quả để copy");

return;

}

navigator.clipboard.writeText(result);

alert("Đã copy kết quả");

}
