const subjects = require("./data.json");

// console.log(
//   JSON.stringify({
//     data: subjects.data.sort((a, b) =>
//       parseInt(a.semester.slice(0, -1)) > parseInt(b.semester.slice(0, -1))
//         ? 1
//         : parseInt(b.semester.slice(0, -1)) > parseInt(a.semester.slice(0, -1))
//         ? -1
//         : 0
//     ),
//     // .map((s) => (s.semester == "1°" || s.semester == "2°" ? s.cod : null)),
//   })
// );

var result = {
  data: [],
};

subjects.data.forEach((sbj) => {
  var req_codes = [];

  if (sbj.req != "Nenhum") {
    var allReqs = sbj.req.split(", ");

    allReqs.forEach((d_req) => {
      var response = subjects.data.find((s) => s.name === d_req);
      req_codes.push(response.cod);
    });
  }

  result.data.push({ ...sbj, req_codes });
});

for (let i = 0; i < result.data.length; i++) {
  var d_req = result.data[i].req_codes;

  result.data[i].weight = result.data[i].weight ? result.data[i].weight : 0;

  d_req.forEach((code) => {
    var response = subjects.data.find((s) => s.cod === code);
    result.data[i].weight = response
      ? response.weight
        ? response.weight + 1
        : 1
      : 0;
  });
}

console.log(result.data.filter((s) => s.cod == "CET518"));
