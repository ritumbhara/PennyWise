



# @app.route('/')
# def hello_world():
#     print("Hello world")
#     return 'Hello World'

# if __name__ == "__main__":
#         app.run()
import dialogflow
import os 
from google.oauth2 import service_account
from google.api_core.exceptions import InvalidArgument
from flask import Flask, jsonify
from flask import request

app = Flask(__name__)

DIALOGFLOW_PROJECT_ID = 'pennywise-bcrdpg'
DIALOGFLOW_LANGUAGE_CODE = 'en-US'
credentials = service_account.Credentials.from_service_account_file(os.path.join(os.getcwd(),'damn.json'))
SESSION_ID = 'Small-Talk'

@app.route('/webinfo', methods = ['POST'])
def user():

    if request.method == 'POST':
        """modify/update the information for <user_id>"""
        # you can use <user_id>, which is a str but could
        # changed to be int or whatever you want, along
        # with your lxml knowledge to make the required
        # changes
        data = request.form['message']
        print(data)
        
        session_client = dialogflow.SessionsClient(credentials=credentials)
        session = session_client.session_path(DIALOGFLOW_PROJECT_ID, SESSION_ID)
        text_input = dialogflow.types.TextInput(text=data, language_code=DIALOGFLOW_LANGUAGE_CODE)
        query_input = dialogflow.types.QueryInput(text=text_input)
        try:
            response = session_client.detect_intent(session=session, query_input=query_input)
        except InvalidArgument:
            raise
        print("Query text:", response.query_result.query_text)
        print("Detected intent:", response.query_result.intent.display_name)
        print("Detected intent confidence:", response.query_result.intent_detection_confidence)
        print("Fulfillment text:", response.query_result.fulfillment_text)
        #response.headers.add('Access-Control-Allow-Origin', '*')
        return response.query_result.fulfillment_text
        


if __name__ == "__main__":
    app.run()


