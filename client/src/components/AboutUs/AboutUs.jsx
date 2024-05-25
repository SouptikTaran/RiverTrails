import './AboutUs.css'
import Background from '../../assets/images/background.jpg'
import AboutIntro from '../../assets/images/about_intro.png'
import Gall1 from '../../assets/images/gallery/1.jpg'
import Gall2 from '../../assets/images/gallery/2.jpeg'
import Gall3 from '../../assets/images/gallery/3.jpg'
import Gall4 from '../../assets/images/gallery/4.jpg'
import Gall5 from '../../assets/images/gallery/5.jpg'
import Gall6 from '../../assets/images/gallery/6.jpg'
import Gall7 from '../../assets/images/gallery/7.jpg'
import aboutimg from '../../assets/images/about.png'

function AboutUs() {
  return (
    <>
      <div className='aboutusk'>
            <section className="intro-sec">
                <h1>
                    A Dream Realized by <br />
                    <span> the River</span>
                </h1>
                <div className="intro-img">
                    <img src={Background} alt="" />
                </div>
                <div className="desc">
                    <img src={AboutIntro} alt="" />
                    <p>
                        River Trails is more than just a fishing camp; it's the culmination of
                        a lifelong passion for the mighty Golden Mahseer and the breathtaking
                        beauty of the Pancheshwar region. Founded in 2021 by Daniel Abraham, a
                        seasoned angler with over 20 years of experience on these very waters,
                        River Trails embodies the spirit of adventure and the pursuit of a
                        legendary catch.
                    </p>
                </div>
                <h2>A Haven for Anglers <br />and Foodies Alike</h2>
                <p>
                    At River Trails, we understand that a successful fishing adventure is
                    fuelled not just by adrenaline, but also by delicious and satisfying
                    meals. Our chefs prepare a delectable spread that caters to all dietary
                    preferences, from vegetarian delights to mouthwatering non-vegetarian
                    options. Imagine indulging in fresh pizzas, succulent BBQ, and a variety
                    of other dishes, all culminating in a delightful dessert to top off each
                    meal.
                </p>
            </section>
            <section className="info-sec">
                <div className="info1">
                    <div className="info-text">
                        <h1>Following a Passion, Sharing an Experience</h1>
                        <p>
                            Driven by his own love for the sport, Daniel envisioned a space
                            where anglers could share his passion for the Golden Mahseer and the
                            magic of the Pancheshwar. Leaving behind the corporate world, he
                            embraced the opportunity to follow his dream and create an
                            unforgettable experience for fellow fishing enthusiasts.
                        </p>
                    </div>
                    <div className="info-img">
                        <img src={Gall3} alt="" />
                    </div>
                </div>
                <div className="info2">
                    <div className="info-img">
                        <img src={Gall6} alt="" />
                    </div>
                    <div className="info-text">
                        <h1>From Pop-Up Camps to a Permanent Home</h1>
                        <p>
                            Daniel's journey began with hosting successful Golden Mahseer
                            expeditions through a series of satellite camps. His dedication and
                            expertise attracted a team of exceptional guides who possess an
                            unparalleled understanding of the Pancheshwar's currents and
                            secrets. This deep knowledge of the river ensures you'll be
                            strategically positioned for the ultimate fishing experience.
                        </p>
                    </div>
                </div>
            </section>
            <section className="action-sec">
                <div className="action-hed">
                    <h1>
                        Join us at River Trails, and cast your line into a legacy of passion,
                        expertise, and unforgettable adventure!
                    </h1>
                    <button className="action-btn">Plan your Dream Trip Now</button>
                </div>
                <img className="about-img" src={aboutimg} alt="" />
            </section>
        </div>
    </>
  )
}

export default AboutUs