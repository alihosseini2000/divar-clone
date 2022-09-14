import '../page/mainpageStyle.css'
import CartProduct from '../cart/cart'

const MainPage = () => {
    return(
        <main className="me-auto col-lg-12 ps-4 ms-5">
            <h1 className="fs-9 pb-3 text-muted">دیوار قم:‌ انواع آگهی‌ها و خدمات در قم</h1>
            <CartProduct/>
        </main>
    )
}

export default MainPage