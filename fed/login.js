let userObj={}
function handleInput(event){
    userObj[event.target.id]=event.target.value;
}

async function login(event){
    event.preventDefault();
    let result= await fetch("http://localhost:5000/socialMedia/user/login",{
        method:"POST",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(userObj)
    })
    let response=await result.json();
    if(response.token && response.status){
        let token=response.token;
        localStorage.setItem("accesstoken",token);
        alert(response.msg);
        window.location.href='view-post.html'
    }
    else{
        alert(response.msg);
        window.location.href='login.html'
    }

}