import {useEffect, useState} from "react";
import axios from "axios";
import moment from "moment";
import {format} from "date-fns";
import Timeline from "./components/timeline";

function App() {
    const [date, setDate] = useState([])


    useEffect(() => {
        axios.get('https://dpg.gg/test/calendar.json')
            .then(({data}) => {
                // console.log(data, 'data')
                setDate(data)
            })
    }, [])

    //
    let dateRange = moment(Object.keys(date))
    let range = dateRange?._i
    let dateStart = Date.parse(range[0])
    let dateEnd = Date.parse(range[198])



    let out = []

    for (let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) {
        out.push(format((new Date(i)), 'yyyy-MM-dd'))
    }

    let result = [];

    out.forEach(o => {
        let commitSize = date[o];
       if(range.indexOf(o) > -1) {

          if(commitSize > 0 && commitSize <= 9){
              result.push({date: o, commit: commitSize, color: "grey"});
          } else if(commitSize >= 10 && commitSize <= 19){
              result.push({date: o, commit: commitSize, color: "blue"});
          }else if(commitSize >= 20 && commitSize <= 29){
              result.push({date: o, commit: commitSize, color: "green"});
          } else if(commitSize >= 30){
              result.push({date: o, commit: commitSize, color: "red"});
          }
          else  result.push({date: o, commit: commitSize, color: "black"});


       } else   result.push({date: o, commit: commitSize, color: "white"});
    });





    return (
        <div className="App">
            <Timeline cells={result}/>
        </div>
    );
}

export default App;
