import PropTypes from "prop-types";

function Counter({ count }) {
  return (
    <div>
      {count !== 0 ? (
        <div className="count">{count <= 99 ? count : ":)"}</div>
      ) : null}

      <style jsx>{`
        .count {
          display: flex;
          align-items: center;
          justify-content: center;
          outline: 1px solid black;
          width: 1.8em;
          height: 1.8em;
          border-radius: 100px;
          font-size: 1em;
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;
