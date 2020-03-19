/* eslint-disable import/no-unresolved */
import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import button from './objects/button';
import picture from './objects/picture';
import detail from './objects/detail';
import contentBlock from './objects/contentBlock';
import internalLink from './objects/internalLink';
import externalLink from './objects/externalLink';
import portableText from './objects/portableText';
import highlight from './objects/highlight';
import color from './objects/color';
import icon from './objects/icon';

import interactable from './documents/interactable';
import illustration from './documents/illustration';
import page from './documents/page';
import pane from './documents/pane';
import content from './documents/content';
import route from './documents/route';
import data from './documents/data';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    picture,
    detail,
    interactable,

    color,
    icon,
    highlight,
    externalLink,
    internalLink,
    button,
    portableText,
    contentBlock,

    illustration,
    content,
    pane,
    page,
    data,
    route,
  ]),
});
