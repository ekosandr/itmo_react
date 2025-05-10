import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { User } from "./types/user";
import UsersList from "./components/UsersList/UsersList";

export default function Home() {
  const [data, setData] = useState<User[] | null>(null);

  useEffect(() => {
    const user = fetch("https://api.github.com/users?per_page=100");
    user
      .then((res) => res.json())
      // .then((res) => console.log(811, res))
      .then((res) => setData(res));
  }, []);

  return (
    <Layout>
      {data && (
        <div className="container">
          <UsersList users={data} />
          <UsersList users={data} />
          <UsersList users={data} />
          <UsersList users={data} />
          <UsersList users={data} />
        </div>
      )}
      {data && (
        <div className="container">
          <UsersList users={data} />
          <UsersList users={data} />
          <UsersList users={data} />
          <UsersList users={data} />
          <UsersList users={data} />
        </div>
      )}
      {data && (
        <div className="container">
          <UsersList users={data} />
          <UsersList users={data} />
          <UsersList users={data} />
          <UsersList users={data} />
          <UsersList users={data} />
        </div>
      )}
      {data && (
        <div className="container">
          <UsersList users={data} />
          <UsersList users={data} />
          <UsersList users={data} />
          <UsersList users={data} />
          <UsersList users={data} />
        </div>
      )}
      {data && (
        <div className="container">
          <UsersList users={data} />
          <UsersList users={data} />
          <UsersList users={data} />
          <UsersList users={data} />
          <UsersList users={data} />
        </div>
      )}
    </Layout>
  );
}
