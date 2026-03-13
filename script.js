function analyze(){

let text=document.getElementById("textInput").value.toLowerCase();

let resultDiv=document.getElementById("result");

/* kiểm tra input */

if(text.trim()===""){

resultDiv.innerHTML="⚠️ Vui lòng nhập phản hồi khách hàng";
resultDiv.className="result neutral";
return;

}

/* hiển thị đang phân tích */

resultDiv.innerHTML="⏳ Đang phân tích...";

/* danh sách từ tích cực */

let positiveWords=[
"tốt","tuyệt","hài lòng","ưng","ok",
"đẹp","nhanh","chất lượng","thích",
"tuyệt vời","ổn","đỉnh","xuất sắc"
];

/* danh sách từ tiêu cực */

let negativeWords=[
"tệ","kém","chậm","bực",
"thất vọng","xấu","dở",
"không hài lòng","lỗi","hỏng"
];

let score=0;

/* kiểm tra từ tích cực */

positiveWords.forEach(word=>{
if(text.includes(word)){
score++;
}
});

/* kiểm tra từ tiêu cực */

negativeWords.forEach(word=>{
if(text.includes(word)){
score--;
}
});

/* hiển thị kết quả */

if(score>0){

resultDiv.innerHTML="😊 Tích cực (Score: "+score+")";
resultDiv.className="result positive";

}

else if(score<0){

resultDiv.innerHTML="😡 Tiêu cực (Score: "+score+")";
resultDiv.className="result negative";

}

else{

resultDiv.innerHTML="😐 Trung lập (Score: "+score+")";
resultDiv.className="result neutral";

}

}


/* copy kết quả */

function copyResult(){

let result=document.getElementById("result").innerText;

if(result===""){

alert("Chưa có kết quả để copy");
return;

}

navigator.clipboard.writeText(result);

alert("Đã copy kết quả");

}
