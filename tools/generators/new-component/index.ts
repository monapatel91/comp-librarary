import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  Tree,
} from '@nrwl/devkit';

interface NewComponentSchemaOptions {
  name: string;
}

export default async function (tree: Tree, schema: NewComponentSchemaOptions) {
  // == export new component from `index.ts`
  const exportFilePath = './libs/dot-components/src/lib/components/index.ts';
  const exportFileContents = tree.read(exportFilePath);

  const updatedFileContents = exportFileContents
    .toString()
    .concat(
      `export { Dot${names(schema.name).className} } from './${
        names(schema.name).fileName
      }/${names(schema.name).className}';`
    );

  tree.write(exportFilePath, updatedFileContents);

  // == generate new component files
  generateFiles(
    tree,
    joinPathFragments(__dirname, './files/component/'),
    `./libs/dot-components/src/lib/components/${names(schema.name).fileName}/`,
    {
      className: `dot-${names(schema.name).fileName}`, // e.g. dot-app-toolbar
      componentName: `Dot${names(schema.name).className}`, // e.g. DotAppToolbar
      fileName: names(schema.name).fileName, // e.g. app-toolbar
      normalizedName: names(schema.name).className, // e.g. AppToolbar
      propsName: `${names(schema.name).className}Props`, // e.g. AppToolbarProps
      styledName: `Styled${names(schema.name).className}`, // e.g. StyledAppToolbar
    }
  );

  // == generate new component e2e test files
  generateFiles(
    tree,
    joinPathFragments(__dirname, './files/e2e/'),
    `./apps/dot-components-e2e/src/integration/${
      names(schema.name).className
    }/`,
    {
      className: `dot-${names(schema.name).fileName}`, // e.g. dot-app-toolbar
      fileName: names(schema.name).fileName, // e.g. app-toolbar
      normalizedName: names(schema.name).className, // e.g. AppToolbar
    }
  );

  await formatFiles(tree);
}
