import { useState } from "react";
import AgeDisplay from "./AgeDisp";

function AgeInput() {
  const [YearShow, SetYearShow] = useState("");
  const [MonthShow, SetMonthShow] = useState("");
  const [DaysShow, SetDaysShow] = useState("");
  const [foroverlay, Setforoverlay] = useState(false);
  function OverlayOn() {
    if (Dob.length !== 10) {
      alert("Enter Your Date of Birth");
    } else {
      Setforoverlay(true);
      let Yr = Year();
      let Mn = Month();
      let Dy = Days();
      // console.log(Yr);
      SetYearShow(Yr);
      SetMonthShow(Mn);
      SetDaysShow(Dy);
    }
  }
  function CloseBackdrop() {
    Setforoverlay(false);
  }

  //for assigning values and for the updating of the same values
  const [Dob, SetDob] = useState("");
  let Dt_Arr = Dob.split("-");
  //for getting current date
  let today = new Date().toISOString().slice(0, 10);
  let Dt_TdArr = today.split("-");
  function Year() {
    let YY = Dt_TdArr[0] - Dt_Arr[0] - 1;
    return YY;
  }
  function Month() {
    let MM = Dt_TdArr[1] - Dt_Arr[1];
    if (MM < 0) {
      let MM_neg = MM * -1;
      return MM_neg;
    } else {
      return MM;
    }
  }
  function Days() {
    let DD = Dt_TdArr[2] - Dt_Arr[2];
    if (DD < 0) {
      let DD_neg = DD * -1;
      return DD_neg;
    } else {
      return DD;
    }
  }
  //for hold the values and to remove refreshing
  const submit_form = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="login-box">
        <h2>Calculate Your Age Here!</h2>
        <form onSubmit={submit_form}>
          <div className="user-box">
            <input
              type="date"
              name=""
              required
              value={Dob}
              onChange={(e) => SetDob(e.target.value)}
            />
            <label>Input your Date of Birth</label>
          </div>
          <button type="submit" className="Butt" onClick={OverlayOn}>
            <span />
            <span />
            <span />
            <span />
            Submit
          </button>
        </form>
      </div>
      {foroverlay && (
        <AgeDisplay
          closer={CloseBackdrop}
          YearPass={YearShow}
          MonthPass={MonthShow}
          DayPass={DaysShow}
        />
      )}
    </div>
  );
}
export default AgeInput;
