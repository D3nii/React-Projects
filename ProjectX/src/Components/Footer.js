import React from "react";

import "../Style/Footer.css";

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <table>
          <tr>
            <th>Contact</th>
            <th>Team</th>
            <th>Subscribe</th>
          </tr>
          <tr>
            <td>num 1</td>
            <td>join</td>
          </tr>
          <tr>
            <td>num 2</td>
            <td>join</td>
            <td>
              <input type="text" />
              <button>Subscribe</button>
            </td>
          </tr>
          <tr>
            <td>num 3</td>
            <td>join</td>
          </tr>
        </table>
      </>
    );
  }
}

export default Footer;
