import { User } from "../../types/user";
import style from "./UsersList.module.css";

export default function UsersList({ users }: { users: User[] }) {
  return (
    <div className={style.wrapper}>
      {users.map((user, index) => (
        <div key={user.id} className={style.block}>
          <h3>
            {index + 1}
            {") "}{" "}
          </h3>
          <a href={`user/${user.id}`}>
            <h3>{user.login}</h3>
          </a>

          <img
            width={200}
            height={200}
            src={user.avatar_url}
            alt={user.login}
          />
        </div>
      ))}
      {users.map((user, index) => (
        <div key={user.id} className={style.block}>
          <h3>
            {index + 1}
            {") "}{" "}
          </h3>
          <a href={`user/${user.id}`}>
            <h3>{user.login}</h3>
          </a>

          <img
            width={200}
            height={200}
            src={user.avatar_url}
            alt={user.login}
          />
          <h3>
            {index + 1}
            {") "}{" "}
          </h3>
          <a href={`user/${user.id}`}>
            <h3>{user.login}</h3>
          </a>

          <img
            width={200}
            height={200}
            src={user.avatar_url}
            alt={user.login}
          />
        </div>
      ))}
    </div>
  );
}
