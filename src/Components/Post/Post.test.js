import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import Post from './Post';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Post />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});