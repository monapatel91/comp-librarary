import { base64Logos } from '../../../../assets/base64Logos';

export interface SourceControlSystem {
  label: string;
  base64: string;
}

export interface SourceControlSystemRecord {
  [key: string]: SourceControlSystem;
}

export const sourceControls: SourceControlSystemRecord = {
  github: {
    label: 'Github',
    base64: base64Logos.github,
  },
  gitlab: {
    label: 'GitLab',
    base64: base64Logos.gitlab,
  },
  bitbucket: {
    label: 'Bitbucket',
    base64: base64Logos.bitbucket,
  },
};
