const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#user-name').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const password = document.querySelector('#user-password').value.trim();
    const age = document.querySelector('#user-age').value.trim();
    const gender = document.querySelector('#user-gender').value.trim();
    const height = document.querySelector('#user-height').value.trim();
    const weight = document.querySelector('#user-weight').value.trim();
    const exerciseLevel = document.querySelector('#user-exerciseLevel').value.trim();
  
    // let userFormInput = [name, email , password , age , gender , height , weight,exerciseLevel ]
  
    console.log(`Name: ${name}, Email: ${email}, ${password}, Age: ${age}, Gender: ${gender}, Height: ${height}, Weight: ${weight} Level ${exerciseLevel}`)
    let userInfo = {
      name: name, 
      email: email, 
      password: password , 
      userAge: age , 
      isMale: gender , 
      userHeight: height , 
      userWeight: weight, 
      userAct: exerciseLevel
    }
  
    if (name && email && password && age && gender && height && weight && exerciseLevel) {
      
      console.log("You clicked me!");
      const response = await fetch(`/api/users`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const data = await response.json();
      console.log(data);
  
      const url = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${userInfo.userAge}&gender=${userInfo.isMale}&height=${userInfo.userHeight}&weight=${userInfo.userWeight}&activitylevel=${userInfo.userAct}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2776c6113fmshd4ff5eb1a349755p107a83jsnf157c1db2717',
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
      };
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
  
  
  
  
  
      }  else {
      alert("Some validation failed");
    }
  
    // document.location.replace('/profile');
  }
    //   if (response.ok) {
    //     document.location.replace('/profile');
    //   } else {
    //     alert('Incorrect entry, please make sure to fill out all items');
    //   }
    // }
  
  
  // const delButtonHandler = async (event) => {
  //   if (event.target.hasAttribute('data-id')) {
  //     const id = event.target.getAttribute('data-id');
  
  //     const response = await fetch(`/api/projects/${id}`, {
  //       method: 'DELETE',
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/profile');
  //     } else {
  //       alert('Failed to delete project');
  //     }
  //   }
  // };
  
  document
    .querySelector('#login-form')
    .addEventListener('submit', newFormHandler);
  
  // document
  //   .querySelector('.project-list')
  //   .addEventListener('click', delButtonHandler);
  