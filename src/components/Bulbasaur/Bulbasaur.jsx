import './Bulbasaur.css'


export default function Bulbasaur(props) {
    return (
        <div className="Bulbasaur">
            <div className="bhp">
                <h2 className="bhp">HP: {props.bhp}</h2>
            </div>
            <div className="bheathbar">
                <progress id='bhealth' value={props.bhp} max='100'></progress>
            </div>
            <div className="bulbasaur-image">
                <img src="https://c.tenor.com/JcZ8Fg0GtAkAAAAM/bulbasaur-pokemon.gif" alt="" />
            </div>
            <div className="b-buttons">
            <div className="tackle">
                <button onClick={props.handleTackle} className="tackle">Tackle</button>
            </div>
            <div className="vine-whip">
                <button onClick={props.handleVineWhip} className="vine-whip">Vine Whip</button>
            </div>
            <div className="seed-bomb">
                <button onClick={props.handleSeedBomb} className="seed-bomb">Seed Bomb</button>
            </div>
            <div className="sludge-bomb">
                <button onClick={props.handleSludgeBomb} className="sludge-bomb">Sludge Bomb</button>
            </div>
            </div>
        </div>
    )
}