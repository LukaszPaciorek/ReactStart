import React from "react";
import ReactDOM from "react-dom";


function UserCard (props) {

      if (props.postcode.length === 5 || props.postcode.length === 6
          && typeof props.name === "string" && props.name.lenght !== 0
          && typeof props.surname === "string" && props.surname.lenght !== 1
          && typeof props.city === "string" && props.city.lenght !== 1) {
        return (
            <>
              <div className="card">
                <div>
                  <h5>{props.name} {props.surname}</h5>
                  <div>{props.adress}</div>
                  <div>{props.postcode} {props.city}</div>
                </div>
              </div>
            </>
        )
      } else {
        return (
           <div className="alert alert-danger">
               Dane są nieprawidłowe!
           </div>
        )
      }
}

function App() {
  return <UserCard name={"Lukasz"} surname={"Paciorek"} adress={"Sw. Wincetnego"} postcode={"03-291"} city={"Warszawa"} />
}

/**
 * Nie modyfikuj kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  UserCard
};
