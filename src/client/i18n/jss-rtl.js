import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

/*
 * This is the RTL setup for material-ui
 * ref: https://material-ui.com/guides/right-to-left/
 */

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// Custom Material-UI class name generator.
const generateClassName = createGenerateClassName();

export default ({ children }) => ( //eslint-disable-line
  <JssProvider jss={jss} generateClassName={generateClassName}>
    {children}
  </JssProvider>
);
