import React from "react";
import Link from "gatsby-link";
export default () =>
  <footer>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-1" />
        <div className="col-xs-12 col-md-8">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-4">
                <h6>PostGraphile</h6>
                <ul>
                  <li>
                    <Link to="/postgraphile/">About</Link>
                  </li>
                  <li>
                    <Link to="/postgraphile/introduction/">Introduction</Link>
                  </li>
                  <li>
                    <Link to="/postgraphile/security/">Security</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-md-4">
                <h6>Graphile Build</h6>
                <ul>
                  <li>
                    <Link to="/graphile-build/">About</Link>
                  </li>
                  <li>
                    <Link to="/graphile-build/getting-started/">
                      Getting Started
                    </Link>
                  </li>
                  <li>
                    <Link to="/graphile-build/plugins/">Plugins</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-md-4">
                <h6>Community</h6>
                <ul>
                  <li>
                    <a href="https://github.com/graphile">GitHub</a>
                  </li>
                  <li>
                    <a href="https://gitter.im/postgraphql/postgraphql">
                      Gitter chat
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/benjie">Twitter</a>
                    {/* TODO: update to Graphile twitter */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row copyright">
        <div className="col-xs-12 right italic">
          PostGraphile is open-source software and was originally authored as
          PostGraphQL by{" "}
          <a href="https://twitter.com/calebmer">Caleb Meredith</a>. This site
          is copyright &copy;{" "}
          <a href="https://twitter.com/benjie">Benjie Gillam</a> 2017.
        </div>
      </div>
    </div>
  </footer>;
