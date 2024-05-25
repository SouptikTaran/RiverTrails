import './FAQ.css'
import Airport from '../../assets/images/faqs/airport.png'
import Accommodation from '../../assets/images/faqs/accommodation.png'
import Activities from '../../assets/images/faqs/activities.png'
import Cash from '../../assets/images/faqs/cash.png'
import Guide from '../../assets/images/faqs/guide.png'
import Hospital from '../../assets/images/faqs/hospital.png'
import Location from '../../assets/images/faqs/location.png'
import Meals from '../../assets/images/faqs/meals.png'
import Tackle from '../../assets/images/faqs/tackle.png'
import Time from '../../assets/images/faqs/time.png'
import Visa from '../../assets/images/faqs/visa.png'

function Faq() {
  function expand(e) {
    // console.log(e.target.id);
    e = e.target.id;
    let ans = "ans" + e.substring(3, 5);
    let faq = "f" + e.substring(3, 5);
    let shr = "shr" + e.substring(3, 5);
    let q = "q" + e.substring(3, 5);
    let qt = "qt" + e.substring(3, 5);

    document.getElementById(e).style.display = "none";
    document.getElementById(shr).style.display = "flex";
    document.getElementById(ans).style.display = "flex";
    document.getElementById(ans).style.color = "#ffffff";
    document.getElementById(q).style.color = "#ffffff";
    document.getElementById(qt).style.color = "#ffffff";
    console.log(document.getElementById(q).style.color)
    document.getElementById(faq).classList.add("blue-background");

  }
  function shrink(e) {
    e = e.target.id;
    document.getElementById(e).style.display = "none";
    let exp = "exp" + e.substring(3, 5);
    let ans = "ans" + e.substring(3, 5);
    let faq = "f" + e.substring(3, 5);
    let q = "q" + e.substring(3, 5);
    let qt = "qt" + e.substring(3, 5);
    document.getElementById(exp).style.display = "flex";
    document.getElementById(ans).style.display = "none";
    document.getElementById(faq).classList.remove("blue-background");
    document.getElementById(q).style.color = "#000000";
    document.getElementById(qt).style.color = "#000000";
  }
  return (
    <>
      <main>
        <div className="section-hed">
          <p>FAQs</p>
          <h1>You got questions ?</h1>
        </div>

        <div className="faqs_list">
          <div className="faq" id="f1">
            <div className="question border" id="q1">
              <p id='qt1'>
                <img src={Airport} width="30rem" alt="" />How
                close is the Adventure? (Airport/flight)
              </p>
              <span id="exp1" className="expand" onClick={expand}>+</span>
              <span id="shr1" className="shrink" onClick={shrink}>-</span>
            </div>
            <p id="ans1" className="answer">
              While the nearest international airport (IGI Airport, New Delhi) is
              470 km away, we know getting to your fishing paradise is just the
              beginning. We arrange hotel reservations and hassle-free
              transportation to get you here quickly, so you can start casting
              your line sooner!
            </p>
          </div>
          <div className="faq" id="f2">
            <div className="question" id="q2">
              <p id='qt2'>
                <img src={Accommodation} width="30rem" alt="" />Maximize Your Fishing Fun: (Accommodation)
              </p>
              <span id="exp2" className="expand" onClick={expand}>+</span>
              <span id="shr2" className="shrink" onClick={shrink}>-</span>
            </div>
            <p id="ans2" className="answer">
              Our camp offers comfortable accommodation for solo anglers (up to 4)
              and even larger groups (6-8). For larger groups, we ensure everyone
              knows each other well for a fun and cohesive fishing experience.
            </p>
          </div>
          <div className="faq" id="f3">
            <div className="question" id="q3">
              <p id='qt3'>
                <img src={Hospital} width="30rem" alt="" />Peace
                of Mind on Your Fishing Trip: (hospital)
              </p>
              <span id="exp3" className="expand" onClick={expand}>+</span>
              <span id="shr3" className="shrink" onClick={shrink}>-</span>
            </div>
            <p id="ans3" className="answer">
              The nearest hospital is approximately 55 km away. However, your
              safety is our priority. Our camp is well-equipped with a
              comprehensive first-aid kit and over-the-counter medications for
              minor needs.
            </p>
          </div>
          <div className="faq" id="f4">
            <div className="question" id="q4">
              <p id='qt4'>
                <img src={Location} width="30rem" alt="" />Prime
                Fishing Spot - Just Steps Away! (Location)
              </p>
              <span id="exp4" className="expand" onClick={expand}>+</span>
              <span id="shr4" className="shrink" onClick={shrink}>-</span>
            </div>
            <p id="ans4" className="answer">
              Imagine this: a mere 5-minute walk from your cabin brings you to the
              heart of the action - the legendary confluence of the Sarayu and
              Kali rivers!
            </p>
          </div>
          <div className="faq" id="f5">
            <div className="question" id="q5">
              <p id='qt5'>
                <img src={Tackle} width="30rem" alt="" />Expert
                Advice to Gear You Up for Success: (Fishing Tackle)
              </p>
              <span id="exp5" className="expand" onClick={expand}>+</span>
              <span id="shr5" className="shrink" onClick={shrink}>-</span>
            </div>
            <p id="ans5" className="answer">
              Whether you're a seasoned angler or new to the thrill of catching
              Golden Mahseer and Goonch, we're here to help. Upon request, our
              experts can provide personalized recommendations on the best tackle
              to conquer these magnificent fish.
            </p>
          </div>
          <div className="faq" id="f6">
            <div className="question" id="q6">
              <p id='qt6'>
                <img src={Meals} width="30rem" alt="" /> Fuel Your
                Fishing Adventure: (Meals)
              </p>
              <span id="exp6" className="expand" onClick={expand}>+</span>
              <span id="shr6" className="shrink" onClick={shrink}>-</span>
            </div>
            <p id="ans6" className="answer">
              Don't waste precious time worrying about meals! We provide delicious
              packed breakfasts and lunches delivered directly to your fishing
              spot, so you can focus on what matters most - catching that trophy
              fish!
            </p>
          </div>
          <div className="faq" id="f7">
            <div className="question" id="q7">
              <p id='qt7'>
                <img src={Guide} width="30rem" alt="" />Unleash
                Your Inner Angler with Our Experienced Guides: (Fishing Guides)
              </p>
              <span id="exp7" className="expand" onClick={expand}>+</span>
              <span id="shr7" className="shrink" onClick={shrink}>-</span>
            </div>
            <p id="ans7" className="answer">
              Our passionate and experienced fishing guides are eager to share
              their knowledge and expertise. Whether you prefer fly fishing,
              spinning, or bait fishing, we have the perfect guide to elevate your
              fishing experience.
            </p>
          </div>
          <div className="faq" id="f8">
            <div className="question" id="q8">
              <p id='qt8'>
                <img src={Time} width="30rem" alt="" />When to
                Hook Your Dream Catch: Golden Mahseer Seasons Explained: (Time)
              </p>
              <span id="exp8" className="expand" onClick={expand}>+</span>
              <span id="shr8" className="shrink" onClick={shrink}>-</span>
            </div>
            <p id="ans8" className="answer">
              Golden Mahseer await! Here's a breakdown of the prime fishing
              seasons at Pancheshwar:
            </p>
          </div>
          <div className="faq" id="f9">
            <div className="question" id="q9">
              <p id='qt9'>
                <img src={Visa} width="30rem" alt="" />Visa
                Requirements for a Seamless Journey: (Visa/Passport)
              </p>
              <span id="exp9" className="expand" onClick={expand}>+</span>
              <span id="shr9" className="shrink" onClick={shrink}>-</span>
            </div>
            <p id="ans9" className="answer">
              To enter India, you'll need an e-visa. Ensure your passport has at
              least 6 months validity remaining as of your departure date.
            </p>
          </div>
          <div className="faq" id="f10">
            <div className="question" id="q10">
              <p id='qt10'>
                <img src={Activities} width="30rem" alt=""
                />Beyond the Reel: Unforgettable Adventures Await: (Activities)
              </p>
              <span id="exp10" className="expand" onClick={expand}>+</span>
              <span id="shr10" className="shrink" onClick={shrink}>-</span>
            </div>
            <p id="ans10" className="answer">
              Your fishing trip isn't limited to just casting a line! Our camp
              offers a variety of activities to complement your experience:
              <br />-&gt Explore the breathtaking surroundings with scenic hikes and treks.
              <br />-&gt Immerse yourself in the local culture by visiting a nearby temple and village.
              <br />-&gt Experience the thrill of white-water rafting, with a delicious picnic lunch included.
              <br />-&gt For bird watching enthusiasts, discover the diverse birdlife around Pancheshwar.

            </p>
          </div>
          <div className="faq" id="f11">
            <div className="question" id="q11">
              <p id='qt11'>
                <img src={Cash} width="30rem" alt="" />Convenient
                Payment Options: (Cash)
              </p>
              <span id="exp11" className="expand" onClick={expand}>+</span>
              <span id="shr11" className="shrink" onClick={shrink}>-</span>
            </div>
            <p id="ans11" className="answer">
              Settling your reservation is easy! Choose between secure online card
              payment via a link sent to your email or a wire transfer to our bank
              account.
            </p>
          </div>


        </div>
      </main>
    </>
  )
}

export default Faq