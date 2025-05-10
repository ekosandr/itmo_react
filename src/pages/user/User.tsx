// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { id } = context.query;
//   // Fetch data from external API
//   const res = await fetch(`http://api.github.com/user/${id}`);
//   const data = await res.json();
//   return { props: { data } };
// };

import { useEffect, useState } from "react";
import UserInfo from "../../components/UserInfo/UserInfo";
import { User } from "../../types/user";
import { useParams } from "react-router-dom";

export default function UserPage() {
  const { id } = useParams();
  const [data, setData] = useState<User | null>(null);

  useEffect(() => {
    const user = fetch(`http://api.github.com/user/${id}`);
    user
      .then((res) => res.json())
      // .then((res) => console.log(11, res))
      .then((res) => setData(res));
  }, []);
  return (
    <>
      <div className="container">{data && <UserInfo user={data} />}</div>
    </>
  );
}
