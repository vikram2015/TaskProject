# TaskProject



Steps to run the project

1)Install nodejs.
2)Install MongoDB.
3)attach the postman with your google chrome.
4)Install the robomongo if you can to see the database collections.
5) open the postman.
						//For storing the data in the database
6)put the POST type and type the "localhost:3000/api/tasks" URL to POST your first data in the database.
7)In headers option put Content-Type in key and application/json in value.
8)In body option click on raw the select the json(application/json) from dropdown in the end of row.
9)enter the data in json format.

ex -

{
	"taskName":"vikram",
	"assignedTo":"coding",
	"comment":"do code in time",
	"dueDateAndTime":"{{$timestamp}}"
}

10)then press send option,finally your data is saved in the database.
				
				//For fetching the data from database
11)switch from POST to GET,let the same URL.
12)in first option let it be in headers insecond row click on body and select the pretty and JSON from the dropdown.

				//For fetching the single selected data
13)select GET.
14)in URL give as "localhost:3000/api/taskRecord/vikram/coding".
15)here you have to pass two parameters one is taskName and second one is assignedTo.

				//For deleting the data from database
16)select DELETE.				
17)there is a automatic generated id in mongoDB.
18)for deletion use that id,copy id paste in the URL.
ex--

"localhost:3000/api/tasks/595010f6587a7823386746d0"
19)it deletes the particular id data from the database.
