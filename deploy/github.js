const ghpages = require("gh-pages");

console.log("Pushing....");
ghpages.publish(
  "public", // chính là thư mục được build thành web static
  {
    branch: "main",
    repo: "https://LongNguyenDuy23@github.com/LongNguyenDuy23/LongNguyenDuy23.github.io.git", // đổi thành link repo của bạn
    add: true,
  },
  (error) => {
    if (error) {
      console.log("Error: " + error);
    }
    console.log("Deploy completed to GIT.");
  }
);
