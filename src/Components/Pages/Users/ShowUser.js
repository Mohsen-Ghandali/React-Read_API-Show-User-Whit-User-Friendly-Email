import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowUser = () => {
  const { email } = useParams();
  const [user, setUser] = useState(null);

  const fetchUser = useCallback(async () => {
    try {
      let data = await fetch("https://jsonplaceholder.typicode.com/users");
      let res = await data.json();
      const foundUser = res.find((elem) => elem.email === email);
      setUser(foundUser);
    } catch (error) {
      console.log(error.message);
    }
  }, [email]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      {user && (
        <div className="card d-inline-block shadow-lg border-0 col-6 text-start my-5 offset-3">
          <div className="card-header bg-secondary text-center text-white">
            {user.name}
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="fw-semibold text-danger">Username: </span>
              {user.username}
            </li>
            <li className="list-group-item">
              <span className="fw-semibold text-danger">Email: </span>
              {user.email}
            </li>
            <li className="list-group-item">
              <span className="fw-semibold text-danger">Phone: </span>
              {user.phone}
            </li>
            <li className="list-group-item">
              <span className="fw-semibold text-danger">Company: </span>
              {user.company.name}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ShowUser;
