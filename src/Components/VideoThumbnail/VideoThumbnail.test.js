import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import VideoThumbnail from './VideoThumbnail';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <VideoThumbnail />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});