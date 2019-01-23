import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import Videos from './Videos';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <Videos />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});