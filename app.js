let btn = document.getElementById("btn");
let sec = document.getElementById("sec");
let icon = document.getElementById("icon");
let home =document.getElementById("home");

btn.addEventListener("click",()=>{
    sec.classList.toggle("active");
    console.log("in");
});
icon.addEventListener("click",()=>{
    home.classList.toggle("active");
    sec.classList.toggle("active");
});



function add(){
    var tr = document.createElement("tr");

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var gender = tr.appendChild(document.createElement('td'));
    // var td4 = tr.appendChild(document.createElement('td'));

    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    var input4 = document.getElementById("input4").value;
    var male = document.getElementById("male").value;
    var female = document.getElementById("female").value;
    // var input4 = document.getElementById("input4").value;
    
    td1.innerHTML=input1+" "+input2;
    td2.innerHTML=input3;
    td3.innerHTML=input4;
    var ele = document.getElementsByName('gender');
        for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
                    gender.innerHTML=ele[i].value;
                }
                
        }

    document.getElementById("t1").appendChild(tr);
}