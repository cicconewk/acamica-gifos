import React, { useContext } from "react";

import { ENDPOINTS, API_KEY } from "../../../../helpers/constants";
import { GlobalContext } from "../../../../helpers/context";
import useFetch from "../../../../hooks/useFetch";

export default function Suggestions() {
  const { search } = useContext(GlobalContext);

  const [data, loading, error] = useFetch(
    `${ENDPOINTS.AUTOCOMPLETE}?q=${search}&api_key=${API_KEY}`,
  );

  return (
    <div className="suggestions">
      {loading && (
        <p>Loading...</p>
      )}
      {Array.isArray(data?.data) &&
        data?.data.length > 0 &&
        data?.data.map((suggestion) => {
          return (
            <div className="suggestions__item">
              <p>some suggestion</p>
            </div>
          );
        })}
    </div>
  );
}
