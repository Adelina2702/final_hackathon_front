import React, { Fragment } from "react";
import '../Footer/Footer.css'
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';


const Footer = () => {
    return (
        <Fragment>
            <div className="mainFtr ">
                <div className="coMainFtr">
                    <div className="bireki ">
                        <h5>Покупателям</h5>
                        <Link to="/order">
                            <a href="#">Доставка</a>
                        </Link>
                        <Link to="/cart">
                            <a href="#">Оплата</a>
                        </Link>
                        <a href="#">Возврат товара</a>
                    </div>
                    <div className="bireki ">
                        <h5>Информация</h5>
                        <a href="#">О нас</a>
                        <a href="#">Блог</a>
                        <a href="#">Обратная связь</a>
                    </div>
                    <div className="">
                        <h5>Контакты</h5>
                        <a target="blank" href="#">
                            <AddIcCallIcon /> +996 554 15-81-55
                        </a>
                        <br />
                        <a target="blank" href="#">
                           <AddLocationIcon/> ул.Табышалиева 29,Bishkek/Kyrgyzstan
                        </a>
                    </div>
                    <div className="col-3 right-side">
                        <h5>Социальные сети</h5>
                        <a target="blank" href="#">
                            <FacebookIcon />facebook
                        </a>
                        <br />
                        <a target="blank" href="#">
                            <InstagramIcon />instagram
                        </a>
                        <br />
                        <a target="blank" href="#">
                            <TwitterIcon />twitter
                        </a>
                        <br />
                        <a target="blank" href="#">
                            <GitHubIcon />github
                        </a>
                      
                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default React.memo(Footer);
