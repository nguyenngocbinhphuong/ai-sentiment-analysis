function analyze(){

let text=document.getElementById("textInput").value.toLowerCase();

if(text===""){
alert("Vui lòng nhập phản hồi");
return;
}

let positiveWords=[
"tốt","tuyệt","hài lòng","ưng","ok",
"đẹp","nhanh","chất lượng","thích"
];

let negativeWords=[
"tệ","kém","chậm","bực",
"thất vọng","xấu","dở"
];

let score=0;

positiveWords.forEach(word=>{
if(text.includes(word)) score++;
});

negativeWords.forEach(word=>{
if(text.includes(word)) score--;
});

let resultDiv=document.getElementById("result");

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
