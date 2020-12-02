import React from 'react';
import ValidPackage from './PackageVersion';

const InvalidPackage = () => <div></div>;

const PackageDetails = (props) => {
  const { rangeIsInvalid } = props;
  const Package = rangeIsInvalid ? InvalidPackage : ValidPackage;
  return <Package {...props} />;
};

export default (props) => {
  const { packageVersions } = props;
  return (
    <li className="board-column">
      {packageVersions.map((packageVersion, i) => (
        <PackageDetails {...packageVersion} key={i} selectWorkitemProps={props.selectWorkitemProps}/>
      ))}
    </li>
  );
};
