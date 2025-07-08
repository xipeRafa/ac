require("colors");
const fs = require("fs");

const componentName = process.argv[2];

const templates = {
  component: require("./templates/component/component"),
  componentForm: require("./templates/component/componentForm"),
  useComponent: require("./templates/hooks/useComponent"),
  slice: require("./templates/slice/slice"),
};

console.log(process.argv);

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(2);
}

console.log("Creating Component Templates with name:".random + componentName.red.bold);



const createFolder = (path) => {
  if (fs.existsSync(path)) {
    console.error(`Component ${componentName} already exists.`.blue.bold);
    process.exit(2);
  }
  fs.mkdirSync(path);
};

const writeTemplates = (directory, templateArray) => {
  templateArray.forEach((template) => {
    fs.writeFileSync(`${directory}/${template.extension}`, template.content);
  });
};

const componentDirectory = `./src/components/${componentName.toLowerCase()}/`;
createFolder(componentDirectory);
writeTemplates(componentDirectory, [templates.component].map((template) => template(componentName)))
writeTemplates(componentDirectory, [templates.componentForm].map((template) => template(componentName)))
console.log("Successfully created component under: ".cyan.italic + componentDirectory.yellow.italic.bold)

const hooksDirectory = `./src/hooks/`;
writeTemplates(hooksDirectory, [templates.useComponent].map((template) => template(componentName)))
console.log("Successfully created file under: ".cyan.italic + hooksDirectory.yellow.italic.bold)

const sliceDirectory = `./src/store/slices/`;
writeTemplates(sliceDirectory, [templates.slice].map((template) => template(componentName)))
console.log("Successfully created file under: ".cyan.italic + sliceDirectory.yellow.italic.bold)








const appendToFile = (filePath, content, pending) => {
  fs.appendFile(filePath, content, (err) => {
    if (err) {
      console.error('Error adding to file:', err.green);
      return;
    }
    if(pending=='true'){
      console.log(` Pending Accommodation in ${filePath}`.red);
    }else{
      console.log(`Line Successfully added to ${filePath}`);
    }
  })
}

appendToFile(`./src/components/index.js`, `export * from './${componentName.toLowerCase()}/${componentName}'`, `false`)
appendToFile(`./src/hooks/index.js`, `export * from './use${componentName}'`, `false`);

appendToFile(`./src/store/store.tsx`, `
  import { ${componentName.toLowerCase()}Slice } from './slices/${componentName.toLowerCase()}Slice' 
  ${componentName.toLowerCase()}Slice: ${componentName.toLowerCase()}Slice.reducer`, `true`
)

appendToFile(`./src/helpers/explorers/editExplorer.jsx`, ` 
  // inside the return at the end
  edited${componentName}: editEntity('${componentName.toLowerCase()}Array'),`, `true`
)

appendToFile(`./src/helpers/alerts/useConfirmDeleteAlerts.jsx`, 
  ` // import as props
  ${componentName.toLowerCase()}CreateView

  // in collectionMap
  '${componentName}': '${componentName.toLowerCase()}Array'

  // in dispatchMap
  '${componentName}': ${componentName.toLowerCase()}CreateView,`, `true`
)

appendToFile(`./src/router/partialComps/nav/Nav.tsx`, ` // add to the menu
  <Link to="/ac/${componentName.toLowerCase()}/">${componentName}</Link>`, `true`
)

appendToFile(`./src/router/AppRouter.jsx`, ` 
  // add to the imported components menu
  <Route path="/ac/${componentName.toLowerCase()}/" element={<${componentName} />} />

  // add to the list of imported components
  ${componentName}`, `true`
)






