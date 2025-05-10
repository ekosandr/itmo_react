import style from "./UserInfo.module.css";
import { User } from "../../types/user";

export default function UserInfo({ user }: { user: User }) {
  return (
    <div className={style.wrapper}>
      <ul>
        <li>{user.avatar_url}</li>
        <li>{user.events_url}</li>
        <li>{user.followers_url}</li>
        <li>{user.following_url}</li>
        <li>{user.gists_url}</li>
        <li>{user.gists_url}</li>
        <li>{user.html_url}</li>
        <li>{user.id}</li>
        <li>{user.login}</li>
      </ul>
    </div>
  );
}
