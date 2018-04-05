# alexa-devs


Welcome to Cav-Assistant! A skill for Alexa designed by UVA students for UVA students. 

# Step 1: Make necessary changes to the Dialog Model.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	NOTE: Always notify the team through Slack if you are working in the Dialog Model. </br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	If you are adding a new intent, you will need to set up the intent in the Alexa Skills Kit. Log in to the Amazon Developer Console here: https://developer.amazon.com/home.html. You should use your personal login that you gave me the email for. Make sure when you login that “CODE FOR GOOD @UVA” is in the navigation bar on the right. </br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Click on “Alexa Skills Kit” and then “Edit” under the “Actions” heading of the “CavAssistant” entry. </br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Using the navigation menu on the left third of the screen to create intents and custom slot types. </br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Save and build the model. </br></br>
  
# Step 2: Edit code from GitHub on your computer.
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Be sure that you have CLONED the alexa-devs repository onto your computer using GitHub Desktop or command line. If you just create a copied version of the repo, you will not be able to push changes to the alexa-devs repository. </br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Once the repo is cloned onto your computer, you can access and edit the project files. By default, they will be stored in Documents/GitHub/alexa-devs. Make sure if you have multiple copies of the project (ex: you downloaded a zip file of the project and stored it somewhere else) that you are working on the version tracked by GitHub. I recommend using the Atom code editor, which can be downloaded for free here: https://atom.io/. IMPORTANT: make sure you are on your team’s branch, NOT the master branch when you begin editing code. Also, make sure you pull changes from your team’s branch before editing code so that you have the most up-to-date version.</br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Changes you make to the code should show up in GitHub Desktop/Console. I recommend that you test your code by uploading an appropriately formatted zip file to the Lambda function before committing changes. This will minimize the need for us to revert changes since (hopefully) you will be less likely to commit something that is broken.</br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Project Structure reminders:</br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Each feature (intent) needs to have its own folder with a res.js, data.js, and work.js file </br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Res.js is the only file that should be communicating with index.js </br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Index.js is the only file communicating with Alexa </br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Data.js is used for storing data, retrieving info from databases </br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Work.js is used for any extensive calculations, work, etc. If your team’s call to an external API is ugly, you may want to put it here and then send the response back to res.js to make it easier to read. </br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	DEBUGGING NOTE: It can be helpful to run your file from command line using node filename to make sure there are no syntactical errors before uploading to Lambda. </br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	REMINDER: GitHub is simply to hold code for us and make version control/team programming possible. Changes to GitHub do not result in changes to Lambda- if you need to test code, it has to be uploaded to Lambda separately. SPECIAL PRIZE FOR SOMEONE WHO WANTS TO WRITE A SCRIPT TO DO THIS FOR US. </br></br>
  
# Step 3: Create zip file and upload to Lambda.
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	NOTE: Always notify the team through Slack before uploading a new zip file.</br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	As stated above, you must upload your code to Lambda in order to test with Alexa. It is vital that you format the zip file  correctly, or Alexa will not be able to find the handler within your project. Zip file format should be as follows: </br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Index.js in root </br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Node_modules folder in root </br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	All features folders in root </br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Log in to the Amazon Developer Console at https://console.aws.amazon.com/console/home?region=us-east-1. Login information has been posted on the team Google Doc. </br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Search for “Lambda.” </br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Click on “cavAssistant” under “Functions.” </br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Scroll down until you see the “function code” section. Make sure “Code entry type” is set to “Upload a .ZIP file” and then click the “Upload” button under “Function Package” to select the zip you built.</br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Scroll back up to the top and in the top right corner, click the “Save” button. Your zip file is now uploaded to Lambda and can be used for testing.</br></br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	NOTE TO MAC USERS: Because of the way Mac zips files, you cannot simply upload a zip to Lambda. You will need to change the “Handler” listed under the “function code” section of the Lambda function. As I have a Windows machine, I have not experimented with this much. Make sure you send a notification in the Slack if you are changing the handler because it will need to be changed back for Windows zip folders. </br></br>
  
# Step 4: Test code.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Option 1: Alexa Skills Kit Alexa Simulator</br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	This option allows you to type in dialog and have a conversation with Alexa. It is accessed following the same steps in step 1. </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Once you get to the CavAssistant dialog model, you click the “Test” option in the navigation bar.</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Make sure you start with “Alexa, open cav assistant.”</br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Option 2: Lambda Test</br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	This option allows you to check whether Alexa sends back something valid when you try to invoke a particular intent based on test data you supply. It is also what you want to do if you need to check console.log() statements or trace the control flow of your feature. </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	First, grab a sample JSON request from the Alexa Skills Kit. This is done by navigating to the “Test” page of the Alexa Skills Kit as described above. Once you start the skill and then ask for a particular intent, the JSON form will appear in the right portion of the screen. Copy the “JSON input” object.</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Navigate to the Lambda function within the AWS Console (see step 2). </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	In the upper right next to the “Test” button, there is a drop-down. Click the drop-down and select “Configure test events.”</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Select the “Create new test event” radio unless you are editing an existing test.</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Copy and paste the copied JSON request into the text box.</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Click “Save” </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Once you are back on the opening Lambda page, you can click the “Test” button to send this sample request to the Lambda function and see the response. </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Once you click “Test,” a green or red box will appear at the top of the screen. As you might imagine, green means there was no error and red indicates the contrary. </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Click the “logs” link in the colored box to navigate to CloudWatch. Click on the top entry. CloudWatch will provide information as the code executes. This is where you need to look for console.log() statements and control flow. NOTE: Sometimes events are not logged in CloudWatch. I’m sorry I have no idea why!! </br></br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Option 3: Echosim </br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	This option also allows you to converse with Alexa, but will not allow you to type your response (you must speak it). </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Navigate to https://www.echosim.io. </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Login using your personal development account (same account you use for Amazon Developer Console).</br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Follow the prompts to start the conversation with Alexa. Be sure to start with “Alexa, open cav assistant.” </br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	Option 4: Alexa </br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	This option is the best for testing after you are pretty sure your code works, but are interested in testing how well Alexa picks up different annunciations, speech styles, etc. </br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o	If you have an Alexa, make sure you are signed in on your phone with the same account you used for your developer account. The CavAssistant skill will automatically be enabled for testing, so you can invoke the skill with “Alexa, open cav assistant” and test conversations. </br>

