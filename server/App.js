require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const incidents = require("./routes/incidents.js");
const apis = require("./routes/apis");
const logins = require("./routes/logins");
const updates = require("./routes/updates");
const profiles = require("./routes/profiles");

// This is the client-side's /build/ directory, where all the compiled frontend files are we want to serve. Putting it in a variable for reuse is cleaner.
const publicPath = path.resolve(__dirname, "../build");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

// The Homepage
app.get("/", function (req, res) {
  /**
   * `path.resolve` is generally safer than path.join. because it
   * does the same thing join does, but a little bit extra path-checking to ensure
   * the result is actually an absolute path. If not, it will fallback to the
   * current directory. It's a little safer to use to ensure a correct path.
   * See https://nodejs.org/api/path.html#path_path_resolve_paths
   */
  res.sendFile(path.resolve(publicPath, "index.html"));
});

// For express.static, it's better to serve the whole directory than just index.html, because we also need the CSS, JS, images, etc to be statically served also.
app.use(express.static(publicPath));

app.use("/logins", logins);
app.use("/incidents", incidents);
app.use("/updates", updates);
app.use("/profiles", profiles);

app.use("/api", apis);

/**
 * Wildcard request matching.
 * It's important to put this AFTER all the routes you have already defined above
 * like your API endpoints (/incidents, /updates, etc). This is essentially a
 * "catch-all" route. When all other routes are assigned.
 * It will take any invalid request and send the user back to the homepage.
 * Try it out! Go to http://localhost:8080/blah
 */
app.get("*", function (request, response) {
  response.sendFile(path.resolve(publicPath, "index.html"));
});

/**
 * It's a good practice to always output a log statement here so troubleshooting
 * a faulty server is easier -- you can scan the logs for this statement and know
 * that all the above code ran without throwing errors, and your problem
 * is likely not in this code.
 */
const port = process.env.PORT || 8080;
console.log(`server started on port ${port}`);
app.listen(port);
