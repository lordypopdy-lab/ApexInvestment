import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import FadeLoader from 'react-spinners/FadeLoader';

const ChooseVerification = (props) => {
// if (!localStorage.getItem('email')) { location.href = '/login' };
const [Country, setCountry] = useState(null);
const [loading, setLoading] = useState(false);
const [Id, setId] = useState(null);

const citizenId = () => {
setId('Citizen Identification');
}

const nationalID = () => {
setId('National ID Card')
}

const VotersCard = () => {
setId('Voters Card');
}

const drivingLicense = () => {
setId('Driving license');
}

const IDCard = () => {
setId('Id Card');
}

const Passport = () => {
setId('Passport');
}

const Arc = () => {
setId('Arc')
}

const next = async (e) => {
setLoading(true);
e.preventDefault();
if (Id == null || Country == null) {
    setLoading(false);
    toast.error("Type of identification (ID) and Country is required")
} else {
    const email = localStorage.getItem('email');
    axios.post('/userInfo', { email, Id, Country }).then(({ data }) => {
        console.log(data)
        const For = 'IDverification';
        if (data.message == 'success') {
            axios.post('/notification', { email, For }).then(() => {
                toast.success("Saved");
                setLoading(false);
                setTimeout(() => {
                    location.href = '/ChooseIdentity'
                }, 1000);
            })
        } else if (data.message == 'Updated') {
            axios.post('/notification', { email, For }).then(() => {
                toast.success('Updated');
                setLoading(false);
                setTimeout(() => {
                    location.href = '/ChooseIdentity'
                }, 1000);
            })
        }
    })
}
}
    return (
<>
    <div className="header fixed-top bg-surface d-flex justify-content-center align-items-center">
        <a href="javascript:void(0);" className="left back-btn"><i className="icon-left-btn"></i></a>
        <h3>Verification</h3>
        <a href="javascript:void(0);" className="right"><i className="icon-question"></i></a>
    </div>
    <div className="pt-45 mb-3 pb-16">
        <div className="tf-container">
            <h4 className="mt-4">Choose the type of identification document</h4>
            <form className="mt-20">
                <fieldset>
                    <label className="mb-8">Country/region of residence</label>
                    <div className="select-wrapper">
                        <select className="tf-select"
                            value={Country}
                            onChange={(e) => setCountry(e.target.value)}
                        >
                            <option>Afghanistan</option>
                            <option>Albania</option>
                            <option>Algeria</option>
                            <option>American Samoa</option>
                            <option>Andorra</option>
                            <option>Angola</option>
                            <option>Anguilla</option>
                            <option>Antarctica</option>
                            <option>Antigua and Barbuda</option>
                            <option>Argentina</option>
                            <option>Armenia</option>
                            <option>Aruba</option>
                            <option>Australia</option>
                            <option>Austria</option>
                            <option>Azerbaidjan</option>
                            <option>Bahamas</option>
                            <option>Bahrain</option>
                            <option>Bangladesh</option>
                            <option>Barbados</option>
                            <option>Belarus</option>
                            <option>Belgium</option>
                            <option>Belize</option>
                            <option>Benin</option>
                            <option>Bermuda</option>
                            <option>Bhutan</option>
                            <option>Bolivia</option>
                            <option>Bosnia-Herzegovina</option>
                            <option>Botswana</option>
                            <option>Bouvet Island</option>
                            <option>Brazil</option>
                            <option>British Indian Ocean Territory</option>
                            <option>Brunei Darussalam</option>
                            <option>Bulgaria</option>
                            <option>Burkina Faso</option>
                            <option>Burundi</option>
                            <option>Cambodia</option>
                            <option>Cameroon</option>
                            <option>Canada</option>
                            <option>Cape Verde</option>
                            <option>Cayman Islands</option>
                            <option>Central African Republic</option>
                            <option>Chad</option>
                            <option>Chile</option>
                            <option>China</option>
                            <option>Christmas Island</option>
                            <option>Cocos (Keeling) Islands</option>
                            <option>Colombia</option>
                            <option>Comoros</option>
                            <option>Congo</option>
                            <option>Congo (Democratic Republic)</option>
                            <option>Cook Islands</option>
                            <option>Costa Rica</option>
                            <option>Croatia</option>
                            <option>Cuba</option>
                            <option>Cyprus</option>
                            <option>Czech Republic</option>
                            <option>Denmark</option>
                            <option>Djibouti</option>
                            <option>Dominica</option>
                            <option>Dominican Republic</option>
                            <option>East Timor</option>
                            <option>Ecuador</option>
                            <option>Egypt</option>
                            <option>El Salvador</option>
                            <option>Equatorial Guinea</option>
                            <option>Eritrea</option>
                            <option>Estonia</option>
                            <option>Ethiopia</option>
                            <option>Falkland Islands</option>
                            <option>Faroe Islands</option>
                            <option>Fiji</option>
                            <option>Finland</option>
                            <option>France</option>
                            <option>France (European Territory)</option>
                            <option>French Guiana</option>
                            <option>French Southern Territories</option>
                            <option>Gabon</option>
                            <option>Gambia</option>
                            <option>Georgia</option>
                            <option>Germany</option>
                            <option>Ghana</option>
                            <option>Gibraltar</option>
                            <option>Great Britain</option>
                            <option>Greece</option>
                            <option>Greenland</option>
                            <option>Grenada</option>
                            <option>Guadeloupe</option>
                            <option>Guam</option>
                            <option>Guatemala</option>
                            <option>Guinea</option>
                            <option>Guinea Bissau</option>
                            <option>Guyana</option>
                            <option>Haiti</option>
                            <option>Heard and McDonald Islands</option>
                            <option>Holy See (Vatican City State)</option>
                            <option>Honduras</option>
                            <option>Hong Kong</option>
                            <option>Hungary</option>
                            <option>Iceland</option>
                            <option>India</option>
                            <option>Indonesia</option>
                            <option>Iran</option>
                            <option>Iraq</option>
                            <option>Ireland</option>
                            <option>Israel</option>
                            <option>Italy</option>
                            <option>Ivory Coast (Cote D`Ivoire)</option>
                            <option>Jamaica</option>
                            <option>Japan</option>
                            <option>Jordan</option>
                            <option>Kazakhstan</option>
                            <option>Kenya</option>
                            <option>Kiribati</option>
                            <option>Kuwait</option>
                            <option>Kyrgyz Republic (Kyrgyzstan)</option>
                            <option>Laos</option>
                            <option>Latvia</option>
                            <option>Lebanon</option>
                            <option>Lesotho</option>
                            <option>Liberia</option>
                            <option>Libya</option>
                            <option>Liechtenstein</option>
                            <option>Lithuania</option>
                            <option>Luxembourg</option>
                            <option>Macau</option>
                            <option>Macedonia</option>
                            <option>Madagascar</option>
                            <option>Malawi</option>
                            <option>Malaysia</option>
                            <option>Maldives</option>
                            <option>Mali</option>
                            <option>Malta</option>
                            <option>Marshall Islands</option>
                            <option>Martinique</option>
                            <option>Mauritania</option>
                            <option>Mauritius</option>
                            <option>Mayotte</option>
                            <option>Mexico</option>
                            <option>Micronesia</option>
                            <option>Moldavia</option>
                            <option>Monaco</option>
                            <option>Mongolia</option>
                            <option>Montserrat</option>
                            <option>Morocco</option>
                            <option>Mozambique</option>
                            <option>Myanmar</option>
                            <option>Namibia</option>
                            <option>Nauru</option>
                            <option>Nepal</option>
                            <option>Netherlands</option>
                            <option>Netherlands Antilles</option>
                            <option>New Caledonia</option>
                            <option>New Zealand</option>
                            <option>Nicaragua</option>
                            <option>Niger</option>
                            <option>Nigeria</option>
                            <option>Niue</option>
                            <option>Norfolk Island</option>
                            <option>North Korea</option>
                            <option>Northern Mariana Islands</option>
                            <option>Norway</option>
                            <option>Oman</option>
                            <option>Pakistan</option>
                            <option>Palau</option>
                            <option>Panama</option>
                            <option>Papua New Guinea</option>
                            <option>Paraguay</option>
                            <option>Peru</option>
                            <option>Philippines</option>
                            <option>Pitcairn Island</option>
                            <option>Poland</option>
                            <option>Polynesia</option>
                            <option>Portugal</option>
                            <option>Puerto Rico</option>
                            <option>Qatar</option>
                            <option>Reunion</option>
                            <option>Romania</option>
                            <option>Russian Federation</option>
                            <option>Rwanda</option>
                            <option>S. Georgia & S. Sandwich Isls.</option>
                            <option>Saint Helena</option>
                            <option>Saint Kitts & Nevis Anguilla</option>
                            <option>Saint Lucia</option>
                            <option>Saint Pierre and Miquelon</option>
                            <option>Saint Vincent & Grenadines</option>
                            <option>Samoa</option>
                            <option>San Marino</option>
                            <option>Sao Tome and Principe</option>
                            <option>Saudi Arabia</option>
                            <option>Senegal</option>
                            <option>Seychelles</option>
                            <option>Sierra Leone</option>
                            <option>Singapore</option>
                            <option>Slovak Republic</option>
                            <option>Slovenia</option>
                            <option>Solomon Islands</option>
                            <option>Somalia</option>
                            <option>South Africa</option>
                            <option>South Korea</option>
                            <option>Spain</option>
                            <option>Sri Lanka</option>
                            <option>Sudan</option>
                            <option>Suriname</option>
                            <option>Svalbard and Jan Mayen Islands</option>
                            <option>Swaziland</option>
                            <option>Sweden</option>
                            <option>Switzerland</option>
                            <option>Syria</option>
                            <option>Taiwan</option>
                            <option>Tajikistan</option>
                            <option>Tanzania</option>
                            <option>Thailand</option>
                            <option>Togo</option>
                            <option>Tokelau</option>
                            <option>Tonga</option>
                            <option>Trinidad and Tobago</option>
                            <option>Tunisia</option>
                            <option>Turkey</option>
                            <option>Turkmenistan</option>
                            <option>Turks and Caicos Islands</option>
                            <option>Tuvalu</option>
                            <option>USA Minor Outlying Islands</option>
                            <option>Uganda</option>
                            <option>Ukraine</option>
                            <option>United Arab Emirates</option>
                            <option>United Kingdom</option>
                            <option>United States</option>
                            <option>Uruguay</option>
                            <option>Uzbekistan</option>
                            <option>Vanuatu</option>
                            <option>Venezuela</option>
                            <option>Vietnam</option>
                            <option>Virgin Islands (British)</option>
                            <option>Virgin Islands (USA)</option>
                            <option>Wallis and Futuna Islands</option>
                            <option>Weather Stations</option>
                            <option>Western Sahara</option>
                            <option>Yemen</option>
                            <option>Yugoslavia</option>
                            <option>Zaire</option>
                            <option>Zambia</option>
                            <option>Zimbabwe</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset className="mt-20">
                    <label className="mb-8">Type of identification (ID)</label>
                    <div className="select-wrapper" data-bs-toggle="modal" data-bs-target="#identificationID">
                        <p className="tf-select dom-text">{Id === null ? "Select ID type" : Id}</p>
                    </div>
                </fieldset>
                <button onClick={next} className="tf-btn lg btn-warning mt-40">Next</button>
            </form>
        </div>
    </div>
    <FadeLoader
        color="#36d7b7"
        loading={loading}
        speedMultiplier={3}
        style={{ textAlign: 'center', position: 'relative', marginLeft: '50%' }}
    />
    <div className="modal fade action-sheet" id="identificationID">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <span>Type of identification (ID)</span>
                    <span className="icon-cancel" data-bs-dismiss="modal"></span>
                </div>
                <ul className="mt-20 pb-16">
                    <li className="line-bt" data-bs-dismiss="modal" onClick={citizenId}><div className="d-flex justify-content-between align-items-center gap-8 text-large item-check active dom-value">Citizen identification <i className="icon icon-check-circle"></i> </div></li>
                    <li className="line-bt" data-bs-dismiss="modal" onClick={drivingLicense}><div className="d-flex  justify-content-between gap-8 text-large item-check dom-value">Driving license <i className="icon icon-check-circle"></i></div></li>
                    <li className="line-bt" data-bs-dismiss="modal" onClick={nationalID}><div className="d-flex  justify-content-between gap-8 text-large item-check dom-value">National ID Card (NIN) <i className="icon icon-check-circle"></i></div></li>
                    <li className="line-bt" data-bs-dismiss="modal" onClick={VotersCard}><div className="d-flex  justify-content-between gap-8 text-large item-check dom-value">Voters Card <i className="icon icon-check-circle"></i></div></li>
                    <li className="line-bt" data-bs-dismiss="modal" onClick={IDCard} ><div className="d-flex  justify-content-between gap-8 text-large item-check dom-value">ID card <i className="icon icon-check-circle"></i></div></li>
                    <li className="line-bt" data-bs-dismiss="modal" onClick={Passport}><div className="d-flex  justify-content-between gap-8 text-large item-check dom-value">Passport <i className="icon icon-check-circle"></i></div></li>
                    <li data-bs-dismiss="modal" onClick={Arc}><div className="d-flex  justify-content-between gap-8 text-large item-check dom-value">Arc <i className="icon icon-check-circle"></i></div></li>
                </ul>
            </div>
        </div>
    </div>
</>
    )
}

export default ChooseVerification