import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter} from 'react-router-dom';

import ChatBox from './ChatBox';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <ChatBox />
        </MemoryRouter>,
    div);
    ReactDOM.unmountComponentAtNode(div);
});