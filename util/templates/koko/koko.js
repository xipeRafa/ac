module.exports = (componentName) => ({
  content: `
import React from "react";
import styled from "styled-components";

// Generated with util/create-component.js command: yarn generate NewComponent
import { } from '../../base/sizes'
import { } from '../../base/colors'
import { } from '../../base/typography' 

export interface ${componentName}Props {
    label?: string;
    theme: "primary" | "secondary";
  };

const Div = styled.div<${componentName}Props> 
    // style me please...

    const ${componentName}: React.FC<${componentName}Props> = ({ label, theme }) => (
    <Div theme={theme}>
      {label}
    </Div>
);

export default ${componentName};

`,
  extension: `.css`
});
