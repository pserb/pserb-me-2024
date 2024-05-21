// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/*
IMPORTANT IF FILLING OUT THE JSON
scheduleType, days, day, and testing will NEVER BE null.

bell name is: scheduletype_schedule
scheduletype: regular, conference, homeroom

see api/master-schedules.js for all bell schedules
*/

export default function handler(req, res) {
  let targetURL = "https://api-stuyschedule.vercel.app/api/weekly-schedule"

    // Set the status code to 302 (Found) or 301 (Moved Permanently)
    res.writeHead(301, {
      Location: targetURL,
    });
    
    // End the response
    res.end();
}
