const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const subjects = require("./db.json");

async function main() {
  // ... you will write your Prisma Client queries here

  var center = await prisma.center.create({
    data: {
      cod_center: "CETEC",
      center_id: 1,
      name: "Centro de Ciências Exatas e Tecnológicas",
    },
  });

  var course = await prisma.course.create({
    data: {
      cod_course: "BCET",
      name: "Bacharelado em Ciências Exatas e Tecnológicas",
      cod_center: center.cod_center,
      workload_S_optional: 272,
      workload_S_required: 4029,
    },
  });

  // await prisma.subject.create({
  //   data: {
  //         subject_code: "sbj.cod",
  //         name: "sbj.name",
  //         workload: 0,
  //         cod_center: "center.cod_center",
  //         requested: {
  //           create: {
  //             optional: false,
  //             semeter: 2,
  //             cod_course: "course.cod_course",
  //             requirements: {
  //               createMany: subjects.data[0]
  //             },
  //           },
  //         },
  //       }
  // });

  for (sbj of subjects.data) {
    console.log("Start:", sbj.cod);

    var response = await prisma.subject.create({
      data: {
        subject_code: sbj.cod,
        name: sbj.name,
        workload: sbj.ch_t,
        cod_center: center.cod_center,
        requested: {
          create: {
            optional: !(sbj.mod == "Básica"),
            semester: sbj.semester.slice(0, -1),
            cod_course: course.cod_course,
            requirements: {
              create: sbj.req_codes.map((code) => {
                return { subject_code: code };
              }),
            },
          },
        },
      },
    });

    console.log("END:", response.subject_code);
  }

  const subject_codes = [
    { semester: "1", code: "CCA283" },
    { semester: "1", code: "CET146" },
    { semester: "1", code: "CET095" },
    { semester: "1", code: "CET061" },
    { semester: "1", code: "CET150" },
    { semester: "1", code: "CET066" },
    { semester: "2", code: "CCA310" },
    { semester: "2", code: "CCA235" },
    { semester: "2", code: "CET147" },
    { semester: "2", code: "CET099" },
    { semester: "2", code: "CET151" },
    { semester: "2", code: "CET065" },
  ];

  await prisma.people.create({
    data: {
      email: "daiane.luana.aragao@gmail.com",
      name: "Daiane Luana Alice Aragão",
      password: "4312",
      Students: {
        create: [
          {
            register: "201811509",
            init_semester: "2018",
            course_id: course.course_id,
            subjects: {
              createMany: {
                data: subject_codes.map((sbj) => {
                  return {
                    status: "cursando",
                    subject_code: sbj.code,
                    semester: sbj.semester,
                  };
                }),
              },
            },
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
