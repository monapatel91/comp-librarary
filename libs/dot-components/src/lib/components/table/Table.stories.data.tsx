import React from 'react';
import DotIconButton from '../button/IconButton';

const deleteIcon = <DotIconButton iconId="delete" />;

export const defaultColumns = [
  { id: 'title', label: 'Title', width: '30%' },
  { id: 'hometown', label: 'Hometown', width: '30%' },
  { id: 'fans', label: 'Fan Base', align: 'right', width: '20%' },
  { id: 'delete', sortable: false, width: '24px', align: 'right' },
];

export const defaultData = [
  {
    id: 'ironman',
    selected: false,
    rowData: {
      title: 'Ironman',
      hometown: 'Malibu',
      fans: 1,
      delete: deleteIcon,
    },
  },
  {
    id: 'batman',
    rowData: {
      title: 'Batman',
      hometown: 'Gotham City',
      fans: 1012,
      delete: deleteIcon,
    },
  },
  {
    id: 'marvel',
    rowData: {
      title: 'Captain Marvel',
      hometown: 'Far Far Away',
      fans: 18,
      delete: deleteIcon,
    },
  },
  {
    id: 'superman',
    rowData: {
      title: 'Superman',
      hometown: 'Metropolis',
      fans: 204,
      delete: deleteIcon,
    },
  },
];

export const paginatedColumns = [
  { id: 'name', label: 'Name', width: '50%' },
  { id: 'hit', label: 'Hit Song', width: '50%' },
];

export const paginatedData = [
  {
    id: 'bessie_smith',
    rowData: {
      name: 'Bessie Smith',
      hit: 'Down Hearted Blues',
    },
  },
  {
    id: 'etta_james',
    rowData: {
      name: 'Etta James',
      hit: 'Tough Lover',
    },
  },
  {
    id: 'muddy_waters',
    rowData: {
      name: 'Muddy Waters',
      hit: 'Mannish Boy',
    },
  },
  {
    id: 'howlin_wolf',
    rowData: {
      name: "Howlin' Wolf",
      hit: "Smokestack Lightnin'",
    },
  },
  {
    id: 'billie_holiday',
    rowData: {
      name: 'Billie Holiday',
      hit: 'The Very Thought of You',
    },
  },
  {
    id: 'bb_king',
    rowData: {
      name: 'B.B. King',
      hit: 'The Thrill is Gone',
    },
  },
  {
    id: 'ma_rainey',
    rowData: {
      name: 'Ma Rainey',
      hit: 'Deep Moaning Blues',
    },
  },
  {
    id: 'robert_johnson',
    rowData: {
      name: 'Robert Johnson',
      hit: 'Hellhound on My Trail',
    },
  },
  {
    id: 'elmore_james',
    rowData: {
      name: 'Elmore James',
      hit: 'Dust My Broom',
    },
  },
  {
    id: 'ray_charles',
    rowData: {
      name: 'Ray Charles',
      hit: 'Hit the Road Jack',
    },
  },
  {
    id: 'bill_broonzy',
    rowData: {
      name: 'Big Bill Broonzy',
      hit: 'House Rent Stomp',
    },
  },
  {
    id: 'ruth_brown',
    rowData: {
      name: 'Ruth Brown',
      hit: 'Wild Wild Young Men',
    },
  },
  {
    id: 'koko_taylor',
    rowData: {
      name: 'KoKo Taylor',
      hit: 'Wang Dang Doodle',
    },
  },
  {
    id: 'memphis_minnie',
    rowData: {
      name: 'Memphis Minnie',
      hit: 'Me and My Chauffeur Blues',
    },
  },
  {
    id: 'big_maybelle',
    rowData: {
      name: 'Big Maybelle',
      hit: '96 Tears',
    },
  },
  {
    id: 'skip_james',
    rowData: {
      name: 'Skip James',
      hit: 'Devil Got My Woman',
    },
  },
  {
    id: 'leadbelly',
    rowData: {
      name: 'Leadbelly',
      hit: 'Where Did You Sleep Last Night',
    },
  },
  {
    id: 'son_house',
    rowData: {
      name: 'Son House',
      hit: 'John the Revelator',
    },
  },
  {
    id: 'john_lee_hooker',
    rowData: {
      name: 'John Lee Hooker',
      hit: 'Boom Boom',
    },
  },
  {
    id: 'jimmy_reed',
    rowData: {
      name: 'Jimmy Reed',
      hit: 'Bright Lights, Big City',
    },
  },
  {
    id: 'alberta_hunter',
    rowData: {
      name: 'Alberta Hunter',
      hit: 'St. Louis Blues',
    },
  },
  {
    id: 'jb_lenoir',
    rowData: {
      name: 'J B Lenoir',
      hit: 'Mama Talk to Your Daughter',
    },
  },
  {
    id: 'nina_simone',
    rowData: {
      name: 'Nina Simone',
      hit: 'Mississippi Goddam',
    },
  },
  {
    id: 'john_hurt',
    rowData: {
      name: 'Mississippi John Hurt',
      hit: "Ain't Nobody's Dirty Business",
    },
  },
  {
    id: 'buddy_guy',
    rowData: {
      name: 'Buddy Guy',
      hit: 'First Time I Met the Blues',
    },
  },
  {
    id: 'bo_diddley',
    rowData: {
      name: 'Bo Diddley',
      hit: 'Who Do You Love',
    },
  },
];
