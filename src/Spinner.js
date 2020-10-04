import React from "react";

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.message}</div>
    </div>
  );
};

// below is the default message but we can override this thing.
Spinner.defaultProps = {
  message: "Loading...",
};
export default Spinner;
