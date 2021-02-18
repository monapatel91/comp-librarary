export const parseRevURL = (revFrom: number, revToId: string) => {
  return `/flow/package_revision?id=${revToId}&from_revision=${revFrom}`;
};
