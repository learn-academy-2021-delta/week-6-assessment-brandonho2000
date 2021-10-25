# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: im not going to lie, i forgot what forign key are and do, but if i was to take a stab at it, i would have to say its the key for a column of info on a DB, and you can add one by doing a rails db migrate. 

  Researched answer: ahh so i was kinda close. rails generate migration is what you would use to add a forign key. Also, a forign key is a colomn in a db that links data in tables. the key should be on the cohort model and should be cohort_id. (i think)



2. Which RESTful routes must always be passed params? Why?

  Your answer: restful routes need to be passed params so they know what hash thay are working on or referencing. 

  Researched answer:the resftful routes Show, edit, update, and destroy need params. show displays an item, edit returns an html of a specific item, update edits an item, and destroy deletes an item. 



3. Name three rails generator commands. What is created by each?

  Your answer: 
  rails generate controller ; creates a controller for routing
  rails generate app -d prosgresql -t; creates apps like the ones we worked on in class.
  rails genereate model_name ; creates a mdoel column for a database 

  Researched answer:

  rails generate controller; creates a controller in the controller folder.

  rails generate app -d prosgresql -t;creates a new app which can be used for DB testing like we did but also as a new app.

  rails generate model_name; creates a new model column for a data base which can be worked on, called on, modified, added too, etc.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students students#index display all students

method="POST"   /students students#create create a new student in the db

method="GET"    /students/new students#new create a new student

method="GET"    /students/2 students#new show student number 2 in db

method="GET"    /students/2/edit students#edit return a html for editing student 2 

method="PATCH"  /students/2 students#update update student 2 in the db

method="DELETE" /students/2 students#destroy deletes student 2 in db



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

User Story: As a user, I can see a home page with a to do list with things that need to be done

User Story: As a user, i should be able to see tabs of diffrent pages with diffrent types of tasks

User Story: As a user, I should be able to navigate freely between pages and be able to come back to the home page with a click of a button

User Story: As a user, I can see completed tasks sepperated from unfinsished tasks with a line through them

User Story: As a user, I can click a add button that will let me add more tasks that need to be done as well as a button to remove tasks

User Story: As a user, I can sepperate tasks by type and sort them by the order they should be done

User Story: As a user, I should be able to edit the discription of each task to go into detail about the task 

User Story: As a user, I should be able to add a date that the task should be done by

User Story: As a user, i should be able to log in and out making my list secured and only accessable to me and my log in info.

User Story: As a user, I should be able to log in and out and have the data saved onto the application