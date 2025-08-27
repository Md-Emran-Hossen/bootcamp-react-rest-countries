import CountryData from "../CountryData/CountryData";

const CountryDetail = ({ props }) => {
  //const { country, handleVisited } = props;
  return (
    <div>
      <h3>Country Name:</h3>

      {/* <CountryData
        country={country}
        handleVisited={handleVisited}
      ></CountryData> */}

      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetail;
