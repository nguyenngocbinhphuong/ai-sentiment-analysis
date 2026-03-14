function analyze(){

let text=document.getElementById("textInput").value.toLowerCase();
let resultDiv=document.getElementById("result");

if(text.trim()===""){
resultDiv.innerHTML="⚠️ Vui lòng nhập phản hồi khách hàng";
return;
}

/* từ khóa */

let positiveWords=[
"tốt","tuyệt","tuyệt vời","hài lòng",
"thích","ưng","ok","ổn","đẹp",
"nhanh","chất lượng"
];

let negativeWords=[
"tệ","kém","chậm","bực",
"thất vọng","xấu","dở",
"lỗi","hỏng"
];

/* phủ định */

let negativePrefix=[
"không",
"chẳng",
"chưa"
];

/* tính điểm */

let score=0;

positiveWords.forEach(word=>{

if(text.includes(word)){

let neg=false;

negativePrefix.forEach(prefix=>{
if(text.includes(prefix+" "+word)){
neg=true;
}
});

if(neg){
score--;
}else{
score++;
}

}

});

negativeWords.forEach(word=>{

if(text.includes(word)){

let neg=false;

negativePrefix.forEach(prefix=>{
if(text.includes(prefix+" "+word)){
neg=true;
}
});

if(neg){
score++;
}else{
score--;
}

}

});

/* xác định cảm xúc */

let sentiment="";
let emoji="";

if(score>=2){
sentiment="Tích cực";
emoji="😊";
}
else if(score<=-2){
sentiment="Tiêu cực";
emoji="😡";
}
else{
sentiment="Trung lập";
emoji="😐";
}

/* xác định chủ đề */

let topic="dịch vụ";

if(text.includes("sản phẩm")||text.includes("chất lượng")){
topic="sản phẩm";
}

if(text.includes("giao")||text.includes("ship")){
topic="giao hàng";
}

if(text.includes("nhân viên")||text.includes("hỗ trợ")){
topic="dịch vụ hỗ trợ";
}

/* tạo phản hồi */

let reply="";

if(sentiment==="Tích cực"){

reply=
"Cảm ơn bạn đã phản hồi tích cực về "+topic+
". Chúng tôi rất vui khi trải nghiệm của bạn tốt và hy vọng tiếp tục phục vụ bạn.";

}

else if(sentiment==="Tiêu cực"){

reply=
"Chúng tôi rất xin lỗi vì trải nghiệm chưa tốt liên quan đến "+topic+
". Chúng tôi sẽ kiểm tra lại và cải thiện dịch vụ trong thời gian sớm nhất.";

}

else{

reply=
"Cảm ơn bạn đã chia sẻ phản hồi về "+topic+
". Ý kiến của bạn rất quan trọng để chúng tôi cải thiện sản phẩm và dịch vụ.";

}

/* hiển thị */

resultDiv.innerHTML=

"<h3>"+emoji+" Cảm xúc: "+sentiment+"</h3>"+
"<b>Chủ đề:</b> "+topic+
"<br><br>"+
"<b>💬 Phản hồi CSKH:</b><br>"+reply;

}
