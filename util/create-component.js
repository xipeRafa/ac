require("colors");
const fs = require("fs");
const templates = require("./templates");
const componentName = process.argv[2];


if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(2);
}

console.log("Creating Component Templates with name:".random + componentName);




const componentDirectory = `./src/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.cyan);
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
  "Successfully created component under: ".green.italic + componentDirectory.green.italic
);


// no repetir la extencion