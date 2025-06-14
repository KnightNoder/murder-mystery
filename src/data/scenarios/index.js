// ./data/scenarios/index.js
import scenario1 from './scenario1.js';
import scenario2 from './scenario2.js';
import scenario3 from './scenario3.js';
import scenario4 from './scenario4.js';
import scenario5 from './scenario5.js';
import scenario6 from './scenario6.js';
import scenario7 from './scenario7.js';
import scenario8 from './scenario8.js';
import scenario9 from './scenario9.js';
import scenario10 from './scenario10.js';
import scenario11 from './scenario11.js';
import scenario12 from './scenario12.js';
import scenario13 from './scenario13.js';
import scenario14 from './scenario14.js';
import scenario15 from './scenario15.js';
import scenario16 from './scenario16.js';
import scenario17 from './scenario17.js';
import scenario18 from './scenario18.js';
import scenario19 from './scenario19.js';

export const scenarios = [
  scenario1,
  scenario2,
  scenario3,
  scenario4,
  scenario5,
  scenario6,
  scenario7,
  scenario8,
  scenario9,
  scenario10,
  scenario11,
  scenario12,
  scenario13,
  scenario14,
  scenario15,
  scenario16,
  scenario17,
  scenario18,
  scenario19
];

export const loadScenario = (index) => {
  return scenarios[index] || null;
};

export default scenarios;