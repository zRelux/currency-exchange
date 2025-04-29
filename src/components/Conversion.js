import React, { Fragment, useState } from "react";
// import { withStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "react";
// import MenuItem from "@material-ui/core/MenuItem";
import Grid from "react";
// import IconButton from "@material-ui/core/IconButton";
import ChangeIcon from "react";
import ArrowIcon from "react";
import Toast from "./Toast";
import { Button } from "@/components/ui/button"

// const styles = theme => ({
//   paper: {
//     ...theme.mixins.gutters(),
//     paddingTop: theme.spacing.unit * 2,
//     paddingBottom: theme.spacing.unit * 2
//   },
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "calc(100vh - 64px)"
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200
//   },
//   button: {
//     display: "flex",
//     justifyContent: "center"
//   },
//   body2Bold: {
//     fontWeight: "bold"
//   },
//   good: {
//     color: "green"
//   },
//   acc: {
//     color: "#828e24"
//   },
//   bad: {
//     color: "red"
//   },
//   margin: {
//     marginBottom: 24
//   }
// });

const currencies = [
  { currencyName: "British Pound", currencySymbol: "\u00a3", id: "GBP" },
  { currencyName: "United States Dollar", currencySymbol: "$", id: "USD" },
  { currencyName: "Euro", currencySymbol: "\u20ac", id: "EUR" },
  { currencyName: "Canadian Dollar", currencySymbol: "$", id: "CAD" },
  { currencyName: "Japanese Yen", currencySymbol: "\u00a5", id: "JPY" },
  { currencyName: "Albanian Lek", currencySymbol: "Lek", id: "ALL" },
  { currencyName: "East Caribbean Dollar", currencySymbol: "$", id: "XCD" },
  { currencyName: "Barbadian Dollar", currencySymbol: "$", id: "BBD" },
  { currencyName: "Bhutanese Ngultrum", id: "BTN" },
  { currencyName: "Brunei Dollar", currencySymbol: "$", id: "BND" },
  { currencyName: "Central African CFA Franc", id: "XAF" },
  { currencyName: "Cuban Peso", currencySymbol: "$", id: "CUP" },
  { currencyName: "Falkland Islands Pound", currencySymbol: "\u00a3", id: "FKP" },
  { currencyName: "Gibraltar Pound", currencySymbol: "\u00a3", id: "GIP" },
  { currencyName: "Hungarian Forint", currencySymbol: "Ft", id: "HUF" },
  { currencyName: "Iranian Rial", currencySymbol: "\ufdfc", id: "IRR" },
  { currencyName: "Jamaican Dollar", currencySymbol: "J$", id: "JMD" },
  { currencyName: "Australian Dollar", currencySymbol: "$", id: "AUD" },
  { currencyName: "Lao Kip", currencySymbol: "\u20ad", id: "LAK" },
  { currencyName: "Libyan Dinar", id: "LYD" },
  { currencyName: "Macedonian Denar", currencySymbol: "\u0434\u0435\u043d", id: "MKD" },
  { currencyName: "West African CFA Franc", id: "XOF" },
  { currencyName: "New Zealand Dollar", currencySymbol: "$", id: "NZD" },
  { currencyName: "Omani Rial", currencySymbol: "\ufdfc", id: "OMR" },
  { currencyName: "Papua New Guinean Kina", id: "PGK" },
  { currencyName: "Rwandan Franc", id: "RWF" },
  { currencyName: "Samoan Tala", id: "WST" },
  { currencyName: "Serbian Dinar", currencySymbol: "\u0414\u0438\u043d.", id: "RSD" },
  { currencyName: "Swedish Krona", currencySymbol: "kr", id: "SEK" },
  { currencyName: "Tanzanian Shilling", currencySymbol: "TSh", id: "TZS" },
  { currencyName: "Armenian Dram", id: "AMD" },
  { currencyName: "Bahamian Dollar", currencySymbol: "$", id: "BSD" },
  { currencyName: "Bosnia And Herzegovina Konvertibilna Marka", currencySymbol: "KM", id: "BAM" },
  { currencyName: "Cape Verdean Escudo", id: "CVE" },
  { currencyName: "Chinese Yuan", currencySymbol: "\u00a5", id: "CNY" },
  { currencyName: "Costa Rican Colon", currencySymbol: "\u20a1", id: "CRC" },
  { currencyName: "Czech Koruna", currencySymbol: "K\u010d", id: "CZK" },
  { currencyName: "Eritrean Nakfa", id: "ERN" },
  { currencyName: "Georgian Lari", id: "GEL" },
  { currencyName: "Haitian Gourde", id: "HTG" },
  { currencyName: "Indian Rupee", currencySymbol: "\u20b9", id: "INR" },
  { currencyName: "Jordanian Dinar", id: "JOD" },
  { currencyName: "South Korean Won", currencySymbol: "\u20a9", id: "KRW" },
  { currencyName: "Lebanese Lira", currencySymbol: "\u00a3", id: "LBP" },
  { currencyName: "Malawian Kwacha", id: "MWK" },
  { currencyName: "Mauritanian Ouguiya", id: "MRO" },
  { currencyName: "Mozambican Metical", id: "MZN" },
  { currencyName: "Netherlands Antillean Gulden", currencySymbol: "\u0192", id: "ANG" },
  { currencyName: "Peruvian Nuevo Sol", currencySymbol: "S/.", id: "PEN" },
  { currencyName: "Qatari Riyal", currencySymbol: "\ufdfc", id: "QAR" },
  { currencyName: "Sao Tome And Principe Dobra", id: "STD" },
  { currencyName: "Sierra Leonean Leone", id: "SLL" },
  { currencyName: "Somali Shilling", currencySymbol: "S", id: "SOS" },
  { currencyName: "Sudanese Pound", id: "SDG" },
  { currencyName: "Syrian Pound", currencySymbol: "\u00a3", id: "SYP" },
  { currencyName: "Angolan Kwanza", id: "AOA" },
  { currencyName: "Aruban Florin", currencySymbol: "\u0192", id: "AWG" },
  { currencyName: "Bahraini Dinar", id: "BHD" },
  { currencyName: "Belize Dollar", currencySymbol: "BZ$", id: "BZD" },
  { currencyName: "Botswana Pula", currencySymbol: "P", id: "BWP" },
  { currencyName: "Burundi Franc", id: "BIF" },
  { currencyName: "Cayman Islands Dollar", currencySymbol: "$", id: "KYD" },
  { currencyName: "Colombian Peso", currencySymbol: "$", id: "COP" },
  { currencyName: "Danish Krone", currencySymbol: "kr", id: "DKK" },
  { currencyName: "Guatemalan Quetzal", currencySymbol: "Q", id: "GTQ" },
  { currencyName: "Honduran Lempira", currencySymbol: "L", id: "HNL" },
  { currencyName: "Indonesian Rupiah", currencySymbol: "Rp", id: "IDR" },
  { currencyName: "Israeli New Sheqel", currencySymbol: "\u20aa", id: "ILS" },
  { currencyName: "Kazakhstani Tenge", currencySymbol: "\u043b\u0432", id: "KZT" },
  { currencyName: "Kuwaiti Dinar", id: "KWD" },
  { currencyName: "Lesotho Loti", id: "LSL" },
  { currencyName: "Malaysian Ringgit", currencySymbol: "RM", id: "MYR" },
  { currencyName: "Mauritian Rupee", currencySymbol: "\u20a8", id: "MUR" },
  { currencyName: "Mongolian Tugrik", currencySymbol: "\u20ae", id: "MNT" },
  { currencyName: "Myanma Kyat", id: "MMK" },
  { currencyName: "Nigerian Naira", currencySymbol: "\u20a6", id: "NGN" },
  { currencyName: "Panamanian Balboa", currencySymbol: "B/.", id: "PAB" },
  { currencyName: "Philippine Peso", currencySymbol: "\u20b1", id: "PHP" },
  { currencyName: "Romanian Leu", currencySymbol: "lei", id: "RON" },
  { currencyName: "Saudi Riyal", currencySymbol: "\ufdfc", id: "SAR" },
  { currencyName: "Singapore Dollar", currencySymbol: "$", id: "SGD" },
  { currencyName: "South African Rand", currencySymbol: "R", id: "ZAR" },
  { currencyName: "Surinamese Dollar", currencySymbol: "$", id: "SRD" },
  { currencyName: "New Taiwan Dollar", currencySymbol: "NT$", id: "TWD" },
  { currencyName: "Paanga", id: "TOP" },
  { currencyName: "Venezuelan Bolivar", id: "VEF" },
  { currencyName: "Algerian Dinar", id: "DZD" },
  { currencyName: "Argentine Peso", currencySymbol: "$", id: "ARS" },
  { currencyName: "Azerbaijani Manat", currencySymbol: "\u043c\u0430\u043d", id: "AZN" },
  { currencyName: "Belarusian Ruble", currencySymbol: "p.", id: "BYR" },
  { currencyName: "Bolivian Boliviano", currencySymbol: "$b", id: "BOB" },
  { currencyName: "Bulgarian Lev", currencySymbol: "\u043b\u0432", id: "BGN" },
  { currencyName: "Chilean Peso", currencySymbol: "$", id: "CLP" },
  { currencyName: "Congolese Franc", id: "CDF" },
  { currencyName: "Dominican Peso", currencySymbol: "RD$", id: "DOP" },
  { currencyName: "Fijian Dollar", currencySymbol: "$", id: "FJD" },
  { currencyName: "Gambian Dalasi", id: "GMD" },
  { currencyName: "Guyanese Dollar", currencySymbol: "$", id: "GYD" },
  { currencyName: "Icelandic Kr\u00f3na", currencySymbol: "kr", id: "ISK" },
  { currencyName: "Iraqi Dinar", id: "IQD" },
];

