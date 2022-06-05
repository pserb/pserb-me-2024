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
          "day": "June 6, 2022",
          "bell": "regular_schedule",
          "block": "B1",
          "testing": "Science",
          "announcement": null
        },
        {
          "day": "June 7, 2022",
          "bell": "regular_schedule",
          "block": "A1",
          "testing": "WL, ELA, and Health",
          "announcement": null
        },
        {
          "day": "June 8, 2022",
          "bell": "regular_schedule",
          "block": "B2",
          "testing": "Math, Music, and Art",
          "announcement": "Film Screening at 5PM of Down a Dark Stairwell. Q and A panel after the film. Please RSVP to jsuri@stuy.edu if you plan on going."
        },
        {
          "day": "June 9, 2022",
          "bell": "NO SCHOOL",
          "block": null,
          "testing": null,
          "announcement": "Chancellor's Conference Day for Staff Development. No students in attendance."
        },
        {
          "day": "June 10, 2022",
          "bell": "regular_schedule",
          "block": "A2",
          "testing": "CS, SS, and Tech",
          "announcement": null
        }
      ]
    }
  )
}
