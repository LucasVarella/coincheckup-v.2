function Coin(props){
    return (
        <div className="div-coin">
            <img className="icon-coin" src={props.url}/>
            <h5>{props.name}</h5>
        </div>
    );
}

function CoinSelector(){
    return (
        <div id="coin-selector">
            
            <div id="system-logo">
                <img src="imgs/system-logo.png"/>
            </div>
            <Coin name="Bitcoin" url="imgs/coins-icons/btc.png"/>
            <Coin name="Ethereum" url="imgs/coins-icons/eth.png"/>
            <Coin name="Solana" url="imgs/coins-icons/solana.png"/>
            <Coin name="Binance" url="imgs/coins-icons/bnb.png"/>
            <Coin name="Cardano" url="imgs/coins-icons/cardano.png"/>
            <Coin name="Ripple" url="imgs/coins-icons/xrp.png"/>
            <Coin name="Doge" url="imgs/coins-icons/doge.png"/>
            <Coin name="USDC" url="imgs/coins-icons/usdc.png"/>
            <Coin name="BUSD" url="imgs/coins-icons/busd.png"/>
            <Coin name="Tether" url="imgs/coins-icons/tether.png"/>
            
        </div>
        
    )
}

function Infos(props){
    return (
        <div className="info-box">
            <h5>{props.name}</h5>
            <h4>{props.value}</h4>
        </div>
    );
}

function DisplayInfos(){
    return (
        <div id="display">
            <div id="logo-coin">
                <img src="imgs/coins-logos/bitcoin.png"/>
            </div>
            <div id="infos">
               <Infos name="Price" value="5"/>
               <Infos name="Price" value="5"/>
               <Infos name="Price" value="5"/>
               <Infos name="Price" value="5"/>
               <Infos name="Price" value="5"/>
               <Infos name="Price" value="5"/>
            </div>
        </div>
    )
}

function App(){
    return (
        <div id="system">
            <CoinSelector/>
            <DisplayInfos/>         
        </div>
       
    );
}

ReactDOM.render(<App />, document.querySelector('body'));

