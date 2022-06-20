/* eslint-disable @next/next/no-img-element */

//react import 
import react from 'react';
import reactDOM from 'react-dom';

// images
import galLogo from '../public/images/glogo2.svg';

import Title from '../src/components/Title/Title';
import Navigation from '../src/components/Navigation/Navigation';
import DropDown from '../src/components/DropDown/DropDown';
import Link from '../src/components/DropDown/Link/Link';

// react component
class App extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };


    }

    render() {
        return (
            <div>
                <Navigation>
                    <div className={Navigation.section}>
                        <DropDown></DropDown>
                        <DropDown name="About Us">
                            <Link href="#">Our Team</Link>
                            <Link href='#'>Media</Link> 
                            <Link href='#'>Updates</Link>
                            <Link href='#'>Calendar</Link>
                        </DropDown>
                        <DropDown name="Off Season Projects">
                            <Link href='#'>Trash Bot 2022</Link>
                            <Link href="#">Tote Bot 2019</Link>
                        </DropDown>
                        <DropDown name="Competitions">
                            <Link href="#">2022: RAPID REACT</Link>
                            <Link href='#'>2020 &amp; 2021: INFINITE RECHARGE</Link>
                            <Link href='#'>2019: DEEP SPACE</Link>
                            <Link href='#'>2018: POWER UP</Link>
                            <Link href='#'>2017: STEAMWORKS</Link>
                            <Link href='#'>2016: STRONGHOLD</Link>
                            <Link href='#'>2015: RECYCLE RUSH</Link>
                            <Link href='#'>2014: AERIAL ASSIST</Link>
                            <Link href='#'>2013: Ultimate Ascent{/*no information provided from old website, hoping to fill it in somehow*/}</Link>
                        </DropDown>
                    </div>
                    <div className={Navigation.section}>
                        <Title>
                            <div className='spacer'></div>
                            <div className='fit-content'>
                                <img className={Title.logo} src={galLogo.src} alt=""></img>
                            </div>
                            <div className='fit-content'><p className={Title.text}>4669</p></div>
                        </Title>
                    </div>
                    <div className={Navigation.section}>
                        <div className='out-link'>
                            <a href='#'>Resources</a>
                        </div>
                        <div className='out-link'>
                            <a href='#'>Sponsors</a>
                        </div>
                    </div>
                </Navigation>
            </div>
        );
    }
}





export default App;
