async function analyze(){

let text=document.getElementById("textInput").value;

let resultDiv=document.getElementById("result");

if(text.trim()===""){

resultDiv.innerHTML="⚠️ Vui lòng nhập phản hồi";
resultDiv.className="result neutral";
return;

}

resultDiv.innerHTML="⏳ Đang phân tích...";

let apiKey="YOUR_API_KEY";

let response=await fetch(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key="+apiKey,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[
{
parts:[
{
text:"Phân tích cảm xúc phản hồi sau và chỉ trả lời: Tích cực, Tiêu cực hoặc Trung lập: "+text
}
]
}
]
})
}
);

let data=await response.json();

let result=data.candidates[0].content.parts[0].text;

if(result.includes("Tích cực")){
resultDiv.className="result positive";
}

else if(result.includes("Tiêu cực")){
resultDiv.className="result negative";
}

else{
resultDiv.className="result neutral";
}

resultDiv.innerHTML=result;

}
