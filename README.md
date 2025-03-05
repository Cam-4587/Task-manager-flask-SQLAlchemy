![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

This is a project from the Diploma in Full stack devleopment course from the Code Institute and is a Relational Database Management System mini-project.

live link - [Taskmanager](https://taskmanager-8-4e23dcf6296d.herokuapp.com/)

![](/task_manager_am_i_responsive_image.png)

This task manager is built using Flask, the SLQAlchemy ORM, and a frontend framework called Materialize to enhance user experience.

Using the [Materialize framework](https://materializecss.com/) helps to enhance the user experience by adding styling to the user interfaces and making the application responsive to different screen sizes.

A base.html template is created and template inheritance is used to add this to other html template files.

Two different tables where created called, 'Category' and 'Task' that were added to the database. The Category table contains a primary key to give it a unique ID  and the 'Task' table contains a Foreignkey that creates a database relationship to the category.


CRUD functionality is impletemted for Creating, Reading, Updating and Deleting Categories and Tasks.

Category and Task tables are presented to the user as forms that they input to the database. Separate HTML templates for editing both Category and Task tables present the instance of either the category or the task to be edited and then re submitted. Each category and task is presented with a delete button that deletes that Category or Task. 

Following the Creation, updating or deletion of a Category or Task, the user will be redirected to the page that shows the categories or tasks.


