import {
    configure
} from '@storybook/react';

function loadStories() {
    require('../stories/index');
    require('../stories/grid');
}

configure(loadStories, module);
