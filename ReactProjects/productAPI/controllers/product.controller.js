var dbcon = require("../config/db_connection")

var connection = dbcon.getConnection();

connection.connect();

var express = require("express");

var router = express.Router();
