import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <div> Property DETAIL{productId} </div>;
};
export default Detail;
