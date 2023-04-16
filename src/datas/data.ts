import { Data } from "../types/Data"

const data: Data = {
  "stats": {
    "helpersCount": 398,
    "helpersJoinedCount": 79,
    "helpersInvitedCount": 319,
    "mostEngagedHelpers": [
      {
        "firstname": "Célia",
        "lastname": "ARDAENS",
        "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ObjdFe-liQLceuYsSX_mz",
        "relationsCount": 2,
        "challengesCount": 7,
        "referralsCount": 0
      },
      {
        "firstname": "Aubane",
        "lastname": "RINGOT",
        "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/bKUOW849fhG9vjbAlyraO",
        "relationsCount": 2,
        "challengesCount": 6,
        "referralsCount": 0
      },
      {
        "firstname": "Camille",
        "lastname": "Rouzé",
        "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/PjILhZhfFttimvkz1hYrw",
        "relationsCount": 2,
        "challengesCount": 5,
        "referralsCount": 0
      },
      {
        "firstname": "Adélie",
        "lastname": "KOSMALSKI",
        "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/c9Etde9Q5xYMuJfpAFzqt",
        "relationsCount": 0,
        "challengesCount": 9,
        "referralsCount": 0
      }
    ],
    "helpersRepartition": {
      "highly-active": 0,
      "active": 57,
      "overbooked": 0,
      "observer": 4,
      "sleeper": 17,
      "invited": 320
    }
  },
  "tags": [
    { "id": 128, "name": "iso-lille---accompagnement-2022" }
  ],
  "criteria": [
    {
      "id": 160,
      "type": "singleSelect",
      "label": "Vous êtes actuellement en",
      "weight": "strong",
      "options": [
        { "key": "0", "value": "Bachelor de Manager en Optique" },
        { "key": "3", "value": "Licence Professionnelle d'Optique" },
        { "key": "2", "value": "BTS Opticien Lunetier en temps plein" },
        { "key": "1", "value": "BTS Opticien Lunetier en alternance" },
        { "key": "4", "value": "Prépa Optique en temps plein" },
        { "key": "5", "value": "Prépa Optique en alternance" }
      ]
    },
    {
      "id": 139,
      "type": "singleSelect",
      "label": "L’année avant d’intégrer l’ISO, vous étiez",
      "weight": "medium",
      "options": [
        { "key": "3", "value": "Lycéen(ne)" },
        { "key": "2", "value": "Etudiant(e)" },
        { "key": "1", "value": "Vie active" },
        { "key": "0", "value": "Etudiant(e) BTS OL" }
      ]
    }
  ],
  "helpers": [
    {
      "helperId": 151287,
      "firstname": "Célia",
      "lastname": "ARDAENS",
      "email": "celiaardaens@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ObjdFe-liQLceuYsSX_mz",
      "status": "active",
      "relations": 2,
      "points": 9700,
      "joinedOn": "2022-10-19T10:27:12.024Z",
      "lastSeen": "2023-02-01T10:00:20.304Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "0", "value": "Etudiant(e) BTS OL" }
      ],
      "score": 11,
      "activeRelationsCount": 2,
      "challengesCount": 7,
      "referralsCount": 0
    },
    {
      "helperId": 151618,
      "firstname": "Aubane",
      "lastname": "RINGOT",
      "email": "aubane.ringot@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/bKUOW849fhG9vjbAlyraO",
      "status": "active",
      "relations": 3,
      "points": 4700,
      "joinedOn": "2023-01-25T21:26:48.604Z",
      "lastSeen": "2023-03-21T13:22:05.849Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "5",
          "value": "Prépa Optique en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 10,
      "activeRelationsCount": 2,
      "challengesCount": 6,
      "referralsCount": 0
    },
    {
      "helperId": 126327,
      "firstname": "Camille",
      "lastname": "Rouzé",
      "email": "camille.rouze@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/PjILhZhfFttimvkz1hYrw",
      "status": "active",
      "relations": 2,
      "points": 10675,
      "joinedOn": "2023-01-24T16:20:55.840Z",
      "lastSeen": "2023-04-09T08:11:55.248Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "0",
          "value": "Bachelor de Manager en Optique"
        },
        { "criteriaId": 139, "answerKey": "0", "value": "Etudiant(e) BTS OL" }
      ],
      "score": 9,
      "activeRelationsCount": 2,
      "challengesCount": 5,
      "referralsCount": 0
    },
    {
      "helperId": 151521,
      "firstname": "Adélie",
      "lastname": "KOSMALSKI",
      "email": "adelie.lulu@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/c9Etde9Q5xYMuJfpAFzqt",
      "status": "active",
      "relations": 1,
      "points": 2850,
      "joinedOn": "2023-01-24T14:12:32.325Z",
      "lastSeen": "2023-04-03T07:35:20.234Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 9,
      "activeRelationsCount": 0,
      "challengesCount": 9,
      "referralsCount": 0
    },
    {
      "helperId": 151377,
      "firstname": "Jade",
      "lastname": "COUSSEMENT",
      "email": "jade.coussement@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/1-epmmZscR6BBeNBS1PNo",
      "status": "active",
      "relations": 3,
      "points": 4700,
      "joinedOn": "2023-01-19T14:09:48.680Z",
      "lastSeen": "2023-03-23T11:12:29.545Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "5",
          "value": "Prépa Optique en alternance"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 9,
      "activeRelationsCount": 2,
      "challengesCount": 5,
      "referralsCount": 0
    },
    {
      "helperId": 151430,
      "firstname": "Marine",
      "lastname": "DROUET",
      "email": "mar.drouet@yahoo.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/FKEwmF44ligkSFqtDA1Pj",
      "status": "active",
      "relations": 3,
      "points": 3600,
      "joinedOn": "2023-01-17T07:59:06.919Z",
      "lastSeen": "2023-04-13T11:31:56.239Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "1", "value": "Vie active" }
      ],
      "score": 9,
      "activeRelationsCount": 2,
      "challengesCount": 5,
      "referralsCount": 0
    },
    {
      "helperId": 151447,
      "firstname": "Astrid",
      "lastname": "EECKHOUT",
      "email": "astrid@eeckhout.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/QQZsst-xG3hjDU-BN0P8U",
      "status": "active",
      "relations": 2,
      "points": 700,
      "joinedOn": "2023-01-09T10:01:54.247Z",
      "lastSeen": "2023-04-04T21:30:10.949Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 9,
      "activeRelationsCount": 2,
      "challengesCount": 5,
      "referralsCount": 0
    },
    {
      "helperId": 151477,
      "firstname": "Julien",
      "lastname": "GRADEL",
      "email": "j.gradel0@laposte.net",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/SDykHFBRWrfdskcfSwIYK",
      "status": "sleeper",
      "relations": 3,
      "points": 900,
      "joinedOn": "2022-11-25T11:11:37.835Z",
      "lastSeen": "2023-03-29T09:54:43.897Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "1", "value": "Vie active" }
      ],
      "score": 9,
      "activeRelationsCount": 2,
      "challengesCount": 5,
      "referralsCount": 0
    },
    {
      "helperId": 151459,
      "firstname": "Isaline",
      "lastname": "FLAMENT",
      "email": "flament.isaline@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/NxHIcepjDFrnnHpoCym1G",
      "status": "active",
      "relations": 3,
      "points": 1100,
      "joinedOn": "2022-10-25T13:03:59.586Z",
      "lastSeen": "2023-03-12T09:41:13.025Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 9,
      "activeRelationsCount": 2,
      "challengesCount": 5,
      "referralsCount": 0
    },
    {
      "helperId": 151568,
      "firstname": "Lena",
      "lastname": "M'BASSI",
      "email": "lenanoah@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.amazonaws.com/AaRxS05TYOZKdqUsX-ZUu",
      "status": "active",
      "relations": 4,
      "points": 2000,
      "joinedOn": "2022-10-19T10:32:57.615Z",
      "lastSeen": "2023-04-03T15:21:26.240Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 9,
      "activeRelationsCount": 3,
      "challengesCount": 3,
      "referralsCount": 0
    },
    {
      "helperId": 151636,
      "firstname": "Margaux",
      "lastname": "SAVARY",
      "email": "margsavary@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/fhqneRy_tExBE3t-6XBYq",
      "status": "sleeper",
      "relations": 1,
      "points": 1900,
      "joinedOn": "2022-11-15T13:58:04.479Z",
      "lastSeen": "2023-03-18T10:08:03.343Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 7,
      "activeRelationsCount": 0,
      "challengesCount": 7,
      "referralsCount": 0
    },
    {
      "helperId": 151597,
      "firstname": "Lise",
      "lastname": "PERRET",
      "email": "perretlise@orange.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Ey0MwOi_1-zaQEyl-aqrG",
      "status": "active",
      "relations": 3,
      "points": 9500,
      "joinedOn": "2022-10-20T09:47:54.362Z",
      "lastSeen": "2023-03-09T15:36:30.880Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 7,
      "activeRelationsCount": 2,
      "challengesCount": 3,
      "referralsCount": 0
    },
    {
      "helperId": 151476,
      "firstname": "Ines",
      "lastname": "GOSSE",
      "email": "ines.gosse2004@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ifYUefROE6bObCXpQna9f",
      "status": "active",
      "relations": 1,
      "points": 500,
      "joinedOn": "2023-02-03T14:53:18.634Z",
      "lastSeen": "2023-02-07T20:00:05.644Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "5",
          "value": "Prépa Optique en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 6,
      "activeRelationsCount": 1,
      "challengesCount": 4,
      "referralsCount": 0
    },
    {
      "helperId": 151550,
      "firstname": "Marie",
      "lastname": "LEMOINE",
      "email": "marie.lemoine.31052003@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/u1HimBBwqcsyXCVTtVqDP",
      "status": "active",
      "relations": 1,
      "points": 2625,
      "joinedOn": "2023-01-23T10:05:06.542Z",
      "lastSeen": "2023-03-21T16:53:41.618Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 6,
      "activeRelationsCount": 0,
      "challengesCount": 6,
      "referralsCount": 0
    },
    {
      "helperId": 151504,
      "firstname": "Zélie",
      "lastname": "JAKOBEK",
      "email": "z.jakobek@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.amazonaws.com/7JWeJokO2pliY4VZVKBBQ",
      "status": "active",
      "relations": 1,
      "points": 50,
      "joinedOn": "2023-01-23T10:03:55.733Z",
      "lastSeen": "2023-04-07T08:56:07.981Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 6,
      "activeRelationsCount": 0,
      "challengesCount": 6,
      "referralsCount": 0
    },
    {
      "helperId": 151532,
      "firstname": "Anaïs",
      "lastname": "LEBON",
      "email": "anais.lebon314@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.amazonaws.com/0VVAs5Fnw8iBMoqEqg_sq",
      "status": "active",
      "relations": 3,
      "points": 3300,
      "joinedOn": "2023-01-05T11:53:18.942Z",
      "lastSeen": "2023-03-22T19:06:13.269Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "5",
          "value": "Prépa Optique en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 6,
      "activeRelationsCount": 2,
      "challengesCount": 2,
      "referralsCount": 0
    },
    {
      "helperId": 151391,
      "firstname": "Agathe",
      "lastname": "DECALONNE",
      "email": "agathe.decalonne@free.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/AKWTfDApEgS4Yt27XRQvj",
      "status": "active",
      "relations": 2,
      "points": 1300,
      "joinedOn": "2022-11-18T08:33:23.408Z",
      "lastSeen": "2023-02-08T17:17:15.769Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "5",
          "value": "Prépa Optique en alternance"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 6,
      "activeRelationsCount": 2,
      "challengesCount": 2,
      "referralsCount": 0
    },
    {
      "helperId": 151482,
      "firstname": "Justine",
      "lastname": "GUELTON",
      "email": "justine.62122@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/x6VENlK_GEHYzWS_n0Naz",
      "status": "sleeper",
      "relations": 2,
      "points": 100,
      "joinedOn": "2022-11-15T13:58:05.861Z",
      "lastSeen": "2023-04-03T20:28:12.136Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 6,
      "activeRelationsCount": 1,
      "challengesCount": 4,
      "referralsCount": 0
    },
    {
      "helperId": 151475,
      "firstname": "Axel",
      "lastname": "GORGUET",
      "email": "gorguet.axel@orange.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/1rBqA_EkPAknsfSqjCl_i",
      "status": "active",
      "relations": 4,
      "points": 2400,
      "joinedOn": "2022-10-21T08:48:46.495Z",
      "lastSeen": "2023-02-09T08:33:42.288Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "5",
          "value": "Prépa Optique en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 6,
      "activeRelationsCount": 3,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151505,
      "firstname": "Hélène",
      "lastname": "JANSSENS",
      "email": "helene.janssens131204@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/RbmqwFj4QbCLDiQm-L37V",
      "status": "sleeper",
      "relations": 1,
      "points": 2500,
      "joinedOn": "2022-10-20T14:13:08.133Z",
      "lastSeen": "2023-01-24T08:37:14.073Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 6,
      "activeRelationsCount": 1,
      "challengesCount": 4,
      "referralsCount": 0
    },
    {
      "helperId": 151580,
      "firstname": "Océane",
      "lastname": "NAESSENS",
      "email": "oceanenaessens@hotmail.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/c8Mx8o8Efh_Ir5W5zhJ8l",
      "status": "active",
      "relations": 2,
      "points": 700,
      "joinedOn": "2022-10-19T10:20:07.141Z",
      "lastSeen": "2023-04-10T08:01:21.626Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 6,
      "activeRelationsCount": 2,
      "challengesCount": 2,
      "referralsCount": 0
    },
    {
      "helperId": 151628,
      "firstname": "Margaux",
      "lastname": "ROYER",
      "email": "margauxroyer59@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/UWRdCwDIXzT7nN1xwblCZ",
      "status": "invited",
      "relations": 0,
      "points": 3400,
      "joinedOn": null,
      "lastSeen": "2023-03-21T17:22:44.233Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 6,
      "activeRelationsCount": 0,
      "challengesCount": 6,
      "referralsCount": 0
    },
    {
      "helperId": 151383,
      "firstname": "Clara",
      "lastname": "DABONNEVILLE",
      "email": "dabonnevilleclara1@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/y96U92qsEehtffGSxU9vO",
      "status": "active",
      "relations": 3,
      "points": 4725,
      "joinedOn": "2022-10-25T18:00:48.932Z",
      "lastSeen": "2023-04-05T14:33:17.879Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 5,
      "activeRelationsCount": 2,
      "challengesCount": 1,
      "referralsCount": 0
    },
    {
      "helperId": 151488,
      "firstname": "Cécillia",
      "lastname": "HENAULT",
      "email": "cecillia.henault@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/4bvnx1dUOVcRdT2Y4Dx8J",
      "status": "active",
      "relations": 2,
      "points": 1300,
      "joinedOn": "2022-10-24T17:22:17.771Z",
      "lastSeen": "2023-03-16T16:25:33.914Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 5,
      "activeRelationsCount": 2,
      "challengesCount": 1,
      "referralsCount": 0
    },
    {
      "helperId": 151536,
      "firstname": "Emilie",
      "lastname": "LECOCQ",
      "email": "emilielecocq59@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/tKJ0XI76f3-Ez_dELZdbX",
      "status": "active",
      "relations": 2,
      "points": 400,
      "joinedOn": "2023-02-15T12:03:08.755Z",
      "lastSeen": "2023-03-05T20:04:49.244Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "1", "value": "Vie active" }
      ],
      "score": 4,
      "activeRelationsCount": 2,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151581,
      "firstname": "Ambre",
      "lastname": "NAIL",
      "email": "ambre76899@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/9tpg3DUdEVKIa5lLf5idb",
      "status": "active",
      "relations": 3,
      "points": 400,
      "joinedOn": "2023-01-26T10:46:14.990Z",
      "lastSeen": "2023-04-05T11:16:55.887Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "5",
          "value": "Prépa Optique en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 4,
      "activeRelationsCount": 1,
      "challengesCount": 2,
      "referralsCount": 0
    },
    {
      "helperId": 151425,
      "firstname": "Colette",
      "lastname": "DJIEMBY MATSANGA",
      "email": "colettedjiemby851@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/37SiK-VYh1RnqCrXc2MuH",
      "status": "active",
      "relations": 2,
      "points": 1000,
      "joinedOn": "2023-01-23T20:21:29.525Z",
      "lastSeen": "2023-03-29T13:39:40.299Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 4,
      "activeRelationsCount": 2,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151458,
      "firstname": "Flavie",
      "lastname": "FLAMENT",
      "email": "flamentflavie15@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/RRZ1jqA1XA3lJ1mxcaxMo",
      "status": "active",
      "relations": 3,
      "points": 1000,
      "joinedOn": "2023-01-03T10:40:31.248Z",
      "lastSeen": "2023-03-20T15:20:34.891Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 4,
      "activeRelationsCount": 2,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151503,
      "firstname": "Adèle",
      "lastname": "JACQUES",
      "email": "adele.jacques@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/b4Y6fNTf6cs2GE940JZ1e",
      "status": "active",
      "relations": 1,
      "points": 3650,
      "joinedOn": "2022-11-10T16:08:02.827Z",
      "lastSeen": "2023-03-30T17:15:41.867Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 4,
      "activeRelationsCount": 1,
      "challengesCount": 2,
      "referralsCount": 0
    },
    {
      "helperId": 151321,
      "firstname": "Félicie",
      "lastname": "BOCQUILLON",
      "email": "felicie.bocquillon02@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/PKI1Vbx6sOn50z2ZXTiRu",
      "status": "active",
      "relations": 2,
      "points": 14500,
      "joinedOn": "2022-10-20T09:50:46.067Z",
      "lastSeen": "2023-04-10T14:22:47.558Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 4,
      "activeRelationsCount": 1,
      "challengesCount": 2,
      "referralsCount": 0
    },
    {
      "helperId": 151533,
      "firstname": "Jade",
      "lastname": "LEBRUN",
      "email": "jade.lebrun1509@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/_fM3GSIYMfB9wNgp19rBn",
      "status": "active",
      "relations": 4,
      "points": 400,
      "joinedOn": "2022-10-19T09:59:53.899Z",
      "lastSeen": "2023-03-07T07:27:31.614Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 4,
      "activeRelationsCount": 2,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151387,
      "firstname": "Iléane",
      "lastname": "DAVID",
      "email": "ileane.david@orange.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/zjK5NYjo6aQUwNrghDwnp",
      "status": "active",
      "relations": 1,
      "points": 12500,
      "joinedOn": "2022-10-19T08:18:50.602Z",
      "lastSeen": "2023-04-10T20:37:13.622Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 4,
      "activeRelationsCount": 1,
      "challengesCount": 2,
      "referralsCount": 0
    },
    {
      "helperId": 151480,
      "firstname": "Molly",
      "lastname": "GREUET",
      "email": "molly.greuet@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/wZHX9QwlY3u5cl6I7lS_h",
      "status": "invited",
      "relations": 0,
      "points": 7400,
      "joinedOn": null,
      "lastSeen": "2023-03-02T06:22:56.605Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 4,
      "activeRelationsCount": 0,
      "challengesCount": 4,
      "referralsCount": 0
    },
    {
      "helperId": 151578,
      "firstname": "Aïcha",
      "lastname": "Moscatiello",
      "email": "aicha.moscatiello@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/tSeMDaCzcxxqm1URN_xrw",
      "status": "invited",
      "relations": 0,
      "points": 3900,
      "joinedOn": null,
      "lastSeen": "2023-02-26T10:51:18.532Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "0", "value": "Etudiant(e) BTS OL" }
      ],
      "score": 4,
      "activeRelationsCount": 0,
      "challengesCount": 4,
      "referralsCount": 0
    },
    {
      "helperId": 151306,
      "firstname": "Shana",
      "lastname": "BENHAMMADI",
      "email": "benhammadi.shana@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/XEhBvd7OZoPqEbiUzu9tC",
      "status": "sleeper",
      "relations": 1,
      "points": 300,
      "joinedOn": "2023-02-19T17:43:13.199Z",
      "lastSeen": "2023-03-21T09:43:57.126Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 3,
      "activeRelationsCount": 0,
      "challengesCount": 3,
      "referralsCount": 0
    },
    {
      "helperId": 151334,
      "firstname": "Charlotte",
      "lastname": "BOUSARD",
      "email": "charlottebousard@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.amazonaws.com/WxBALXNdbu4nNdlXdteDr",
      "status": "active",
      "relations": 2,
      "points": 300,
      "joinedOn": "2022-11-20T13:12:13.245Z",
      "lastSeen": "2023-02-13T12:13:28.130Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 3,
      "activeRelationsCount": 0,
      "challengesCount": 3,
      "referralsCount": 0
    },
    {
      "helperId": 151434,
      "firstname": "Elise",
      "lastname": "DUCHEMIN",
      "email": "elise.duchemin26@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/BNMk5U1wNjEVk_87n0X0C",
      "status": "active",
      "relations": 1,
      "points": 2200,
      "joinedOn": "2022-11-10T16:19:26.568Z",
      "lastSeen": "2023-03-27T09:15:38.325Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 3,
      "activeRelationsCount": 1,
      "challengesCount": 1,
      "referralsCount": 0
    },
    {
      "helperId": 151331,
      "firstname": "Camille",
      "lastname": "BOULNOIS",
      "email": "camille.boulnois18@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/QLWEvXWDLSfZWsF4Lw-vB",
      "status": "active",
      "relations": 1,
      "points": 2600,
      "joinedOn": "2022-11-07T11:05:01.410Z",
      "lastSeen": "2023-02-11T16:08:17.644Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 3,
      "activeRelationsCount": 1,
      "challengesCount": 1,
      "referralsCount": 0
    },
    {
      "helperId": 151380,
      "firstname": "Garance",
      "lastname": "CREPIN",
      "email": "garance.crepin@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/N71uJuTE0kXLiwOByEjHO",
      "status": "active",
      "relations": 1,
      "points": 6200,
      "joinedOn": "2022-10-19T08:21:05.603Z",
      "lastSeen": "2023-03-23T12:51:21.086Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 3,
      "activeRelationsCount": 0,
      "challengesCount": 3,
      "referralsCount": 0
    },
    {
      "helperId": 151547,
      "firstname": "Jules",
      "lastname": "LEMAIRE",
      "email": "Julesmaximilienlemaire@hotmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/uRTtP3l6yVl4_MyJdnjhk",
      "status": "observer",
      "relations": 0,
      "points": 1600,
      "joinedOn": "2023-01-30T12:34:20.057Z",
      "lastSeen": "2023-04-04T10:47:09.247Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "3",
          "value": "Licence Professionnelle d'Optique"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 2,
      "activeRelationsCount": 0,
      "challengesCount": 2,
      "referralsCount": 0
    },
    {
      "helperId": 151614,
      "firstname": "Marion",
      "lastname": "RENOULT",
      "email": "marion.renoult0402@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/9-bdNZKDaB4m_pIK6gmXp",
      "status": "active",
      "relations": 1,
      "points": 500,
      "joinedOn": "2023-01-05T15:06:44.545Z",
      "lastSeen": "2023-01-26T08:28:30.724Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "5",
          "value": "Prépa Optique en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 2,
      "activeRelationsCount": 1,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151400,
      "firstname": "Lolita",
      "lastname": "DELATTRE",
      "email": "loli62340@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/wuPqvWHdaWMc9sNoMqitK",
      "status": "sleeper",
      "relations": 1,
      "points": 150,
      "joinedOn": "2023-01-05T14:06:41.370Z",
      "lastSeen": "2023-03-31T08:09:52.930Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "5",
          "value": "Prépa Optique en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 2,
      "activeRelationsCount": 0,
      "challengesCount": 2,
      "referralsCount": 0
    },
    {
      "helperId": 151542,
      "firstname": "Clara",
      "lastname": "LEFEVRE",
      "email": "clara.lefevre59@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.amazonaws.com/yMxjzmCfEHzAn87Ch2cgA",
      "status": "active",
      "relations": 2,
      "points": 200,
      "joinedOn": "2023-01-03T10:41:08.234Z",
      "lastSeen": "2023-02-06T13:16:33.165Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 2,
      "activeRelationsCount": 1,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151643,
      "firstname": "Mathilde",
      "lastname": "SORIAUX",
      "email": "mathilde.soriaux59@hotmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/v5-69yKiJ728-CeFKATiR",
      "status": "active",
      "relations": 1,
      "points": 300,
      "joinedOn": "2022-12-12T12:13:23.255Z",
      "lastSeen": "2023-01-29T16:39:09.171Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 2,
      "activeRelationsCount": 1,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151546,
      "firstname": "Erwan",
      "lastname": "LEMAHIEU",
      "email": "erwanlemahieu08@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/4uHGJD0Ba9SnAvSxHGFSz",
      "status": "active",
      "relations": 2,
      "points": 200,
      "joinedOn": "2022-12-05T23:34:20.904Z",
      "lastSeen": "2023-03-24T10:00:45.330Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "5",
          "value": "Prépa Optique en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 2,
      "activeRelationsCount": 1,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151549,
      "firstname": "Louis",
      "lastname": "LEMAIRE",
      "email": "louislemaire62210@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/5oc33rLEVZ_vwEaEUGbKX",
      "status": "active",
      "relations": 1,
      "points": 6000,
      "joinedOn": "2022-12-01T12:50:42.487Z",
      "lastSeen": "2023-03-19T22:35:07.520Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 2,
      "activeRelationsCount": 1,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151444,
      "firstname": "Ninon",
      "lastname": "DUQUENNE",
      "email": "ninon.duquenne@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/vHv-yAR2ydoRhtEWsVGK5",
      "status": "active",
      "relations": 1,
      "points": 1000,
      "joinedOn": "2022-11-28T12:06:13.962Z",
      "lastSeen": "2023-03-22T11:23:44.768Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 2,
      "activeRelationsCount": 1,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151279,
      "firstname": "Célia",
      "lastname": "AIT KARROUM",
      "email": "aitkarroum.celia@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/1066YqxPzxFBQ94h0o_Wi",
      "status": "active",
      "relations": 1,
      "points": 8200,
      "joinedOn": "2022-11-25T13:25:34.873Z",
      "lastSeen": "2023-04-06T10:58:25.254Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "0", "value": "Etudiant(e) BTS OL" }
      ],
      "score": 2,
      "activeRelationsCount": 1,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151570,
      "firstname": "Valentin",
      "lastname": "MERESSE",
      "email": "valentin.meresse@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/sR8PIJYOmamLcjwZSWE94",
      "status": "active",
      "relations": 1,
      "points": 3400,
      "joinedOn": "2022-11-25T11:03:29.764Z",
      "lastSeen": "2022-12-14T19:05:32.927Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 2,
      "activeRelationsCount": 1,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151616,
      "firstname": "Damien",
      "lastname": "RICHARD",
      "email": "richarddamien310@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/JdHWlgb276LeJf1frwZLW",
      "status": "active",
      "relations": 1,
      "points": 200,
      "joinedOn": "2022-11-17T14:36:28.199Z",
      "lastSeen": "2023-03-13T11:11:38.851Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 2,
      "activeRelationsCount": 1,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151557,
      "firstname": "Marie",
      "lastname": "LIVEMONT",
      "email": "marie.livemont13@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/jgwWrGVizWiKy036FKdG-",
      "status": "active",
      "relations": 2,
      "points": 200,
      "joinedOn": "2022-11-17T11:46:43.647Z",
      "lastSeen": "2022-12-17T08:03:03.771Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "5",
          "value": "Prépa Optique en alternance"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 2,
      "activeRelationsCount": 1,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151396,
      "firstname": "Lauryne",
      "lastname": "DELAHOUSSE",
      "email": "lauryne.delahousse@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/vh3SoE91YP51aIzjzDe1-",
      "status": "active",
      "relations": 2,
      "points": 200,
      "joinedOn": "2022-10-20T16:43:21.144Z",
      "lastSeen": "2022-12-30T14:00:15.862Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 2,
      "activeRelationsCount": 1,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151654,
      "firstname": "Séléna",
      "lastname": "VANDAMME",
      "email": "selena.vandamme2004@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/UBmfwJVXq2YkHxSgLDRzC",
      "status": "active",
      "relations": 2,
      "points": 200,
      "joinedOn": "2022-10-20T16:18:43.505Z",
      "lastSeen": "2023-03-14T15:14:26.108Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 2,
      "activeRelationsCount": 0,
      "challengesCount": 2,
      "referralsCount": 0
    },
    {
      "helperId": 151463,
      "firstname": "Juliette",
      "lastname": "Fusil",
      "email": "rosita.fusil@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/SClRWg4Vpu75mVn5GkcAc",
      "status": "active",
      "relations": 1,
      "points": 200,
      "joinedOn": "2022-10-20T14:31:29.530Z",
      "lastSeen": "2022-12-13T10:58:40.515Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 2,
      "activeRelationsCount": 1,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151665,
      "firstname": "Sophie",
      "lastname": "WARLOP",
      "email": "sophiewarlop17@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/FavatwqeSYhTBBZnGwLpW",
      "status": "active",
      "relations": 1,
      "points": 5500,
      "joinedOn": "2022-10-20T09:50:44.836Z",
      "lastSeen": "2023-02-04T19:36:29.834Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 2,
      "activeRelationsCount": 1,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151435,
      "firstname": "Soline",
      "lastname": "DUCROCQ",
      "email": "soline.ducrocq@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/im7GpvzZwnbh6CSwxv8ar",
      "status": "active",
      "relations": 1,
      "points": 200,
      "joinedOn": "2022-10-19T13:16:40.296Z",
      "lastSeen": "2023-02-03T12:28:52.599Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 2,
      "activeRelationsCount": 1,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151604,
      "firstname": "Oriane",
      "lastname": "Porquet",
      "email": "orianeporqueto@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/5eLuuuHLSiD9690h0T8qn",
      "status": "active",
      "relations": 1,
      "points": 200,
      "joinedOn": "2022-10-19T11:32:12.737Z",
      "lastSeen": "2023-03-11T01:10:32.101Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 2,
      "activeRelationsCount": 1,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151492,
      "firstname": "Jérémie",
      "lastname": "HIELSCHER",
      "email": "jeremie.hi59@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/YNiMs01xhQ9d71ZW2vumW",
      "status": "active",
      "relations": 1,
      "points": 200,
      "joinedOn": "2022-10-19T10:33:26.966Z",
      "lastSeen": "2023-01-10T20:32:39.469Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 2,
      "activeRelationsCount": 1,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151338,
      "firstname": "Rebecca",
      "lastname": "BREBION",
      "email": "rebeccabrebion@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Le73Px1CQS2dnbBGeJK1x",
      "status": "sleeper",
      "relations": 1,
      "points": 0,
      "joinedOn": "2023-04-03T17:33:22.757Z",
      "lastSeen": "2023-04-07T13:04:00.373Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 1,
      "activeRelationsCount": 0,
      "challengesCount": 1,
      "referralsCount": 0
    },
    {
      "helperId": 151389,
      "firstname": "Léa",
      "lastname": "DE WITTE",
      "email": "lea.dewitte@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/u8-wfHnCMdwZSbhNw35zp",
      "status": "active",
      "relations": 1,
      "points": 150,
      "joinedOn": "2022-11-17T13:18:11.025Z",
      "lastSeen": "2023-04-07T09:24:30.169Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "0", "value": "Etudiant(e) BTS OL" }
      ],
      "score": 1,
      "activeRelationsCount": 0,
      "challengesCount": 1,
      "referralsCount": 0
    },
    {
      "helperId": 151455,
      "firstname": "Esteban",
      "lastname": "FERNANDEZ MORALES",
      "email": "estindalo12@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/uaPTZnu2-p7wwzPbwLmiR",
      "status": "sleeper",
      "relations": 2,
      "points": 7900,
      "joinedOn": "2022-10-25T16:50:05.009Z",
      "lastSeen": "2023-04-02T19:00:14.096Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 1,
      "activeRelationsCount": 0,
      "challengesCount": 1,
      "referralsCount": 0
    },
    {
      "helperId": 151555,
      "firstname": "Eugénie",
      "lastname": "LIBBRECHT",
      "email": "eugenielib@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/BwRUmqWEv617yajPiGGhj",
      "status": "sleeper",
      "relations": 2,
      "points": 11700,
      "joinedOn": "2022-10-20T14:51:11.333Z",
      "lastSeen": "2023-02-28T11:55:26.022Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 1,
      "activeRelationsCount": 0,
      "challengesCount": 1,
      "referralsCount": 0
    },
    {
      "helperId": 151309,
      "firstname": "Mathieu",
      "lastname": "Bernard",
      "email": "mathieu.bernard2004@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/5CiUxJour9ed5sY342yVY",
      "status": "invited",
      "relations": 0,
      "points": 300,
      "joinedOn": null,
      "lastSeen": "2023-01-23T19:34:23.869Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 1,
      "activeRelationsCount": 0,
      "challengesCount": 1,
      "referralsCount": 0
    },
    {
      "helperId": 151343,
      "firstname": "romane",
      "lastname": "briffaut",
      "email": "romane.briffaut@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/VPEaUAvOGCCaBrvEJ3mdV",
      "status": "invited",
      "relations": 0,
      "points": 9300,
      "joinedOn": null,
      "lastSeen": "2023-02-10T12:16:44.808Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 1,
      "activeRelationsCount": 0,
      "challengesCount": 1,
      "referralsCount": 0
    },
    {
      "helperId": 151443,
      "firstname": "Florine",
      "lastname": "DUPONT",
      "email": "florine.dupont@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/JTVRTHLbt8Pzp5RD5FpXR",
      "status": "observer",
      "relations": 0,
      "points": 0,
      "joinedOn": "2023-03-21T09:45:36.026Z",
      "lastSeen": "2023-03-28T14:57:37.193Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151421,
      "firstname": "Jade",
      "lastname": "Devulder",
      "email": "jadedevulder59@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/MZqmsCT1yKF8X6HN2e2NP",
      "status": "active",
      "relations": 1,
      "points": 300,
      "joinedOn": "2023-01-05T15:29:49.325Z",
      "lastSeen": "2023-01-12T09:21:02.886Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "5",
          "value": "Prépa Optique en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151357,
      "firstname": "Eloise",
      "lastname": "Carpentier",
      "email": "eloise.carpentier1106@hotmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/b13qsgosC4WP5NsYXYJ9g",
      "status": "sleeper",
      "relations": 2,
      "points": 2300,
      "joinedOn": "2023-01-05T14:34:09.075Z",
      "lastSeen": "2023-01-05T16:02:45.626Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "5",
          "value": "Prépa Optique en alternance"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151327,
      "firstname": "Lucile",
      "lastname": "BONTE",
      "email": "lucilebo0802@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/3YJlFtu0z3l8whKoNy65F",
      "status": "active",
      "relations": 1,
      "points": 300,
      "joinedOn": "2023-01-05T13:59:57.149Z",
      "lastSeen": "2023-01-29T17:33:45.985Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "5",
          "value": "Prépa Optique en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151415,
      "firstname": "Margaux",
      "lastname": "DESCHEPPER",
      "email": "margauxdescheper59@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/2Wmyv-5SEH9HxT5n62dsR",
      "status": "sleeper",
      "relations": 1,
      "points": 300,
      "joinedOn": "2023-01-05T13:59:54.832Z",
      "lastSeen": "2023-01-27T09:46:49.223Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "5",
          "value": "Prépa Optique en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151319,
      "firstname": "CAMELIA",
      "lastname": "BLEUSET",
      "email": "camelia.bleuset@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/fByhdmtcybf4jJnQgcyUA",
      "status": "active",
      "relations": 1,
      "points": 0,
      "joinedOn": "2023-01-05T13:31:05.991Z",
      "lastSeen": "2023-01-05T13:32:01.897Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "0", "value": "Etudiant(e) BTS OL" }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151633,
      "firstname": "Audrey",
      "lastname": "SALOMON",
      "email": "audrey.salomon@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/YuUPsRZP8tCKUrK_WdoZJ",
      "status": "sleeper",
      "relations": 2,
      "points": 0,
      "joinedOn": "2022-11-24T15:41:32.211Z",
      "lastSeen": "2023-01-02T16:43:28.629Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "1", "value": "Vie active" }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 150563,
      "firstname": "Morgane",
      "lastname": "Budon",
      "email": "mbudon@isps.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/f9JyLEuIa5KQ_cU3TJb0K",
      "status": "active",
      "relations": 1,
      "points": 5000,
      "joinedOn": "2022-11-24T08:24:21.420Z",
      "lastSeen": "2023-03-06T05:05:51.829Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "0", "value": "Etudiant(e) BTS OL" }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151517,
      "firstname": "Lola",
      "lastname": "KOENIG",
      "email": "koeniglola755@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/fjj71UsNZaPBniQ4pebif",
      "status": "observer",
      "relations": 0,
      "points": 0,
      "joinedOn": "2022-11-18T07:12:25.981Z",
      "lastSeen": "2022-11-18T09:31:52.819Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151620,
      "firstname": "Claire",
      "lastname": "ROORYCK",
      "email": "claire.rooryck@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.amazonaws.com/_UX6ae69J4LTCxO4GPbuW",
      "status": "observer",
      "relations": 0,
      "points": 525,
      "joinedOn": "2022-11-17T19:01:12.844Z",
      "lastSeen": "2023-03-19T09:50:00.362Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "3",
          "value": "Licence Professionnelle d'Optique"
        },
        { "criteriaId": 139, "answerKey": "0", "value": "Etudiant(e) BTS OL" }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151462,
      "firstname": "Marie",
      "lastname": "FRADE",
      "email": "marie.frade@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/R7wBPZF2QtmCfdZt3r-NP",
      "status": "sleeper",
      "relations": 1,
      "points": 100,
      "joinedOn": "2022-11-17T11:24:36.770Z",
      "lastSeen": "2023-04-07T18:28:52.397Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151626,
      "firstname": "Camille",
      "lastname": "ROUZE",
      "email": "Camillerouze@hotmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/osQnXHoDz9hFubMwbS_Ig",
      "status": "sleeper",
      "relations": 0,
      "points": 0,
      "joinedOn": "2022-11-15T09:14:18.463Z",
      "lastSeen": "2023-01-24T16:21:36.777Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151345,
      "firstname": "Anatole",
      "lastname": "BRY",
      "email": "anatolebry@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/--wpu3QqZB5VFhUfFbwvK",
      "status": "sleeper",
      "relations": 1,
      "points": 0,
      "joinedOn": "2022-11-08T20:37:45.304Z",
      "lastSeen": "2023-02-03T16:01:28.831Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151516,
      "firstname": "Monique",
      "lastname": "KLOUKPO ABRA",
      "email": "kloukpomonique@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/mPYtGm7S9GDcZCMmTZI5U",
      "status": "sleeper",
      "relations": 0,
      "points": 0,
      "joinedOn": "2022-10-20T09:48:19.199Z",
      "lastSeen": "2022-10-20T10:41:22.963Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151601,
      "firstname": "Flavie",
      "lastname": "POCQUET",
      "email": "pocquet.flavie@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/67x2NAc_olEdjN8duwN98",
      "status": "active",
      "relations": 1,
      "points": 0,
      "joinedOn": "2022-10-20T09:47:38.173Z",
      "lastSeen": "2022-11-05T18:17:28.351Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "2",
          "value": "BTS Opticien Lunetier en temps plein"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151454,
      "firstname": "Elsa",
      "lastname": "FAVOREL",
      "email": "lanageuse04@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/G21394L-dbCxZ7smzhMUP",
      "status": "active",
      "relations": 1,
      "points": 0,
      "joinedOn": "2022-10-19T19:31:27.268Z",
      "lastSeen": "2022-10-25T12:52:41.413Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151410,
      "firstname": "Elias",
      "lastname": "DELVAL",
      "email": "eliasdelval12@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/352_z4BDd7tw37uheJ1kR",
      "status": "sleeper",
      "relations": 1,
      "points": 0,
      "joinedOn": "2022-10-19T10:23:51.281Z",
      "lastSeen": "2023-01-24T05:49:51.263Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151330,
      "firstname": "Loriana",
      "lastname": "BOULANGE",
      "email": "loriana.boulange@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/hzPU9WR3Sxu8RHJclhpY9",
      "status": "active",
      "relations": 1,
      "points": 0,
      "joinedOn": "2022-10-19T10:09:29.024Z",
      "lastSeen": "2022-10-25T14:14:41.324Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "3", "value": "Lycéen(ne)" }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151612,
      "firstname": "Lena",
      "lastname": "RASSEL",
      "email": "lena.rassel13@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/liHPbVqG2udfjDOaBFVI-",
      "status": "active",
      "relations": 1,
      "points": 0,
      "joinedOn": "2022-10-19T10:04:05.575Z",
      "lastSeen": "2023-01-14T13:08:41.302Z",
      "tagIds": [],
      "userCriteria": [
        {
          "criteriaId": 160,
          "answerKey": "1",
          "value": "BTS Opticien Lunetier en alternance"
        },
        { "criteriaId": 139, "answerKey": "2", "value": "Etudiant(e)" }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151426,
      "firstname": "Clara",
      "lastname": "DOLIGER",
      "email": "claradoliger079@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/uiO5cnkHWEXJQvyoXFCA8",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151429,
      "firstname": "Eliot",
      "lastname": "DROUARD",
      "email": "Eliot.drouard@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/YiAfUMAON8oCfeGNuN6Ht",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151432,
      "firstname": "VINCENT",
      "lastname": "DUBOIS",
      "email": "vincent.dubois.officiel@hotmail.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/qQmEWJvakIf6gddqWwLC9",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151433,
      "firstname": "Jeanne",
      "lastname": "DUBUQUOY",
      "email": "jdubu0359@yahoo.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Ob82FHCvxS89UQ8splLkW",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151436,
      "firstname": "Léa",
      "lastname": "DUFLOT",
      "email": "Leaduflot@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/HXUu-y1l0ROuCzq5TkBwl",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151437,
      "firstname": "Florian",
      "lastname": "DUHOO",
      "email": "floduhoo@hotmail.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/p0a67lW3KjEep2rQkCY6s",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151438,
      "firstname": "Anne-Laure",
      "lastname": "DUMONT",
      "email": "annelauredmntetude@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/XdoxrNqeRJt-W6RZ5yfKp",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151440,
      "firstname": "Mathieu",
      "lastname": "DUMOULIN",
      "email": "mathieu.dumoulin@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/8_lKJZvCBXIdxPmkNGCCv",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151441,
      "firstname": "Mathéo",
      "lastname": "DUMOULIN",
      "email": "dmlmatheo@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/xWeV4xQhSI7_sugtzYHuv",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151442,
      "firstname": "Melvin",
      "lastname": "DUPONT",
      "email": "melvindup621@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/AyDfNq6574tskZ4z4MGoC",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151445,
      "firstname": "Flavie",
      "lastname": "DURAND",
      "email": "Flaviedurand1425@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/LnkZ-OMyzlOEpDaE4HORF",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151446,
      "firstname": "Sarah",
      "lastname": "DUVAUCHELLE",
      "email": "sarah.duvauchelle4@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/XzHVREfa_Vg0H7DgHR_8I",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151448,
      "firstname": "Firdaous",
      "lastname": "EL HADAD",
      "email": "firdaous-@hotmail.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/rOuXpBW27QAJ4Y1qcSI26",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151452,
      "firstname": "Mathis",
      "lastname": "EVRARD",
      "email": "evrardmathis7@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Dis0A-1aZfwFOVr8TN962",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151453,
      "firstname": "Waren",
      "lastname": "EYO NDONG DERVAL",
      "email": "waren.eyondongderval@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/DhGO73U6syuQ7uejalG_B",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151456,
      "firstname": "Baptiste",
      "lastname": "FERRARI",
      "email": "bapferrari@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/QGm_F6Q_NfzU7oaKjQ5Hh",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151457,
      "firstname": "Alexi",
      "lastname": "FINK",
      "email": "falexi2502@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/SV1Kam1clxwmrsFSTcXx9",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151460,
      "firstname": "Gaëtan",
      "lastname": "FOUBET",
      "email": "Foubetg62@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Ta-jsJ7Ipf_EI9g3A2VuF",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151461,
      "firstname": "Laura",
      "lastname": "FOURCROY",
      "email": "laura.fourcroy@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Pb3uzlkB_kCGBt2j1l4gz",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151465,
      "firstname": "Emma",
      "lastname": "GAMBIEZ",
      "email": "Emma.gambiez@orange.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/b6kMzHpXZQs-qgupmPIpE",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151467,
      "firstname": "Bruno",
      "lastname": "GARCIA",
      "email": "brunogcafr@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/iTWzn--Q95Yy9MPS0xfqV",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151468,
      "firstname": "Théo",
      "lastname": "GELÉ",
      "email": "Theogele1403@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Pl8brLDc-Pv3hAyueI0GK",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151469,
      "firstname": "KARL",
      "lastname": "GERYLOW",
      "email": "karl.gerylow@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/0H7bE8RMOSuuf9zaI2yOR",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151470,
      "firstname": "Leilani",
      "lastname": "GLODEK",
      "email": "leilani.glodek@yahoo.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/PfaXdWLcN9-kGETK3nrLx",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-01-10T15:08:25.189Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151473,
      "firstname": "Samuel",
      "lastname": "GONÇALVES",
      "email": "Samuel.goncalves954@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/v1-Up2Q3OrPJi46T6EFlP",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151478,
      "firstname": "Juliette",
      "lastname": "GRAMET",
      "email": "juliette.gramet@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/2ACDZeMyk5R5pE7QZftBt",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151479,
      "firstname": "Clémentine",
      "lastname": "GRATTEPANCHE",
      "email": "clementine.grattepanche@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/O34dfr88Ph_LMlxcpGlBW",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151481,
      "firstname": "Julien",
      "lastname": "GRZANKA",
      "email": "juliengrzanka2001@hotmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/rJyRngc7Ao03H3kF5atRP",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151485,
      "firstname": "Clara",
      "lastname": "HALIPRET",
      "email": "clarahalipret@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/b5WBNLPTYYu9aCXLshPmY",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151486,
      "firstname": "Louane",
      "lastname": "HARO",
      "email": "Louharo02100@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/MHpKivH8LnP0UAU7qmEoS",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151487,
      "firstname": "Manon",
      "lastname": "HAVART",
      "email": "havartmanon@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/jWHLHe6g3AHxEWZDRBbjp",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151490,
      "firstname": "Camille",
      "lastname": "HENRY",
      "email": "henry.camille@live.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/BIIGUtRWejI9G947PINC9",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151491,
      "firstname": "Florine",
      "lastname": "HESSE",
      "email": "florine0998@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/QdEiAqF0rNouMGg_Q_OPd",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151494,
      "firstname": "Gwendoline",
      "lastname": "HOLTON",
      "email": "Gwendoline.hlt@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/P-0vx0ouhCoKrhVAOuQe_",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151495,
      "firstname": "CELIA",
      "lastname": "HOOREWEGE",
      "email": "celia.h2o59@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/YzaVay0t5Dx5LNAnis68F",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-01-25T12:19:19.687Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151496,
      "firstname": "Marie",
      "lastname": "HOSTIEZ",
      "email": "marie.hostiez@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/dJdXpjRD0aM3-_ey4XfUC",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151497,
      "firstname": "Etienne",
      "lastname": "HOUCKE",
      "email": "etienne.houcke@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/_E_rJvdESAfKv4jnwtt7H",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151500,
      "firstname": "Antoine",
      "lastname": "HUMEZ",
      "email": "lapharmacie102@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Hj9FVN1Y46Mlw38qAHP4E",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151501,
      "firstname": "Zoé",
      "lastname": "HUON",
      "email": "Huonzoe@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/CssTmEGiyT3hBHXMOj4TQ",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151506,
      "firstname": "Antoine",
      "lastname": "JARONIAK",
      "email": "antoine.jaroniak@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/dQ7BMADu5MQpkhO-0-cOg",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-02-01T11:47:37.072Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151507,
      "firstname": "Teddy",
      "lastname": "JEROME",
      "email": "syn-gates02@live.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/zaKP_ZxNbu2aqfAs3IZ54",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151508,
      "firstname": "Théo",
      "lastname": "JEUKENS",
      "email": "theo.jeuk81@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/n9YJrWAne-X-1hL3-UKU2",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151509,
      "firstname": "Marion",
      "lastname": "JONQUET",
      "email": "marionjonquet@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/F-8gcfZyuGhNPOpwZ-lpK",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151511,
      "firstname": "Elouann",
      "lastname": "JOUGLET",
      "email": "elouannjouglet1706@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/h0BpQXas1k8QBThRN2JBL",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151513,
      "firstname": "Laëtitia",
      "lastname": "JUSTE",
      "email": "laetitia59.juste@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/P9bdeSZhu6zj1ylEBZyMm",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151514,
      "firstname": "Yazid",
      "lastname": "KASSOUS",
      "email": "yazid.kassous@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/BDHa4x4BmxH400LotYUKF",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151515,
      "firstname": "Léa",
      "lastname": "KATOSSY--KOULADJE",
      "email": "lh.katossy@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/VcYyahTo6Jv15Cuxh9GKW",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151518,
      "firstname": "Honorine",
      "lastname": "KOPEC",
      "email": "honorine.kopec@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/u3gHDhhYlq2CMYfYhhcio",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151519,
      "firstname": "Tanguy",
      "lastname": "KOPROWSKI",
      "email": "kops59255@hotmail.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/nD_rBfFXPguhZ4PyFWPyo",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151520,
      "firstname": "Isabeau",
      "lastname": "KOSLOFF",
      "email": "kosloff.isabeau@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/cGPFX8IKaB1nyqwk-EnjV",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151522,
      "firstname": "Pauline",
      "lastname": "KYNDT",
      "email": "paulinekyndt@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/uxw4ra30KOMvMmezXlhTm",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151524,
      "firstname": "Zayana",
      "lastname": "LANDY",
      "email": "zayana.landy@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/I4N8O7-p4of52VUg0nCvQ",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2023-01-03T12:16:32.747Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151526,
      "firstname": "PIERRE",
      "lastname": "LARUE",
      "email": "pierre.larue76@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/SeEgRPuEtuhdD6iIPNlHv",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151527,
      "firstname": "Ludivine",
      "lastname": "LASSALLE",
      "email": "Lassalleludivine@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/diZu9MYqspMQ6Azqf4aG9",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151529,
      "firstname": "Nolwenn",
      "lastname": "LAVENNE",
      "email": "Nolwenn62@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/XUEBArpxL84wnTG4E0t0_",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151530,
      "firstname": "ISMAEL",
      "lastname": "LAVISSE",
      "email": "lavisse.ismael@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/VOzWdxLoWavV1GdYY-VOt",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-01-10T14:03:58.142Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151531,
      "firstname": "Theo",
      "lastname": "LE",
      "email": "theole001@hotmail.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/WUAwPiciLozabPHtAymct",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151540,
      "firstname": "Lucas",
      "lastname": "LEFEBVRE",
      "email": "lucas.lefebvre2@orange.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/d-u08wI1TS-rFIgeDyXfD",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151543,
      "firstname": "Manon",
      "lastname": "LEGRAIN",
      "email": "manon.legrain20@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Q-vBCTaJPYJN1nsxSWvhc",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151544,
      "firstname": "Enola",
      "lastname": "LEGRAND",
      "email": "enola.legrand.el@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/C3kTnpAhcNyo10DIRJcjP",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-01-11T07:14:02.215Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151545,
      "firstname": "Héloïse",
      "lastname": "LELIEVRE",
      "email": "lelievre.heloise@orange.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/G4Plp8DqtAW-CIl-qR2-C",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151551,
      "firstname": "Margaux",
      "lastname": "LENIN",
      "email": "margaux.lenin@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/AT-AqTm0Ep0tLN4xEuLqv",
      "status": "invited",
      "relations": 0,
      "points": 150,
      "joinedOn": null,
      "lastSeen": "2022-05-10T07:21:48.579Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151554,
      "firstname": "Charlotte",
      "lastname": "LESAGE",
      "email": "Lesagecharlotte84@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/qM3LtKeGbuDKC6tI3o--v",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151558,
      "firstname": "Mégane",
      "lastname": "LUCHEZ",
      "email": "meganeluchez@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/CP_3OTTQS5gerl9MZgTAB",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151559,
      "firstname": "Charlène",
      "lastname": "MAHIEU",
      "email": "charlenemahieu08@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Rs8jo84y-b-qX4KLxiLdX",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151560,
      "firstname": "Cécilia",
      "lastname": "MAHIEUX",
      "email": "Cec.mahieux@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/7-10bIzNZnm9ReaD3Od4-",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151561,
      "firstname": "Marion",
      "lastname": "MALBRANQUE",
      "email": "mama62157@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/eJwS162xe3dVUBzuht16Q",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151562,
      "firstname": "Melissa",
      "lastname": "MARCEL",
      "email": "m.marcel20@laposte.net",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/zYJtTZc3qoun_J3618pOA",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151563,
      "firstname": "Manon",
      "lastname": "MARGOLLÉ",
      "email": "manon.margolle@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/he48Zc_T-KOawoWMgOt9f",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151564,
      "firstname": "LISE",
      "lastname": "MARIACOURT",
      "email": "lise.mrct@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/jpW3EBCX_K8yH95FI4kMd",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151565,
      "firstname": "Valentine",
      "lastname": "MARKWITZ",
      "email": "Vmarkwitz@laposte.net",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ZmElG4k9EwfnvY4S3i-pf",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151566,
      "firstname": "Clémence",
      "lastname": "MATTON",
      "email": "matton.clemence@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/SciYEOUzbHWFLyiLsgqi3",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151569,
      "firstname": "Joanna",
      "lastname": "MEILLIEZ",
      "email": "Joanna-meilliez@bbox.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/pqKzePUgySS3mjHR8m1He",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151571,
      "firstname": "Armand",
      "lastname": "MERTENS",
      "email": "armandmertens18@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/p32GX_8BSHUvgWy3QjX81",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151572,
      "firstname": "Inès",
      "lastname": "MIKOLASIC",
      "email": "Mikones80@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Yl3joSCQFTMuB_pkob3as",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151573,
      "firstname": "Naomie",
      "lastname": "MINET",
      "email": "naomieminet8@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/MS1zVRTnz9GaZ-1vA1ZM3",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151574,
      "firstname": "Charlotte",
      "lastname": "MOLO",
      "email": "Charlotte.molo62@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/zb9uCV2snUCuc-PiU9H-Z",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151576,
      "firstname": "Mévin",
      "lastname": "MONTUY",
      "email": "montuy.mevin@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/IFmWQnkopjHQ54z-FDwdZ",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151577,
      "firstname": "Margaux",
      "lastname": "MOREL",
      "email": "margauxmorel59@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ATajiWFz_G8EEl6NZ1OZR",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-01-11T11:42:01.818Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151579,
      "firstname": "Maria",
      "lastname": "MOUILLIERE",
      "email": "maria.mouilliere@laposte.net",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/-s1dxrknWSa0lWnGHsqhL",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151583,
      "firstname": "Kiliane",
      "lastname": "NAVIER",
      "email": "navier.kiliane@laposte.net",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/pxp4BKhXNyebugBxQmhrh",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151585,
      "firstname": "Charlotte",
      "lastname": "NEIRYNCK",
      "email": "charlotte4neirynck@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/D20pLhPOVkNwF3yqGJlo8",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151589,
      "firstname": "Julie",
      "lastname": "OST",
      "email": "julie.ost@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Yy5dtwxLQ41ujBAyaQAlG",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151592,
      "firstname": "Clémence",
      "lastname": "PAINCHART",
      "email": "clemence62590@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/HXUW-yr9zpQ_SgvNu_mTo",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151593,
      "firstname": "Antonin",
      "lastname": "PANI",
      "email": "antoninpani55@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ssB8YvZyRSsRvWAOmSXQ5",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151594,
      "firstname": "Léonard",
      "lastname": "PECOUL",
      "email": "leonardpecoull@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/S4OQss8KGl1xP2FYkg5-A",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151596,
      "firstname": "Anaïs",
      "lastname": "PERRET",
      "email": "perret.rochet@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/auTsBDGjRauquQKJBouZt",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151598,
      "firstname": "Marie Michelle",
      "lastname": "PIERRE",
      "email": "mmpierre@live.ca",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/T24strXuhGskjw35t-X-j",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151599,
      "firstname": "Anthony",
      "lastname": "PIETTE",
      "email": "anthony.piette85@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/jVrFqSxugGX5uJAdrskQV",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151600,
      "firstname": "Alice",
      "lastname": "PILLONS",
      "email": "alice.pillons@hotmail.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ZlETAS61vyoCtvGnGGt_i",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151602,
      "firstname": "Noé",
      "lastname": "POILLION",
      "email": "noe.poillion@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/OysCAW2mpmuxcf0jdtdrL",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151603,
      "firstname": "Maiween",
      "lastname": "POISSANT",
      "email": "maiweenpoissant@orange.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/sgc026jP7T7EyI1DIZISJ",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151605,
      "firstname": "Noémie",
      "lastname": "POTEAU",
      "email": "noemie.poteau@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/LTsuEtPc6vgKAQ746HK1P",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151607,
      "firstname": "Mathis-Alexandre",
      "lastname": "PYTA",
      "email": "math.741@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ij0PT4w2x-eAodTnXRcGN",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151608,
      "firstname": "Léa",
      "lastname": "QUANEAUX",
      "email": "lea.quaneaux@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/f7ciy7K4HQAPN5wP4cijJ",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151609,
      "firstname": "Olivia",
      "lastname": "QUINCHON",
      "email": "quinchon.olivia0@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/bIyMvFx7vo78uW1XtLcJj",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-01-10T18:39:01.776Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151610,
      "firstname": "Louis",
      "lastname": "RAGONS",
      "email": "louis.ragons@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/aDYCaLFCTW031sf8Fx9Ps",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151611,
      "firstname": "Angela Maryse",
      "lastname": "RAKOTONIRINA",
      "email": "angela.rakotonirina@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/7uy86nJspBDB9FUwRLh-c",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151619,
      "firstname": "Erwann",
      "lastname": "ROGER",
      "email": "e.roger59@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/7uaWuBYt8gVRb5yP18Sl8",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151621,
      "firstname": "Robin",
      "lastname": "ROUET",
      "email": "robin.rouet@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/-pNQ7YeYOxIs-UrVgut40",
      "status": "invited",
      "relations": 0,
      "points": 3000,
      "joinedOn": null,
      "lastSeen": "2022-04-02T10:28:17.903Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151622,
      "firstname": "Mathis",
      "lastname": "ROUSSEL",
      "email": "Mathis.roussel@laposte.net",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/u4bHZ2YuhZfQAVvGrRDf6",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151627,
      "firstname": "Florine",
      "lastname": "ROY",
      "email": "florine.roy@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/th8aHt7vg536xsV0XOq5b",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151629,
      "firstname": "Jeanne",
      "lastname": "RYBAK",
      "email": "jeanne.rybak@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/3VydtdbSt4xtkDckHZnbN",
      "status": "invited",
      "relations": 0,
      "points": 375,
      "joinedOn": null,
      "lastSeen": "2022-12-05T15:19:35.912Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151630,
      "firstname": "Lucy",
      "lastname": "SABINE",
      "email": "lucysabine29@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/AIowiE_8n8AYJ-IE_1lc3",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151632,
      "firstname": "Morganne",
      "lastname": "SALOMEZ",
      "email": "Morganne62@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/UPKnZq8ebAM0E_p2zNc_v",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151634,
      "firstname": "Manel",
      "lastname": "SAOUDI",
      "email": "ninalilya@orange.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/4lY6zSvyIb3mOVQvI8L1X",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151635,
      "firstname": "Elodie",
      "lastname": "SAROT",
      "email": "elodie.sarot@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/rc2az2MQhaqpli-X5U3F2",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-01-11T11:29:02.700Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151639,
      "firstname": "Camille",
      "lastname": "SEGOND",
      "email": "segond.camille@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/jsF7oArqn6QiX40eqDeLe",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151640,
      "firstname": "Camille",
      "lastname": "SEIGNEZ",
      "email": "kmilleseignez@hotmail.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/c-lHG1P7O27b6qYlZujov",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151641,
      "firstname": "Hugo",
      "lastname": "SIENER",
      "email": "hugosiener@free.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/w7IJyw8c2UI2PhsFvZVQp",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151642,
      "firstname": "ILONA",
      "lastname": "SOARES - KATANOVIC",
      "email": "ilonasoares@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Er2ZnhYuWjopk2sP1dZcE",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151645,
      "firstname": "Camille",
      "lastname": "SOUILLART",
      "email": "camillesouillart7@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/cs01ITdzQncfUZ6hxF7xF",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151646,
      "firstname": "Constance",
      "lastname": "STEMPIN",
      "email": "constance.stempin@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/uzj30cMYmqWpcCtvX1nWJ",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151647,
      "firstname": "Romain",
      "lastname": "TATOLO",
      "email": "romain.tatolo@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Hik8Jy_4B96qIiyxl4N4p",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151649,
      "firstname": "Etoile",
      "lastname": "TILMONT",
      "email": "Tilmontetoile@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Zb50NMGYRsZ3NT9JEQ4OX",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151651,
      "firstname": "Inès",
      "lastname": "TRAN",
      "email": "inestran59@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/GtJN1XUXBjodIOr7-sE4v",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151652,
      "firstname": "Chloé",
      "lastname": "VAN BRANTEGHEM",
      "email": "chloevbtg@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/rsrXqjvEi4fx42USd7ndH",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151653,
      "firstname": "Margot",
      "lastname": "VAN KEIRSBILCK",
      "email": "margotvankeirsbilck@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/pbRE51RdztwY3jhNqbh-A",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151655,
      "firstname": "Mathilde",
      "lastname": "VANDEBURIE",
      "email": "Mathilde.vdb21@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/897Pv-zx0cQ4KbbEWEain",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151659,
      "firstname": "Emeline",
      "lastname": "VERMERSCH",
      "email": "e.vermersch5908@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/sOZQ0tBNEkvgxbhnxbreN",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151660,
      "firstname": "Nathan",
      "lastname": "VERRIELE",
      "email": "nathan.verriele@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/muABGRcZ8TK9YqmS221hO",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151662,
      "firstname": "Juliette",
      "lastname": "VIVIEN",
      "email": "juliettevivien2015@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/wDkjMFFoQe8U8OdV3reiS",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151663,
      "firstname": "Marie",
      "lastname": "VOYEMANT",
      "email": "marie.voyemant1@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/k3mQJ6_M66oR7Gxt-yyvM",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151666,
      "firstname": "Elodie",
      "lastname": "WAROUDE",
      "email": "elodiewaroude2@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ha4wdkZDvGjeO51NcfmEU",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151667,
      "firstname": "Bérénice",
      "lastname": "WASZCZYNSKI",
      "email": "berenicewas2004@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/CaQ-7mMlHEeHRAgT1KX_g",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151668,
      "firstname": "Téo",
      "lastname": "WATRIN",
      "email": "teo.watrin@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/I8GDposiTH8ZHetTbE6yi",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151670,
      "firstname": "Rémi",
      "lastname": "WAVRANT",
      "email": "remiwavrant@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/VQr4eLvQOtjVRW8hQwrg0",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151671,
      "firstname": "Manel",
      "lastname": "ZAIR",
      "email": "m.zair123@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/WJ4xrB8wlGIMmfEuNVQ-k",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151395,
      "firstname": "Clémence",
      "lastname": "DEKEYSER",
      "email": "clem.dek@orange.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Jj5vgN2JyZ3rot_Y6vglN",
      "status": "invited",
      "relations": 0,
      "points": 3000,
      "joinedOn": null,
      "lastSeen": "2022-12-05T15:17:41.173Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151615,
      "firstname": "Erwan",
      "lastname": "RICHARD",
      "email": "erwan.richard05@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/IyoUmkCAiUZo3JVx45pvD",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-10-19T10:03:39.465Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151471,
      "firstname": "Coralie",
      "lastname": "GOETINCK",
      "email": "coralie.goetinck@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Q4eouWGuDCyUPZZwkCyrg",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-10-19T10:56:30.969Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 154835,
      "firstname": "Carole",
      "lastname": "BORIE",
      "email": "carole.borie@free.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/993ABeajWPmH0lNJAp9sy",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2023-01-10T15:34:44.907Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151278,
      "firstname": "Lamia",
      "lastname": "ADMI",
      "email": "lamia.adm59@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/0BIj0DOL0IBZHxta4iVTI",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151535,
      "firstname": "Doryan",
      "lastname": "LECLERCQ",
      "email": "doryan.leclercqpro@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/yxOKTYd8EXOkmVqmaW3zB",
      "status": "invited",
      "relations": 0,
      "points": 3875,
      "joinedOn": null,
      "lastSeen": "2022-04-25T09:07:32.093Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151381,
      "firstname": "Méline",
      "lastname": "CUSIN",
      "email": "m.cusin2804@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/lXZwRrQWkJrlx9U712FCC",
      "status": "invited",
      "relations": 0,
      "points": 3300,
      "joinedOn": null,
      "lastSeen": "2022-06-23T18:13:17.479Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151277,
      "firstname": "Florian",
      "lastname": "ACHIN",
      "email": "achinflorian@free.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/bFwd5BcD9fOvs_330HO9v",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151284,
      "firstname": "Cristina",
      "lastname": "ANDREI",
      "email": "andreicristina260@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ziozEMjiy9rUK01FcVsiF",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151315,
      "firstname": "Kevin",
      "lastname": "BILLARD",
      "email": "kevin.billard706@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/OTGRi1RXZhrl9hdJ_zd-t",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151373,
      "firstname": "Laurie",
      "lastname": "COURCOL",
      "email": "laurie.crl@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/WLkDJKNzhsrV3oefdWMMN",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-10-22T20:08:39.544Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151294,
      "firstname": "Nicolas",
      "lastname": "BAILLET",
      "email": "baillet.nicolas@free.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/JtwMuVBfaipYsWao9_K6x",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151658,
      "firstname": "Alyssa",
      "lastname": "VASSEUR",
      "email": "alyssavsr@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/eXDjhrL9B06tXpLsnMkn9",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-01-11T10:02:21.335Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151356,
      "firstname": "Nine",
      "lastname": "CARON",
      "email": "ninecaron.21@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/2JvmGo5jEJf0QLwUVl6xh",
      "status": "invited",
      "relations": 0,
      "points": 150,
      "joinedOn": null,
      "lastSeen": "2022-05-04T10:51:27.727Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151411,
      "firstname": "Marvin",
      "lastname": "DELZENNE",
      "email": "delzennemarvin@free.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/vcgfolKxY1wF0M5QDQ2Zf",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151365,
      "firstname": "Clotilde",
      "lastname": "CHEVALIER",
      "email": "clotilde181@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/rHsPwgjqhs2zFIpbAJ-gA",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151523,
      "firstname": "Romy",
      "lastname": "LAMBLIN",
      "email": "romyariel@hotmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/vP40HRqOeyoPk5kYbjHF5",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-05-10T09:07:13.607Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151313,
      "firstname": "Camille",
      "lastname": "BIANCHI",
      "email": "bianchi.camille@live.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/n67y67j7DoGeFFGCohgcz",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151288,
      "firstname": "Eudoxie",
      "lastname": "BACARISSE",
      "email": "eudoxbcs@live.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/k7N9uJ-Qu1v_1QSZAid1X",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-01-27T13:08:59.920Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151657,
      "firstname": "Florentin",
      "lastname": "VANSTAEVEL",
      "email": "florentin.vanstaevel@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/mKpf7ct0mCvl_8BfONQOC",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-01-10T14:54:51.479Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151590,
      "firstname": "Charles-Edouard",
      "lastname": "OUDAR",
      "email": "ce.oudar@hotmail.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/510IQqCU3PM3wJtw51cYq",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151541,
      "firstname": "Gaspard",
      "lastname": "LEFEVRE",
      "email": "gaspard.lfvre@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Xg6UJw2Ksc1biSBvd8TGG",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151623,
      "firstname": "Lola",
      "lastname": "ROUSSELLE",
      "email": "lola.rousselle@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/DPkMj6FNKRYqB0BT48lmS",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151428,
      "firstname": "Valentine",
      "lastname": "DOUAY",
      "email": "valentine.douay@hotmail.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/9eM6ImGnlIWARv_QsJxOw",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151439,
      "firstname": "Bérénice",
      "lastname": "DUMORTIER",
      "email": "madeliaberenice1@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/PNIgb5xNLDzgm2Ddokd-u",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151552,
      "firstname": "Gwenn",
      "lastname": "LEPLAE",
      "email": "gwenn.leplae@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/qw_tmiiDU34F3QBf_uGWy",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151290,
      "firstname": "Florine",
      "lastname": "BACQUET",
      "email": "florine260104@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/CMpQNbUxipTaNGpbkK3Tw",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151301,
      "firstname": "Lucie",
      "lastname": "BEAU",
      "email": "beau.lucie.59@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/lL4dSCR1UvFMOaXbB3lHh",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151310,
      "firstname": "Valentine",
      "lastname": "BERNARD",
      "email": "valentine.bernard2004@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/a31Xj8C-GlppytcG9oVhB",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151308,
      "firstname": "Axelle",
      "lastname": "BERNARD",
      "email": "axelle.bernard@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/2b37Z1OJj__bBZCl84eIN",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2023-03-02T14:09:11.439Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151350,
      "firstname": "Alicia",
      "lastname": "CABARET",
      "email": "aliciacabaret9@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/F8z6FhWKiryhX1NTojp80",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151329,
      "firstname": "Zoélie",
      "lastname": "BOUILLAUT",
      "email": "zoelie.bouillaut@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ATVkx23rtKiOtbFUZgIum",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151333,
      "firstname": "Ayoub",
      "lastname": "BOURGUIA",
      "email": "bouguia.ayoub@hotmail.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/hEbLO7-xeDvse-e0zaPS1",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151342,
      "firstname": "Victoire",
      "lastname": "BRIET",
      "email": "Vic.briet@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/2de-1wRRqAHG-p4TXmDgP",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151359,
      "firstname": "Eugénie",
      "lastname": "CARPENTIER",
      "email": "Eugenie.carpet@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/CyTZMNn1mtGMQq0MTYbdd",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151363,
      "firstname": "Salomé",
      "lastname": "CHATELAT",
      "email": "schatelet@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/wy8jKic82AzkIlcIbSh5j",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151369,
      "firstname": "Capucine",
      "lastname": "CLEMENT",
      "email": "capuclem0730@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Uw_IBjxORPlbh9p7hP4au",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151378,
      "firstname": "Mallaury",
      "lastname": "COUTTENIER",
      "email": "couttenierm2808@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ugzXEy6I4SuvQA82qvA2O",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151382,
      "firstname": "Antoine",
      "lastname": "CUVILLIER",
      "email": "Cuvillierantoine@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/v68jOYOH6At3Z_U2LVF3Z",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151376,
      "firstname": "Lou",
      "lastname": "COUSIN",
      "email": "loucousin24@orange.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Kp-SN-RzN6K3lz5yli1Ch",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-10-19T10:22:06.654Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151403,
      "firstname": "Maxence",
      "lastname": "DELEDICQUE",
      "email": "maxence08del@outlook.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/0a9cQxRvzX5HtX1bVomjs",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151399,
      "firstname": "Marceau",
      "lastname": "DELATTRE",
      "email": "marceaudelattre@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/t9uLCfJQIuhodigl22HfG",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151407,
      "firstname": "Mathilde",
      "lastname": "DELESTRE",
      "email": "Delestre.mathilde@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/MUnepc05_CNfPXHj8cty9",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151414,
      "firstname": "Maxence",
      "lastname": "DESCAMPS",
      "email": "Maxence.dcps@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/q--M4392APsBOAzunu6ne",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151423,
      "firstname": "Mathilde",
      "lastname": "DIMANCHE",
      "email": "Mathilded648@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/kO3CJyfMKlre1QOmoDWok",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151427,
      "firstname": "Lise",
      "lastname": "DOSTATNI",
      "email": "Lisedostatni@yahoo.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/51uwUweE_3Kh8uyeWZecN",
      "status": "invited",
      "relations": 0,
      "points": 100,
      "joinedOn": null,
      "lastSeen": "2022-11-18T08:52:13.080Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151451,
      "firstname": "Josephine",
      "lastname": "EUGENE",
      "email": "josephine.eugene21@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/WUfJg8ZTPrzUfQAJ83BCV",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2023-02-17T16:39:18.869Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151464,
      "firstname": "Shirley",
      "lastname": "GAILLET",
      "email": "shirley.gaillet@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/UyWIXpZ_qEesJr0oRqPhI",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151472,
      "firstname": "Arij",
      "lastname": "GOMRI",
      "email": "arij.gomri59@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/TfeLMRkwhcZXas0nhj3aR",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151474,
      "firstname": "Loulia",
      "lastname": "GONZALEZ",
      "email": "louliagonzalez@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/B4QG4IFhvMhQOw4bDqQ5e",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151493,
      "firstname": "Clarisse",
      "lastname": "HOGMOUT",
      "email": "chogmout@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/cTE4V0AabYJ7QA_3GMiFF",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151489,
      "firstname": "Lindsay",
      "lastname": "HENNECART",
      "email": "lindsay.hennecart@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/eeVbCo6rMTlK7QbGi11xE",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151498,
      "firstname": "Fabian",
      "lastname": "HOUPLIN",
      "email": "fabianhouplin@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/FrUioNaUxFy9PpSNgA4EY",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151512,
      "firstname": "Alix",
      "lastname": "JUDAS",
      "email": "Alixjudas31@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/-O5JOcRbiI1JGIzizyAOz",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151510,
      "firstname": "Hugo",
      "lastname": "JORDAN",
      "email": "hugojordan2004@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/s5gZrD-2GopiCdykYX8WD",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151525,
      "firstname": "Romane",
      "lastname": "LANSCOTTE",
      "email": "Romane.lanscotte@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/QcaAxXiG9GlBHe84Cp1q7",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151528,
      "firstname": "Léa",
      "lastname": "LAVALLEE",
      "email": "Lavallee.lea62@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/G3AdwSQkZMf9vJLtGPvbX",
      "status": "invited",
      "relations": 0,
      "points": 2000,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151539,
      "firstname": "Maxime",
      "lastname": "LEFEBVRE",
      "email": "maxime.lefebvre62@hotmail.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/FNodDrAcQiAgHbd2rWwDO",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151548,
      "firstname": "Lilou",
      "lastname": "LEMAIRE",
      "email": "lilou62232@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/MfolvxHF7dndbxRtWTHET",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151553,
      "firstname": "Océane",
      "lastname": "LEROY",
      "email": "oceaneleroy102@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/k6Ku5EDRIQ-uR6a1TqpZg",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151567,
      "firstname": "Charlotte",
      "lastname": "MAYOLLE",
      "email": "chachamay@yahoo.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/P8NPUqc4JgtKacZ4kySss",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151556,
      "firstname": "Camille",
      "lastname": "LIMOUSIN",
      "email": "camilloul.ld@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/iqYYPM4P0fcYwXoUnhXsW",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151606,
      "firstname": "Coline",
      "lastname": "POUCHAIN",
      "email": "cocopouchain@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/i8Izg62X2lzh-zvlaD7Xt",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151613,
      "firstname": "Candice",
      "lastname": "REGNAULT",
      "email": "candice.regnault@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/V88WylN-z5CnYYe1LRHJ8",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151624,
      "firstname": "Pauline",
      "lastname": "ROUSSELLE",
      "email": "rousselle.pauline2003@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/4IwRWxkk_InwhQj0KRXqJ",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151637,
      "firstname": "Jean",
      "lastname": "SCHRAEN",
      "email": "schraenjea1@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/NtnyRgerXx2beM7Ndvob8",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151648,
      "firstname": "Théo",
      "lastname": "TILLOLOY-TERNOIS",
      "email": "theo2606.tl@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/txgqJo_zOx1SsyrkbWJym",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151650,
      "firstname": "Killyan",
      "lastname": "TOUAT",
      "email": "kikstouat@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/4gsftkrCE3AZioRIR5xEL",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151661,
      "firstname": "Samuel",
      "lastname": "VIGOUROUX",
      "email": "vigouroux.sam.pro@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/78CKAN4V8QKy62i-N1zRi",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151664,
      "firstname": "Angèle",
      "lastname": "WALRAND",
      "email": "angelewalrand1@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/GcWFTw7mrN_4PLnjoaw7a",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151669,
      "firstname": "Sophie",
      "lastname": "WATTELLE",
      "email": "sophie.wattelle11@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ZHSCO4LKPqrQ71cnomrbc",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151584,
      "firstname": "Jeanne",
      "lastname": "NEBLING",
      "email": "jeanne.nebling@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ikkAa4pkuhnXNlv7PMrk2",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151346,
      "firstname": "Anaïs",
      "lastname": "BUGNICOURT",
      "email": "bugnicourtanais@orange.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/cqaKPgFxvFcx01IQB2Fat",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151625,
      "firstname": "Arthur",
      "lastname": "ROUSSEL-THEETEN",
      "email": "arthur.rousseltheeten@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/8BVQhJCX9FFmiFkMQVYmx",
      "status": "invited",
      "relations": 0,
      "points": 150,
      "joinedOn": null,
      "lastSeen": "2022-05-21T20:08:53.148Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151314,
      "firstname": "Nicolas",
      "lastname": "BIGAND",
      "email": "nicolas.bigand@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/hhyKfbBvumBnLhEcE_BGe",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151280,
      "firstname": "Anfal",
      "lastname": "AL ALOOSI",
      "email": "anfalalalousi@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/keiNh0EcCNngvAtTBAej7",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151293,
      "firstname": "Marion",
      "lastname": "BAESKENS-CHARLIER",
      "email": "marion-baeskens@hotmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/KwWIx2RWZW2npJdMZic6E",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151325,
      "firstname": "Axelle",
      "lastname": "BONNARD",
      "email": "axellebon15@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/TFVsID3nwU1cx6gPYl88q",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151344,
      "firstname": "Mélanie",
      "lastname": "BRIQUET",
      "email": "melanie.briquet@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ZCv482r13TsZqlY7Q13pV",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151348,
      "firstname": "Axele",
      "lastname": "BUTEL",
      "email": "axelebutel127@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/zeFMrhdtcPNZ9gDYoMQxh",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151375,
      "firstname": "Julie",
      "lastname": "COUSIN",
      "email": "julie_59262@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/UttkDYRV9hfiWYVcj0Myw",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151360,
      "firstname": "Valentine",
      "lastname": "CARPI",
      "email": "valentine.carpi@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/47EpXIJarOYeXL-ZvWlnH",
      "status": "invited",
      "relations": 0,
      "points": 4100,
      "joinedOn": null,
      "lastSeen": "2022-05-30T08:28:27.272Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151404,
      "firstname": "Juliette",
      "lastname": "DELEGORGUE",
      "email": "juliette.delegorgue@laposte.net",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/QIC1UoBlfrNUVKvoDosXT",
      "status": "invited",
      "relations": 0,
      "points": 1050,
      "joinedOn": null,
      "lastSeen": "2022-11-02T19:17:39.729Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151412,
      "firstname": "Nicolas",
      "lastname": "DEMAN",
      "email": "nikosdu59112@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/9wBCDD_oEb3oqca4F52zu",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151431,
      "firstname": "Alexis",
      "lastname": "DROUVIN",
      "email": "alexis.80@live.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/WW6jUaSjBDauWFrOLjxjh",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151449,
      "firstname": "Aurélie",
      "lastname": "ESTIEVENAERT",
      "email": "aurelie.estievenaert@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/kEkekBZxMvwD-nfUhI_fb",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151450,
      "firstname": "Camille",
      "lastname": "ETIÉ",
      "email": "etiecamille29@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/oRHt9Ap_e_RKCOiZqQ5an",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151484,
      "firstname": "Maxime",
      "lastname": "HAIGNERÉ",
      "email": "maxime.haignere2001@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/jrRWa1rCJDdEFJF_KoXqW",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151499,
      "firstname": "Eva",
      "lastname": "HOUVENAGHEL",
      "email": "evahouve62840@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Yhhc1QvPBoJW04vf9LTO8",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151538,
      "firstname": "Valentine",
      "lastname": "LECROIX",
      "email": "valentine.lecroix@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/hTCfgSX0TQckARsXvIMwQ",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151537,
      "firstname": "Louis",
      "lastname": "LECOLIER",
      "email": "louis.lecolier12@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/8wX6295tOTLG9C4JSlzwE",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151586,
      "firstname": "Sylvie",
      "lastname": "NGUYEN",
      "email": "syl.nguyen26@hotmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/msIGLAwH7qekyteRFthY_",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151588,
      "firstname": "Zoé",
      "lastname": "OMBREDANE",
      "email": "zoe.ombredane@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/9uRwZ3Lx8mT0Bz3ZF9GFx",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151582,
      "firstname": "Robin",
      "lastname": "NARGUET MAGNIER",
      "email": "robin.narguetmagnier@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/uiStpRYIzI622smIiMJzj",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151587,
      "firstname": "Margaux",
      "lastname": "NOYELLE",
      "email": "margaux.noyelle@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/chWCOXs5gVIWWe1gi-AKL",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151617,
      "firstname": "Honorine",
      "lastname": "RIGNON",
      "email": "honorine.rignon.veah@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/JMvruJ_xH5AeFI-puGpmD",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151595,
      "firstname": "Mathilde",
      "lastname": "PENNINCK",
      "email": "mathilde.penninck@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/fo8L-Y5sPN8Sd5oFmBQ2J",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151638,
      "firstname": "Clémentine",
      "lastname": "SCHWENDER",
      "email": "clementineschwender@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/tSUQOWpBSBJsCl8DJIa_r",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151656,
      "firstname": "Pauline",
      "lastname": "VANQUATHEM",
      "email": "pauline.vanquathem@orange.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/D_xBBCeESwzEGOzf2P32I",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-05-05T09:03:15.543Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151644,
      "firstname": "Amandine",
      "lastname": "SOUDANT",
      "email": "amandine.soudant@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/v5Na_DyHWWlJJSQeLo9a4",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151575,
      "firstname": "Marine",
      "lastname": "MONIEZ",
      "email": "marinemoniezpro@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/1ijdJDypz7Ejd_k_CLSUQ",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151534,
      "firstname": "Guillaume",
      "lastname": "LECLERCQ",
      "email": "guillaume.leclercq62380@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/eByoI1cuixtL9hXuyfG6a",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151402,
      "firstname": "Baptiste",
      "lastname": "DELBREUVE",
      "email": "baptiste.delbreuve@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/TC4oG7zyBl-DF9M0lRi1N",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151502,
      "firstname": "Emma",
      "lastname": "INGELAERE",
      "email": "emma.ingelaere04@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/eYPNOzjmBLoMERzrjCsse",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151354,
      "firstname": "Valentin",
      "lastname": "CAMBIER",
      "email": "cambiervalentin.cv@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/gufl0gguosuX9da-ZAjaG",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151631,
      "firstname": "Noémie",
      "lastname": "SAGOT",
      "email": "noemiesagot@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/0yM09fx_wRHqD76jitBYh",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151322,
      "firstname": "Bélantine",
      "lastname": "BOEZ",
      "email": "belantineboez@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/54ikZPKkw1hbGG-8_8e10",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151483,
      "firstname": "Flavie",
      "lastname": "HACHE",
      "email": "flavie.hch@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/lr9SXH2JSRHfq59qZPu1s",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151358,
      "firstname": "Lucie",
      "lastname": "CARPENTIER",
      "email": "lucie.carpentier@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/UNIbNh3I0ON_9rNdqqnkF",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-10-26T18:25:32.495Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151355,
      "firstname": "Anthony",
      "lastname": "CARON",
      "email": "anthony-caron6@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/WmSNJV8E9bip4TqhYiWCt",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151466,
      "firstname": "Léa",
      "lastname": "GAQUERE",
      "email": "gaquerelea62@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/gPZs2KgljJUOyB1ZH4cTy",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-01-10T14:05:25.245Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151591,
      "firstname": "Justine",
      "lastname": "PAILLEUX",
      "email": "Justinepailleux02@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/5vQmzsYBWkZRoxujPn-22",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2023-01-17T11:57:13.658Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151281,
      "firstname": "Safya",
      "lastname": "ALLOUCHE",
      "email": "safya.allouche@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/6o4m3iSBW6DLREXSO_k3g",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-01-10T14:06:26.384Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151282,
      "firstname": "Maeva",
      "lastname": "AMBROISY",
      "email": "Ambroisy.maeva@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/NWgTP3Bl8toFrgOjuTpOS",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151283,
      "firstname": "Mathis",
      "lastname": "AMICOLA",
      "email": "mathisamicola38@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/rxOn7XnUZgqc8fXACsxec",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151285,
      "firstname": "Adrien",
      "lastname": "ANQUEZ",
      "email": "anquezadrien3@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/rSmtffxcfVaL7DxfOAZuF",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151286,
      "firstname": "Camila",
      "lastname": "AOUADI",
      "email": "camilaaouadi@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/55Y2Zn6y78xQJeJL28k-a",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151289,
      "firstname": "Lana",
      "lastname": "BACHELET",
      "email": "lana.bcht@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/SoZhGl01Bktp_r1iNBipC",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151291,
      "firstname": "Quentin",
      "lastname": "BACQUEVILLE",
      "email": "Quentin.bacqueville@hotmail.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/KgdL878xXPnHijcb6q7fs",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151292,
      "firstname": "César",
      "lastname": "BAERT",
      "email": "cesar.baert@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/8gFItecCp9eIy5s7zLa5B",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151295,
      "firstname": "Marie",
      "lastname": "BALICKI",
      "email": "marie.b62790@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/7C6fesVwveupzsx2H9ps6",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151296,
      "firstname": "Emma",
      "lastname": "BAMMEZ",
      "email": "E.bammez3@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/GEf9aIphG5THVRl3ORL2x",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151297,
      "firstname": "Romain",
      "lastname": "BARJONNET",
      "email": "romainbarjonnet76@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/-euX9nGJGX4IpqAQLf4Ll",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151298,
      "firstname": "Caroline",
      "lastname": "BASILE",
      "email": "caroline.basile@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/z22C1RMxnxWyGyH3HOR52",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151299,
      "firstname": "Marie",
      "lastname": "BASTIEN",
      "email": "mariebastien.pro@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/vO2NUierv8lAYkbEL0yx0",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151300,
      "firstname": "Maïlys",
      "lastname": "BAZZARO",
      "email": "mailys.bazzaro@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/luy7pxvARSlcBqtsOMJe-",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151302,
      "firstname": "Victor",
      "lastname": "BELHANAFI",
      "email": "victor.belhanafi.12@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/TZTYajZpNn7V_WwH27dyk",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151303,
      "firstname": "Marie",
      "lastname": "BELK",
      "email": "belkmarie@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ZgZdEBmoo0QUCTmPRQalE",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151304,
      "firstname": "CHARLOTTE",
      "lastname": "BELLAICHE SROT",
      "email": "charlotte.bellaiche-srot@orange.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Q9OrJf9LOv68vEfUyRK-l",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151305,
      "firstname": "Mehdi",
      "lastname": "BENAZZA",
      "email": "mbenazza18@yahoo.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/YScPRbfHOQVnieTTEx66J",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-01-10T14:04:15.516Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151307,
      "firstname": "Axel",
      "lastname": "BERMONT",
      "email": "Bermont.axel@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/TvURRIZRd7emtpxoxGQqv",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151311,
      "firstname": "Louane",
      "lastname": "BERTELOOT",
      "email": "berteloot.louane@live.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/GyIhrIE5WvFPFUjrNJv4b",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151312,
      "firstname": "Marie",
      "lastname": "BEUSCART",
      "email": "Marie.beuscart2@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/tCQ7yF3-2MFrFfKR1tWa4",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151316,
      "firstname": "Léna",
      "lastname": "BILLAS MENDES",
      "email": "lenabillas@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/nZ1lLP7UVztftBYv1e-qJ",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151317,
      "firstname": "Valentin",
      "lastname": "BLAIRET",
      "email": "valentin.blairet@hotmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/PhWe-rsSH3D29aY-wqaLD",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151318,
      "firstname": "Mélody",
      "lastname": "BLAISE",
      "email": "blaise.melodystmg@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/-l7IRj8kQ1utNYi77PTmg",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151320,
      "firstname": "Ronan",
      "lastname": "BLONDEL",
      "email": "ronan.blondel@orange.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/QgZCV3Ta5Sl5ZSn7539jq",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151323,
      "firstname": "Valentine",
      "lastname": "BOMBEKE",
      "email": "vbombeke@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/lzaD327bSvX_XzdNusTi_",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151324,
      "firstname": "CLARA",
      "lastname": "BONNABEAU",
      "email": "clara.bonnabeau@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/xwaEcQfUPW31Sbwg7lE0P",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151326,
      "firstname": "Angélique",
      "lastname": "BONTE",
      "email": "bonte.angelique@live.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/O2cAq8sQitihkQOH-wgQf",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151328,
      "firstname": "Arthur",
      "lastname": "BONTE",
      "email": "bonartbonttart@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Cnx6J4nBlO79Nx4x25P_F",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151332,
      "firstname": "Magalie",
      "lastname": "BOURDETTES AVANDJE",
      "email": "Bourdettesmagalie@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/mPwMb3nvZ_vR5ZxdUB42J",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151335,
      "firstname": "Aroun",
      "lastname": "BOUTEBZA",
      "email": "aroun.btz@hotmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/1KRezpv-9Ut6ZczHtIiCP",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151336,
      "firstname": "Elise",
      "lastname": "BRACHOT",
      "email": "elisebrachot@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/aBC0SJrboyKQPnaymhKGX",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151337,
      "firstname": "Julia",
      "lastname": "BRACHOT",
      "email": "juliabrachot@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/IJWKjFDJrONCh_feAaau6",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151339,
      "firstname": "Anaïs",
      "lastname": "BREEM",
      "email": "Breem.anais@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/LLktmnR--XBV_mzDKdrGs",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151340,
      "firstname": "Lola",
      "lastname": "BRICE",
      "email": "lolbriche@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/n5rt8yBXGF5j1CdcHSbqi",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151341,
      "firstname": "Florine",
      "lastname": "BRIERE",
      "email": "briereflorine28@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/hv0DRaL4aS4cV9GlHjCNs",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151347,
      "firstname": "Marie",
      "lastname": "BURTON",
      "email": "marieburton@orange.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/0vrRSxIV5RrCmY4PDIAX2",
      "status": "invited",
      "relations": 0,
      "points": 50,
      "joinedOn": null,
      "lastSeen": "2022-07-19T11:21:37.898Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151349,
      "firstname": "Perrine",
      "lastname": "BUTIN",
      "email": "Perrine.butin.dacquin@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/RmwarqettDvd2awsfqAIY",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151351,
      "firstname": "Odeline",
      "lastname": "CACHEUX",
      "email": "odecacheux@yahoo.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/8VWFwOdAm-cwkTUeU8uKH",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151352,
      "firstname": "Rémi",
      "lastname": "CALLAERT",
      "email": "remii.callaert@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/LMsZqQfwyrjVI094KeoxK",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151353,
      "firstname": "Adam",
      "lastname": "CAMBELIN",
      "email": "acambelin@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/eMGVdMQs8Pn4DBGuPZ4-H",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151361,
      "firstname": "Candice",
      "lastname": "CAUCHOIS",
      "email": "candicecauchois@live.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ck7KY60E3BtJLcse0rDB_",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-10-19T09:59:29.124Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151362,
      "firstname": "Emma",
      "lastname": "CHARLEY",
      "email": "Emmacharleyts3@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Hw4AVETyGNqSWD87OvORA",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151364,
      "firstname": "Paul",
      "lastname": "CHAUVIRÉ",
      "email": "paul.chauvire@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/058jn-jn_D6OG-EUQPRbR",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151366,
      "firstname": "Amandine",
      "lastname": "CHOCHOIS",
      "email": "amandine.chochois@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/rRGL1dDZxetV20bgd8BEQ",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151367,
      "firstname": "Thomas",
      "lastname": "CHOLLET",
      "email": "Chollet.thomas@free.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/OvoG7Dm1UnwthRvD_ts4c",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151368,
      "firstname": "Anthony",
      "lastname": "CHOQUERIAUX",
      "email": "antony.choqueriaux@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ZsAv69N9RWEAY2muhFwVk",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151370,
      "firstname": "Claire",
      "lastname": "COLOSIMO",
      "email": "claire.colosimo@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/bM88E_OA0Lq_kltAVs3Vi",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151371,
      "firstname": "Lidy",
      "lastname": "CORAL",
      "email": "lidy.coral08@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/DMit3J2IuM8Kf8nAVISzo",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151372,
      "firstname": "Nicolas",
      "lastname": "CORDIER",
      "email": "Nicolascordier80@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/p-aGjoDSrVzKWjigHTe-l",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151374,
      "firstname": "Lubin",
      "lastname": "COUSAERT",
      "email": "cousaertlubin@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/7zpOl0KH9W-wPxrX7qV4k",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151379,
      "firstname": "Adrien",
      "lastname": "COUVERCELLE",
      "email": "couvercellea@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/QDSpCOF-eXd4Dnbquaz7J",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151384,
      "firstname": "Théo",
      "lastname": "DANCOINE",
      "email": "theo.dancoine1@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/-Fru7oO4spOKpgN6HmlR2",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151385,
      "firstname": "Camille",
      "lastname": "DAO",
      "email": "camille.dao13@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/67bZbWpYURWYM9tPxhT59",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151386,
      "firstname": "Madeleine",
      "lastname": "DAULE-SIGAUT",
      "email": "madeleine.sigaut@hotmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Tu-SUvC4PgCQ8greYquA1",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151388,
      "firstname": "Alexis",
      "lastname": "DE PANDIS",
      "email": "Alexis.depandis@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/exNof4EeKAUBgP2_MczoA",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151390,
      "firstname": "Victoria",
      "lastname": "DEBRUYNE",
      "email": "victoriadby29@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/uubtx9VP-6XpbhE_l0mit",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151392,
      "firstname": "Anaïs",
      "lastname": "DECOUVELAERE",
      "email": "adecouvelaere1@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/WhoXC5eeSIGnSn26krbBw",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151393,
      "firstname": "Amélie",
      "lastname": "DEGUFFROY",
      "email": "amelie.deguffroy@hotmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/e21Y220Ad5u0QWQJoRlEG",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151394,
      "firstname": "Bérénice",
      "lastname": "DEHAUDT",
      "email": "berenice.dehaudt@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/fYO8AefhZHZjvuBbvi7vx",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151397,
      "firstname": "Léa",
      "lastname": "DELANNOY",
      "email": "leadlny62340@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/2MZ3bxB06kyYbWqapN9LR",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151398,
      "firstname": "Carla",
      "lastname": "DELATTRE",
      "email": "carla.delattre@outlook.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/rIt3sBSSD0FBYqee6Sgwu",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2022-02-01T10:05:20.635Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151401,
      "firstname": "Chloé",
      "lastname": "DELAUDIER",
      "email": "chloedelaudier@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/NFPYb20I26WYLwgKaHCAf",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151405,
      "firstname": "Jeanne",
      "lastname": "DELEPIERRE",
      "email": "Jeanne.delepierre@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/hW6rYk9LGGUp3RfCYa40r",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151406,
      "firstname": "Constance",
      "lastname": "DELESPIERRE",
      "email": "Constancedelespierre@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/DiaJERt5HHuiCtj0E1Y2P",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151408,
      "firstname": "Clara",
      "lastname": "DELESTREZ",
      "email": "claradelestrez@orange.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/FrEexb6xpPGZX_g5xOMuW",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151409,
      "firstname": "Alice",
      "lastname": "DELHAYE DUMONT",
      "email": "alice.delhaye@outlook.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/cIT8jS286gEJnDiJ11um4",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151413,
      "firstname": "Eva",
      "lastname": "DENIS",
      "email": "eva.denis@isoptique.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/gbNpDEDpq-4yLBpP6ncLW",
      "status": "invited",
      "relations": 0,
      "points": 5000,
      "joinedOn": null,
      "lastSeen": "2022-12-05T15:13:12.626Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151416,
      "firstname": "Gail",
      "lastname": "DESFONTAINES",
      "email": "gaild62@hotmail.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/LxZaQnaliroMHLrUAOoqp",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151417,
      "firstname": "Matthias",
      "lastname": "DESGARDIN",
      "email": "matthias.desgardin@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/9BQCkLl8z53X0HxrCBm8x",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151418,
      "firstname": "Jeanne",
      "lastname": "DESSEIN",
      "email": "dessein4@icloud.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/AMYGOtoYaNkoJ4xBIhUzN",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151419,
      "firstname": "Edgar",
      "lastname": "DEVERGNIES",
      "email": "devergniesedgar14@yahoo.fr",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/ex5UXELL9oQnSHux8IR79",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151420,
      "firstname": "Elise",
      "lastname": "DEVISSCHER",
      "email": "elise.devisscher60@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/L7jt1Ybi_mZEdOsOl02QQ",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151422,
      "firstname": "Flavie",
      "lastname": "DHONT",
      "email": "flaviedhont1@hotmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/NpYdaMBtTIVk5OwpnXpwk",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": null,
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    },
    {
      "helperId": 151424,
      "firstname": "Simon",
      "lastname": "DIMARCQ",
      "email": "Simon25dimarcq@gmail.com",
      "profilePictureUrl": "https://magma-pictures-production.s3.eu-west-3.amazonaws.com/Mcu3YYLjN9W-sZh3-LEIl",
      "status": "invited",
      "relations": 0,
      "points": 0,
      "joinedOn": null,
      "lastSeen": "2023-01-24T14:36:23.447Z",
      "tagIds": [],
      "userCriteria": [
        { "criteriaId": 160, "answerKey": null, "value": null },
        { "criteriaId": 139, "answerKey": null, "value": null }
      ],
      "score": 0,
      "activeRelationsCount": 0,
      "challengesCount": 0,
      "referralsCount": 0
    }
  ]
}

export default data