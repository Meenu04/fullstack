package mobilerecharge.meenakshi.service.imp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mobilerecharge.meenakshi.dto.request.PlanRequest;
import mobilerecharge.meenakshi.dto.response.PlanListResponse;
import mobilerecharge.meenakshi.dto.response.PlanResponse;
import mobilerecharge.meenakshi.model.Plan;
import mobilerecharge.meenakshi.repository.PlanRepository;
import mobilerecharge.meenakshi.service.PlanService;

@Service
public class PlanServiceImpl implements PlanService {

    @Autowired
    private PlanRepository PlanRepository;

    @Override
    public PlanResponse createPlan(PlanRequest event) {

        var eve = Plan.builder()
                        .planname(event.getPlanname())
                        .description(event.getDescription())
                        .price(event.getPrice())
                        .data(event.getData())
                        .validity(event.getValidity())
                       .build();

        PlanRepository.save(eve);

        return PlanResponse.builder().message("Plan added successfully").build();
    }
@Override 
public PlanListResponse getAllPlan(){
    List<Plan> plan=PlanRepository.findAll();
    return PlanListResponse.builder().plans(plan).build();
}
   


}