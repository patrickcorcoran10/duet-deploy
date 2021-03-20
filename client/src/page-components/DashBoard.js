
import React from "react";
import Button from "react-bootstrap/Button";

function Dashboard() {
  return (
    <div>
      <Button
        href="/postband"
        className="bandBtn"
        variant="primary"
        type="submit"
      >
        Create your Band Post! 
      </Button>
      <Button
        href="/SearchPage"
        className="searchBtn"
        variant="primary"
        type="submit"
      >
        Search for a Musician/Band!
      </Button>
      <Button
        href="/postmusician"
        className="musicianBtn"
        variant="primary"
        type="submit"
      >
        Create your Musician Post!
      </Button>


  
 



        </div>
     
    )

}
export default Dashboard;
