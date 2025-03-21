import requests;
import os;

running = True
api_endpoint = "http://localhost/devices/"

while running:
    requests.post(api_endpoint, headers={
        "DAEMON_SECRET": os.getenv("DAEMON_SECRET", "xxxx-xxxx-xxxx-xxxx")
    })