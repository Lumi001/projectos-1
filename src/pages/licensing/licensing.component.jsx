import React from 'react';
import './licensing.styles.scss';
import List from '../../components/list/list.component';
import { TickLicense } from '../../components/svgs/commsworth';
import Button from '../../components/button/button.component';
// const license = 



class Licensing extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }


    render() {
        return (
            <div className="licensing">
                <h1 className="">Plans that won't break</h1>
                <h1>the bank</h1>
                <div className="shadow-2 list">
                    <table>
                        <tr>
                            <th> </th>
                            <th>Standard</th>
                            <th>Premium</th>
                        </tr>
                        <tr>
                            <th>Features</th>
                        </tr>
                        <List title="Budget tracker" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="" />
                        <List title="Project tracker" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="grey" />
                        <List title="Milestone manager" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="" />
                        <List title="Geotracking" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="grey" />
                        <List title="Milestone manager" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="" />
                        <List title="Geotracking" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="grey" />
                        <List title="Data I/O service" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="" />
                        <List title="Performance Insights" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="grey" />
                        <List title="Contractor Manager" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="" />
                        <List title="Geo-track mobile" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="grey" />
                        <List title="KPI Manager license" normal={<TickLicense />} premium={<TickLicense />} content="Lorem Ipsum" color="" />
                        <List title="" normal={<Button text="Try Standard" color="white"/>} premium={<Button text="Try Premium" color="blue"/>} content="Lorem Ipsum" color="" />
                    </table>
                    {/* <div>
                        <div className="row">
                            <h5 className="w-40"></h5>
                            <button className="w-10">Try Standard</button>
                            <button className="w-10">Try Premium</button>
                        </div>
                    </div> */}
                </div>

                <div className="add-on">
                    <h1>Add-on Licensing</h1>
                    <small><p>Get even more control of projectOS with add-on licensing</p></small>
                </div>

                <div className="card-grid">
                    <div className="mw5 bg-white br3 mv3 ba b--black-10 mr3">
                        <h2>Developer License</h2>
                        <hr />
                        <div className="tick-grid pa3 pa3-ns">
                            <div>
                                <TickLicense />
                            </div>
                            <div>
                                <p>Use Rights to develop your own ProjectOS code</p>
                            </div>
                        </div>
                        <br />
                        <div className="tick-grid pa3 pa3-ns">
                            <div>
                                <TickLicense />
                            </div>
                            <div>
                                <p>Use Rights to develop your own ProjectOS code</p>
                            </div>
                        </div>
                        <br />
                        <div className="tick-grid pa3 pa3-ns">
                            <div>
                                <TickLicense />
                            </div>
                            <div>
                                <p>Use Rights to develop your own ProjectOS code</p>
                            </div>
                        </div>

                        <div>
                            <h1><button className="pa3 pa3-ns card-button">Contact Us</button></h1>
                            <a href="#"><p className="learn-more">Learn more</p></a>
                        </div>
                    </div>

                    <div className="mw5 bg-white br3 mv3 ba b--black-10 ml3">
                        <h2>ProjectOS Mobile</h2>
                        <hr />
                        <div className="tick-grid pa3 pa3-ns">
                            <div>
                                <TickLicense />
                            </div>
                            <div>
                                <p>Optimized for Onsite GPS project tracking</p>
                            </div>
                        </div>
                        <br />
                        <div className="tick-grid pa3 pa3-ns">
                            <div>
                                <TickLicense />
                            </div>
                            <div>
                                <p>Use Rights to develop your own ProjectOS code</p>
                            </div>
                        </div>
                        <br />
                        <div className="tick-grid pa3 pa3-ns">
                            <div>
                                <TickLicense />
                            </div>
                            <div>
                                <p>Use Rights to develop your own ProjectOS code</p>
                            </div>
                        </div>

                        <div>
                            <h1><button className="pa3 pa3-ns card-button">Contact Us</button></h1>
                            <a href="#"><p className="learn-more">Learn more</p></a>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>

        )
    }
}

export default Licensing;