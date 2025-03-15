import cors from "cors";

export const configureCors = () => {
  return cors({
    //origin
    origin: (origin, callback) => {
      const allowedOrigin = [
        "http://localhost:3000",
        "https://customdomain.com",
      ];

      if (!origin || allowedOrigin.indexOf(origin) !== -1) {
        callback(null, true); //giving permission
      } else {
        callback(new Error("Not allowed by cors"));
      }
    },

    methods :['GET', 'POST', 'PUT', 'DELETE'],

    allowedHeaders:[
        'Content-Type',
        'Authorization',
        'Accept-Version'
    ],

    exposedHeaders:[
        'X-Total-count', 'Content-Range'
    ],
    credentials:true
,
preflightContinue:false,
maxAge:600,
optionsSuccessStatus:204
  });
};
