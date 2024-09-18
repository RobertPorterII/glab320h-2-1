/* eslint-disable react/prop-types */

import "./Content.css"

export default function Content(props) {
    return (<p style={{ color: props.color}}>{props.text}</p>);
  }
  