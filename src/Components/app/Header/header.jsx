/*******************************************************************************
* Herder and footer using semantic-ui-react
* Contributors: Abhishek Kuamr Yadav
*******************************************************************************/
import { Button, Image, ModalContent, Container } from "semantic-ui-react";
import Logo from "../../assests/Images/1ansah.webp";

const HeaderBar = (_props) => (

  <Container id='header'>
    <div className="logo-placer-left">
      <Image className="logo" src={Logo} />
    </div>
    <div className="project">
      <b>1Asnah</b> Quick Search
    </div>
    <div className="logo-placer-right">
      <Button primary>FeedBack</Button>
    </div>
    <div id="footer">
      <div className="disclaimer">
        <ModalContent className="Footer">Powered by @ 1Ansah Pvt Ltd</ModalContent>
      </div>
    </div>
  </Container>

);
export default HeaderBar;
