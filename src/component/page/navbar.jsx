import { BiMap , BiUser } from "react-icons/Bi";
import { BsChat } from "react-icons/bs";
import { AiOutlineSearch , AiFillCar } from "react-icons/Ai";
import { Button, NavDropdown } from "react-bootstrap";
import { MdHomeWork , MdPhoneIphone , MdPeopleAlt , MdOutlineWork } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";
import { GiOfficeChair } from "react-icons/gi";
import { TbLamp , TbDeviceWatchStats } from "react-icons/tb";
import { FaBrush , FaDiceFour } from "react-icons/fa";
import ButtonNav from '../Button/Button-navbar'
import '../page/navbarStyle.css'


const NAvbar = () => {
    return(
        <div dir="rtl">
            <header className="sticky-top">
                <nav className="d-flex mx-4 align-items-center mb-2">
                    <a className="px-3" href="#homepage">
                        <img className="logo" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjM4NTUzIDE0LjYxNzNIOC4yODA0M0M3Ljg5NTA2IDE0LjU2NDcgNy42MzIzMiAxNC4xOTY5IDcuNjg0ODcgMTMuODExNUM4LjE1NzgxIDEwLjY5MzYgOC4zMTU0NiA1LjcxODg3IDguMzE1NDYgNS42ODM4NEM4LjM1MDQ5IDUuMjk4NDggOC42NDgyNyA0Ljk4MzE4IDkuMDUxMTUgNS4wMDA3QzkuNDM2NTIgNS4wMTgyMSA5LjczNDMgNS4zMzM1MSA5LjczNDMgNS43MTg4N0M5LjczNDMgNS45MjkwNyA5LjU1OTEzIDEwLjgxNjIgOS4wODYxOSAxNC4wMjE3QzkuMDMzNjQgMTQuMzcyIDguNzM1ODYgMTQuNjE3MyA4LjM4NTUzIDE0LjYxNzNaTTE4LjQyMjUgMTUuOTEzNUMxOC4xMjQ3IDE1LjkxMzUgMTcuODQ0NCAxNS43MjA4IDE3Ljc1NjkgMTUuNDIzQzE3LjYzNDIgMTUuMDU1MiAxNy44NDQ0IDE0LjY1MjMgMTguMjEyMyAxNC41NDcyQzIxLjUyMjkgMTMuNDk2MiAyMS41NzU0IDEyLjY5MDQgMjEuNTkzIDEyLjI1MjVDMjEuNjI4IDExLjU2OTQgMjEuMTAyNSAxMC42OTM2IDIwLjg5MjMgMTAuMzk1OEMyMC42NjQ2IDEwLjA4MDUgMjAuNzM0NyA5LjY0MjU3IDIxLjA1IDkuNDE0ODVDMjEuMzY1MiA5LjE4NzE0IDIxLjgwMzIgOS4yNTcyIDIyLjAzMDkgOS41NzI1QzIyLjEzNiA5LjcxMjYzIDIzLjA4MTkgMTEuMDI2NCAyMi45OTQzIDEyLjM0MDFDMjIuOTA2NyAxMy45MzQxIDIxLjY4MDUgMTQuOTE1IDE4LjYzMjcgMTUuODk2QzE4LjU5NzYgMTUuODk2IDE4LjU2MjYgMTUuOTAwMyAxOC41Mjc2IDE1LjkwNDdDMTguNDkyNSAxNS45MDkxIDE4LjQ1NzUgMTUuOTEzNSAxOC40MjI1IDE1LjkxMzVaTTguOTExMDIgMTguMzgzM0M4LjcwMDgyIDE4LjM4MzMgOC40OTA2MyAxOC4yOTU3IDguMzY4MDEgMTguMTIwNkM4LjEyMjc4IDE3LjgyMjggOC4xNzUzMyAxNy4zNjczIDguNDkwNjMgMTcuMTM5NkM5LjkyNjk4IDE2LjAwMTEgMTAuODkwNCAxNC45ODUxIDExLjUyMSAxNC4wOTE4QzExLjE3MDYgMTMuOTE2NiAxMC44MDI4IDEzLjY1MzggMTAuNjEwMSAxMy4yMTU5QzEwLjQzNSAxMi44MTMxIDEwLjMyOTkgMTIuMTQ3NCAxMC45NDI5IDExLjI1NDFDMTEuODE4OCA5Ljk1Nzg2IDEyLjY5NDYgOS42NjAwOCAxMy4wMjc0IDkuNTkwMDJDMTMuNDgyOCA5LjUwMjQ0IDEzLjkyMDcgOS43NjUxOCAxNC4wNDM0IDEwLjIwMzFDMTQuMTMwOSAxMC41MTg0IDE0LjM0MTEgMTEuNTE2OCAxMy43MTA1IDEzLjA0MDhDMTQuNTUxMyAxMy4wMjMzIDE1LjIxNyAxMi43OTU1IDE1LjcyNDkgMTIuMzc1MUMxNi43MDU5IDExLjU4NjkgMTYuNzU4NCAxMC4yNTU2IDE2Ljc1ODQgMTAuMjM4MUMxNi43NzU5IDkuODUyNzcgMTcuMDkxMiA5LjU1NDk4IDE3LjQ3NjYgOS41NTQ5OEMxNy44NjE5IDkuNTcyNSAxOC4xNTk3IDkuODg3OCAxOC4xNTk3IDEwLjI3MzJDMTguMTU5NyAxMC4zNDMyIDE4LjA4OTcgMTIuMjE3NSAxNi42MzU4IDEzLjQ0MzZDMTUuNzI0OSAxNC4yMTQ0IDE0LjQ4MTMgMTQuNTQ3MiAxMi45NzQ4IDE0LjQyNDZDMTIuMjU2NyAxNS41MjgxIDExLjExODEgMTYuODI0MyA5LjM0ODkzIDE4LjIyNTZDOS4yMDg4IDE4LjMzMDcgOS4wNjg2NyAxOC4zODMzIDguOTExMDIgMTguMzgzM1pNMTIuNzEyMSAxMS4zMDY2QzEyLjUxOTQgMTEuNDY0MyAxMi4zMDkyIDExLjY5MiAxMi4wODE1IDEyLjA0MjNDMTEuODUzOCAxMi4zOTI3IDExLjgzNjMgMTIuNTg1MyAxMS44NTM4IDEyLjYzNzlDMTEuODg4OCAxMi43MjU1IDEyLjA2NCAxMi44MTMxIDEyLjIzOTIgMTIuODgzMUMxMi41NzIgMTIuMjE3NSAxMi42NzcxIDExLjY5MiAxMi43MTIxIDExLjMwNjZaTTEyLjg4NzMgMTYuMjI4OEMxMi45MDQ4IDE2LjYxNDEgMTMuMjIwMSAxNi45MTE5IDEzLjU4NzkgMTYuOTExOUgxMy42MjNDMTMuNjc1NSAxNi45MTE5IDE0Ljg0OTEgMTYuODc2OSAxNi41MzA3IDE2LjQ5MTVDMTYuOTE2MSAxNi40MDM5IDE3LjE2MTMgMTYuMDM2MSAxNy4wNzM3IDE1LjY1MDdDMTYuOTg2MSAxNS4yNjU0IDE2LjYxODMgMTUuMDIwMSAxNi4yMzI5IDE1LjEwNzdDMTQuNjczOSAxNS40NDA1IDEzLjU3MDQgMTUuNDkzMSAxMy41NTI5IDE1LjQ5MzFDMTMuMTY3NSAxNS41MTA2IDEyLjg2OTcgMTUuODQzNCAxMi44ODczIDE2LjIyODhaTTEuMTMzNyAxOC4xMDNDMS4yNTYzMSAxOC4yNzgyIDEuNDg0MDMgMTguMzgzMyAxLjY5NDIzIDE4LjM4MzNDMS44MzQzNiAxOC4zODMzIDEuOTc0NDkgMTguMzQ4MyAyLjExNDYyIDE4LjI2MDdDNi41NjM4MSAxNS4wMjAxIDYuNzM4OTggMTAuNzgxMSA2LjczODk4IDEwLjYwNkM2LjczODk4IDEwLjIyMDYgNi40NDEyIDkuOTA1MzEgNi4wNTU4MyA5Ljg4NzhDNS42NzA0NyA5Ljg3MDI4IDUuMzU1MTcgMTAuMTg1NiA1LjMzNzY2IDEwLjU3MDlDNS4zMzc2NiAxMC43MTExIDUuMTYyNDkgMTQuMzAyIDEuMjkxMzUgMTcuMTIyMUMwLjk3NjA0OSAxNy4zNDk4IDAuOTA1OTgzIDE3Ljc4NzcgMS4xMzM3IDE4LjEwM1oiIGZpbGw9IiNBNjI2MjYiLz4KPC9zdmc+Cg=="/>
                    </a>
                    <hr className="py-auto"/>
                    <ButtonNav>
                        <BiMap/>
                        <span className="pe-2 fs-6-5">قم</span>
                    </ButtonNav>
                    <NavDropdown className="text-muted fs-6-5" title="دسته ها" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1" className="text-muted">
                            <GrFormNextLink className="fs-6"/>
                            <span className="fs-7">همه ی آگهی ها</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2" className="text-muted">
                            <MdHomeWork/>
                            <span className="fs-7">املاک</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3" className="text-muted">
                            <AiFillCar/>
                            <span className="fs-7">وسایل نقلیه</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.4" className="text-muted">
                            <MdPhoneIphone/>
                            <span className="fs-7">کالای دیجیتال</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.5" className="text-muted">
                            <TbLamp/>
                            <span className="fs-7">خانه و آشپز خانه </span>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.6" className="text-muted">
                            <FaBrush className="fs-6"/>
                            <span className="fs-7">خدمات</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.7" className="text-muted">
                            <TbDeviceWatchStats/>
                            <span className="fs-7">وسایل شخصی</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.8" className="text-muted">
                            <FaDiceFour/>
                            <span className="fs-7">سرگرمی و فراغت</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.9" className="text-muted">
                            <MdPeopleAlt/>
                            <span className="fs-7">اجتماعی</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="5" className="text-muted">
                            <GiOfficeChair/>
                            <span className="fs-7">تجهیزات و صنعتی</span>
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="5.1" className="text-muted">
                            <MdOutlineWork/>
                            <span className="fs-7">استخدام و کاریابی</span>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <div className="d-flex w-100">
                        <div className="d-flex align-items-center text-muted me-3 w-250 w-50">
                            <input className="input-search form-control px-2 fs-6-5 col"/>
                            <AiOutlineSearch className="position-absolute top-2"/>
                        </div>    
                        <div className="me-auto d-flex">
                            <ButtonNav className="wh-btn">
                                <BiUser className="fs-5"/>
                                <span className="pe-2 fs-6-5">دیوار من</span>
                            </ButtonNav>
                            <ButtonNav className="wh-btn">
                                <BsChat className="fs-5"/>
                                <span className="pe-2 fs-6-5">چت</span>
                            </ButtonNav>
                            <ButtonNav className="wh-btn">
                                <span className="pe-2 fs-6-5">پشتیبانی</span>
                            </ButtonNav>
                            <button className="btn-post fs-6 wh-btn my-auto">ثبت آگهی</button>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default NAvbar