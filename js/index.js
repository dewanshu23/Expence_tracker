let choice = true;
let title, amt;
let histDiv = document.querySelector('.histTable');
let expenceAmmt=0,incomeAmmt=0,balance=0;
document.querySelector('#btn1').style=" background-color: rgb(100, 149, 241);color: rgb(231, 231, 231);border: none;"
function exp(){
    choice = true;
    document.querySelector('#btn1').style=" background-color: rgb(100, 149, 241);color: rgb(231, 231, 231);border: none;"
    document.querySelector('#btn2').style=" background-color: rgb(255, 255, 255);color: rgb(100, 149, 241);border: 2px solid rgb(100, 149, 241);"
}

function income(){
    choice = false;
    document.querySelector('#btn2').style=" background-color: rgb(100, 149, 241);color: rgb(231, 231, 231);border: none;"
    document.querySelector('#btn1').style=" background-color: rgb(255, 255, 255);color: rgb(100, 149, 241);border: 2px solid rgb(100, 149, 241);"

}

function add(){
    title = document.querySelector('.title');
    amt = document.querySelector('.amt');
    
    if(choice)
    {
        if(title.value!='' && amt.value!='')
        {
            histDiv.innerHTML += `<tr class='row'><td class="a">${title.value}</td><td class ="b">-&#8377;${amt.value}</td></tr>`
            expenceAmmt+=parseInt(amt.value);
            balance=incomeAmmt-expenceAmmt;
            title.value = ''
            amt.value = ''
            document.querySelector('#bal1').value=balance;
            document.querySelector('#bal2').value=expenceAmmt;
            document.querySelector('#bal3').value=incomeAmmt;
            document.querySelector('.clr').style='visibility:visible'
        }
       
    }
    else
    {
        if(title.value!='' && amt.value!=''){
            histDiv.innerHTML += `<tr class='row'><td class="a">${title.value}</td><td class ="b">&#8377;${amt.value}</td></tr>`
            incomeAmmt+=parseInt(amt.value);
            balance=incomeAmmt-expenceAmmt;
            title.value = ''
            amt.value = ''
            document.querySelector('#bal1').value=balance;
            document.querySelector('#bal2').value=expenceAmmt;
            document.querySelector('#bal3').value=incomeAmmt;
            document.querySelector('.clr').style='visibility:visible'
        }
    }
    
    

}

function clr(){
    histDiv.innerHTML = '';
}