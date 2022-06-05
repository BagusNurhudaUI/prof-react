
import Instafeed from 'instafeed.js'

var feed = new Instafeed({
  // limit :6,
  clientId : "639245593",
  accessToken: 'IGQVJVbWtSX1Rwa0lvUWVESG02MUp0SFoxaDFvZAGJPM2NWZAnRCNThHLUk1eHVLU0c0ZAmJ6S05LTWhaSXZAfYU1OSHNQN2NXbWZAXYXlQR3RVQXRET0NCeDdWUW1zZA1dBTTE5M0g0R0NoekpMV3F0a19GMgZDZD'
});

export default function Gallery () {

    return (
        <section id="gallery" class="about sec-pad">
         <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">My Gallery</span>
          <span class="heading-sec__sub">
            A several photos of my feeds that have been taken with <strong>wholeheartedly</strong>
          </span>
        </h2>
        <div id="instafeed">
         {feed.run()}
        </div>

      </div>
        </section>
    )
}