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
import mobilerecharge.meenakshi.dto.request.PaymentRequest;

import mobilerecharge.meenakshi.dto.response.PaymentListResponse;
import mobilerecharge.meenakshi.dto.response.PaymentResponse;


import mobilerecharge.meenakshi.service.PaymentService;



@RestController
@RequestMapping("/events")
@PreAuthorize("hasRole('USER')")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentservice;

    @PreAuthorize("hasAuthority('user:create')")
    @PostMapping("/addpay")
    public ResponseEntity<?> createEvents(@RequestBody PaymentRequest payrequest){
        PaymentResponse response = new PaymentResponse();

        try{
            response = paymentservice.createPayment(payrequest);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
    @GetMapping("/allpay")
    public ResponseEntity<?> getAllPay(){
        PaymentListResponse paylistresponse=new PaymentListResponse();
        try{
            paylistresponse=paymentservice.getAllPayment();
            return new ResponseEntity<>(paylistresponse,HttpStatus.CREATED);
        }
        catch(Exception e){
        return new ResponseEntity<>(paylistresponse,HttpStatus.EXPECTATION_FAILED); 
    }
    }

   
}