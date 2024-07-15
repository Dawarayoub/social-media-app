let userObj={};
function handleInput(event){
    userObj[event.target.id]=event.target.value;
}

function handlePass(event){
    let prevPass=userObj.password;
    let cnfPass=event.target.value;
    if(prevPass==cnfPass){
        document.getElementById("msg").innerText="Passwords matched";
        document.getElementById("registerBtn").disabled=false;
        return true;
    }
    else{
        document.getElementById("msg").innerText="Passwords do not match";
        return false;
    }
}

async function register(event){
    event.preventDefault();
    let result= await fetch("http://localhost:5000/socialMedia/user/register",{
        method:"POST",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(userObj)
    })
    let response=await result.json();
    if(response.status){
    alert("registration successful")
    window.location.href='login.html'; 
    }else{
        alert("registration failed");
        window.location.href='registration.html';
    }
       
   console.log(await result.json());
}