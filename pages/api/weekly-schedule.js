// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/*
IMPORTANT IF FILLING OUT THE JSON
scheduleType, days, day, and bell will NEVER BE null.

bell name is: scheduletype_schedule
scheduletype: regular, conference, homeroom
*/

export default function handler(req, res) {
  res.status(200).json(
    {
      "scheduleType": "week",
      "days": [
        {
          "day": "June 20, 2022",
          "bell": "NO SCHOOL",
          "block": null,
          "testing": "Regents Exams",
          "announcement": "Juneteenth. No Regents Exams."
        },
        {
          "day": "June 21, 2022",
          "bell": "NO SCHOOL",
          "block": null,
          "testing": "Regents Exams",
          "announcement": "Geometry (8:15 AM) and World Language (8:15 or 12:15 PM) regents testing today."
        },
        {
          "day": "June 22, 2022",
          "bell": "NO SCHOOL",
          "block": null,
          "testing": "Regents Exams",
          "announcement": "Algebra II (8:15 AM) regents testing today."
        },
        {
          "day": "June 23, 2022",
          "bell": "NO SCHOOL",
          "block": null,
          "testing": "Regents Exams",
          "announcement": "Physical Setting / Physics (8:15 AM) regents testing today. Senior Graduation!"
        },
        {
          "day": "June 24, 2022",
          "bell": "NO SCHOOL",
          "block": null,
          "testing": "Regents Exams",
          "announcement": "Teacher grades due 8 AM."
        }
      ]
    }
  )
}
