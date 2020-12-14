/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeStyles } from '@material-ui/core';
import { Styles } from '@material-ui/styles/withStyles';

export function useStylesWithRootClass<Theme, ClassKey extends string = string>(
  name: string,
  styles: Styles<Theme, {}, ClassKey>,
  className?: string,
  props?: any
) {
  // generate style classes
  const classes: any = makeStyles(styles, { name })(props);

  // get the root class and separate the other classes from generated styles
  const { root, ...otherClasses } = classes;

  // combine the root classes into one string
  const rootClasses = [name, root, ...(className ? [className] : [])].join(' ');

  return {
    rootClasses,
    otherClasses,
  };
}
