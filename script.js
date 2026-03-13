function analyze(){

let text=document.getElementById("textInput").value.toLowerCase();

let resultDiv=document.getElementById("result");

/* Kiểm tra nếu chưa nhập nội dung */

if(text.trim()===""){

resultDiv.innerHTML="⚠️ Vui lòng nhập phản hồi khách hàng";

resultDiv.className="result neutral";

return;

}

/* Danh sách từ tích cực */

let positiveWords=[
"tốt","tuyệt","hài lòng","ưng","ok",
"đẹp","nhanh","chất lượng","thích",
"tuyệt vời","ổn","đỉnh","xuất sắc"
];

/* Danh sách từ tiêu cực */

let negativeWords=[
"tệ","kém","chậm","bực",
"thất vọng","xấu","dở",
"không hài lòng","lỗi","hỏng"
];

let score=0;

/* Kiểm tra từ tích cực */

positiveWords.forEach(word=>{
if(text.includes(word)) score++;
});

/* Kiểm tra từ tiêu cực */

negativeWords.forEach(word=>{
if(text.includes(word)) score--;
});

/* Hiển thị kết quả */

if(score>0){

resultDiv.innerHTML="😊 Tích cực";

resultDiv.className="result positive";

}

else if(score<0){

resultDiv.innerHTML="😡 Tiêu cực";

resultDiv.className="result negative";

}

else{

resultDiv.innerHTML="😐 Trung lập";

resultDiv.className="result neutral";

}

}


/* Hàm copy kết quả */

function copyResult(){

let result=document.getElementById("result").innerText;

if(result===""){

alert("Chưa có kết quả để copy");

return;

}

navigator.clipboard.writeText(result);

alert("Đã copy kết quả");

}
