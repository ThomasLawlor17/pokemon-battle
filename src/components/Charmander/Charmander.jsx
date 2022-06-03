import './Charmander.css'

export default function Charmander(props) {
    return (
        <div className="Charmander">
            <div className="chp">
                <h2 className="chp">HP: {props.chp}</h2>
            </div>
            <div className="cheathbar">
                <progress id='chealth' value={props.chp} max="100"></progress>
            </div>
            <div className="charmander-image">
                <img src="http://pa1.narvii.com/6395/abbfb09024c83b880ef2f8e30a73a79c4b613af9_00.gif" alt="" />
            </div>
            <div className="c-buttons">
            <div className="scratch">
                <button onClick={props.handleScratch} className="scratch">Scratch</button>
            </div>
            <div className="ember">
                <button onClick={props.handleEmber} className="ember">Ember</button>
            </div>
            <div className="flamethrower">
                <button onClick={props.handleFlamethrower} className="flamethrower">Flamethrower</button>
            </div>
            <div className="slash">
                <button onClick={props.handleSlash} className="slash">Slash</button>
            </div>
            </div>
        </div>
    )
}