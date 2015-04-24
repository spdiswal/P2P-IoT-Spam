﻿/// <reference path="../Scripts/typings/jasmine/jasmine.d.ts" />

import Address = require("../../P2P/Core/Address");
import ChordRoutingStrategy = require("../../P2P/Strategies/ChordRoutingStrategy");
import FakeGuidGenerator = require("../Fakes/FakeGuidGenerator");
import Message = require("../../P2P/Core/Message");
import MessageType = require("../../P2P.Broker/Enumerations/MessageType");
import Subscription = require("../../P2P/Core/Subscription");
import IAddress = require("../../P2P/Interfaces/IAddress");

// :::: TEST LIST ::::
// TODO Published messages must be stored in the system.
// TODO Published messages are discarded after exceeding their lifetime.
// TODO Upon subscribing, the peer receives all stored messages that match the subscription.
// TODO When subscribing, the peer receives all published messages that match the subscription.
// TODO When subscribing, the peer only receives filtered messages.
// TODO A peer can subscribe to a topic defined by TContents.
// TODO When unsubscribed, the peer does not receive any messages that match the old subscription. 
// :::::::::::::::::::

