Week 4 Log

Day 1–5 — Department Library Tracker

What I did
- Built a small library management app from start to finish.
- Added Supabase authentication with librarian and member roles.
- Created books and loans tables.
- Added late-fee calculation of ₹5 per day, capped at the book's value.
- Added RLS policies for user access.
- Wrote tests for the late-fee calculation.
- Added error and empty states.
- Deployed the app to Vercel.
- Created a README explaining the data model.

What I understood
- Authentication controls who can log in.
- RLS controls which data each user can access.
- Database relationships connect books, members, and loans.
- Late fees can be calculated from dates and limited by a maximum value.
- Tests help verify important business logic.
- A deployed application needs proper error and empty states.

What I didn't understand
- RLS and database security were initially difficult.
- I needed more practice with date calculations and database constraints.
- Preventing a book from being issued when all copies are already loaned was initially unclear.

What AI got wrong
- Some RLS and database suggestions were not safe or complete, so I had to test and correct them.
- Some AI-generated code needed changes to follow strict TypeScript and the project's actual requirements.