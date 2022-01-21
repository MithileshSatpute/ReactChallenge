import React from 'react';

const DetailComp = props => ( 
  <div>
    <div className="List">You are <b>{props.name}</b> (<b>{props.age}</b> years old) and are living at <b>{props.location}</b>.</div>
     <div className="List">According your age, you should have sleept for a total of <b>{props.hrs}</b>. </div>
     <div className="List"> The weather at your location is <b>{props.weather}</b></div>
  </div>
  );
export default DetailComp;