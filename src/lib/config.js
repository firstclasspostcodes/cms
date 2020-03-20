import { Interactable } from './components/Interactable';

export const configure = (config = {}) => {
  const { interactableComponents } = config;

  if (interactableComponents) {
    Interactable.interactableComponents = interactableComponents;
  }
};
