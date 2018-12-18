import React, { Component, Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ChangeIcon from "@material-ui/icons/CompareArrows";
import ArrowIcon from "@material-ui/icons/ArrowForward";

import Toast from "./Toast";

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 64px)"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    display: "flex",
    justifyContent: "center"
  },
  body2Bold: {
    fontWeight: "bold"
  },
  good: {
    color: "green"
  },
  acc: {
    color: "#828e24"
  },
  bad: {
    color: "red"
  },
  margin: {
    marginBottom: 24
  }
});

const currencies = [
  {
    currencyName: "British Pound",
    currencySymbol: "£",
    id: "GBP"
  },
  {
    currencyName: "United States Dollar",
    currencySymbol: "$",
    id: "USD"
  },
  {
    currencyName: "Euro",
    currencySymbol: "€",
    id: "EUR"
  },
  {
    currencyName: "Canadian Dollar",
    currencySymbol: "$",
    id: "CAD"
  },
  {
    currencyName: "Japanese Yen",
    currencySymbol: "¥",
    id: "JPY"
  },
  {
    currencyName: "Albanian Lek",
    currencySymbol: "Lek",
    id: "ALL"
  },
  {
    currencyName: "East Caribbean Dollar",
    currencySymbol: "$",
    id: "XCD"
  },

  {
    currencyName: "Barbadian Dollar",
    currencySymbol: "$",
    id: "BBD"
  },
  {
    currencyName: "Bhutanese Ngultrum",
    id: "BTN"
  },
  {
    currencyName: "Brunei Dollar",
    currencySymbol: "$",
    id: "BND"
  },
  {
    currencyName: "Central African CFA Franc",
    id: "XAF"
  },
  {
    currencyName: "Cuban Peso",
    currencySymbol: "$",
    id: "CUP"
  },
  {
    currencyName: "Falkland Islands Pound",
    currencySymbol: "£",
    id: "FKP"
  },
  {
    currencyName: "Gibraltar Pound",
    currencySymbol: "£",
    id: "GIP"
  },
  {
    currencyName: "Hungarian Forint",
    currencySymbol: "Ft",
    id: "HUF"
  },
  {
    currencyName: "Iranian Rial",
    currencySymbol: "﷼",
    id: "IRR"
  },
  {
    currencyName: "Jamaican Dollar",
    currencySymbol: "J$",
    id: "JMD"
  },
  {
    currencyName: "Australian Dollar",
    currencySymbol: "$",
    id: "AUD"
  },
  {
    currencyName: "Lao Kip",
    currencySymbol: "₭",
    id: "LAK"
  },
  {
    currencyName: "Libyan Dinar",
    id: "LYD"
  },
  {
    currencyName: "Macedonian Denar",
    currencySymbol: "ден",
    id: "MKD"
  },
  {
    currencyName: "West African CFA Franc",
    id: "XOF"
  },
  {
    currencyName: "New Zealand Dollar",
    currencySymbol: "$",
    id: "NZD"
  },
  {
    currencyName: "Omani Rial",
    currencySymbol: "﷼",
    id: "OMR"
  },
  {
    currencyName: "Papua New Guinean Kina",
    id: "PGK"
  },
  {
    currencyName: "Rwandan Franc",
    id: "RWF"
  },
  {
    currencyName: "Samoan Tala",
    id: "WST"
  },
  {
    currencyName: "Serbian Dinar",
    currencySymbol: "Дин.",
    id: "RSD"
  },
  {
    currencyName: "Swedish Krona",
    currencySymbol: "kr",
    id: "SEK"
  },
  {
    currencyName: "Tanzanian Shilling",
    currencySymbol: "TSh",
    id: "TZS"
  },
  {
    currencyName: "Armenian Dram",
    id: "AMD"
  },
  {
    currencyName: "Bahamian Dollar",
    currencySymbol: "$",
    id: "BSD"
  },
  {
    currencyName: "Bosnia And Herzegovina Konvertibilna Marka",
    currencySymbol: "KM",
    id: "BAM"
  },
  {
    currencyName: "Cape Verdean Escudo",
    id: "CVE"
  },
  {
    currencyName: "Chinese Yuan",
    currencySymbol: "¥",
    id: "CNY"
  },
  {
    currencyName: "Costa Rican Colon",
    currencySymbol: "₡",
    id: "CRC"
  },
  {
    currencyName: "Czech Koruna",
    currencySymbol: "Kč",
    id: "CZK"
  },
  {
    currencyName: "Eritrean Nakfa",
    id: "ERN"
  },
  {
    currencyName: "Georgian Lari",
    id: "GEL"
  },
  {
    currencyName: "Haitian Gourde",
    id: "HTG"
  },
  {
    currencyName: "Indian Rupee",
    currencySymbol: "₹",
    id: "INR"
  },
  {
    currencyName: "Jordanian Dinar",
    id: "JOD"
  },
  {
    currencyName: "South Korean Won",
    currencySymbol: "₩",
    id: "KRW"
  },
  {
    currencyName: "Lebanese Lira",
    currencySymbol: "£",
    id: "LBP"
  },
  {
    currencyName: "Malawian Kwacha",
    id: "MWK"
  },
  {
    currencyName: "Mauritanian Ouguiya",
    id: "MRO"
  },
  {
    currencyName: "Mozambican Metical",
    id: "MZN"
  },
  {
    currencyName: "Netherlands Antillean Gulden",
    currencySymbol: "ƒ",
    id: "ANG"
  },
  {
    currencyName: "Peruvian Nuevo Sol",
    currencySymbol: "S/.",
    id: "PEN"
  },
  {
    currencyName: "Qatari Riyal",
    currencySymbol: "﷼",
    id: "QAR"
  },
  {
    currencyName: "Sao Tome And Principe Dobra",
    id: "STD"
  },
  {
    currencyName: "Sierra Leonean Leone",
    id: "SLL"
  },
  {
    currencyName: "Somali Shilling",
    currencySymbol: "S",
    id: "SOS"
  },
  {
    currencyName: "Sudanese Pound",
    id: "SDG"
  },
  {
    currencyName: "Syrian Pound",
    currencySymbol: "£",
    id: "SYP"
  },
  {
    currencyName: "Angolan Kwanza",
    id: "AOA"
  },
  {
    currencyName: "Aruban Florin",
    currencySymbol: "ƒ",
    id: "AWG"
  },
  {
    currencyName: "Bahraini Dinar",
    id: "BHD"
  },
  {
    currencyName: "Belize Dollar",
    currencySymbol: "BZ$",
    id: "BZD"
  },
  {
    currencyName: "Botswana Pula",
    currencySymbol: "P",
    id: "BWP"
  },
  {
    currencyName: "Burundi Franc",
    id: "BIF"
  },
  {
    currencyName: "Cayman Islands Dollar",
    currencySymbol: "$",
    id: "KYD"
  },
  {
    currencyName: "Colombian Peso",
    currencySymbol: "$",
    id: "COP"
  },
  {
    currencyName: "Danish Krone",
    currencySymbol: "kr",
    id: "DKK"
  },
  {
    currencyName: "Guatemalan Quetzal",
    currencySymbol: "Q",
    id: "GTQ"
  },
  {
    currencyName: "Honduran Lempira",
    currencySymbol: "L",
    id: "HNL"
  },
  {
    currencyName: "Indonesian Rupiah",
    currencySymbol: "Rp",
    id: "IDR"
  },
  {
    currencyName: "Israeli New Sheqel",
    currencySymbol: "₪",
    id: "ILS"
  },
  {
    currencyName: "Kazakhstani Tenge",
    currencySymbol: "лв",
    id: "KZT"
  },
  {
    currencyName: "Kuwaiti Dinar",
    id: "KWD"
  },
  {
    currencyName: "Lesotho Loti",
    id: "LSL"
  },
  {
    currencyName: "Malaysian Ringgit",
    currencySymbol: "RM",
    id: "MYR"
  },
  {
    currencyName: "Mauritian Rupee",
    currencySymbol: "₨",
    id: "MUR"
  },
  {
    currencyName: "Mongolian Tugrik",
    currencySymbol: "₮",
    id: "MNT"
  },
  {
    currencyName: "Myanma Kyat",
    id: "MMK"
  },
  {
    currencyName: "Nigerian Naira",
    currencySymbol: "₦",
    id: "NGN"
  },
  {
    currencyName: "Panamanian Balboa",
    currencySymbol: "B/.",
    id: "PAB"
  },
  {
    currencyName: "Philippine Peso",
    currencySymbol: "₱",
    id: "PHP"
  },
  {
    currencyName: "Romanian Leu",
    currencySymbol: "lei",
    id: "RON"
  },
  {
    currencyName: "Saudi Riyal",
    currencySymbol: "﷼",
    id: "SAR"
  },
  {
    currencyName: "Singapore Dollar",
    currencySymbol: "$",
    id: "SGD"
  },
  {
    currencyName: "South African Rand",
    currencySymbol: "R",
    id: "ZAR"
  },
  {
    currencyName: "Surinamese Dollar",
    currencySymbol: "$",
    id: "SRD"
  },
  {
    currencyName: "New Taiwan Dollar",
    currencySymbol: "NT$",
    id: "TWD"
  },
  {
    currencyName: "Paanga",
    id: "TOP"
  },
  {
    currencyName: "Venezuelan Bolivar",
    id: "VEF"
  },
  {
    currencyName: "Algerian Dinar",
    id: "DZD"
  },
  {
    currencyName: "Argentine Peso",
    currencySymbol: "$",
    id: "ARS"
  },
  {
    currencyName: "Azerbaijani Manat",
    currencySymbol: "ман",
    id: "AZN"
  },
  {
    currencyName: "Belarusian Ruble",
    currencySymbol: "p.",
    id: "BYR"
  },
  {
    currencyName: "Bolivian Boliviano",
    currencySymbol: "$b",
    id: "BOB"
  },
  {
    currencyName: "Bulgarian Lev",
    currencySymbol: "лв",
    id: "BGN"
  },

  {
    currencyName: "Chilean Peso",
    currencySymbol: "$",
    id: "CLP"
  },
  {
    currencyName: "Congolese Franc",
    id: "CDF"
  },
  {
    currencyName: "Dominican Peso",
    currencySymbol: "RD$",
    id: "DOP"
  },
  {
    currencyName: "Fijian Dollar",
    currencySymbol: "$",
    id: "FJD"
  },
  {
    currencyName: "Gambian Dalasi",
    id: "GMD"
  },
  {
    currencyName: "Guyanese Dollar",
    currencySymbol: "$",
    id: "GYD"
  },
  {
    currencyName: "Icelandic Króna",
    currencySymbol: "kr",
    id: "ISK"
  },
  {
    currencyName: "Iraqi Dinar",
    id: "IQD"
  },

  {
    currencyName: "North Korean Won",
    currencySymbol: "₩",
    id: "KPW"
  },
  {
    currencyName: "Latvian Lats",
    currencySymbol: "Ls",
    id: "LVL"
  },
  {
    currencyName: "Swiss Franc",
    currencySymbol: "Fr.",
    id: "CHF"
  },
  {
    currencyName: "Malagasy Ariary",
    id: "MGA"
  },
  {
    currencyName: "Moldovan Leu",
    id: "MDL"
  },
  {
    currencyName: "Moroccan Dirham",
    id: "MAD"
  },
  {
    currencyName: "Nepalese Rupee",
    currencySymbol: "₨",
    id: "NPR"
  },
  {
    currencyName: "Nicaraguan Cordoba",
    currencySymbol: "C$",
    id: "NIO"
  },
  {
    currencyName: "Pakistani Rupee",
    currencySymbol: "₨",
    id: "PKR"
  },
  {
    currencyName: "Paraguayan Guarani",
    currencySymbol: "Gs",
    id: "PYG"
  },
  {
    currencyName: "Saint Helena Pound",
    currencySymbol: "£",
    id: "SHP"
  },
  {
    currencyName: "Seychellois Rupee",
    currencySymbol: "₨",
    id: "SCR"
  },
  {
    currencyName: "Solomon Islands Dollar",
    currencySymbol: "$",
    id: "SBD"
  },
  {
    currencyName: "Sri Lankan Rupee",
    currencySymbol: "₨",
    id: "LKR"
  },
  {
    currencyName: "Thai Baht",
    currencySymbol: "฿",
    id: "THB"
  },
  {
    currencyName: "Turkish New Lira",
    id: "TRY"
  },
  {
    currencyName: "UAE Dirham",
    id: "AED"
  },
  {
    currencyName: "Vanuatu Vatu",
    id: "VUV"
  },
  {
    currencyName: "Yemeni Rial",
    currencySymbol: "﷼",
    id: "YER"
  },
  {
    currencyName: "Afghan Afghani",
    currencySymbol: "؋",
    id: "AFN"
  },
  {
    currencyName: "Bangladeshi Taka",
    id: "BDT"
  },
  {
    currencyName: "Brazilian Real",
    currencySymbol: "R$",
    id: "BRL"
  },
  {
    currencyName: "Cambodian Riel",
    currencySymbol: "៛",
    id: "KHR"
  },
  {
    currencyName: "Comorian Franc",
    id: "KMF"
  },
  {
    currencyName: "Croatian Kuna",
    currencySymbol: "kn",
    id: "HRK"
  },
  {
    currencyName: "Djiboutian Franc",
    id: "DJF"
  },
  {
    currencyName: "Egyptian Pound",
    currencySymbol: "£",
    id: "EGP"
  },
  {
    currencyName: "Ethiopian Birr",
    id: "ETB"
  },
  {
    currencyName: "CFP Franc",
    id: "XPF"
  },
  {
    currencyName: "Ghanaian Cedi",
    id: "GHS"
  },
  {
    currencyName: "Guinean Franc",
    id: "GNF"
  },
  {
    currencyName: "Hong Kong Dollar",
    currencySymbol: "$",
    id: "HKD"
  },
  {
    currencyName: "Special Drawing Rights",
    id: "XDR"
  },
  {
    currencyName: "Kenyan Shilling",
    currencySymbol: "KSh",
    id: "KES"
  },
  {
    currencyName: "Kyrgyzstani Som",
    currencySymbol: "лв",
    id: "KGS"
  },
  {
    currencyName: "Liberian Dollar",
    currencySymbol: "$",
    id: "LRD"
  },
  {
    currencyName: "Macanese Pataca",
    id: "MOP"
  },
  {
    currencyName: "Maldivian Rufiyaa",
    id: "MVR"
  },
  {
    currencyName: "Mexican Peso",
    currencySymbol: "$",
    id: "MXN"
  },
  {
    currencyName: "Namibian Dollar",
    currencySymbol: "$",
    id: "NAD"
  },
  {
    currencyName: "Norwegian Krone",
    currencySymbol: "kr",
    id: "NOK"
  },
  {
    currencyName: "Polish Zloty",
    currencySymbol: "zł",
    id: "PLN"
  },
  {
    currencyName: "Russian Ruble",
    currencySymbol: "руб",
    id: "RUB"
  },
  {
    currencyName: "Swazi Lilangeni",
    id: "SZL"
  },
  {
    currencyName: "Tajikistani Somoni",
    id: "TJS"
  },
  {
    currencyName: "Trinidad and Tobago Dollar",
    currencySymbol: "TT$",
    id: "TTD"
  },
  {
    currencyName: "Ugandan Shilling",
    currencySymbol: "USh",
    id: "UGX"
  },
  {
    currencyName: "Uruguayan Peso",
    currencySymbol: "$U",
    id: "UYU"
  },
  {
    currencyName: "Vietnamese Dong",
    currencySymbol: "₫",
    id: "VND"
  },
  {
    currencyName: "Tunisian Dinar",
    id: "TND"
  },
  {
    currencyName: "Ukrainian Hryvnia",
    currencySymbol: "₴",
    id: "UAH"
  },
  {
    currencyName: "Uzbekistani Som",
    currencySymbol: "лв",
    id: "UZS"
  },
  {
    currencyName: "Turkmenistan Manat",
    id: "TMT"
  },
  {
    currencyName: "Zambian Kwacha",
    id: "ZMW"
  },
  {
    currencyName: "Bitcoin",
    currencySymbol: "BTC",
    id: "BTC"
  },
  {
    currencyName: "New Belarusian Ruble",
    currencySymbol: "p.",
    id: "BYN"
  }
];

