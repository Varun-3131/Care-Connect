import React from "react";
import {assets} from "../assets/assets.js";

const Footer = () => {
    return (
        <div className="md:mx-10">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

                {/*LEFT SECTION*/}
                <div>
                    <h1 className="text-lg font-bold">Care Connect!</h1>
                    <p className="w-full md:w-2/3 text-gray-600 leading-6">Description of the app in 30 words</p>
                </div>

                {/*CENTER SECTION*/}
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>

                {/*RIGHT SECTION*/}
                <div>
                    <p className="text-xl font-medium mb-5">Get In Touch</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>
                            +91 6306891275
                        </li>
                        <li>
                            srivastavvarun48@gmail.com
                        </li>
                    </ul>
                </div>

            </div>
            <div>
                <hr/>
                <p >Copyright 2025@CareConnect-All Right Reserved.</p>
            </div>
        </div>
    )
}
export default Footer;