import React from 'react';
import { DotProgressionBoard } from '@digital-ai/dot-components';
import phasesData from './DemoData';

export const DemoProgressionBoard = () => {
  // this is an example of how to use the api

  // const [phases, setPhases] = useState();

  // useEffect(() => {
  //   if (!phases) {
  //     getData();
  //   }
  // });

  // const getData = async () => {
  //   const response = await fetch('http://localhost:8080/api/get_progression_details?progression=Ecommerce%20App&output_format=json', {
  //   method:'GET',
  //   headers: {
  //     'Authorization': 'Token 559589e35fb284021f6aa2ca'
  //   }
  //   })

  //   const json = await response.json()
  //   setPhases(json.Response.phases);
  // }

  return (
    <DotProgressionBoard phases={phasesData} baseUrl="http://localhost:8080" />
  );
};

export default DemoProgressionBoard;
