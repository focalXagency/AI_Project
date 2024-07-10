import "./ContactInfo.css";
import ContactInfoButton from "../ContactInfoButton/ContactInfoButton";
import Contact_Icon1 from './../../assets/icons/Icon_Contact1.svg'
import Contact_Icon2 from './../../assets/icons/Icon_Contact2.svg'
import Contact_Icon3 from './../../assets/icons/Icon_Contact3.svg'


const ContactInfo = () => {
  return (
    <div className="HJ_ContactInfo">
      <div className="container_custom">
        <div className="HJ_partsContact">
          <div className="HJ_ContentInfo">
            <h5 className="title-25-5  text-absolute-White">General Inquiries</h5>
            <div className="HJ_buttons_Info">
              <ContactInfoButton btnContact_text='contact@ai-podcasts.com' />
              <ContactInfoButton btnContact_text=' +1 (123) 456-7890' />
            </div>
          </div>
          <div className="HJ_ContentInfo">
            <h5 className="title-25-5  text-absolute-White">Technical Support</h5>
            <div className="HJ_buttons_Info">
              <ContactInfoButton btnContact_text='contact@ai-podcasts.com' />
              <ContactInfoButton btnContact_text=' +1 (123) 456-7890' />
            </div>
          </div>
          <div className="HJ_ContentInfo">
            <h5 className="title-25-5  text-absolute-White"> Our Office</h5>
            <div className="HJ_buttons_Info">
              <span className="sub_title-125 text-gray-60">Address: 123 AI Tech Avenue, Techville, 54321</span>
              <ContactInfoButton btnContact_text=' Get Directions' />
            </div>

          </div>
          <div className="HJ_ContentInfo">
            <h5 className="title-25-5  text-absolute-White">Connect with Us</h5>
            <div className="HJ_icons_group">
              <div className="HJ_Icon_info"> <img src={Contact_Icon1} alt="icon contact" /></div>
              <div className="HJ_Icon_info"> <img src={Contact_Icon2} alt="icon contact" /></div>
              <div className="HJ_Icon_info"> <img src={Contact_Icon3} alt="icon contact" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
