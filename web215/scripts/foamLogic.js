
console.log('loaded');
function profileLoad(){
profile="Personal%20Background%3A%20From%20Michigan%20with%20pit-stops%20in%20Cleveland%20and%20Pittsburgh%20before%20moving%20to%20Charlotte%0AProfessional%20Background%3A%20My%20background%20is%20in%20banking%2Ffinance%2C%20but%20decided%20to%20change%20careers%20in%202021.%20I%20work%20in%20technical%20support%20for%20a%20large%2C%20hated%20telecom%20company%0AAcademic%20Background%3A%20B.A%20and%20M.A.%20in%20Economics%20from%20Cleveland%20State%20University.%20Went%20back%20to%20school%20in%202015%20as%20a%20college%20dropout%20and%20graduated%20in%202017%20with%20a%20Master%E2%80%99s%21%0ABackground%20in%20Subject%3A%20I%20know%20the%20basics%20in%20HTML%20and%20JS%2C%20and%20can%20stumble%20through%20CSS%0APrimary%20Computer%20Platform%3A%20Macbook%20Air.%20Got%20it%20for%20CPCC%20so%20I%20could%20write%20file%20paths%20with%20forward%20slashes%2C%20to%20use%2Fcompile%20virtually%20any%20%2Anix%20source%20code%2C%20and%20not%20have%20to%20charge%20my%20laptop%E2%80%99s%20battery%20every%20two%20hours%0ACourses%20I%27m%20in%20and%20Why%3A%20I%20work%20more%20than%20full-time%2C%20so%20this%20is%20my%20only%20course%20until%20March.%20I%E2%80%99m%20also%20studying%20for%20my%20CCNA.%20I%20got%20approval%20to%20sub%20Web-215%20for%20the%20Enterprise%20Java%20class%20required%20for%20the%20Software%20Development%20degree%2C%20because%20half%20of%20Enterprise%20Java%20was%20learning%20to%20build%20GUI%E2%80%99s%20with%20JavaFx%20and%20Swing%2C%20and%20nobody%20builds%20GUI%E2%80%99s%20in%20anything%20other%20than%20web%20technologies%20anymore%0AFunny%2FInteresting%20Item%20to%20Remember%20me%20by%3A%20I%20am%20on%20the%20CIA%20watch%20list.%20On%20a%20vacation%20in%202018%2C%20I%20spent%20too%20much%20time%20loitering%20around%20the%20CIA%20headquarters%20in%20Langley%2C%20VA.%20The%20local%20police%20stopped%20me%20and%20asked%20why%20I%20was%20there.%20I%20nervously%20replied%2C%20%E2%80%9Cbecause%20I%20wanted%20to%20see%20this%20place%20that%E2%80%99s%20in%20all%20of%20the%20spy%20movies%2C%20but%20I%20guess%20that%20was%20a%20bad%20idea%3F%E2%80%9D%20Undoubtedly%2C%20local%20police%20gave%20my%20name%20to%20the%20CIA%0AI%E2%80%99d%20also%20like%20to%20share%3A%20Nothing%2C%20this%20is%20the%20public%20Internet%2C%20remember%3F";
profile=decodeURIComponent(profile);
document.getElementById('profileBox').defaultValue=profile;
console.log('success');
}

function clearBox(id){
    document.getElementById('profileBox').value= '';
    document.getElementById('textBoxId').value= '';
}

profileLoad();



