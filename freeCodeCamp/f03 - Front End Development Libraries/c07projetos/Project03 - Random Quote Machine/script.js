const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';


class App extends React.Component {
  state = {
    quotes: [
      {
      quote: "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.",
      author: "H. P. Lovecraft"
    }
    ],
    index: 0
  
  }
  componentDidMount() {
    //call the API and updade state
    fetch(API).then(res => res.json())
    .then(res => {
      this.setState({
        quotes: res.quotes
      }, this.getRandomIndex);
    });
    
  }
  
  getRandomIndex = () => {
    const {quotes, index} = this.state;
    
    if(quotes.length > 0) {
      const index = Math.floor(Math.random() * quotes.length);
      this.setState({
        index
      })
    }
  }

  render() {
    const {quotes, index} = this.state;

    const quote = quotes[index];
    
    const tweetURL = 
          `https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`;
    
    return (
      <div className="wrapper d-flex align-items-center justify-content-center">
        <div className="col-6 box p-4 rounded" id="quote-box">
          {
            quote && (
              <div className="mb-4">
                <p id="text">{quote.quote}</p>
                <strong>
                <cite className="d-block text-right" id="author">
                  - {quote.author}
                </cite>
              </strong>  
              </div>
              )
              }
              <div className="d-flex justify-content-between"> 
              <a className="btn btn-sm btn-info" target="_black" href={tweetURL} id="tweet-quote"><i className="fab fa-twitter"></i> Tweet</a>
              <button className="btn btn-sm btn-info" onClick={this.getRandomIndex} id="new-quote">
              <i className="fas fa-bolt"></i> Get Quote</button>
          </div>
        </div>
     </div>
    )
  }
}
    



ReactDOM.render(<App />, document.getElementById('app'));

