import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import VideoContainer from './VideoContainer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <VideoContainer />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});