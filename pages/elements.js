import Layout from 'components/Layout'

export default function Elements() {
  return (
    <Layout pageTitle="Oladotun Aluko &rarr; Kitchen Sink">
      <div className="container">
        <div>
          <h1>Level 1 heading</h1>
          <h2>0123456789</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            reprehenderit velit minus, doloribus <a href="#">ratione</a> atque
            nostrum voluptas inventore qui omnis tempora aliquid consectetur.
          </p>
        </div>
        <h2>Level 2 Heading</h2>
        <p>
          Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo,
          vehicula in, suscipit nec, molestie sed, tellus.
        </p>
        <h3>Level 3 Heading</h3>
        <p>
          Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo,
          vehicula in, suscipit nec, molestie sed, tellus.
        </p>
        <h4>Level 4 Heading</h4>
        <p>
          Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo,
          vehicula in, suscipit nec, molestie sed, tellus.
        </p>
        <h5>Level 5 Heading</h5>
        <p>
          Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo,
          vehicula in, suscipit nec, molestie sed, tellus.
        </p>
        <h6>Level 6 Heading</h6>
        <p>
          Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo,
          vehicula in, suscipit nec, molestie sed, tellus.
        </p>
        <button>Get more Information</button>
        <blockquote>
          <p>
            Paragraph inside Blockquote: Nam libero leo, elementum in, dapibus
            a, suscipit vitae, purus. Duis arcu. Integer dignissim fermentum
            enim. Morbi convallis felis vel nibh. Sed scelerisque sagittis
            lorem.
          </p>
        </blockquote>
        <address>Address: Example address 224, Sweden</address>
        <pre>
          <strong>Preformated:</strong>Testing one row and another
        </pre>
        <img src="https://placeimg.com/640/480/nature" alt="Nature" />
        <p>
          I am <a href="?abc123">the a tag</a> example
          <br />I am <abbr title="test">the abbr tag</abbr> example
          <br />I am <acronym>the acronym tag</acronym> example
          <br />I am <b>the b tag</b> example
        </p>
        <hr />
        <ul>
          <li>Unordered list 01</li>

          <li>Unordered list 02</li>

          <li>
            Unordered list 03
            <ul>
              <li>Unordered list inside list level 2</li>

              <li>
                Unordered list inside list level 2
                <ul>
                  <li>Unordered list inside list level 3</li>

                  <li>Unordered list inside list level 3</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ol>
          <li>Ordered list 01</li>

          <li>Ordered list 02</li>

          <li>
            Ordered list 03
            <ol>
              <li>Ordered list inside list level 2</li>

              <li>
                Ordered list inside list level 2
                <ol>
                  <li>Ordered list inside list level 3</li>

                  <li>Ordered list inside list level 3</li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
        I am <a href="http://www.something.com">an external website</a> link, so
        readers know that I'm not a normal link.
        <br />I am <a href="aim:something">an AIM screenname</a> link, so
        readers know that I'm not a normal link.
        <br />I am <a href="mailto:something">an email address</a> link, so
        readers know that I'm not a normal link.
        <br />I am <a href="http://yourwebsite.com">an internal link</a>. Change
        the stylesheet's "http://yourwebsite.com" to your domain name so I don't
        look like an external link. some other content
        <br />
        <table>
          <caption>Table Caption</caption>

          <thead>
            <tr>
              <th>Table head th</th>

              <td>Table head td</td>
            </tr>
          </thead>

          <tfoot>
            <tr>
              <th>Table foot th</th>

              <td>Table foot td</td>
            </tr>
          </tfoot>

          <tbody>
            <tr>
              <th>Table body th</th>

              <td>Table body td</td>
            </tr>

            <tr>
              <td>Table body td</td>

              <td>Table body td</td>
            </tr>
          </tbody>
        </table>
        <form action="#">
          <fieldset>
            <legend>
              <h4>Form legend</h4>
            </legend>

            <div className="form-grid">
              <div>
                <label htmlFor="f1">Text input</label>
                <br />
                <input type="text" placeholder="Input text" />
              </div>
              <div>
                <label htmlFor="pw">Password input</label>
                <br />
                <input type="password" placeholder="Password" />
              </div>
              <div>
                <label htmlFor="f5">Textarea</label>
                <br />
                <textarea id="f5" cols="30" rows="5" />
              </div>
            </div>

            <div>
              <button className="button positive">
                <img src="img/icons/tick.png" alt="" /> Save
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </Layout>
  )
}
