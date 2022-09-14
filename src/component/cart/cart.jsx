import './cart.css'

const CartProduct = () => {
    return(
        <div className="p-2 cart d-flex gap-2">
            <img className="img_product_cart" src='https://s101.divarcdn.com/static/pictures/1663161994/wYhY9Puz.jpg'/>
            <div dir='rtl' className='d-flex flex-column justify-content-between'>
                <p>خوش نقشه 86 متری بر بلوار مرجعیت</p>
                <div className='text-muted fs-6-5'>
                    <p>1050000000 تومان</p>
                    <p>مشاور املاک در پردیسان</p>
                </div>
            </div>
        </div>
    )
}

export default CartProduct