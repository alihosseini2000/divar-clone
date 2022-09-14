import { AiOutlineDown , AiFillCar , AiFillInstagram , AiFillLinkedin } from "react-icons/Ai";
import { MdHomeWork , MdPhoneIphone , MdPeopleAlt , MdOutlineWork } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { SiAparat } from "react-icons/si";
import { TbLamp , TbDeviceWatchStats } from "react-icons/tb";
import { FaBrush , FaDiceFour , FaTwitter} from "react-icons/fa";
import '../page/asideStyle.css'

const AsidePage = () => {
    return(
        <div className="side-bar col">
            <aside>
                <section className="d-flex flex-column gap-3 fs-6-5">
                    <p className="mb-2 mt-3">دسته ها</p>
                    <a href='#' className="d-flex gap-2 category_btn">
                        <MdHomeWork className="fs-5"/>
                        <span>املاک</span>
                    </a>
                    <a href='#' className="d-flex gap-2 category_btn">
                        <AiFillCar className="fs-5"/>
                        <span>وسایل نقلیه</span>
                    </a>
                    <a href='#' className="d-flex gap-2 category_btn">
                        <MdPhoneIphone className="fs-5"/>
                        <span>کالای دیجیتال</span>
                    </a>
                    <a href='#' className="d-flex gap-2 category_btn">
                        <TbLamp className="fs-5"/>
                        <span>خانه و آشپزخانه</span>
                    </a>
                    <a href='#' className="d-flex gap-2 category_btn">
                        <FaBrush className="fs-5"/>
                        <span>خدمات</span>
                    </a>
                    <a href='#' className="d-flex gap-2 category_btn">
                        <TbDeviceWatchStats className="fs-5"/>
                        <span>وسایل شخصی</span>
                    </a>
                    <a href='#' className="d-flex gap-2 category_btn">
                        <FaDiceFour className="fs-5"/>
                        <span>سرگرمی و فراغت</span>
                    </a>
                    <a href='#' className="d-flex gap-2 category_btn">
                        <MdPeopleAlt className="fs-5"/>
                        <span>اجتماعی</span>
                    </a>
                    <a href='#' className="d-flex gap-2 category_btn">
                        <GiOfficeChair className="fs-5"/>
                        <span>تجهیزات و صنعتی</span>
                    </a>
                    <a href='#' className="d-flex gap-2 category_btn">
                        <MdOutlineWork className="fs-5"/>
                        <span>استخدام و کاریابی</span>
                    </a>
                </section>
                <section className="mt-2">
                    <hr className="filter"></hr>
                    <button className="d-flex gap-2 fs-14 py-auto btn-filter w-100">
                        <span>
                            <AiOutlineDown className="text-muted"/>
                        </span>
                        <span>محل</span>
                    </button>
                    <hr className="filter"/>
                    <button className="d-flex gap-2 fs-14 py-auto btn-filter w-100">
                        <span>
                        <AiOutlineDown className="text-muted"/>
                        </span>
                        <span>قیمت</span>
                    </button>
                    <hr className="filter"/>
                    <button className="d-flex gap-2 fs-14 py-auto btn-filter w-100">
                        <span>
                            <AiOutlineDown className="text-muted"/>
                        </span>
                        <span>وضعیت</span>
                    </button>
                    <hr className="filter"/>
                </section>
            </aside>
            <footer>
                <div>
                    <nav className="d-flex gap-3 flex-wrap">
                        <a href="#" className="category_btn">درباره ی دیوار</a>
                        <a href="#" className="category_btn">دریافت برنامه</a>
                        <a href="#" className="category_btn">بلاگ دیوار</a>
                        <a href="#" className="category_btn">پشتیبانی</a>
                    </nav>
                    <nav className="mt-3 d-flex justify-content-center gap-4">
                        <FaTwitter className="text-muted fs-5"/>
                        <AiFillInstagram className="text-muted fs-5"/>
                        <AiFillLinkedin className="text-muted fs-5"/>
                        <SiAparat className="text-muted fs-5"/>
                    </nav>
                </div>
                <div className="row mt-5 mb-4">
                    <a href="#" className="col">
                        <img className="logo" src="https://imgs.search.brave.com/7TxZEJbqLypUNH6i25Y63tdN5ZS6b0nJSKToGXBDWaM/rs:fit:300:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JRi5z/TE9GVWJ3R3RVYTZZ/cldja1ZOZ2ZnJnBp/ZD1BcGk"/>
                    </a>
                    <a href="#" className="col">
                        <img className="logo" src="https://s100.divarcdn.com/statics/2022/09/ecunion-logo.3ed4f870.png"/>
                    </a>
                    <a href="#" className="col">
                        <img className="logo" src="https://imgs.search.brave.com/qw2G5UIBUHn9HQEedhdAI7itn6Ag0czTGah0sozU9lI/rs:fit:150:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4t/eGdvMXFObExhNVo2/Q3UzTUNOVXZRQUFB/QSZwaWQ9QXBp"/>
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default AsidePage