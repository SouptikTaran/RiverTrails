import { useParams } from 'react-router-dom';
import './ItineraryTemplate.css'
import Background from '../../../assets/images/background.jpg'
import AboutInto from '../../../assets/images/about_intro.png'
import addOnGolden from '../../../assets/images/addons/golden.png'
import addOnDelhi from '../../../assets/images/addons/delhi.png'
import addOnLocal from '../../../assets/images/addons/local.png'
import addOnSafari from '../../../assets/images/addons/safari.png'
import addOnTaj from '../../../assets/images/addons/tajmahal.png'
import P1 from '../../../assets/images/p1.jpeg'
import P2 from '../../../assets/images/p2.jpg'
import P3 from '../../../assets/images/p3.jpg'
import P4 from '../../../assets/images/p4.jpeg'

function ItineraryTemplate() {
    const { id } = useParams();
    // console.log(id)
    function expand(e) {
        e = e.target.id;
        document.getElementById(e).style.display = "none";
        let shr = "shr" + e.substring(3, 5);
        let det = "det" + e.substring(3, 5);
        document.getElementById(shr).style.display = "flex";
        document.getElementById(det).style.display = "flex";
    }
    function shrink(e) {
        e = e.target.id;
        document.getElementById(e).style.display = "none";
        let exp = "exp" + e.substring(3, 5);
        let det = "det" + e.substring(3, 5);
        document.getElementById(exp).style.display = "flex";
        document.getElementById(det).style.display = "none";
    }
    return (
        <>
            <div className='packmain'>
                <section className="intro-sec">
                    <h1 className="pack-hed">The <span>Time-Crunched</span> Angler Package</h1>
                    <p className="pack-time">
                        <b>7 Days</b> of Fishing <span>(8 Nights/9 Days)</span>
                    </p>
                    <div className="intro-image">
                        <div className="intro-img">
                            <img src={Background} alt="" />
                        </div>
                        <div className="desc">
                            <img src={AboutInto} alt="" />
                            <h1>Overview</h1>
                            <p>
                                River Trails is more than just a fishing camp; it's the culmination
                                of a lifelong passion for the mighty Golden Mahseer and the
                                breathtaking beauty of the Pancheshwar region. Founded in 2021 by
                                Daniel Abraham, a seasoned angler with over 20 years of experience
                                on these very waters, River Trails embodies the spirit of adventure
                                and the pursuit of a legendary catch.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="highlight-sec">
                    <h2>Highlights</h2>
                    <div className="highlight-list">
                        <p>
                            <span
                            ><svg
                                width="28"
                                height="21"
                                viewBox="0 0 28 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                    <path
                                        d="M2 11.0667L10 19L26 2"
                                        stroke="#005EE6"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            Freshly Prepared Meals
                        </p>
                        <p>
                            <span
                            ><svg
                                width="28"
                                height="21"
                                viewBox="0 0 28 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                    <path
                                        d="M2 11.0667L10 19L26 2"
                                        stroke="#005EE6"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            Freshly Prepared Meals
                        </p>
                        <p>
                            <span
                            ><svg
                                width="28"
                                height="21"
                                viewBox="0 0 28 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                    <path
                                        d="M2 11.0667L10 19L26 2"
                                        stroke="#005EE6"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            Freshly Prepared Meals
                        </p>
                        <p>
                            <span
                            ><svg
                                width="28"
                                height="21"
                                viewBox="0 0 28 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                    <path
                                        d="M2 11.0667L10 19L26 2"
                                        stroke="#005EE6"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            Freshly Prepared Meals
                        </p>
                        <p>
                            <span
                            ><svg
                                width="28"
                                height="21"
                                viewBox="0 0 28 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                    <path
                                        d="M2 11.0667L10 19L26 2"
                                        stroke="#005EE6"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            Freshly Prepared Meals
                        </p>
                    </div>
                </section>
                <section className="itinerary-sec">
                    <h2>Itinerary</h2>
                    <p className="itinerary-intro">
                        Start in Bangkok and end in Ho Chi Minh City! With the Active tour
                        Cambodia: Ancient Ruins & Boat Rides, you have a 10 days tour package
                        taking you through Bangkok, Thailand and 5 other destinations in Asia.
                        Cambodia: Ancient Ruins & Boat Rides includes accommodationin a hoteland
                        hostel as well as an expert guide, meals, transport and more.
                    </p>
                </section>
                <section className="itinerary-details-sec">
                    <div id="iti1" className="iti-item">
                        <div className="iti-intro">
                            <p className="day">Day 1 <span className="dot"></span></p>
                            <div className="iti-header">
                                <div>
                                    <p className="iti-hed">Embark on Your Himalayan Fishing Journey</p>
                                    <span id="exp1" className="expand" onClick={expand}>+</span>
                                    <span id="shr1" className="shrink" onClick={shrink}>-</span>
                                </div>
                            </div>
                        </div>
                        <div id="det1" className="iti-details">
                            <div className="iti-det">
                                <ul>
                                    <li>
                                        <span className="icon">✈️</span>Arrive at New Delhi Airport (DEL)
                                        and be greeted by your friendly chauffeur.
                                    </li>
                                    <li>
                                        <span className="icon">🚗</span>Settle into a comfortable car and
                                        begin your scenic 11-12 hour drive to Pancheshwar.
                                    </li>
                                    <li>
                                        <span className="icon">⛰️</span>Witness the majestic beauty of the
                                        Himalayas unfold as you wind through remote villages, charming
                                        towns, and lush foothills.
                                    </li>
                                    <li>
                                        <span className="icon">🍲</span>Take breaks at your own pace,
                                        stretch your legs, and breathe in the fresh Himalayan air.
                                    </li>
                                </ul>
                                <div className="iti-photos">
                                    <div className="iti-img"><img src={P1} alt="" /></div>
                                    <div className="iti-img"><img src={P2} alt="" /></div>
                                    <div className="iti-img"><img src={P3} alt="" /></div>
                                    <div className="iti-img"><img src={P4} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="iti1" className="iti-item">
                        <div className="iti-intro">
                            <p className="day">Day 2 <span className="dot"></span></p>
                            <div className="iti-header">
                                <div>
                                    <p className="iti-hed">
                                        Arrive at Your Golden Mahseer Fishing Paradise
                                    </p>
                                    <span id="exp2" className="expand" onClick={expand}>+</span>
                                    <span id="shr2" className="shrink" onClick={shrink}>-</span>
                                </div>
                            </div>
                        </div>
                        <div id="det2" className="iti-details">
                            <div className="iti-det">
                                <ul>
                                    <li>
                                        <span className="icon">✈️</span>Arrive at New Delhi Airport (DEL)
                                        and be greeted by your friendly chauffeur.
                                    </li>
                                    <li>
                                        <span className="icon">🚗</span>Settle into a comfortable car and
                                        begin your scenic 11-12 hour drive to Pancheshwar.
                                    </li>
                                    <li>
                                        <span className="icon">⛰️</span>Witness the majestic beauty of the
                                        Himalayas unfold as you wind through remote villages, charming
                                        towns, and lush foothills.
                                    </li>
                                    <li>
                                        <span className="icon">🍲</span>Take breaks at your own pace,
                                        stretch your legs, and breathe in the fresh Himalayan air.
                                    </li>
                                </ul>
                                <div className="iti-photos">
                                    <div className="iti-img"><img src={P1} alt="" /></div>
                                    <div className="iti-img"><img src={P2} alt="" /></div>
                                    <div className="iti-img"><img src={P3} alt="" /></div>
                                    <div className="iti-img"><img src={P4} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="iti1" className="iti-item">
                        <div className="iti-intro">
                            <p className="day">Day 3 - 8 <span className="dot"></span></p>
                            <div className="iti-header">
                                <div>
                                    <p className="iti-hed">Unleash Your Inner Angler</p>
                                    <span id="exp3" className="expand" onClick={expand}>+</span>
                                    <span id="shr3" className="shrink" onClick={shrink}>-</span>
                                </div>
                            </div>
                        </div>
                        <div id="det3" className="iti-details">
                            <div className="iti-det">
                                <ul>
                                    <li>
                                        <span className="icon">✈️</span>Arrive at New Delhi Airport (DEL)
                                        and be greeted by your friendly chauffeur.
                                    </li>
                                    <li>
                                        <span className="icon">🚗</span>Settle into a comfortable car and
                                        begin your scenic 11-12 hour drive to Pancheshwar.
                                    </li>
                                    <li>
                                        <span className="icon">⛰️</span>Witness the majestic beauty of the
                                        Himalayas unfold as you wind through remote villages, charming
                                        towns, and lush foothills.
                                    </li>
                                    <li>
                                        <span className="icon">🍲</span>Take breaks at your own pace,
                                        stretch your legs, and breathe in the fresh Himalayan air.
                                    </li>
                                </ul>
                                <div className="iti-photos">
                                    <div className="iti-img"><img src={P1} alt="" /></div>
                                    <div className="iti-img"><img src={P2} alt="" /></div>
                                    <div className="iti-img"><img src={P3} alt="" /></div>
                                    <div className="iti-img"><img src={P4} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="iti1" className="iti-item">
                        <div className="iti-intro">
                            <p className="day">Day 9 <span className="dot"></span></p>
                            <div className="iti-header">
                                <div>
                                    <p className="iti-hed">Farewell to Pancheshwar</p>
                                    <span id="exp4" className="expand" onClick={expand}>+</span>
                                    <span id="shr4" className="shrink" onClick={shrink}>-</span>
                                </div>
                            </div>
                        </div>
                        <div id="det4" className="iti-details">
                            <div className="iti-det">
                                <ul>
                                    <li>
                                        <span className="icon">✈️</span>Arrive at New Delhi Airport (DEL)
                                        and be greeted by your friendly chauffeur.
                                    </li>
                                    <li>
                                        <span className="icon">🚗</span>Settle into a comfortable car and
                                        begin your scenic 11-12 hour drive to Pancheshwar.
                                    </li>
                                    <li>
                                        <span className="icon">⛰️</span>Witness the majestic beauty of the
                                        Himalayas unfold as you wind through remote villages, charming
                                        towns, and lush foothills.
                                    </li>
                                    <li>
                                        <span className="icon">🍲</span>Take breaks at your own pace,
                                        stretch your legs, and breathe in the fresh Himalayan air.
                                    </li>
                                </ul>
                                <div className="iti-photos">
                                    <div className="iti-img"><img src={P1} alt="" /></div>
                                    <div className="iti-img"><img src={P2} alt="" /></div>
                                    <div className="iti-img"><img src={P3} alt="" /></div>
                                    <div className="iti-img"><img src={P4} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="add-ons">
                    <h1>Optional Add-Ons to Enhance Your Experience</h1>
                    <div className="add-ons-list">
                        <div className="addons">
                            <img src={addOnLocal} alt="" />
                            <div>
                                <h3>Experience Local Culture:</h3>
                                <p>
                                    Immerse yourself in the local way of life with a two-night stay at
                                    a charming homestay near Pancheshwar.
                                </p>
                            </div>
                        </div>
                        <div className="addons">
                            <img src={addOnTaj} alt="" />
                            <div>
                                <h3>Witness the Marvelous Taj Mahal: </h3>
                                <p>
                                    Embark on a captivating day tour to Agra and marvel at the
                                    architectural wonder – the Taj Mahal.
                                </p>
                            </div>
                        </div>
                        <div className="addons">
                            <img src={addOnDelhi} alt="" />
                            <div>
                                <h3>Explore Vibrant Delhi:</h3>
                                <p>
                                    Uncover the rich history and cultural tapestry of Delhi on a
                                    full-day city tour, visiting iconic landmarks like Qutub Minar,
                                    Humayun's Tomb, Red Fort, India Gate, and Dilli Haat.
                                </p>
                            </div>
                        </div>
                        <div className="addons">
                            <img src={addOnSafari} alt="" />
                            <div>
                                <h3>Ranthambore Tiger Safari:</h3>
                                <p>
                                    Embark on a thrilling wildlife adventure with a multi-day safari
                                    in Ranthambore National Park, known for its majestic tiger
                                    population.
                                </p>
                            </div>
                        </div>
                        <div className="addons">
                            <img src={addOnGolden} alt="" />
                            <div>
                                <h3>Golden Triangle Tour:</h3>
                                <p>
                                    Experience the highlights of India with a 2-3 day Golden Triangle
                                    tour, encompassing Delhi, Agra (Taj Mahal), and Jaipur (Pink
                                    City).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ItineraryTemplate