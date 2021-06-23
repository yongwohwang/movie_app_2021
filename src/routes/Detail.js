import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    console.log(location);
    if (location.state) {
      return (
        <>
          {" "}
          <div className="detail__container">
            <h1>{location.state.title}</h1>{" "}
            <span>{location.state.summary}</span>
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
