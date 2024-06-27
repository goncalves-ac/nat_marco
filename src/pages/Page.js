import React from 'react';
import './../style/Page.css';

import Menu from './../component/Menu.js'
import Countdown from './../component/Countdown.js'


function Page() {

    return ( 
        <section>
            <Menu />
            <Countdown targetDate="2025-01-05T00:00:00" />
        </section>
    );
}

export default Page;
