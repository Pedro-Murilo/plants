import { ReactComponent as RightArrow} from '../assets/arrow-right.svg';

function Banner() {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>The plants are so beautiful</span>
            </div>
            <div className="line">
              <span>in your world</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">More about us <RightArrow  /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
