import Express from "express";
import {GetUser} from "../middlewares/getuser.js"
import { getShowStopper, createShowStopper } from "../controllers/ShowStopper.js";
import { getBronxBattleground, createBronxBattleground } from "../controllers/BronxBattleground.js";
import { getPraanant, createPraanant } from "../controllers/Praanant.js";
import { getRhymeriot, createRhymeriot } from "../controllers/Rhymeriot.js";
import { getStellarsignoff, createStellarsignoff } from "../controllers/Stellarsign-off.js";
import { getadmads, createadmads } from "../controllers/admads.js";
import { getmun, createmun } from "../controllers/mun.js";
import { getGroovegenesis, createGroovegenesis } from "../controllers/Groovegenesis.js";
import { getBahumukhi, createBahumukhi } from "../controllers/Bahumukhi.js";
import { getAndhakaar, createAndhakaar } from "../controllers/Andhakaar.js";
import { getroadtoredcarpet, createroadtoredcarpet } from "../controllers/roadtoredcarpet.js";
import { getrythmrumble, createrythmrumble } from "../controllers/rythmrumble.js";
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