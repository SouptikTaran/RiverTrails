import './home.css'
import logo from '../../assets/images/logo-white.svg'
import landingimg from '../../assets/images/landing-img.png'
import tackle from '../../assets/images/tackle.png'
import FeatMeal from '../../assets/images/features/meal.png'
import FeatComfort from '../../assets/images/features/comfort.png'
import FeatFishing from '../../assets/images/features/fishing.png'
import AboutUs from '../../assets/images/aboutus.png'
import Gall1 from '../../assets/images/gallery/1.jpg'
import Gall2 from '../../assets/images/gallery/2.jpeg'
import Gall3 from '../../assets/images/gallery/3.jpg'
import Gall4 from '../../assets/images/gallery/4.jpg'
import Gall5 from '../../assets/images/gallery/5.jpg'
import Gall6 from '../../assets/images/gallery/6.jpg'
import Gall7 from '../../assets/images/gallery/7.jpg'
import Rev1 from '../../assets/images/review/review1.jpeg'
import Rev2 from '../../assets/images/review/review2.jpeg'
import Rev3 from '../../assets/images/review/review3.jpeg'
import Rev4 from '../../assets/images/review/review4.jpeg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='head'>
        <nav>
          <img className="logo" src={logo} alt="" />
          <div className="navs">
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/itinerary">Itinerary</Link>
            <Link to="/faq">FAQs</Link>

            <span>
              <a href=""><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.8878 0C16.4065 0.00404991 17.1773 0.0121497 17.8428 0.0310493L18.1047 0.040499C18.4071 0.0512988 18.7054 0.0647984 19.0659 0.080998C20.5022 0.148496 21.4822 0.375291 22.3421 0.708734C23.2331 1.05163 23.9837 1.51601 24.7342 2.26525C25.4206 2.94009 25.9518 3.75641 26.2907 4.65739C26.6241 5.51732 26.8509 6.4974 26.9184 7.93511C26.9346 8.29421 26.9481 8.59255 26.9589 8.89629L26.967 9.15819C26.9872 9.82237 26.9953 10.5932 26.998 12.1119L26.9994 13.119V14.8875C27.0027 15.8721 26.9924 16.8568 26.9683 17.8412L26.9603 18.1031C26.9495 18.4068 26.936 18.7052 26.9198 19.0643C26.8523 20.502 26.6228 21.4807 26.2907 22.342C25.9528 23.2435 25.4215 24.06 24.7342 24.7341C24.0592 25.4203 23.243 25.9515 22.3421 26.2906C21.4822 26.6241 20.5022 26.8509 19.0659 26.9184C18.7455 26.9335 18.4252 26.947 18.1047 26.9589L17.8428 26.967C17.1773 26.9859 16.4065 26.9953 14.8878 26.998L13.8808 26.9994H12.1137C11.1286 27.0028 10.1435 26.9924 9.15871 26.9683L8.89682 26.9602C8.57636 26.9481 8.25597 26.9341 7.93567 26.9184C6.49935 26.8509 5.5193 26.6241 4.65804 26.2906C3.75719 25.9523 2.94122 25.4211 2.26731 24.7341C1.58026 24.0595 1.04863 23.2432 0.709493 22.342C0.37606 21.482 0.149271 20.502 0.0817747 19.0643C0.0667349 18.7439 0.0532354 18.4235 0.0412768 18.1031L0.0345273 17.8412C0.00965085 16.8568 -0.00159978 15.8721 0.000778911 14.8875V12.1119C-0.0029887 11.1273 0.00691185 10.1426 0.0304775 9.15819L0.039927 8.89629C0.0507264 8.59255 0.0642257 8.29421 0.0804249 7.93511C0.147921 6.4974 0.37471 5.51867 0.708143 4.65739C1.04713 3.75548 1.57982 2.93891 2.26866 2.26525C2.9424 1.57875 3.75783 1.04756 4.65804 0.708734C5.5193 0.375291 6.498 0.148496 7.93567 0.080998C8.29475 0.0647984 8.59444 0.0512988 8.89682 0.040499L9.15871 0.0323992C10.1431 0.00841396 11.1277 -0.0019368 12.1124 0.00134987L14.8878 0ZM13.5001 6.74984C11.71 6.74984 9.99317 7.46099 8.72736 8.72683C7.46156 9.99267 6.75043 11.7095 6.75043 13.4997C6.75043 15.2899 7.46156 17.0067 8.72736 18.2725C9.99317 19.5384 11.71 20.2495 13.5001 20.2495C15.2902 20.2495 17.007 19.5384 18.2728 18.2725C19.5386 17.0067 20.2497 15.2899 20.2497 13.4997C20.2497 11.7095 19.5386 9.99267 18.2728 8.72683C17.007 7.46099 15.2902 6.74984 13.5001 6.74984ZM13.5001 9.44978C14.0319 9.44969 14.5586 9.55436 15.0499 9.7578C15.5413 9.96125 15.9878 10.2595 16.3639 10.6355C16.74 11.0115 17.0384 11.4579 17.242 11.9492C17.4456 12.4406 17.5505 12.9672 17.5506 13.499C17.5506 14.0309 17.446 14.5575 17.2425 15.0489C17.0391 15.5403 16.7409 15.9868 16.3649 16.3629C15.9889 16.7391 15.5425 17.0374 15.0512 17.2411C14.5599 17.4447 14.0333 17.5495 13.5014 17.5496C12.4274 17.5496 11.3973 17.1229 10.6378 16.3634C9.87832 15.6039 9.45165 14.5738 9.45165 13.4997C9.45165 12.4256 9.87832 11.3955 10.6378 10.636C11.3973 9.87647 12.4274 9.44978 13.5014 9.44978M20.5886 4.72489C20.141 4.72489 19.7118 4.90268 19.3954 5.21914C19.0789 5.5356 18.9012 5.96481 18.9012 6.41235C18.9012 6.85989 19.0789 7.28911 19.3954 7.60557C19.7118 7.92203 20.141 8.09981 20.5886 8.09981C21.0361 8.09981 21.4653 7.92203 21.7818 7.60557C22.0982 7.28911 22.276 6.85989 22.276 6.41235C22.276 5.96481 22.0982 5.5356 21.7818 5.21914C21.4653 4.90268 21.0361 4.72489 20.5886 4.72489Z"
                  fill="white" />
              </svg>
              </a>
              <a href=""><svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M27 13.5338C27 6.06316 20.952 0 13.5 0C6.048 0 0 6.06316 0 13.5338C0 20.0842 4.644 25.5383 10.8 26.797V17.594H8.1V13.5338H10.8V10.1504C10.8 7.53835 12.9195 5.41353 15.525 5.41353H18.9V9.47368H16.2C15.4575 9.47368 14.85 10.0827 14.85 10.8271V13.5338H18.9V17.594H14.85V27C21.6675 26.3233 27 20.5579 27 13.5338Z"
                  fill="white" />
              </svg>
              </a>
              <a href=""><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_650_4309" maskUnits="userSpaceOnUse" x="0" y="0" width="28"
                  height="28">
                  <path d="M0.375 0.760498H27.375V27.7605H0.375V0.760498Z" fill="white" />
                </mask>
                <g mask="url(#mask0_650_4309)">
                  <path
                    d="M21.6375 2.02588H25.7781L16.7331 12.39L27.375 26.4956H19.0436L12.5134 17.9424L5.04986 26.4956H0.905357L10.5791 15.4063L0.375 2.02781H8.91857L14.8123 9.84431L21.6375 2.02588ZM20.1814 24.0116H22.4764L7.665 4.38066H5.20414L20.1814 24.0116Z"
                    fill="white" />
                </g>
              </svg>
              </a>
            </span>
          </div>
        </nav>
        <section className="landing-section">
          <div className="header">
            <h1 className="landing-hed1">Ultimate <span><img className="tackle" src={tackle} alt="" /></span></h1>
            <h2 className="landing-hed2">Fishing Experience</h2>
            <p className="landing-desc">
              This fishing journey requires driving on Himalayan switch back roads
              for long hours, fishing and hiking to get to the best waters in high
              temperatures that are ideal for Golden Mahseer fishing.
            </p>
            <button className="action-btn">Plan your Dream Trip Now</button>
          </div>
          <div className="image">
            <img className="landing-img" src={landingimg} alt="" />
          </div>
        </section>
      </div>
      <section className="features">
        <div className="feature-text">
          <img src={FeatMeal} alt="" /> <span>Freshly Prepared Meals</span>
        </div>
        <div className="feature-text">
          <img src={FeatComfort} alt="" /> <span>All-Inclusive Convenience</span>
        </div>
        <div className="feature-text">
          <img src={FeatFishing} alt="" /> <span>Unwind in Comfort and Style</span>
        </div>
        <div className="feature-text">
          <img src={FeatMeal} alt="" /> <span>Freshly Prepared Meals</span>
        </div>
        <div className="feature-text">
          <img src={FeatComfort} alt="" /> <span>All-Inclusive Convenience</span>
        </div>
        <div className="feature-text">
          <img src={FeatFishing} alt="" /> <span>Unwind in Comfort and Style</span>
        </div>
        <div className="feature-text">
          <img src={FeatMeal} alt="" /> <span>All-Inclusive Convenience</span>
        </div>
      </section>
      <section className="aboutus">
        <div>
          <div className="section-hed">
            <p>ABOUT US</p>
            <h1>Your River Trails</h1>
          </div>
          <p className="sec-content">
            River Trails is more than just a fishing camp; it's the culmination of
            a lifelong passion for the mighty Golden Mahseer and the breathtaking
            beauty of the Pancheshwar region. Founded in 2021 by Daniel Abraham, a
            seasoned angler with over 20 years of experience on these very waters,
            River Trails embodies the spirit of adventure and the pursuit of a
            legendary catch.
          </p>
        </div>
        <div className="aboutus-image-div">
          <img className="aboutus-image" src={AboutUs} alt="" />

        </div>
      </section>
      <section className="packages">
        <div className="section-hed">
          <p>PACKAGES</p>
          <h1>Our best Itinerary</h1>
        </div>
        <div className="packages-list">
          <Link to="/itinerary/1">
            <div className="package-card">
              <div className="package-details">
                <h1>Time-Crunched Angler</h1>
                <p>the mighty Golden Mahseer and the breathtaking beauty of the Pancheshwar region.</p>
                <p className="tags"><span className="days">11 nights / 13 days</span> <span className="rating"><svg
                  xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                  width="24px" fill="#e8eaed">
                  <g>
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M0 0h24v24H0V0z" fill="none" />
                  </g>
                  <g>
                    <path
                      d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                  </g>
                </svg> 4.5</span>
                </p>
              </div>
            </div>
          </Link>
          <div className="package-card">
            <div className="package-details">
              <h1>Time-Crunched Angler</h1>
              <p>the mighty Golden Mahseer and the breathtaking beauty of the Pancheshwar region.</p>
              <p className="tags"><span className="days">11 nights / 13 days</span> <span className="rating"><svg
                xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                width="24px" fill="#e8eaed">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg> 4.5</span>
              </p>
            </div>
          </div>
          <div className="package-card">
            <div className="package-details">
              <h1>Time-Crunched Angler</h1>
              <p>the mighty Golden Mahseer and the breathtaking beauty of the Pancheshwar region.</p>
              <p className="tags"><span className="days">11 nights / 13 days</span> <span className="rating"><svg
                xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                width="24px" fill="#e8eaed">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg> 4.5</span>
              </p>
            </div>
          </div>
          <div className="package-card">
            <div className="package-details">
              <h1>Time-Crunched Angler</h1>
              <p>the mighty Golden Mahseer and the breathtaking beauty of the Pancheshwar region.</p>
              <p className="tags"><span className="days">11 nights / 13 days</span> <span className="rating"><svg
                xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                width="24px" fill="#e8eaed">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg> 4.5</span>
              </p>
            </div>
          </div>
          <div className="package-card">
            <div className="package-details">
              <h1>Time-Crunched Angler</h1>
              <p>the mighty Golden Mahseer and the breathtaking beauty of the Pancheshwar region.</p>
              <p className="tags"><span className="days">11 nights / 13 days</span> <span className="rating"><svg
                xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                width="24px" fill="#e8eaed">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg> 4.5</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery">
        <div className="section-hed">
          <p>GALLERY</p>
          <h1>River Rails's Gallery</h1>
        </div>
        <div className="images-list">
          <div className="img-list1">
            <div className="img1 img"><img src={Gall2} alt="" /></div>
            <div className="img2 img"><img src={Gall1} alt="" /></div>
            <div className="img3 img"><img src={Gall3} alt="" /></div>
          </div>
          <div className="img-list2">
            <div className="img4 img"><img src={Gall4} alt="" /></div>
            <div className="img5 img"><img src={Gall5} alt="" /></div>
            <div className="img6 img"><img src={Gall6} alt="" /></div>
            <div className="img7 img"><img src={Gall7} alt="" /></div>
          </div>
          <div className="img-list2"></div>
        </div>
      </section>
      <section className="reviews">
        <div className="section-hed">
          <p>REVIEWS</p>
          <h1>Our Angler's kind words</h1>
        </div>
        <div className="reviews-list">
          <div className="review-card">
            <img className="profile-pic" src={Rev1} alt="" />
            <h3 className="name">Srijan Dev</h3>
            <p className="title">UI/UX Designer</p>
            <span className="quotes"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22"
              fill="none">
              <path
                d="M27.0001 22C27.7957 22 28.5587 21.7425 29.1213 21.284C29.6839 20.8256 30 20.2039 30 19.5556V13.5862C30 12.9379 29.6839 12.3162 29.1213 11.8577C28.5587 11.3993 27.7957 11.1418 27.0001 11.1418H22.8361C22.8361 10.283 22.8981 9.42415 23.0221 8.56533C23.2081 7.656 23.5181 6.8477 23.9521 6.14044C24.3861 5.43319 24.9451 4.87667 25.6291 4.47089C26.3091 4.01622 27.1771 3.78889 28.233 3.78889V0C26.4971 0 24.9771 0.303111 23.6731 0.909333C22.3782 1.50792 21.2656 2.33678 20.4182 3.33422C19.565 4.43214 18.9368 5.63587 18.5582 6.89822C18.1754 8.29093 17.9882 9.7146 18.0002 11.1418V19.5556C18.0002 20.2039 18.3163 20.8256 18.8789 21.284C19.4415 21.7425 20.2045 22 21.0002 22H27.0001ZM9.00038 22C9.79602 22 10.5591 21.7425 11.1217 21.284C11.6843 20.8256 12.0003 20.2039 12.0003 19.5556V13.5862C12.0003 12.9379 11.6843 12.3162 11.1217 11.8577C10.5591 11.3993 9.79602 11.1418 9.00038 11.1418H4.83646C4.83646 10.283 4.89846 9.42415 5.02245 8.56533C5.21045 7.656 5.52045 6.8477 5.95244 6.14044C6.38643 5.43319 6.94542 4.87667 7.62941 4.47089C8.3094 4.01622 9.17738 3.78889 10.2334 3.78889V0C8.49739 0 6.97742 0.303111 5.67344 0.909333C4.37849 1.50792 3.26591 2.33678 2.4185 3.33422C1.56535 4.43214 0.937152 5.63587 0.558537 6.89822C0.175694 8.29093 -0.0115056 9.7146 0.000546874 11.1418V19.5556C0.000546874 20.2039 0.316612 20.8256 0.87921 21.284C1.44181 21.7425 2.20486 22 3.00049 22H9.00038Z"
                fill="#8D15E9" />
            </svg></span>
            <p className="review">“Thanks to River Rails I can now realize my dream of fishing around the world”</p>
            <div className="star-rating">
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
            </div>
          </div>
          <div className="review-card card-blue">
            <img className="profile-pic" src={Rev3} alt="" />
            <h3 className="name">Binita Singh</h3>
            <p className="title">Dentist</p>
            <span className="quotes"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22"
              fill="none">
              <path
                d="M27.0001 22C27.7957 22 28.5587 21.7425 29.1213 21.284C29.6839 20.8256 30 20.2039 30 19.5556V13.5862C30 12.9379 29.6839 12.3162 29.1213 11.8577C28.5587 11.3993 27.7957 11.1418 27.0001 11.1418H22.8361C22.8361 10.283 22.8981 9.42415 23.0221 8.56533C23.2081 7.656 23.5181 6.8477 23.9521 6.14044C24.3861 5.43319 24.9451 4.87667 25.6291 4.47089C26.3091 4.01622 27.1771 3.78889 28.233 3.78889V0C26.4971 0 24.9771 0.303111 23.6731 0.909333C22.3782 1.50792 21.2656 2.33678 20.4182 3.33422C19.565 4.43214 18.9368 5.63587 18.5582 6.89822C18.1754 8.29093 17.9882 9.7146 18.0002 11.1418V19.5556C18.0002 20.2039 18.3163 20.8256 18.8789 21.284C19.4415 21.7425 20.2045 22 21.0002 22H27.0001ZM9.00038 22C9.79602 22 10.5591 21.7425 11.1217 21.284C11.6843 20.8256 12.0003 20.2039 12.0003 19.5556V13.5862C12.0003 12.9379 11.6843 12.3162 11.1217 11.8577C10.5591 11.3993 9.79602 11.1418 9.00038 11.1418H4.83646C4.83646 10.283 4.89846 9.42415 5.02245 8.56533C5.21045 7.656 5.52045 6.8477 5.95244 6.14044C6.38643 5.43319 6.94542 4.87667 7.62941 4.47089C8.3094 4.01622 9.17738 3.78889 10.2334 3.78889V0C8.49739 0 6.97742 0.303111 5.67344 0.909333C4.37849 1.50792 3.26591 2.33678 2.4185 3.33422C1.56535 4.43214 0.937152 5.63587 0.558537 6.89822C0.175694 8.29093 -0.0115056 9.7146 0.000546874 11.1418V19.5556C0.000546874 20.2039 0.316612 20.8256 0.87921 21.284C1.44181 21.7425 2.20486 22 3.00049 22H9.00038Z"
                fill="#8D15E9" />
            </svg></span>
            <p className="review">“Thanks to River Rails I can now realize my dream of fishing around the world”</p>
            <div className="star-rating">
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
            </div>
          </div>
          <div className="review-card">
            <img className="profile-pic" src={Rev2} alt="" />
            <h3 className="name">Om Sinkar</h3>
            <p className="title">Full Stack Developer</p>
            <span className="quotes"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22"
              fill="none">
              <path
                d="M27.0001 22C27.7957 22 28.5587 21.7425 29.1213 21.284C29.6839 20.8256 30 20.2039 30 19.5556V13.5862C30 12.9379 29.6839 12.3162 29.1213 11.8577C28.5587 11.3993 27.7957 11.1418 27.0001 11.1418H22.8361C22.8361 10.283 22.8981 9.42415 23.0221 8.56533C23.2081 7.656 23.5181 6.8477 23.9521 6.14044C24.3861 5.43319 24.9451 4.87667 25.6291 4.47089C26.3091 4.01622 27.1771 3.78889 28.233 3.78889V0C26.4971 0 24.9771 0.303111 23.6731 0.909333C22.3782 1.50792 21.2656 2.33678 20.4182 3.33422C19.565 4.43214 18.9368 5.63587 18.5582 6.89822C18.1754 8.29093 17.9882 9.7146 18.0002 11.1418V19.5556C18.0002 20.2039 18.3163 20.8256 18.8789 21.284C19.4415 21.7425 20.2045 22 21.0002 22H27.0001ZM9.00038 22C9.79602 22 10.5591 21.7425 11.1217 21.284C11.6843 20.8256 12.0003 20.2039 12.0003 19.5556V13.5862C12.0003 12.9379 11.6843 12.3162 11.1217 11.8577C10.5591 11.3993 9.79602 11.1418 9.00038 11.1418H4.83646C4.83646 10.283 4.89846 9.42415 5.02245 8.56533C5.21045 7.656 5.52045 6.8477 5.95244 6.14044C6.38643 5.43319 6.94542 4.87667 7.62941 4.47089C8.3094 4.01622 9.17738 3.78889 10.2334 3.78889V0C8.49739 0 6.97742 0.303111 5.67344 0.909333C4.37849 1.50792 3.26591 2.33678 2.4185 3.33422C1.56535 4.43214 0.937152 5.63587 0.558537 6.89822C0.175694 8.29093 -0.0115056 9.7146 0.000546874 11.1418V19.5556C0.000546874 20.2039 0.316612 20.8256 0.87921 21.284C1.44181 21.7425 2.20486 22 3.00049 22H9.00038Z"
                fill="#8D15E9" />
            </svg></span>
            <p className="review">“Thanks to River Rails I can now realize my dream of fishing around the world”</p>
            <div className="star-rating">
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
            </div>
          </div>
          <div className="review-card card-blue">
            <img className="profile-pic" src={Rev4} alt="" />
            <h3 className="name">Reshma Rani</h3>
            <p className="title">Web Developer</p>
            <span className="quotes"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 30 22"
              fill="none">
              <path
                d="M27.0001 22C27.7957 22 28.5587 21.7425 29.1213 21.284C29.6839 20.8256 30 20.2039 30 19.5556V13.5862C30 12.9379 29.6839 12.3162 29.1213 11.8577C28.5587 11.3993 27.7957 11.1418 27.0001 11.1418H22.8361C22.8361 10.283 22.8981 9.42415 23.0221 8.56533C23.2081 7.656 23.5181 6.8477 23.9521 6.14044C24.3861 5.43319 24.9451 4.87667 25.6291 4.47089C26.3091 4.01622 27.1771 3.78889 28.233 3.78889V0C26.4971 0 24.9771 0.303111 23.6731 0.909333C22.3782 1.50792 21.2656 2.33678 20.4182 3.33422C19.565 4.43214 18.9368 5.63587 18.5582 6.89822C18.1754 8.29093 17.9882 9.7146 18.0002 11.1418V19.5556C18.0002 20.2039 18.3163 20.8256 18.8789 21.284C19.4415 21.7425 20.2045 22 21.0002 22H27.0001ZM9.00038 22C9.79602 22 10.5591 21.7425 11.1217 21.284C11.6843 20.8256 12.0003 20.2039 12.0003 19.5556V13.5862C12.0003 12.9379 11.6843 12.3162 11.1217 11.8577C10.5591 11.3993 9.79602 11.1418 9.00038 11.1418H4.83646C4.83646 10.283 4.89846 9.42415 5.02245 8.56533C5.21045 7.656 5.52045 6.8477 5.95244 6.14044C6.38643 5.43319 6.94542 4.87667 7.62941 4.47089C8.3094 4.01622 9.17738 3.78889 10.2334 3.78889V0C8.49739 0 6.97742 0.303111 5.67344 0.909333C4.37849 1.50792 3.26591 2.33678 2.4185 3.33422C1.56535 4.43214 0.937152 5.63587 0.558537 6.89822C0.175694 8.29093 -0.0115056 9.7146 0.000546874 11.1418V19.5556C0.000546874 20.2039 0.316612 20.8256 0.87921 21.284C1.44181 21.7425 2.20486 22 3.00049 22H9.00038Z"
                fill="#8D15E9" />
            </svg></span>
            <p className="review">“Thanks to River Rails I can now realize my dream of fishing around the world”</p>
            <div className="star-rating">
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px"
                viewBox="0 0 24 24" width="24px" fill="#FFA100">
                <g>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M0 0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <path
                    d="m12 17.27 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                </g>
              </svg></span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home