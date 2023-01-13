import React from 'react';

export const navLinks = [
  {
    label: 'About',
    url: '/#about',
    ref: React.createRef<HTMLLIElement>(),
  },
  {
    label: 'Projects',
    url: '/#projects',
    ref: React.createRef<HTMLLIElement>(),
  },
  {
    label: 'Contact Me',
    url: '/#contacts',
    ref: React.createRef<HTMLLIElement>(),
  },
];
