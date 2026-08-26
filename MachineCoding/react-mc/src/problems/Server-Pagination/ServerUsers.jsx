import React, { lazy, Suspense, useEffect, useState } from "react";
import UsersList from "./UsersList";
const UserInfo = lazy(()=>import("./UserInfo"))

function ServerUsers() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserID] = useState(1);
  const [userData, setUserData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);

  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://dummyjson.com/users?limit=${limit}&skip=${skip}&select=firstName`
      );
      const resJson = await res.json();
      setData(resJson.users);
      setUserID(resJson.users[0].id);
      setUserData(resJson.users[0]);
      setTotal(resJson.total);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, [skip]);

  const currentPage = skip / limit;
  const totalNoPages = Math.ceil(total / limit);

  // const selectPage = (id) => {
  //   setSkip(id);
  // };

  const selectPage = (pageIndex) => {
    setSkip(pageIndex * limit);
  };

  const selectUser=(id)=>{
    setUserID(id)
  }
  const previous = () => {
    setSkip((prev) => Math.max(0, prev - limit));
  };
  const next = () => {
    setSkip((prev) => prev + limit);
  };

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{ border: "1px solid black", width: "250px", padding: "12px" }}
        >
          {data.map((d) => (
            <UsersList
              key={d.id}
              id={d.id}
              fname={d.firstName}
              lname={d.lastName}
              setUserID={setUserID}
              onClick={()=>selectUser(d.id)}
            />
          ))}
        </div>
        <div
          style={{
            border: "1px solid black",
            margin: "12px",
            padding: "12px",
            height: "300px",
            width: "250px",
          }}
        >
            <Suspense fallback={<p>Loadinggg..</p>}>
            <UserInfo userId={userId} userData={userData} setUserData={setUserData} />
            </Suspense>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <button disabled={skip === 0} onClick={previous}>Previous</button>
        {[...Array(totalNoPages).keys()].map((n) => (
          <p
            onClick={() => {
              selectPage(n);
            }}
            style={{
              cursor: "pointer",
              padding: "5px",
              border: "1px solid black",
              margin: "4px",
              backgroundColor: `${n === currentPage ? "red" : ""}`,
            }}
            key={n}
          >
            {n + 1}
          </p>
        ))}
        <button disabled={currentPage === totalNoPages-1} onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default ServerUsers;
