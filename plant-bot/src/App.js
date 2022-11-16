"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
const react_1 = __importStar(require("react"));
const PottedPlantSVG_1 = __importDefault(require("./assets/img/PottedPlantSVG"));
const CurrentStats_1 = __importDefault(require("./assets/components/CurrentStats"));
const MonsteraPlant_1 = __importDefault(require("./assets/components/MonsteraPlant"));
const plantdata_1 = __importDefault(require("./services/plantdata"));
require("./../src/index.css");
function App() {
    const [date, setDate] = (0, react_1.useState)("");
    const [humidity, setHumidity] = (0, react_1.useState)(0.0);
    const [temp, setTemp] = (0, react_1.useState)(0.0);
    const [moisture, setMoisture] = (0, react_1.useState)(0.0);
    const [light, setLight] = (0, react_1.useState)(0.0);
    const [weight, setWeight] = (0, react_1.useState)(0.0);
    (0, react_1.useEffect)(() => {
        plantdata_1.default
            .getAll()
            .then((data) => {
            setDate(data.date);
            setHumidity(data.sensors.humidity);
            setTemp(data.sensors.temp);
            setMoisture(data.sensors.moisture);
            setLight(data.sensors.light);
            setWeight(data.sensors.weight);
        })
            .catch((err) => {
            console.log(err);
            setDate(err.message);
        });
    }, []);
    return (<div className="main">
      <h1>plant.bot</h1>
      <div id="stats-model">
        <CurrentStats_1.default date={date} humidity={humidity} temp={temp} moisture={moisture} light={light} weight={weight}/>
        <div id="temp-block">
          <MonsteraPlant_1.default />
        </div>
      </div>
      <div id="graph-container" className="info-container">
        <h2>Data</h2>
        <div id="temp-graph"/>
      </div>
      <div id="footer">
        <a href="https://github.com/plant-bot">view source code</a>
        <PottedPlantSVG_1.default className="icon"/>
      </div>
    </div>);
}
exports.default = App;
