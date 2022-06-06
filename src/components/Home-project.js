

export default function Home_Project(){

    return (
        <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">
            Here is a list of my application that i have been working in team or individual. Check it now!
          </span>
        </h2>

        <div className="projects__content">
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src={ require('../assets/png/akur.png')}
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Audit Kurir</h3>
              <p className="projects__row-content-desc">
                <strong>Audit Kurir</strong> or <strong>"akur"</strong> is an Android application that can divide all tracking information from seller with many orders and want to seperate their shipment delivery.
              </p>
              <a
                href="/akur" 
                id="project-akur"
                className="btn btn--med btn--theme dynamicBgClr btn-11"
                >Lihat</a
              >
            </div>
          </div>
          <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src={ require('../assets/png/kasbaik.png')}
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Kasbaik by Kitabisa</h3>
              <p className="projects__row-content-desc">
                <strong>Kasbaik by Kitabisa</strong> is an aplication that help Kitabisa Company to downstream their donation from people to someone that need to help. This application also built with <strong>Machine Learning</strong> to improve in data processing such as KTP, and and other data in form. 
              </p>
              <a
              href="/kasbaik"
                id="project-kasbaik"
                className="btn btn--med btn--theme dynamicBgClr btn-11"
                >Lihat</a
              >
            </div>
          </div>
          {/* <!-- <div className="projects__row">
            <div className="projects__row-img-cont">
              <img
                src="./assets/jpeg/project-mockup-example.jpeg"
                alt="Software Screenshot"
                className="projects__row-img"
                loading="lazy"
              />
            </div>
            <div className="projects__row-content">
              <h3 className="projects__row-content-title">Project 3</h3>
              <p className="projects__row-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                facilis tempora, explicabo quae quod deserunt eius sapiente
                praesentium.
              </p>
              <a
                href="./project-3.html"
                className="btn btn--med btn--theme dynamicBgClr"
                target="_blank"
                >Case Study</a
              >
            </div>
          </div> --> */}
        </div>
      </div>
    </section>
    )
}