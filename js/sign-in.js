function showTab(tab) {
   const loginForm = document.getElementById('login');
   const registerForm = document.getElementById('register');
   const loginTab = document.getElementById('login-tab');
   const registerTab = document.getElementById('register-tab');

   if (tab === 'login') {
     loginForm.classList.add('active');
     registerForm.classList.remove('active');
     loginTab.classList.add('active');
     registerTab.classList.remove('active');
   } else {
     loginForm.classList.remove('active');
     registerForm.classList.add('active');
     loginTab.classList.remove('active');
     registerTab.classList.add('active');
   }
 }