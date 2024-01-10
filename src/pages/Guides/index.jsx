import { useLocation } from 'react-router-dom';

import pages from '@pages';

import Achievements from './Achievements.jsx';
import Games from './Games.jsx';
import Info from './Info.jsx';
import Passive from './Passive.jsx';
import Rates from './Rates.jsx';
import Syntax from './Syntax.jsx';
import Working from './Working.jsx';

export default function Guides() {
    let path = useLocation().pathname.match(/\/[^/]+\/([^/]+)(?:\/([^/]+))?/)?.[1]?.toLowerCase();

    if (path === undefined) return <Info />;
    else if (path === 'achievements') return <Achievements />;
    else if (path === 'games') return <Games />;
    else if (path === 'passive') return <Passive />;
    else if (path === 'rates') return <Rates />;
    else if (path === 'syntax') return <Syntax />;
    else if (path === 'working') return <Working />;
    else return <pages.Error title='404' description={'We can\'t seem to find the requested page. Check the link and try again.'} />;
};