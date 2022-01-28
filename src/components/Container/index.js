import React from "react";

export default function Container({ data, isLoading, isError }) {
  return (
    <div className="container">
      <div className="container__header">
        {isError ? (
          <p className="error">Hubo un error al realizar tu búsqueda</p>
        ) : (
          <p>Resultados de la búsqueda</p>
        )}
      </div>
      <div className="container__results">
        {Array.isArray(data?.data) &&
          data?.data.length > 0 &&
          data?.data.map((gif) => {
            console.log(gif);
            return (
              <a href={gif.url} target="_blank" rel="noreferrer">
                <img src={gif.images.original.url} alt={gif.title} />
              </a>
            );
          })}
      </div>
    </div>
  );
}
