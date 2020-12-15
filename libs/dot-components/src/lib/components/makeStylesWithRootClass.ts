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
  const classes = makeStyles(styles, { name })(props);

  // get the root class from generated styles
  const rootClass = 'root' in classes ? classes['root'] : '';

  // combine the root classes into one string
  const rootClasses = [name, rootClass, ...(className ? [className] : [])].join(
    ' '
  );

  // set the combined root classes on the classes object
  classes['root'] = rootClasses;

  return classes;
}
