import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

const Display = props => {
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const getBeers = async () => {
      try {
        const response = await axios.get(
          `https://api.punkapi.com/v2/beers/random`
        );

        const [beer] = response.data;
        const { abv, name, description, image_url } = beer;
        setApiResponse({ abv, name, description, image_url });
      } catch (err) {
        console.log(err);
      }
    };

    if (props.age >= 16) {
      getBeers();
    } else {
      setApiResponse(null);
    }
  }, [props.age]);

  const currentYear = props.age + props.yearBorn;
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h1>Hello, {props.name}</h1>
          <h1>Age: {props.age}</h1>
          <h1>The year is: {currentYear}</h1>
          {apiResponse ? (
            <div>
              <h3>Beer: {apiResponse.name}</h3>
              <h3>ABV: {apiResponse.abv}%</h3>
              <h5>{apiResponse.description}</h5>
              {apiResponse.image_url && (
                <Card>
                  <img
                    style={{ height: '10%', width: '10%' }}
                    className={'img-fluid'}
                    src={apiResponse.image_url}
                    alt="beer"
                  />
                </Card>
              )}
            </div>
          ) : (
            <h2>Just Say No!</h2>
          )}
        </div>
        <div className="col-6">
          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default Display;
