

export default function Kasbaik (){
    
    const alertHandle = function(){
      alert("This application is still on deployment")
    }
    return (
        <>
        <section className="project-cs-hero">
    <div className="project-cs-hero__content">
      {/* <div  style={{justifyContent: 'space-between'}}> <img src= {require('../assets/png/akur.png') } width = {300} /></div> */}
      <h1 className="heading-primary">Kasbaik</h1>
      <div className="project-cs-hero__info">
        <p className="text-primary">
        <strong>Kasbaik by Kitabisa</strong> is an aplication that help Kitabisa Company to downstream their donation from people to someone that need to help. This application also built with <strong>Machine Learning</strong> to improve in data processing such as KTP, and and other data in form.
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
            src={ require ('../assets/png/kasbaik.png')}
            alt="Project Image"
            className="project-details__showcase-img"
          />
        </div>
        <div className="project-details__content-main">
          <div className="project-details__desc">
            <h3 className="project-details__content-title">Project Overview</h3>
            <p className="project-details__desc-para">
            Kasbaik is a type of microfinance app that runs in loans field and financial help in form of capital to other people who needs with instalment payments based on their ability , no interest and no debt slavery (no riba). So basically Kasbaik will be an easy capital support apps and will not incriminating for those who need. 



            </p>
            <p className="project-details__desc-para">
            The list of Main Function from this app :<br></br>
            1. User : can register / login, create a profile, send request of borrowing, can receive tracking update of loan including status changed , payments and give proof of installment, user satisfied to use this app. <br></br>
            2. Partner/ Mitra : can register / login, can see all borrower requests include update status of loan, got all information of borrower and last can input all installment from borrower in this app. <br></br>
            3. Stakeholder from Kitabisa : can see all flow from loans and all database from tabel just to tracking how much loan have been downstream, and how many people have request from every mitra/partner. 

            </p>
          </div>
          <div className="project-details__tools-used">
            <h3 className="project-details__content-title">Tools Used</h3>
            <div className="skills">
              <div className="skills__skill">Kotlin</div>
              <div className="skills__skill">Node JS</div>
              <div className="skills__skill">Express JS</div>
              <div className="skills__skill">PostgreSQL</div>
              <div className="skills__skill">Google CLoud</div>
              <div className="skills__skill">Python Jupiter Notebook</div>
              <div className="skills__skill">Android Studio</div>
              
            </div>
          </div>
          <div className="project-details__links" id='see-live'>
            <h3 className="project-details__content-title">See Live</h3>
            <a
              onClick={alertHandle}
              className="btn btn--med btn--theme project-details__links-btn"
              target="_blank"
            >
              Download APK
            </a>
            <a
              href="https://github.com/BagusNurhudaUI/kasbaik"
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