function Converion() {
  // const { classes } = props;
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState(0);
  const [conversion, setConversion] = useState(0);
  const [sellrate, setSellrate] = useState(0);

  const handleChange = name => event => {
    if (name === "amount") setAmount(event.target.value);
    if (name === "from") setFrom(event.target.value);
    if (name === "to") setTo(event.target.value);
    setResult(0);
  };

  const change = () => {
    setFrom(to);
    setTo(from);
    setResult(0);
  };

  const handleRate = () => event => {
    setSellrate(event.target.value);
  };

  const exchange = () => {
    if (from === "" || to === "") {
      setError(true);
    } else {
      let query = from + "_" + to;
      fetch("https://free.currencyconverterapi.com/api/v6/convert?q=" + query)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then(responseData => {
          setResult(amount * responseData.results[query].val);
          setConversion(responseData.results[query].val);
          setSellrate(responseData.results[query].val);
        })
        .catch(error => {
          // Optionally handle error state
          console.error(error);
        });
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  let srate = (conversion / sellrate - 1) * 1000;
  srate = Math.floor(srate * 100) / 100;
  let money = amount * sellrate;

  let risultato =
    result !== 0 ? (
      <Fragment>
        <Typography variant="subtitle1" align="center">
          Current conversion for{" "}
          <span className={''}>
            {from} - {to}
          </span>{" "}
          is <span className={''}>{conversion}</span> so for{" "}
          <span className={''}>
            {from} {amount} you get {to} {result}
          </span>
        </Typography>

        <div>
          <Typography
            variant="subtitle1"
            align="center"
            className={''}
          >
            if you want to check if sell rate is good enter here:
          </Typography>
          <Grid container spacing={24} alignItems="center" justify="center">
            <Grid item>
              <input
                value={sellrate}
                id="standard-number"
                label={"Sell rate of " + to + " to " + from}
                type="number"
                InputProps={{ inputProps: { min: 0.01 } }}
                onChange={handleRate()}
                className={''}
              />
            </Grid>
            <Grid item>
              {srate >= 0 && srate < 4 ? (
                <Typography variant="subtitle1" align="center">
                  <span className={''}>{srate}%</span> you should
                  get <span className={''}>{money}</span>{" "}
                  instead of{" "}
                  <span className={''}>{result}</span>
                </Typography>
              ) : srate >= 4 && srate < 10 ? (
                <Typography variant="subtitle1" align="center">
                  <span className={''}>{srate}%</span> you should get{" "}
                  <span className={''}>{money}</span> instead
                  of <span className={''}>{result}</span>
                </Typography>
              ) : (
                <Typography variant="subtitle1" align="center">
                  <span className={''}>{srate}%</span> you should get{" "}
                  <span className={''}>{money}</span> instead
                  of <span className={''}>{result}</span>
                </Typography>
              )}
            </Grid>
          </Grid>
        </div>
      </Fragment>
    ) : null;

  return (
    <Fragment>
      <Toast
        message="Need to set both currencies"
        type="error"
        open={error}
        handleClose={handleClose}
      />
      <div className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto">
          <Typography variant="h6" color="inherit">
            How much do I get?
          </Typography>
        </div>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Typography variant="h5" component="h3">
          Let us help you figure out how much money you get from the
          exchange point
        </Typography>
        <Grid container spacing={24}>
          <Grid item>
            <input
              value={amount}
              id="standard-number"
              label="Amount"
              type="number"
              InputProps={{ inputProps: { min: 0.01 } }}
              onChange={handleChange("amount")}
              className={''}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />
          </Grid>
          <Grid item>
            <select
              id="standard-select-currency"
              label="Select"
              value={from}
              onChange={handleChange("from")}
              className={''}
              helperText="Please select your currency"
              margin="normal"
            >
              {currencies.map(option => (
                <option key={option.id} value={option.id}>
                  {option.id} - {option.currencyName}
                </option>
              ))}
            </select>
          </Grid>
          <Grid item className={''}>
            <Button
              className={''}
              aria-label="Change"
              onClick={change}
            >
              <ChangeIcon />
            </Button>
          </Grid>
          <Grid item>
            <select
              id="standard-select-currency"
              label="Select"
              value={to}
              onChange={handleChange("to")}
              className={''}
              helperText="Please select your currency"
              margin="normal"
            >
              {currencies.map(option => (
                <option key={option.id} value={option.id}>
                  {option.id} - {option.currencyName}
                </option>
              ))}
            </select>
          </Grid>
          <Grid item className={''}>
            <Button
              className={''}
              aria-label="Change"
              onClick={exchange}
            >
              <ArrowIcon />
            </Button>
          </Grid>
        </Grid>
        {risultato}
      </div>
    </Fragment>
  );
}

export default Converion;
