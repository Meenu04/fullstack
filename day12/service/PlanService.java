package mobilerecharge.meenakshi.service;

import mobilerecharge.meenakshi.dto.request.PlanRequest;
import mobilerecharge.meenakshi.dto.response.PlanListResponse;
import mobilerecharge.meenakshi.dto.response.PlanResponse;


public interface PlanService {
    PlanResponse createPlan(PlanRequest plan);
    PlanListResponse getAllPlan();
}