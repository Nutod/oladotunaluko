export default function KitchenSink() {
  return (
    <>
      <header>
        <div>
          <h4>Logo</h4>
        </div>
        <nav>
          <a href="Home">Home</a>
          <a href="About">About</a>
          <a href="Contact">Contact</a>
          <a href="Blog">Blog</a>
        </nav>
      </header>
      <h1>Level 1 heading</h1>
      <h2>0123456789</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        reprehenderit velit minus, doloribus <a href="#">ratione</a> atque
        nostrum voluptas inventore qui omnis tempora aliquid consectetur.
      </p>
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
          Paragraph inside Blockquote: Nam libero leo, elementum in, dapibus a,
          suscipit vitae, purus. Duis arcu. Integer dignissim fermentum enim.
          Morbi convallis felis vel nibh. Sed scelerisque sagittis lorem.
        </p>
      </blockquote>
      <address>Address: Example address 224, Sweden</address>
      <pre>
        <strong>Preformated:</strong>Testing one row and another
      </pre>
      <p>
        I am <a href="?abc123">the a tag</a> example
        <br />I am <abbr title="test">the abbr tag</abbr> example
        <br />I am <acronym>the acronym tag</acronym> example
        <br />I am <b>the b tag</b> example
        <br />I am <big>the big tag</big> example
        <br />I am <cite>the cite tag</cite> example
        <br />I am <code>the code tag</code> example
        <br />I am <del>the del tag</del> example
        <br />I am <dfn>the dfn tag</dfn> example
        <br />I am <em>the em tag</em> example
        <br />I am <i>the i tag</i> example
        <br />I am <ins>the ins tag</ins> example
        <br />I am <kbd>the kbd tag</kbd> example
        <br />I am <q>the q tag</q> example
        <br />I am <samp>the samp tag</samp> example
        <br />I am <small>the small tag</small> example
        <br />I am <span>the span tag</span> example
        <br />I am <strong>the strong tag</strong> example
        <br />I am <sub>the sub tag</sub> example
        <br />I am <sup>the sup tag</sup> example
        <br />I am <tt>the tt tag</tt> example
        <br />I am <var>the var tag</var> example
        <br />I am the <span class="small">small class</span> example
        <br />I am the <span class="large">large class</span> example
        <br />I am the <span class="quiet">quiet class</span> example
        <br />I am the <span class="highlight">highlight class</span> example
        <br />
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
      <dl>
        <dt>Description list title 01</dt>

        <dd>Description list description 01</dd>

        <dt>Description list title 02</dt>

        <dd>Description list description 02</dd>

        <dd>Description list description 03</dd>
      </dl>
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
          <legend>Form legend</legend>

          <div>
            <label for="f1">Text input:</label>
            <br />
            <input type="text" id="f1" value="input text" />
          </div>

          <div>
            <label for="pw">Password input:</label>
            <br />
            <input type="password" id="pw" value="password" />
          </div>

          <div>
            <label for="f2">Radio input:</label>
            <br />
            <input type="radio" id="f2" />
          </div>

          <div>
            <label for="f3">Checkbox input:</label>
            <br />
            <input type="checkbox" id="f3" />
          </div>

          <div>
            <label for="f4">Select field:</label>
            <br />
            <select id="f4">
              <option>Option 01</option>

              <option>Option 02</option>
            </select>
          </div>

          <div>
            <label for="f5">Textarea:</label>
            <br />
            <textarea id="f5" cols="30" rows="5">
              Textarea text
            </textarea>
          </div>

          <div>
            <label for="f6">Input Button:</label>
            <br />
            <input type="button" id="f6" value="button text" />
          </div>

          <div>
            <label>
              Button Elements:
              <span class="small quiet">
                Can use &lt;button&gt; tag or &lt;a class="button"&gt;
              </span>
            </label>
            <br />
            <button class="button positive">
              <img src="img/icons/tick.png" alt="" /> Save
            </button>
            <a class="button" href="#">
              <img src="img/icons/key.png" alt="" /> Change Password
            </a>
            <a href="#" class="button negative">
              <img src="img/icons/cross.png" alt="" /> Cancel
            </a>
          </div>
        </fieldset>
      </form>
      I am <a href="http://www.something.com">an external website</a> link, so
      readers know that I'm not a normal link.
      <br />I am <a href="aim:something">an AIM screenname</a> link, so readers
      know that I'm not a normal link.
      <br />I am <a href="mailto:something">an email address</a> link, so
      readers know that I'm not a normal link.
      <br />I am <a href="http://yourwebsite.com">an internal link</a>. Change
      the stylesheet's "http://yourwebsite.com" to your domain name so I don't
      look like an external link.
      <br />
    </>
  )
}
