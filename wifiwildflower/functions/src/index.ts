import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

const db = admin.database();

export const aggregatePoints = functions.database
  .ref("/users/{userId}")
  .onWrite(async () => {
    const usersSnapshot = await db.ref("/users").once("value");
    let totalPoints = 0;

    usersSnapshot.forEach((childSnapshot) => {
      const points = Number(childSnapshot.val().points);
      if (!isNaN(points)) {
        totalPoints += points;
      }
    });

    return db.ref("/totals/totalPoints").set(totalPoints);
  });
