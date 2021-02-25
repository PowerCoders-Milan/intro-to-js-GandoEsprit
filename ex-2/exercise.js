// Example
var yearWasBorn = 1989;
var yearNow = 2021;
var age = yearNow - yearWasBorn;
window.alert("I will be either " + age + " or " + (age + 1) + " in " + yearNow);

yearWasBorn = new Date(1989, 5, 7);
yearNow = Date.now();

var month = 0, day = 0;


if(yearWasBorn.getMont() === yearNow.getMont()){
    if(yearWasBorn.getDate() === yearNow.getDate()){
        age = yearNow - yearWasBorn;
    }
    else if(yearWasBorn.getDate() > yearNow.getDate()){
        day = yearWasBorn.getDay() - yearNow.getDay();
        age = yearNow.getFullYear() - yearWasBorn.getFullYear();
    }
    else
    {
        day = yearNow.getDate() - yearWasBorn.getDate();
        month = 11;
        age = yearNow.getFullYear() - yearWasBorn.getFullYear() - 1;
    }
}
else if(yearWasBorn.getMonth() > yearNow.getMonth()){
    if(yearWasBorn.getDate() === yearNow.getDate()){
        mont = yearWasBorn.getMonth() - yearNow.getMonth();
        age = yearNow.getFullYear() - yearWasBorn.getFullYear() - 1;
    }
    else if(yearWasBorn.getDate() > yearNow.getDate()){
        day = yearWasBorn.getDate() - yearNow.getDate();
        mont = yearWasBorn.getMonth() - yearNow.getMonth();
        age = yearNow.getFullYear() - yearWasBorn.getFullYear() - 1;
    }
    else{
        
    }
}
window.alert(yearWasBorn.getFullYear() + ' ' + yearWasBorn.getDate() + ' ' + yearWasBorn.getMonth());