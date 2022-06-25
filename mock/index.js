const { mock, Random } = require("mockjs");
module.exports = [
  {
    pattern: "/api/hello",
    handle(req, res) {
      res.end(JSON.stringify([1, 2, 3]));
    },
  },
  {
    pattern: "/api/student/list",
    handle: (req, res) => {
      res.end(
        JSON.stringify(
          mock({
            data: {
              "list|10": [
                {
                  time: new Date().getTime(),
                  name: Random.first(),
                  address: Random.region(),
                  height: 180,
                  image: "https://vitejs.cn/logo.svg",
                },
              ],
              page: 1,
              size: 10,
              all: 100,
            },
          })
        )
      );
    },
  },
];
