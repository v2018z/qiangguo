import { Link } from 'react-router-dom';
import icon from '../../../../assets/icon.svg';

export const Hello = () => {
  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col justify-center items-center mx-auto">
        <div className="Hello">
          <img width="200px" alt="icon" src={icon} />
        </div>
        <h1>emo-rose</h1>
        <div className="Hello" />

        <Link to="/posts" className="button muted-button">
          View Posts
        </Link>
        <br />
        <Link to="/tailwind" className="button muted-button">
          Tailwind
        </Link>
      </div>
    </div>
  );
};
