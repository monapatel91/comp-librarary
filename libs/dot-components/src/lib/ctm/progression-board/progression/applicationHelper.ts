import {
  EmptyPackageType,
  PackageType,
  SwimLanepkg,
} from '../ProgressionBoardInterfaces';

const checkIfValidStructure = (application: SwimLanepkg): boolean => {
  return (
    application && 'phases' in application && Array.isArray(application.phases)
  );
};

export const checkIfApplicationHasAnyVersion = (
  application: SwimLanepkg
): boolean => {
  if (!checkIfValidStructure(application)) return false;
  return application.phases.some(
    (phase) =>
      phase.packageVersions.length > 0 &&
      phase.packageVersions.some(
        (pv: PackageType | EmptyPackageType) => 'version' in pv
      )
  );
};
