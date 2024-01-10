import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import pages from '@pages';
import { ErrorBoundary } from './errorBoundary';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<pages.Home />} />
                <Route path='/commands' element={<pages.Commands />} />
                <Route path='/items' element={<pages.Items />} />
                <Route path='/rules' element={<pages.Rules />} />
                <Route path='/guides/*' element={<pages.Guides />} />
                <Route path='*' element={<pages.Error title='404' description={'We can\'t seem to find the requested page. Check the link and try again.'} />} />
            </Routes>
        </BrowserRouter>
    );
};

let root = createRoot(document.getElementById('root'))
root.render(<ErrorBoundary> <App /> </ErrorBoundary>);
export default root;