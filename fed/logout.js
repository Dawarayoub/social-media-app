function logout(){
    localStorage.removeItem('token');
    alert("User Logged Out Successfully");
    window.location.href = 'index.html';
}