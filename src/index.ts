import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import * as dotenv from "dotenv";
import { errorHandler } from "./middleware";
import { RegisterRoutes } from "../build/routes";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT || 4000;
const LOGGING_LEVEL = process.env.LOGGING_LEVEL || "tiny";

const app: Application = express();

app.use(express.json());
app.use(morgan(LOGGING_LEVEL));
app.use(
  "/swagger-ui",
  swaggerUi.serve,
  async (_req: Request, res: Response) => {
    return res.send(
      swaggerUi.generateHTML(await import("../build/swagger.json"))
    );
  }
);

RegisterRoutes(app);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(
    `
    ********* TurboEncalculator API *********
    *****************************************
    
    *   Environment:    ${process.env.NODE_ENV}      
    *   Logging level:  ${process.env.LOGGING_LEVEL} 
    *   Debug:          ${process.env.DEBUG}         
                                        
    *   Server is running on port ${PORT}...
    
    *****************************************
    *****************************************
    `
  );
});
