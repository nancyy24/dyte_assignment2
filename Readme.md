
Link For the video  : https://drive.google.com/drive/folders/1Og02l0zpkUhbqqIR3LbriDsqMnG1Xo0a?usp=sharing

The json data has also been shared with file name as logs.json
Here to install all the dependencies in both the folders ( Frontend and Backend Folders both compusulory)
use command -> npm i

The node modules folder will be created in the frontend folder after the above command run.

To run the backend folder 
run the command -> npm start 
Inside the backend folder, there is a file named app.js which contains the code for starting up the server and listening on port 3000

To run the frontend folder,
run the command --> npm start
It will ask to whether to run in a new port : then we have to type y in the terminal .
This will open a new tab on your browser with the url http://localhost:3001/
You can see the application running there
Note : Make sure you have installed NodeJS and NPM (Node Package Manager) before running these commands


In the website you will see a filter section in the left side  and  in the right side, we will see all the log details. 

In the Filter section, we can add filters to search the specific log data, even you can search the log file using the regex expression too.
Eg:
In ResourceId input you can search for the regular expression like -> server-107.* and you will get the log files having resource id starting from server-107. 

Similarly, I have added the filters based on the Resource Id, Trace Id, Commit Number, Span Id, Parent Resource Id, Level and message.

-----------Please Note-------- 
**Working of the  filters **
Here If you type the words in the resource Id, the the corresponding log files will be shown, now if you erase the data in the input field  and again click on the Search button now that particular filter  applied will be removed.

There is a button named as clear All to clear all the data : here the page will again reload. 

