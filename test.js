var users= [ {
               'email':'anbualagan26@gmail.com',
               'pwd':'anbu',
               'firstname': 'anbu',
               'lastname' : 'alagan',
               'phno':9390016679
}, {
                'email':'rajesh26@gmail.com',
               'pwd':'rajesh',
               'firstname': 'rajesh',
               'lastname' : 'reddy',
               'phno':9390015655
}
]
  var userFound = true;
  var checkLogin = function(email,pwd,users){
      if(['email']==email){
          if(['pwd']==pwd){
              userFound=true
              pwdCorrect=true
              break
          }else{
              userFound=true
              pwdCorrect=false
              break 

          }
      } else{
          userFound=false
      }
    if(userFound==true && pwd==true){
      alert('you are logged in')

  }else if (userFound==true && pwd==false) {
      alert('you have provided incorrect passsword')
  }else{
      alert('no user with this email found')
  }
  }	
  
  
  var email=prompt('enter your email')
  var pwd=prompt('enter your pwd')
  
  checkLogin(email,pwd,users)


