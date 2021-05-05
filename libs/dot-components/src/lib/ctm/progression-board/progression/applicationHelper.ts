import {
  EmptyPackageType,
  PackageType,
  SCServer,
  SourceControl,
  SwimLanepkg,
} from '../ProgressionBoardInterfaces';
import { ScServerListItem } from '../application/SCServerList';

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

export const getSCServerListItems = (
  sourceControls: Array<SourceControl>
): Array<ScServerListItem> => {
  const listItems: Array<ScServerListItem> = [];
  sourceControls?.forEach((sourceControl: SourceControl) =>
    sourceControl.servers.forEach((scServer: SCServer) =>
      listItems.push({
        scId: sourceControl.id,
        scServerId: scServer.id,
        scServerName: scServer.name,
        scServerTitle: scServer.title,
      })
    )
  );
  return listItems;
};
