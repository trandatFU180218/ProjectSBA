import React, { useEffect, useState } from "react";
import { getMyFines } from "../api/axiosClient";

function Fines() {

  const [fines, setFines] = useState([]);

  const userId = 1;

  useEffect(() => {
    loadFines();
  }, []);

  const loadFines = async () => {
    const res = await getMyFines(userId);
    setFines(res.data);
  };

  return (
    <div>

      <h2>My Fines</h2>

      {fines.map((f) => (
        <div key={f.id} style={{border:"1px solid gray", margin:"10px", padding:"10px"}}>

          <p>Late Days: {f.late_days}</p>

          <p>Fine Amount: {f.fine_amount} VND</p>

          <p>Status: {f.paid ? "Paid" : "Unpaid"}</p>

        </div>
      ))}

    </div>
  );
}

export default Fines;