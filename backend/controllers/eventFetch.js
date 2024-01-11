import Admads from "../models/admads.js";
import Andhkaar from "../models/andhakaar.js";
import Bahumukhi from "../models/bahumukhi.js";
import BronxBattleground from "../models/BronxBattleground.js";
import GrooveGenesis from "../models/groove.js";
import Mun from "../models/MUN.js";
import Praanant from "../models/Praanant.js";
import Rhymeriot from "../models/rhymeRiot.js";
import Roadtoredcarpet from "../models/roadtoredcarpet.js";
import RythmRumble from "../models/rythmRumble.js";
import ShowStopper from "../models/showStopper.js";
import StellarSingOff from "../models/stellar.js";

const list = [Admads, Andhkaar, Bahumukhi, BronxBattleground, GrooveGenesis, Mun, Praanant, Rhymeriot, Roadtoredcarpet, RythmRumble, ShowStopper, StellarSingOff]
const list2 = ["Admads", "Andhakaar", "Bahumukhi", "BronxBattleground", "GrooveGenesis", "modelunitednations", "Praanant", "Rhymeriot", "Roadtoredcarpet", "RythmRumble", "ShowStopper", "StellarSing-Off"]

export const fetchEventData = async (req, res, next) => {

    try {
        let id = req.user.id;

        let datajson = {};

        for (let index = 0; index < list.length; index++) {
            datajson[list2[index]] = await list[index].findOne({ userId: id });
            
        }


        res.status(200).send({success:true , datajson});

    }
    catch (error) {
        next(error);
        res.status(500).json({ error, success: false });
    }
};