

export default function Akur (){
    
    return (
        <>
        <section className="project-cs-hero">
    <div className="project-cs-hero__content">
      {/* <div  style={{justifyContent: 'space-between'}}> <img src= {require('../assets/png/akur.png') } width = {300} /></div> */}
      <h1 className="heading-primary">Audit Kurir</h1>
      <div className="project-cs-hero__info">
        <p className="text-primary">
        <strong>Audit Kurir</strong> or <strong>"akur"</strong> is an Android application that can divide all tracking information from seller with many orders and want to seperate their shipment delivery.
        </p>
      </div>
      <div className="project-cs-hero__cta">
        <a href="#see-live" className="btn btn--bg" >
          Live Link
        </a>
      </div>
    </div>
  </section>
  <section className="project-details">
    <div className="main-container">
      <div className="project-details__content">
        <div className="project-details__showcase-img-cont">
          <img
            src={ require ('../assets/png/akur.png')}
            alt="Project Image"
            className="project-details__showcase-img"
          />
        </div>
        <div className="project-details__content-main">
          <div className="project-details__desc">
            <h3 className="project-details__content-title">Project Overview</h3>
            <p className="project-details__desc-para">
            Recently, the e-commerce industry is one of the industries that is very popular in many circles. The existence of e-commerce has changed the principles of shopping that must be done through an offline store. Slowly but surely, everyone has chosen e-commerce as a medium for them to buy and shop anytime and everywhere with many choices of product, brands, and types of delivery. Estimated everyday order in many e-commerce is about millions orders that have been made by buyers to sellers. This is a huge amount and also will affect the simple shop. These million orders have a large variety of types of shipment delivery companies and it can affect sellers because they have to recap the number of orders that must be delivered to more than one shipping company.


            </p>
            <p className="project-details__desc-para">
            Therefore, we will create a system that will be useful to overcome these problems as a bis solution. We???re building Akur, a Delivery Auditing Service application mobile based program which helps sellers in online shops having trouble to track the amount of packets sent in delivery service everyday. With Akur the seller won???t need to worry about losing a packet in the midst of the delivery process.
            </p>
          </div>
          <div className="project-details__tools-used">
            <h3 className="project-details__content-title">Tools Used</h3>
            <div className="skills">
              <div className="skills__skill">Java</div>
              <div className="skills__skill">Node JS</div>
              <div className="skills__skill">Express JS</div>
              <div className="skills__skill">PostgreSQL</div>
              <div className="skills__skill">AWS CLoud</div>
              <div className="skills__skill">binderbyteAPI</div>
              <div className="skills__skill">Android Studio</div>
              
            </div>
          </div>
          <div className="project-details__links" id='see-live'>
            <h3 className="project-details__content-title">See Live</h3>
            <a
              href="https://drive.google.com/file/d/1PeuRjgBC_cqdLnhgyu7lMp-FipyIeZkO/view"
              className="btn btn--med btn--theme project-details__links-btn"
              target="_blank"
            >
              Download APK
            </a>
            <a
              href="https://github.com/BagusNurhudaUI/akur"
              className="btn btn--med btn--theme-inv project-details__links-btn"
              target="_blank"
            >
              Code Link
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}