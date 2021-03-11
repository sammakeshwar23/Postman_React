import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./Home.css";
import HomeServices from "./Home.services";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import History from "./History";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [method, setMethod] = useState("get");
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [data, setData] = useState([""]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState();
  const classes = useStyles();
  const [history, setHistory] = useState([""]);

  useEffect(() => {
      
  }, []);

//   const CheckHistory = () => {
//       if (localStorage.getItem('LoginData')) {
//         setHistory(localStorage.setItem('LoginData', JSON.stringify(history)))
//       }
//   }

  function handleSubmit(event) {
    event.preventDefault();

    // setHistory(history.push(email))
    setHistory(history => [...history,email] );
    // localStorage.setItem('LoginData', JSON.stringify(history));
    console.log("submit call",history );
    const Body = {
      value,
    };

    HomeServices.GetData(email, method, Body)
      .then((response, Status) => {
        // console.log("success", response.data)
        // setData(response.data)
        setStatus(JSON.stringify(response.status));
        if (response.status === 200) {
          setLoading(true);
          setData(JSON.stringify(response.data, null, 2));
          console.log("useEffect call");
        } else if (response.status === 201) {
          setLoading(true);
          setData(JSON.stringify(response.data));
          console.log("created");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const renderData = () => {
    return (


      <ul>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <div>{status}</div>
        <br />

        <InputLabel id="demo-simple-select-label">Response</InputLabel>
        {/* <div>{data}</div> */}
        <div>
          <pre>{data}</pre>
        </div>
      </ul>
    );
  };

  const inputdata = () => {
    return (
      <table class="table table-hover">
        <thead>
          <tr style={{ color: "#18A2B8" }}>
            <th>
              <InputLabel id="demo-simple-select-label">Method</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => setMethod(e.target.value)}
              >
                {/* <MenuItem value="">None</MenuItem> */}
                <MenuItem value="get">GET</MenuItem>
                <MenuItem value="post">POST</MenuItem>
                <MenuItem value="put">PUT</MenuItem>
                <MenuItem value="delete">DELETE</MenuItem>
              </Select>
            </th>
            <th>
              <TextField
                id="standard-basic"
                label="Enter URL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </th>
            <th>
              <div className="form-group">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Send
                </Button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-light">
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  };

  console.log("history", history);
  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div>
                {inputdata()}
                <form>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    <InputLabel id="demo-simple-select-label">Body</InputLabel>
                    <textarea
                      style={{ width: "95%" }}
                      onChange={(e) => setValue(e.target.value)}
                    ></textarea>
                  </div>
                </form>
                <div>
                  {loading ? (
                    <div>
                      <div className="col-md-10">{renderData()} </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <div>
                {/* <History></History> */}
                History:
                <pre>{JSON.stringify(history, null, 2)}</pre>
                
                <div>
                {/* { email } */}
                </div>

              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
