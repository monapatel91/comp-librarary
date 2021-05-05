import { base64Logos } from '../../../../assets/base64Logos';

export interface TicketSystemInfo {
  label: string;
  base64: string;
}

export interface TicketSystemInfoRecord {
  [key: string]: TicketSystemInfo;
}

export const ticketSystems: TicketSystemInfoRecord = {
  jiraplugin: {
    label: 'Jira',
    base64: base64Logos.jiraplugin,
  },
  v1plugin: {
    label: 'Agility',
    base64: base64Logos.v1plugin,
  },
};
