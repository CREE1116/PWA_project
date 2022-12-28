import React, { useState, useEffect } from "react";
import Cpanel from "./Cpanel";
function Entry(props) {
  const { data } = props;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    console.log("inEntry data", data);
  }, [data]);
  return (
    <div>
      {loading ? (
        <span>loading</span>
      ) : (
        <div>
          <div>
            {data.entry.map((entry, index) => {
              return (
                <div key={index}>
                  <Cpanel data={entry} />
                </div>
              );
            })}
          </div>
          <h3>{data.content}</h3>
          <h3>{data.date.split("T")[0]}</h3>
          <a href={data.user.url}>
            <p>user: {data.user.username}</p>
          </a>
        </div>
      )}
    </div>
  );
}

export default Entry;
