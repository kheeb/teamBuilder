
function generateHTMl(teamArray) {
    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  <header> My Team </header>
  <div> ${teamArray.map(person => {
    if(person.getRole() === 'Manager') {
      return ` <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="images/office.jpg">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${person.name}<i class="material-icons right">business_center</i></span>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
        <p>${person.id}</p>
        <br>
        <p>${person.email}</p>
        <br>
        <p>${person.getOfficeNumber()}</p>
      </div>
    </div>`
    } 
    if(person.getRole() === 'Intern') {
      return ` <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="images/office.jpg">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${person.name}<i class="material-icons right">grade</i></span>
        <p><a href="#"></a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
        <p>${person.id}</p>
        <br>
        <p>${person.email}</p>
      </div>
    </div>`
    }
    if(person.getRole() === 'Engineer') {
      return ` <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="images/office.jpg">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">${person.name}<i class="material-icons right">build</i></span>
        <p><a href="https://github.com/${person.github}">Github Profile</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">${person.getRole()}<i class="material-icons right">close</i></span>
        <p>${person.id}</p>
        <br>
        <p>${person.email}</p>
      </div>
    </div>`
    }
  }).join("")}
  </div>
  <scrip src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
	<script src="index.js"></>
  </body>
</html>
`
};

module.exports = generateHTMl