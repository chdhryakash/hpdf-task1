Description : HASURA FELLOWSHIP TASKS 
Program Name : app.js 
Platform : Node js Express Programmer 
Name : Akash Chaudhary

Genric Note : Local Host running on Port 8000 

Dependencies : All required module should be imported through npm

1.Install Node software (in windows/linux/any operating system supporting node). Refer to https://nodejs.org

2.Open Terminal/command promt

3.Create a folder for your project and execute command npm init in that folder.

4.Clone this GIT folder completely into your local system

5.As per package.json, install all the libraries using command: npm install --save . Example: npm install --save express

6.Step 5 may not be required as the subfolder node_modules in my package has all dependencies but just ensure integrity is maintained.

7.Once all set, execute the app.js using any of the below commands: a.	npm start (this needs the main program to be only named app.js unless you overwrite in package.json file (refer to npm documentation on how to update). b.	node index.js

9.Once the server starts running, go to any browser (chrome, IE, etc...) and enter any of the below URL to verify the server has started running. a.	http://localhost:8000 (in case you have changed port, use that instead of 8000). b.	http://127.0.0.1:8000

If step 9 works, then procced.

Detailed notes: This repo is created for doing HPDF Week1 tasks. The following tasks are performed as part of Hasura HPDF Weekly Tasks.

The following tasks will have to be demonstrated:

   1.	A simple hello-world at http://localhost:8080/ that displays a simple string like "Hello World - Arpit"; replace "Arpit" with your own first name).

	#Goto http://localhost:8000/ that will display "Hello World - Akash"

   2.	Add a route, for e.g. http://localhost:8080/authors, which:
	fetches a list of authors from a request to https://jsonplaceholder.typicode.com/users
	fetches a list of posts from a request to https://jsonplaceholder.typicode.com/posts
	Respond with only a list of authors and the count of their posts (a newline for each author).

	#Go to http://localhost:8080/authors which will give you the 'a list of authors and the count of their posts'.

   3.	Set a simple cookie (if it has not already been set) at http://localhost:8080/setcookie with the following values: name=<your-first-name> and age=<your-age>.

	#Go to http://localhost:8080/setcookie this will set the cookie name="akash" and age="20", you can go to console of the browser(press F12 in chrome) and here you can see the set cookie. (To see the cookie click on CLICKHERE that will display the cookie)

   4.	Fetch the set cookie with http://localhost:8080/getcookies and display the stored key-values in it.
	
	#Go to http://localhost:8080/getcookies to see the set cookies 

   4.	Deny requests to your http://localhost:8080/robots.txt page. (or you can use the response at http://httpbin.org/deny if needed)

	#Go to http://localhost:8080/robots.txt that will display the robots.txt file.

   5.	Render an HTML page at http://localhost:8080/html or an image at http://localhost:8080/image.

	#Go to http://localhost:8080/image, this will display an image of a puppy.

   6. 	A text box at http://localhost:8080/input which sends the data as POST to any endpoint of your choice. This endpoint should log the received the received to stdout.
	
	#Go to http://localhost:8080/input, you will see a textbox, put any alphabets you want in that textbox and press ENTER this will redirect to #Go to http://localhost:8080/show and diplay the result.