require("colors");
const fs = require("fs");
// const templates = require("./templates");
const componentName = process.argv[2];



const component =     require("./templates/component/component");
const componentForm = require("./templates/component/componentForm");
const useComponent =  require("./templates/hooks/useComponent");
const slice =         require("./templates/slice/slice");



console.log(process.argv)

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(2);
}

console.log("Creating Component Templates with name:".random + componentName.red.bold);




const componentDirectory = `./src/components/${componentName}/`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.blue.bold);
  process.exit(2);
}

fs.mkdirSync(componentDirectory)


const generatedTemplates = [component].map((template) => template(componentName))

generatedTemplates.forEach((template) => {

  fs.writeFileSync(
    `${componentDirectory}/${componentName}${template.extension}`, template.content
  )

})


const generatedTemplatesForm = [componentForm].map((template) => template(componentName))

generatedTemplatesForm.forEach((template) => {

  fs.writeFileSync(
    `${componentDirectory}/${template.extension}`, template.content
  )

})

// ///////////////////////////////////////////////////////////////////////////////////////


const hooksDirectory = `./src/hooks/`

const generatedTemplatesHook = [useComponent].map((template) => template(componentName))

generatedTemplatesHook.forEach((template) => {

  fs.writeFileSync(
    `${hooksDirectory}/${template.extension}`, template.content
  )

})



const sliceDirectory = `./src/store/slices/`

const generatedTemplatesSlice = [slice].map((template) => template(componentName))

generatedTemplatesSlice.forEach((template) => {

  fs.writeFileSync(
    `${sliceDirectory}/${template.extension}`, template.content
  )

})






//////////////============================================= linea al final bien 

fs.appendFile(`./src/components/index.js`, 
                `export * from './${componentName.toLowerCase()}/${componentName}'`, (err) => {
    if (err) {
      console.error('Error al añadir al archivo:', err);
      return;
    }
    console.log('Contenido añadido correctamente en ./src/components/index.js');
})

fs.appendFile(`./src/hooks/index.js`, 
                `export * from './use${componentName}'`, (err) => {
    if (err) {
      console.error('Error al añadir al archivo:', err);
      return;
    }
    console.log('Contenido añadido correctamente en ./src/hooks/index.js');
})











//////////////================================ linea al final Pendiente de Acomodar

fs.appendFile(`./src/store/store.tsx`, 
                `import { ${componentName.toLowerCase()}Slice } from './slices/${componentName.toLowerCase()}Slice' 
                ${componentName.toLowerCase()}Slice: ${componentName.toLowerCase()}Slice.reducer`, 
              (err) => {
    if (err) {
      console.error('Error al añadir al archivo:', err);
      return;
    }
    console.log('Pendiente de Acomodar en ./src/store/store.tsx'.red);
})


fs.appendFile(`./src/helpers/explorers/editExplorer.jsx`, 
                ` // dentro del return al final
                  edited${componentName}: editEntity('${componentName.toLowerCase()}Array'),
                `, (err) => {
    if (err) {
      console.error('Error al añadir al archivo:', err);
      return;
    }
    console.log('Pendiente de Acomodar en ./src/helpers/explorers/editExplorer.jsx'.red);
})


fs.appendFile(`./src/helpers/alerts/useConfirmDeleteAlerts.jsx`, 
                ` //importacion como props
                  ${componentName.toLowerCase()}CreateView

                  //en collectionMap
                '${componentName} : ${componentName.toLowerCase()}Array'

                  //en dispatchMap
                '${componentName}': ${componentName.toLowerCase()}CreateView

                `, (err) => {
    if (err) {
      console.error('Error al añadir al archivo:', err);
      return;
    }
    console.log(' Pendiente de Acomodar en ./src/helpers/alerts/useConfirmDeleteAlerts.jsx'.red);
})







console.log(
  "Successfully created component under: ".cyan.italic + componentDirectory.yellow.italic.bold
);





