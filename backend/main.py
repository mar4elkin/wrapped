import json
from flask import Flask, request
from yandex_music import Client
from os.path import exists, expanduser
from flask_cors import CORS

token_path = f'{expanduser("~")}/.wrapped_backend_data'
client = None

def create_token_file():
    if exists(token_path) == False:
        token_file = open(token_path, 'w')
        token_file.write('token=')
        token_file.close()

def get_token():
    token_file = open(token_path, 'r')
    token = token_file.readline().split('=')[1]
    return token

def init_client(token):
    if token != '':
        return Client(token).init()
    else:
        return None


create_token_file()
client = init_client(get_token())
app = Flask(__name__)
CORS(app)

@app.route("/")
def f_get_home():
    return 'welcome to wrapped api!'

@app.route("/token/")
def f_get_token():
    token = get_token()
    return 'token is missing!' if token == '' else token

@app.route("/token/update/", methods=['POST', 'PUT'])
def f_put_token():
    request_data = request.get_json()
    init_client(request_data['token'])
    return 'Token updated!'

@app.route("/feed/")
def f_get_feed():
    try:
        feed = client.feed().to_json()
        return feed
    except Exception as e:
        return str(f'{e} - try to set your token by using /token/update/')