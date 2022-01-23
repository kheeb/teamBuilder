function generateHTMl(teamArray) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container">
        <div class="row">
          <div class="col s12>
            <div class="card blue grey darken-1">
              <div class="card-content white-text">
                <span class="card-title"><h2>My Team<h2/></span>
              </div>
            </div>
          </div>
        </div>
 
      <div class="row">
        ${teamArray
        .map((person) => {
          if (person.getRole() === "Manager") {
          return `
          <div class="col s12 m6 l4">
            <div class="card red darken-3">
              <div class="card-content white-text">
                <span class="card-title"><h4>${person.name}<i class="material-icons right">business_center</i></span></h4>
                  <h5>${person.getRole()}</h5>
                    <p>email: ${person.email}
                    <br>
                    id: ${person.id}
                    <br>
                    office number: ${person.getOfficeNumber()}
                    </p>
              </div>
                <div class="card-action">
                <a href="${person.email}"> email employee</a>
                </div>
            </div>
          </div>`;
          }
          
          if (person.getRole() === "Intern") {
          return `
          <div class="col s12 m6 l4">
            <div class="card green darken-3">
              <div class="card-content white-text">
                <span class="card-title"><h4>${person.name}<i class="material-icons right">grade</i></span></h4>
                  <h5>${person.getRole()}</h5>
                    <p>email: ${person.email}
                    <br>
                    id: ${person.id}
                    <br>
                    school: ${person.getSchool()}
                    </p>
              </div>
                <div class="card-action">
                <a href="${person.email}"> email employee</a>
                </div>
            </div>
          </div>`;
          }
          
          if (person.getRole() === "Engineer") {
          return `
          <div class="col s12 m6 l4">
            <div class="card blue darken-2">
              <div class="card-content white-text">
                <span class="card-title"><h4>${person.name}<i class="material-icons right">build</i></span></h4>
                  <h5>${person.getRole()}</h5>
                    <p>email: ${person.email}
                    <br>
                    id: ${person.id}
                    <br>
                    github: <a href="https://github.com/${person.github}">employee profile</a>
                    </p>
              </div>
                <div class="card-action">
                <a href="${person.email}"> email employee</a>
                </div>
            </div>
          </div>`;
          }
        })
        .join("")}
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
	    <script src="index.js"></>
    </div>
  </body>
</html>
`;
}

module.exports = generateHTMl;
