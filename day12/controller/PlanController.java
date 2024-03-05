 package mobilerecharge.meenakshi.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import mobilerecharge.meenakshi.dto.request.PlanRequest;
import mobilerecharge.meenakshi.dto.response.PlanListResponse;
import mobilerecharge.meenakshi.dto.response.PlanResponse;
import mobilerecharge.meenakshi.model.Plan;
import mobilerecharge.meenakshi.service.PlanService;
import mobilerecharge.meenakshi.utils.MyConstant;


@RestController
@RequestMapping(MyConstant.PLANS)
@PreAuthorize("hasRole('USER')")
@RequiredArgsConstructor
public class PlanController {

    private final PlanService planservice;

    @PreAuthorize("hasAuthority('user:create')")
    @PostMapping("/plans")
    public ResponseEntity<?> createEvents(@RequestBody PlanRequest planrequest){
        PlanResponse response = new PlanResponse();

        try{
            response = planservice.createPlan(planrequest);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
    @GetMapping("/allplan")
    public ResponseEntity<?> getAllPlan(){
        PlanListResponse planlistresponse=new PlanListResponse();
        try{
            planlistresponse=planservice.getAllPlan();
            return new ResponseEntity<>(planlistresponse,HttpStatus.CREATED);
        }
        catch(Exception e){
        return new ResponseEntity<>(planlistresponse,HttpStatus.EXPECTATION_FAILED); 
    }
    }


}