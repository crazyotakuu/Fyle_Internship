function visibletoinvisible(){
    var ele=document.getElementById('seeall');
    if (ele.innerText =="See all Categories"){
        for (var j = 0; j < 2; j++) {
            var buttons = document.getElementsByClassName('invisible');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.add('visible-rest3');
                buttons[i].classList.remove('invisible');
            }
        }
        ele.innerText = "Hide Categories";
    } else if (ele.innerText =="Hide Categories") {
        for (var j = 0; j < 2; j++) {
            var buttons = document.getElementsByClassName('visible-rest3');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.add('invisible');
                buttons[i].classList.remove('visible-rest3');
            }
        }
        ele.innerText="See all Categories";
    }   
}
// We can implement it using a circular array when we have a connected database, we can do it using backend frameworks.
var position=1;
function leftclick() {
    var text = document.getElementById('change-text');
    var name = document.getElementById('change-name');
    var job = document.getElementById('change-job');
    if(position==1){
        text.innerHTML ="Vestibulum iaculis urna in aliquam fermentum. Donec suscipit sodales arcu id sodales.";
        name.innerText="Rick Roll";
        job.innerText="Software Devleloper";
        position=0;
        console.log(position);
    }
    // if(position==0){
    //     rightclick(1);
    // }
    if(position==2){
        text.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus et dui vel euismod. Nullam hendrerit ultriciesnunc, sit amet maximus enim bibendum eget.";
        name.innerText="Erik Shannon";
        job.innerText="React Developer";
        position=1;
    }

}
function rightclick() {
    var text = document.getElementById('change-text');
    var name = document.getElementById('change-name');
    var job = document.getElementById('change-job');
    if(position==1){
        text.innerHTML ="Cras sed bibendum nisi. Aenean consectetur eros sit amet lectus venenatis, vel iaculis libero bibendum.";
        name.innerText="Sharaon Tate";
        job.innerText="UI developer";
        position=2;
        console.log(position);
    }
    if(position==0){
        text.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus et dui vel euismod. Nullam hendrerit ultriciesnunc, sit amet maximus enim bibendum eget.";
        name.innerText = "Erik Shannon";
        job.innerText = "React Developer";
        position=1;
    }
    // if(position==2){
    //     position=1
    //     leftclick(position);
    // }
    
}