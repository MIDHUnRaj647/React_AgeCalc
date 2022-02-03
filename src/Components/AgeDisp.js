function AgeDisplay(props) {
  function Close_but() {
    window.location.reload("Refresh");
    props.closer();
    console.log(props.YearPass);
  }
  function DispYear() {
    console.log(props.YearPass(), "year disp");
  }
  return (
    <div>
      <div className="main-container">
        <div className="heading">
          <h1 className="heading__title">You are still young.</h1>
          <p className="heading__credits">
            <a
              className="heading__link"
              target="_blank"
              href="https://dribbble.com/sl"
            >
              Come Back After more years.
            </a>
          </p>
        </div>
        <div className="cards">
          <div className="card card-1">
            <div className="card__icon">
              <i className="fas fa-bolt" />
            </div>
            <p className="card__exit">
              <i className="fas fa-times" />
            </p>
            <h2 className="card__title">
              {props.YearPass}
              <br />
              YEAR
            </h2>
            <p className="card__apply">
              {/* <a className="card__link" href="#">
                Apply Now <i className="fas fa-arrow-right" />
              </a> */}
            </p>
          </div>
          <div className="card card-2">
            <div className="card__icon">
              <i className="fas fa-bolt" />
            </div>
            <p className="card__exit">
              <i className="fas fa-times" />
            </p>
            <h2 className="card__title">
              {props.MonthPass}
              <br />
              MONTHS
            </h2>
            <p className="card__apply">
              {/* <a className="card__link" href="#">
                Apply Now <i className="fas fa-arrow-right" />
              </a> */}
            </p>
          </div>
          <div className="card card-3">
            <div className="card__icon">
              <i className="fas fa-bolt" />
            </div>
            <p className="card__exit">
              <i className="fas fa-times" />
            </p>
            <h2 className="card__title">
              {props.DayPass}
              <br />
              DAYS
            </h2>
            <p className="card__apply">
              {/* <a className="card__link" href="#">
                Apply Now <i className="fas fa-arrow-right" />
              </a> */}
            </p>
          </div>
        </div>
        <button id="But" className="name noselect" onClick={Close_but}>
          Try Another
        </button>
      </div>
    </div>
  );
}
export default AgeDisplay;
