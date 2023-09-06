import CartList from "@/components/CartList";
import {  getCart } from "@/services/firebase";


export default async function CartPage() {
    /*1.cart 데이터를 가져온다
    2.cartList 에서 주문 리스트를 뿌려준다
    3.체크 박스 체크 표시가 된 물건을 계산한다.
    4.전체 체크시 전체 물건이 결재 진행된다.
    5.계산된 물건은 판매리스트 db에 날짜 기준으로 업데이트
    */

    /*await addOrUpdateToCart('pelican8118', product ).then(res=>{
        console.log("잘저장됨")
    })*/

   const data:CartProduct[] = await getCart('pelican8118');


    // @ts-ignore
  return (
        <section>
            <h1 className={'text-[40px] '}>장바구니</h1>
            <CartList cartData={data}/>
        </section>
    )
}