class Converion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
      from: "",
      to: "",
      error: false,
      result: 0,
      conversion: 0,
      sellrate: 0
    };
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      result: 0
    });
  };

  change = () => {
    let from = this.state.from;
    let to = this.state.to;
    this.setState({
      from: to,
      to: from,
      result: 0
    });
  };

  handleRate = () => event => {
    this.setState({
      sellrate: event.target.value
    });
  };

  exchange = () => {
    if (this.state.from === "" || this.state.to === "") {
      this.setState({
        error: true
      });
    } else {
      let query = this.state.from + "_" + this.state.to;
      fetch("https://free.currencyconverterapi.com/api/v6/convert?q=" + query)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then(responseData => {
          this.setState(prevState => ({
            result: prevState.amount * responseData.results[query].val,
            conversion: responseData.results[query].val,
            sellrate: responseData.results[query].val
          }));
        })
        .catch(error => {
          this.setState({
            series: "There was an internal error retry later."
          });
          console.error(error);
        });
    }
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ error: false });
  };

  render() {
    const { classes } = this.props;
    const { from, to, conversion, amount, result, sellrate } = this.state;

    let srate = (conversion / sellrate - 1) * 1000;
    srate = Math.floor(srate * 100) / 100;
    let money = amount * sellrate;

    let risultato =
      this.state.result !== 0 ? (
        <Fragment>
          <Typography variant="subtitle1" align="center">
            Current conversion for{" "}
            <span className={classes.body2Bold}>
              {from} - {to}
            </span>{" "}
            is <span className={classes.body2Bold}>{conversion}</span> so for{" "}
            <span className={classes.body2Bold}>
              {from} {amount} you get {to} {result}
            </span>
          </Typography>

          <div>
            <Typography
              variant="subtitle1"
              align="center"
              className={classes.margin}
            >
              if you want to check if sell rate is good enter here:
            </Typography>
            <Grid container spacing={24} alignItems="center" justify="center">
              <Grid item>
                <TextField
                  value={sellrate}
                  id="standard-number"
                  label={"Sell rate of " + to + " to " + from}
                  type="number"
                  InputProps={{ inputProps: { min: 0.01 } }}
                  onChange={this.handleRate()}
                  className={classes.textField}
                />
              </Grid>
              <Grid item>
                {srate >= 0 && srate < 4 ? (
                  <Typography variant="subtitle1" align="center">
                    <span className={classes.good}>{srate}%</span> you should
                    get <span className={classes.body2Bold}>{money}</span>{" "}
                    instead of{" "}
                    <span className={classes.body2Bold}>{result}</span>
                  </Typography>
                ) : srate >= 4 && srate < 10 ? (
                  <Typography variant="subtitle1" align="center">
                    <span className={classes.acc}>{srate}%</span> you should get{" "}
                    <span className={classes.body2Bold}>{money}</span> instead
                    of <span className={classes.body2Bold}>{result}</span>
                  </Typography>
                ) : (
                  <Typography variant="subtitle1" align="center">
                    <span className={classes.bad}>{srate}%</span> you should get{" "}
                    <span className={classes.body2Bold}>{money}</span> instead
                    of <span className={classes.body2Bold}>{result}</span>
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
          open={this.state.error}
          handleClose={() => this.handleClose()}
        />
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                How much do I get?
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={classes.container}>
            <Paper className={classes.paper} elevation={1}>
              <Typography variant="h5" component="h3">
                Let us help you figure out how much money you get from the
                exchange point
              </Typography>
              <Grid container spacing={24}>
                <Grid item>
                  <TextField
                    value={amount}
                    id="standard-number"
                    label="Amount"
                    type="number"
                    InputProps={{ inputProps: { min: 0.01 } }}
                    onChange={this.handleChange("amount")}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="normal"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={from}
                    onChange={this.handleChange("from")}
                    className={classes.textField}
                    helperText="Please select your currency"
                    margin="normal"
                  >
                    {currencies.map(option => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.id} - {option.currencyName}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item className={classes.button}>
                  <IconButton
                    className={classes.button}
                    aria-label="Change"
                    onClick={() => this.change()}
                  >
                    <ChangeIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={to}
                    onChange={this.handleChange("to")}
                    className={classes.textField}
                    helperText="Please select your currency"
                    margin="normal"
                  >
                    {currencies.map(option => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.id} - {option.currencyName}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item className={classes.button}>
                  <IconButton
                    className={classes.button}
                    aria-label="Change"
                    onClick={() => this.exchange()}
                  >
                    <ArrowIcon />
                  </IconButton>
                </Grid>
              </Grid>
              {risultato}
            </Paper>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Converion);
