import React from 'react'
import toast from 'react-hot-toast'
import Widget101 from '../components/Widget101'
import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import FadeLoader from 'react-spinners/FadeLoader';
import axios from 'axios';

const Register = () => {

    const [icon, setIcon] = useState(eyeOff);
    const [type, setType] = useState('password');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({ name: '', email: '', country: '', currency: '', account: '', password: '', comfirm_password: '' });

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    const createUser = async (e) => {
        e.preventDefault();
        setLoading(true);

        const {
            name,
            email,
            country,
            currency,
            account,
            password,
            comfirm_password
        } = data;

        await axios.post("/register", {
            name,
            email,
            country,
            currency,
            account,
            password,
            comfirm_password
        }).then((data) => {
            if (data.data.error) {
                setLoading(false);
                toast.error(data.data.error);
            } else {
                setLoading(false);
                console.log(data.data);
                const newUser = JSON.stringify(data.data);
                localStorage.setItem("user", newUser);
                setData({
                    name: '',
                    email: '',
                    country: '',
                    currency: '',
                    account: '',
                    password: '',
                    comfirm_password: ''
                })
                toast.success("Account created successfully!")
                setTimeout(() => {
                    location.href = "/dashboard";
                }, 2000);
            }
        })
    }

    return (
        <>
            <div className="container-fluid ">
                <Widget101 />
                <h3 className="card-title text-left text-warning mt-4 mb-3">| Register | Account |</h3>
                <form onSubmit={createUser}>
                    <div className="form-group">
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            className="data form-control"
                            placeholder='*Full-Name'
                            style={{ marginLeft: "2px" }} />
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="email"
                            placeholder="example@mail.com"
                            className="data form-control"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            style={{ marginLeft: "2px" }} />
                    </div>
                    <FadeLoader
                        color="#36d7b7"
                        loading={loading}
                        speedMultiplier={3}
                        style={{ textAlign: 'center', position: 'absolute', left: '50%', zIndex: '1' }}
                    />
                    <div className="form-group mt-3">
                        <select value={data.country} onChange={(e) => setData({ ...data, country: e.target.value })} className="data form-control" style={{ marginLeft: "2px" }} >
                            <option>--Select Country--</option>
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
                    <div className="form-group mt-3">
                        <select value={data.currency} onChange={(e) => setData({ ...data, currency: e.target.value })} className="data form-control" style={{ marginLeft: "2px" }} >
                            <option>--Select Currency--</option>
                            <option className="text-light" value="£">POUNDS £</option>
                            <option className="text-light" value="$">DOLLAR $</option>
                            <option className="text-light" value="€">EURO €</option>
                            <option className="text-light" value="C$">CANADIAN DOLLAR C$</option>
                            <option className="text-light" value="R$">BRAZILIAN REAIS R$</option>
                            <option className="text-light" value="₺">TURKISH LIRA ₺</option>
                            <option className="text-light" value="R">RAND R</option>
                            <option className="text-light" value="N$">NAMIBIA DOLLAR N$</option>

                        </select>
                    </div>
                    <div className="form-group mt-3">
                        <select value={data.account} onChange={(e) => setData({ ...data, account: e.target.value })} className="data form-control" style={{ marginLeft: "2px" }} >
                            <option>--Select Account--</option>
                            <option>Forex Trading</option>
                            <option>Stock Trading</option>
                            <option>Binary Option Trading</option>
                            <option>Bitcoin Mining</option>
                            <option>CryptoCurrency Investment</option>
                        </select>
                    </div>
                    <div className="box-auth-pass form-group mt-3">
                        <input
                            type={type}
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            className="data form-control"
                            placeholder='*password'
                            style={{ marginLeft: "2px" }}
                        />
                        <span className="show-pass" onClick={handleToggle}>
                            <Icon class="absolute mr-10 text-dark" icon={icon} size={15} />
                        </span>
                    </div>
                    <div className="box-auth-pass form-group mt-3">
                        <input
                            type={type}
                            value={data.comfirm_password}
                            onChange={(e) => setData({ ...data, comfirm_password: e.target.value })}
                            className="data form-control"
                            placeholder='*comfirm-password'
                            style={{ marginLeft: "2px" }}
                        />
                        <span className="show-pass" onClick={handleToggle}>
                            <Icon class="absolute mr-10 text-dark" icon={icon} size={15} />
                        </span>
                    </div>
                    <div className="mt-2 form-group d-flex align-items-center justify-content-between">
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" /> Remember me </label>
                        </div>
                        <a href="#" className="forgot-pass text-warning">Forgot password</a>
                    </div>
                    <div className="text-center mt-4">
                        <button type="submit" className="w-100 btn btn-warning btn-block enter-btn">Signup</button>
                    </div>
                    <p className="sign-up mt-2 text-center">Already have an Account?<Link to="/login" className="text-warning">Login</Link></p>
                    <p className="terms text-center">By creating an account you are accepting our<a href="#" className="text-warning"> Terms & Conditions</a></p>
                </form>
            </div>
        </>
    )
}

export default Register
