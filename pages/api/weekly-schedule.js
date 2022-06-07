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
          "day": "June 13, 2022",
          "bell": "regular_schedule",
          "block": "B",
          "testing": "Makeup Test Day",
          "announcement": null
        },
        {
          "day": "June 14, 2022",
          "bell": "special20_homeroom_schedule",
          "block": "A",
          "testing": "Makeup Test Day",
          "announcement": "Special 20 - Minute Homeroom Bell Schedule. End of MP3."
        },
        {
          "day": "June 15, 2022",
          "bell": "NO SCHOOL",
          "block": null,
          "testing": "Regents Exams",
          "announcement": "English Language Arts (9:15 AM) and Living Environment (1:15 PM) regents testing today."
        },
        {
          "day": "June 16, 2022",
          "bell": "NO SCHOOL",
          "block": null,
          "testing": "Regents Exams",
          "announcement": "Algebra I (9:15 AM) and Physical Setting / Chemistry (1:15 PM) regents testing today."
        },
        {
          "day": "June 17, 2022",
          "bell": "NO SCHOOL",
          "block": null,
          "testing": "Regents Exams",
          "announcement": "Global History and Geography II (9:15 AM) and Physical Setting / Earth Science (1:15 PM) regents testing today."
        }
      ]
    }
  )
}
