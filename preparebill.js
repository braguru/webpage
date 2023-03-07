function passvalue(){
    var firstname = document.getElementById("fname").value;
    localStorage.setItem("first_text", firstname);
    
    var lastname = document.getElementById("lname").value;
    localStorage.setItem("last_text", lastname);
    
    var program = document.getElementById("programme").value;
    localStorage.setItem("prog", program);
    
    var grades = document.getElementById("grade").value;
    localStorage.setItem("stugrade", grades);
    
    var fschool = document.getElementById("school").value;
    localStorage.setItem("former_school", fschool);
    
    var gender = document.getElementById("Gender").value;
    localStorage.setItem("sex", gender);
    
    var dateOfBirth = document.getElementById("DOB").value;
    localStorage.setItem("date", dateOfBirth);
    
    var residence = document.getElementById("Hall").value;
    localStorage.setItem("hall", residence);
    
    var services = document.getElementById("cafeteria").value;
    localStorage.setItem("service", services);
    
    var Email = document.getElementById("email").value;
    localStorage.setItem("mail", Email);
    
    
    
        }