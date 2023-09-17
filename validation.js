
const admissionForm = document.getElementById('admissionForm');
const loginForm = document.getElementById('loginForm');
const emailRec= document.getElementById('emailRecovery');

if (admissionForm) {
    admissionForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

       
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const dob = document.getElementById('dob').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const program = document.getElementById('program').value;
        const faculty = document.getElementById('faculty').value;
        const department = document.getElementById('department').value;
        const nationality = document.getElementById('nationality').value;

        if (!firstname || !lastname || !dob || !email || !phone || !address || !program || !faculty || !department || !nationality) {
            alert('Please fill in all required fields.');
            return;
        }
        if(phone.startsWith("+2507") && phone.length===13){        
            
            window.location.href="login.html"
       
        }
        window.location.href="login.html"

    });
}

if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

       
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            alert('Please enter both username and password.');
            return;
        }

        
        
        window.location.href="welcome.html"
    });
}
if(emailRec){
    emailRec.addEventListener('submit', (e)=>{
        e.preventDefault();
        const email2=document.getElementById('email2').value;
        if (!email2) {
            alert('Please enter Email.');
            return;
        }
        window.location.href="welcome.html"
    })
}
