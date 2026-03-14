async function analyze(){

let text=document.getElementById("textInput").value;
let result=document.getElementById("result");

if(text===""){
result.innerHTML="⚠️ Vui lòng nhập phản hồi khách hàng";
return;
}

result.innerHTML="⏳ AI đang phân tích...";

/* API KEY */

const API_KEY="AIzaSyAojNeQs-zG5oby3Xjnu6-T_nWQXOxWFt0";

/* prompt cho AI */

let prompt=`
Bạn là chuyên gia phân tích phản hồi khách hàng.

Hãy phân tích đoạn phản hồi sau:

"${text}"

Trả lời theo cấu trúc:

1. Cảm xúc khách hàng (Tích cực / Tiêu cực / Trung lập)
2. Chủ đề chính của phản hồi
3. Nhận xét ngắn về phản hồi
4. Phản hồi lại khách hàng như nhân viên chăm sóc khách hàng chuyên nghiệp
`;

/* gọi API Gemini */

let response = await fetch(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key="+API_KEY,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[
{
parts:[
{ text: prompt }
]
}
]
})
}
);

let data = await response.json();

let output = data.candidates[0].content.parts[0].text;

result.innerHTML = `
<h3>📊 Kết quả phân tích</h3>
<pre>${output}</pre>
`;

}
