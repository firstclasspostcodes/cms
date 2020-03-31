import { Interactable } from './components/Interactable';
import { Illustration } from './components/Illustration';
import { Content } from './components/Content';
import { Page } from './components/Page';

const configMap = [
  ['interactable', Interactable],
  ['illustration', Illustration],
  ['content', Content],
  ['page', Page],
];

export const configure = (config = {}) =>
  configMap.forEach(([key, Component]) => {
    if (config[key]) {
      Object.assign(Component, {
        staticConfig: {
          ...Component.staticConfig,
          ...config[key],
        },
      });
    }
  });
