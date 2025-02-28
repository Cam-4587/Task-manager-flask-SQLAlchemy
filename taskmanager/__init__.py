#Import necessary libraries
import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy


if os.path.exists("env.py"):
    import env # noqa
    

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite3"
db = SQLAlchemy(app)


from taskmanager import routes # noqa