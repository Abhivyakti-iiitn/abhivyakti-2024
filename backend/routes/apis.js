import Express from "express";
import {GetUser} from "../middlewares/getuser.js"
// ... (previous imports)

import {
    getShowStopper,
    createShowStopper,
    checkRegistration as checkShowstopperRegistration,
} from "../controllers/ShowStopper.js";

import {
    getBronxBattleground,
    createBronxBattleground,
    checkRegistration as checkBronxBattlegroundRegistration,
} from "../controllers/BronxBattleground.js";

import {
    getPraanant,
    createPraanant,
    checkRegistration as checkPraanantRegistration,
} from "../controllers/Praanant.js";

import {
    getRhymeriot,
    createRhymeriot,
    checkRegistration as checkRhymeriotRegistration,
} from "../controllers/Rhymeriot.js";

import {
    getStellarsignoff,
    createStellarsignoff,
    checkRegistration as checkStellarsignoffRegistration,
} from "../controllers/Stellarsign-off.js";

import {
    getGroovegenesis,
    createGroovegenesis,
    checkRegistration as checkGroovegenesisRegistration,
} from "../controllers/Groovegenesis.js";

import {
    getBahumukhi,
    createBahumukhi,
    checkRegistration as checkBahumukhiRegistration,
} from "../controllers/Bahumukhi.js";

import {
    getAndhakaar,
    createAndhakaar,
    checkRegistration as checkAndhakaarRegistration,
} from "../controllers/Andhakaar.js";

import {
    getroadtoredcarpet,
    createroadtoredcarpet,
    checkRegistration as checkRoadtoredcarpetRegistration,
} from "../controllers/roadtoredcarpet.js";

import {
    getrythmrumble,
    createrythmrumble,
    checkRegistration as checkRythmRumbleRegistration,
} from "../controllers/rythmrumble.js";
import {
    getmun,
    createmun,
    checkRegistration as checkMUNRegistration,
} from "../controllers/mun.js";
import { getadmads, createadmads, checkRegistration as checkAdmadsRegistration } from "../controllers/admads.js";
import { signin, signup, fetchUser } from "../controllers/auth.controller.js";
import { fetchEventData } from "../controllers/eventFetch.js";

const router = Express.Router();

router.get('/', (req, res) => {
    res.json({ status: 'ok', msg: "welcome to abhvyakti api" });
});
router.get('/fetch-user', fetchUser);
router.get('/fetch-event-data',GetUser, fetchEventData);
router.post('/sign-in', signin);
router.post('/sign-up', signup);

router.get('/showstopper/check-registration', GetUser, checkShowstopperRegistration);
router.get('/bronxbattleground/check-registration', GetUser, checkBronxBattlegroundRegistration);
router.get('/praanant/check-registration', GetUser, checkPraanantRegistration);
router.get('/admads/check-registration', GetUser, checkAdmadsRegistration);
router.get('/rhymeriot/check-registration', GetUser, checkRhymeriotRegistration);
router.get('/stellarsing-off/check-registration', GetUser, checkStellarsignoffRegistration);
router.get('/groovegenesis/check-registration', GetUser, checkGroovegenesisRegistration);
router.get('/bahumukhi/check-registration', GetUser, checkBahumukhiRegistration);
router.get('/andhakaar/check-registration', GetUser, checkAndhakaarRegistration);
router.get('/roadtoredcarpet/check-registration', GetUser, checkRoadtoredcarpetRegistration);
router.get('/rythmrumble/check-registration', GetUser, checkRythmRumbleRegistration);
router.get('/modelunitednations/check-registration', GetUser, checkMUNRegistration);
router.get('/admads/check-registration', GetUser, checkAdmadsRegistration);

//For Showstopper
// router.get('/showstopper', getShowStopper);
router.post('/showstopper',GetUser, createShowStopper);

//For Bronx Battleground
// router.get('/bronxbattleground', getBronxBattleground);
router.post('/bronxbattleground',GetUser, createBronxBattleground);


//For Praanant
// router.get('/praanant', getPraanant);
router.post('/praanant',GetUser, createPraanant);

//For Rhyme Riot
// router.get('/rhymeriot', getRhymeriot);
router.post('/rhymeriot',GetUser, createRhymeriot);

//For Stellar Sing-Off
// router.get('/stellarsingoff', getStellarsignoff);
router.post('/stellarsing-off',GetUser, createStellarsignoff);

//For Ad Mads
// router.get('/admads', getadmads);
router.post('/admads',GetUser, createadmads);

//For Model United Nations (MUN)
// router.get('/mun', getmun);
router.post('/modelunitednations',GetUser, createmun);

//For Groove Genesis
// router.get('/groovegenesis', getGroovegenesis);
router.post('/groovegenesis',GetUser, createGroovegenesis);

//For Bahumukhi
// router.get('/bahumukhi', getBahumukhi);
router.post('/bahumukhi',GetUser, createBahumukhi);

//For Andhakaar
// router.get('/andhakaar', getAndhakaar);
router.post('/andhakaar',GetUser, createAndhakaar);

//For Road to Red Carpet
// router.get('/roadtoredcarpet', getroadtoredcarpet);
router.post('/roadtoredcarpet',GetUser, createroadtoredcarpet);

//For Rythm Rumble
// router.get('/rythmrumble', getrythmrumble);
router.post('/rythmrumble',GetUser, createrythmrumble);

export default router;