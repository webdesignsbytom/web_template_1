import React, { useState } from 'react';

function QuotePage() {
  const [area, setArea] = useState('');
  const [quote, setQuote] = useState('');
  const [pricePerMeter, setPricePerMeter] = useState(10);
  const [pricePerFoot, setPricePerFoot] = useState(3);
  const [unit, setUnit] = useState('ft'); // Default unit is 'ft'

  const calculateQuote = (e) => {
    e.preventDefault();
    // Calculate the quote based on the area and the selected unit's price
    const pricePerSquare = unit === 'ft' ? pricePerFoot : pricePerMeter;
    const calculatedQuote = area * pricePerSquare;
    setQuote(calculatedQuote);
  };

  return (
    <div className='grid'>
      <article>
        <section>
          <h1>Get an Instant Quote for Plastering Services</h1>
          <p>
            Fill out the form below and we will get back to you with a quote
          </p>
          <p>Simply enter the Square meter or footage required to cover!</p>
          <p>
            For a more accurate quote, please provide as much information as
            possible.
          </p>
        </section>
      </article>

      <section>
        <h2>Get an Instant Rough Quote</h2>
        <form onSubmit={calculateQuote}>
          <div>
            <label htmlFor='area'>Area (in square foot or meters)</label>
            <input
              type='number'
              id='area'
              name='area'
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor='unit'>Unit</label>
            <select
              id='unit'
              name='unit'
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value='ft'>ft</option>
              <option value='meter'>meter</option>
            </select>
          </div>
          <button type='submit'>Calculate</button>
        </form>
        {quote && <p>Your rough quote is: ${quote}</p>}
      </section>

      <section>
        <form>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' required />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' required />
          </div>
          <div>
            <label htmlFor='phone'>Phone</label>
            <input type='tel' id='phone' name='phone' required />
          </div>
          <div>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' required></textarea>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </section>
    </div>
  );
}

export default QuotePage;
