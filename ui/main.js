var button= document.getElementById('counter');
button.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(this.readystate==XMLHttpRequest.DONE)
        {
            if(this.status==200)
            {
              var counter=request.responseText();
              var span=document.getElementById('count');
              span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://noblejoy20.imad.hasura-app.io/counter',true);
    request.send(null);
};