console.log("Is this thing on?")

//notes on sharing code between classes
//there are "parent classes" that contain information that would then be used in multiple smaller classes

//create a parent class
//create children classes

class NotificationSender {
    constructor(status) {
    this.status = status;
}

sendNotification(Notification) {
    console.log("Sending: " + notification);
}

findUserWithStatus(status) {
    let users = getUsers(status);
    return users;
    }
}

class PromotionSender extends NotificationSender{
    constructor(status) {
        super(status);
    }

    calculateDiscount(status) {
        if (status === "GOLD"){
            return .3;
        } else if (status === "Silver") {
            return .15;
        }
        return 0;
    }
}

class CollectionSender extends NotificationSender {
    constructor (){
        super(this.status);
    }

    calculateFee(status) {
        if (status === "OVERDUE") {
            return 10;
        } else if (status === "DELINQUENT") {
            return 25;
        }
        return 5;
    }
}