import { Controller, Get, Route, Tags } from "tsoa";
import { HealthCheckResponse } from "../models/healthCheckResponse";

@Route("health-check")
@Tags("Health Check")
export class HealthCheckController extends Controller {
  @Get("/")
  public async getHealth(): Promise<HealthCheckResponse> {
    return {
      status: "Boiler running...",
    };
  }
}
