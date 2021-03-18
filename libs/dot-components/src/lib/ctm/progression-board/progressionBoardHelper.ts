export interface OffsetCalculationArgs {
  progressionBoardElement: HTMLElement;
  boardColumnRectRight: number;
  drawerWidth: number;
  drawerOffsetFromBoard?: number;
}

/* Calculates PB offset relative to drawer position so that selected card is always fully visible and not covered by drawer  */
export const calculateProgressionBoardOffset = ({
  progressionBoardElement,
  boardColumnRectRight,
  drawerWidth,
  drawerOffsetFromBoard = 0,
}: OffsetCalculationArgs): number => {
  if (!drawerWidth || !progressionBoardElement) return 0;
  const progressionBoardWidth = progressionBoardElement.offsetWidth;
  const pbRectLeft = progressionBoardElement.getBoundingClientRect().left;
  const drawerRightOffset =
    progressionBoardWidth - drawerWidth + drawerOffsetFromBoard;
  const boardColumnRightOffset = boardColumnRectRight - pbRectLeft;
  const diff = boardColumnRightOffset - drawerRightOffset;
  return diff >= 0 ? diff : 0;
};
