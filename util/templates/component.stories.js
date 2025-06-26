module.exports = (componentName) => ({
  content: `
import React from "react";
import ${componentName} from "./${componentName}";

export default {
    title: "${componentName}"
};

export const Component1 = () => <${componentName} label="Hello i am ready to build" theme="primary"/>;

export const Component2 = () => <${componentName} label="Hello i am secondary" theme="secondary"/>;

// cut and paste this link in /src/index.ts
import ${componentName} from "./atoms/${componentName}/${componentName}"


`,
  extension: `.stories.tsx`
});


