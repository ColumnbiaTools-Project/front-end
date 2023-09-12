export default function Guide() {
  return (
    <>
      <div  className={'w-full flex justify-start items-center ml-4'}>
        <div className={'flex flex-col justify-center'}>
          <p className={'text-[26px]'}>결재전 확인사항</p>
          <ul>
            <li>고객의 단순한 변심으로 교환, 반품 및 환불을 요구할 때 수반되는 배송비는 고객님께서 부담하셔야합니다.</li>
            <li>상품을 개봉했거나 설치한 후에는 상품의 재판매가 불가능하므로 고객님의 변심에 대한 교환, 반품이 불가능함을 양지해 주시기 바랍니다.</li>
          </ul>
        </div>
      </div>
      <div className={'divider'} />
      <div>
        <span>총결재 금액 </span>
        <span></span>
      </div>
    </>

  )
}
