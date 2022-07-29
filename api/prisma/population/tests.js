const subjects = require("./db.json");

console.log(
  JSON.stringify({
    data: subjects.data.sort((a, b) =>
      parseInt(a.semester.slice(0, -1)) > parseInt(b.semester.slice(0, -1))
        ? 1
        : parseInt(b.semester.slice(0, -1)) > parseInt(a.semester.slice(0, -1))
        ? -1
        : 0
    ),
    // .map((s) => (s.semester == "1°" || s.semester == "2°" ? s.cod : null)),
  })
);

var result = {
  data: [],
};

// subjects.data.forEach((sbj) => {
//   var req_codes = [];

//   if (sbj.req != "Nenhum") {
//     var allReqs = sbj.req.split(", ");

//     allReqs.forEach((d_req) => {
//       var response = subjects.data.find((s) => s.name === d_req);
//       req_codes.push(response.cod);
//     });
//   }

//   result.data.push({ ...sbj, req_codes });
// });

// console.log(JSON.stringify(result));
