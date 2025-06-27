require("colors");
const fs = require("fs");
const templates = require("./templates");
const componentName = process.argv[2];

console.log(process.argv)

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(2);
}

console.log("Creating Component Templates with name:".random + componentName.red.bold);




const componentDirectory = `./src/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.blue.bold);
  process.exit(2);
}

fs.mkdirSync(componentDirectory)






const generatedTemplates = templates.map((template) => template(componentName))

generatedTemplates.forEach((template) => {

  fs.writeFileSync(
    `${componentDirectory}/${componentName}${template.extension}`, template.content
  )

});

console.log(
  "Successfully created component under: ".cyan.italic + componentDirectory.yellow.italic.bold
);


// no repetir la extencion