import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import E404 from './E404';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <E404 />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});