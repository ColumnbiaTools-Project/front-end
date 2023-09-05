
type Props = {
    params: {
        slug:string;
    }
}

export function  generateMetadata({params}: Props) {
    return {
        title: `제품의이름 : ${params.slug}`,
    }
}


export default function ProductPage({params} : Props) {
  return (
    <>
      <h2>Products</h2>
      parameters : {params.slug}
    </>
  );
}


