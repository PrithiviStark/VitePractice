import { ReactImage } from "./ReactImage";
import { ViteImage } from "./ViteImage";

export const ReactLogoBox = () => {
  const imageLoop = [];

  let counter = 3;
  for (let i = 0; i < counter; i++) {
    imageLoop.push(<ReactImage key={i + 1} />);
  }
  return (
    <>
      <div className="u-logo-container">
        <ul>
          {imageLoop.map((i, index) => (
            <li className="imageLogo" key={index}>
              {i}
            </li>
          ))}
        </ul>
      </div>
      <div className="u-logo-container">
        <ul>
          {imageLoop.map((i, index) => (
            <li className="imageLogo" key={index}>
              {i}
            </li>
          ))}
        </ul>
      </div>
      <div className="u-logo-container">
        <ul>
          {imageLoop.map((i, index) => (
            <li className="imageLogo" key={index}>
              {i}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
