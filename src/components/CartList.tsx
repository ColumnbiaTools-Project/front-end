'use client'

type Props = {
  cartData: CartProduct[]
}
export default function CartList({cartData} :Props) {

    return (
        <>
            <div className={'flex'}>
                <input
                    name="allCheck"
                    className="w-[24px] mr-3"
                    type="checkbox"
                />
                <p className={'text-[24px] text-DEFAULT'}>전체 선택</p>
            </div>
            <div>
              {cartData && cartData.map((item, index) => (
                <ul className={'flex '} key={index}>
                  <li>{item.title}</li>
                  <li>{item.price}</li>
                  <li>{item.color}</li>
                  <li>{item.id}</li>
                </ul>
              ))}
            </div>
        </>
    );
}
